
import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'   // ✅ تصحيح الاستيراد
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
          className="navbar-toggler order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="text-white" />
        </button>
        <div className="collapse navbar-collapse navbar-collapse-desktop order-2" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink onClick={closeNav} className="nav-link text-white lineLink" to="">الرئيسية</NavLink>
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


























