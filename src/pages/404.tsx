import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "@/common/components/ErrorPage";
import { URLS } from "@/common/utils/urls";

const NotFoundPage = () => {
  const router = useRouter();

  const redirectToHome = () => {
    void router.push(URLS.HOMEPAGE);
  };

  return (
    <ErrorPage redirect={redirectToHome}/>
  );
};

export default NotFoundPage;