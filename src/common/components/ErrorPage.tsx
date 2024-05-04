import React, { FC } from "react";
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Stack
} from "@chakra-ui/react";

interface ErrorPageProps {
  redirect: () => void;
  redirectLabel?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({
  redirect,
  redirectLabel = "Go back home.",
}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={"calc(100vh)"} w={"full"}>
      <Stack>
        <Alert status="error" w={"lg"}>
          <AlertIcon />
          <AlertTitle>Page Not Found</AlertTitle>
          <AlertDescription>This page does not exist.</AlertDescription>
        </Alert>
        <Heading
          size={"md"}
          textDecor={"underline"}
          color={"teal"}
          cursor={"pointer"}
          onClick={redirect}
        >
          {redirectLabel}
        </Heading>
      </Stack>
    </Flex>
  );
};

export default ErrorPage;