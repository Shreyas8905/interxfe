document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Activity Chart Configuration
    const ctx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Activity',
                data: [30, 25, 35, 40, 45, 35, 50, 40, 45, 55, 50, 60],
                borderColor: '#1a237e',
                backgroundColor: 'rgba(26, 35, 126, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#1a237e',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a237e',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#666666'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#666666'
                    }
                }
            }
        }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', function() {
        handleSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch(searchInput.value);
        }
    });

    function handleSearch(query) {
        if (query.trim() !== '') {
            console.log('Searching for:', query);
            // Implement search functionality here
        }
    }

    // Navigation active state
    const navItems = document.querySelectorAll('nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Progress bars animation
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
            bar.style.transition = 'width 1s ease-in-out';
        }, 100);
    });

    // Task actions
    const taskActions = document.querySelectorAll('.task-action');
    taskActions.forEach(action => {
        action.addEventListener('click', function() {
            const taskItem = this.closest('.task-item');
            taskItem.style.opacity = '0';
            setTimeout(() => {
                taskItem.style.display = 'none';
            }, 300);
        });
    });

    // Profile edit button
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    editProfileBtn.addEventListener('click', function() {
        console.log('Edit profile clicked');
        // Implement profile edit functionality here
    });

    // Notifications
    const notificationIcon = document.querySelector('[data-lucide="bell"]');
    notificationIcon.addEventListener('click', function() {
        console.log('Notifications clicked');
        // Implement notifications panel here
    });

    // Messages
    const messageIcon = document.querySelector('[data-lucide="mail"]');
    messageIcon.addEventListener('click', function() {
        console.log('Messages clicked');
        // Implement messages panel here
    });

    // See all buttons functionality
    const seeAllButtons = document.querySelectorAll('.see-all');
    seeAllButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.closest('.card').querySelector('h3').textContent;
            console.log(`See all clicked for ${section}`);
            // Implement see all functionality here
        });
    });

    // Next badge button
    const nextBadgeBtn = document.querySelector('.next-badge-btn');
    nextBadgeBtn.addEventListener('click', function() {
        console.log('Next badge clicked');
        // Implement next badge functionality here
    });

    // Responsive sidebar toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    document.querySelector('.header').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });

    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
        });

        element.addEventListener('mouseleave', function() {
            document.querySelector('.tooltip')?.remove();
        });
    });
});