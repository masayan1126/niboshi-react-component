
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export type CarouselImageItem = {
    src: string
    alt: string
}

// import imgSample2 from "./1.jpg";
// https://qiita.com/Masanori_N/items/839a9b5a97decd564c6f
// <Carousel carouselImageItems={[{src: imgSample2, alt: ""}, {src: imgSample2, alt: ""}, {src: imgSample2, alt: ""}]}/>

type Props = {
    carouselImageItems: CarouselImageItem[]
}

export default function Carousel({ carouselImageItems }: Props) {
    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
    };

    return (
        <Slider {...settings}>
            {
                carouselImageItems.map(
                    (item: CarouselImageItem) => <img src={item.src} alt={item.alt} />
                )
            }
            
        </Slider>
  );
}