import type { Metadata } from "next";
import React from "react";
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component="section" sx={{ display: "flex", flexDirection: "column", width: "max-content"}}>
      <Typography variant="h2" component="h1">Anoneddit</Typography>
      <Typography variant="h3" component="h2">Описание/Лозунг</Typography>
      {children}
    </Box>
  );
}