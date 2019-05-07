import { MuiThemeProvider } from "@material-ui/core";
import * as React from "react";
import { IntlProvider } from "react-intl";
import { AppRouter } from "./components/routers/AppRouter";
import { theme } from "./components/util/Theme";
import baseLocale from "./i18n/en";

const App: React.FunctionComponent = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <IntlProvider locale="en" messages={baseLocale}>
          <AppRouter />
        </IntlProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
