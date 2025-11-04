
import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'   
 import { FaBars, FaUser, FaBookmark, FaShoppingCart, FaSearch } from "react-icons/fa";
export default function Navbar() {
  function closeNav() {
    const nav = document.querySelector(".navbar-collapse");
    if (nav) {
      nav.classList.remove("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navColor">
      <div className="container-fluid">
        <button
          className="navbar-toggler order-1 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="text-white" />
        </button>
        <div className="collapse navbar-collapse navbar-collapse-desktop menuCollapse order-2 " id="navbarSupportedContent" >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white lineLink " to="">الرئيسية</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white lineLink" to="">المراجعات</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white lineLink" to="">المذكرات</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white lineLink" to="">المنتجات الجديدة</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white linein " to="" >جميع الكتب</NavLink>
            </li>
          </ul>
          <form className="d-flex mx-3 my-2 my-lg-0" role="search">
            <div className="input-group">
              <input
                type="search"
                className="form-control "
                placeholder="بحث باسم الكتاب ,المؤلف,العنوان"
                aria-label="Search"
              />
                <button className="btn iconsearch" type="button">
                <FaSearch />
              </button>
            </div>
          </form>
          <ul className="navbar-nav d-flex flex-row align-items-center gap-5 ms-lg-3">
            <li className="nav-item">
              <Link to='' className="text-white  "><FaShoppingCart className='shopping'/></Link>
            </li>
            <li className="nav-item">
              <Link to='' className="text-white"><FaBookmark className='bookmark' /></Link>
            </li>
            <li className="nav-item">
              <Link to='' className="text-white"><FaUser  className='user'/></Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">🇪🇬 العربية</Link></li>
                <li><Link className="dropdown-item" to="#">🇬🇧 English</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand order-3 ms-lg-auto" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
}




// import React, { useState, useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
// import { RiGlobalLine } from "react-icons/ri";
// import "./Navbar.css";

// function Navbar() {
//   const [open, setOpen] = useState(false); // التحكم في collapse على الموبايل
//   const [query, setQuery] = useState("");
//   const { count } = useContext(CartContext);
//   const navigate = useNavigate();

//   function submitSearch(e) {
//     e.preventDefault();
//     // هنا ممكن تودي لصفحة نتائج البحث
//     if (query.trim()) {
//       navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//       setQuery("");
//       setOpen(false);
//     }
//   }

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container">
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img src="/src/assets/img/logo.png" alt="logo" className="logo" />
//         </Link>

//         <div className="nav-right d-flex align-items-center gap-2 d-lg-none">
//           {/* أيقونات مختصرة للموبايل */}
//           <button className="btn icon-btn" aria-label="language">
//             <RiGlobalLine />
//           </button>
//         </div>

//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setOpen(!open)}
//           aria-expanded={open}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
//           {/* القوائم الرئيسية على اليمين (RTL) */}
//           <ul className="navbar-nav ms-auto align-items-lg-center">
//             <li className="nav-item">
//               <NavLink end className="nav-link" to="/">الرئيسية</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/books">جميع الكتب</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/new">المنتجات الجديدة</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/notes">المذكرات</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/reviews">المراجعات</NavLink>
//             </li>
//           </ul>

//           {/* صندوق البحث في الوسط */}
//           <form className="d-flex mx-lg-3 my-2 my-lg-0 search-form" onSubmit={submitSearch}>
//             <input
//               type="text"
//               className="form-control search-input"
//               placeholder="بحث باسم الكتاب، المؤلف، العنوان..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button className="btn btn-search" type="submit" aria-label="search">🔍</button>
//           </form>

//           {/* أيقونات المستخدم، المفضلة، السلة على اليسار (لـ RTL يظهروا يمين) */}
//           <div className="d-flex align-items-center ms-lg-3 icons-group">
//             <button className="btn icon-btn" aria-label="change-language">
//               EN ▾
//             </button>

//             <Link to="/profile" className="btn icon-btn" aria-label="profile">
//               <FiUser />
//             </Link>

//             <Link to="/wishlist" className="btn icon-btn" aria-label="wishlist">
//               <FiHeart />
//             </Link>

//             <Link to="/cart" className="btn icon-btn position-relative" aria-label="cart">
//               <FiShoppingCart />
//               {count > 0 && <span className="cart-badge">{count}</span>}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;













































