import { useState, useEffect } from "react";
import {
  LanguageProvider,
  useLanguage,
} from "./contexts/LanguageContext";
import { trackPageView } from "./utils/analytics";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Finance } from "./components/Finance";
import { Economics } from "./components/Economics";
import { RelatedTopics } from "./components/RelatedTopics";
import { Resources } from "./components/Resources";
import { Footer } from "./components/Footer";
import { AdminAnalytics } from "./components/AdminAnalytics";

// Import detail pages
import { PersonalFinancePage } from "./components/finance/PersonalFinancePage";
import { InvestmentsPage } from "./components/finance/InvestmentsPage";
import { FinancialAnalysisPage } from "./components/finance/FinancialAnalysisPage";
import { CreditFinancingPage } from "./components/finance/CreditFinancingPage";
import { FinancialPlanningPage } from "./components/finance/FinancialPlanningPage";
import { AssetProtectionPage } from "./components/finance/AssetProtectionPage";

// Import economics pages
import { MicroeconomicsPage } from "./components/economics/MicroeconomicsPage";
import { MacroeconomicsPage } from "./components/economics/MacroeconomicsPage";
import { BusinessEconomicsPage } from "./components/economics/BusinessEconomicsPage";
import { LaborEconomicsPage } from "./components/economics/LaborEconomicsPage";
import { InternationalEconomicsPage } from "./components/economics/InternationalEconomicsPage";
import { DevelopmentEconomicsPage } from "./components/economics/DevelopmentEconomicsPage";

// Import calculator pages
import { CalculatorsPage } from "./components/calculators/CalculatorsPage";
import { CompoundInterestCalculator } from "./components/calculators/CompoundInterestCalculator";
import { ROICalculator } from "./components/calculators/ROICalculator";
import { RetirementCalculator } from "./components/calculators/RetirementCalculator";
import { DebtCalculator } from "./components/calculators/DebtCalculator";

// Import formula pages
import { FinanceFormulas } from "./components/formulas/FinanceFormulas";
import { EconomicsFormulas } from "./components/formulas/EconomicsFormulas";
import { AccountingFormulas } from "./components/formulas/AccountingFormulas";
import { BusinessFormulas } from "./components/formulas/BusinessFormulas";
import { MathematicsFormulas } from "./components/formulas/MathematicsFormulas";
import { StatisticsFormulas } from "./components/formulas/StatisticsFormulas";

// Import resource pages
import { FinanceResourcesPage } from "./components/resources/FinanceResourcesPage";
import { EconomicsResourcesPage } from "./components/resources/EconomicsResourcesPage";
import { MathematicsResourcesPage } from "./components/resources/MathematicsResourcesPage";
import { StatisticsResourcesPage } from "./components/resources/StatisticsResourcesPage";
import { BusinessResourcesPage } from "./components/resources/BusinessResourcesPage";
import { AccountingResourcesPage } from "./components/resources/AccountingResourcesPage";
import { TemplatesResourcesPage } from "./components/resources/TemplatesResourcesPage";
import { SupplementaryResourcesPage } from "./components/resources/SupplementaryResourcesPage";

type Section =
  | "home"
  | "about"
  | "finance"
  | "economics"
  | "topics"
  | "resources"
  | "finance-personal"
  | "finance-investments"
  | "finance-analysis"
  | "finance-credit"
  | "finance-planning"
  | "finance-protection"
  | "economics-micro"
  | "economics-macro"
  | "economics-business"
  | "economics-labor"
  | "economics-international"
  | "economics-development"
  | "calculators"
  | "calculator-compound"
  | "calculator-roi"
  | "calculator-retirement"
  | "calculator-debt"
  | "finance-formulas"
  | "economics-formulas"
  | "accounting-formulas"
  | "business-formulas"
  | "mathematics-formulas"
  | "statistics-formulas"
  | "finance-resources"
  | "economics-resources"
  | "mathematics-resources"
  | "statistics-resources"
  | "business-resources"
  | "accounting-resources"
  | "templates-resources"
  | "supplementary-resources";

function AppContent() {
  const [activeSection, setActiveSection] =
    useState<Section>("home");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Track page view whenever section changes
    trackPageView(activeSection, language);
  }, [activeSection, language]);

  useEffect(() => {
    // Secret key combination to open analytics: Ctrl + Shift + A
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setShowAnalytics(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () =>
      window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {activeSection === "home" && (
        <Hero onNavigate={handleNavigate} />
      )}
      {activeSection === "about" && <About />}
      {activeSection === "finance" && (
        <Finance onNavigate={handleNavigate} />
      )}
      {activeSection === "economics" && (
        <Economics onNavigate={handleNavigate} />
      )}
      {activeSection === "topics" && (
        <RelatedTopics onNavigate={handleNavigate} />
      )}
      {activeSection === "resources" && (
        <Resources onNavigate={handleNavigate} />
      )}

      {/* Finance Detail Pages */}
      {activeSection === "finance-personal" && (
        <PersonalFinancePage onNavigate={handleNavigate} />
      )}
      {activeSection === "finance-investments" && (
        <InvestmentsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "finance-analysis" && (
        <FinancialAnalysisPage onNavigate={handleNavigate} />
      )}
      {activeSection === "finance-credit" && (
        <CreditFinancingPage onNavigate={handleNavigate} />
      )}
      {activeSection === "finance-planning" && (
        <FinancialPlanningPage onNavigate={handleNavigate} />
      )}
      {activeSection === "finance-protection" && (
        <AssetProtectionPage onNavigate={handleNavigate} />
      )}

      {/* Economics Detail Pages */}
      {activeSection === "economics-micro" && (
        <MicroeconomicsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-macro" && (
        <MacroeconomicsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-business" && (
        <BusinessEconomicsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-labor" && (
        <LaborEconomicsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-international" && (
        <InternationalEconomicsPage
          onNavigate={handleNavigate}
        />
      )}
      {activeSection === "economics-development" && (
        <DevelopmentEconomicsPage onNavigate={handleNavigate} />
      )}

      {/* Calculator Pages */}
      {activeSection === "calculators" && (
        <CalculatorsPage onNavigate={handleNavigate} />
      )}
      {activeSection === "calculator-compound" && (
        <CompoundInterestCalculator
          onNavigate={handleNavigate}
        />
      )}
      {activeSection === "calculator-roi" && (
        <ROICalculator onNavigate={handleNavigate} />
      )}
      {activeSection === "calculator-retirement" && (
        <RetirementCalculator onNavigate={handleNavigate} />
      )}
      {activeSection === "calculator-debt" && (
        <DebtCalculator onNavigate={handleNavigate} />
      )}

      {/* Formula Pages */}
      {activeSection === "finance-formulas" && (
        <FinanceFormulas onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-formulas" && (
        <EconomicsFormulas onNavigate={handleNavigate} />
      )}
      {activeSection === "accounting-formulas" && (
        <AccountingFormulas onNavigate={handleNavigate} />
      )}
      {activeSection === "business-formulas" && (
        <BusinessFormulas onNavigate={handleNavigate} />
      )}
      {activeSection === "mathematics-formulas" && (
        <MathematicsFormulas onNavigate={handleNavigate} />
      )}
      {activeSection === "statistics-formulas" && (
        <StatisticsFormulas onNavigate={handleNavigate} />
      )}

      {/* Resource Pages */}
      {activeSection === "finance-resources" && (
        <FinanceResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "economics-resources" && (
        <EconomicsResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "mathematics-resources" && (
        <MathematicsResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "statistics-resources" && (
        <StatisticsResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "business-resources" && (
        <BusinessResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "accounting-resources" && (
        <AccountingResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "templates-resources" && (
        <TemplatesResourcesPage onNavigate={handleNavigate} />
      )}
      {activeSection === "supplementary-resources" && (
        <SupplementaryResourcesPage
          onNavigate={handleNavigate}
        />
      )}

      <Footer />

      {showAnalytics && (
        <AdminAnalytics
          onClose={() => setShowAnalytics(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}