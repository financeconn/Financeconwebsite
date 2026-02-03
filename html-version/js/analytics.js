// Analytics system for FinanceCon

const ANALYTICS_KEY = 'financecon_analytics';
const VISITOR_ID_KEY = 'financecon_visitor_id';

// Generate unique visitor ID
function getVisitorId() {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
}

// Get analytics data
function getAnalytics() {
  const data = localStorage.getItem(ANALYTICS_KEY);
  if (!data) {
    return {
      totalViews: 0,
      uniqueVisitors: 0,
      pageViews: [],
      firstVisit: Date.now(),
    };
  }
  return JSON.parse(data);
}

// Track page view
function trackPageView(page, language) {
  const analytics = getAnalytics();
  const visitorId = getVisitorId();
  
  const pageView = {
    id: visitorId,
    timestamp: Date.now(),
    page,
    userAgent: navigator.userAgent,
    language,
  };

  analytics.pageViews.push(pageView);
  analytics.totalViews = analytics.pageViews.length;
  
  // Count unique visitors
  const uniqueIds = new Set(analytics.pageViews.map(pv => pv.id));
  analytics.uniqueVisitors = uniqueIds.size;

  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
}

// Get statistics
function getStats() {
  const analytics = getAnalytics();
  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000;

  const last24h = analytics.pageViews.filter(pv => pv.timestamp >= oneDayAgo);
  const last7days = analytics.pageViews.filter(pv => pv.timestamp >= oneWeekAgo);
  const last30days = analytics.pageViews.filter(pv => pv.timestamp >= oneMonthAgo);

  // Page statistics
  const pageStats = {};
  analytics.pageViews.forEach(pv => {
    pageStats[pv.page] = (pageStats[pv.page] || 0) + 1;
  });

  // Language statistics
  const languageStats = {};
  analytics.pageViews.forEach(pv => {
    languageStats[pv.language] = (languageStats[pv.language] || 0) + 1;
  });

  return {
    total: analytics.totalViews,
    uniqueVisitors: analytics.uniqueVisitors,
    last24h: last24h.length,
    last7days: last7days.length,
    last30days: last30days.length,
    pageStats,
    languageStats,
    firstVisit: analytics.firstVisit,
  };
}

// Clear analytics (for testing)
function clearAnalytics() {
  localStorage.removeItem(ANALYTICS_KEY);
  localStorage.removeItem(VISITOR_ID_KEY);
}

// Show analytics dashboard
function showAnalyticsDashboard() {
  const stats = getStats();
  
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'analytics-modal';
  overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  overlay.onclick = (e) => {
    if (e.target === overlay) closeAnalyticsDashboard();
  };
  
  // Create modal content
  const modal = document.createElement('div');
  modal.className = 'bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto';
  
  // Sort pages by views
  const sortedPages = Object.entries(stats.pageStats).sort((a, b) => b[1] - a[1]);
  const sortedLanguages = Object.entries(stats.languageStats).sort((a, b) => b[1] - a[1]);
  
  modal.innerHTML = `
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <button onclick="closeAnalyticsDashboard()" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500 mt-2">Only you can see this data (press Ctrl+Shift+A to toggle)</p>
    </div>
    
    <div class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-green-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-green-600">${stats.total}</div>
          <div class="text-sm text-gray-600">Total Views</div>
        </div>
        <div class="bg-blue-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">${stats.uniqueVisitors}</div>
          <div class="text-sm text-gray-600">Unique Visitors</div>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-purple-600">${stats.last7days}</div>
          <div class="text-sm text-gray-600">Last 7 Days</div>
        </div>
        <div class="bg-orange-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-orange-600">${stats.last30days}</div>
          <div class="text-sm text-gray-600">Last 30 Days</div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Top Pages</h3>
          <div class="space-y-2">
            ${sortedPages.slice(0, 10).map(([page, views]) => `
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span class="text-sm text-gray-700">${page}</span>
                <span class="text-sm font-medium text-green-600">${views} views</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
          <div class="space-y-2">
            ${sortedLanguages.map(([lang, views]) => {
              const percentage = ((views / stats.total) * 100).toFixed(1);
              const langNames = { en: 'English', pt: 'Português', es: 'Español', fr: 'Français' };
              return `
                <div class="p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-700">${langNames[lang] || lang}</span>
                    <span class="text-sm font-medium text-blue-600">${views} views (${percentage}%)</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: ${percentage}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <button onclick="if(confirm('Are you sure you want to clear all analytics data?')) { clearAnalytics(); closeAnalyticsDashboard(); alert('Analytics data cleared!'); }" class="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          Clear All Data
        </button>
      </div>
    </div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

function closeAnalyticsDashboard() {
  const modal = document.getElementById('analytics-modal');
  if (modal) {
    modal.remove();
  }
}

// Listen for Ctrl+Shift+A to open analytics
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') {
    e.preventDefault();
    const modal = document.getElementById('analytics-modal');
    if (modal) {
      closeAnalyticsDashboard();
    } else {
      showAnalyticsDashboard();
    }
  }
});
