
import Slider from "react-slick";
import { products } from "../../Api/productsData";
import ProductCard from "../ProductCard/ProductCard";

const ReviewsSlider = () => {
  const reviews = products.reviews;

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
      <div className="d-flex justify-content-between align-items-center  pb-2 tit">
       <h4 >المراجعات</h4>
       <h4 className="colo">عرض جميع المراجعات</h4>
     </div>
      <Slider {...settings}>
        {reviews.map((item) => (
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

export default ReviewsSlider;
