"use client";

import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext<{ theme: "dark" }>({ theme: "dark" });

/** BELLO 브랜드: 시스템/사용자 설정과 무관하게 항상 다크 모드 강제 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
