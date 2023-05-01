import React from "react";
import Slider from "react-slick";
import { HomeItems } from "../constant";
import Image from "next/image";
import Link from "next/link";
import imageLoader from '../hooks/imageLoader'
import Content from './styles/contents'

function Contents({ contents }: {contents: HomeItems}) {
  var settings = {
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Slider {...settings}>
      {contents?.map((items: any) => {
        return (
          <Content
            key={`contents-${items?.id}`}
            className="content-wrapper"
          >
            <Link href={`contents/${items?.slug}`}>
              <Image
                loader={imageLoader}
                unoptimized
                src={items.images.thumbnail || './notfound.webp'}
                alt={items.title}
                width={336}
                height={189}
                className="content-img"
              />
            </Link>
        </Content>
        )
      })}
    </Slider>
  );
}

export default Contents