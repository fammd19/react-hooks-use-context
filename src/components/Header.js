
import React, { useContext } from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";
import { UserContext } from "../context/user";

function Header() {
  const { user, setUser } = useContext(UserContext);
  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;

// import React from "react";
// import ThemedButton from "./ThemedButton";
// import DarkModeToggle from "./DarkModeToggle";
// import defaultUser from "../data";

// function Header({ theme, setTheme, user, setUser }) {
//   function handleLogin() {
//     if (user) {
//       setUser(null);
//     } else {
//       setUser(defaultUser);
//     }
//   }

//   return (
//     <header>
//       <h1>React Context</h1>
//       <nav>
//         <ThemedButton onClick={handleLogin} theme={theme}>
//           {user ? "Logout" : "Login"}
//         </ThemedButton>
//         <DarkModeToggle theme={theme} setTheme={setTheme} />
//       </nav>
//     </header>
//   );
// }

// export default Header;
