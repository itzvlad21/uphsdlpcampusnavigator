/**
 * UPHSD-LP Campus Navigator - Student Data
 * Contains student credentials and information for authentication
 */

// Explicitly declare in global scope with window
window.studentData = {
    "12-3456-789": {
        "id": 1,
        "defaultPassword": "UPHSD12-3456-789",
        "name": "Juan Dela Cruz",
        "course": "BS Computer Science",
        "year": 3,
        "college": "College of Computer Studies",
        "enrollmentStatus": "Enrolled",
        "profileImage": "/assets/images/profile/student1.jpg"
    },
    "21-1375-521": {
        "id": 2,
        "defaultPassword": "UPHSD21-1375-521",
        "name": "Maria Santos",
        "course": "BS Nursing",
        "year": 2,
        "college": "College of Nursing",
        "enrollmentStatus": "Enrolled",
        "profileImage": "/assets/images/profile/student2.jpg"
    },
    "13-3246-275": {
        "id": 3,
        "defaultPassword": "UPHSD13-3246-275",
        "name": "Miguel Reyes",
        "course": "BS Business Administration",
        "year": 4,
        "college": "College of Business Administration",
        "enrollmentStatus": "Enrolled",
        "profileImage": "/assets/images/profile/student3.jpg"
    }
};

/**
 * Verify student credentials
 * @param {string} studentId - Student ID in format XX-XXXX-XXX
 * @param {string} password - Password to verify
 * @return {Object|null} Student data if credentials are valid, null otherwise
 */
window.verifyStudentCredentials = function(studentId, password) {
    // Check if student exists
    if (!window.studentData[studentId]) {
        return null;
    }
    
    // Check if password matches
    if (window.studentData[studentId].defaultPassword !== password) {
        return null;
    }
    
    // Return student data (without password)
    const studentInfo = {...window.studentData[studentId]};
    delete studentInfo.defaultPassword; // Don't return password
    return studentInfo;
};

/**
 * Get student information by ID
 * @param {string} studentId - Student ID in format XX-XXXX-XXX
 * @return {Object|null} Student data if found, null otherwise
 */
window.getStudentInfo = function(studentId) {
    if (!window.studentData[studentId]) {
        return null;
    }
    
    // Return student data (without password)
    const studentInfo = {...window.studentData[studentId]};
    delete studentInfo.defaultPassword; // Don't return password
    return studentInfo;
};

/**
 * Check if student ID exists
 * @param {string} studentId - Student ID to check
 * @return {boolean} True if student exists, false otherwise
 */
window.studentExists = function(studentId) {
    return window.studentData.hasOwnProperty(studentId);
};

/**
 * Get all valid student IDs (for testing/debugging)
 * @return {Array} Array of valid student IDs
 */
window.getValidStudentIds = function() {
    return Object.keys(window.studentData);
};

// Console log to confirm the file is loaded
console.log("students.js loaded successfully. Available student IDs:", window.getValidStudentIds());