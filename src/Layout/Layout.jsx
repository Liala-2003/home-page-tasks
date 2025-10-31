
// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Navbar/Navbar'

// export default function Layout() {
//   return (
//     <div>
//     <Navbar/>
//       <Outlet/>

//     </div>
//   )
// }

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
