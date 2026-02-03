import { Mail, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FC</span>
              </div>
              <span className="text-xl font-semibold">FinanceCon</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Heart size={16} className="text-red-500" />
              <span className="text-sm">{t('footer.made')}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.finance')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.economics')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.topics')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t('nav.resources')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:financeconn@gmail.com
" className="hover:text-green-400 transition-colors">
                  financeconn@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Globe size={18} />
                <a href="#" className="hover:text-green-400 transition-colors">
                  www.financecon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} FinanceCon. {t('footer.rights')}</p>
          <p className="mt-2">
            {t('footer.mission')}
          </p>
        </div>
      </div>
    </footer>
  );
}