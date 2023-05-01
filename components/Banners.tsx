import React from "react";
import Slider from "react-slick";
import { HomeItems } from "../constant";
import Image from "next/image";
import Link from "next/link";
import imageLoader from '../hooks/imageLoader'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banners({ banners }: {banners: HomeItems}) {
  var settings = {
    dots: true, // todo set to false if tenant is Project W
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {banners?.map((items: any,index: number) => {
        return (
          <Image
            key={`banners-${index}`}
            loader={imageLoader}
            unoptimized
            src={items.images.banner}
            alt={items.title}
            width={1920}
            height={600}
          />
        )
      })}
    </Slider>
  );
}

export default Banners