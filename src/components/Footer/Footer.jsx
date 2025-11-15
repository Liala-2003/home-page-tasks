import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube ,FaInstagram , FaChevronLeft,FaEnvelope,FaMapMarkerAlt ,FaPhoneVolume} from "react-icons/fa";
import logo from '../../assets/img/logo.png'
import payments from '../../assets/img/smallicon.png'
import payment from '../../assets/img/payment.png'
import "./Footer.css";
function Footer() {
  return (
    <footer className="site-footer  text-light mt-5">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo + signup */}
          <div className="col-md-3">
            <img src={logo} alt="logo" className="footer-logo mb-3" />
         
            <p className="small mb-5">انضم إلينا واستكشف كنوز المعرفة من خلال كتبنا المختارة بعناية.</p>

            <div className="newsletter mt-5 ">
              <label className="form-label small mt-5">آخر الأخبار</label>
              <div className="d-flex w-1000 h-300 mar ">
                <input type="email" className="form-control form-control " placeholder="ادخل بريدك الالكتروني" />
                <button className="btn btn-orange btn-sm ms-2 ">سجل الآن</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="footer-title">الموقع</h6>
             <img src={payments} alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <a href="#"><FaChevronLeft  className="icon"/> الرئيسية</a>
              <a href="#"><FaChevronLeft className="icon"/> جميع الكتب</a>
              <a href="#"><FaChevronLeft className="icon"/> منتجات جديدة</a>
              <a href="#"><FaChevronLeft className="icon"/> المذكرات</a>
              <a href="#"><FaChevronLeft className="icon"/> المراجعات</a>
            </ul>
          </div>
          {/* سياسة الموقع */}
          <div className="col-md-3">
            <h6 className="footer-title">سياسة الموقع</h6>
                <img src={payments} alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <a href="#"><FaChevronLeft className="icon"/> الشروط والأحكام</a>
              <a href="#"><FaChevronLeft className="icon"/> سياسة الشحن</a>
              <a href="#"><FaChevronLeft className="icon"/> الخصوصية</a>
            </ul>
          </div>
          {/* تواصل معنا */}
          <div className="col-md-3">
            <h6 className="footer-title">تواصل معنا</h6>
                <img src={payments} alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <a href="#">< FaMapMarkerAlt className="icon "/>     44 Danvors, NY City, USA</a>
              <a href="#">< FaEnvelope className="icon"    />info@example.com </a>
              <a href="#">< FaPhoneVolume className="icon"/>     +1 585-656-658 </a>
            </ul>
          </div>
             <hr className="mt-5" />
        </div>
  <div className="dv">
         <div className="socials mt-3">
              <button className="social-btn "><FaFacebookF /></button>
              <button className="social-btn"><FaTwitter /></button>
              <button className="social-btn"><FaYoutube /></button>
                <button className="social-btn"><FaInstagram /></button>
            </div>
            <div className="payments mt-3">
              <img src={payment} alt="payments" className="img-fluid"/>
            </div>
  </div>
      </div> 
       <div className="text-center small py-3 fr"  >  جميع الحقوق محفوظة {new Date().getFullYear()} ©</div>
    </footer>
  );
}

export default Footer;