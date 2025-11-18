
import React from "react"
import Slider from "react-slick";
import { products } from "../../Api/productsData";
import ProductCard from "../productCard/productCard";

const BooksSlider = () => {
   const Books = products.Books;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container my-5">
     <div className="d-flex justify-content-between align-items-center border pb-2 tit">
       <h4 >جميع الكتب</h4>
       <h4 className="colo">عرض جميع الكتب</h4>
     </div>
      <Slider {...settings}>
        {Books.map((item) => (
          <div key={item.id} className="p-2">
            <ProductCard
              title={item.title}
              englishTitle={item.subtitle}
              description={item.description}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              image={item.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BooksSlider;