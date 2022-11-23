import React, { useState, useEffect} from "react";
import { styles } from "@src/components/navbar/styles";
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {

          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                      <header>
                          <TypeAnimation className={styles.title} sequence={[
                            "Bonjour, je m'appelle Marcelo et bienvenue dans mon portfolio",
                            2000,
                            "Explorez à volonté et profitez de votre séjour!",
                            8000,
                            "＼(￣▽￣)／",
                            3000,
                            () => {
                              console.log('Done typing!');
                            }
                          ]}
                          wrapper="div"
                          cursor={true}
                          repeat={Infinity}
                          style={{ fontSize: '2em' }}/> 
                      </header>
                  </nav>
              </header>
          );
        };

export default Navbar;