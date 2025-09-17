"use client"
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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