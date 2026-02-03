export interface PageView {
  id: string;
  timestamp: number;
  page: string;
  userAgent: string;
  language: string;
}

export interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  pageViews: PageView[];
  firstVisit: number;
}

const ANALYTICS_KEY = 'financecon_analytics';
const VISITOR_ID_KEY = 'financecon_visitor_id';

// Generate unique visitor ID
function getVisitorId(): string {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
}

// Get analytics data
export function getAnalytics(): AnalyticsData {
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
export function trackPageView(page: string, language: string) {
  const analytics = getAnalytics();
  const visitorId = getVisitorId();
  
  const pageView: PageView = {
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
export function getStats() {
  const analytics = getAnalytics();
  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000;

  const last24h = analytics.pageViews.filter(pv => pv.timestamp >= oneDayAgo);
  const last7days = analytics.pageViews.filter(pv => pv.timestamp >= oneWeekAgo);
  const last30days = analytics.pageViews.filter(pv => pv.timestamp >= oneMonthAgo);

  // Page statistics
  const pageStats: Record<string, number> = {};
  analytics.pageViews.forEach(pv => {
    pageStats[pv.page] = (pageStats[pv.page] || 0) + 1;
  });

  // Language statistics
  const languageStats: Record<string, number> = {};
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
export function clearAnalytics() {
  localStorage.removeItem(ANALYTICS_KEY);
}
