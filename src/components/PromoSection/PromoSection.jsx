import React from "react";
import "./PromoSection.css";
import bookList from '../../assets/img/books-list.png'
function PromoSection() {
  return (
    <section className="promo-section container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-content">
          <h2 className="promo-title">
            استكشف أعماق الأرض مع مجموعتنا الجديدة من كتب الجيولوجيا!
          </h2>
          <p className="promo-desc">
            سواء كنت طالبًا يبحث عن شغف المعرفة، أو عاشقًا لاستكشاف الطبيعة، فإن مجموعتنا الجديدة من كتب الجيولوجيا
            مصممة خصيصًا لك! من أساسيات الصخور والمعادن إلى علوم البراكين والصفائح التكتونية، ستجد هنا
            كل ما تحتاجه لتغوص في أسرار كوكبنا المدهش.
          </p>
          <button className="btn btn-orangehome btn-lg">سجّل الآن</button>
        </div>

        <div className="col-lg-6 col-md-12 text-center lio">
          <img
            src={bookList}
            alt="geology books collection"
            className="promo-image img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
