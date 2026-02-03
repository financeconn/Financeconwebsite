import { ArrowLeft, TrendingUp, Info } from 'lucide-react';
import { useState } from 'react';

type Section = any;

interface CompoundInterestCalculatorProps {
  onNavigate: (section: Section) => void;
}

export function CompoundInterestCalculator({ onNavigate }: CompoundInterestCalculatorProps) {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualRate, setAnnualRate] = useState(8);
  const [years, setYears] = useState(10);
  const [compoundFrequency, setCompoundFrequency] = useState(12); // Monthly

  // Calculate compound interest
  const calculateCompoundInterest = () => {
    const r = annualRate / 100;
    const n = compoundFrequency;
    const t = years;
    const P = principal;
    const PMT = monthlyContribution;
    
    // Future value of principal with compound interest
    const FV_principal = P * Math.pow(1 + r / n, n * t);
    
    // Future value of monthly contributions (annuity)
    const monthlyRate = r / 12;
    const FV_contributions = PMT * ((Math.pow(1 + monthlyRate, 12 * t) - 1) / monthlyRate);
    
    const totalValue = FV_principal + FV_contributions;
    const totalContributions = P + (PMT * 12 * t);
    const totalInterest = totalValue - totalContributions;
    
    return {
      totalValue,
      totalContributions,
      totalInterest,
    };
  };

  const result = calculateCompoundInterest();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('calculators')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Calculators
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp size={20} />
              <span className="font-semibold">Investment Growth</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compound Interest Calculator
            </h1>
            <p className="text-lg text-gray-600">
              See how your investments can grow exponentially over time with compound interest
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h2>
              
              <div className="space-y-6">
                {/* Initial Investment */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Initial Investment
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Monthly Contribution */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Contribution
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Annual Interest Rate */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Interest Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(Number(e.target.value))}
                      className="w-full pr-8 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>

                {/* Time Period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {/* Compound Frequency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Compound Frequency
                  </label>
                  <select
                    value={compoundFrequency}
                    onChange={(e) => setCompoundFrequency(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value={365}>Daily</option>
                    <option value={12}>Monthly</option>
                    <option value={4}>Quarterly</option>
                    <option value={1}>Annually</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-semibold mb-2 opacity-90">Final Balance</h3>
                <div className="text-5xl font-bold mb-4">
                  {formatCurrency(result.totalValue)}
                </div>
                <p className="opacity-90">After {years} years</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Total Contributions
                  </h4>
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(result.totalContributions)}
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Total Interest Earned
                  </h4>
                  <div className="text-2xl font-bold text-purple-600">
                    {formatCurrency(result.totalInterest)}
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Investment:</span>
                    <span className="font-semibold">{formatCurrency(principal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Monthly Deposits:</span>
                    <span className="font-semibold">{formatCurrency(monthlyContribution * 12 * years)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold">{annualRate}% per year</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2">
                    <span className="text-gray-900 font-semibold">Growth:</span>
                    <span className="font-bold text-green-600">
                      +{((result.totalInterest / result.totalContributions) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    What is Compound Interest?
                  </h3>
                  <p className="text-gray-700">
                    Compound interest is interest calculated on both the initial principal and the accumulated 
                    interest from previous periods. It's often called "interest on interest" and can significantly 
                    increase your investment over time.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Power of Time</h3>
                <p className="text-gray-600">
                  The longer you invest, the more time your money has to grow. Time is your greatest 
                  ally when it comes to compound interest - even small amounts can grow substantially 
                  over decades.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Contributions</h3>
                <p className="text-gray-600">
                  Adding money regularly (like monthly contributions) dramatically increases your final 
                  balance. Even small monthly additions can make a huge difference over time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Formula</h3>
                <p className="text-gray-600 mb-2">
                  A = P(1 + r/n)^(nt)
                </p>
                <p className="text-sm text-gray-500">
                  Where: P = Principal, r = Annual rate, n = Compound frequency, t = Time in years
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Early</h3>
                <p className="text-gray-600">
                  Starting to invest early, even with smaller amounts, is more powerful than starting 
                  late with larger amounts. This is because compound interest has more time to work 
                  its magic.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tip</h3>
              <p className="text-gray-700 mb-4">
                Albert Einstein allegedly called compound interest "the eighth wonder of the world," saying 
                "He who understands it, earns it; he who doesn't, pays it."
              </p>
              <p className="text-gray-700">
                Use this calculator to experiment with different scenarios and see how small changes in 
                contributions, time, or interest rates can dramatically affect your final balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
