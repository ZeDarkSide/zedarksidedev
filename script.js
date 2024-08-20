function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
window.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector('.menu-icon');
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        closeSidebar();
    }
});

document.querySelectorAll('.index a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Show or hide the button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Use setTimeout to ensure focus is removed after the click is fully processed
    setTimeout(function() {
        document.getElementById("back-to-top").blur();
    }, 100); // Delay of 100ms to ensure smooth transition
}

// Add touchend event listener to ensure the button is not highlighted after touch
document.getElementById("back-to-top").addEventListener('touchend', function() {
    this.style.backgroundColor = '#333';
    this.style.color = '#fff';
    this.blur(); // Ensure the button loses focus after touch
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.userSelect = 'none'; // Disable text selection
    document.body.style.webkitUserSelect = 'none'; // For Safari
    document.body.style.mozUserSelect = 'none'; // For Firefox
    document.body.style.msUserSelect = 'none'; // For IE/Edge
});
