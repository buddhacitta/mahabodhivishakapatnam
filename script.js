// Mahabodhi Visakhapatnam Website - JavaScript Functions
// Using only vanilla JavaScript

// Real-time blog loading system
const blogFiles = [
    {
        filename: 'understanding-the-four-noble-truths.html',
        title: 'Understanding the Four Noble Truths',
        excerpt: 'A comprehensive guide to Buddha\'s fundamental teaching about suffering, its cause, its cessation, and the path to liberation.',
        category: 'Teachings',
        date: 'March 10, 2024',
        author: 'Venerable Thich Minh An',
        tags: ['Dharma', 'Buddhist Philosophy', 'Four Noble Truths', 'Teachings']
    },
    {
        filename: 'path-to-mindfulness.html',
        title: 'The Path to Mindfulness',
        excerpt: 'Exploring the ancient practice of mindfulness meditation and its relevance in our modern world. Learn how to cultivate awareness and find peace in the present moment.',
        category: 'Meditation',
        date: 'March 15, 2024',
        author: 'Dr. Priya Sharma',
        tags: ['Meditation', 'Mindfulness', 'Practice', 'Awareness']
    },
    {
        filename: 'visakhapatnam-community-outreach.html',
        title: 'Visakhapatnam Community Outreach',
        excerpt: 'Our recent community service activities and how we\'re making a difference in the lives of people in Visakhapatnam through compassionate action.',
        category: 'Community',
        date: 'March 8, 2024',
        author: 'Shri Ramesh Kumar',
        tags: ['Community', 'Service', 'Compassion', 'Outreach']
    },
    {
        filename: 'buddha-purnima-celebrations.html',
        title: 'Buddha Purnima Celebrations 2024',
        excerpt: 'Join us for the annual Buddha Purnima festival celebrating the birth, enlightenment, and parinirvana of Lord Buddha with prayers, meditation, and cultural programs.',
        category: 'Events',
        date: 'March 5, 2024',
        author: 'Event Committee',
        tags: ['Festival', 'Buddha Purnima', 'Celebration', 'Event']
    },
    {
        filename: 'middle-way-balance-in-life.html',
        title: 'The Middle Way: Balance in Life',
        excerpt: 'Discovering the wisdom of the Middle Way and how it can guide us to find balance between extremes in our daily lives.',
        category: 'Philosophy',
        date: 'March 1, 2024',
        author: 'Venerable Thich Minh An',
        tags: ['Philosophy', 'Middle Way', 'Balance', 'Wisdom']
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeBuddhaQuotes();
    initializeParticles();
    initializeNavigation();
    initializeRealTimeBlogSystem();
    initializeContactForm();
    initializeDonationForm();
    initializeAnimations();
    initializeGlobalSearch();
    initializeGallery();
    initializeAnimatedFooter();
});

// Animated Footer with Real-time Date
function initializeAnimatedFooter() {
    function updateFooterDate() {
        const currentYearElements = document.querySelectorAll('#currentYear');
        const currentYear = new Date().getFullYear();
        
        currentYearElements.forEach(element => {
            if (element) {
                // Add animation class
                element.style.transition = 'all 0.5s ease';
                element.style.color = '#00ffff';
                element.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                
                // Update year with animation
                element.textContent = currentYear;
                
                // Add pulsing animation
                setInterval(() => {
                    element.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        element.style.transform = 'scale(1)';
                    }, 500);
                }, 3000);
            }
        });
    }
    
    // Update immediately and then every minute
    updateFooterDate();
    setInterval(updateFooterDate, 60000);
}

// Real-time Blog System
function initializeRealTimeBlogSystem() {
    const blogGrid = document.querySelector('.blog-grid');
    const searchInput = document.getElementById('blogSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (!blogGrid) return;
    
    // Load and display all blog posts
    function loadBlogPosts(blogsToShow = blogFiles) {
        const blogHTML = blogsToShow.map(blog => `
            <article class="blog-item">
                <div class="blog-header">
                    <span class="blog-category">${blog.category}</span>
                    <span class="blog-date">${blog.date}</span>
                </div>
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="blogs/${blog.filename}" class="blog-link">Read More →</a>
            </article>
        `).join('');
        
        blogGrid.innerHTML = blogHTML;
    }
    
    // Initial load
    loadBlogPosts();
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                if (searchResults) searchResults.innerHTML = '';
                loadBlogPosts();
                return;
            }
            
            // Filter blog posts based on search query
            const filteredBlogs = blogFiles.filter(blog => 
                blog.title.toLowerCase().includes(query) ||
                blog.excerpt.toLowerCase().includes(query) ||
                blog.category.toLowerCase().includes(query) ||
                blog.author.toLowerCase().includes(query) ||
                blog.tags.some(tag => tag.toLowerCase().includes(query))
            );
            
            // Display results
            if (filteredBlogs.length === 0) {
                if (searchResults) {
                    searchResults.innerHTML = `
                        <div class="content-card">
                            <p style="text-align: center; color: #cccccc;">No blog posts found matching your search.</p>
                        </div>
                    `;
                }
                blogGrid.innerHTML = '';
            } else {
                if (searchResults) {
                    searchResults.innerHTML = `
                        <div class="content-card">
                            <h3 style="color: #00ffff; margin-bottom: 1rem;">Search Results (${filteredBlogs.length})</h3>
                        </div>
                    `;
                }
                loadBlogPosts(filteredBlogs);
            }
        });
    }
}

// Buddha Quotes System
function initializeBuddhaQuotes() {
    const quoteText = document.getElementById('buddhaQuote');
    const quoteAuthor = document.querySelector('.quote-author');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const shareQuoteBtn = document.getElementById('shareQuoteBtn');
    
    if (!quoteText || !newQuoteBtn) return;
    
    const buddhaQuotes = [
        {
            text: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            text: "Peace comes from within. Do not seek it without.",
            author: "Buddha"
        },
        {
            text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
            author: "Buddha"
        },
        {
            text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            author: "Buddha"
        },
        {
            text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
            author: "Buddha"
        },
        {
            text: "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
            author: "Buddha"
        },
        {
            text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
            author: "Buddha"
        },
        {
            text: "The only real failure in life is not to be true to the best one knows.",
            author: "Buddha"
        },
        {
            text: "Better than a thousand hollow words, is one word that brings peace.",
            author: "Buddha"
        },
        {
            text: "If you truly loved yourself, you could never hurt another.",
            author: "Buddha"
        }
    ];
    
    let currentQuoteIndex = 0;
    
    function displayNewQuote() {
        const randomIndex = Math.floor(Math.random() * buddhaQuotes.length);
        const quote = buddhaQuotes[randomIndex];
        
        // Fade out effect
        quoteText.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `- ${quote.author}`;
            quoteText.style.opacity = '1';
        }, 300);
        
        currentQuoteIndex = randomIndex;
    }
    
    // New quote button
    newQuoteBtn.addEventListener('click', displayNewQuote);
    
    // Share quote button
    if (shareQuoteBtn) {
        shareQuoteBtn.addEventListener('click', function() {
            const currentQuote = buddhaQuotes[currentQuoteIndex];
            const shareText = `"${currentQuote.text}" - ${currentQuote.author}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Buddha Quote',
                    text: shareText,
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(shareText).then(() => {
                    // Show temporary success message
                    const originalText = shareQuoteBtn.textContent;
                    shareQuoteBtn.textContent = 'Copied!';
                    setTimeout(() => {
                        shareQuoteBtn.textContent = originalText;
                    }, 2000);
                });
            }
        });
    }
    
    // Auto-change quote every 30 seconds
    setInterval(displayNewQuote, 30000);
}

// Enhanced Global Search System
function initializeGlobalSearch() {
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.querySelector('.global-search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.global-search-input');
    const searchLoading = document.querySelector('.search-loading');
    const searchResults = document.querySelector('.global-search-results');
    
    if (!searchIcon || !searchOverlay) return;
    
    // Combined data for search
    const searchData = [
        // Blog data
        ...blogFiles.map(blog => ({
            title: blog.title,
            excerpt: blog.excerpt,
            url: `blogs/${blog.filename}`,
            category: "Blog",
            tags: blog.tags.map(tag => tag.toLowerCase())
        })),
        // Gallery data
        {
            title: "Sacred Gallery",
            excerpt: "Experience the spiritual journey through our collection of sacred moments, events, and teachings at Mahabodhi Visakhapatnam.",
            url: "gallery.html",
            category: "Gallery",
            tags: ["photos", "events", "meditation", "festivals", "community"]
        },
        // About data
        {
            title: "About Mahabodhi Visakhapatnam",
            excerpt: "Learn about our heritage, mission, and connection to the Mahabodhi Society Bengaluru. Discover our activities and teachings.",
            url: "about.html",
            category: "About",
            tags: ["heritage", "mission", "bengaluru", "buddhist center", "activities"]
        },
        // Contact data
        {
            title: "Contact Us",
            excerpt: "Connect with us for spiritual guidance, meditation sessions, or to learn more about our Buddhist community in Visakhapatnam.",
            url: "contact.html",
            category: "Contact",
            tags: ["contact", "meditation", "guidance", "community", "location"]
        },
        // Donation data
        {
            title: "Support Our Mission",
            excerpt: "Your generous donations help us continue our mission of spreading Buddhist teachings, supporting meditation programs, and serving the community.",
            url: "donate.html",
            category: "Donation",
            tags: ["donation", "support", "dana", "charity", "mission"]
        }
    ];
    
    // Open search overlay
    searchIcon.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchIcon.classList.add('active');
        searchInput.focus();
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
    });
    
    // Close search overlay
    searchClose.addEventListener('click', closeSearch);
    
    // Close on overlay click
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });
    
    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchIcon.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        searchLoading.classList.remove('active');
    }
    
    // Search functionality
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            showNoResults('Please enter at least 2 characters to search.');
            return;
        }
        
        // Show loading animation
        searchResults.classList.remove('active');
        searchLoading.classList.add('active');
        
        // Simulate search with loading animation
        setTimeout(() => {
            searchLoading.classList.remove('active');
            
            // Filter data based on search query
            const filteredResults = searchData.filter(item => 
                item.title.toLowerCase().includes(query) ||
                item.excerpt.toLowerCase().includes(query) ||
                item.tags.some(tag => tag.toLowerCase().includes(query)) ||
                (item.category && item.category.toLowerCase().includes(query))
            );
            
            // Display results with smooth animation
            displaySearchResults(filteredResults, query);
        }, 2000);
    }
    
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            showNoResults(`No results found for "${query}"`);
            return;
        }
        
        const resultsHTML = results.map((item, index) => `
            <div class="search-result-item" style="animation-delay: ${index * 0.1}s">
                <div class="search-result-title">${highlightText(item.title, query)}</div>
                <div class="search-result-excerpt">${highlightText(item.excerpt, query)}</div>
                <div class="search-result-category">${item.category}</div>
                <a href="${item.url}" class="search-result-url">${item.url}</a>
            </div>
        `).join('');
        
        searchResults.innerHTML = resultsHTML;
        searchResults.classList.add('active');
        
        // Add click handlers to result items
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.querySelector('.search-result-url');
                if (link) {
                    window.location.href = link.href;
                }
            });
        });
    }
    
    function showNoResults(message) {
        searchResults.innerHTML = `
            <div class="no-results">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <div>${message}</div>
            </div>
        `;
        searchResults.classList.add('active');
    }
    
    function highlightText(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span style="background: rgba(0, 255, 255, 0.3); color: #00ffff; padding: 0 2px; border-radius: 2px;">$1</span>');
    }
}

// Gallery System
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal-close');
    
    if (!galleryGrid) return;
    
    // Gallery items data with fallback images
    const galleryItems = [
        {
            id: 1,
            title: "Morning Meditation Session",
            description: "Daily meditation practice at sunrise",
            category: "meditation",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 2,
            title: "Buddha Purnima Festival",
            description: "Annual celebration of Buddha's birth",
            category: "festivals",
            image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 3,
            title: "Dharma Teaching Session",
            description: "Weekly dharma study and discussion",
            category: "teachings",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 4,
            title: "Community Food Distribution",
            description: "Monthly community service activity",
            category: "community",
            image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 5,
            title: "Evening Prayer Assembly",
            description: "Daily evening prayers and chanting",
            category: "events",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 6,
            title: "Mindfulness Workshop",
            description: "Weekend mindfulness training program",
            category: "meditation",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 7,
            title: "Vesak Day Celebration",
            description: "International Buddhist festival celebration",
            category: "festivals",
            image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 8,
            title: "Children's Dharma Class",
            description: "Buddhist teachings for young minds",
            category: "teachings",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 9,
            title: "Charity Drive",
            description: "Monthly charity and donation drive",
            category: "community",
            image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 10,
            title: "New Year Blessing Ceremony",
            description: "Annual new year blessing event",
            category: "events",
            image: "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ];
    
    let currentFilter = 'all';
    let currentPage = 0;
    const itemsPerPage = 6;
    
    // Load images from /img/2025/ directory
    function loadImagesFromDirectory() {
        // In a real environment, this would use server-side directory listing
        // For now, we'll use the fallback gallery items
        return galleryItems;
    }
    
    function renderGallery(items, append = false) {
        const filteredItems = currentFilter === 'all' ? items : items.filter(item => item.category === currentFilter);
        const startIndex = append ? currentPage * itemsPerPage : 0;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredItems.length);
        const itemsToRender = filteredItems.slice(startIndex, endIndex);
        
        if (!append) {
            galleryGrid.innerHTML = '<div class="gallery-loading active"><div class="loading-spinner"></div><p>Loading sacred moments...</p></div>';
            
            setTimeout(() => {
                galleryGrid.innerHTML = '';
                displayGalleryItems(itemsToRender);
            }, 1000);
        } else {
            displayGalleryItems(itemsToRender, true);
        }
        
        // Update load more button
        if (endIndex >= filteredItems.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
        
        currentPage = append ? currentPage + 1 : 1;
    }
    
    function displayGalleryItems(items, append = false) {
        const itemsHTML = items.map((item, index) => `
            <div class="gallery-item" style="animation-delay: ${index * 0.1}s" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                <div class="gallery-info">
                    <h3 class="gallery-title">${item.title}</h3>
                    <p class="gallery-description">${item.description}</p>
                </div>
            </div>
        `).join('');
        
        if (append) {
            galleryGrid.insertAdjacentHTML('beforeend', itemsHTML);
        } else {
            galleryGrid.innerHTML = itemsHTML;
        }
        
        // Add click handlers for modal
        galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('.gallery-image');
                const title = this.querySelector('.gallery-title').textContent;
                const description = this.querySelector('.gallery-description').textContent;
                
                openImageModal(img.src, title, description);
            });
        });
    }
    
    function openImageModal(src, title, description) {
        if (modalImage && modalTitle && modalDescription) {
            modalImage.src = src;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            imageModal.classList.add('active');
        }
    }
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            currentPage = 0;
            renderGallery(galleryItems);
        });
    });
    
    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.disabled = true;
            this.innerHTML = '<span class="loading"></span> Loading...';
            
            setTimeout(() => {
                renderGallery(galleryItems, true);
                this.disabled = false;
                this.innerHTML = `
                    <span class="btn-icon">📸</span>
                    <span class="btn-text">Load More Images</span>
                    <span class="btn-arrow">↓</span>
                `;
            }, 1000);
        });
    }
    
    // Modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
        });
    }
    
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
            }
        });
    }
    
    // Initialize gallery
    const images = loadImagesFromDirectory();
    renderGallery(images);
}

// Particle System
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Create additional floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        particlesContainer.appendChild(particle);
    }
}

// Navigation Functions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Contact Form Functions
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-btn');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showFormSuccess(contactForm);
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            contactForm.reset();
        }, 2000);
    });
}

// Donation Form Functions
function initializeDonationForm() {
    const donationForm = document.getElementById('donationForm');
    const quickAmountBtns = document.querySelectorAll('.quick-amount');
    const donationAmount = document.getElementById('donationAmount');
    const summaryAmount = document.getElementById('summaryAmount');
    const summaryType = document.getElementById('summaryType');
    const summaryFrequency = document.getElementById('summaryFrequency');
    const donationType = document.getElementById('donationType');
    const frequencyRadios = document.querySelectorAll('input[name="frequency"]');
    
    if (!donationForm) return;
    
    // Quick amount buttons
    quickAmountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.dataset.amount;
            donationAmount.value = amount;
            updateSummary();
        });
    });
    
    // Update summary on form changes
    function updateSummary() {
        const amount = donationAmount.value || '0';
        const type = donationType.value || '-';
        const frequency = document.querySelector('input[name="frequency"]:checked')?.value || 'once';
        
        if (summaryAmount) summaryAmount.textContent = `₹${amount}`;
        if (summaryType) summaryType.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        if (summaryFrequency) summaryFrequency.textContent = frequency === 'once' ? 'One-time' : frequency.charAt(0).toUpperCase() + frequency.slice(1);
    }
    
    // Add event listeners for real-time updates
    if (donationAmount) donationAmount.addEventListener('input', updateSummary);
    if (donationType) donationType.addEventListener('change', updateSummary);
    frequencyRadios.forEach(radio => {
        radio.addEventListener('change', updateSummary);
    });
    
    // Form submission
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.donation-btn');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Processing...';
        submitButton.disabled = true;
        
        // Simulate payment processing
        setTimeout(() => {
            showFormSuccess(donationForm);
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            // Don't reset form as user might want to see their donation details
        }, 3000);
    });
}

// Form Success Message
function showFormSuccess(form) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success';
    successMessage.innerHTML = '🙏 Thank you! Your message has been received. We will get back to you soon.';
    form.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Animation Functions
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all content cards
    document.querySelectorAll('.content-card, .feature-card, .gallery-item, .blog-item').forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .content-card,
        .feature-card,
        .gallery-item,
        .blog-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .content-card.animate-in,
        .feature-card.animate-in,
        .gallery-item.animate-in,
        .blog-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .search-result-item {
            opacity: 0;
            transform: translateY(20px);
            animation: slideInResult 0.5s ease forwards;
        }
        
        @keyframes slideInResult {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Utility Functions
function createGlowEffect(element) {
    element.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
    element.style.borderColor = '#00ffff';
}

function removeGlowEffect(element) {
    element.style.boxShadow = '';
    element.style.borderColor = '';
}

// Handle image loading errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Replace with fallback image
        e.target.src = 'https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
}, true);