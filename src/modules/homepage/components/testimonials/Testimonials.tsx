import React, { FC } from "react";
import { Testimonial } from "../../types/testimonial";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import TestimonialItem from "./TestimonialItem";

interface TestimonialsProps {
  items: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ items }) => {
  return (
    <Box mx={1} my={2} backgroundColor={"gray.100"}>
      <Box py={3} mx={4}>
        <Stack spacing='2'>
          <Heading mt={2} size={"lg"} color={"teal"} fontStyle={"italic"}>
            What other learners thought about a certain course?
          </Heading>
        </Stack>
      </Box>
      <SimpleGrid p={3} mt={2} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {
          items.map((item, index) => {
            return <TestimonialItem key={index} item={item}/>;
          })
        }
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;