
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
// import React from "react";
// import Navbar from "../components/navbar/navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

// function Layout() {
//   return (
//     <div className="site-root d-flex flex-column min-vh-100">
//       <Navbar />
//       <main className="flex-grow-1">
//         {/* هنا Router Outlet هيتوضع (داخل App.jsx) */}
//           <Outlet />
//         <div id="page-content" className="container-fluid px-0">
//           {/* Router slotted content will render here */}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;


