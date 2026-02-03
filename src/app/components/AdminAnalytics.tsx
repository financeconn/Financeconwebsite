import { useState, useEffect } from 'react';
import { Eye, Users, TrendingUp, Globe, BarChart3, Lock, X } from 'lucide-react';
import { getStats, getAnalytics } from '../utils/analytics';

const ADMIN_PASSWORD = 'financecon2024'; // Change this to your secure password

export function AdminAnalytics({ onClose }: { onClose: () => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState(getStats());

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => {
        setStats(getStats());
      }, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Lock className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const analytics = getAnalytics();
  const topPages = Object.entries(stats.pageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  const languageEntries = Object.entries(stats.languageStats)
    .sort(([, a], [, b]) => b - a);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-6xl w-full mx-4 my-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="text-blue-600" size={24} />
              <h3 className="font-semibold text-gray-700">Total Views</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-green-600" size={24} />
              <h3 className="font-semibold text-gray-700">Unique Visitors</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{stats.uniqueVisitors}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-purple-600" size={24} />
              <h3 className="font-semibold text-gray-700">Last 24h</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">{stats.last24h}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="text-orange-600" size={24} />
              <h3 className="font-semibold text-gray-700">Last 7 Days</h3>
            </div>
            <p className="text-3xl font-bold text-orange-600">{stats.last7days}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Most Visited Pages
            </h3>
            <div className="space-y-3">
              {topPages.length > 0 ? (
                topPages.map(([page, count]) => (
                  <div key={page} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-gray-700 font-medium">{page}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {count} views
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No data yet</p>
              )}
            </div>
          </div>

          {/* Language Stats */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe size={20} />
              Visitors by Language
            </h3>
            <div className="space-y-3">
              {languageEntries.length > 0 ? (
                languageEntries.map(([lang, count]) => {
                  const percentage = ((count / stats.total) * 100).toFixed(1);
                  const langNames: Record<string, string> = {
                    en: 'English',
                    pt: 'Português',
                    es: 'Español',
                    fr: 'Français',
                  };
                  return (
                    <div key={lang} className="bg-white p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {langNames[lang] || lang}
                        </span>
                        <span className="text-sm text-gray-500">
                          {count} ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-500">No data yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {analytics.pageViews.slice().reverse().slice(0, 20).map((view, index) => (
              <div key={index} className="bg-white p-3 rounded-lg flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-gray-900">{view.page}</span>
                  <span className="text-gray-500 ml-2">
                    ({view.language})
                  </span>
                </div>
                <span className="text-gray-500">
                  {new Date(view.timestamp).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>First visit: {new Date(stats.firstVisit).toLocaleString()}</p>
          <p className="mt-2">Analytics data is stored locally in your browser</p>
        </div>
      </div>
    </div>
  );
}
