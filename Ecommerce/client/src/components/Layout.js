import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import {Toaster} from 'react-hot-toast';

//You can use layout = (props) and called by props.children
const Layout = ({ children, title, description, keywords, author }) => {
  return (
 
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta className="description" content={description}></meta>
        <meta className="keywords" content={keywords}></meta>
        <meta className="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
        </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps={
    title:"Ecommerce app",
    description:"Mern Stack Project",
    keywords:"React, Node, MongoDB, Express",
    author:"Niraj Tamang"
}

export default Layout;
