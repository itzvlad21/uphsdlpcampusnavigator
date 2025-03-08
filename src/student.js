import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    500
);

camera.position.set(0, 250, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(new THREE.Color(0xF4F4F4));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

const ambientLight = new THREE.AmbientLight(0xf6f6f6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 3);
directionalLight.position.set(10, 35, 50);
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.dampingFactor = 1;
controls.enableZoom = true;
controls.zoomSpeed = 2;
controls.minDistance = 120;
controls.maxDistance = 300;
controls.enablePan = false
controls.maxPolarAngle = Math.PI / 2.5;
controls.update();

const locations = window.locationsData.locations; // Gets all the Locations Data (/js/locations.js)
const hotspots = window.locationsData.hotspots; // Gets all the Hotspots Data (/js/locations.js)
const paths = window.pathsData.paths; // Gets all the Paths Data (/js/paths.js)

let currentPopup = null;
let currentPopupLocation = null;

function createMarker(locationData, locationId) {
    const pinGeometry = new THREE.ConeGeometry(0.5, 2, 8);
    const pinMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const pin = new THREE.Mesh(pinGeometry, pinMaterial);
    pin.position.set(locationData.position.x, locationData.position.y + 1, locationData.position.z);
    pin.rotation.x = Math.PI;
    pin.userData = { locationId };
    scene.add(pin);

    const labelDiv = document.createElement('div');
    labelDiv.className = 'location-label';
    labelDiv.textContent = locationData.title;

    const label = new CSS2DObject(labelDiv);
    label.position.set(locationData.position.x, locationData.position.y+2, locationData.position.z);
    scene.add(label);

    labelDiv.addEventListener('click', () => {
        const position = locationData.position;

        showInfo(locationId);

        new TWEEN.Tween(camera.position)
            .to({ x: position.x, y: position.y + 150, z: position.z }, 2000)
            .easing(TWEEN.Easing.Quartic.InOut)
            .onUpdate(() => {
                camera.lookAt(new THREE.Vector3(position.x, position.y, position.z));
            })
            .onComplete(() => {
                console.log(`Viewing location (top-down): ${locationData.title}`);
            })
            .start();

        new TWEEN.Tween(scene.position)
            .to({ x: -position.x, y: 0, z: -position.z }, 2000)
            .easing(TWEEN.Easing.Quartic.InOut)
            .start();
    });

    return { pin, label};
}


// Hotspot Functionality
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const hotspotPool = {
    geometry: null,
    material: null,
    iconGeometry: null,
    iconMaterials: {}
};

function createVisibleHotspotMaterial() {
    return new THREE.MeshStandardMaterial({
        color: 0x800000,         // Bright yellow
        roughness: 0.2,          // Slightly glossy
        metalness: 0.5,          // Metallic look
        emissive: 0x800000,      // Orange-yellow emissive
        emissiveIntensity: 1     // Moderate glow
    });
}

function createGlowSphere(position, radius) {
    const glowGeometry = new THREE.SphereGeometry(radius * 1.3, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x9d1515,
        transparent: true,
        opacity: 0.5,
        side: THREE.FrontSide
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(position);
    
    return glow;
}

function createEnhancedHotspot(hotspotData, hotspotId) {
    const geometry = new THREE.SphereGeometry(2.2, 20, 20);
    const material = createVisibleHotspotMaterial();
    
    const marker = new THREE.Mesh(geometry, material);
    marker.position.set(
        hotspotData.position.x, 
        hotspotData.position.y, 
        hotspotData.position.z
    );
    
    const glowSphere = createGlowSphere(
        new THREE.Vector3(
            hotspotData.position.x, 
            hotspotData.position.y, 
            hotspotData.position.z
        ), 
        2.2
    );
    
    marker.userData = { 
        hotspotId,
        pulseScale: { value: 1, direction: 1 },
        glowScale: { value: 1, direction: 0.8 },
        lastPulseUpdate: 0,
        glowSphere: glowSphere
    };
    
    scene.add(marker);
    scene.add(glowSphere);
    
    return { marker, glowSphere };
}

// Hotspot Cleanup
function removeExistingHotspots() {

    const objectsToRemove = [];
    
    scene.children.forEach(object => {
        if (object.userData && object.userData.hotspotId) {
            objectsToRemove.push(object);
            
            if (object.userData.glowSphere) {
                objectsToRemove.push(object.userData.glowSphere);
            }
        }
    });
    
    objectsToRemove.forEach(object => {
        scene.remove(object);
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
    });
}

function animateHotspots(time) {
    scene.children.forEach(object => {
        if (object.userData && object.userData.hotspotId) {
            if (!object.userData.lastPulseUpdate || time - object.userData.lastPulseUpdate > 16) {
                const pulseData = object.userData.pulseScale;
                pulseData.value += pulseData.direction * 0.02;
                
                if (pulseData.value >= 1.2 || pulseData.value <= 0.8) {
                    pulseData.direction *= -1;
                }
                
                object.scale.set(pulseData.value, pulseData.value, pulseData.value);
                
                if (object.userData.glowSphere) {
                    const glowSphere = object.userData.glowSphere;
                    const glowScale = pulseData.value < 1 ? 2 - pulseData.value : pulseData.value;
                    
                    glowSphere.scale.set(glowScale, glowScale, glowScale);
                    
                    glowSphere.material.opacity = 0.2 + (pulseData.value - 0.7) * 0.2;
                }
                
                object.userData.lastPulseUpdate = time;
            }
        }
    });
}

function enhanceHotspots() {
    removeExistingHotspots();
    
    const enhancedHotspots = {};
    Object.entries(hotspots).forEach(([id, data]) => {
        enhancedHotspots[id] = createEnhancedHotspot(data, id);
    });
    
    window.enhancedHotspots = enhancedHotspots;
    
    const originalAnimate = window.animate || function(time) {
        requestAnimationFrame(originalAnimate);
        TWEEN.update();
        controls.update();
        
        if (document.visibilityState === 'visible') {
            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        }
    };
    
    window.animate = function(time) {
        requestAnimationFrame(window.animate);
        
        TWEEN.update();
        controls.update();
        
        animateHotspots(time);
        
        if (document.visibilityState === 'visible') {
            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        }
    };
    
    if (!window.animationRunning) {
        window.animationRunning = true;
        window.animate();
    }
}

enhanceHotspots();

function createHotspot(hotspotData, hotspotId) {
    if (!hotspotPool.geometry) {
        hotspotPool.geometry = new THREE.SphereGeometry(2, 16, 16);
    }
    
    if (!hotspotPool.material) {
        hotspotPool.material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    }
    
    const marker = new THREE.Mesh(hotspotPool.geometry, hotspotPool.material);
    marker.position.set(hotspotData.position.x, hotspotData.position.y, hotspotData.position.z);
    marker.userData = { 
        hotspotId,
        pulseScale: { value: 1, direction: 1 },
        lastPulseUpdate: 0 // For throttling updates
    };
    scene.add(marker);

    return marker;
}

Object.entries(hotspots).forEach(([id, data]) => {
    createHotspot(data, id);
});

window.addEventListener('click', onMouseClick, false);

function onMouseClick(event) {
    event.preventDefault();

    if (isNavigating) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        const object = intersects[i].object;
        if (object.userData.hotspotId) {
            showHotspotPopup(object.userData.hotspotId);
            break;
        }
    }
}


function showHotspotPopup(hotspotId) {
    const hotspot = hotspots[hotspotId];
    window.closeHotspotPopup();
    window.closePopup();

    const popupDiv = document.createElement('div');
    popupDiv.className = 'hotspot-popup-3d';
    popupDiv.innerHTML = `
        <button class="popup-close-btn">x</button>
        <h3>${hotspot.title}</h3>
        <button class="view-btn" onclick="window.loadPanorama('${hotspotId}')">View</button>
    `;

    const popupLabel = new CSS2DObject(popupDiv);
    
    popupLabel.position.set(
        hotspot.position.x, 
        hotspot.position.y + 10,
        hotspot.position.z
    );

    scene.add(popupLabel);

    popupDiv.querySelector('.popup-close-btn').addEventListener('click', window.closeHotspotPopup);

    currentPopup = popupLabel;
}


window.closeHotspotPopup = function() {
    if (currentPopup) {
        scene.remove(currentPopup);
        currentPopup = null;
    }
    
    const existingPopup = document.querySelector('.hotspot-popup-3d');
    if (existingPopup) {
        existingPopup.remove();
    }
};


const panoramaResources = {
    textureCache: new Map(),
    objectPool: {
        geometry: null,
        material: null
    },
    activePanorama: null,
    activeControls: null,
    activeRenderer: null,
    activeAnimationId: null
};

// Refactored loadPanorama function using the optimizations from openFullscreenPanorama
window.loadPanorama = function(hotspotId) { 
    // Close any existing panorama views first to prevent resource buildup
    window.closePanorama();
    window.closeHotspotPopup(); 

    const hotspot = hotspots[hotspotId]; 
    if (!hotspot || !hotspot.panoramaImage) return;

    const imageSrc = hotspot.panoramaImage;
    const position = hotspot.position;

    // Create overlay
    const fullscreenOverlay = document.createElement('div'); 
    fullscreenOverlay.className = 'fullscreen-panorama-overlay'; 
    fullscreenOverlay.innerHTML = `
        <div class="panorama-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading panorama...</div>
        </div>
        <button class="close-fullscreen-btn">&times;</button>
    `;
    document.body.appendChild(fullscreenOverlay); 

    // Show loading indicator
    const loadingIndicator = fullscreenOverlay.querySelector('.panorama-loading');
    
    // Create panorama scene
    const panoramaScene = new THREE.Scene(); 
    
    // Check if texture is already in cache
    let panoramaTexture;
    if (panoramaResources.textureCache.has(imageSrc)) {
        panoramaTexture = panoramaResources.textureCache.get(imageSrc);
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        createPanorama(panoramaTexture);
    } else {
        // Create texture loader with loading manager
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = (url, loaded, total) => {
            // Update loading progress
            const progress = Math.floor((loaded / total) * 100);
            const loadingText = fullscreenOverlay.querySelector('.loading-text');
            if (loadingText) {
                loadingText.textContent = `Loading panorama... ${progress}%`;
            }
        };
        
        const textureLoader = new THREE.TextureLoader(loadingManager);
        textureLoader.load(
            imageSrc,
            (texture) => {
                // Optimize texture
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false; // Disable mipmaps for panoramas
                
                // Add to cache
                panoramaResources.textureCache.set(imageSrc, texture);
                
                // Hide loading indicator
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                }
                
                createPanorama(texture);
            },
            undefined,
            (error) => {
                console.error('Error loading panorama texture:', error);
                if (loadingIndicator) {
                    loadingIndicator.innerHTML = 'Error loading panorama';
                }
            }
        );
    }

    function createPanorama(texture) {
        // Create or reuse sphere geometry
        let geometry;
        if (panoramaResources.objectPool.geometry) {
            geometry = panoramaResources.objectPool.geometry;
        } else {
            geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);
            panoramaResources.objectPool.geometry = geometry;
        }

        // Create material with the loaded texture
        const material = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
        });

        // Create the panorama mesh
        const panorama = new THREE.Mesh(geometry, material);
        panoramaScene.add(panorama);
        
        // Store active panorama for cleanup
        panoramaResources.activePanorama = panorama;

        // Adjust FOV based on device width
        const fov = window.innerWidth <= 768 ? 90 : 110;
        const panoramaCamera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        panoramaCamera.position.set(0, 0, 0.1);

        // Create renderer with optimized settings
        const panoramaRenderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance' // Request high performance mode
        });
        panoramaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
        fullscreenOverlay.appendChild(panoramaRenderer.domElement);
        
        // Store renderer for cleanup
        panoramaResources.activeRenderer = panoramaRenderer;

        // Create controls
        const panoramaControls = new OrbitControls(panoramaCamera, panoramaRenderer.domElement);
        panoramaControls.enableDamping = true;
        panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25; // Adjusted for mobile
        panoramaControls.screenSpacePanning = false;
        panoramaControls.minDistance = 0.1;
        panoramaControls.maxDistance = 500;
        panoramaControls.maxPolarAngle = Math.PI;
        panoramaControls.minPolarAngle = 0;
        panoramaControls.enableZoom = false;
        panoramaControls.enablePan = false;
        panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5; // Adjusted for mobile
        
        // Store controls for cleanup
        panoramaResources.activeControls = panoramaControls;

        // Get panorama hotspots from the external file
        let panoramaHotspotMarkers = {};
        if (window.panoramaHotspotsData && window.panoramaHotspotsData.getHotspotsForPanorama) {
            const hotspotsForCurrentPanorama = window.panoramaHotspotsData.getHotspotsForPanorama(hotspotId);
            
            if (hotspotsForCurrentPanorama) {
                Object.entries(hotspotsForCurrentPanorama).forEach(([id, data]) => {
                    const marker = createEnhancedPanoramaHotspot(data, id, hotspotId);
                    if (marker) {
                        panoramaHotspotMarkers[id] = marker;
                    }
                });
            }
        }

        function createEnhancedPanoramaHotspot(hotspotData, hotspotId, currentPanoramaId) {
            // Core hotspot with better material
            const hotspotGeometry = new THREE.SphereGeometry(0.07, 32, 32);
            const hotspotMaterial = new THREE.MeshStandardMaterial({ 
                color: 0xffcc00,         // Warmer yellow color
                roughness: 0.2,          // Slightly glossy
                metalness: 0.5,          // Metallic look
                emissive: 0xffcc00,      // Self-illumination
                emissiveIntensity: 0.8   // Glow strength
            });
            const hotspotMesh = new THREE.Mesh(hotspotGeometry, hotspotMaterial);
            hotspotMesh.position.copy(hotspotData.position);
            
            // Create outer glow sphere
            const glowGeometry = new THREE.SphereGeometry(0.12, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0xffcc00,
                transparent: true,
                opacity: 0.4,
                side: THREE.FrontSide
            });
            const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
            glowSphere.position.copy(hotspotData.position);
            panoramaScene.add(glowSphere);
        
            // Add data to the hotspot
            hotspotMesh.userData = {
                type: 'panoramaHotspot',
                id: hotspotId,
                title: hotspotData.title,
                description: hotspotData.description,
                nextPanorama: hotspotData.nextPanorama,
                // Animation properties
                pulseData: {
                    scale: 1.0,
                    direction: 0.01, // Speed and direction
                    min: 0.8,
                    max: 1.2
                },
                glowSphere: glowSphere // Reference to glow sphere for animations
            };
        
            panoramaScene.add(hotspotMesh);
            return hotspotMesh;
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onPanoramaHotspotClick(event) {
            event.preventDefault();
        
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
            raycaster.setFromCamera(mouse, panoramaCamera);
            const intersects = raycaster.intersectObjects(panoramaScene.children);
        
            for (let intersect of intersects) {
                if (intersect.object.userData && intersect.object.userData.type === 'panoramaHotspot') {
                    const existingPopup = document.querySelector('.panorama-hotspot-popup');
                    if (existingPopup) {
                        existingPopup.remove();
                    }
        
                    const popupDiv = document.createElement('div');
                    popupDiv.className = 'panorama-hotspot-popup';
                    popupDiv.innerHTML = `
                        <h3>${intersect.object.userData.title}</h3>
                        <p>${intersect.object.userData.description || ''}</p>
                        ${intersect.object.userData.nextPanorama ? 
                            `<button onclick="window.loadPanorama('${intersect.object.userData.nextPanorama}')">Explore</button>` : 
                            ''
                        }
                        <button class="popup-close-btn">Close</button>
                    `;
        
                    const rect = panoramaRenderer.domElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    
                    popupDiv.style.position = 'absolute';
                    popupDiv.style.left = `${x}px`;
                    popupDiv.style.top = `${y}px`;

                    panoramaControls.enabled = false;
        
                    const closeBtn = popupDiv.querySelector('.popup-close-btn');
                    closeBtn.addEventListener('click', () => {
                        popupDiv.remove();
                        panoramaControls.enabled = true;
                    });
        
                    fullscreenOverlay.appendChild(popupDiv);
                    break;
                }
            }
        }
        
        fullscreenOverlay.addEventListener('click', onPanoramaHotspotClick);

        // Animation variables
        let animationFrameId;
        let isVisible = true;

        // Visibility API to pause rendering when tab is not visible
        if (document.hidden !== undefined) {
            document.addEventListener('visibilitychange', () => {
                isVisible = !document.hidden;
                if (!isVisible && animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                } else if (isVisible && !animationFrameId) {
                    animatePanorama();
                }
            });
        }

        // Animation function with throttled rendering
        let lastRenderTime = 0;
        const renderInterval = 1000 / 30; // Aim for 30 FPS to save performance

        function animatePanorama(time) {
            if (!isVisible) return;
            
            animationFrameId = requestAnimationFrame(animatePanorama);
            panoramaResources.activeAnimationId = animationFrameId;
            
            // Only render if controls changed or enough time passed
            const shouldRender = !lastRenderTime || time - lastRenderTime >= renderInterval || panoramaControls.update();
            
            // Animate hotspot markers with improved animation
            Object.values(panoramaHotspotMarkers).forEach(marker => {
                if (marker.userData && marker.userData.pulseData) {
                    const pulse = marker.userData.pulseData;
                    
                    // Update scale based on pulse direction
                    pulse.scale += pulse.direction;
                    
                    // Reverse direction at boundaries
                    if (pulse.scale > pulse.max || pulse.scale < pulse.min) {
                        pulse.direction *= -1;
                    }
                    
                    // Apply scale to hotspot
                    marker.scale.set(pulse.scale, pulse.scale, pulse.scale);
                    
                    // Animate glow sphere (opposite phase for interesting effect)
                    if (marker.userData.glowSphere) {
                        const glowSphere = marker.userData.glowSphere;
                        const inverseScale = 1.5 - pulse.scale * 0.5; // Inverse phase
                        glowSphere.scale.set(inverseScale, inverseScale, inverseScale);
                        
                        // Also animate opacity
                        glowSphere.material.opacity = 0.2 + (pulse.scale - pulse.min) * 0.4;
                    }
                }
            });
            
            if (shouldRender) {
                panoramaRenderer.render(panoramaScene, panoramaCamera);
                lastRenderTime = time;
            }
        }

        // Start animation
        animatePanorama();

        function onPanoramaResize() { 
            panoramaCamera.aspect = window.innerWidth / window.innerHeight; 
            panoramaCamera.updateProjectionMatrix(); 
            panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
            
            // Update controls and FOV based on device
            panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25;
            panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5;
            panoramaCamera.fov = window.innerWidth <= 768 ? 90 : 110;
            panoramaCamera.updateProjectionMatrix();
        }
        
        window.addEventListener('resize', onPanoramaResize); 

        // Navigation buttons (from original loadPanorama)
        const navigationContainer = document.createElement('div');
        navigationContainer.className = 'panorama-navigation-container';
        fullscreenOverlay.appendChild(navigationContainer);

        const prevButton = document.createElement('button');
        prevButton.className = 'panorama-nav-btn prev-btn';
        prevButton.innerHTML = '&#10094;';
        navigationContainer.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.className = 'panorama-nav-btn next-btn';
        nextButton.innerHTML = '&#10095;'; 
        navigationContainer.appendChild(nextButton);

        function handleNavigation(direction) {
            let nextHotspotId = null;
            
            if (direction === 'next' && hotspot.nextHotspot) {
                nextHotspotId = hotspot.nextHotspot;
            } else if (direction === 'prev' && hotspot.previousHotspot) {
                nextHotspotId = hotspot.previousHotspot;
            }

            if (nextHotspotId) {
                window.loadPanorama(nextHotspotId);
            }
        }

        prevButton.addEventListener('click', () => handleNavigation('prev'));
        nextButton.addEventListener('click', () => handleNavigation('next'));

        prevButton.style.display = hotspot.previousHotspot ? 'block' : 'none';
        nextButton.style.display = hotspot.nextHotspot ? 'block' : 'none';

        // Close button event
        const closeButton = fullscreenOverlay.querySelector('.close-fullscreen-btn');
        closeButton.addEventListener('click', () => {
            // Properly clean up glow spheres
            Object.values(panoramaHotspotMarkers).forEach(marker => {
                if (marker.userData && marker.userData.glowSphere) {
                    panoramaScene.remove(marker.userData.glowSphere);
                    if (marker.userData.glowSphere.geometry) {
                        marker.userData.glowSphere.geometry.dispose();
                    }
                    if (marker.userData.glowSphere.material) {
                        marker.userData.glowSphere.material.dispose();
                    }
                }
            });
            
            window.closePanorama();
        });

        // Prevent context menu
        fullscreenOverlay.addEventListener('contextmenu', (e) => e.preventDefault());
    }
};

// Revised openFullscreenPanorama to use the same resource pooling approach
window.openFullscreenPanorama = function(imageSrc, position) {
    // Close any existing panorama views first
    window.closePanorama();
    
    // Create overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.className = 'fullscreen-panorama-overlay';
    fullscreenOverlay.innerHTML = `
        <div class="panorama-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading panorama...</div>
        </div>
        <button class="close-fullscreen-btn">&times;</button>
    `;
    document.body.appendChild(fullscreenOverlay);

    // Show loading indicator
    const loadingIndicator = fullscreenOverlay.querySelector('.panorama-loading');
    
    // Close popup if open
    if (typeof closePopup === 'function') {
        closePopup();
    }

    // Create panorama scene
    const panoramaScene = new THREE.Scene();
    
    // Check if texture is already in cache
    let panoramaTexture;
    if (panoramaResources.textureCache.has(imageSrc)) {
        panoramaTexture = panoramaResources.textureCache.get(imageSrc);
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        createPanorama(panoramaTexture);
    } else {
        // Create texture loader with loading manager
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = (url, loaded, total) => {
            // Update loading progress
            const progress = Math.floor((loaded / total) * 100);
            const loadingText = fullscreenOverlay.querySelector('.loading-text');
            if (loadingText) {
                loadingText.textContent = `Loading panorama... ${progress}%`;
            }
        };
        
        const textureLoader = new THREE.TextureLoader(loadingManager);
        textureLoader.load(
            imageSrc,
            (texture) => {
                // Optimize texture
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false; // Disable mipmaps for panoramas
                
                // Add to cache
                panoramaResources.textureCache.set(imageSrc, texture);
                
                // Hide loading indicator
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                }
                
                createPanorama(texture);
            },
            undefined,
            (error) => {
                console.error('Error loading panorama texture:', error);
                if (loadingIndicator) {
                    loadingIndicator.innerHTML = 'Error loading panorama';
                }
            }
        );
    }

    function createPanorama(texture) {
        // Create or reuse sphere geometry
        let geometry;
        if (panoramaResources.objectPool.geometry) {
            geometry = panoramaResources.objectPool.geometry;
        } else {
            geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);
            panoramaResources.objectPool.geometry = geometry;
        }

        // Create material with the loaded texture
        const material = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
        });

        // Create the panorama mesh
        const panorama = new THREE.Mesh(geometry, material);
        panoramaScene.add(panorama);
        
        // Store active panorama for cleanup
        panoramaResources.activePanorama = panorama;

        // Adjust FOV based on device width
        const fov = window.innerWidth <= 768 ? 90 : 110;
        const panoramaCamera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        panoramaCamera.position.set(0, 0, 0.1);

        // Create renderer with optimized settings
        const panoramaRenderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance' // Request high performance mode
        });
        panoramaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
        fullscreenOverlay.appendChild(panoramaRenderer.domElement);
        
        // Store renderer for cleanup
        panoramaResources.activeRenderer = panoramaRenderer;

        // Create controls
        const panoramaControls = new OrbitControls(panoramaCamera, panoramaRenderer.domElement);
        panoramaControls.enableDamping = true;
        panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25;
        panoramaControls.screenSpacePanning = false;
        panoramaControls.minDistance = 0.1;
        panoramaControls.maxDistance = 500;
        panoramaControls.maxPolarAngle = Math.PI;
        panoramaControls.minPolarAngle = 0;
        panoramaControls.enableZoom = false;
        panoramaControls.enablePan = false;
        panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5;
        
        // Store controls for cleanup
        panoramaResources.activeControls = panoramaControls;

        // Animation variables
        let animationFrameId;
        let isVisible = true;

        // Visibility API to pause rendering when tab is not visible
        if (document.hidden !== undefined) {
            document.addEventListener('visibilitychange', () => {
                isVisible = !document.hidden;
                if (!isVisible && animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                } else if (isVisible && !animationFrameId) {
                    animatePanorama();
                }
            });
        }

        // Animation function with throttled rendering
        let lastRenderTime = 0;
        const renderInterval = 1000 / 30; // Aim for 30 FPS to save performance

        function animatePanorama(time) {
            if (!isVisible) return;
            
            animationFrameId = requestAnimationFrame(animatePanorama);
            panoramaResources.activeAnimationId = animationFrameId;
            
            // Only render if controls changed or enough time passed
            const shouldRender = !lastRenderTime || time - lastRenderTime >= renderInterval || panoramaControls.update();
            
            if (shouldRender) {
                panoramaRenderer.render(panoramaScene, panoramaCamera);
                lastRenderTime = time;
            }
        }

        // Start animation
        animatePanorama();

        // Resize handler
        function onPanoramaResize() {
            panoramaCamera.aspect = window.innerWidth / window.innerHeight;
            panoramaCamera.updateProjectionMatrix();
            panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
            
            // Update controls and FOV
            panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25;
            panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5;
            panoramaCamera.fov = window.innerWidth <= 768 ? 90 : 110;
            panoramaCamera.updateProjectionMatrix();
        }

        // Add resize listener
        window.addEventListener('resize', onPanoramaResize);

        // Close button handler
        const closeButton = fullscreenOverlay.querySelector('.close-fullscreen-btn');
        closeButton.addEventListener('click', window.closePanorama);

        // Prevent context menu
        fullscreenOverlay.addEventListener('contextmenu', e => e.preventDefault());
    }
};

// Revised closePanorama function to handle proper cleanup
window.closePanorama = function() {
    // Cancel any active animations
    if (panoramaResources.activeAnimationId) {
        cancelAnimationFrame(panoramaResources.activeAnimationId);
        panoramaResources.activeAnimationId = null;
    }

    // Remove panorama overlay
    const fullscreenOverlay = document.querySelector('.fullscreen-panorama-overlay');
    if (fullscreenOverlay) {
        while (fullscreenOverlay.firstChild) {
            fullscreenOverlay.firstChild.remove();
        }
        document.body.removeChild(fullscreenOverlay);
    }

    // Dispose renderer
    if (panoramaResources.activeRenderer) {
        panoramaResources.activeRenderer.dispose();
        panoramaResources.activeRenderer = null;
    }

    // Dispose controls
    if (panoramaResources.activeControls) {
        panoramaResources.activeControls.dispose();
        panoramaResources.activeControls = null;
    }

    // Do NOT dispose geometry or textures as they're cached
    // Only null the reference to the active panorama
    panoramaResources.activePanorama = null;

    // Reset camera and scene
    const defaultPosition = { x: 0, y: 250, z: 10 };
    const defaultRotation = { x: 0, y: 0, z: 0 };

    new TWEEN.Tween(camera.position)
        .to(defaultPosition, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

    new TWEEN.Tween(camera.rotation)
        .to(defaultRotation, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

    const defaultFov = 50;
    new TWEEN.Tween({ fov: camera.fov })
        .to({ fov: defaultFov }, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(obj => {
            camera.fov = obj.fov;
            camera.updateProjectionMatrix();
        })
        .start();

    // Reset DOM elements
    document.getElementById('panorama-viewer').style.display = 'none';
    document.getElementById('panorama-navigation-container').innerHTML = '';

    console.log("Panorama closed and resources cleaned up.");

    // Dispatch event
    const event = new Event("panoramaClose");
    window.dispatchEvent(event);
};

// Global cleanup function for page unload
window.cleanupPanoramaResources = function() {
    // Cancel any active animations
    if (panoramaResources.activeAnimationId) {
        cancelAnimationFrame(panoramaResources.activeAnimationId);
    }
    
    // Dispose cached textures
    panoramaResources.textureCache.forEach(texture => {
        texture.dispose();
    });
    panoramaResources.textureCache.clear();
    
    // Dispose pooled geometry
    if (panoramaResources.objectPool.geometry) {
        panoramaResources.objectPool.geometry.dispose();
        panoramaResources.objectPool.geometry = null;
    }
    
    // Dispose renderer
    if (panoramaResources.activeRenderer) {
        panoramaResources.activeRenderer.dispose();
    }
    
    console.log("All panorama resources cleaned up.");
};

// Add cleanup to window unload
window.addEventListener('beforeunload', window.cleanupPanoramaResources);

// Point to Point Paths Functionality
let isNavigating = false;

function createLabel(text, position) {
    const labelDiv = document.createElement('div');
    labelDiv.className = 'you-are-here-label';
    labelDiv.textContent = text;
    
    const label = new CSS2DObject(labelDiv);
    label.position.set(position.x, position.y + 2, position.z);
    scene.add(label);
    
    return label;
}

function addArrowToSegment(start, end, scene, yOffset = 2) {
    const adjustedStart = new THREE.Vector3(start.x, start.y + yOffset, start.z);
    const adjustedEnd = new THREE.Vector3(end.x, end.y + yOffset, end.z);

    const direction = new THREE.Vector3().subVectors(adjustedEnd, adjustedStart).normalize();
    const arrowLength = adjustedStart.distanceTo(adjustedEnd) * 0.5;
    const arrowColor = 0xffff00;
    const headLength = 3;
    const headWidth = 3;

    const arrow = new THREE.ArrowHelper(direction, adjustedStart, arrowLength, arrowColor, headLength, headWidth);
    scene.add(arrow);
    return arrow;
}

function addArrowsToPath(pathPoints, scene, yOffsetCallback = () => 8) {
    const arrows = [];
    for (let i = 0; i < pathPoints.length - 1; i++) {
        const yOffset = yOffsetCallback(i);
        const arrow = addArrowToSegment(pathPoints[i], pathPoints[i + 1], scene, yOffset);
        arrows.push(arrow);
    }
    return arrows;
}

function clearArrows(arrows, scene) {
    arrows.forEach(arrow => scene.remove(arrow));
}

let isVoiceoverMuted = false;

function toggleVoiceoverMute() {
    isVoiceoverMuted = !isVoiceoverMuted;
    const muteButton = document.getElementById('mute-voiceover-btn');
    const voiceoverIcon = document.getElementById('voiceover-icon');

    if (isVoiceoverMuted) {
        voiceoverIcon.classList.remove('fa-volume-up');
        voiceoverIcon.classList.add('fa-volume-mute');
        muteButton.title = 'Unmute Voiceover';
        
        window.speechSynthesis.cancel();
    } else {
        voiceoverIcon.classList.remove('fa-volume-mute');
        voiceoverIcon.classList.add('fa-volume-up');
        muteButton.title = 'Mute Voiceover';
    }
}

function playVoiceover(message) {
    if (isVoiceoverMuted) {
        return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1;
    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', () => {
    const muteButton = document.getElementById('mute-voiceover-btn');
    if (muteButton) {
        muteButton.addEventListener('click', toggleVoiceoverMute);
    }
});

function getDirection(previous, current, next) {
    const v1 = new THREE.Vector3().subVectors(current, previous).normalize();
    const v2 = new THREE.Vector3().subVectors(next, current).normalize();

    const crossProduct = new THREE.Vector3().crossVectors(v1, v2);
    const angle = v1.angleTo(v2);

    if (current.y !== next.y) {
        if (next.y > current.y) return "Up to the staircase";
        if (next.y < current.y) return "Down to the staircase";
    }

    const straightThreshold = 1;
    const slightTurnThreshold = 0.8;

    if (angle < straightThreshold) {
        return "Proceed straight";
    } else if (angle <= slightTurnThreshold) {
        if (crossProduct.y > 0) return "Make a slight left turn";
        if (crossProduct.y < 0) return "Make a slight right turn";
    } else {
        if (crossProduct.y > 0) return "Turn left";
        if (crossProduct.y < 0) return "Turn right";
    }
    return "Proceed straight";
}

function animatePathWithControls(pathPoints, duration = 13000) {
    controls.minDistance = 0;
    console.log("Starting animatePathWithControls...");
    isNavigating = true;
    let isNavigationComplete = false;

    const totalSegments = pathPoints.length - 1;

    let arrows = addArrowsToPath(pathPoints, scene);

    // Navigation controls
    const pauseButton = document.getElementById("pause-btn");
    const resumeButton = document.getElementById("resume-btn");
    const restartButton = document.getElementById("restart-btn");
    const cancelButton = document.getElementById("cancel-btn");
    const navigateButton = document.getElementById("navigate-btn");
    const locationSelectors = [
        document.getElementById("category-select"),
        document.getElementById("path-select"),
        document.getElementById("floor-select"),
        document.getElementById("room-select")
    ];

    navigateButton.disabled = true;
    locationSelectors.forEach((selector) => (selector.disabled = true));

    pauseButton.disabled = false;
    resumeButton.disabled = true;
    restartButton.disabled = false;
    cancelButton.disabled = false;

    let currentSegment = 0;
    let isPaused = false;
    let currentTween = null;

    const lineGroup = new THREE.Group();
        for (let i = 0; i < pathPoints.length - 1; i++) {
            const start = pathPoints[i];
            const end = pathPoints[i + 1];
        
            const isFloorChange = start.y !== end.y;
            let material;
        if (start.y !== end.y) {
            if (end.y > start.y) {
                material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue for UP
            } else {
                material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red for DOWN
            }
        } else {
            material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green for no change
        }

        if (end.y === 14 && start.y === 14) {
            material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
        } else if (end.y === 16 && start.y === 16) {
            material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        }
    
        const distance = start.distanceTo(end);
        const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, distance, 5);
        const cylinder = new THREE.Mesh(cylinderGeometry, material);
    
        const midpoint = new THREE.Vector3().lerpVectors(start, end, 0.5);
        cylinder.position.copy(midpoint);
    
        const direction = new THREE.Vector3().subVectors(end, start).normalize();
        const axis = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
        cylinder.quaternion.copy(quaternion);
    
        lineGroup.add(cylinder);
    
        if (isFloorChange) {
            const icon = createFloorChangeIcon(end.y > start.y, midpoint);
            scene.add(icon);
            scene.add(lineGroup);
        }
    }
    

    function createFloorChangeIcon(isUp, position) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'floor-change-icon';
    
        if (isUp) {
            iconDiv.innerHTML = `<i class="fa-solid fa-stairs"></i><i class="fa-solid fa-arrow-up"></i>`;
        } else {
            iconDiv.innerHTML = `<i class="fa-solid fa-stairs"></i><i class="fa-solid fa-arrow-down"></i>`;
        }
    
        const icon = new CSS2DObject(iconDiv);
        icon.position.set(position.x, position.y + 2, position.z);
        icon.name = 'FloorChangeIcon';
        return icon;
    }
    

    scene.add(lineGroup);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.copy(pathPoints[0]);
    scene.add(sphere);

    const youLabel = createLabel("You", pathPoints[0]);

    function moveCameraAndMap() {
        if (currentSegment >= totalSegments) {
            if (isNavigationComplete) return;
            isNavigationComplete = true;
            clearArrows(arrows, scene);
    
            console.log("Navigation completed, zooming into endpoint...");
    
            const endPoint = pathPoints[pathPoints.length - 1];
    
            // Final Voiceover
            playVoiceover("You have reached your destination.");
    
            new TWEEN.Tween(camera.position)
                .to(
                    {
                        x: endPoint.x,
                        y: 20,
                        z: endPoint.z,
                    },
                    2000
                )
                .easing(TWEEN.Easing.Quartic.InOut)
                .onUpdate(() => {
                    camera.lookAt(
                        new THREE.Vector3(
                            endPoint.x,
                            endPoint.y + 1.5,
                            endPoint.z
                        )
                    );
                })
                .onComplete(() => {
                    if (isNavigationComplete) {
                        triggerPanoramaViewer(endPoint);
                    }
                })
                .start();
            return;
        }
    
        const start = pathPoints[currentSegment];
        const end = pathPoints[currentSegment + 1];
        const next = pathPoints[currentSegment + 2] || end;

        if (currentSegment === 0) {
            playVoiceover("Navigation started.");
        } else {
            const direction = getDirection(pathPoints[currentSegment - 1], start, end);
            playVoiceover(direction);
        }

    
        const segmentDuration = duration / totalSegments;
    
        currentTween = new TWEEN.Tween(sphere.position)
            .to(end, segmentDuration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                youLabel.position.copy(sphere.position);
                camera.position.lerp(
                    new THREE.Vector3(sphere.position.x, 150, sphere.position.z),
                    0.3
                );
                camera.lookAt(sphere.position);
                scene.position.set(-sphere.position.x, 0, -sphere.position.z);
            })
            .onComplete(() => {
                currentSegment++;
                if (!isPaused) moveCameraAndMap();
            })
            .start();
    }
    

    function triggerPanoramaViewer(endPoint) {
        const categoryKey = document.getElementById("category-select").value;
        const pathKey = document.getElementById("path-select").value;
        const floorKey = document.getElementById("floor-select").value;
        const roomKey = document.getElementById("room-select").value;

        const selectedRoom =
            paths[categoryKey]?.paths[pathKey]?.floors[floorKey]?.rooms[roomKey];

        if (selectedRoom?.panoramaImage) {
            window.openFullscreenPanorama(selectedRoom.panoramaImage, {
                x: endPoint.x,
                y: endPoint.y,
                z: endPoint.z,
            });
            window.addEventListener("panoramaClose", () => {
                console.log("Panorama viewer closed.");
                cleanup();
            });
        } else {
            console.error("No panorama image found for the selected room.");
            cleanup();
        }
    }

    function cleanup() {
        console.log("Performing cleanup after panorama viewer closed.");

        if (lineGroup) {
            scene.remove(lineGroup);
            lineGroup.children.forEach((child) => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) child.material.dispose();
            });
        }

        scene.remove(sphere);
        scene.remove(youLabel);

        scene.traverse((object) => {
            if (object.name === 'FloorChangeIcon') {
                scene.remove(object);
            }
        });
        
        const navigationControls = document.getElementById('navigation-controls');
        if (navigationControls) {
            Array.from(navigationControls.querySelectorAll('button')).forEach(button => {
                button.disabled = true;
            });
        }
    
        isNavigating = false;
        isNavigationComplete = true;
        
        const navigateButton = document.getElementById('navigate-btn');
        if (navigateButton) {
            navigateButton.disabled = false;
        }
    
        locationSelectors.forEach((selector) => (selector.disabled = false));
        
        console.log("Cleanup complete.");

        controls.minDistance = 120;
    }
    

    // Navigation Controls
    // Pause Navigation
    pauseButton.addEventListener("click", () => {
        isPaused = true;
        if (currentTween) currentTween.stop();
        pauseButton.disabled = true;
        resumeButton.disabled = false;
        restartButton.disabled = true;
    });

    // Resume Navigation
    resumeButton.addEventListener("click", () => {
        isPaused = false;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
        restartButton.disabled = false;
        moveCameraAndMap();
    });

    // Restart Navigation
    restartButton.addEventListener("click", () => {
        if (isNavigating) {
            // Show confirmation modal
            const modal = document.getElementById("restart-navigation-modal");
            modal.style.display = "flex";
            
            // Add a small delay before adding the active class to trigger the transition
            setTimeout(() => {
                modal.classList.add("active");
            }, 10);

            // Handle confirm button click
            document.getElementById("confirm-restart-btn").onclick = () => {
                modal.classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                    
                    // Stop current navigation
                    if (currentTween) {
                        currentTween.stop();
                        currentTween = null;
                    }
                    
                    // Cancel any running speech
                    if (window.speechSynthesis) {
                        window.speechSynthesis.cancel();
                    }
                    
                    // Reset positions
                    sphere.position.copy(pathPoints[0]);
                    youLabel.position.copy(sphere.position);
                    
                    // Reset navigation state
                    currentSegment = 0;
                    isPaused = false;
                    isNavigationComplete = false;
                    
                    // Update UI controls
                    pauseButton.disabled = false;
                    resumeButton.disabled = true;
                    
                    // Clear existing arrows and redraw them
                    if (arrows && Array.isArray(arrows)) {
                        clearArrows(arrows, scene);
                        arrows = addArrowsToPath(pathPoints, scene);
                    }
                    
                    // Start navigation again with a small delay to ensure cleanup is complete
                    setTimeout(() => {
                        moveCameraAndMap();
                    }, 100);
                    
                }, 300); // Match the transition duration in CSS
            };

            // Handle cancel button click
            document.getElementById("cancel-restart-btn").onclick = () => {
                modal.classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            };
            
            // Handle close button click
            const closeButton = document.getElementById("close-restart-modal");
            if (closeButton) {
                closeButton.onclick = () => {
                    modal.classList.remove("active");
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 300);
                };
            }
            
            // Allow clicking outside the modal to close it
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove("active");
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 300);
                }
            });
        }
    });

    // Cancel Navigation
    cancelButton.addEventListener("click", () => {
        if (currentTween) currentTween.stop();
        clearArrows(arrows, scene);
        arrows = []; 
        cleanup();
    });

    // Start navigation
    moveCameraAndMap();
}

function populateCategoryDropdown() {
    const categorySelect = document.getElementById('category-select');
    categorySelect.innerHTML = '';

    const sortedCategories = Object.keys(paths)
        .sort((a, b) => paths[a].name.localeCompare(paths[b].name));

    sortedCategories.forEach(categoryKey => {
        const option = document.createElement('option');
        option.value = categoryKey;
        option.textContent = paths[categoryKey].name;
        categorySelect.appendChild(option);
    });

    if (categorySelect.options.length > 0) {
        categorySelect.value = categorySelect.options[0].value;
        populatePathDropdown(categorySelect.value);
    }

    categorySelect.addEventListener('change', () => {
        populatePathDropdown(categorySelect.value);
        updateGoButtonState();
    });

    updateGoButtonState();
}


populateCategoryDropdown();

function populatePathDropdown(categoryKey) {
    const pathSelect = document.getElementById('path-select');
    const floorSelect = document.getElementById('floor-select');
    const roomSelect = document.getElementById('room-select');

    pathSelect.innerHTML = '';
    floorSelect.innerHTML = '';
    roomSelect.innerHTML = '';

    if (paths[categoryKey]) {
        const sortedPaths = Object.keys(paths[categoryKey].paths)
            .sort((a, b) => paths[categoryKey].paths[a].name.localeCompare(paths[categoryKey].paths[b].name));

        sortedPaths.forEach(pathKey => {
            const path = paths[categoryKey].paths[pathKey];
            const option = document.createElement('option');
            option.value = pathKey;
            option.textContent = path.name;
            pathSelect.appendChild(option);
        });

        if (pathSelect.options.length > 0) {
            pathSelect.value = pathSelect.options[0].value;
            populateFloorDropdown(categoryKey, pathSelect.value);
        }
    }

    pathSelect.addEventListener('change', () => {
        populateFloorDropdown(categoryKey, pathSelect.value);
        updateGoButtonState();
    });

    updateGoButtonState();
}


function populateFloorDropdown(categoryKey, pathKey) {
    const floorSelect = document.getElementById('floor-select');
    const roomSelect = document.getElementById('room-select');

    floorSelect.innerHTML = '';
    roomSelect.innerHTML = '';

    const path = paths[categoryKey].paths[pathKey];
    if (path.floors) {
        Object.keys(path.floors).forEach(floorKey => {
            const floor = path.floors[floorKey];
            const option = document.createElement('option');
            option.value = floorKey;
            option.textContent = floor.name;
            floorSelect.appendChild(option);
        });

        if (floorSelect.options.length > 0) {
            floorSelect.value = floorSelect.options[0].value;
            populateRoomDropdown(categoryKey, pathKey, floorSelect.value);
        }
    }

    floorSelect.addEventListener('change', () => {
        populateRoomDropdown(categoryKey, pathKey, floorSelect.value);
        updateGoButtonState();
    });

    updateGoButtonState();
}

function populateRoomDropdown(categoryKey, pathKey, floorKey) {
    const roomSelect = document.getElementById('room-select');
    roomSelect.innerHTML = '';

    const floors = paths[categoryKey].paths[pathKey].floors;
    if (floors && floors[floorKey]) {
        const rooms = floors[floorKey].rooms;
        Object.keys(rooms).forEach(roomKey => {
            const room = rooms[roomKey];
            const option = document.createElement('option');
            option.value = roomKey;
            option.textContent = room.name;
            roomSelect.appendChild(option);
        });
    }

    roomSelect.addEventListener('change', updateGoButtonState);
    updateGoButtonState();
}

function updateGoButtonState() {
    const categorySelect = document.getElementById('category-select');
    const pathSelect = document.getElementById('path-select');
    const floorSelect = document.getElementById('floor-select');
    const roomSelect = document.getElementById('room-select');
    const navigateButton = document.getElementById('navigate-btn');

    navigateButton.disabled = !(
        categorySelect.value && 
        pathSelect.value && 
        floorSelect.value && 
        roomSelect.value
    );
}

document.getElementById("navigate-btn").addEventListener("click", () => {
    const categoryKey = document.getElementById('category-select').value;
    const pathKey = document.getElementById('path-select').value;
    const floorKey = document.getElementById('floor-select').value;
    const roomKey = document.getElementById('room-select').value;

    if (
        paths[categoryKey] && 
        paths[categoryKey].paths[pathKey] && 
        paths[categoryKey].paths[pathKey].floors[floorKey] && 
        paths[categoryKey].paths[pathKey].floors[floorKey].rooms[roomKey]
    ) {
        // Get the selected path details for the modal
        const startLocation = paths[categoryKey].name;
        const destination = paths[categoryKey].paths[pathKey].floors[floorKey].rooms[roomKey].name;
        
        // Update the destination info in the modal
        const destinationInfo = document.querySelector('#confirm-navigation-modal .destination-info');
        if (destinationInfo) {
            destinationInfo.innerHTML = `
                <strong>From:</strong> ${startLocation}<br>
                <strong>To:</strong> ${destination} (${paths[categoryKey].paths[pathKey].name}, ${paths[categoryKey].paths[pathKey].floors[floorKey].name})
            `;
        }
        
        // Show confirmation modal
        const modal = document.getElementById("confirm-navigation-modal");
        modal.style.display = "flex";
        
        // Add a small delay before adding the active class to trigger the transition
        setTimeout(() => {
            modal.classList.add("active");
        }, 10);

        const selectedRoom = paths[categoryKey].paths[pathKey].floors[floorKey].rooms[roomKey];

        // Handle proceed button click
        document.getElementById("proceed-navigation-btn").onclick = () => {
            modal.classList.remove("active");
            setTimeout(() => {
                modal.style.display = "none";
                animatePathWithControls(selectedRoom.points, selectedRoom.duration);
            }, 300); // Match the transition duration in CSS
        };

        // Handle cancel button click
        document.getElementById("cancel-navigation-btn").onclick = () => {
            modal.classList.remove("active");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        };
        
        // Handle close button click
        const closeButton = document.getElementById("close-navigation-modal");
        if (closeButton) {
            closeButton.onclick = () => {
                modal.classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            };
        }
        
        // Allow clicking outside the modal to close it
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove("active");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    } else {
        alert("Please ensure all navigation fields are correctly selected.");
    }
});

// End of Point-to-Point Feature

// Create Label Icons
function createLabelIcon(labelData) {
    const labelDiv = document.createElement('div');
    labelDiv.className = `label-icon ${labelData.type}-icon`;

    const iconImg = document.createElement('img');
    iconImg.src = `/assets/icons/${labelData.icon}`;
    iconImg.className = 'label-icon-image';

    labelDiv.appendChild(iconImg);

    const label = new CSS2DObject(labelDiv);
    label.position.set(labelData.position.x, labelData.position.y + 2, labelData.position.z);

    scene.add(label);
    return label;
}

//------- Label Icons ------\\
Object.entries(labelIcons).forEach(([id, data]) => {
    createLabelIcon(data);
});

const markers = {};
Object.entries(locations).forEach(([id, data]) => {
    markers[id] = createMarker(data, id);
});

function showLocationPopup(locationId) {
    const location = locations[locationId];
    const existingPopup = document.getElementById('location-popup');

    window.closeHotspotPopup();
    
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement('div');
    popup.className = 'location-popup';
    popup.id = 'location-popup';
    popup.innerHTML = `
        <button class="popup-close-btn" onclick="closePopup()">×</button>
        <h3>${location.title}</h3>
    `;
    document.body.appendChild(popup);

    currentPopup = popup;
    currentPopupLocation = location.position;

    updatePopupPosition();
}

function updatePopupPosition() {
    if (currentPopup && currentPopupLocation) {
        const vector = new THREE.Vector3(currentPopupLocation.x, currentPopupLocation.y, currentPopupLocation.z);
        vector.project(camera);
        const halfWidth = window.innerWidth / 2;
        const halfHeight = window.innerHeight / 2;
        currentPopup.style.left = `${vector.x * halfWidth + halfWidth}px`;
        currentPopup.style.top = `${-vector.y * halfHeight + halfHeight}px`;
    }
}

window.closePopup = function() {
    const popup = document.getElementById('location-popup');
    if (popup) popup.remove();
    currentPopup = null;
    currentPopupLocation = null;
    
    closeInfoTab();
};

const loader = new GLTFLoader();
loader.load('/assets/model/campus-simple.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error('Error loading model:', error);
});

function animate(time) {
    requestAnimationFrame(animate);
    
    TWEEN.update();
    
    controls.update();

    animateHotspots(time);
    
    if (document.visibilityState === 'visible') {
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
    }
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
}

onWindowResize();

// Search Bar Functions
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const infoTab = document.getElementById('info-tab');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (!query) {
        searchResults.style.display = 'none';
        return;
    }

    const uniqueResults = new Set();

    Object.entries(locations).forEach(([id, loc]) => {
        const matchesTitle = loc.title.toLowerCase().includes(query);
        const matchesTags = loc.tags?.some(tag => tag.toLowerCase().includes(query));
        const matchesDescription = loc.description?.toLowerCase().includes(query);

        if ((matchesTitle || matchesTags || matchesDescription) && !uniqueResults.has(id)) {
            uniqueResults.add(id);

            const item = document.createElement('div');
            item.className = 'search-result-item';

            const highlightedTitle = highlightMatchedText(loc.title, query);

            const matchingTags = loc.tags
                ?.filter(tag => tag.toLowerCase().includes(query))
                .map(tag => highlightMatchedText(tag, query))
                .join(', ') || 'No matching tags';

                item.innerHTML = `
                <div class="search-title-tag-container>">
                    <span><b>${highlightedTitle}</b></span>
                    <div class="tags">
                        <p>Tags:</p>
                        <div class="tag-container">
                            ${matchingTags.split(', ').map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="result-header">
                    <button class='search-input-btn' onClick="showInfo('${id}')">Learn More</button>
                </div>
            `;
            searchResults.appendChild(item);
        }
    });
    searchResults.style.display = uniqueResults.size > 0 ? 'block' : 'none';
});

// Mobile search functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const mobileSearchResults = document.getElementById('mobile-search-results');
    const mobileClearBtn = document.getElementById('mobile-search-clear-btn');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');

    mobileSearchInput.addEventListener('input', () => {
        const query = mobileSearchInput.value.toLowerCase().trim();
        mobileSearchResults.innerHTML = '';

        if (query) {
            mobileClearBtn.style.display = 'block';
            mobileSearchBtn.style.display = 'none';
        } else {
            mobileClearBtn.style.display = 'none';
            mobileSearchBtn.style.display = 'block';
            mobileSearchResults.style.display = 'none';
            return;
        }

        const uniqueResults = new Set();

        Object.entries(locations).forEach(([id, loc]) => {
            const matchesTitle = loc.title.toLowerCase().includes(query);
            const matchesTags = loc.tags?.some(tag => tag.toLowerCase().includes(query));
            const matchesDescription = loc.description?.toLowerCase().includes(query);

            if ((matchesTitle || matchesTags || matchesDescription) && !uniqueResults.has(id)) {
                uniqueResults.add(id);

                const item = document.createElement('div');
                item.className = 'search-result-item';

                const highlightedTitle = loc.title.replace(
                    new RegExp(query, 'gi'),
                    match => `<mark>${match}</mark>`
                );

                const matchingTags = loc.tags
                    ?.filter(tag => tag.toLowerCase().includes(query))
                    .map(tag => tag.replace(
                        new RegExp(query, 'gi'),
                        match => `<mark>${match}</mark>`
                    ))
                    .join(', ') || 'No matching tags';

                item.innerHTML = `
                    <div class="search-title-tag-container">
                        <span><b>${highlightedTitle}</b></span>
                        <div class="tags">
                            <p>Tags:</p>
                            <div class="tag-container">
                                ${matchingTags.split(', ').map(tag => 
                                    `<span class="tag">${tag}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="result-header">
                        <button class='search-input-btn' onclick="showInfo('${id}')">Learn More</button>
                    </div>
                `;

                mobileSearchResults.appendChild(item);
            }
        });

        mobileSearchResults.style.display = uniqueResults.size > 0 ? 'block' : 'none';
    });

    mobileClearBtn.addEventListener('click', () => {
        mobileSearchInput.value = '';
        mobileSearchResults.innerHTML = '';
        mobileSearchResults.style.display = 'none';
        mobileClearBtn.style.display = 'none';
        mobileSearchBtn.style.display = 'block';
    });
});

function highlightMatchedText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

searchInput.addEventListener('input', () => {
    toggleClearButton();
});

function toggleClearButton() {
    const searchClearBtn = document.getElementById('search-clear-btn');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput.value.length > 0) {
        searchClearBtn.style.display = 'block';
        searchBtn.style.display = 'none';
    } else {
        searchClearBtn.style.display = 'none';
        searchBtn.style.display = 'block';
    }
}

function clearSearch() {
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
    toggleClearButton();
    searchInput.focus();
}

document.getElementById('search-clear-btn').onclick = clearSearch;

// End of Search Functionality


// Show Info Tab
function showInfo(locationId) {

    const location = locations[locationId];

    let panoramaHtml = '';
    if (location.panoramaImages && location.panoramaImages.length > 0) {
        const floorGroups = {
            'Ground Floor': [],
            'Second Floor': [],
            'Third Floor': [],
            'Other': []
        };

        location.panoramaImages.forEach((imageData) => {
            if (imageData.label.includes('Ground Floor')) {
                floorGroups['Ground Floor'].push(imageData);
            } else if (imageData.label.includes('Second Floor')) {
                floorGroups['Second Floor'].push(imageData);
            } else if (imageData.label.includes('Third Floor')) {
                floorGroups['Third Floor'].push(imageData);
            } else {
                floorGroups['Other'].push(imageData);
            }
        });

        panoramaHtml = `<div class="panorama-section">`;
        
        Object.entries(floorGroups).forEach(([floorName, images]) => {
            if (images.length > 0) {
                panoramaHtml += `
                    <div class="floor-dropdown">
                        <button class="dropdown-header">${floorName} ▼</button>
                        <div class="dropdown-content" style="display:none;">
                            <div class="floor-panoramas">
                                ${images.map((imageData) => `
                                    <div class="panorama-container">
                                        <img src="${imageData.src}" alt="${location.title} Panorama" class="location-panorama">
                                        <div class="panorama-label-container">
                                            <div class="panorama-label">${imageData.label}</div>
                                        </div>
                                        <button onclick="openFullscreenPanorama('${imageData.src}')" class="fullscreen-btn">
                                            Fullscreen
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        panoramaHtml += `</div>`;
    }

    infoTab.innerHTML = `
        <div class="info-tab-header">
            <h2>${location.title}</h2>
            <button onclick="closeInfoTab()" class="info-tab-close-btn">&times;</button>
        </div>
        <div class="info-tab-content">
            <p class="info-tab-description">${location.description || 'No description available.'}</p>
            ${panoramaHtml}
        </div>
    `;

    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isVisible = dropdownContent.style.display === 'block';
            
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-header').forEach(header => {
                header.textContent = header.textContent.replace('▲', '▼');
            });

            dropdownContent.style.display = isVisible ? 'none' : 'block';
            
            this.textContent = isVisible 
                ? `${this.textContent.replace('▲', '▼')}` 
                : `${this.textContent.replace('▼', '▲')}`;
        });
    });
    
    infoTab.style.display = 'block';
    infoTab.style.transform = 'translateX(0)';
}

const style = document.createElement('style');
style.textContent = `
    mark {
        background-color: rgba(127, 4, 4, 0.2);
        color: #7F0404;
        font-weight: bold;
        padding: 0 2px;
        border-radius: 3px;
    }
`;
document.head.appendChild(style);
// End of Show Info Tab

//----------Window Functions-------------\\

window.toggleLegendPopup = function() {
    const legendPopup = document.getElementById('legend-popup');
    legendPopup.style.display = legendPopup.style.display === 'block' ? 'none' : 'block';
};

window.showInfo = (id) => { 

    clearSearch();

    const location = locations[id];

    let panoramaHtml = '';
    if (location.panoramaImages && location.panoramaImages.length > 0) {
        const floorGroups = {
            'Ground Floor': [],
            'Second Floor': [],
            'Third Floor': [],
            'Other': []
        };

        location.panoramaImages.forEach((imageData) => {
            if (imageData.label.includes('Ground Floor')) {
                floorGroups['Ground Floor'].push(imageData);
            } else if (imageData.label.includes('Second Floor')) {
                floorGroups['Second Floor'].push(imageData);
            } else if (imageData.label.includes('Third Floor')) {
                floorGroups['Third Floor'].push(imageData);
            } else {
                floorGroups['Other'].push(imageData);
            }
        });

        panoramaHtml = `<div class="panorama-section">`;
        
        Object.entries(floorGroups).forEach(([floorName, images]) => {
            if (images.length > 0) {
                panoramaHtml += `
                    <div class="floor-dropdown">
                        <button class="dropdown-header">${floorName} ▼</button>
                        <div class="dropdown-content" style="display:none;">
                            <div class="floor-panoramas">
                                ${images.map((imageData) => `
                                    <div class="panorama-container">
                                        <img src="${imageData.src}" alt="${location.title} Panorama" class="location-panorama">
                                        <div class="panorama-label-container">
                                            <div class="panorama-label">${imageData.label}</div>
                                        </div>
                                        <button onclick="openFullscreenPanorama('${imageData.src}')" class="fullscreen-btn">
                                            Fullscreen
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        panoramaHtml += `</div>`;
    }

    infoTab.innerHTML = `
        <div class="info-tab-header">
            <h2>${location.title}</h2>
            <button onclick="closeInfoTab()" class="info-tab-close-btn">&times;</button>
        </div>
        <div class="info-tab-content">
            <p class="info-tab-description">${location.description || 'No description available.'}</p>
            ${panoramaHtml}
        </div>
    `;

    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            const isVisible = dropdownContent.style.display === 'block';
            
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-header').forEach(header => {
                header.textContent = header.textContent.replace('▲', '▼');
            });

            dropdownContent.style.display = isVisible ? 'none' : 'block';
            
            this.textContent = isVisible 
                ? `${this.textContent.replace('▲', '▼')}` 
                : `${this.textContent.replace('▼', '▲')}`;
        });
    });
    
    infoTab.style.display = 'block';
    infoTab.style.transform = 'translateX(0)';
}; 

window.closeInfoTab = () => { 
    infoTab.style.transform = 'translateX(100%)';
    setTimeout(() => {
        infoTab.style.display = 'none';
    }, 300);
};

// Texture cache to reuse already loaded panorama textures
const textureCache = new Map();

// Pool of reusable objects
const objectPool = {
  geometry: null,
  material: null
};

window.openFullscreenPanorama = (imageSrc, position) => {
    // Create overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.className = 'fullscreen-panorama-overlay';
    fullscreenOverlay.innerHTML = `
        <div class="panorama-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading panorama...</div>
        </div>
        <button class="close-fullscreen-btn">&times;</button>
    `;
    document.body.appendChild(fullscreenOverlay);

    // Show loading indicator
    const loadingIndicator = fullscreenOverlay.querySelector('.panorama-loading');
    
    // Close popup if open
    if (typeof closePopup === 'function') {
        closePopup();
    }

    // Create panorama scene
    const panoramaScene = new THREE.Scene();
    
    // Check if texture is already in cache
    let panoramaTexture;
    if (textureCache.has(imageSrc)) {
        panoramaTexture = textureCache.get(imageSrc);
        createPanorama(panoramaTexture);
    } else {
        // Create texture loader with loading manager
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = (url, loaded, total) => {
            // Update loading progress
            const progress = Math.floor((loaded / total) * 100);
            const loadingText = fullscreenOverlay.querySelector('.loading-text');
            if (loadingText) {
                loadingText.textContent = `Loading panorama... ${progress}%`;
            }
        };
        
        const textureLoader = new THREE.TextureLoader(loadingManager);
        textureLoader.load(
            imageSrc,
            (texture) => {
                // Optimize texture
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false; // Disable mipmaps for panoramas
                
                // Add to cache
                textureCache.set(imageSrc, texture);
                
                // Hide loading indicator
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                }
                
                createPanorama(texture);
            },
            undefined,
            (error) => {
                console.error('Error loading panorama texture:', error);
                if (loadingIndicator) {
                    loadingIndicator.innerHTML = 'Error loading panorama';
                }
            }
        );
    }

    function createPanorama(texture) {
        // Create or reuse sphere geometry
        let geometry;
        if (objectPool.geometry) {
            geometry = objectPool.geometry;
        } else {
            geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);
            objectPool.geometry = geometry;
        }

        // Create material with the loaded texture
        const material = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
        });

        // Create the panorama mesh
        const panorama = new THREE.Mesh(geometry, material);
        panoramaScene.add(panorama);

        // Adjust FOV based on device width
        const fov = window.innerWidth <= 768 ? 90 : 110;
        const panoramaCamera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        panoramaCamera.position.set(0, 0, 0.1);

        // Create renderer
        const panoramaRenderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance' // Request high performance mode
        });
        panoramaRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
        fullscreenOverlay.appendChild(panoramaRenderer.domElement);

        // Create controls
        const panoramaControls = new OrbitControls(panoramaCamera, panoramaRenderer.domElement);
        panoramaControls.enableDamping = true;
        panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25;
        panoramaControls.screenSpacePanning = false;
        panoramaControls.minDistance = 0.1;
        panoramaControls.maxDistance = 500;
        panoramaControls.maxPolarAngle = Math.PI;
        panoramaControls.minPolarAngle = 0;
        panoramaControls.enableZoom = false;
        panoramaControls.enablePan = false;
        panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5;

        // Animation variables
        let animationFrameId;
        let isVisible = true;

        // Visibility API to pause rendering when tab is not visible
        if (document.hidden !== undefined) {
            document.addEventListener('visibilitychange', () => {
                isVisible = !document.hidden;
                if (!isVisible && animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                } else if (isVisible && !animationFrameId) {
                    animatePanorama();
                }
            });
        }

        // Animation function with throttled rendering
        let lastRenderTime = 0;
        const renderInterval = 1000 / 30; // Aim for 30 FPS to save performance

        function animatePanorama(time) {
            if (!isVisible) return;
            
            animationFrameId = requestAnimationFrame(animatePanorama);
            
            // Only render if controls changed or enough time passed
            const shouldRender = !lastRenderTime || time - lastRenderTime >= renderInterval || panoramaControls.update();
            
            if (shouldRender) {
                panoramaRenderer.render(panoramaScene, panoramaCamera);
                lastRenderTime = time;
            }
        }

        // Start animation
        animatePanorama();

        // Resize handler
        function onPanoramaResize() {
            panoramaCamera.aspect = window.innerWidth / window.innerHeight;
            panoramaCamera.updateProjectionMatrix();
            panoramaRenderer.setSize(window.innerWidth, window.innerHeight);
            
            // Update controls and FOV
            panoramaControls.dampingFactor = window.innerWidth <= 768 ? 0.15 : 0.25;
            panoramaControls.rotateSpeed = window.innerWidth <= 768 ? 0.35 : 0.5;
            panoramaCamera.fov = window.innerWidth <= 768 ? 90 : 110;
            panoramaCamera.updateProjectionMatrix();
        }

        // Add resize listener
        window.addEventListener('resize', onPanoramaResize);

        // Close button handler
        const closeButton = fullscreenOverlay.querySelector('.close-fullscreen-btn');
        closeButton.addEventListener('click', cleanupPanorama);

        // Prevent context menu
        fullscreenOverlay.addEventListener('contextmenu', e => e.preventDefault());

        // Cleanup function
        function cleanupPanorama() {
            console.log("Cleaning up panorama resources...");
            
            // Cancel animation frame
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            
            // Remove event listeners
            window.removeEventListener('resize', onPanoramaResize);
            fullscreenOverlay.removeEventListener('contextmenu', e => e.preventDefault());
            
            // Dispose resources that are not cached
            panoramaControls.dispose();
            panoramaRenderer.dispose();
            
            // Don't dispose geometry or texture as they're cached/pooled
            
            // Only dispose material (textures are kept in cache)
            if (material) material.dispose();
            
            // Remove from scene
            panoramaScene.remove(panorama);
            
            // Remove from DOM
            if (fullscreenOverlay.parentNode) {
                document.body.removeChild(fullscreenOverlay);
            }
            
            // Trigger panorama close event
            const event = new Event("panoramaClose");
            window.dispatchEvent(event);
        }
    }
};

// Cleanup function to call when unloading the page
window.cleanupTextureCache = () => {
    textureCache.forEach(texture => {
        texture.dispose();
    });
    textureCache.clear();
    
    if (objectPool.geometry) {
        objectPool.geometry.dispose();
        objectPool.geometry = null;
    }
    
    if (objectPool.material) {
        objectPool.material.dispose();
        objectPool.material = null;
    }
};

// Add unload event listener to clean up resources
window.addEventListener('beforeunload', window.cleanupTextureCache);

document.addEventListener('touchmove', (e) => {
    if (document.querySelector('.fullscreen-panorama-overlay')) {
        e.preventDefault();
    }
}, { passive: false });

window.toggleLegendPopup = () => {
    const legendPopup = document.getElementById('legend-popup');
    legendPopup.style.display = legendPopup.style.display === 'block' ? 'none' : 'block';
};

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
