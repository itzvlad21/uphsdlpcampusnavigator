const locations = {
    mainEntrance: {
        position: { x: 68, y: 10, z: 75 },
        title: 'Main Entrance',
        description: 'The main entry point to the University of Perpetual Help System DALTA, providing direct access to the campus facilities and serving as a welcoming area for students, staff, and visitors.',
        tags: ['entrance', 'main']
    },
    adminBuilding: {
        position: { x: -21, y: 10, z: -30 },
        title: 'Administration Building',
        description: 'The central administrative building of the university, home to key offices like the Registrar, Cashier, and Information Technology Services (ITS). It also houses classrooms and labs for the College of Computer Studies and the College of Law, ensuring both academic and operational functions are supported.',
        tags: ['Admin', 'Administration', 'ITS [ID Section]', 'Information Technology', 'Computer Science',
            'University Cashier [Ground Floor]', 'Registrar Office[Ground Floor]',
            'Mac Lab [Second Floor]',
            // College of Law
            'College of Law [Ground Floor]',
            // College of Dentistry
            'College of Dentistry [Ground Floor]',
            // CCS
            'CCS - Faculty Office [Second Floor]', 'CCS', 'College of Computer Studies [Second Floor]',
            // Comms
            'Department of Communication [Third Floor]',
            // Rooms
            'Room 201 [Second Floor]', 'Room 202 [Second Floor]', 'Room 203 [Second Floor]', 'Room 205 [Second Floor]',
            // Admission Office
            'Admission Office [Ground Floor]',
        ],
        panoramaImages: [
            { src: '/assets/panoramas/adminBuilding.jpg', label: 'Ground Floor - Inside admin building' },
            { src: '/assets/panoramas/admissionOffice.jpg', label: 'Ground Floor - Admission Office' },
            { src: '/assets/panoramas/collegeOfLaw.jpg', label: 'Ground Floor - College of Law' },
            { src: '/assets/panoramas/cashier.jpg', label: 'Ground Floor - Cashier' },
            { src: '/assets/panoramas/registrar.jpg', label: 'Ground Floor - Registrar' },
            { src: '/assets/panoramas/ccsBuilding1.jpg', label: 'Second Floor - College Of Computer Studies' },
            { src: '/assets/panoramas/ccsBuilding2.jpg', label: 'Second Floor - College Of Computer Studies' },
            { src: '/assets/panoramas/ccsBuilding3.jpg', label: 'Second Floor - College Of Computer Studies' },
            { src: '/assets/panoramas/ccsBuilding4.jpg', label: 'Second Floor - College Of Computer Studies' },
            { src: '/assets/panoramas/ccsBuilding5.jpg', label: 'Second Floor - College Of Computer Studies' }
        ]
    },
    newGradeSchoolBuilding: {
        position: { x: 10, y: 10, z: -20 },
        title: 'New Grade School Building',
        description: 'A modern facility designed for grade school students, featuring updated classrooms and learning spaces tailored to provide an engaging and effective educational experience.',
        tags: ['New', 'Grade School', 'Grade', "Grade School Principal Office [Ground Floor]"]
    },
    oldGradeSchoolBuilding: {
        position: { x: -90, y: 10, z: -10 },
        title: 'Old Grade School Building',
        description: 'A building now repurposed for various administrative functions. It houses offices for the College of Medical Technology, Business Administration, and other departments, providing essential support for academic and administrative activities.',
        panoramaImages: [
            { src: '/assets/panoramas/oldGradeSchoolEntrance.jpg', label: 'Ground Floor - Entrance' },
            { src: '/assets/panoramas/insideOldGradeSchoolBuilding.jpg', label: 'Ground Floor - Inside Entrance' },
            { src: '/assets/panoramas/schoolDirectorOffice.jpg', label: 'Ground Floor - Office of School Director' },
            { src: '/assets/panoramas/gspcOffice.jpg', label: 'Ground Floor - Graduate School Program Chairperson Office' },
            { src: '/assets/panoramas/CBAAMEDTECHDeanOffice.jpg', label: "Second Floor - CBAA Dean's Office and MED TECH Dean's Office" },
            { src: '/assets/panoramas/nursingDeanOffice.jpg', label: "Second Floor - Nursing Dean's Office" },
            { src: '/assets/panoramas/PTOTRTDeanOffice.jpg', label: "Second Floor - PT/OT/RT Dean's Office" },
            { src: '/assets/panoramas/CASDeanOffice.jpg', label: "Second Floor - College of Arts and Science Dean's Office" },
            { src: '/assets/panoramas/CPDeanOffice.jpg', label: "Second Floor - College of Pharmacy Dean's Office" },
            { src: '/assets/panoramas/EDUCOffice.jpg', label: "Second Floor - College of Education Dean's Office" },
            { src: '/assets/panoramas/researchAndDevelopmentCenter.jpg', label: "Second Floor - Research and Development Center" },
            { src: '/assets/panoramas/VPOffice.jpg', label: "Second Floor - Office of Executive Vice President" },
        ],
        tags: ["School Director Office [Ground Floor]", "Graduate School Program Chairperson Office [Ground Floor]",
            "Community Extension Services Office [Ground Floor]",
            "Marketing and Sales Office [Ground Floor]",
            "International Student Affairs Office [Ground Floor]",
            "Safety and Health Office [Ground Floor]",
            "HR Office [Ground Floor]",
            "DEAC [Ground Floor]",
            "Recruitment Office [Ground Floor]",
            // Perpetualite Office
            "Perpetualite Office [Second Floor]",
            "ETEEAP Office [Second Floor]",
            "NSRCS & CWTS Office [Second Floor]",
            "HR Director Office [Second Floor]",
            // Med Tech
            "College of Medical Technology", "College of Medical Technology Dean's Office [Second Floor]", "CMT", "CMT Dean's Office [Second Floor]", "Med Tech",
            // CBAA
            "College of Business Administration and Accountancy", "College of Business Administration and Accountancy Dean's Office [Second Floor]", "CBAA", "CBAA Dean's Office [Second Floor]",
            // Nursing
            "Nursing Dean's Office [Second Floor]",
            // PT OT RT
            "PT/OT/RT Dean's Office [Second Floor]", "Phsical Therapy", "Occupational Therapy", "Respiratory Therapist",
            // CAS
            "College of Arts and Science", "College of Arts and Science Dean's Office [Second Floor]", "CAS", "CAS Dean's Office [Second Floor]", 
            // CP
            "College of Pharmacy", "CP", "College of Pharmacy Dean's Office [Second Floor]",
            // Research and Development Center
            "Research and Development Center [Second Floor]",
            // Office of Executive VP
            "Office of Executive Vice President [Second Floor]",
            // SHS Principal Office
            "SHS Principal's Office [Second Floor]", "Senior High School Principal's Office [Second Floor]"
        ]
    },
    criminologyBuilding: {
        position: { x: -38, y: 10, z: -18 },
        title: 'Criminology Building',
        description: 'A dedicated facility for the College of Criminology, providing classrooms and offices that support academic programs and faculty workspaces.',
        panoramaImages: [
            { src: '/assets/panoramas/criminologyDeanOffice.jpg', label: "Ground Floor - Dean's Office" },
        ],
        tags: ["College of Criminology Dean's Office [Ground Floor]"],

    },
    epcHall: {
        position: { x: -70, y: 10, z: -53 },
        title: 'EPC Hall',
        description: 'A building that combines a comprehensive library for research and study with an auditorium used for university seminars, events, and activities.',
        panoramaImages: [
            { src: '/assets/panoramas/library.jpg', label: 'Ground Floor - Library' },
            { src: '/assets/panoramas/auditorium.jpg', label: 'Second Floor - Auditorium'}
        ],
        tags: ['University Library [Ground Floor]','Auditorium [Second Floor]', 'Arts and Culture Office [Second Floor]', 'Function Rooms [Second Floor]']
    },
    gymBuilding: {
        position: { x: 37, y: 10, z: -55 },
        title: 'Gym 1 and 2',
        description: 'Two large gymnasiums used for physical education classes, training sessions, and sports events, as well as recreational activities for students and staff.',
        tags: ['GYM', 'Basketball Court', 'Sports Office [Second Floor]']
    },
    cithmBuilding: {
        position: { x: -107, y: 10, z: -63 },
        title: 'International Hospitality Management Building',
        description: 'The main facility for the College of International Tourism and Hospitality Management, featuring modern training labs, kitchens, and classrooms designed to prepare students for the hospitality and tourism industries.',
        panoramaImages: [
            { src: '/assets/panoramas/hospitalityManagement.jpg', label: 'Ground Floor - Inside the building of International Hospitality Management' },
            { src: '/assets/panoramas/cithmDeanOffice.jpg', label: "Second Floor - CITHM Dean's Office" }
        ],
        tags: ['CITHM', "CITHM Dean's Office [Second Floor]", "College of International Tourism Hospitality Management Dean's Office [Second Floor]",
            "Security Office [Ground Floor]",
            "CITHM Library [Fourth Floor]"
        ]
    },
    newCollegeBuilding: {
        position: { x: -55, y: 10, z: -28 },
        title: 'New College Building',
        description: 'A modern facility that serves as a hub for senior high school and college students. It houses the TVET Department, Maritime Affairs offices, and classrooms for various academic programs.',
        panoramaImages: [
            { src: '/assets/panoramas/europeanGarden1.jpg', label: 'Ground Floor - European Garden' },
            { src: '/assets/panoramas/maritimeDeanOffice.jpg', label: 'Third Floor - Office of the Dean College of Maritime Education' },
            
        ],
        tags: [
            // 1st floor
            "Accounting Office [Ground Floor]",
            "Scholarship Office [Ground Floor]",
            "Engineering and Facilities Office [Ground Floor]",
            "Property Office [Ground Floor]",
            "University Clinic [Ground Floor]",
            // 2nd Floor
            "Student Affairs Services Office [Second Floor]",
            "SHS Faculty Office [Second Floor]",
            "ROTC Offices [Second Floor]",
            // 3rd Floor
            "College of Maritime [Third Floor]",
            "TVET Department [Third Floor]",
            "Office of the Senior Executive VP for Maritime Affairs [Third Floor]",
            "Office of the Dean college of Maritime Education [Third Floor]",
            // 4th Floor
            "Amphitheater [Fourth Floor]"
        ]
    },
    newHighSchoolBuilding: {
        position: { x: -78, y: 10, z: -66 },
        title: 'New High School Building',
        description: 'A modern building for high school education, featuring advanced classrooms and facilities to support student learning and extracurricular activities.',
        panoramaImages: [
            { src: '/assets/panoramas/newHighSchoolBuilding.jpg', label: '' }
        ],
        tags: ['high', 'high school', "Administration Office [Ground Floor]", "Junior Highschool Principal Office [Ground Floor]", "New Junior Business High School"]
    },
    collegeOfEngineering: {
        position: { x: -99, y: 10, z: -32 },
        title: 'College of Engineering Building',
        description: 'A facility for engineering and architecture programs, equipped with laboratories, classrooms, and resources for technical and practical learning.',
        panoramaImages: [
            { src: '/assets/panoramas/engineeringDeanOffice.jpg', label: "College of Engineering Building - Dean's Office [Second Floor]" }
        ],
        tags: ['engineering', 'architecture', 'engineer',
            "College of Electronic and Technologies Dean's Office [Second Floor]",
            "Autobacs [Third Floor]"
        ]
    },
    medicalCenterMain: {
        position: { x: 43, y: 10, z: 67 },
        title: 'Medical Center Main Building',
        description: 'The primary facility for medical services and training programs, catering to students, faculty, and staff.',
    },
    uniMall: {
        position: { x: 9, y: 10, z: 62 },
        title: 'University Mall',
        description: 'A shopping and dining area within the campus that provides retail services and food options for the university community.',
    },
    medicalArts: {
        position: { x: 20, y: 10, z: 84 },
        title: 'Medical Arts Building',
        description: 'A facility designed for healthcare education and training, featuring specialized classrooms and offices for medical-related programs.',
        tags: ['Guidance Office [Second Floor]']
    }
};

/**
 * Get all defined locations
 * @return {Object} Complete locations object
 */
function getAllLocations() {
    return locations;
}

/**
 * Get a specific location by ID
 * @param {string} locationId - ID of the location to retrieve
 * @return {Object|null} Location object if found, null otherwise
 */
function getLocation(locationId) {
    return locations[locationId] || null;
}

/**
 * Search locations by query
 * @param {string} query - Search query string
 * @return {Array} Array of location objects that match the query
 */
function searchLocations(query) {
    const lowercaseQuery = query.toLowerCase().trim();
    
    return Object.entries(locations)
        .filter(([id, location]) => {
            const matchesTitle = location.title.toLowerCase().includes(lowercaseQuery);
            const matchesTags = location.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery));
            const matchesDescription = location.description?.toLowerCase().includes(lowercaseQuery);
            
            return matchesTitle || matchesTags || matchesDescription;
        })
        .map(([id, location]) => ({
            id,
            ...location
        }));
}

/**
 * Get locations by tag
 * @param {string} tag - Tag to search for
 * @return {Array} Array of location objects with the specified tag
 */
function getLocationsByTag(tag) {
    const lowercaseTag = tag.toLowerCase();
    
    return Object.entries(locations)
        .filter(([id, location]) => {
            return location.tags?.some(t => t.toLowerCase().includes(lowercaseTag));
        })
        .map(([id, location]) => ({
            id,
            ...location
        }));
}

// Hotspots for interactive exploration
const hotspots = {
    pathway1: {
        position: { x: 66, y: 13, z: 57 },
        title: 'Ulane Pathway',
        panoramaImage: '/assets/panoramas/pathway_ulane1.jpg',
        nextHotspot: 'pathway2'
    },
    pathway2: {
        position: { x: 63, y: 13, z: 30 },
        title: 'Ulane Pathway',
        panoramaImage: '/assets/panoramas/pathway_ulane2.jpg',
        previousHotspot: 'pathway1',
        nextHotspot: 'pathway3'
    },
    pathway3: {
        position: { x: 54, y: 13, z: -36 },
        title: 'Ulane Pathway',
        panoramaImage: '/assets/panoramas/pathway_ulane3.jpg',
        previousHotspot: 'pathway2',
        nextHotspot: 'pathway4',
    },
    pathway4: {
        position: { x: 26, y: 10, z: -35 },
        title: 'Ulane Pathway',
        panoramaImage: '/assets/panoramas/pathway_ulane4.jpg',
        previousHotspot: 'pathway3',
        nextHotspot: 'pathway5'
    },
    pathway5: {
        position: { x: -8, y: 10, z: -34 },
        title: 'Ulane Pathway',
        panoramaImage: '/assets/panoramas/pathway_ulane5.jpg',
        previousHotspot: 'pathway4'
    },
    trackAndField: {
        position: { x: -8, y: 10, z: -41 },
        title: 'Track and Field',
        panoramaImage: '/assets/panoramas/trackAndField.jpg'
    },
    roadPath2: {
        position: { x: -28, y: 10, z: -40 },
        title: 'Road Path',
        panoramaImage: '/assets/panoramas/roadPath2.jpg',
        nextHotspot: 'roadPath3'
    },
    roadPath3: {
        position: { x: -65, y: 10, z: -32 },
        title: 'Road Path',
        panoramaImage: '/assets/panoramas/roadPath3.jpg',
        nextHotspot: 'roadPath4',
        previousHotspot: 'roadpath2'
    },
    roadPath4: {
        position: { x: -101, y: 10, z: -44 },
        title: 'Road Path',
        panoramaImage: '/assets/panoramas/roadPath4.jpg',
        previousHotspot: 'roadpath3'
    },
    japaneseGarden: {
        position: { x: -40, y: 10, z: -47 },
        title: 'Japanese Garden',
        panoramaImage: '/assets/panoramas/japaneseGarden.jpg'
    },
    libraryFront: {
        position: { x: -76, y: 10, z: -38 },
        title: 'Library Front',
        panoramaImage: '/assets/panoramas/libraryFront.jpg'
    },
    europeanGarden: {
        position: { x: -55, y: 10, z: -17 },
        title: 'European Garden',
        panoramaImage: '/assets/panoramas/europeanGarden.jpg'
    },
    library: {
        position: { },
        title: 'Library Front',
        panoramaImage: '/assets/panoramas/library.jpg'
    },
    admissionOffice: {
        position: { },
        title: 'Admission Office',
        panoramaImage: '/assets/panoramas/admissionOffice.jpg'
    },
    adminBuilding: {
        position: { },
        title: 'Admission Building',
        panoramaImage: '/assets/panoramas/adminBuilding.jpg'
    },
    ccsDepartment2ndFloor: {
        position: { },
        title: 'CCS Department (2nd Floor)',
        panoramaImage: '/assets/panoramas/ccsBuilding1.jpg'
    }
};

/**
 * Get all hotspots
 * @return {Object} Complete hotspots object
 */
function getAllHotspots() {
    return hotspots;
}

/**
 * Get a specific hotspot by ID
 * @param {string} hotspotId - ID of the hotspot to retrieve
 * @return {Object|null} Hotspot object if found, null otherwise
 */
function getHotspot(hotspotId) {
    return hotspots[hotspotId] || null;
}

// Label icons for amenities and facilities
const labelIcons = {
    restroom1: {
        position: { x: -35, y: 13, z: -21 },
        title: 'Restroom',
        icon: 'toilet.svg',
        type: 'restroom'
    },
    restroom2: {
        position: { x: -61, y: 13, z: -60 },
        title: 'Restroom',
        icon: 'toilet.svg',
        type: 'restroom'
    },
    restroom3: {
        position: { x: -89, y: 13, z: -20 },
        title: 'Restroom',
        icon: 'toilet.svg',
        type: 'restroom'
    },
    parking1: {
        position: { x: -13, y: 13, z: -78 },
        title: 'Parking Area',
        icon: 'car.svg',
        type: 'parking'
    },
    parking2: {
        position: { x: 80, y: 13, z: 57 },
        title: 'Parking Area',
        icon: 'car.svg',
        type: 'parking'
    },
    field: {
        position: { x: 8, y: 13, z: -52 },
        title: 'Track and Field',
        icon: 'person-simple-run.svg',
        type: 'field'
    },
    store1: {
        position: { x: -30, y: 13, z: -49 },
        title: 'Bookstore',
        icon: 'storefront.svg',
        type: 'store'
    },
    eatery1: {
        position: { x: -50.3, y: 13, z: -46 },
        title: 'Jolliperps',
        icon: 'eatery.svg',
        type: 'eatery'
    },
    eatery2: {
        position: { x: -89, y: 13, z: -31 },
        title: 'Canteen',
        icon: 'eatery.svg',
        type: 'eatery'
    },
    eatery3: {
        position: { x: -15, y: 13, z: -18 },
        title: 'Food Stall',
        icon: 'eatery.svg',
        type: 'eatery'
    },
    eatery4: {
        position: { x: -3, y: 13, z: -13 },
        title: 'Canteen',
        icon: 'eatery.svg',
        type: 'eatery'
    },
    pool: {
        position: { x: -111, y: 13, z: -27 },
        title: 'Swimming Pool',
        icon: 'swimming-pool.svg',
        type: 'pool'
    }
};

/**
 * Get all label icons
 * @return {Object} Complete labelIcons object
 */
function getAllLabelIcons() {
    return labelIcons;
}

/**
 * Get label icons by type
 * @param {string} type - Type of icon (e.g., 'restroom', 'parking', 'eatery')
 * @return {Array} Array of label icon objects with the specified type
 */
function getLabelIconsByType(type) {
    return Object.entries(labelIcons)
        .filter(([id, icon]) => icon.type === type)
        .map(([id, icon]) => ({
            id,
            ...icon
        }));
}

// Export the data and functions for use in other modules
if (typeof window !== 'undefined') {
    // Browser environment
    window.locationsData = {
        locations,
        hotspots,
        labelIcons,
        getAllLocations,
        getLocation,
        searchLocations,
        getLocationsByTag,
        getAllHotspots,
        getHotspot,
        getAllLabelIcons,
        getLabelIconsByType
    };
}

// For CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        locations,
        hotspots,
        labelIcons,
        getAllLocations,
        getLocation,
        searchLocations,
        getLocationsByTag,
        getAllHotspots,
        getHotspot,
        getAllLabelIcons,
        getLabelIconsByType
    };
}