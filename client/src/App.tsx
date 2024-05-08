// @ts-nocheck
import { useMemo, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "reactflow/dist/style.css";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { ColorContext } from "./ColorContext";
import { lightTheme } from "./themes/light";
import posthog from "posthog-js";
import { AppConfig } from "./constants";
import { ToastContainer } from "react-toastify";
import {
  ThemeProvider as MTThemeProvider,
  TooltipStylesType,
} from "@material-tailwind/react";

const App = ({ children }: any) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = 'light';

  const theme = useMemo(
    () => createTheme(lightTheme),
    [mode]
  );

  const MTTheme: any = {
    tooltip: {
      styles: {
        base: {
          bg: "bg-white",
          color: "text-black",
        },
      },
    },
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      {children}
    </>
  );
};

export default App;
