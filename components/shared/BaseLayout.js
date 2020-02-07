// react libraries
import React from "react";

// components
import Header from "../shared/Header";
import Footer from "../shared/Footer";

// styles
import "./styles/base_layout.scss";

const BaseLayout = props => (
  <div className="main-layout">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default BaseLayout;
