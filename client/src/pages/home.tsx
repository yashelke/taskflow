import { useState } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { TodoApp } from '../components/TodoApp';
import { LandingPage } from '../components/LandingPage';

export default function Home() {
  const [showApp, setShowApp] = useState(false);

  return (
    <ThemeProvider>
      {showApp ? (
        <TodoApp />
      ) : (
        <LandingPage onEnterApp={() => setShowApp(true)} />
      )}
    </ThemeProvider>
  );
}
