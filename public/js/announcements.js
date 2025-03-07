/**
 * UPHSD-LP Campus Navigator - Announcements Data
 * Static data store for campus announcements
 */

const announcementData = {
    // Announcement items organized by ID
    "ann001": {
        id: "ann001",
        title: "Early Enrollment for Next Semester",
        content: "Early enrollment for the upcoming semester is now open. Take advantage of discounted fees when you enroll between March 15-31, 2025. Visit the Registrar's Office or use the online enrollment portal.",
        date: "2025-03-07",
        expiryDate: "2025-03-31",
        category: "academic",
        priority: "high",
        isActive: true,
        department: "Registrar",
        thumbnail: "/assets/images/announcements/enrollment.jpg"
    },
    "ann002": {
        id: "ann002",
        title: "Campus-Wide Maintenance Schedule",
        content: "Please be informed that there will be scheduled maintenance of electrical systems on March 12, 2025. Classes will proceed as normal, but some facilities may experience temporary power interruptions between 10:00 AM and 2:00 PM.",
        date: "2025-03-05",
        expiryDate: "2025-03-12",
        category: "facilities",
        priority: "medium",
        isActive: true,
        department: "Administration",
        thumbnail: "/assets/images/announcements/maintenance.jpg"
    },
    "ann003": {
        id: "ann003",
        title: "University Research Conference",
        content: "Join us for the Annual University Research Conference on March 20-21, 2025 at the Main Auditorium. Keynote speakers include leading researchers from partner universities. Registration is open to all students and faculty members.",
        date: "2025-03-01",
        expiryDate: "2025-03-21",
        category: "academic",
        priority: "medium",
        isActive: true,
        department: "Research",
        thumbnail: "/assets/images/announcements/research.jpg"
    },
    "ann004": {
        id: "ann004",
        title: "Career Fair 2025",
        content: "Over 50 companies will be participating in this year's Career Fair on March 25, 2025. Prepare your resumes and business attire. The event will be held at the University Gymnasium from 9:00 AM to 4:00 PM.",
        date: "2025-02-28",
        expiryDate: "2025-03-25",
        category: "career",
        priority: "high",
        isActive: true,
        department: "Career Services",
        thumbnail: "/assets/images/announcements/career.jpg"
    },
    "ann005": {
        id: "ann005",
        title: "Library Extended Hours During Finals Week",
        content: "The University Library will extend its operating hours during finals week (April 3-10, 2025). The library will be open from 7:00 AM to 10:00 PM on weekdays and 8:00 AM to 8:00 PM on weekends during this period.",
        date: "2025-03-15",
        expiryDate: "2025-04-10",
        category: "facilities",
        priority: "medium",
        isActive: true,
        department: "Library",
        thumbnail: "/assets/images/announcements/library.jpg"
    },
    "ann006": {
        id: "ann006",
        title: "Student Council Elections",
        content: "The filing of candidacy for the upcoming Student Council Elections is now open. Interested students can submit their applications to the Office of Student Affairs until March 18, 2025. Elections will be held on April 1-2, 2025.",
        date: "2025-03-04",
        expiryDate: "2025-04-02",
        category: "student",
        priority: "high",
        isActive: true,
        department: "Student Affairs",
        thumbnail: "/assets/images/announcements/election.jpg"
    },
    "ann007": {
        id: "ann007",
        title: "Cultural Festival Postponed",
        content: "Due to the expected inclement weather, the Cultural Festival originally scheduled for March 9, 2025 has been postponed to March 16, 2025. All performances and activities will proceed as planned on the new date.",
        date: "2025-03-06",
        expiryDate: "2025-03-16",
        category: "events",
        priority: "high",
        isActive: true,
        department: "Cultural Affairs",
        thumbnail: "/assets/images/announcements/festival.jpg"
    },
    "ann008": {
        id: "ann008",
        title: "New Scholarship Program",
        content: "The University is pleased to announce a new scholarship program for students with exceptional academic performance. Applications are now being accepted for the Fall 2025 semester. Visit the Financial Aid Office for details.",
        date: "2025-03-10",
        expiryDate: "2025-04-15",
        category: "financial",
        priority: "medium",
        isActive: true,
        department: "Financial Aid",
        thumbnail: "/assets/images/announcements/scholarship.jpg"
    },
    "ann009": {
        id: "ann009",
        title: "Campus App Version 2.0 Release",
        content: "The updated version of the UPHSD Campus App is now available for download. Version 2.0 includes new features such as real-time class schedules, interactive maps, and improved notification system. Update your app now!",
        date: "2025-03-03",
        expiryDate: "2025-03-31",
        category: "technology",
        priority: "low",
        isActive: true,
        department: "IT Services",
        thumbnail: "/assets/images/announcements/app.jpg"
    },
    "ann010": {
        id: "ann010",
        title: "COVID-19 Vaccination Drive",
        content: "A free COVID-19 vaccination drive will be conducted on campus on March 22-23, 2025. All students, faculty, and staff who need booster shots are encouraged to participate. Pre-registration is required through the University Health Portal.",
        date: "2025-03-08",
        expiryDate: "2025-03-23",
        category: "health",
        priority: "high",
        isActive: true,
        department: "Health Services",
        thumbnail: "/assets/images/announcements/vaccination.jpg"
    }
};

// Helper functions for working with announcement data

/**
 * Get all active announcements
 * @return {Array} Array of active announcement objects
 */
function getActiveAnnouncements() {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    return Object.values(announcementData).filter(announcement => {
        return announcement.isActive && 
               announcement.date <= todayStr && 
               announcement.expiryDate >= todayStr;
    });
}

/**
 * Get announcements by priority
 * @param {string} priority - Priority level (high, medium, low)
 * @return {Array} Array of announcement objects matching priority
 */
function getAnnouncementsByPriority(priority) {
    return getActiveAnnouncements().filter(announcement => 
        announcement.priority === priority
    );
}

/**
 * Get announcements by category
 * @param {string} category - Category name
 * @return {Array} Array of announcement objects matching category
 */
function getAnnouncementsByCategory(category) {
    return getActiveAnnouncements().filter(announcement => 
        announcement.category === category
    );
}

/**
 * Get recent announcements
 * @param {number} count - Number of recent announcements to return
 * @return {Array} Array of most recent announcement objects
 */
function getRecentAnnouncements(count = 5) {
    return getActiveAnnouncements()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
}

// Export the data and functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        announcementData,
        getActiveAnnouncements,
        getAnnouncementsByPriority,
        getAnnouncementsByCategory,
        getRecentAnnouncements
    };
}