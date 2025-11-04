import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube ,FaInstagram , FaChevronLeft,FaEnvelope,FaMapMarkerAlt ,FaPhoneVolume} from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <footer className="site-footer  text-light mt-5">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo + signup */}
          <div className="col-md-3">
            <img src="/src/assets/img/logo.png" alt="logo" className="footer-logo mb-3" />
         
            <p className="small mb-5">انضم إلينا واستكشف كنوز المعرفة من خلال كتبنا المختارة بعناية.</p>

            <div className="newsletter mt-3">
              <label className="form-label small">آخر الأخبار</label>
              <div className="d-flex w-1000 h-300">
                <input type="email" className="form-control form-control-sm" placeholder="ادخل بريدك الالكتروني" />
                <button className="btn btn-orange btn-sm ms-2">سجل الآن</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="footer-title">الموقع</h6>
             <img src="/src/assets/img/smallicon.png" alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <li><FaChevronLeft  className="icon"/> الرئيسية</li>
              <li><FaChevronLeft className="icon"/> جميع الكتب</li>
              <li><FaChevronLeft className="icon"/> منتجات جديدة</li>
              <li><FaChevronLeft className="icon"/> المذكرات</li>
              <li><FaChevronLeft className="icon"/> المراجعات</li>
            </ul>
          </div>
          {/* سياسة الموقع */}
          <div className="col-md-3">
            <h6 className="footer-title">سياسة الموقع</h6>
                <img src="/src/assets/img/smallicon.png" alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <li><FaChevronLeft className="icon"/> الشروط والأحكام</li>
              <li><FaChevronLeft className="icon"/> سياسة الشحن</li>
              <li><FaChevronLeft className="icon"/> الخصوصية</li>
            </ul>
          </div>
          {/* تواصل معنا */}
          <div className="col-md-3">
            <h6 className="footer-title">تواصل معنا</h6>
                <img src="/src/assets/img/smallicon.png" alt="payments" className="img-fluid"/>
            <ul className="list-unstyled">
              <li><FaMapMarkerAlt className="icon "/>44 Danvors, NY City, USA</li>
              <li><FaEnvelope className="icon"/>info@example.com </li>
              <li><FaPhoneVolume className="icon"/>+1 585-656-658 </li>
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
              <img src="/src/assets/img/payment.png" alt="payments" className="img-fluid"/>
            </div>
  </div>
      </div> 
       <div className="text-center small py-3 fr"  >© {new Date().getFullYear()} جميع الحقوق محفوظة</div>
    </footer>
  );
}

export default Footer;