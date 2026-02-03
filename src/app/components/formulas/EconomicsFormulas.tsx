import { ArrowLeft, TrendingUp } from 'lucide-react';

type Section = any;

interface EconomicsFormulasProps {
  onNavigate: (section: Section) => void;
}

export function EconomicsFormulas({ onNavigate }: EconomicsFormulasProps) {
  const formulaCategories = [
    {
      category: 'Supply & Demand',
      formulas: [
        {
          name: 'Elasticity of Demand',
          formula: 'Ed = (% Change in Quantity Demanded) / (% Change in Price)',
          variables: [
            { symbol: 'Ed', meaning: 'Price elasticity of demand' },
            { symbol: 'Ed > 1', meaning: 'Elastic demand (responsive to price)' },
            { symbol: 'Ed < 1', meaning: 'Inelastic demand (less responsive)' },
          ],
          example: 'Price increases 10%, quantity demanded decreases 20%: Ed = 20% / 10% = 2 (elastic)',
        },
        {
          name: 'Equilibrium Price',
          formula: 'Qd = Qs (Quantity Demanded = Quantity Supplied)',
          variables: [
            { symbol: 'Qd', meaning: 'Quantity demanded at equilibrium' },
            { symbol: 'Qs', meaning: 'Quantity supplied at equilibrium' },
          ],
          example: 'Market clears when buyers want to purchase exactly what sellers want to sell',
        },
        {
          name: 'Consumer Surplus',
          formula: 'CS = (1/2) × Qe × (Pmax - Pe)',
          variables: [
            { symbol: 'CS', meaning: 'Consumer surplus' },
            { symbol: 'Qe', meaning: 'Equilibrium quantity' },
            { symbol: 'Pmax', meaning: 'Maximum price willing to pay' },
            { symbol: 'Pe', meaning: 'Equilibrium price' },
          ],
          example: 'Willing to pay $100, actual price $60, quantity 50: CS = 0.5 × 50 × (100-60) = $1,000',
        },
      ],
    },
    {
      category: 'National Income & GDP',
      formulas: [
        {
          name: 'Gross Domestic Product (GDP)',
          formula: 'GDP = C + I + G + (X - M)',
          variables: [
            { symbol: 'C', meaning: 'Consumer spending' },
            { symbol: 'I', meaning: 'Investment' },
            { symbol: 'G', meaning: 'Government spending' },
            { symbol: 'X', meaning: 'Exports' },
            { symbol: 'M', meaning: 'Imports' },
          ],
          example: 'C=$12T, I=$3T, G=$4T, X=$2T, M=$2.5T: GDP = 12+3+4+(2-2.5) = $18.5T',
        },
        {
          name: 'GDP Growth Rate',
          formula: 'Growth Rate = [(GDP₂ - GDP₁) / GDP₁] × 100%',
          variables: [
            { symbol: 'GDP₂', meaning: 'GDP in current period' },
            { symbol: 'GDP₁', meaning: 'GDP in previous period' },
          ],
          example: 'GDP was $20T, now $21T: [(21-20)/20] × 100% = 5% growth',
        },
        {
          name: 'Real GDP',
          formula: 'Real GDP = (Nominal GDP / GDP Deflator) × 100',
          variables: [
            { symbol: 'Nominal GDP', meaning: 'GDP at current prices' },
            { symbol: 'GDP Deflator', meaning: 'Price index measuring inflation' },
          ],
          example: 'Nominal GDP $22T, deflator 110: Real GDP = (22T / 110) × 100 = $20T',
        },
        {
          name: 'GDP per Capita',
          formula: 'GDP per Capita = Total GDP / Population',
          variables: [
            { symbol: 'Total GDP', meaning: 'Country\'s total GDP' },
            { symbol: 'Population', meaning: 'Total population' },
          ],
          example: 'GDP $20T, population 330M: GDP per capita = 20T / 330M = $60,606',
        },
      ],
    },
    {
      category: 'Inflation & Price Indices',
      formulas: [
        {
          name: 'Inflation Rate',
          formula: 'Inflation = [(CPI₂ - CPI₁) / CPI₁] × 100%',
          variables: [
            { symbol: 'CPI₂', meaning: 'Consumer Price Index in current period' },
            { symbol: 'CPI₁', meaning: 'Consumer Price Index in previous period' },
          ],
          example: 'CPI was 250, now 260: [(260-250)/250] × 100% = 4% inflation',
        },
        {
          name: 'Real Interest Rate',
          formula: 'Real Rate = Nominal Rate - Inflation Rate',
          variables: [
            { symbol: 'Real Rate', meaning: 'Interest rate adjusted for inflation' },
            { symbol: 'Nominal Rate', meaning: 'Stated interest rate' },
            { symbol: 'Inflation Rate', meaning: 'Rate of price increases' },
          ],
          example: 'Nominal rate 7%, inflation 3%: Real rate = 7% - 3% = 4%',
        },
        {
          name: 'Purchasing Power',
          formula: 'PP = 1 / Price Level',
          variables: [
            { symbol: 'PP', meaning: 'Purchasing power of money' },
            { symbol: 'Price Level', meaning: 'General level of prices (CPI)' },
          ],
          example: 'As prices double (CPI 100 to 200), purchasing power halves',
        },
      ],
    },
    {
      category: 'Unemployment',
      formulas: [
        {
          name: 'Unemployment Rate',
          formula: 'UR = (Unemployed / Labor Force) × 100%',
          variables: [
            { symbol: 'Unemployed', meaning: 'People actively seeking work but jobless' },
            { symbol: 'Labor Force', meaning: 'Employed + Unemployed' },
          ],
          example: '8M unemployed, 160M labor force: UR = (8/160) × 100% = 5%',
        },
        {
          name: 'Labor Force Participation Rate',
          formula: 'LFPR = (Labor Force / Adult Population) × 100%',
          variables: [
            { symbol: 'Labor Force', meaning: 'Working + actively seeking work' },
            { symbol: 'Adult Population', meaning: 'Working-age population' },
          ],
          example: '160M labor force, 250M adults: LFPR = (160/250) × 100% = 64%',
        },
      ],
    },
    {
      category: 'Production & Cost',
      formulas: [
        {
          name: 'Marginal Cost',
          formula: 'MC = ΔTC / ΔQ',
          variables: [
            { symbol: 'MC', meaning: 'Marginal cost' },
            { symbol: 'ΔTC', meaning: 'Change in total cost' },
            { symbol: 'ΔQ', meaning: 'Change in quantity' },
          ],
          example: 'Cost increases from $1,000 to $1,100 when producing 1 more unit: MC = 100/1 = $100',
        },
        {
          name: 'Average Total Cost',
          formula: 'ATC = TC / Q',
          variables: [
            { symbol: 'ATC', meaning: 'Average total cost' },
            { symbol: 'TC', meaning: 'Total cost' },
            { symbol: 'Q', meaning: 'Quantity produced' },
          ],
          example: 'Total cost $5,000, producing 100 units: ATC = 5,000/100 = $50 per unit',
        },
        {
          name: 'Marginal Revenue',
          formula: 'MR = ΔTR / ΔQ',
          variables: [
            { symbol: 'MR', meaning: 'Marginal revenue' },
            { symbol: 'ΔTR', meaning: 'Change in total revenue' },
            { symbol: 'ΔQ', meaning: 'Change in quantity sold' },
          ],
          example: 'Revenue increases from $10,000 to $10,500 selling 5 more units: MR = 500/5 = $100',
        },
        {
          name: 'Profit Maximization',
          formula: 'Optimal Output where MR = MC',
          variables: [
            { symbol: 'MR', meaning: 'Marginal revenue' },
            { symbol: 'MC', meaning: 'Marginal cost' },
          ],
          example: 'Produce until the revenue from one more unit equals its cost',
        },
      ],
    },
    {
      category: 'Trade & Exchange',
      formulas: [
        {
          name: 'Exchange Rate',
          formula: 'ER = Domestic Currency / Foreign Currency',
          variables: [
            { symbol: 'ER', meaning: 'Exchange rate' },
          ],
          example: '$1 = €0.85, so ER = 1/0.85 = 1.176 (need $1.18 to buy €1)',
        },
        {
          name: 'Balance of Trade',
          formula: 'BoT = Exports - Imports',
          variables: [
            { symbol: 'BoT', meaning: 'Balance of trade' },
            { symbol: 'Positive', meaning: 'Trade surplus (exports > imports)' },
            { symbol: 'Negative', meaning: 'Trade deficit (imports > exports)' },
          ],
          example: 'Exports $500B, Imports $450B: BoT = 500-450 = $50B surplus',
        },
        {
          name: 'Terms of Trade',
          formula: 'ToT = (Export Price Index / Import Price Index) × 100',
          variables: [
            { symbol: 'ToT', meaning: 'Terms of trade' },
            { symbol: 'ToT > 100', meaning: 'Favorable (exports relatively more expensive)' },
          ],
          example: 'Export index 120, import index 100: ToT = (120/100) × 100 = 120',
        },
      ],
    },
    {
      category: 'Money & Banking',
      formulas: [
        {
          name: 'Money Multiplier',
          formula: 'MM = 1 / Reserve Ratio',
          variables: [
            { symbol: 'MM', meaning: 'Money multiplier' },
            { symbol: 'Reserve Ratio', meaning: 'Required reserves / deposits' },
          ],
          example: 'Reserve ratio 10% (0.1): MM = 1/0.1 = 10 (each $1 becomes $10 in money supply)',
        },
        {
          name: 'Money Supply Change',
          formula: 'ΔMS = Initial Deposit × Money Multiplier',
          variables: [
            { symbol: 'ΔMS', meaning: 'Change in money supply' },
          ],
          example: '$1,000 deposit with MM of 10: ΔMS = 1,000 × 10 = $10,000',
        },
        {
          name: 'Quantity Theory of Money',
          formula: 'M × V = P × Y',
          variables: [
            { symbol: 'M', meaning: 'Money supply' },
            { symbol: 'V', meaning: 'Velocity of money' },
            { symbol: 'P', meaning: 'Price level' },
            { symbol: 'Y', meaning: 'Real output (GDP)' },
          ],
          example: 'If money supply doubles and velocity stays constant, either prices or output must increase',
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('economics')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Economics
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <TrendingUp size={20} />
              <span className="font-semibold">Economics Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Economics Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Essential economics formulas for microeconomics, macroeconomics, and international trade
            </p>
          </div>
        </div>
      </section>

      {/* Formulas Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {formulaCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.formulas.map((formula, formIndex) => (
                    <div key={formIndex} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {formula.name}
                      </h3>
                      
                      {/* Formula Display */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                        <p className="text-center text-2xl font-mono font-bold text-gray-900">
                          {formula.formula}
                        </p>
                      </div>

                      {/* Variables */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Where:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {formula.variables.map((variable, varIndex) => (
                            <div key={varIndex} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                              <span className="font-mono font-bold text-blue-600 min-w-fit">
                                {variable.symbol} =
                              </span>
                              <span className="text-gray-700">{variable.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">📘 Example:</h4>
                        <p className="text-gray-700">{formula.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Understanding Economic Formulas</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Ceteris paribus:</strong> Many formulas assume "all else equal" - other factors remain constant
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Nominal vs Real:</strong> Always consider inflation when comparing values over time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Marginal analysis:</strong> Economic decisions are often made at the margin (one more unit)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Correlation ≠ Causation:</strong> Economic relationships shown by formulas don't always imply cause and effect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
