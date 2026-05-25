"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.es;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, defaultLanguage }: { children: ReactNode; defaultLanguage?: Language }) => {
  const [languageState, setLanguageState] = useState<Language>('es');

  const language = defaultLanguage || languageState;

  useEffect(() => {
    if (!defaultLanguage) {
      const savedLang = localStorage.getItem('preferred-lang') as Language;
      if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'fr')) {
        setTimeout(() => setLanguageState(savedLang), 0);
      }
    }
  }, [defaultLanguage]);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
