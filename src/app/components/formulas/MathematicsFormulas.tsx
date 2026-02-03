import { ArrowLeft, Calculator } from 'lucide-react';

type Section = any;

interface MathematicsFormulasProps {
  onNavigate: (section: Section) => void;
}

export function MathematicsFormulas({ onNavigate }: MathematicsFormulasProps) {
  const formulaCategories = [
    {
      category: 'Financial Mathematics',
      formulas: [
        {
          name: 'Simple Interest',
          formula: 'I = Prt',
          variables: [
            { symbol: 'I', meaning: 'Interest earned or paid' },
            { symbol: 'P', meaning: 'Principal (initial amount)' },
            { symbol: 'r', meaning: 'Annual interest rate (as decimal)' },
            { symbol: 't', meaning: 'Time in years' },
          ],
          example: 'P = $5,000, r = 4% (0.04), t = 3 years: I = 5,000 × 0.04 × 3 = $600',
        },
        {
          name: 'Compound Interest',
          formula: 'A = P(1 + r/n)^(nt)',
          variables: [
            { symbol: 'A', meaning: 'Final amount' },
            { symbol: 'P', meaning: 'Principal' },
            { symbol: 'r', meaning: 'Annual interest rate (decimal)' },
            { symbol: 'n', meaning: 'Compounding frequency per year' },
            { symbol: 't', meaning: 'Time in years' },
          ],
          example: 'P=$10,000, r=6%, n=12 (monthly), t=5: A = 10,000(1+0.06/12)^(12×5) = $13,488.50',
        },
        {
          name: 'Continuous Compounding',
          formula: 'A = Pe^(rt)',
          variables: [
            { symbol: 'e', meaning: 'Euler\'s number (≈ 2.71828)' },
            { symbol: 'A', meaning: 'Final amount with continuous compounding' },
          ],
          example: 'P=$10,000, r=6%, t=5: A = 10,000 × e^(0.06×5) = $13,498.59',
        },
        {
          name: 'Present Value of Annuity',
          formula: 'PV = PMT × [(1 - (1+r)^(-n)) / r]',
          variables: [
            { symbol: 'PV', meaning: 'Present value' },
            { symbol: 'PMT', meaning: 'Regular payment amount' },
            { symbol: 'r', meaning: 'Interest rate per period' },
            { symbol: 'n', meaning: 'Number of periods' },
          ],
          example: 'PMT=$1,000/year, r=5%, n=10: PV = 1,000 × [(1-1.05^(-10))/0.05] = $7,721.73',
        },
        {
          name: 'Future Value of Annuity',
          formula: 'FV = PMT × [((1+r)^n - 1) / r]',
          variables: [
            { symbol: 'FV', meaning: 'Future value of series of payments' },
          ],
          example: 'Save $1,000/year at 5% for 10 years: FV = 1,000 × [(1.05^10-1)/0.05] = $12,577.89',
        },
        {
          name: 'Loan Amortization Payment',
          formula: 'M = P × [r(1+r)^n] / [(1+r)^n - 1]',
          variables: [
            { symbol: 'M', meaning: 'Monthly payment' },
            { symbol: 'P', meaning: 'Loan principal' },
            { symbol: 'r', meaning: 'Monthly interest rate' },
            { symbol: 'n', meaning: 'Total number of payments' },
          ],
          example: '$250K loan, 4% annual (0.333% monthly), 30 years: M = $1,193.54/month',
        },
      ],
    },
    {
      category: 'Percentages & Ratios',
      formulas: [
        {
          name: 'Percentage Change',
          formula: '% Change = [(New Value - Old Value) / Old Value] × 100%',
          variables: [
            { symbol: 'Positive', meaning: 'Increase' },
            { symbol: 'Negative', meaning: 'Decrease' },
          ],
          example: 'Price went from $50 to $60: % Change = [(60-50)/50] × 100% = 20% increase',
        },
        {
          name: 'Percentage of Total',
          formula: 'Percentage = (Part / Whole) × 100%',
          variables: [
            { symbol: 'Part', meaning: 'Subset amount' },
            { symbol: 'Whole', meaning: 'Total amount' },
          ],
          example: '15 out of 60 students passed: Percentage = (15/60) × 100% = 25%',
        },
        {
          name: 'Percentage Point Difference',
          formula: 'Difference = New % - Old %',
          variables: [
            { symbol: 'Note', meaning: 'Different from percentage change!' },
          ],
          example: 'Interest rate went from 3% to 5%: Difference = 2 percentage points (NOT 66.7%)',
        },
        {
          name: 'Ratio',
          formula: 'Ratio = A : B = A/B',
          variables: [
            { symbol: 'A : B', meaning: 'Comparison of two quantities' },
          ],
          example: 'Mix has 3 parts red, 2 parts blue: Ratio = 3:2 = 1.5',
        },
        {
          name: 'Proportion',
          formula: 'a/b = c/d  →  ad = bc',
          variables: [
            { symbol: 'Cross multiply', meaning: 'To solve for unknown in proportion' },
          ],
          example: 'If 2/3 = x/12, then 2×12 = 3×x, so x = 8',
        },
      ],
    },
    {
      category: 'Growth & Decay',
      formulas: [
        {
          name: 'Exponential Growth',
          formula: 'A(t) = A₀ × e^(kt)',
          variables: [
            { symbol: 'A(t)', meaning: 'Amount at time t' },
            { symbol: 'A₀', meaning: 'Initial amount' },
            { symbol: 'k', meaning: 'Growth rate (positive)' },
            { symbol: 't', meaning: 'Time' },
          ],
          example: 'Population 1,000, growth rate 5%/year: After 10 years = 1,000 × e^(0.05×10) = 1,649',
        },
        {
          name: 'Exponential Decay',
          formula: 'A(t) = A₀ × e^(-kt)',
          variables: [
            { symbol: 'k', meaning: 'Decay rate (positive, but used with negative sign)' },
          ],
          example: 'Radioactive material half-life calculations, depreciation',
        },
        {
          name: 'Doubling Time',
          formula: 'T_double = ln(2) / k  ≈  0.693 / k',
          variables: [
            { symbol: 'T', meaning: 'Time to double' },
            { symbol: 'k', meaning: 'Growth rate (as decimal)' },
          ],
          example: 'At 7% growth: Doubling time = 0.693 / 0.07 ≈ 9.9 years',
        },
        {
          name: 'Half-Life',
          formula: 'T_half = ln(2) / k  ≈  0.693 / k',
          variables: [
            { symbol: 'T', meaning: 'Time to reduce to half' },
            { symbol: 'k', meaning: 'Decay rate' },
          ],
          example: 'Decay rate 0.1/year: Half-life = 0.693 / 0.1 = 6.93 years',
        },
      ],
    },
    {
      category: 'Algebra & Equations',
      formulas: [
        {
          name: 'Quadratic Formula',
          formula: 'x = [-b ± √(b² - 4ac)] / 2a',
          variables: [
            { symbol: 'a, b, c', meaning: 'Coefficients in ax² + bx + c = 0' },
            { symbol: 'Discriminant', meaning: 'b² - 4ac determines number of solutions' },
          ],
          example: 'For x² - 5x + 6 = 0: x = [5 ± √(25-24)] / 2 = 3 or 2',
        },
        {
          name: 'Slope (Linear Equations)',
          formula: 'm = (y₂ - y₁) / (x₂ - x₁)',
          variables: [
            { symbol: 'm', meaning: 'Slope (rate of change)' },
            { symbol: '(x₁, y₁)', meaning: 'First point coordinates' },
            { symbol: '(x₂, y₂)', meaning: 'Second point coordinates' },
          ],
          example: 'Points (2, 3) and (5, 9): m = (9-3)/(5-2) = 6/3 = 2',
        },
        {
          name: 'Point-Slope Form',
          formula: 'y - y₁ = m(x - x₁)',
          variables: [
            { symbol: 'm', meaning: 'Slope' },
            { symbol: '(x₁, y₁)', meaning: 'Known point on line' },
          ],
          example: 'Line with slope 2 through (3, 5): y - 5 = 2(x - 3) → y = 2x - 1',
        },
        {
          name: 'Distance Formula',
          formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
          variables: [
            { symbol: 'd', meaning: 'Distance between two points' },
          ],
          example: 'Distance from (1, 2) to (4, 6): d = √[(4-1)² + (6-2)²] = √(9+16) = 5',
        },
      ],
    },
    {
      category: 'Calculus for Business',
      formulas: [
        {
          name: 'Marginal Cost (Derivative)',
          formula: 'MC = dC/dQ',
          variables: [
            { symbol: 'MC', meaning: 'Marginal cost (cost of one more unit)' },
            { symbol: 'C', meaning: 'Total cost function' },
            { symbol: 'Q', meaning: 'Quantity' },
          ],
          example: 'If C(Q) = 1000 + 50Q + 2Q², then MC = dC/dQ = 50 + 4Q',
        },
        {
          name: 'Marginal Revenue (Derivative)',
          formula: 'MR = dR/dQ',
          variables: [
            { symbol: 'MR', meaning: 'Marginal revenue (revenue from one more unit)' },
            { symbol: 'R', meaning: 'Total revenue function' },
          ],
          example: 'If R(Q) = 100Q - Q², then MR = dR/dQ = 100 - 2Q',
        },
        {
          name: 'Profit Maximization',
          formula: 'Set MR = MC and solve for Q',
          variables: [
            { symbol: 'Optimal Q', meaning: 'Quantity that maximizes profit' },
          ],
          example: 'MR = 100 - 2Q, MC = 50 + 4Q: Set equal → 100 - 2Q = 50 + 4Q → Q = 8.33',
        },
        {
          name: 'Elasticity (Point Elasticity)',
          formula: 'E = (dQ/dP) × (P/Q)',
          variables: [
            { symbol: 'E', meaning: 'Price elasticity of demand' },
            { symbol: 'dQ/dP', meaning: 'Derivative of quantity with respect to price' },
          ],
          example: 'If Q = 1000 - 2P at P=100: E = (-2) × (100/800) = -0.25 (inelastic)',
        },
      ],
    },
    {
      category: 'Statistics Basics',
      formulas: [
        {
          name: 'Mean (Average)',
          formula: 'x̄ = (x₁ + x₂ + ... + xₙ) / n  =  Σx / n',
          variables: [
            { symbol: 'x̄', meaning: 'Mean (average)' },
            { symbol: 'n', meaning: 'Number of values' },
            { symbol: 'Σx', meaning: 'Sum of all values' },
          ],
          example: 'Values: 10, 15, 20, 25, 30: Mean = (10+15+20+25+30)/5 = 20',
        },
        {
          name: 'Variance',
          formula: 'σ² = Σ(x - x̄)² / n',
          variables: [
            { symbol: 'σ²', meaning: 'Variance (spread of data)' },
            { symbol: 'x - x̄', meaning: 'Deviation from mean' },
          ],
          example: 'Measures how spread out the data is from the average',
        },
        {
          name: 'Standard Deviation',
          formula: 'σ = √[Σ(x - x̄)² / n]',
          variables: [
            { symbol: 'σ', meaning: 'Standard deviation (in same units as data)' },
          ],
          example: 'Square root of variance; measures typical distance from mean',
        },
        {
          name: 'Z-Score',
          formula: 'z = (x - μ) / σ',
          variables: [
            { symbol: 'z', meaning: 'Number of standard deviations from mean' },
            { symbol: 'x', meaning: 'Data point' },
            { symbol: 'μ', meaning: 'Population mean' },
            { symbol: 'σ', meaning: 'Standard deviation' },
          ],
          example: 'Score 85, mean 75, SD 10: z = (85-75)/10 = 1.0 (one SD above average)',
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
            onClick={() => onNavigate('topics')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Related Topics
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
              <Calculator size={20} />
              <span className="font-semibold">Mathematics Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mathematics Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Essential mathematical formulas for finance, business, and quantitative analysis
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-orange-600">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.formulas.map((formula, formIndex) => (
                    <div key={formIndex} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {formula.name}
                      </h3>
                      
                      {/* Formula Display */}
                      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg mb-6">
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
                              <span className="font-mono font-bold text-orange-600 min-w-fit">
                                {variable.symbol} =
                              </span>
                              <span className="text-gray-700">{variable.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Mathematics Tips</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Order of operations:</strong> Remember PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Unit consistency:</strong> Make sure all units match (convert years to months, percentages to decimals, etc.)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Check reasonableness:</strong> After calculating, ask if the answer makes sense in context
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Use calculators wisely:</strong> Understand the concept before relying on computational tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
