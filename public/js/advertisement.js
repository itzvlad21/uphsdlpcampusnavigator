/**
 * UPHSD-LP Campus Navigator - Advertisement Data
 * Static data store for campus advertisements and promotional content
 */

const advertisementData = {
    // Advertisement items organized by ID
    "adv001": {
        id: "adv001",
        title: "Admissions 2025-2026",
        description: "Now accepting applications for the academic year 2025-2026. Early applicants get priority registration and scholarship opportunities.",
        imageUrl: "/assets/images/ads/admission_2024-2025.png",
        linkUrl: "https://perpetualdalta.edu.ph/admissions",
        startDate: "2025-02-01",
        endDate: "2025-05-31",
        priority: 1, // Lower number = higher priority
        isActive: true,
        department: "Admissions Office",
        targetAudience: ["prospective", "all"]
    },
    "adv002": {
        id: "adv002",
        title: "Skip The Lines",
        description: "Use our online services for faster processing of documents, payments, and enrollment. Available 24/7 for your convenience.",
        imageUrl: "/assets/images/ads/Skip-The-Lines.jpg",
        linkUrl: "https://perpetualdalta.edu.ph/online-services",
        startDate: "2025-03-01",
        endDate: "2025-12-31",
        priority: 2,
        isActive: true,
        department: "IT Services",
        targetAudience: ["students", "faculty", "all"]
    },
    "adv003": {
        id: "adv003",
        title: "Nursing Licensure Examination Passers",
        description: "Congratulations to our Nursing graduates who passed the May 2024 licensure examination. UPHSD remains one of the top performing schools in the country.",
        imageUrl: "/assets/images/ads/Nursing-Licensure-Examination-Passer-May-2024.jpg",
        linkUrl: "https://perpetualdalta.edu.ph/nursing-exam-results",
        startDate: "2025-02-15",
        endDate: "2025-04-15",
        priority: 3,
        isActive: true,
        department: "College of Nursing",
        targetAudience: ["prospective", "all"]
    },
};

// Helper functions for working with advertisement data

/**
 * Get all active advertisements
 * @return {Array} Array of active advertisement objects
 */
function getActiveAds() {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    return Object.values(advertisementData).filter(ad => {
        return ad.isActive && 
               ad.startDate <= todayStr && 
               ad.endDate >= todayStr;
    });
}

/**
 * Get advertisements sorted by priority
 * @param {number} limit - Maximum number of ads to return
 * @return {Array} Array of advertisement objects sorted by priority
 */
function getAdsByPriority(limit = 10) {
    return getActiveAds()
        .sort((a, b) => a.priority - b.priority)
        .slice(0, limit);
}

/**
 * Get advertisements for specific audience
 * @param {string} audience - Target audience (students, faculty, prospective, alumni, all)
 * @return {Array} Array of advertisement objects for the specified audience
 */
function getAdsByAudience(audience) {
    return getActiveAds().filter(ad => 
        ad.targetAudience.includes(audience) || ad.targetAudience.includes('all')
    );
}

/**
 * Get advertisements for a specific department
 * @param {string} department - Department name
 * @return {Array} Array of advertisement objects for the specified department
 */
function getAdsByDepartment(department) {
    return getActiveAds().filter(ad => 
        ad.department === department
    );
}

/**
 * Get carousel advertisements (top priority ads for slideshow)
 * @param {number} count - Number of carousel items to return
 * @return {Array} Array of top priority advertisement objects
 */
function getCarouselAds(count = 3) {
    return getAdsByPriority(count);
}

// Export the data and functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        advertisementData,
        getActiveAds,
        getAdsByPriority,
        getAdsByAudience,
        getAdsByDepartment,
        getCarouselAds
    };
}