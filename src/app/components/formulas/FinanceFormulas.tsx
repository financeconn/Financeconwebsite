import { ArrowLeft, Calculator } from 'lucide-react';

type Section = any;

interface FinanceFormulasProps {
  onNavigate: (section: Section) => void;
}

export function FinanceFormulas({ onNavigate }: FinanceFormulasProps) {
  const formulaCategories = [
    {
      category: 'Interest & Time Value of Money',
      formulas: [
        {
          name: 'Simple Interest',
          formula: 'I = P × r × t',
          variables: [
            { symbol: 'I', meaning: 'Interest earned' },
            { symbol: 'P', meaning: 'Principal (initial amount)' },
            { symbol: 'r', meaning: 'Interest rate (as decimal)' },
            { symbol: 't', meaning: 'Time period' },
          ],
          example: 'If you invest $1,000 at 5% for 3 years: I = 1,000 × 0.05 × 3 = $150',
        },
        {
          name: 'Compound Interest',
          formula: 'A = P(1 + r/n)^(nt)',
          variables: [
            { symbol: 'A', meaning: 'Final amount' },
            { symbol: 'P', meaning: 'Principal amount' },
            { symbol: 'r', meaning: 'Annual interest rate (decimal)' },
            { symbol: 'n', meaning: 'Number of times interest compounds per year' },
            { symbol: 't', meaning: 'Time in years' },
          ],
          example: '$1,000 at 5% compounded monthly for 3 years: A = 1,000(1 + 0.05/12)^(12×3) = $1,161.47',
        },
        {
          name: 'Present Value (PV)',
          formula: 'PV = FV / (1 + r)^n',
          variables: [
            { symbol: 'PV', meaning: 'Present Value' },
            { symbol: 'FV', meaning: 'Future Value' },
            { symbol: 'r', meaning: 'Discount rate (decimal)' },
            { symbol: 'n', meaning: 'Number of periods' },
          ],
          example: 'What is $10,000 in 5 years worth today at 6%? PV = 10,000/(1.06)^5 = $7,472.58',
        },
        {
          name: 'Future Value (FV)',
          formula: 'FV = PV × (1 + r)^n',
          variables: [
            { symbol: 'FV', meaning: 'Future Value' },
            { symbol: 'PV', meaning: 'Present Value' },
            { symbol: 'r', meaning: 'Interest rate (decimal)' },
            { symbol: 'n', meaning: 'Number of periods' },
          ],
          example: 'What will $5,000 be worth in 10 years at 7%? FV = 5,000 × (1.07)^10 = $9,835.76',
        },
      ],
    },
    {
      category: 'Investment Returns',
      formulas: [
        {
          name: 'Return on Investment (ROI)',
          formula: 'ROI = [(Final Value - Initial Investment) / Initial Investment] × 100%',
          variables: [
            { symbol: 'ROI', meaning: 'Return on Investment (percentage)' },
            { symbol: 'Final Value', meaning: 'Current value of investment' },
            { symbol: 'Initial Investment', meaning: 'Original amount invested' },
          ],
          example: 'Invested $10,000, now worth $12,500: ROI = [(12,500 - 10,000) / 10,000] × 100% = 25%',
        },
        {
          name: 'Annualized Return',
          formula: 'Annualized Return = [(Ending Value / Beginning Value)^(1/n) - 1] × 100%',
          variables: [
            { symbol: 'n', meaning: 'Number of years' },
          ],
          example: 'Investment grew from $10,000 to $15,000 in 3 years: [(15,000/10,000)^(1/3) - 1] × 100% = 14.47%',
        },
        {
          name: 'Capital Gains',
          formula: 'Capital Gains = Selling Price - Purchase Price - Costs',
          variables: [
            { symbol: 'Selling Price', meaning: 'Amount received from sale' },
            { symbol: 'Purchase Price', meaning: 'Original cost of asset' },
            { symbol: 'Costs', meaning: 'Transaction fees and expenses' },
          ],
          example: 'Bought stock at $50, sold at $75, fees $5: Capital Gains = 75 - 50 - 5 = $20',
        },
      ],
    },
    {
      category: 'Loan & Mortgage',
      formulas: [
        {
          name: 'Monthly Loan Payment',
          formula: 'M = P × [r(1+r)^n] / [(1+r)^n - 1]',
          variables: [
            { symbol: 'M', meaning: 'Monthly payment' },
            { symbol: 'P', meaning: 'Principal loan amount' },
            { symbol: 'r', meaning: 'Monthly interest rate (annual rate / 12)' },
            { symbol: 'n', meaning: 'Total number of payments' },
          ],
          example: '$200,000 loan at 4% for 30 years: r = 0.04/12 = 0.00333, n = 360, M = $954.83',
        },
        {
          name: 'Total Interest Paid',
          formula: 'Total Interest = (M × n) - P',
          variables: [
            { symbol: 'M', meaning: 'Monthly payment' },
            { symbol: 'n', meaning: 'Number of payments' },
            { symbol: 'P', meaning: 'Principal amount' },
          ],
          example: 'Monthly payment $954.83 for 360 months on $200,000: (954.83 × 360) - 200,000 = $143,739',
        },
        {
          name: 'Debt-to-Income Ratio',
          formula: 'DTI = (Total Monthly Debt Payments / Gross Monthly Income) × 100%',
          variables: [
            { symbol: 'DTI', meaning: 'Debt-to-Income ratio' },
          ],
          example: 'Monthly debt $2,000, income $6,000: DTI = (2,000 / 6,000) × 100% = 33.33%',
        },
      ],
    },
    {
      category: 'Savings & Retirement',
      formulas: [
        {
          name: 'Rule of 72',
          formula: 'Years to Double = 72 / Interest Rate',
          variables: [
            { symbol: 'Interest Rate', meaning: 'Annual interest rate (as whole number)' },
          ],
          example: 'At 8% interest, money doubles in: 72 / 8 = 9 years',
        },
        {
          name: 'Retirement Savings Goal',
          formula: 'Goal = (Annual Expenses × 25)',
          variables: [
            { symbol: 'Annual Expenses', meaning: 'Expected yearly spending in retirement' },
          ],
          example: 'Need $50,000/year in retirement: Goal = 50,000 × 25 = $1,250,000 (4% rule)',
        },
        {
          name: 'Monthly Savings Needed',
          formula: 'Monthly = [Goal × r] / [(1+r)^n - 1]',
          variables: [
            { symbol: 'Goal', meaning: 'Target savings amount' },
            { symbol: 'r', meaning: 'Monthly return rate' },
            { symbol: 'n', meaning: 'Number of months' },
          ],
          example: 'Need $100,000 in 10 years at 6% annual: Monthly = $610.21',
        },
      ],
    },
    {
      category: 'Financial Ratios',
      formulas: [
        {
          name: 'Net Worth',
          formula: 'Net Worth = Total Assets - Total Liabilities',
          variables: [
            { symbol: 'Total Assets', meaning: 'Everything you own (cash, investments, property)' },
            { symbol: 'Total Liabilities', meaning: 'Everything you owe (loans, debt)' },
          ],
          example: 'Assets $500,000, Liabilities $200,000: Net Worth = 500,000 - 200,000 = $300,000',
        },
        {
          name: 'Savings Rate',
          formula: 'Savings Rate = (Amount Saved / Gross Income) × 100%',
          variables: [
            { symbol: 'Amount Saved', meaning: 'Monthly or annual savings' },
            { symbol: 'Gross Income', meaning: 'Total income before taxes' },
          ],
          example: 'Save $1,500/month on $5,000 income: (1,500 / 5,000) × 100% = 30%',
        },
        {
          name: 'Emergency Fund Target',
          formula: 'Emergency Fund = Monthly Expenses × Months (3-6)',
          variables: [
            { symbol: 'Monthly Expenses', meaning: 'Average monthly living costs' },
            { symbol: 'Months', meaning: 'Typically 3-6 months recommended' },
          ],
          example: 'Monthly expenses $3,000, want 6 months: Emergency Fund = 3,000 × 6 = $18,000',
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
            onClick={() => onNavigate('finance')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Finance
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Calculator size={20} />
              <span className="font-semibold">Finance Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Finance Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Complete collection of essential finance formulas with explanations and examples
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-600">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.formulas.map((formula, formIndex) => (
                    <div key={formIndex} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {formula.name}
                      </h3>
                      
                      {/* Formula Display */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
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
                              <span className="font-mono font-bold text-green-600 min-w-fit">
                                {variable.symbol} =
                              </span>
                              <span className="text-gray-700">{variable.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Tips for Using Finance Formulas</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Always convert percentages to decimals:</strong> 5% = 0.05 in formulas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Match time periods:</strong> If interest is annual, time should be in years; if monthly, convert accordingly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Use our calculators:</strong> For complex calculations, use our interactive calculators in the Resources section
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Double-check units:</strong> Make sure all amounts are in the same currency and time units match
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
