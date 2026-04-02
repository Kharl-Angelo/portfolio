import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex items-center justify-center w-10 h-10 rounded-md",
        "text-muted-foreground hover:text-foreground hover:bg-accent/50",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "absolute w-5 h-5 transition-all duration-300",
          theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        )}
      />
      <Moon
        className={cn(
          "absolute w-5 h-5 transition-all duration-300",
          theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        )}
      />
    </button>
  );
}
