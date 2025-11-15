import React from "react";
import "./prometSection.css";
import geology from '../../assets/img/geology.png'
import ground from '../../assets/img/ground.png'
function promet() {
  return (
    <section className="promet-section  my-5">
     <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-content">
          <h2 className="promo-title">
            مراجعات شاملة في مادة الجيولوجيا استعد للنجاح!
          </h2>
          <p className="promet-desc">
            "هل أنت مستعد لاجتياز امتحانات الجيولوجيا بثقة؟ نقدم لك سلسلة مراجعات شاملة تغطي جميع مواضيع 
            المادة بأسلوب مبسط ومركز. انضم إلينا لتطوير فهمك للجيولوجيا من الأساسيات إلى المواضيع المتقدمة،
             مع شرح معمق ورسوم توضيحية تساعدك على استيعاب المفاهيم بسرعة. لا تفوت الفرصة – استعد للنجاح معنا!"
          </p>
          <button className="btn btn-orangehome btn-lg">تصفح المراجعات</button>
        </div>

        <div className="col-lg-6 col-md-12 text-center ">
          <img
            src={geology}
            alt="geology books collection"
            className="promet-image img-fluid"
          />
          <img
            src={ground}
            alt="geology books collection"
            className="promet-image img-fluid"
          />
          
          
       
            <img
            src={geology}
            alt="geology books collection"
            className="promet-image img-fluid"
          />
        
            <img
            src={ground}
            alt="geology books collection"
            className="promet-image img-fluid"
          />
        </div>
      </div>
      </div>
    </section>
  );
}

export default promet;
