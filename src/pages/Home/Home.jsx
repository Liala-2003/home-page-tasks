import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import book from '../../assets/img/book item1.png'
import "./Home.css";
import NotesSlider from "../../components/Notes/notes";
import  PromoSection from "../../components/PromoSection/PromoSection"
import ReviewsSlider from "../../components/Reviews/reviews";
import NewProductsSlider from "../../components/newProducts/newProducts";
import Promet from "../../components/prometSection/prometSection"
import BooksSlider from "../../components/books/books";
function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
    <div className="home-hero">
      <div className="hero-overlay">
        <div className="container hero-content d-flex align-items-center">
           <div className="hero-image position-relative d-inline-blok  ">
            <img src={book} alt="book" className="img-fluid layer layer1" />
             <img src={book} alt="book" className="img-fluid layer layer2" /> 
            <img src={book} alt="book" className="img-fluid layer layer3" /> 
          </div>
          <div className="hero-text ">
            <p>
 بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية لفهم تكوين الأرض وتاريخها. تقدم هذه 
الكتب معلومات معمقة حول الصخور،
 المعادن، البراكين، الزلازل، وحركات الصفائح التكتونية،
  مما يساعد القارئ على فهم البيئات الطبيعية والظواهر الجيولوجية. 
  من خلال توفير كتب الجيولوجيا، يمكن للقراء الاطلاع على 
 أحدث الدراسات والنظريات المتعلقة بعلم الأرض،
  مما يعزز من وعيهم البيئي ويسهمهم في المحافظة على كوكبنا.</p>
           <button className="btn btn-orangehome btn-lg" onClick={() => addToCart()}>سجل الآن</button>
          </div>
          
        </div>
      </div>
      
    </div>
  
    
  
    
        <BooksSlider />
    < PromoSection/>
      <NewProductsSlider />
        <NotesSlider />
        <Promet/>
       <ReviewsSlider />
 </>
  );
}



 export default Home;
// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import book from '../../assets/img/book item1.png';
// import "./Home.css";

// // استدعاء السلايدرز


// function Home() {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <>
//       <div className="home-hero">
//         <div className="hero-overlay">
//           <div className="container hero-content d-flex align-items-center">
//             <div className="hero-image position-relative d-inline-blok">
//               <img src={book} alt="book" className="img-fluid layer layer1" />
//               <img src={book} alt="book" className="img-fluid layer layer2" />
//               <img src={book} alt="book" className="img-fluid layer layer3" />
//             </div>

//             <div className="hero-text ">
//               <p>
//                 بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية لفهم تكوين الأرض وتاريخها.
//                 تقدم هذه الكتب معلومات معمقة حول الصخور، المعادن، البراكين، الزلازل، وحركات الصفائح التكتونية،
//                 مما يساعد القارئ على فهم البيئات الطبيعية والظواهر الجيولوجية.
//                 من خلال توفير كتب الجيولوجيا، يمكن للقراء الاطلاع على
//                 أحدث الدراسات والنظريات المتعلقة بعلم الأرض،
//                 مما يعزز من وعيهم البيئي ويسهمهم في المحافظة على كوكبنا.
//               </p>
//               <button className="btn btn-orangehome btn-lg" onClick={() => addToCart()}>
//                 سجل الآن
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* السلايدرز تحت الهيرو بالترتيب */}
//      

//      

//     </>
//   );
// }

// export default Home;



// import React, { useContext, useState } from "react";
// import { CartContext } from "../../context/CartContext";
// import book from '../../assets/img/book item1.png'
// import "./Home.css";

// // استيراد المكونات الحالية
// import NotesSlider from "../../components/Notes/notes";
// import ReviewsSlider from "../../components/Reviews/reviews";
// import NewProductsSlider from "../../components/newProducts/newProducts";
// import BooksSlider from "../../components/books/books"; // السلايدر القديم

// // استيراد المكونات الجديدة المطلوبة
// import BookGrid from "../../components/BookGrid/BookGrid"; // يجب إنشاء هذا الملف
// import GeologyPromo from "../../components/GeologyPromo/GeologyPromo"; // يجب إنشاء هذا الملف

// // تم حذف Promet و PromoSection من الاستيراد والـ JSX لدمج GeologyPromo بدلاً منهما

// function Home() {
//   const { addToCart } = useContext(CartContext);
  
//   // 1. إضافة الحالة للتحكم في عرض قسم الكتب
//   const [booksViewMode, setBooksViewMode] = useState('slider'); 

//   // دالة لتغيير وضع العرض إلى 'grid'
//   const handleViewAllBooksClick = () => {
//     setBooksViewMode('grid');
//   };


//   return (
//     <>
//       {/* Hero Section العلوي الحالي */}
//       <div className="home-hero">
//         <div className="hero-overlay">
//           <div className="container hero-content d-flex align-items-center">
//             {/* ... محتوى Hero Section العلوي الحالي ... */}
//             <div className="hero-image position-relative d-inline-blok  ">
//               <img src={book} alt="book" className="img-fluid layer layer1" />
//               <img src={book} alt="book" className="img-fluid layer layer2" /> 
//               <img src={book} alt="book" className="img-fluid layer layer3" /> 
//             </div>
//             <div className="hero-text ">
//               <p>بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية لفهم تكوين الأرض وتاريخها. تقدم هذه الكتب معلومات معمقة حول الصخور، المعادن، البراكين، الزلازل، وحركات الصفائح التكتونية، مما يساعد القارئ على فهم البيئات الطبيعية والظواهر الجيولوجية. من خلال توفير كتب الجيولوجيا، يمكن للقراء الاطلاع على أحدث الدراسات والنظريات المتعلقة بعلم الأرض، مما يعزز من وعيهم البيئي ويسهمهم في المحافظة على كوكبنا.</p>
//               <button className="btn btn-orangehome btn-lg" onClick={() => addToCart()}>سجل الآن</button>
//             </div>
//             {/* ... نهاية محتوى Hero Section العلوي الحالي ... */}
//           </div>
//         </div>
//       </div>
//   
//       {/* 2. عرض قسم الكتب بناءً على وضع العرض */}
//       {booksViewMode === 'slider' ? (
//         <BooksSlider onViewAllClick={handleViewAllBooksClick} /> // تمرير الدالة للسلايدر
//       ) : (
//         <BookGrid /> // عرض جميع الكتب في تخطيط شبكي
//       )}

//       {/* 3. القسم الترويجي الأوسط (المكون الجديد) */}
//       <GeologyPromo />
    
//       {/* 4. بقية الأقسام الأخرى */}
//       <NewProductsSlider />
//       <NotesSlider />
//       <ReviewsSlider />
//     </>
//   );
// }

// export default Home;