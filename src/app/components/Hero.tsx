import { ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Section = 'home' | 'about' | 'finance' | 'economics' | 'topics' | 'resources';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')} <span className="text-green-600">FinanceCon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.cta.about')}
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                {t('hero.cta.resources')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors cursor-pointer" onClick={() => onNavigate('finance')}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.finance.title')}</h3>
              <p className="text-gray-600">
                {t('features.finance.desc')}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors cursor-pointer" onClick={() => onNavigate('economics')}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.economics.title')}</h3>
              <p className="text-gray-600">
                {t('features.economics.desc')}
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-green-50 transition-colors cursor-pointer" onClick={() => onNavigate('topics')}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('features.topics.title')}</h3>
              <p className="text-gray-600">
                {t('features.topics.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.ready')}
          </h2>
          <p className="text-xl mb-8 text-green-50">
            {t('cta.explore')}
          </p>
          <button
            onClick={() => onNavigate('resources')}
            className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2"
          >
            {t('cta.access')}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}