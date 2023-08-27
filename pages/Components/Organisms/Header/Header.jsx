import React from "react";
import { useMediaQuery } from "react-responsive";

import HeaderMb from "../../Molecules/HeaderMb/HeaderMb";
import HeaderLg from "../../Molecules/HeaderLg/HeaderLg";

const Header = (header) => {
  const none = useMediaQuery({ query: "(max-width:672px)" });
  const sm = useMediaQuery({ query: "(min-width:672px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  const size = { none, sm, md, lg, xl, xxl };

  return (
    <>
      {size.sm ? (
        <HeaderLg header={header.header} />
      ) : (
        <HeaderMb header={header.header} />
      )}
    </>
  );
};

export default Header;
