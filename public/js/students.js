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

window.getStudentInfo = function(studentId) {
    if (!window.studentData[studentId]) {
        return null;
    }
    
    // Return student data (without password)
    const studentInfo = {...window.studentData[studentId]};
    delete studentInfo.defaultPassword; // Don't return password
    return studentInfo;
};

window.studentExists = function(studentId) {
    return window.studentData.hasOwnProperty(studentId);
};

window.getValidStudentIds = function() {
    return Object.keys(window.studentData);
};

console.log("students.js loaded successfully. Available student IDs:", window.getValidStudentIds());
