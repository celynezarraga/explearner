import React, { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Divider,
  Box,
  Heading,
  useDisclosure,
  useColorModeValue,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Module } from "../../types/course";
import CourseContentItem from "./CourseContentItem";
import CourseProgressTracker from "./CourseProgressTracker";

interface CourseContentsProps {
  modules: Module[];
  currentIndex?: number;
  updateIndex: (index: number) => void;
  toggleComplete: (index: number) => void;
}

const CourseContents: FC<CourseContentsProps> = ({
  modules, currentIndex, updateIndex, toggleComplete
}) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderLeft="1px"
      borderLeftColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 320 }}
      pos="fixed"
      h="full"
      right={0}
      top={0}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Stack w={"full"}>
          <Box mx={3}>
            <Heading size={"lg"}>Modules</Heading>
            <CourseProgressTracker modules={modules}/>
          </Box>
          <Divider />
          <Stack>
            <Box my={2}>
              {
                modules.map((module, index) =>
                  <CourseContentItem
                    key={index}
                    index={index}
                    module={module}
                    isActive={currentIndex === index}
                    onClick={() => { updateIndex(index);}}
                    toggleComplete={() => {toggleComplete(index);}}
                  />
                )
              }
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default CourseContents;