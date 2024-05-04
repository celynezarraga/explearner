import React, { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { CourseItem as CourseItemType } from "../../types/courseItem";

interface CourseItemProps {
  item: CourseItemType;
}

const CourseItem: FC<CourseItemProps> = ({ item }) => {
  const router = useRouter();
  const { title, currentModule, type, timeLeft, url } = item;

  const clickHandler = () => {
    void router.push(url);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mx={2}
      w={"450px"}
      cursor={"pointer"}
      onClick={clickHandler}
    >
      <Box ml={3} alignContent={"center"}>
        <Icon h={"50px"} w={"50px"} color="teal" as={FaPlayCircle} />
      </Box>

      <Stack>
        <CardBody>
          <Text py="2">{title}</Text>
          <Heading size="md">{`${currentModule.number + 1}. ${currentModule.title}`}</Heading>
        </CardBody>
        <CardFooter>
          <Stack direction={"row"}>
            <Text color="blue.600" fontSize="md">
              {type}
            </Text>
            <Text color="gray.500" fontSize="md">
              {`• ${timeLeft}m left`}
            </Text>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CourseItem;