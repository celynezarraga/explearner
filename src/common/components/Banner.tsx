import React, { FC } from "react";
import { Box } from "@chakra-ui/react";

interface BannerProps {
  imageUrl: string;
}

const Banner: FC<BannerProps> = ({ imageUrl }) => {
  return (
    <Box
      height={"300px"}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${imageUrl})`}
    />
  );
};

export default Banner;