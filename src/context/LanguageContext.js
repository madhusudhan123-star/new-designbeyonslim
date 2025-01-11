import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'ENGLISH';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        // Update document direction
        document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    }, [language]);

    const toggleLanguage = () => {
        // Cycle through languages: ENGLISH -> HI -> AR -> ENGLISH
        if (language === 'ENGLISH') {
            setLanguage('HI');
        } else if (language === 'HI') {
            setLanguage('AR');
        } else {
            setLanguage('ENGLISH');
        }
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage, // Make sure setLanguage is included here
            toggleLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

function App() {
    const { language } = useLanguage();
    const dir = language === 'AR' ? 'rtl' : 'ltr';

    return (
        <LanguageProvider>
            <div dir={dir} className='overflow-x-hidden'>
                {/* ...existing code... */}
            </div>
        </LanguageProvider>
    );
}
