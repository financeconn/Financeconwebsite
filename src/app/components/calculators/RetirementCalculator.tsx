import { ArrowLeft, PiggyBank, Info } from 'lucide-react';
import { useState } from 'react';

type Section = any;

interface RetirementCalculatorProps {
  onNavigate: (section: Section) => void;
}

export function RetirementCalculator({ onNavigate }: RetirementCalculatorProps) {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [monthlyRetirementIncome, setMonthlyRetirementIncome] = useState(5000);
  const [retirementYears, setRetirementYears] = useState(25);

  const calculateRetirement = () => {
    const yearsUntilRetirement = retirementAge - currentAge;
    const monthlyRate = expectedReturn / 100 / 12;
    const months = yearsUntilRetirement * 12;
    
    // Future value of current savings
    const FV_savings = currentSavings * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    const FV_contributions = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const totalAtRetirement = FV_savings + FV_contributions;
    
    // Calculate how long the money will last in retirement
    const monthlyRetirementRate = 0.04 / 12; // Assume 4% safe withdrawal rate
    const retirementMonths = retirementYears * 12;
    const totalNeeded = monthlyRetirementIncome * ((1 - Math.pow(1 + monthlyRetirementRate, -retirementMonths)) / monthlyRetirementRate);
    
    const surplus = totalAtRetirement - totalNeeded;
    const isOnTrack = surplus >= 0;
    
    // Calculate recommended monthly contribution to meet goal
    const recommendedMonthly = totalNeeded / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) - (FV_savings / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
    
    return {
      totalAtRetirement,
      totalContributed: currentSavings + (monthlyContribution * 12 * yearsUntilRetirement),
      totalGrowth: totalAtRetirement - (currentSavings + monthlyContribution * 12 * yearsUntilRetirement),
      totalNeeded,
      surplus,
      isOnTrack,
      yearsUntilRetirement,
      recommendedMonthly: Math.max(0, recommendedMonthly),
    };
  };

  const result = calculateRetirement();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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
      <section className="py-12 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <PiggyBank size={20} />
              <span className="font-semibold">Retirement Planning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Retirement Simulator
            </h1>
            <p className="text-lg text-gray-600">
              Plan your retirement and discover how much you need to save to live comfortably
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Age
                      </label>
                      <input
                        type="number"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(Number(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Retirement Age
                      </label>
                      <input
                        type="number"
                        value={retirementAge}
                        onChange={(e) => setRetirementAge(Number(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Retirement Savings
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

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
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Annual Return
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.5"
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        className="w-full pr-8 pl-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Typical range: 5-10% for diversified portfolio</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Goals</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Desired Monthly Income in Retirement
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={monthlyRetirementIncome}
                        onChange={(e) => setMonthlyRetirementIncome(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years in Retirement
                    </label>
                    <input
                      type="number"
                      value={retirementYears}
                      onChange={(e) => setRetirementYears(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">Average life expectancy consideration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Status Card */}
              <div className={`bg-gradient-to-br ${result.isOnTrack ? 'from-green-500 to-green-600' : 'from-orange-500 to-orange-600'} rounded-2xl p-8 text-white`}>
                <h3 className="text-lg font-semibold mb-2 opacity-90">
                  Projected Retirement Savings
                </h3>
                <div className="text-5xl font-bold mb-4">
                  {formatCurrency(result.totalAtRetirement)}
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <p className="text-sm mb-1">Status:</p>
                  <p className="text-xl font-bold">
                    {result.isOnTrack ? '✓ On Track!' : '⚠ Needs Adjustment'}
                  </p>
                </div>
                <p className="text-sm opacity-90">
                  In {result.yearsUntilRetirement} years (age {retirementAge})
                </p>
              </div>

              {/* Breakdown */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Retirement Analysis</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Needed:</span>
                    <span className="font-semibold">{formatCurrency(result.totalNeeded)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projected Amount:</span>
                    <span className="font-semibold">{formatCurrency(result.totalAtRetirement)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2">
                    <span className="text-gray-900 font-semibold">Difference:</span>
                    <span className={`font-bold ${result.isOnTrack ? 'text-green-600' : 'text-orange-600'}`}>
                      {result.surplus >= 0 ? '+' : ''}{formatCurrency(result.surplus)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              {!result.isOnTrack && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">💡 Recommendation</h4>
                  <p className="text-gray-700 mb-3">
                    To meet your retirement goal, consider increasing your monthly contribution to:
                  </p>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {formatCurrency(result.recommendedMonthly)}
                  </div>
                  <p className="text-sm text-gray-600">
                    That's an increase of {formatCurrency(result.recommendedMonthly - monthlyContribution)} per month
                  </p>
                </div>
              )}

              {result.isOnTrack && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🎉 Great Job!</h4>
                  <p className="text-gray-700 mb-2">
                    You're on track for a comfortable retirement! You'll have an extra:
                  </p>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatCurrency(result.surplus)}
                  </div>
                  <p className="text-sm text-gray-600">
                    This gives you a cushion for unexpected expenses or you could retire earlier!
                  </p>
                </div>
              )}

              {/* Growth Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Your Contributions
                  </h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(result.totalContributed)}
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Investment Growth
                  </h4>
                  <div className="text-2xl font-bold text-purple-600">
                    {formatCurrency(result.totalGrowth)}
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
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <Info className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Planning for Retirement
                  </h3>
                  <p className="text-gray-700">
                    Retirement planning is crucial for ensuring financial security in your later years. 
                    Starting early and contributing consistently can make a massive difference due to compound interest.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Retirement Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The 4% Rule</h3>
                <p className="text-gray-600">
                  A common guideline suggesting you can withdraw 4% of your retirement savings annually 
                  without running out of money for at least 30 years.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start Early</h3>
                <p className="text-gray-600">
                  The earlier you start saving, the more time compound interest has to work. Starting at 
                  25 vs 35 can result in hundreds of thousands more in retirement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Employer Match</h3>
                <p className="text-gray-600">
                  If your employer offers matching contributions (like 401k matching), prioritize contributing 
                  enough to get the full match - it's free money!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diversification</h3>
                <p className="text-gray-600">
                  Don't put all eggs in one basket. A diversified portfolio of stocks, bonds, and other 
                  assets reduces risk and provides more stable returns.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Retirement Savings Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Automate your savings:</strong> Set up automatic transfers to your retirement 
                    account so you save without thinking about it.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Increase contributions over time:</strong> As your income grows, increase your 
                    retirement contributions proportionally.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Consider multiple accounts:</strong> Use both traditional and Roth retirement 
                    accounts for tax diversification.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <p className="text-gray-700">
                    <strong>Review annually:</strong> Check your retirement plan at least once a year and 
                    adjust as needed based on life changes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
