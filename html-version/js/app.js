// Main application logic for FinanceCon

let currentSection = 'home';
let mobileMenuOpen = false;
let languageMenuOpen = false;

// Navigate to section
function navigateToSection(section) {
  // Hide all sections
  document.querySelectorAll('[data-section]').forEach(el => {
    el.style.display = 'none';
  });
  
  // Show target section
  const targetSection = document.querySelector(`[data-section="${section}"]`);
  if (targetSection) {
    targetSection.style.display = 'block';
    currentSection = section;
    
    // Update active nav item
    updateActiveNav(section);
    
    // Track page view
    trackPageView(section, getLanguage());
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  }
}

// Update active navigation item
function updateActiveNav(section) {
  // Map section to main nav items
  const mainSections = {
    'home': 'home',
    'about': 'about',
    'finance': 'finance',
    'economics': 'economics',
    'topics': 'topics',
    'resources': 'resources',
  };
  
  // Find the main section
  let mainSection = mainSections[section];
  if (!mainSection) {
    // Check if it's a sub-section
    if (section.startsWith('finance-')) mainSection = 'finance';
    else if (section.startsWith('economics-')) mainSection = 'economics';
    else if (section.startsWith('calculator-') || section === 'calculators') mainSection = 'resources';
    else if (section.endsWith('-formulas')) mainSection = 'topics';
    else if (section.endsWith('-resources')) mainSection = 'resources';
  }
  
  // Update nav buttons
  document.querySelectorAll('[data-nav]').forEach(btn => {
    const navSection = btn.getAttribute('data-nav');
    if (navSection === mainSection) {
      btn.classList.add('bg-green-50', 'text-green-700');
      btn.classList.remove('text-gray-700');
    } else {
      btn.classList.remove('bg-green-50', 'text-green-700');
      btn.classList.add('text-gray-700');
    }
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuOpen) {
    mobileMenu.style.display = 'block';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}

// Toggle language menu
function toggleLanguageMenu() {
  languageMenuOpen = !languageMenuOpen;
  const langMenu = document.getElementById('language-dropdown');
  
  if (languageMenuOpen) {
    langMenu.style.display = 'block';
  } else {
    langMenu.style.display = 'none';
  }
}

// Change language
function changeLanguage(lang) {
  setLanguage(lang);
  toggleLanguageMenu();
  
  // Re-track current page with new language
  trackPageView(currentSection, lang);
}

// Close language menu when clicking outside
document.addEventListener('click', (e) => {
  const langButton = document.getElementById('language-button');
  const langMenu = document.getElementById('language-dropdown');
  
  if (languageMenuOpen && langButton && langMenu) {
    if (!langButton.contains(e.target) && !langMenu.contains(e.target)) {
      toggleLanguageMenu();
    }
  }
});

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
  // Show home section by default
  navigateToSection('home');
  
  // Track initial page view
  trackPageView('home', getLanguage());
  
  // Setup all navigation event listeners
  setupNavigationListeners();
});

// Setup navigation event listeners
function setupNavigationListeners() {
  // Main navigation buttons
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.getAttribute('data-nav');
      navigateToSection(section);
    });
  });
  
  // All navigation links throughout the site
  document.querySelectorAll('[data-navigate]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-navigate');
      navigateToSection(section);
    });
  });
}

// Helper function to format date
function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}
