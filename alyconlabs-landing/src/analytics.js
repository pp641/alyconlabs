// analytics.js - Google Analytics Configuration
// Measurement ID: G-0KB1G64V18

import React from 'react';

// Your Measurement ID - Already in index.html
const MEASUREMENT_ID = 'G-0KB1G64V18';

// Initialize Google Analytics (gtag is loaded from index.html)
export const initializeAnalytics = () => {
  if (window.gtag) {
    console.log('✅ Google Analytics initialized with ID:', MEASUREMENT_ID);
  } else {
    console.warn('⚠️ Google Analytics not loaded. Make sure gtag script is in index.html');
  }
};

// ============ Core Tracking Functions ============

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('📊 Event tracked:', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (pageName) => {
  if (window.gtag) {
    window.gtag('config', MEASUREMENT_ID, {
      page_title: pageName,
      page_path: window.location.pathname
    });
    console.log('📄 Page view tracked:', pageName);
  }
};

// ============ Specific Event Tracking ============

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    platform: platform,
    timestamp: new Date().toISOString()
  });
};

// Track email contact
export const trackEmailClick = (email) => {
  trackEvent('email_click', {
    email: email
  });
};

// Track expertise tab changes
export const trackTabClick = (tabName) => {
  trackEvent('tab_click', {
    tab_name: tabName
  });
};

// Track theme toggle
export const trackThemeToggle = (newTheme) => {
  trackEvent('theme_toggle', {
    theme: newTheme ? 'dark' : 'light'
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth: depth + '%'
  });
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('page_time', {
    seconds: seconds
  });
};

// Track link clicks
export const trackLinkClick = (linkName, url) => {
  trackEvent('link_click', {
    link_name: linkName,
    url: url
  });
};

// Track conversions
export const trackConversion = (conversionType, value = '') => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value
  });
};

// ============ Helper Functions ============

// Get or create user ID
export const getUserId = () => {
  let userId = localStorage.getItem('ga_user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('ga_user_id', userId);
  }
  return userId;
};

// Set custom user properties
export const setUserProperties = (userId, properties) => {
  if (window.gtag) {
    window.gtag('config', MEASUREMENT_ID, {
      'user_id': userId,
      ...properties
    });
  }
};

// ============ React Hooks ============

// Hook: Track scroll depth
export const useScrollDepth = () => {
  React.useEffect(() => {
    let tracked25 = false;
    let tracked50 = false;
    let tracked75 = false;
    let tracked100 = false;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = (window.scrollY / (docHeight - windowHeight)) * 100;

      if (scrollPercent > 25 && !tracked25) {
        trackScrollDepth(25);
        tracked25 = true;
      }
      if (scrollPercent > 50 && !tracked50) {
        trackScrollDepth(50);
        tracked50 = true;
      }
      if (scrollPercent > 75 && !tracked75) {
        trackScrollDepth(75);
        tracked75 = true;
      }
      if (scrollPercent > 90 && !tracked100) {
        trackScrollDepth(100);
        tracked100 = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook: Track time on page
export const useTimeOnPage = () => {
  React.useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeOnPage);
    };
  }, []);
};

// ============ Debug Functions ============

// Check if analytics is working
export const debugAnalytics = () => {
  console.log('=== Google Analytics Debug ===');
  console.log('Measurement ID:', MEASUREMENT_ID);
  console.log('gtag loaded:', !!window.gtag);
  console.log('dataLayer:', window.dataLayer);
  console.log('User ID:', getUserId());
};

// Log all dataLayer events
export const logDataLayerEvents = () => {
  if (window.dataLayer) {
    console.log('📊 All dataLayer events:', window.dataLayer);
  }
};

console.log('✅ Analytics module loaded successfully');
console.log('📊 Measurement ID: G-0KB1G64V18');