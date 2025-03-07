/**
 * UPHSD-LP Campus Navigator - Home Page Content Manager
 * Handles the display of announcements and advertisements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize content when the DOM is fully loaded
    initializeCarousel();
    loadAnnouncements();
});

/**
 * Initialize the advertisement carousel
 */
function initializeCarousel() {
    try {
        // Get the top 3 ads for the carousel
        const carouselAds = getCarouselAds(3);
        
        if (!carouselAds || carouselAds.length === 0) {
            console.warn('No active advertisements found for carousel');
            return;
        }
        
        // Get DOM elements
        const adsContainer = document.querySelector('.ads-container');
        const dotsContainer = document.querySelector('.slide-dots');
        
        if (!adsContainer || !dotsContainer) {
            console.error('Carousel containers not found in the DOM');
            return;
        }
        
        // Clear existing content
        adsContainer.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        // Add slides to the carousel
        carouselAds.forEach((ad, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `ad-slide ${index === 0 ? 'active' : ''}`;
            
            // Create content
            slide.innerHTML = `
                <img src="${ad.imageUrl}" alt="${ad.title}">
                <div class="slide-caption">
                    <h3>${ad.title}</h3>
                    <p>${ad.description}</p>
                </div>
            `;
            
            // Add click event to redirect to the ad link
            slide.addEventListener('click', function() {
                window.location.href = ad.linkUrl;
            });
            
            // Add to container
            adsContainer.appendChild(slide);
            
            // Create dot for navigation
            const dot = document.createElement('button');
            dot.classList.add('slide-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Initialize carousel controls
        initializeCarouselControls();
        
        // Start auto-sliding
        startAutoSlide();
        
        console.log('Carousel initialized successfully with', carouselAds.length, 'advertisements');
    } catch (error) {
        console.error('Error initializing carousel:', error);
    }
}

/**
 * Set up carousel control buttons
 */
function initializeCarouselControls() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
}

/**
 * Current slide index and auto-slide interval
 */
let currentSlide = 0;
let slideInterval;

/**
 * Go to a specific slide
 * @param {number} index - Slide index
 */
function goToSlide(index) {
    const slides = document.querySelectorAll('.ad-slide');
    const dots = document.querySelectorAll('.slide-dot');
    
    if (!slides.length || !dots.length) return;
    
    // Update current slide index
    currentSlide = index;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the selected slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset auto-slide timer
    resetAutoSlide();
}

/**
 * Go to the next slide
 */
function nextSlide() {
    const slides = document.querySelectorAll('.ad-slide');
    if (!slides.length) return;
    
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

/**
 * Go to the previous slide
 */
function prevSlide() {
    const slides = document.querySelectorAll('.ad-slide');
    if (!slides.length) return;
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
}

/**
 * Start auto-sliding
 */
function startAutoSlide() {
    // Clear any existing interval
    if (slideInterval) clearInterval(slideInterval);
    
    // Set new interval
    slideInterval = setInterval(nextSlide, 5000);
}

/**
 * Reset auto-slide timer
 */
function resetAutoSlide() {
    startAutoSlide();
}

/**
 * Load and display announcements
 */
function loadAnnouncements() {
    try {
        // Get recent announcements
        const recentAnnouncements = getRecentAnnouncements(5);
        
        if (!recentAnnouncements || recentAnnouncements.length === 0) {
            console.warn('No active announcements found');
            return;
        }
        
        // Get the announcements container
        const announcementList = document.querySelector('.announcement-list');
        if (!announcementList) {
            console.error('Announcement list container not found in the DOM');
            return;
        }
        
        // Clear existing content
        announcementList.innerHTML = '';
        
        // Add each announcement
        recentAnnouncements.forEach(announcement => {
            const announcementItem = document.createElement('div');
            announcementItem.className = 'announcement-item';
            
            // Format date
            const date = new Date(announcement.date);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Create announcement content
            announcementItem.innerHTML = `
                <div class="announcement-header">
                    <span class="announcement-date">${formattedDate}</span>
                    <span class="announcement-category ${announcement.category}">${announcement.category}</span>
                </div>
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-content">${announcement.content.substring(0, 150)}${announcement.content.length > 150 ? '...' : ''}</p>
            `;
            
            // Add to container
            announcementList.appendChild(announcementItem);
        });
        
        // If there are no announcements, show a message
        if (recentAnnouncements.length === 0) {
            announcementList.innerHTML = '<p>No announcements as of today</p>';
        }
        
        console.log('Announcements loaded successfully:', recentAnnouncements.length);
    } catch (error) {
        console.error('Error loading announcements:', error);
    }
}

/**
 * Show all announcements in the modal
 */
function showAllAnnouncements() {
    try {
        // Get all active announcements
        const allAnnouncements = getActiveAnnouncements();
        
        // Get the modal content container
        const announcementModalList = document.querySelector('#announcement-modal .announcement-list');
        if (!announcementModalList) {
            console.error('Announcement modal list container not found');
            return;
        }
        
        // Clear existing content
        announcementModalList.innerHTML = '';
        
        // Add each announcement
        allAnnouncements.forEach(announcement => {
            const announcementItem = document.createElement('div');
            announcementItem.className = 'announcement-item';
            
            // Format date
            const date = new Date(announcement.date);
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Create announcement content
            announcementItem.innerHTML = `
                <div class="announcement-header">
                    <span class="announcement-date">${formattedDate}</span>
                    <span class="announcement-category ${announcement.category}">${announcement.category}</span>
                </div>
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-content">${announcement.content}</p>
            `;
            
            // Add to container
            announcementModalList.appendChild(announcementItem);
        });
        
        // If there are no announcements, show a message
        if (allAnnouncements.length === 0) {
            announcementModalList.innerHTML = '<p>No announcements as of today</p>';
        }
        
        // Show the modal
        const modal = document.getElementById('announcement-modal');
        if (modal) modal.classList.add('active');
        
    } catch (error) {
        console.error('Error showing all announcements:', error);
    }
}

// Expose functions to global scope for HTML button onclick handlers
window.showAllAnnouncements = showAllAnnouncements;