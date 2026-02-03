import { TrendingUp, PiggyBank, BarChart3, CreditCard, Wallet, ShieldCheck } from 'lucide-react';

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

interface FinanceProps {
  onNavigate: (section: Section) => void;
}

export function Finance({ onNavigate }: FinanceProps) {
  const topics = [
    {
      icon: <PiggyBank className="text-green-600" size={24} />,
      title: 'Personal Finance Management',
      description: 'Learn to organize your finances, create budgets and control spending',
      items: [
        'Family budget planning',
        'Expense control',
        'Emergency fund creation',
        'Debt management',
      ],
      page: 'finance-personal' as Section,
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Investments',
      description: 'Discover how to make your money work for you',
      items: [
        'Fixed and variable income',
        'Investment funds',
        'Stocks and capital markets',
        'Portfolio diversification',
      ],
      page: 'finance-investments' as Section,
    },
    {
      icon: <BarChart3 className="text-green-600" size={24} />,
      title: 'Financial Analysis',
      description: 'Understand indicators and analysis for informed decisions',
      items: [
        'Balance sheet analysis',
        'Financial indicators',
        'Cash flow',
        'ROI and profitability',
      ],
      page: 'finance-analysis' as Section,
    },
    {
      icon: <CreditCard className="text-green-600" size={24} />,
      title: 'Credit and Financing',
      description: 'Understand how credit works and how to use it intelligently',
      items: [
        'Types of credit',
        'Interest rates',
        'Credit score',
        'Financing options',
      ],
      page: 'finance-credit' as Section,
    },
    {
      icon: <Wallet className="text-green-600" size={24} />,
      title: 'Financial Planning',
      description: 'Establish goals and plan your financial future',
      items: [
        'Short and long-term goals',
        'Retirement planning',
        'Estate planning',
        'Financial succession',
      ],
      page: 'finance-planning' as Section,
    },
    {
      icon: <ShieldCheck className="text-green-600" size={24} />,
      title: 'Asset Protection',
      description: 'Learn to protect your assets and manage risks',
      items: [
        'Insurance',
        'Asset protection',
        'Risk management',
        'Private pension',
      ],
      page: 'finance-protection' as Section,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Finance
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master fundamental finance concepts and learn to manage your money
              efficiently. From basics to advanced investment strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Topics</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Resources</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">Free</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('finance-formulas' as Section)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
            >
              📖 View All Finance Formulas
            </button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Study Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => onNavigate(topic.page)}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all text-left group cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2 mb-4">
                  {topic.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 font-medium text-sm group-hover:underline">
                  Learn more →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Learning Path
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-green-600 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Beginner</h3>
              </div>
              <p className="text-gray-600 ml-12">
                Basic personal finance concepts, financial organization and first steps
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Intermediate</h3>
              </div>
              <p className="text-gray-600 ml-12">
                Investments, financial analysis and medium-term planning
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-green-400 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Advanced</h3>
              </div>
              <p className="text-gray-600 ml-12">
                Advanced strategies, asset management and financial optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to master your finances?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Explore our resources and materials to start your journey
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              View Finance Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}