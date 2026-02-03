import { ArrowLeft, Calculator, TrendingUp, PiggyBank, CreditCard, DollarSign } from 'lucide-react';

type Section = any;

interface CalculatorsPageProps {
  onNavigate: (section: Section) => void;
}

export function CalculatorsPage({ onNavigate }: CalculatorsPageProps) {
  const calculators = [
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: 'Compound Interest Calculator',
      description: 'Calculate how your investments grow over time with compound interest',
      gradient: 'from-blue-500 to-blue-600',
      page: 'calculator-compound' as Section,
    },
    {
      icon: <DollarSign className="text-white" size={32} />,
      title: 'ROI Calculator',
      description: 'Measure the return on your investments and compare different opportunities',
      gradient: 'from-purple-500 to-purple-600',
      page: 'calculator-roi' as Section,
    },
    {
      icon: <PiggyBank className="text-white" size={32} />,
      title: 'Retirement Simulator',
      description: 'Plan your retirement and see how much you need to save monthly',
      gradient: 'from-green-500 to-green-600',
      page: 'calculator-retirement' as Section,
    },
    {
      icon: <CreditCard className="text-white" size={32} />,
      title: 'Debt Planning Tool',
      description: 'Create a strategy to pay off your debts efficiently',
      gradient: 'from-orange-500 to-orange-600',
      page: 'calculator-debt' as Section,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('resources')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Resources
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Calculator size={20} />
              <span className="font-semibold">Financial Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Calculators
            </h1>
            <p className="text-xl text-gray-600">
              Use our free financial calculators to make informed decisions about your money,
              investments, and financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {calculators.map((calc, index) => (
              <button
                key={index}
                onClick={() => onNavigate(calc.page)}
                className="text-left group"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${calc.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {calc.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {calc.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Use Calculator</span>
                    <span>→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Financial Calculators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Use Financial Calculators?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accurate Planning
              </h3>
              <p className="text-gray-600">
                Get precise calculations to make better financial decisions based on real numbers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Save Time
              </h3>
              <p className="text-gray-600">
                Instantly calculate complex financial scenarios that would take hours manually.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compare Options
              </h3>
              <p className="text-gray-600">
                Easily compare different scenarios and find the best financial strategy for you.
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
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Start using our calculators now to plan your financial future
            </p>
            <button 
              onClick={() => onNavigate('calculator-compound')}
              className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Start Calculating
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
