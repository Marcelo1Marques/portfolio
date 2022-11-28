import Layout from "../../src/components/layouts/layout"; 
import Preloader from "../../src/components/preloader/index";
import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
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