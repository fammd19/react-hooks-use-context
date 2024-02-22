import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider>
      <main className={theme}>
        <UserProvider>
          <Header theme={theme} setTheme={setTheme}/>
          <Profile theme={theme} />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
