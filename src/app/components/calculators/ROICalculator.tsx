import { ArrowLeft, DollarSign, Info } from 'lucide-react';
import { useState } from 'react';

type Section = any;

interface ROICalculatorProps {
  onNavigate: (section: Section) => void;
}

export function ROICalculator({ onNavigate }: ROICalculatorProps) {
  const [initialInvestment, setInitialInvestment] = useState(50000);
  const [finalValue, setFinalValue] = useState(65000);
  const [additionalCosts, setAdditionalCosts] = useState(2000);
  const [timePeriod, setTimePeriod] = useState(2);

  // Calculate ROI
  const calculateROI = () => {
    const totalCost = initialInvestment + additionalCosts;
    const netProfit = finalValue - totalCost;
    const roi = (netProfit / totalCost) * 100;
    const annualizedROI = timePeriod > 0 ? (Math.pow(1 + (roi / 100), 1 / timePeriod) - 1) * 100 : roi;
    
    return {
      netProfit,
      roi,
      annualizedROI,
      totalCost,
    };
  };

  const result = calculateROI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const getROICategory = (roi: number) => {
    if (roi < 0) return { text: 'Loss', color: 'red', bgGradient: 'from-red-500 to-red-600', textColor: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
    if (roi < 5) return { text: 'Low Return', color: 'orange', bgGradient: 'from-orange-500 to-orange-600', textColor: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' };
    if (roi < 15) return { text: 'Good Return', color: 'blue', bgGradient: 'from-blue-500 to-blue-600', textColor: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };
    if (roi < 30) return { text: 'Great Return', color: 'green', bgGradient: 'from-green-500 to-green-600', textColor: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' };
    return { text: 'Excellent Return', color: 'purple', bgGradient: 'from-purple-500 to-purple-600', textColor: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' };
  };

  const category = getROICategory(result.roi);

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
      <section className="py-12 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <DollarSign size={20} />
              <span className="font-semibold">Investment Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ROI Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Calculate the return on investment to evaluate the profitability of your investments
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Details</h2>
              
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
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">The amount you initially invested</p>
                </div>

                {/* Additional Costs */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Costs
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={additionalCosts}
                      onChange={(e) => setAdditionalCosts(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Fees, taxes, maintenance, etc.</p>
                </div>

                {/* Final Value */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Final Value / Current Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={finalValue}
                      onChange={(e) => setFinalValue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">What the investment is worth now</p>
                </div>

                {/* Time Period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">How long you've held the investment</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 text-white`}>
                <h3 className="text-lg font-semibold mb-2 opacity-90">Return on Investment (ROI)</h3>
                <div className="text-5xl font-bold mb-2">
                  {result.roi.toFixed(2)}%
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                    {category.text}
                  </span>
                </div>
                <p className="text-sm opacity-90">
                  Annualized ROI: <span className="font-bold">{result.annualizedROI.toFixed(2)}%</span> per year
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`${result.netProfit >= 0 ? category.bgColor : 'bg-red-50'} border-2 ${result.netProfit >= 0 ? category.borderColor : 'border-red-200'} rounded-xl p-6`}>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Net Profit/Loss
                  </h4>
                  <div className={`text-2xl font-bold ${result.netProfit >= 0 ? category.textColor : 'text-red-600'}`}>
                    {formatCurrency(result.netProfit)}
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Total Investment
                  </h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(result.totalCost)}
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Investment Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Investment:</span>
                    <span className="font-semibold">{formatCurrency(initialInvestment)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Additional Costs:</span>
                    <span className="font-semibold">{formatCurrency(additionalCosts)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Cost:</span>
                    <span className="font-semibold">{formatCurrency(result.totalCost)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2">
                    <span className="text-gray-600">Current Value:</span>
                    <span className="font-semibold">{formatCurrency(finalValue)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2">
                    <span className="text-gray-900 font-semibold">Return:</span>
                    <span className={`font-bold ${result.netProfit >= 0 ? category.textColor : 'text-red-600'}`}>
                      {result.netProfit >= 0 ? '+' : ''}{formatCurrency(result.netProfit)}
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
            <div className="bg-purple-100 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <Info className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    What is ROI?
                  </h3>
                  <p className="text-gray-700">
                    ROI (Return on Investment) is a performance measure used to evaluate the efficiency of an investment. 
                    It measures the amount of return on an investment relative to its cost, expressed as a percentage.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Formula</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <p className="text-center font-mono">
                    ROI = (Net Profit / Total Investment) × 100
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  Net Profit = Final Value - (Initial Investment + Additional Costs)
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Annualized ROI</h3>
                <p className="text-gray-600 mb-2">
                  Annualized ROI shows the yearly return rate, making it easier to compare investments 
                  held for different time periods.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Essential for comparing short-term vs long-term investments
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Good vs Bad ROI</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Negative:</strong> Loss on investment</li>
                  <li>• <strong>0-5%:</strong> Low return, below inflation</li>
                  <li>• <strong>5-10%:</strong> Moderate return</li>
                  <li>• <strong>10-20%:</strong> Good return</li>
                  <li>• <strong>20%+:</strong> Excellent return</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Important Considerations</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Include ALL costs (fees, taxes, maintenance)</li>
                  <li>• Consider the time period</li>
                  <li>• Compare with alternative investments</li>
                  <li>• Account for risk level</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">1.</span>
                  <p className="text-gray-700">
                    <strong>Compare Apples to Apples:</strong> Use annualized ROI when comparing investments 
                    with different time horizons.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">2.</span>
                  <p className="text-gray-700">
                    <strong>Don't Forget Hidden Costs:</strong> Transaction fees, management fees, taxes, 
                    and maintenance costs all reduce your actual ROI.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">3.</span>
                  <p className="text-gray-700">
                    <strong>Higher ROI = Higher Risk:</strong> Generally, investments with potential for 
                    higher returns come with higher risk. Consider your risk tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}