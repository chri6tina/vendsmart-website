// BLOG-SPECIFIC JAVASCRIPT - ISOLATED FROM MAIN SITE
// This file handles additional blog functionality that doesn't conflict with Contentful

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe blog posts for animation (will be called after Contentful loads)
    function observeBlogPosts() {
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach(post => {
            observer.observe(post);
        });
    }
    
    // Make observeBlogPosts available globally so Contentful can call it
    window.observeBlogPosts = observeBlogPosts;
    
    // Reading time calculation
    function calculateReadingTime(text) {
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return minutes;
    }
    
    // Add reading time to posts (will be called after Contentful loads)
    function addReadingTimeToPosts() {
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach(post => {
            const excerpt = post.querySelector('p');
            if (excerpt && !post.querySelector('.read-time')) {
                const readingTime = calculateReadingTime(excerpt.textContent);
                const meta = post.querySelector('.post-meta');
                if (meta) {
                    const readingTimeSpan = document.createElement('span');
                    readingTimeSpan.className = 'read-time';
                    readingTimeSpan.textContent = `${readingTime} min read`;
                    meta.appendChild(readingTimeSpan);
                }
            }
        });
    }
    
    // Make addReadingTimeToPosts available globally
    window.addReadingTimeToPosts = addReadingTimeToPosts;
    
    // Share functionality
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = window.location.href;
            const title = document.title;
            const platform = this.getAttribute('data-platform');
            
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    console.log('Blog script loaded successfully!');
}); 