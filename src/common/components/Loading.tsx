import React, { FC } from "react";
import {
  Flex,
  Spinner
} from "@chakra-ui/react";

interface LoadingProps {
  height?: string;
}

const Loading: FC<LoadingProps> = ({ height }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      h={height ?? "calc(100vh)"}
      w={"full"}
    >
      <Spinner color="teal"/>
    </Flex>
  );
};

export default Loading;