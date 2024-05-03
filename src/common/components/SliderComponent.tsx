import React, { FC, ReactNode, useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider, { Settings } from "react-slick";

interface SliderComponentProps {
  children: ReactNode;
  settings: Settings;
  height?: string;
  colorScheme?: string;
  hideArrows?: boolean;
}

const SliderComponent: FC<SliderComponentProps> = ({
  children, colorScheme, settings, hideArrows, height
}) => {

  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Box position={"relative"} height={height ?? "auto"} width={"full"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {
        !hideArrows &&
        <>
          <IconButton
            aria-label="left-arrow"
            colorScheme={colorScheme ?? "gray"}
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            colorScheme={colorScheme ?? "gray"}
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
          </IconButton>
        </>
      }
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        { children }
      </Slider>
    </Box>
  );
};

export default SliderComponent;