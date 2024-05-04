import React, { ChangeEvent, FC } from "react";
import { Box, Checkbox, Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { Module } from "../../types/course";

interface CourseContentItemProps {
  index: number;
  module: Module;
  isActive: boolean;
  onClick: () => void;
  toggleComplete: () => void;
}

const CourseContentItem: FC<CourseContentItemProps> = ({ 
  index, module, isActive, onClick, toggleComplete
}) => {
  const { completed, title, length } = module;

  const onToggleCompleted = (e: ChangeEvent) => {
    e.stopPropagation();
    toggleComplete();
  };

  return (
    <>
      <Box
        p={2}
        backgroundColor={isActive ? "gray.100" : "white"}
        cursor={isActive ? "default" : "pointer"}
        onClick={isActive ? () => {} : onClick} 
      >
        <Flex direction={"row"} align={"center"} mx={3}>
          <Checkbox
            colorScheme={"teal"}
            isChecked={completed}
            onChange={onToggleCompleted}
          />
          <Text ml={2} size={"sm"} color={"teal"} fontWeight={"bold"}>{`${index + 1}. ${title}`}</Text>
        </Flex>
        <Flex direction={"row"} align={"center"} mx={5} my={2}>
          <Icon as={FaVideo} color={"gray"}/>
          <Text ml={2} size={"sm"} color={"gray"}>{`${length} min`}</Text>
        </Flex>
      </Box>
      <Divider />
    </>
  );
};

export default CourseContentItem;