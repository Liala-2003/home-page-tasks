
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { products } from "../../Api/productsData";
import ProductCard from "../productCard/productCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ReviewsSlider = () => {
  const Books = products.reviews;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3 tit">
       <h4>المراجعات</h4>
          <Link to="/reviews" >عرض جميع الكتب</Link>
      </div>

      <Slider {...settings}>
        {Books.map((item) => (
          <div key={item.id} className="px-2">
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

export default ReviewsSlider;