import { useState } from 'react';
import { Calculator, Briefcase, TrendingUp, BookOpen, PieChart, BarChart3 } from 'lucide-react';

type Topic = 'accounting' | 'business' | 'mathematics' | 'statistics';

type Section = any; // Allow any section type

interface RelatedTopicsProps {
  onNavigate: (section: Section) => void;
}

export function RelatedTopics({ onNavigate }: RelatedTopicsProps) {
  const [activeTopic, setActiveTopic] = useState<Topic>('accounting');

  const topics = [
    { id: 'accounting' as Topic, label: 'Accounting', icon: <Calculator size={20} /> },
    { id: 'business' as Topic, label: 'Business', icon: <Briefcase size={20} /> },
    { id: 'mathematics' as Topic, label: 'Mathematics', icon: <TrendingUp size={20} /> },
    { id: 'statistics' as Topic, label: 'Statistics', icon: <PieChart size={20} /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Related Topics
            </h1>
            <p className="text-xl text-gray-600">
              Explore essential subjects that complement your financial education.
              From accounting principles to business strategy, mathematics and statistics.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  activeTopic === topic.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {topic.icon}
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Content */}
      {activeTopic === 'accounting' && <AccountingContent onNavigate={onNavigate} />}
      {activeTopic === 'business' && <BusinessContent onNavigate={onNavigate} />}
      {activeTopic === 'mathematics' && <MathematicsContent onNavigate={onNavigate} />}
      {activeTopic === 'statistics' && <StatisticsContent onNavigate={onNavigate} />}
    </div>
  );
}

function AccountingContent({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const topics = [
    {
      icon: <BookOpen className="text-green-600" size={24} />,
      title: 'Basic Accounting',
      description: 'Essential accounting fundamentals and principles',
      items: ['Accounting principles', 'Accrual basis', 'Double-entry bookkeeping', 'Chart of accounts'],
    },
    {
      icon: <BarChart3 className="text-green-600" size={24} />,
      title: 'Financial Statements',
      description: 'Preparation and analysis of accounting reports',
      items: ['Balance sheet', 'Income statement', 'Cash flow statement', 'Statement of changes in equity'],
    },
    {
      icon: <Calculator className="text-green-600" size={24} />,
      title: 'Cost Accounting',
      description: 'Business cost management and analysis',
      items: ['Fixed and variable costs', 'Contribution margin', 'Break-even analysis', 'Cost analysis'],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accounting</h2>
          <p className="text-lg text-gray-600 mb-4">
            Learn the language of business. Master fundamental accounting concepts to understand
            the financial health of companies and organizations.
          </p>
          <button
            onClick={() => onNavigate('accounting-formulas' as Section)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 mb-6"
          >
            📖 View All Accounting Formulas
          </button>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting Equation</h3>
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">Assets</span>
              <span className="text-2xl font-bold">=</span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-lg font-semibold">Liabilities</span>
              <span className="text-2xl font-bold">+</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold">Equity</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <ul className="space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessContent({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const topics = [
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      title: 'Business Management',
      description: 'Principles of effective business administration',
      items: ['Strategic planning', 'Operations management', 'Organizational behavior', 'Leadership'],
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Marketing & Sales',
      description: 'Customer acquisition and market strategies',
      items: ['Market research', 'Brand strategy', 'Digital marketing', 'Sales funnel'],
    },
    {
      icon: <BookOpen className="text-green-600" size={24} />,
      title: 'Entrepreneurship',
      description: 'Starting and growing your own business',
      items: ['Business models', 'Startup validation', 'Pitch development', 'Growth strategies'],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Business</h2>
          <p className="text-lg text-gray-600 mb-4">
            Master the art of business. Learn management, marketing, entrepreneurship,
            and strategy to succeed in the corporate world.
          </p>
          <button
            onClick={() => onNavigate('business-formulas' as Section)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2 mb-6"
          >
            📖 View All Business Formulas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <ul className="space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border border-purple-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Strategy</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span className="text-gray-700">SWOT Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span className="text-gray-700">Competitive Advantage</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span className="text-gray-700">Market Positioning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border border-orange-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <span className="text-gray-700">Agile & Scrum</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <span className="text-gray-700">Risk Management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <span className="text-gray-700">Resource Planning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MathematicsContent({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const topics = [
    {
      icon: <Calculator className="text-green-600" size={24} />,
      title: 'Financial Mathematics',
      description: 'Mathematical concepts for finance',
      items: ['Simple and compound interest', 'Present and future value', 'Annuities', 'Amortization'],
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Calculus for Business',
      description: 'Applied calculus in business contexts',
      items: ['Optimization', 'Marginal analysis', 'Derivatives', 'Growth models'],
    },
    {
      icon: <BarChart3 className="text-green-600" size={24} />,
      title: 'Linear Algebra',
      description: 'Matrix operations for business',
      items: ['Matrix operations', 'Linear systems', 'Vector spaces', 'Applications'],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mathematics</h2>
          <p className="text-lg text-gray-600 mb-4">
            Apply mathematical concepts to solve real business problems. From financial
            calculations to optimization and modeling.
          </p>
          <button
            onClick={() => onNavigate('mathematics-formulas' as Section)}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 mb-6"
          >
            📖 View All Mathematics Formulas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <ul className="space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Formulas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Compound Interest</h4>
              <p className="text-gray-600 font-mono">A = P(1 + r/n)^(nt)</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Present Value</h4>
              <p className="text-gray-600 font-mono">PV = FV / (1 + r)^n</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">ROI</h4>
              <p className="text-gray-600 font-mono">ROI = (Gain - Cost) / Cost × 100%</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Break-even Point</h4>
              <p className="text-gray-600 font-mono">BEP = Fixed Costs / (Price - Variable Cost)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatisticsContent({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const topics = [
    {
      icon: <PieChart className="text-green-600" size={24} />,
      title: 'Descriptive Statistics',
      description: 'Summarizing and visualizing data',
      items: ['Mean, median, mode', 'Standard deviation', 'Data visualization', 'Frequency distributions'],
    },
    {
      icon: <BarChart3 className="text-green-600" size={24} />,
      title: 'Inferential Statistics',
      description: 'Making predictions from data',
      items: ['Hypothesis testing', 'Confidence intervals', 'Regression analysis', 'ANOVA'],
    },
    {
      icon: <TrendingUp className="text-green-600" size={24} />,
      title: 'Business Analytics',
      description: 'Data-driven decision making',
      items: ['Predictive modeling', 'Time series analysis', 'A/B testing', 'Data mining'],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Statistics</h2>
          <p className="text-lg text-gray-600 mb-4">
            Use statistical methods to analyze data and make informed business decisions.
            From basic descriptive statistics to advanced predictive analytics.
          </p>
          <button
            onClick={() => onNavigate('statistics-formulas' as Section)}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 mb-6"
          >
            📖 View All Statistics Formulas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <ul className="space-y-2">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl border border-indigo-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Applications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-gray-900">Market Research</p>
                  <p className="text-sm text-gray-600">Analyze consumer behavior and preferences</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <p className="font-semibold text-gray-900">Financial Forecasting</p>
                  <p className="text-sm text-gray-600">Predict future trends and outcomes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold text-gray-900">Quality Control</p>
                  <p className="text-sm text-gray-600">Monitor and improve processes</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border border-teal-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Software</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                <span className="text-gray-700">Excel & Google Sheets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                <span className="text-gray-700">R Programming</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                <span className="text-gray-700">Python (pandas, NumPy)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                <span className="text-gray-700">SPSS & SAS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}