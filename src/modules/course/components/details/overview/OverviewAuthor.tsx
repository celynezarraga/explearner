import React, { FC } from "react";
import { Flex, Icon, Stack, Heading, Text } from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { Author } from "@/modules/course/types/course";

interface OverviewAuthorProps {
  author: Author;
}

const OverviewAuthor: FC<OverviewAuthorProps> = ({ author }) => {
  const { name, description } = author;
  return (
    <Flex direction={"row"} align={"center"} p={3} maxWidth={"md"}>
      <Flex align={"center"} mr={3}>
          <Icon boxSize={"10"} as={FaRegUserCircle} color={"teal"}/>
        </Flex>
      <Stack>
        <Heading size='md' color={"teal"}>{name}</Heading>
        { description?.length > 0 && <Text ml={2} size={"sm"} color={"gray"}>{description}</Text> }
      </Stack>
    </Flex>
  );
};

export default OverviewAuthor;