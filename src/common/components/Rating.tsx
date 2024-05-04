import React, { FC } from "react";
import { StarIcon } from "@chakra-ui/icons";

interface RatingProps {
  rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i < rating ? "teal.500" : "gray.300"}
          />
        ))
      }
    </>
  );
};

export default Rating;