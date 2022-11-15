import React, { useState } from "react";
import { styles } from "@src/components/navbar/styles";
import { bubble as Menu } from 'react-burger-menu';
import { stylesMenu } from "@src/components/navbar/styles";

const Navbar = () => {
    {/*Menu*/}
          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                      <div>
                          <h1 className={styles.title}> Marcelo Marques <br /> Devéloppeur Web <br /> Full Stack</h1>
                          <button type="button" >Menu :c</button>
                          <div id="outer-container">
                            <Menu styles={stylesMenu} width={200} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                                <a id="home" className={styles.menu} href="#agency">Agence Web</a>
                                <a id="bank" className={styles.menu} href="#bank">App Bancaire</a>
                                <a id="boutique" className={styles.menu} href="#shop">Boutique</a>
                                <a id="movies" className={styles.menu} href="#movies">Site de Films</a>
                                <a id="contact" className={styles.menu} href="#contact">Contact</a>
                            </Menu>
                          </div>
                      </div>
                  </nav>
              </header>
          );
        };

export default Navbar;