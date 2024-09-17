"use client";

import { arTheme, enTheme, faTheme } from "@/configs/themeConfig";
import { ChildrenLangProps } from "@/types";
import { ThemeProvider } from "@mui/material";
import React from "react";

const CustomThemeProvider = ({ lang, children }: ChildrenLangProps) => {
  const themes: Record<any, any> = {
    en: enTheme,
    ar: arTheme,
    fa: faTheme,
  };
  return <ThemeProvider theme={themes[lang || "en"]}> {children} </ThemeProvider>;
};

export default CustomThemeProvider;
