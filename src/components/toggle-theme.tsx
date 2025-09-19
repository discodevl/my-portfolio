"use client"
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function handleToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme)
  }

  return (
    <Button onClick={handleToggle} variant="ghost">
      {theme === "dark" ? "🌞" : "🌙"}
    </Button>
  );
}

export default ToggleTheme