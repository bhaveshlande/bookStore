// // useDarkMode.js
// import { useState, useEffect } from "react";

// function useDarkMode() {
//   const [darkMode, setDarkMode] = useState(
//     JSON.parse(localStorage.getItem("darkMode")) || false
//   );

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   return [darkMode, setDarkMode];
// }

// export default useDarkMode;
