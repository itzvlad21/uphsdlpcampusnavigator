const panoramaHotspots = {
    // Pathways Hotspots
    pathway4: {
        hotspots: {
            toTrackAndField: {
                position: { x: 3, y: 0, z: 0 },
                title: 'Track and Field',
                description: 'View the Track and Field area',
                nextPanorama: 'trackAndField',
            }
        }
    },
    
    pathway5: {
        hotspots: {
            toTrackAndField: {
                position: { x: 1, y: 0, z: -1 },
                title: 'Track and Field',
                description: 'View the Track and Field area',
                nextPanorama: 'trackAndField',
            },
            toAdmissionOffice: {
                position: { x: -0.9, y: -0.1, z: 1.5 },
                title: 'Admission Office',
                description: 'Go to Admission Office',
                nextPanorama: 'admissionOffice',
            }
        }
    },

    // Admin Building
    admissionOffice: {
        hotspots: {
            toPathway5: {
                position: { x: 2.4, y: 0.3, z: 2 },
                title: 'Ulane Path',
                description: 'Go to Ulane Pathway',
                nextPanorama: 'pathway5',
            },
            toAdminBuilding: {
                position: { x: 0.8, y: 0.1, z: -1 },
                title: 'Admin Building',
                description: 'Go to Admin Building',
                nextPanorama: 'adminBuilding',
            }
        }
    },

    adminBuilding: {
        hotspots: {
            toOutsideAdminBuilding: {
                position: { x: -3, y: 0.1, z: 0.5 },
                title: 'Administration Building (Outside)',
                description: 'Go to outside of Administration Building',
                nextPanorama: 'admissionOffice',
            },
            toRegistrar: {
                position: { x: 1.5, y: 0.1, z: -1 },
                title: 'Registrar',
                description: 'Go to Registrar',
                nextPanorama: 'registrar',
            },

            // CCS 2nd Floor
            to2ndFloor: {
                position: { x: -0.1, y: 0.1, z: 1 },
                title: 'CCS Department',
                description: 'Go to Second Floor',
                nextPanorama: 'ccsDepartment2ndFloor',
            }
        }
    },

    ccsDepartment2ndFloor: {
        hotspots: {
            toGroundFloor: {
                position: { x: 2.5, y: -0.5, z: 1 },
                title: 'Ground Floor',
                description: 'Go back to Ground Floor',
                nextPanorama: 'adminBuilding',
            }
        }
    },

    // Track and Field
    trackAndField: {
        hotspots: {
            toPathway4: {
                position: { x: -2, y: 0, z: 2 },
                title: 'Ulane Path',
                description: 'Return to Ulane Pathway',
                nextPanorama: 'pathway4',
            },
            toPathway5: {
                position: { x: -2, y: 0, z: -0.5 },
                title: 'Ulane Path',
                description: 'Go to Ulane Pathway',
                nextPanorama: 'pathway5',
            },
            toRoadPath1: {
                position: { x: 0, y: 0, z: -1 },
                title: 'Road Path',
                description: 'Go to Road Path',
                nextPanorama: 'roadPath2',
            }
        }
    },

    // Japanese Garden
    japaneseGarden: {
        hotspots: {
            toPathway3: {
                position: { x: 2, y: 0, z: 1 },
                title: 'Exit Garden',
                description: 'Return to the road path',
                nextPanorama: 'roadPath3',
            }
        }
    },
    
    // Library
    libraryFront: {
        hotspots: {
            toLibrary: {
                position: { x: 0.2, y: 0, z: 1 },
                title: 'Enter Library',
                description: 'Go inside the library',
                nextPanorama: 'library',
            },
            toPathWay3: {
                position: { x: -1, y: 0, z: -1 },
                title: 'Road Path',
                description: 'Return to the road path',
                nextPanorama: 'roadPath3',
            }
        }
    },

    library: {
        hotspots: {
            toLibraryFront: {
                position: { x: -0.6, y: 0, z: 1 },
                title: 'Exit Library',
                description: 'Go outside the library',
                nextPanorama: 'libraryFront',
            }
        }
    },
    
    // Road paths
    roadPath3: {
        hotspots: {
            toLibrary: {
                position: { x: -1.5, y: 0, z: 1 },
                title: 'Library (Inside)',
                description: 'Go inside the library',
                nextPanorama: 'library',
            },
            toLibraryFront: {
                position: { x: -0.2, y: 0, z: 1 },
                title: 'Library Front',
                description: 'Go to Library Front',
                nextPanorama: 'libraryFront',
            },
        }
    },
};

/**
 * Get all hotspots for a specific panorama
 * @param {string} panoramaId - ID of the panorama to get hotspots for
 * @return {Object|null} Object containing the hotspots if found, null otherwise
 */
function getHotspotsForPanorama(panoramaId) {
    if (!panoramaHotspots[panoramaId]) {
        console.warn(`No hotspots defined for panorama: ${panoramaId}`);
        return null;
    }
    
    return panoramaHotspots[panoramaId].hotspots;
}

/**
 * Check if a panorama has specific hotspots
 * @param {string} panoramaId - ID of the panorama to check
 * @return {boolean} True if the panorama has hotspots, false otherwise
 */
function hasPanoramaHotspots(panoramaId) {
    return !!(panoramaHotspots[panoramaId] && 
              panoramaHotspots[panoramaId].hotspots && 
              Object.keys(panoramaHotspots[panoramaId].hotspots).length > 0);
}

/**
 * Add a new hotspot to a panorama
 * @param {string} panoramaId - ID of the panorama to add the hotspot to
 * @param {string} hotspotId - ID for the new hotspot
 * @param {Object} hotspotData - Hotspot data including position, title, description, and nextPanorama
 * @return {boolean} True if the hotspot was added successfully, false otherwise
 */
function addHotspotToPanorama(panoramaId, hotspotId, hotspotData) {
    if (!panoramaHotspots[panoramaId]) {
        panoramaHotspots[panoramaId] = { hotspots: {} };
    }
    
    panoramaHotspots[panoramaId].hotspots[hotspotId] = hotspotData;
    return true;
}

// Export the functions for use in other modules
if (typeof window !== 'undefined') {
    // Browser environment
    window.panoramaHotspotsData = {
        panoramaHotspots,
        getHotspotsForPanorama,
        hasPanoramaHotspots,
        addHotspotToPanorama
    };
}

// For CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        panoramaHotspots,
        getHotspotsForPanorama,
        hasPanoramaHotspots,
        addHotspotToPanorama
    };
}