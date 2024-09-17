"use client";

import { appContext } from "@/contexts/appContext";
import { useMediaQuery, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FC, PropsWithChildren } from "react";

export interface AppProviderProps {
  userAgent: any;
}

const AppProvider: FC<PropsWithChildren<AppProviderProps>> = ({
  children,
  userAgent,
}) => {
  const theme = useTheme();
  const inMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <appContext.Provider
      value={{
        isMobile: userAgent.device.type === "mobile" || inMobileView,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </appContext.Provider>
  );
};

export default AppProvider;
