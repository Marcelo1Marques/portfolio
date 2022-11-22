import React, { useState, useEffect} from "react";
import { styles } from "@src/components/navbar/styles";
import { elastic as Menu } from 'react-burger-menu';

const Navbar = () => {

          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                      <header>
                          <h1 className={styles.title}> Marcelo Marques <br /> Devéloppeur Web <br /> Full Stack</h1>
                      </header>
                          <div id="outer-container">
                            <Menu className={styles.menu} width={200} outerContainerId={ "outer-container" }>
                                <a id="home" href="#agency">Agence Web</a>
                                <a id="bank" href="#bank">App Bancaire</a>
                                <a id="boutique" href="#shop">Boutique</a>
                                <a id="movies" href="#movies">Site de Films</a>
                                <a id="contact" href="#contact">Contact</a>
                            </Menu>
                          </div>
                  </nav>
              </header>
          );
        };

export default Navbar;