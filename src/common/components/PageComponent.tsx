import React, { ReactElement, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const PageComponent = ({ children }: { children: ReactNode }): ReactElement => {

  return (
    <>
      <NavigationBar />
      <Box py={4} minHeight={"calc(85vh)"}>{ children }</Box>
      <Footer />
    </>
  );
};

export default PageComponent;