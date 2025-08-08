import { useState, useEffect } from 'react';
import { useThemeContext } from './ThemeProvider';

interface LandingPageProps {
  onEnterApp: () => void;
}

export const LandingPage = ({ onEnterApp }: LandingPageProps) => {
  const { isDark, toggleTheme } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: "✨",
      title: "Beautiful Interface",
      description: "Clean, modern design that adapts to your preferences"
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      description: "Easy on the eyes with seamless theme switching"
    },
    {
      icon: "💾",
      title: "Auto Save",
      description: "Your tasks are automatically saved locally"
    },
    {
      icon: "⚡",
      title: "Fast & Responsive",
      description: "Lightning-fast performance on all devices"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={toggleTheme}
          className="group relative w-14 h-8 bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:scale-105"
        >
          <div className={`w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-sm transform transition-transform duration-300 ${isDark ? 'translate-x-6' : ''}`}>
            <svg className={`w-4 h-4 text-yellow-500 absolute top-1 left-1 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <svg className={`w-4 h-4 text-gray-700 absolute top-1 left-1 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </button>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Logo Animation */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <svg className="w-16 h-16 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* App Name with Typing Animation */}
          <div className={`mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent mb-4">
              TaskFlow
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="h-1 w-6 bg-gradient-to-r from-pink-500 to-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Tagline */}
          <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Transform your productivity with our beautiful, intuitive task management experience.
              <span className="block mt-2 text-lg text-primary-600 dark:text-primary-400 font-medium">
                Stay organized. Get things done. Feel accomplished.
              </span>
            </p>
          </div>

          {/* Rotating Features */}
          <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto">
              <div className="text-4xl mb-4 animate-bounce">{features[currentFeature].icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {features[currentFeature].description}
              </p>
              
              {/* Feature indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentFeature 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={onEnterApp}
              className="group relative px-12 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start Your Journey</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Button animation overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              No signup required • Works offline • Free forever
            </p>
          </div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-br from-primary-100/10 to-purple-100/10 dark:from-primary-900/10 dark:to-purple-900/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};