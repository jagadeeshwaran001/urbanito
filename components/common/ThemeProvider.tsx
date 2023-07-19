"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider, createTheme } from "@nextui-org/react";

export function ThemeProvider({ children}: ThemeProviderProps) {
    const lightTheme = createTheme({
        type: 'light',
        theme: {
          colors: { 
            // primary: '#4a51de',
            // secondary: '',
            // trinary: '',
            // quadrary: ''
            // gradient: 'linear-gradient(to right top, #c931b8, #a728a7, #861f96, #671783, #490e70, #3a1a72, #292272, #152771, #013c83, #005092, #00649f, #1578ab)'
         }, 
        }
      })
    
      const darkTheme = createTheme({
        type: 'dark',
        theme: {
          colors: { 
            // primary: '$green200',
            // secondary: '',
            // trinary: '',
            // quadrary: ''
            // gradient: 'linear-gradient(to right top, #c931b8, #a728a7, #861f96, #671783, #490e70, #3a1a72, #292272, #152771, #013c83, #005092, #00649f, #1578ab)'
        }
        }
      })
    return (
        <NextThemesProvider defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </NextThemesProvider>
    )
}
