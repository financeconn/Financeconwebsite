import { ArrowLeft, Download, FileSpreadsheet } from 'lucide-react';

type Section = any;

interface TemplatesResourcesPageProps {
  onNavigate: (section: Section) => void;
}

export function TemplatesResourcesPage({ onNavigate }: TemplatesResourcesPageProps) {
  const templates = [
    {
      title: 'Personal Budget Template',
      description: 'Track income, expenses, and savings with this comprehensive budget spreadsheet',
      category: 'Personal Finance',
      format: 'Excel (.xlsx)',
      features: [
        'Monthly income tracking',
        'Expense categorization',
        'Automatic calculations',
        'Visual charts and graphs',
      ],
    },
    {
      title: 'Investment Portfolio Tracker',
      description: 'Monitor your investments, returns, and asset allocation',
      category: 'Investments',
      format: 'Excel (.xlsx)',
      features: [
        'Multiple asset tracking',
        'ROI calculations',
        'Performance charts',
        'Dividend tracking',
      ],
    },
    {
      title: 'Business Cash Flow Statement',
      description: 'Professional cash flow template for small businesses',
      category: 'Business',
      format: 'Excel (.xlsx)',
      features: [
        'Operating activities',
        'Investing activities',
        'Financing activities',
        'Monthly projections',
      ],
    },
    {
      title: 'Debt Payoff Calculator',
      description: 'Plan your debt repayment strategy with multiple payment scenarios',
      category: 'Debt Management',
      format: 'Excel (.xlsx)',
      features: [
        'Multiple debt accounts',
        'Snowball & avalanche methods',
        'Interest calculations',
        'Payoff timeline',
      ],
    },
    {
      title: 'Retirement Planning Spreadsheet',
      description: 'Calculate how much you need to save for retirement',
      category: 'Retirement',
      format: 'Excel (.xlsx)',
      features: [
        'Retirement goal setting',
        'Savings projections',
        'Inflation adjustments',
        'Withdrawal planning',
      ],
    },
    {
      title: 'Income Statement Template',
      description: 'Professional income statement for businesses',
      category: 'Accounting',
      format: 'Excel (.xlsx)',
      features: [
        'Revenue tracking',
        'Expense categories',
        'Net income calculations',
        'Monthly/quarterly views',
      ],
    },
    {
      title: 'Break-Even Analysis Template',
      description: 'Calculate your business break-even point',
      category: 'Business Analysis',
      format: 'Excel (.xlsx)',
      features: [
        'Fixed & variable costs',
        'Sales price analysis',
        'Break-even calculations',
        'Visual charts',
      ],
    },
    {
      title: 'Net Worth Tracker',
      description: 'Track your assets, liabilities, and net worth over time',
      category: 'Wealth Management',
      format: 'Excel (.xlsx)',
      features: [
        'Asset tracking',
        'Liability tracking',
        'Net worth trends',
        'Historical comparison',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-green-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('resources')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Resources
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spreadsheets & Templates
          </h1>
          <p className="text-xl text-gray-600">
            Free downloadable Excel templates for financial planning and business management
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{template.description}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {template.category}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {template.format}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-600 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Use These Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download</h3>
              <p className="text-gray-600">
                Click the download button to get the Excel template to your computer
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize</h3>
              <p className="text-gray-600">
                Fill in your own data and customize categories to fit your needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyze</h3>
              <p className="text-gray-600">
                Use the built-in calculations and charts to analyze your data
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
