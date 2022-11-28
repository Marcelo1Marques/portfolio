import Layout from "../../src/components/layouts/layout"; 
import Preloader from "../../src/components/preloader/index";
import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 2500);
    }, []);
  
    return loader ? (
      <>
      <Preloader/>
      </>
      ) : (
      <>
      <Layout/>
      </>
    );
  };
  

export default HomePage;