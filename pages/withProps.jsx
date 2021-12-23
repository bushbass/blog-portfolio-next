import React from "react";
import { data } from "../data";
// import { getStaticProps } from "next";

function WithProps() {
  return (
    <div>
      <p>this is a page with simple props from a local data file</p>
      <ul>
        <li>{data.name}</li>
        <li>{data.city}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { data },
  };
}

export default WithProps;
