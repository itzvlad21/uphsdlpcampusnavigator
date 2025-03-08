// Configuration options for performance
const performanceConfig = {
    useLowQualityOnMobile: true,
    
    // FPS limits for different devices
    fpsLimit: {
        mobile: 60,
        desktop: 240
    },
    
    // Camera settings
    camera: {
        maxDistance: 300,
        minDistance: 120,
        defaultPosition: { x: 0, y: 250, z: 10 }
    },
    
    // Object culling distance
    cullingDistance: 350,
    
    // Texture quality settings
    textureQuality: {
        mobile: {
            mipmaps: false,
            anisotropy: 1
        },
        desktop: {
            mipmaps: true,
            anisotropy: 4
        }
    }
};

function initPerformanceOptimizations() {
    // Detect if running on mobile
    const isMobile = window.innerWidth <= 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Apply device-specific optimizations
    applyDeviceSpecificOptimizations(isMobile);
    
    // Set up FPS limiting
    setupFpsLimiting(isMobile);
    
    // Set up resource cleanup
    setupResourceCleanup();
    
    // Add optimization manager to window for external access
    window.optimizationManager = {
        isMobile,
        applyDeviceSpecificOptimizations: () => applyDeviceSpecificOptimizations(isMobile),
        flushUnusedResources
    };
    
    console.log(`Performance optimizations initialized. Running in ${isMobile ? 'mobile' : 'desktop'} mode.`);
}

/**
 * Apply device-specific optimizations
 * @param {boolean} isMobile - Whether the device is mobile
 */
function applyDeviceSpecificOptimizations(isMobile) {
    // Get main renderer (assumed to be window.renderer)
    const renderer = window.renderer;
    if (!renderer) return;
    
    // Optimize renderer settings
    if (isMobile && performanceConfig.useLowQualityOnMobile) {
        // Mobile optimizations
        renderer.setPixelRatio(1);  // Force 1:1 pixel ratio for mobile
        renderer.shadowMap.enabled = false;
        renderer.powerPreference = 'high-performance';
    } else {
        // Desktop optimizations
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio at 2
        renderer.powerPreference = 'high-performance';
    }
    
    // Optimize texture settings globally
    THREE.Texture.DEFAULT_ANISOTROPY = isMobile 
        ? performanceConfig.textureQuality.mobile.anisotropy 
        : performanceConfig.textureQuality.desktop.anisotropy;
}

/**
 * Set up FPS limiting to save power
 * @param {boolean} isMobile - Whether the device is mobile
 */
function setupFpsLimiting(isMobile) {
    // Target FPS based on device type
    const targetFPS = isMobile 
        ? performanceConfig.fpsLimit.mobile 
        : performanceConfig.fpsLimit.desktop;
    
    // Store the original requestAnimationFrame
    const originalRAF = window.requestAnimationFrame;
    
    // Variables for FPS limiting
    let lastFrameTime = 0;
    const frameInterval = 1000 / targetFPS;
    
    // Override requestAnimationFrame with FPS limiting version
    window.requestAnimationFrame = function(callback) {
        return originalRAF(function(currentTime) {
            // Skip frames to maintain target FPS
            if (currentTime - lastFrameTime < frameInterval) {
                callback(currentTime);
                return;
            }
            
            // Update last frame time
            lastFrameTime = currentTime;
            
            // Call original callback
            callback(currentTime);
        });
    };
}

/**
 * Set up resource cleanup during idle times
 */
function setupResourceCleanup() {
    // Periodically flush unused resources during idle time
    if ('requestIdleCallback' in window) {
        // Use requestIdleCallback if available
        window.requestIdleCallback(() => flushUnusedResources(), { timeout: 5000 });
    } else {
        // Fall back to setTimeout
        setTimeout(() => flushUnusedResources(), 10000);
    }
}

/**
 * Flush unused resources to free memory
 */
function flushUnusedResources() {
    console.log('Flushing unused resources...');
    
    // Dispose unused textures from THREE.Cache
    try {
        THREE.Cache.clear();
    } catch (e) {
        console.error('Error clearing THREE.Cache:', e);
    }
    
    // Try to force garbage collection if available
    if (window.gc) {
        try {
            window.gc();
        } catch (e) {
            console.error('Error forcing GC:', e);
        }
    }
    
    // Schedule next cleanup
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => flushUnusedResources(), { timeout: 10000 });
    } else {
        setTimeout(() => flushUnusedResources(), 15000);
    }
}

/**
 * Detect and respond to low-performance devices
 */
function detectLowPerformanceDevice() {
    // Check for low performance indicators
    const isLowPerformance = (
        // Check for low memory (if API is available)
        (navigator.deviceMemory && navigator.deviceMemory < 4) ||
        // Check for low CPU cores (if API is available)
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
        // Fallback to mobile check
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
    
    // Apply extra optimizations for low-performance devices
    if (isLowPerformance) {
        console.log('Low performance device detected. Applying additional optimizations.');
        
        // Reduce animation complexity
        performanceConfig.fpsLimit.mobile = 24;
        performanceConfig.fpsLimit.desktop = 30;
        
        // Reduce draw distance
        performanceConfig.cullingDistance = 200;
        
        // Reapply optimizations
        applyDeviceSpecificOptimizations(true);
    }
    
    return isLowPerformance;
}

/**
 * Apply optimizations to a specific scene
 * @param {THREE.Scene} scene - The scene to optimize
 */
function optimizeScene(scene) {
    if (!scene) return;
    
    // Enable frustum culling
    scene.traverse(object => {
        if (object.isMesh) {
            object.frustumCulled = true;
        }
    });
    
    // Find and optimize loaded models
    scene.traverse(object => {
        if (object.isMesh) {
            // Optimize geometries
            if (object.geometry) {
                object.geometry.computeBoundingSphere();
                object.geometry.computeBoundingBox();
            }
            
            // Optimize materials
            if (object.material) {
                // Single material
                optimizeMaterial(object.material);
            } else if (Array.isArray(object.materials)) {
                // Multiple materials
                object.materials.forEach(material => optimizeMaterial(material));
            }
        }
    });
}

/**
 * Optimize a Three.js material
 * @param {THREE.Material} material - Material to optimize
 */
function optimizeMaterial(material) {
    if (!material) return;
    
    // Skip materials that have already been optimized
    if (material._optimized) return;
    
    // Apply optimizations based on device type
    const isMobile = window.innerWidth <= 768;
    
    // Common optimizations
    material.fog = false;
    
    // Mobile-specific optimizations
    if (isMobile && performanceConfig.useLowQualityOnMobile) {
        material.precision = 'lowp';  // Low precision shaders
        material.flatShading = true;  // Use flat shading
        
        // Disable features based on material type
        if (material.map) {
            material.map.minFilter = THREE.LinearFilter;
            material.map.generateMipmaps = false;
        }
    }
    
    // Mark as optimized
    material._optimized = true;
}

// Initialize optimizations when the module loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize optimizations
    initPerformanceOptimizations();
    
    // Check for low performance devices after a short delay
    setTimeout(() => {
        detectLowPerformanceDevice();
    }, 1000);
    
    // Optimize main scene if available
    if (window.scene) {
        optimizeScene(window.scene);
    }
});

// Export functions for use in other modules
window.performanceOptimizations = {
    optimizeScene,
    optimizeMaterial,
    flushUnusedResources,
    detectLowPerformanceDevice
};
