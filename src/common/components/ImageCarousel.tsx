import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import SliderComponent from "./SliderComponent";

interface ImageCarouselProps {
  images: string[];
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageCarousel: FC<ImageCarouselProps> = ({images}) => {
  return (
    <SliderComponent
      colorScheme="messenger"
      settings={settings}
      height={"300px"}
    >
      {images.map((image, index) => (
          <Box
            key={index}
            height={"sm"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image})`}
          />
        ))}
    </SliderComponent>
  );
};

export default ImageCarousel;