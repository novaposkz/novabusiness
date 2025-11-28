'use client';

import { useState, useEffect } from 'react';
// Simple close button instead of heroicons

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TabType = 'login' | 'signup' | 'login-email' | 'signup-email';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('login');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Handle click outside modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderSocialButtons = () => (
    <div className="space-y-3 mb-6">
      <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        {activeTab === 'login' ? 'Войти через Google' : 'Зарегистрироваться через Google'}
      </button>
      <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        {activeTab === 'login' ? 'Войти через Apple' : 'Зарегистрироваться через Apple'}
      </button>
      <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-800 hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 11.5H0V0H11.5V11.5Z" fill="#F25022"/>
          <path d="M23 11.5H11.5V0H23V11.5Z" fill="#7FBA00"/>
          <path d="M11.5 23H0V11.5H11.5V23Z" fill="#00A4EF"/>
          <path d="M23 23H11.5V11.5H23V23Z" fill="#FFB900"/>
        </svg>
        {activeTab === 'login' ? 'Войти через Microsoft' : 'Зарегистрироваться через Microsoft'}
      </button>
      
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">или</span>
        </div>
      </div>
      
      <button 
        type="button"
        onClick={() => setActiveTab(activeTab === 'login' ? 'login-email' : 'signup-email')}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-teal-500 rounded-lg bg-white text-teal-600 hover:bg-teal-50 transition-colors font-medium"
      >
        {activeTab === 'login' ? 'Войти с помощью email' : 'Зарегистрироваться с email'}
      </button>
    </div>
  );

  const renderEmailForm = () => (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          placeholder="••••••••"
          required
          minLength={6}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
      >
        {activeTab === 'login-email' ? 'Войти' : 'Зарегистрироваться'}
      </button>
      <button
        type="button"
        onClick={() => setActiveTab(activeTab === 'login-email' ? 'login' : 'signup')}
        className="w-full text-center text-sm text-gray-500 hover:text-gray-700 mt-2"
      >
        ← Назад к другим способам входа
      </button>
    </form>
  );

  const renderForm = () => (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
          placeholder="••••••••"
          required
        />
      </div>
      {activeTab === 'signup' && (
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
            Подтвердите пароль
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            placeholder="••••••••"
            required
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        {activeTab === 'login' ? (
          <div className="text-sm">
            <span className="text-gray-600">Нет аккаунта? </span>
            <button 
              type="button" 
              className="text-teal-600 hover:text-teal-700 font-medium"
              onClick={() => setActiveTab('signup')}
            >
              Зарегистрируйтесь
            </button>
          </div>
        ) : (
          <div className="text-sm">
            <span className="text-gray-600">Уже есть аккаунт? </span>
            <button 
              type="button" 
              className="text-teal-600 hover:text-teal-700 font-medium"
              onClick={() => setActiveTab('login')}
            >
              Войдите
            </button>
          </div>
        )}
        {activeTab === 'login' && (
          <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
            Забыли пароль?
          </a>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
      >
        {activeTab === 'login' ? 'Войти' : 'Зарегистрироваться'}
      </button>
    </form>
  );

  // Mobile bottom sheet
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-hidden"
        onClick={handleBackdropClick}
      >
        <div className="absolute inset-0 bg-black/50 transition-opacity" />
        <div className="fixed inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-out">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {activeTab === 'login' ? 'Вход' : 'Регистрация'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Закрыть"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="p-6">
            {renderSocialButtons()}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">или</span>
              </div>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
    );
  }

  // Desktop modal
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50 transition-opacity" />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
            aria-label="Закрыть"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        
        <div className="px-8 py-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-3 px-1 text-center font-medium text-sm border-b-2 ${
                activeTab === 'login' 
                  ? 'border-teal-500 text-teal-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Вход
            </button>
            <button
              className={`flex-1 py-3 px-1 text-center font-medium text-sm border-b-2 ${
                activeTab === 'signup' 
                  ? 'border-teal-500 text-teal-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Регистрация
            </button>
          </div>
          
          <div className="mt-6">
            {renderSocialButtons()}
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">или</span>
              </div>
            </div>
            
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
}
