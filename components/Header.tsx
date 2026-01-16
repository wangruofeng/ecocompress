import React, { useState, useRef, useEffect } from 'react';
import { ImageIconRef, GlobeIcon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales/translations';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'zh-hk', label: '繁體中文', flag: '🇭🇰' },
  ];

  return (
    <header className="bg-white border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <ImageIconRef className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">{t('appTitle')}</h1>
              <p className="text-xs text-emerald-600 font-medium hidden sm:block">{t('appSubtitle')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="https://github.com/wangruofeng/img_compress/blob/main/README.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors"
              >
                {t('documentation')}
              </a>
              <a 
                href="https://github.com/wangruofeng/img_compress/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors"
              >
                {t('github')}
              </a>
            </div>

            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                <GlobeIcon className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">
                  {languages.find(l => l.code === language)?.label}
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
                        language === lang.code 
                          ? 'bg-emerald-50 text-emerald-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
