import { ArrowLeft, Calculator } from 'lucide-react';

type Section = any;

interface AccountingFormulasProps {
  onNavigate: (section: Section) => void;
}

export function AccountingFormulas({ onNavigate }: AccountingFormulasProps) {
  const formulaCategories = [
    {
      category: 'Fundamental Accounting Equation',
      formulas: [
        {
          name: 'Accounting Equation',
          formula: 'Assets = Liabilities + Equity',
          variables: [
            { symbol: 'Assets', meaning: 'Resources owned by the company (cash, inventory, equipment, property)' },
            { symbol: 'Liabilities', meaning: 'Debts and obligations owed to others (loans, accounts payable)' },
            { symbol: 'Equity', meaning: 'Owner\'s stake in the business (capital, retained earnings)' },
          ],
          example: 'Company has $500,000 assets, $300,000 liabilities: Equity = 500,000 - 300,000 = $200,000',
        },
        {
          name: 'Expanded Accounting Equation',
          formula: 'Assets = Liabilities + Owner\'s Capital + Revenue - Expenses - Dividends',
          variables: [
            { symbol: 'Revenue', meaning: 'Income from business operations' },
            { symbol: 'Expenses', meaning: 'Costs incurred to generate revenue' },
            { symbol: 'Dividends', meaning: 'Distributions to owners/shareholders' },
          ],
          example: 'Shows how revenue increases equity while expenses and dividends decrease it',
        },
      ],
    },
    {
      category: 'Income Statement',
      formulas: [
        {
          name: 'Gross Profit',
          formula: 'Gross Profit = Revenue - Cost of Goods Sold (COGS)',
          variables: [
            { symbol: 'Revenue', meaning: 'Total sales income' },
            { symbol: 'COGS', meaning: 'Direct costs of producing goods sold' },
          ],
          example: 'Sales $1,000,000, COGS $600,000: Gross Profit = 1,000,000 - 600,000 = $400,000',
        },
        {
          name: 'Operating Income (EBIT)',
          formula: 'Operating Income = Gross Profit - Operating Expenses',
          variables: [
            { symbol: 'Operating Expenses', meaning: 'Selling, general & administrative expenses (SG&A)' },
            { symbol: 'EBIT', meaning: 'Earnings Before Interest and Taxes' },
          ],
          example: 'Gross Profit $400,000, Operating Expenses $200,000: EBIT = $200,000',
        },
        {
          name: 'Net Income',
          formula: 'Net Income = Revenue - All Expenses (including taxes and interest)',
          variables: [
            { symbol: 'Net Income', meaning: 'Bottom line profit after all costs' },
          ],
          example: 'Revenue $1M, Total Expenses $850,000: Net Income = $150,000',
        },
        {
          name: 'Earnings Per Share (EPS)',
          formula: 'EPS = (Net Income - Preferred Dividends) / Weighted Average Shares Outstanding',
          variables: [
            { symbol: 'EPS', meaning: 'Profit allocated to each common share' },
            { symbol: 'Preferred Dividends', meaning: 'Dividends paid to preferred shareholders' },
          ],
          example: 'Net Income $10M, 5M shares: EPS = 10,000,000 / 5,000,000 = $2.00 per share',
        },
      ],
    },
    {
      category: 'Balance Sheet',
      formulas: [
        {
          name: 'Working Capital',
          formula: 'Working Capital = Current Assets - Current Liabilities',
          variables: [
            { symbol: 'Current Assets', meaning: 'Assets convertible to cash within 1 year' },
            { symbol: 'Current Liabilities', meaning: 'Debts due within 1 year' },
          ],
          example: 'Current Assets $500,000, Current Liabilities $300,000: WC = $200,000',
        },
        {
          name: 'Current Ratio',
          formula: 'Current Ratio = Current Assets / Current Liabilities',
          variables: [
            { symbol: 'Current Ratio', meaning: 'Liquidity measure (>1 is healthy)' },
          ],
          example: 'Current Assets $500,000, Current Liabilities $300,000: Ratio = 1.67',
        },
        {
          name: 'Quick Ratio (Acid-Test)',
          formula: 'Quick Ratio = (Current Assets - Inventory) / Current Liabilities',
          variables: [
            { symbol: 'Quick Ratio', meaning: 'Stricter liquidity test excluding inventory' },
          ],
          example: 'Current Assets $500K, Inventory $150K, Current Liabilities $300K: Quick Ratio = 1.17',
        },
        {
          name: 'Debt-to-Equity Ratio',
          formula: 'D/E Ratio = Total Liabilities / Total Equity',
          variables: [
            { symbol: 'D/E Ratio', meaning: 'Financial leverage indicator' },
          ],
          example: 'Liabilities $600,000, Equity $400,000: D/E = 1.5 (60% more debt than equity)',
        },
      ],
    },
    {
      category: 'Profitability Ratios',
      formulas: [
        {
          name: 'Gross Profit Margin',
          formula: 'Gross Margin = (Gross Profit / Revenue) × 100%',
          variables: [
            { symbol: 'Gross Margin', meaning: 'Percentage of revenue retained after COGS' },
          ],
          example: 'Gross Profit $400,000, Revenue $1,000,000: Margin = 40%',
        },
        {
          name: 'Operating Profit Margin',
          formula: 'Operating Margin = (Operating Income / Revenue) × 100%',
          variables: [
            { symbol: 'Operating Margin', meaning: 'Profitability from core operations' },
          ],
          example: 'Operating Income $200,000, Revenue $1,000,000: Margin = 20%',
        },
        {
          name: 'Net Profit Margin',
          formula: 'Net Margin = (Net Income / Revenue) × 100%',
          variables: [
            { symbol: 'Net Margin', meaning: 'Overall profitability percentage' },
          ],
          example: 'Net Income $150,000, Revenue $1,000,000: Net Margin = 15%',
        },
        {
          name: 'Return on Assets (ROA)',
          formula: 'ROA = (Net Income / Total Assets) × 100%',
          variables: [
            { symbol: 'ROA', meaning: 'How efficiently assets generate profit' },
          ],
          example: 'Net Income $150,000, Total Assets $1,200,000: ROA = 12.5%',
        },
        {
          name: 'Return on Equity (ROE)',
          formula: 'ROE = (Net Income / Shareholder\'s Equity) × 100%',
          variables: [
            { symbol: 'ROE', meaning: 'Return generated on shareholders\' investment' },
          ],
          example: 'Net Income $150,000, Equity $500,000: ROE = 30%',
        },
      ],
    },
    {
      category: 'Cost Accounting',
      formulas: [
        {
          name: 'Cost of Goods Sold (COGS)',
          formula: 'COGS = Beginning Inventory + Purchases - Ending Inventory',
          variables: [
            { symbol: 'Beginning Inventory', meaning: 'Inventory at start of period' },
            { symbol: 'Purchases', meaning: 'Inventory bought during period' },
            { symbol: 'Ending Inventory', meaning: 'Inventory at end of period' },
          ],
          example: 'Beginning $50K, Purchases $300K, Ending $70K: COGS = 50K + 300K - 70K = $280K',
        },
        {
          name: 'Cost of Goods Manufactured (COGM)',
          formula: 'COGM = Beginning WIP + Total Manufacturing Costs - Ending WIP',
          variables: [
            { symbol: 'WIP', meaning: 'Work In Progress inventory' },
            { symbol: 'Manufacturing Costs', meaning: 'Direct materials + Direct labor + Overhead' },
          ],
          example: 'Beginning WIP $20K, Manufacturing $250K, Ending WIP $30K: COGM = $240K',
        },
        {
          name: 'Break-Even Point (Units)',
          formula: 'BEP (units) = Fixed Costs / (Price per Unit - Variable Cost per Unit)',
          variables: [
            { symbol: 'Fixed Costs', meaning: 'Costs that don\'t change with volume' },
            { symbol: 'Price per Unit', meaning: 'Selling price' },
            { symbol: 'Variable Cost per Unit', meaning: 'Cost that varies with production' },
          ],
          example: 'Fixed Costs $100K, Price $50, Variable Cost $30: BEP = 100,000/(50-30) = 5,000 units',
        },
        {
          name: 'Contribution Margin',
          formula: 'Contribution Margin = Sales Revenue - Variable Costs',
          variables: [
            { symbol: 'Contribution Margin', meaning: 'Amount available to cover fixed costs and profit' },
          ],
          example: 'Sales $500,000, Variable Costs $300,000: CM = $200,000',
        },
        {
          name: 'Contribution Margin Ratio',
          formula: 'CM Ratio = Contribution Margin / Sales Revenue × 100%',
          variables: [
            { symbol: 'CM Ratio', meaning: 'Percentage of sales contributing to fixed costs' },
          ],
          example: 'CM $200,000, Sales $500,000: CM Ratio = 40%',
        },
      ],
    },
    {
      category: 'Cash Flow & Efficiency',
      formulas: [
        {
          name: 'Operating Cash Flow',
          formula: 'OCF = Net Income + Non-Cash Expenses - Changes in Working Capital',
          variables: [
            { symbol: 'Non-Cash Expenses', meaning: 'Depreciation, amortization, etc.' },
            { symbol: 'Working Capital Changes', meaning: 'Increases in receivables/inventory decrease cash' },
          ],
          example: 'Net Income $100K, Depreciation $20K, WC increase $10K: OCF = $110K',
        },
        {
          name: 'Accounts Receivable Turnover',
          formula: 'AR Turnover = Net Credit Sales / Average Accounts Receivable',
          variables: [
            { symbol: 'AR Turnover', meaning: 'How many times receivables are collected per year' },
          ],
          example: 'Credit Sales $1,200,000, Avg AR $100,000: Turnover = 12 times/year',
        },
        {
          name: 'Days Sales Outstanding (DSO)',
          formula: 'DSO = (Accounts Receivable / Credit Sales) × 365',
          variables: [
            { symbol: 'DSO', meaning: 'Average days to collect payment' },
          ],
          example: 'AR $100,000, Annual Credit Sales $1,200,000: DSO = 30.4 days',
        },
        {
          name: 'Inventory Turnover',
          formula: 'Inventory Turnover = COGS / Average Inventory',
          variables: [
            { symbol: 'Inventory Turnover', meaning: 'Times inventory is sold and replaced per year' },
          ],
          example: 'COGS $600,000, Avg Inventory $100,000: Turnover = 6 times/year',
        },
        {
          name: 'Asset Turnover Ratio',
          formula: 'Asset Turnover = Revenue / Average Total Assets',
          variables: [
            { symbol: 'Asset Turnover', meaning: 'How efficiently assets generate sales' },
          ],
          example: 'Revenue $2,000,000, Avg Assets $1,000,000: Turnover = 2.0',
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Calculator size={20} />
              <span className="font-semibold">Accounting Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accounting Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Master essential accounting formulas for financial statements, ratios, and cost analysis
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
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
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
                      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Accounting Formula Tips</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Double-entry system:</strong> Every transaction affects at least two accounts to keep the equation balanced
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Ratios are relative:</strong> Compare ratios to industry benchmarks and company's historical performance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Context matters:</strong> High ratios aren't always good; consider the business model and industry norms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Use multiple metrics:</strong> Don't rely on one formula; analyze multiple ratios for a complete picture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
