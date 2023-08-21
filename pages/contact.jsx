import React from "react";

export default function Contacto(props) {
  const { header } = props;
  return <div>{header.btnHOme}</div>;
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  console.log("otro", response.default.header);
  return {
    props: {
      header: response.default.header,
    },
  };
}
