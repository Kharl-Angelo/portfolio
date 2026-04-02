import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <RouterProvider router={router} />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}