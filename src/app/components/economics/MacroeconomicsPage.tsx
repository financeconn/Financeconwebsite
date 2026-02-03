import { ArrowLeft, Globe, TrendingUp, DollarSign, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Section = any;

interface MacroeconomicsPageProps {
  onNavigate: (section: Section) => void;
}

export function MacroeconomicsPage({ onNavigate }: MacroeconomicsPageProps) {
  return (
    <div className="bg-white">
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
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <Globe size={20} />
                <span className="font-semibold">National Economics</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Macroeconomics
              </h1>
              <p className="text-xl text-gray-600">
                Study the economy as a whole: growth, inflation, unemployment, and government policies
                that affect the entire nation and global economy.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGdyb3d0aCUyMGdsb2JhbHxlbnwxfHx8fDE3NjY1ODcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Macroeconomics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GDP Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">GDP - Gross Domestic Product</h2>
            <p className="text-lg text-gray-600 mb-8">
              GDP is the total monetary value of all goods and services produced within a country during
              a specific period. It's the main indicator of an economy's size and health.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">GDP Components</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    C
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consumption (C)</h4>
                    <p className="text-gray-600 text-sm">
                      Household spending on goods and services (food, housing, healthcare, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    I
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment (I)</h4>
                    <p className="text-gray-600 text-sm">
                      Business spending on capital goods, construction, and inventory changes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    G
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Government Spending (G)</h4>
                    <p className="text-gray-600 text-sm">
                      Government expenditure on public services, infrastructure, and defense
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    NX
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Net Exports (NX)</h4>
                    <p className="text-gray-600 text-sm">
                      Exports minus imports (trade balance with other countries)
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-500">
                  <p className="text-center text-xl font-bold text-gray-900">
                    GDP = C + I + G + (X - M)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Nominal GDP</h4>
                <p className="text-sm text-gray-600">
                  Calculated using current prices. Affected by inflation and doesn't accurately
                  reflect real growth.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Real GDP</h4>
                <p className="text-sm text-gray-600">
                  Adjusted for inflation using base year prices. Better reflects true economic growth
                  and standard of living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inflation and Unemployment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Inflation and Unemployment</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Inflation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-red-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Inflation</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Sustained increase in the general price level of goods and services over time,
                  reducing purchasing power.
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Causes of Inflation</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Demand-pull (excess demand)</li>
                      <li>• Cost-push (production costs rise)</li>
                      <li>• Monetary expansion</li>
                      <li>• Exchange rate depreciation</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Effects</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Reduced purchasing power</li>
                      <li>• Uncertainty for businesses</li>
                      <li>• Income redistribution</li>
                      <li>• Affects savings and investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Unemployment */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Unemployment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Percentage of the labor force actively seeking work but unable to find employment.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Types of Unemployment</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Frictional (job transitions)</li>
                      <li>• Structural (skill mismatch)</li>
                      <li>• Cyclical (economic downturns)</li>
                      <li>• Seasonal (seasonal industries)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Natural Rate</h4>
                    <p className="text-sm text-gray-600">
                      The unemployment rate when the economy is at full employment,
                      consisting of frictional and structural unemployment only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phillips Curve */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phillips Curve</h3>
              <p className="text-gray-600 mb-4">
                Historical inverse relationship between inflation and unemployment: when unemployment
                is low, inflation tends to be high, and vice versa.
              </p>
              <p className="text-sm text-gray-500 italic">
                Note: This relationship has become less predictable in modern economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monetary and Fiscal Policy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Economic Policies</h2>

            <div className="space-y-8">
              {/* Monetary Policy */}
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Monetary Policy</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Actions by central banks to control money supply and interest rates to achieve
                  macroeconomic goals (price stability, full employment, economic growth).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Expansionary Policy</h4>
                    <p className="text-sm text-gray-600 mb-2">Used during recessions</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Lower interest rates</li>
                      <li>• Increase money supply</li>
                      <li>• Stimulate borrowing and spending</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Contractionary Policy</h4>
                    <p className="text-sm text-gray-600 mb-2">Used to combat inflation</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Raise interest rates</li>
                      <li>• Decrease money supply</li>
                      <li>• Reduce borrowing and spending</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Central Bank Tools</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Interest rate adjustments</li>
                    <li>• Open market operations (buying/selling bonds)</li>
                    <li>• Reserve requirements for banks</li>
                    <li>• Quantitative easing</li>
                  </ul>
                </div>
              </div>

              {/* Fiscal Policy */}
              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-purple-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Fiscal Policy</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Government decisions about spending and taxation to influence the economy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Expansionary Fiscal Policy</h4>
                    <p className="text-sm text-gray-600 mb-2">Stimulate economic growth</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Increase government spending</li>
                      <li>• Cut taxes</li>
                      <li>• Creates budget deficit</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Contractionary Fiscal Policy</h4>
                    <p className="text-sm text-gray-600 mb-2">Reduce inflation</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Decrease government spending</li>
                      <li>• Raise taxes</li>
                      <li>• Creates budget surplus</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Budget Balance</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Deficit:</strong> Spending &gt; Revenue (government borrows)<br/>
                    <strong>Surplus:</strong> Revenue &gt; Spending (government saves)<br/>
                    <strong>Balanced:</strong> Spending = Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Deep Dive into Macroeconomics
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Find here places where you can learn more about macroeconomics
            </p>
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
