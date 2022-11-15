import React, { useState } from "react";
import {styles} from "@src/components/navbar/styles";
import { menu } from "@src/components/navbar/styles";
import { bubble as Menu } from 'react-burger-menu';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    {/*Menu*/}
          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                      <div>
                          <h1 className={styles.title}> Marcelo Marques <br /> Devéloppeur Web <br /> Full Stack</h1>
                          <button className={styles.bmBurgerButton}>Menu</button>
                          <div id="outer-container" >
                            <Menu className={menu} width={200} pageWrapId={ "page-wrap" }>
                                <a className={styles.list} href="#agency">Agence Web</a>
                                <a className={styles.list} href="#bank">App Bancaire</a>
                                <a className={styles.list} href="#shop">Boutique</a>
                                <a className={styles.list} href="#movies">Site de Films</a>
                                <a className={styles.list} href="#contact">Contact</a>
                            </Menu>
                          </div>
                      </div>
                  </nav>
              </header>
          );
        };

export default Navbar;