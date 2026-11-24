import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  type LanguageCode,
  TRANSLATIONS,
  type TranslationContent,
} from './translations';

const STORAGE_KEY = 'hotel_silver_inn_language';

function isValidLanguage(value: string | null): value is LanguageCode {
  return value === 'en' || value === 'gu' || value === 'hi';
}

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isValidLanguage(saved)) {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage access errors
    }
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
