import { ArrowLeft, PieChart } from 'lucide-react';

type Section = any;

interface StatisticsFormulasProps {
  onNavigate: (section: Section) => void;
}

export function StatisticsFormulas({ onNavigate }: StatisticsFormulasProps) {
  const formulaCategories = [
    {
      category: 'Descriptive Statistics - Central Tendency',
      formulas: [
        {
          name: 'Mean (Arithmetic Average)',
          formula: 'μ = (Σx) / n  or  x̄ = (Σx) / n',
          variables: [
            { symbol: 'μ', meaning: 'Population mean' },
            { symbol: 'x̄', meaning: 'Sample mean' },
            { symbol: 'Σx', meaning: 'Sum of all values' },
            { symbol: 'n', meaning: 'Number of observations' },
          ],
          example: 'Sales: $100, $150, $200, $250, $300: Mean = (100+150+200+250+300)/5 = $200',
        },
        {
          name: 'Median',
          formula: 'Middle value when data is ordered (or average of two middle values)',
          variables: [
            { symbol: 'Odd n', meaning: 'Middle value at position (n+1)/2' },
            { symbol: 'Even n', meaning: 'Average of values at n/2 and (n/2)+1' },
          ],
          example: 'Values: 10, 15, 20, 25, 30 → Median = 20 (middle value)',
        },
        {
          name: 'Mode',
          formula: 'Most frequently occurring value(s)',
          variables: [
            { symbol: 'Unimodal', meaning: 'One mode' },
            { symbol: 'Bimodal', meaning: 'Two modes' },
            { symbol: 'Multimodal', meaning: 'More than two modes' },
          ],
          example: 'Values: 5, 7, 7, 9, 7, 12 → Mode = 7 (appears 3 times)',
        },
        {
          name: 'Weighted Mean',
          formula: 'x̄_w = Σ(w × x) / Σw',
          variables: [
            { symbol: 'w', meaning: 'Weight of each value' },
            { symbol: 'x', meaning: 'Value' },
          ],
          example: 'Grades: 90 (weight 3), 80 (weight 2), 70 (weight 1): Weighted mean = (270+160+70)/6 = 83.3',
        },
      ],
    },
    {
      category: 'Descriptive Statistics - Dispersion',
      formulas: [
        {
          name: 'Range',
          formula: 'Range = Maximum Value - Minimum Value',
          variables: [
            { symbol: 'Range', meaning: 'Spread between highest and lowest values' },
          ],
          example: 'Values: 10, 15, 30, 45, 60 → Range = 60 - 10 = 50',
        },
        {
          name: 'Variance (Population)',
          formula: 'σ² = Σ(x - μ)² / N',
          variables: [
            { symbol: 'σ²', meaning: 'Population variance' },
            { symbol: 'μ', meaning: 'Population mean' },
            { symbol: 'N', meaning: 'Population size' },
          ],
          example: 'Measures average squared deviation from mean',
        },
        {
          name: 'Variance (Sample)',
          formula: 's² = Σ(x - x̄)² / (n - 1)',
          variables: [
            { symbol: 's²', meaning: 'Sample variance' },
            { symbol: 'x̄', meaning: 'Sample mean' },
            { symbol: 'n - 1', meaning: 'Degrees of freedom (Bessel\'s correction)' },
          ],
          example: 'Use n-1 for samples to get unbiased estimator of population variance',
        },
        {
          name: 'Standard Deviation (Population)',
          formula: 'σ = √[Σ(x - μ)² / N]',
          variables: [
            { symbol: 'σ', meaning: 'Population standard deviation' },
          ],
          example: 'Square root of variance; in same units as original data',
        },
        {
          name: 'Standard Deviation (Sample)',
          formula: 's = √[Σ(x - x̄)² / (n - 1)]',
          variables: [
            { symbol: 's', meaning: 'Sample standard deviation' },
          ],
          example: 'Most commonly used measure of spread for sample data',
        },
        {
          name: 'Coefficient of Variation',
          formula: 'CV = (σ / μ) × 100%  or  (s / x̄) × 100%',
          variables: [
            { symbol: 'CV', meaning: 'Relative variability (allows comparison of different scales)' },
          ],
          example: 'SD = 10, Mean = 100: CV = (10/100) × 100% = 10%',
        },
      ],
    },
    {
      category: 'Probability',
      formulas: [
        {
          name: 'Basic Probability',
          formula: 'P(A) = Number of favorable outcomes / Total number of outcomes',
          variables: [
            { symbol: 'P(A)', meaning: 'Probability of event A' },
            { symbol: 'Range', meaning: '0 ≤ P(A) ≤ 1' },
          ],
          example: 'Rolling a 6 on a die: P(6) = 1/6 ≈ 0.167 or 16.7%',
        },
        {
          name: 'Complement Rule',
          formula: 'P(A\') = 1 - P(A)',
          variables: [
            { symbol: 'P(A\')', meaning: 'Probability that A does NOT occur' },
          ],
          example: 'If P(rain) = 0.3, then P(no rain) = 1 - 0.3 = 0.7',
        },
        {
          name: 'Addition Rule (Mutually Exclusive)',
          formula: 'P(A or B) = P(A) + P(B)',
          variables: [
            { symbol: 'Mutually Exclusive', meaning: 'Events cannot occur simultaneously' },
          ],
          example: 'Drawing a heart or a spade: P = 13/52 + 13/52 = 26/52 = 0.5',
        },
        {
          name: 'Addition Rule (General)',
          formula: 'P(A or B) = P(A) + P(B) - P(A and B)',
          variables: [
            { symbol: 'P(A and B)', meaning: 'Probability both occur (overlap)' },
          ],
          example: 'Subtract overlap to avoid double-counting',
        },
        {
          name: 'Multiplication Rule (Independent)',
          formula: 'P(A and B) = P(A) × P(B)',
          variables: [
            { symbol: 'Independent', meaning: 'One event doesn\'t affect the other' },
          ],
          example: 'Flipping heads twice: P = 0.5 × 0.5 = 0.25',
        },
        {
          name: 'Conditional Probability',
          formula: 'P(A|B) = P(A and B) / P(B)',
          variables: [
            { symbol: 'P(A|B)', meaning: 'Probability of A given that B occurred' },
          ],
          example: 'Probability of drawing a second ace, given first was an ace',
        },
      ],
    },
    {
      category: 'Correlation & Regression',
      formulas: [
        {
          name: 'Covariance',
          formula: 'Cov(X,Y) = Σ[(x - x̄)(y - ȳ)] / (n - 1)',
          variables: [
            { symbol: 'Cov(X,Y)', meaning: 'How two variables vary together' },
            { symbol: 'Positive', meaning: 'Variables move in same direction' },
            { symbol: 'Negative', meaning: 'Variables move in opposite directions' },
          ],
          example: 'Measures relationship between two variables but scale-dependent',
        },
        {
          name: 'Correlation Coefficient (Pearson\'s r)',
          formula: 'r = Cov(X,Y) / (s_x × s_y)',
          variables: [
            { symbol: 'r', meaning: 'Correlation between -1 and +1' },
            { symbol: 'r = +1', meaning: 'Perfect positive correlation' },
            { symbol: 'r = -1', meaning: 'Perfect negative correlation' },
            { symbol: 'r = 0', meaning: 'No linear correlation' },
          ],
          example: 'Standardized measure of linear relationship between variables',
        },
        {
          name: 'Coefficient of Determination',
          formula: 'R² = r²  (square of correlation coefficient)',
          variables: [
            { symbol: 'R²', meaning: 'Proportion of variance in Y explained by X' },
            { symbol: 'Range', meaning: '0 to 1 (or 0% to 100%)' },
          ],
          example: 'R² = 0.64 means 64% of variation in Y is explained by X',
        },
        {
          name: 'Simple Linear Regression (Slope)',
          formula: 'b = r × (s_y / s_x)',
          variables: [
            { symbol: 'b', meaning: 'Slope of regression line' },
            { symbol: 'r', meaning: 'Correlation coefficient' },
            { symbol: 's_y, s_x', meaning: 'Standard deviations of Y and X' },
          ],
          example: 'Change in Y for one-unit change in X',
        },
        {
          name: 'Simple Linear Regression (Intercept)',
          formula: 'a = ȳ - b × x̄',
          variables: [
            { symbol: 'a', meaning: 'Y-intercept of regression line' },
          ],
          example: 'Value of Y when X = 0',
        },
        {
          name: 'Regression Equation',
          formula: 'ŷ = a + bx',
          variables: [
            { symbol: 'ŷ', meaning: 'Predicted value of Y' },
            { symbol: 'a', meaning: 'Intercept' },
            { symbol: 'b', meaning: 'Slope' },
          ],
          example: 'If ŷ = 10 + 2x, then when x=5, predicted ŷ = 10 + 2(5) = 20',
        },
      ],
    },
    {
      category: 'Inferential Statistics',
      formulas: [
        {
          name: 'Standard Error of the Mean',
          formula: 'SE = s / √n',
          variables: [
            { symbol: 'SE', meaning: 'Standard error (variability of sample means)' },
            { symbol: 's', meaning: 'Sample standard deviation' },
            { symbol: 'n', meaning: 'Sample size' },
          ],
          example: 'SD = 15, n = 25: SE = 15 / √25 = 15/5 = 3',
        },
        {
          name: 'Confidence Interval for Mean',
          formula: 'CI = x̄ ± (z* × SE)  or  x̄ ± (t* × SE)',
          variables: [
            { symbol: 'z*', meaning: 'Critical value from Z-distribution (large n)' },
            { symbol: 't*', meaning: 'Critical value from t-distribution (small n)' },
            { symbol: 'Common z*', meaning: '1.96 for 95% confidence, 2.58 for 99%' },
          ],
          example: 'Mean = 50, SE = 2, 95% CI: 50 ± (1.96 × 2) = [46.08, 53.92]',
        },
        {
          name: 'Z-Score (Standardization)',
          formula: 'z = (x - μ) / σ',
          variables: [
            { symbol: 'z', meaning: 'Number of standard deviations from mean' },
          ],
          example: 'Value 85, mean 75, SD 10: z = (85-75)/10 = 1.0',
        },
        {
          name: 'T-Statistic',
          formula: 't = (x̄ - μ₀) / (s / √n)',
          variables: [
            { symbol: 't', meaning: 'Test statistic for hypothesis testing' },
            { symbol: 'μ₀', meaning: 'Hypothesized population mean' },
          ],
          example: 'Used when population SD unknown and/or small sample',
        },
        {
          name: 'Chi-Square Statistic',
          formula: 'χ² = Σ[(O - E)² / E]',
          variables: [
            { symbol: 'O', meaning: 'Observed frequency' },
            { symbol: 'E', meaning: 'Expected frequency' },
            { symbol: 'χ²', meaning: 'Goodness-of-fit or independence test statistic' },
          ],
          example: 'Tests if observed data fits expected distribution',
        },
      ],
    },
    {
      category: 'Sample Size & Margin of Error',
      formulas: [
        {
          name: 'Margin of Error',
          formula: 'ME = z* × √[p(1-p) / n]',
          variables: [
            { symbol: 'ME', meaning: 'Margin of error for proportion' },
            { symbol: 'z*', meaning: 'Critical z-value (1.96 for 95%)' },
            { symbol: 'p', meaning: 'Sample proportion' },
            { symbol: 'n', meaning: 'Sample size' },
          ],
          example: 'p = 0.5, n = 400, 95% CI: ME = 1.96 × √[0.5×0.5/400] = 0.049 or 4.9%',
        },
        {
          name: 'Required Sample Size (Proportion)',
          formula: 'n = (z*)² × p(1-p) / ME²',
          variables: [
            { symbol: 'n', meaning: 'Required sample size' },
            { symbol: 'Use p=0.5', meaning: 'If no estimate available (most conservative)' },
          ],
          example: 'Want ME = 3% at 95%: n = (1.96)² × 0.25 / (0.03)² = 1,068',
        },
        {
          name: 'Required Sample Size (Mean)',
          formula: 'n = (z* × σ / ME)²',
          variables: [
            { symbol: 'σ', meaning: 'Population standard deviation (or estimate)' },
          ],
          example: 'SD = 20, want ME = 5 at 95%: n = (1.96 × 20 / 5)² = 61.5 ≈ 62',
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
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
              <PieChart size={20} />
              <span className="font-semibold">Statistics Reference</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Statistics Formulas
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive statistical formulas for data analysis, probability, and inferential statistics
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-teal-600">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.formulas.map((formula, formIndex) => (
                    <div key={formIndex} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {formula.name}
                      </h3>
                      
                      {/* Formula Display */}
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg mb-6">
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
                              <span className="font-mono font-bold text-teal-600 min-w-fit">
                                {variable.symbol} =
                              </span>
                              <span className="text-gray-700">{variable.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Statistics Best Practices</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Population vs Sample:</strong> Use N for population formulas, n-1 for sample variance/SD
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Choose the right test:</strong> t-test for small samples or unknown σ; z-test for large samples
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Correlation ≠ Causation:</strong> Strong correlation doesn't prove one variable causes the other
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">•</span>
                <p className="text-gray-700">
                  <strong>Check assumptions:</strong> Many tests assume normality, independence, and equal variance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
