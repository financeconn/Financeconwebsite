import { ArrowLeft, TrendingUp, DollarSign, PieChart, Shield } from 'lucide-react';

type Section = 
  | 'home' 
  | 'about' 
  | 'finance' 
  | 'economics' 
  | 'topics' 
  | 'resources'
  | 'finance-personal'
  | 'finance-investments'
  | 'finance-analysis'
  | 'finance-credit'
  | 'finance-planning'
  | 'finance-protection';

interface InvestmentsPageProps {
  onNavigate: (section: Section) => void;
}

export function InvestmentsPage({ onNavigate }: InvestmentsPageProps) {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('finance')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Finance
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp size={20} />
              <span className="font-semibold">Investments</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Investments
            </h1>
            <p className="text-xl text-gray-600">
              Learn to invest your money intelligently and make it work for you.
              Understand different types of investments and build a portfolio aligned with your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Main Investment Types
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Fixed Income */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Fixed Income</h3>
              </div>
              <p className="text-gray-600 mb-6">
                More conservative investments with predictable returns. Ideal for beginners
                and those seeking security.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Government Bonds</h4>
                  <p className="text-sm text-gray-600 mb-2">Safest investment, backed by government</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Very Low</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">CDs / Time Deposits</h4>
                  <p className="text-sm text-gray-600 mb-2">Fixed rate for a specific period</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Very Low</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Corporate Bonds</h4>
                  <p className="text-sm text-gray-600 mb-2">Company debt with higher yields</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Low-Medium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Variable Income */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-purple-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Variable Income</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Investments with potential for higher returns but also higher risk.
                Requires study and market monitoring.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Stocks</h4>
                  <p className="text-sm text-gray-600 mb-2">Company ownership shares</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded">Medium-High</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">ETFs</h4>
                  <p className="text-sm text-gray-600 mb-2">Diversified index funds</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">REITs</h4>
                  <p className="text-sm text-gray-600 mb-2">Real estate investment trusts</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Risk:</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Funds */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Investment Funds</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Investment funds are a way to invest in multiple assets at once, managed by professionals.
            Ideal for those who don't have time to manage their own portfolio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <DollarSign className="text-green-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mutual Funds</h3>
              <p className="text-gray-600 text-sm">
                Pooled investments managed by professionals with various strategies and risk levels
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PieChart className="text-blue-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Index Funds</h3>
              <p className="text-gray-600 text-sm">
                Passively managed funds that track market indexes with low fees
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TrendingUp className="text-purple-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Target-Date Funds</h3>
              <p className="text-gray-600 text-sm">
                Automatically adjust asset allocation based on retirement timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diversification */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio Diversification</h2>
            <p className="text-lg text-gray-600 mb-8">
              Diversification is the strategy of spreading investments across different assets to reduce risk.
              The saying "don't put all your eggs in one basket" perfectly applies to investments.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Diversification Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Different Asset Classes</h4>
                    <p className="text-gray-600">Combine stocks, bonds, real estate, and cash equivalents</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Geographic Diversification</h4>
                    <p className="text-gray-600">Invest in different countries and regions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sector Diversification</h4>
                    <p className="text-gray-600">Spread investments across different industry sectors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Time Diversification</h4>
                    <p className="text-gray-600">Invest regularly over time (dollar-cost averaging)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>⚠️</span>
                Important Tips for Beginners
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with your emergency fund before investing</li>
                <li>• Only invest money you won't need in the short term</li>
                <li>• Don't invest in something you don't understand</li>
                <li>• Diversify to reduce risks</li>
                <li>• Think long-term and avoid emotional decisions</li>
                <li>• Consider consulting a certified financial advisor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to start investing?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Download our complete investment guide for beginners
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Download Free Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}