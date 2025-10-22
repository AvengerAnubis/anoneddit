import type { Metadata } from "next";
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {CssBaseline} from "@mui/material";
import Box from "@mui/material/Box";
import {main} from "@popperjs/core";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {default: "Главная", template: "Anoneddit | %s"},
  description: "Anonymous Post Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en" className={roboto.variable}>
        <body>
          <AppRouterCacheProvider>
            <CssBaseline />
            <Box component={main} sx={{minHeight: "100vh", display: "flex", justifyContent: "center", alignContent: "center", maxWidth: "100vm"}}>
              {children}
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
