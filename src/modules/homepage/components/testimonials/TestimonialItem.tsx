import React, { FC } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaPlayCircle, FaUserCircle } from "react-icons/fa";
import { Testimonial } from "../../types/testimonial";

interface TestimonialItemProp {
  item: Testimonial;
}

const TestimonialItem: FC<TestimonialItemProp> = ({item}) => {
  const router = useRouter();
  const { content, author, course } = item;

  const redirectToCourse = () => {
    void router.push(course.url);
  };

  return (
    <Card backgroundColor={"white"}>
      <CardBody>
        <Stack mt="4" spacing="2">
          <Heading size="sm">{`"${content}"`}</Heading>
          <Flex direction={"row"} align={"center"}>
            <Icon as={FaUserCircle} />
            <Text ml={2} size={"sm"}>{author}</Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex direction={"row"} align={"center"} onClick={redirectToCourse}>
          <Icon size="md" color="teal" as={FaPlayCircle} />
          <Heading
            ml="2"
            size="sm"
            color="teal"
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            {course.title}
          </Heading>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default TestimonialItem;