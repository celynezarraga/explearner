import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import cookie from "cookie";
import { AppDispatch, RootState } from "@/store/store";
import PageComponent from "@/common/components/PageComponent";
import { getVerifiedUser } from "@/common/utils/session";

import PublicHomepage from "@/modules/homepage/PublicHomepage";
import Homepage from "@/modules/homepage/Homepage";
import { setUser } from "@/modules/user/store/userSlice";
import { UserApiResponse, UserDataResponse } from "@/modules/user/types/user";

type HomeProps = {
  user: UserDataResponse;
}

const Home: NextPage<HomeProps> = ({ user }) => {

  const dispatch = useDispatch<AppDispatch>();
  const { info } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (!info && user) {
      dispatch(setUser(user));
    }
  }, [dispatch, info, user]);

  return (
    <PageComponent>
      { info ? <Homepage /> : <PublicHomepage /> }
    </PageComponent>
  );
};

// @ts-ignore
export const getServerSideProps = (async (context) => {
  try {
    const cookies = cookie.parse(context.req.headers.cookie);
    const user: UserApiResponse = await getVerifiedUser(cookies.token);
    return {
      props: {
        user: user.data
      }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
});

export default Home;
