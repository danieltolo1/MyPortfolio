import React from "react";
import { useMediaQuery } from "react-responsive";

import HeaderMb from "../../Molecules/HeaderMb/HeaderMb";
import HeaderLg from "../../Molecules/HeaderLg/HeaderLg";

const Header = () => {
  const none = useMediaQuery({ query: "(max-width:576px)" });
  const sm = useMediaQuery({ query: "(min-width:576px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  const size = { none, sm, md, lg, xl, xxl };

  return <>{size.sm ? <HeaderLg /> : <HeaderMb />}</>;
};

export default Header;
