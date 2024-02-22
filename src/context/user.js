import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// import React from "react";

// //create the contect
// const UserContext = React.createContext();

// //create a provider componenet
// function UserProvider ({ children }) {
//     // the value prop of the provider will be our context data
//     const currentUser = {
//         name: "Duane",
//         interests: ["Coding", "Biking", "Words ending in 'ing'"],
//       };
//     // this value will be available to child components of this provider
//     return (
//         <UserContext.Provider value={currentUser}>{ children }</UserContext.Provider>
//     )
// }

// export { UserContext, UserProvider }
