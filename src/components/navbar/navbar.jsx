import React, { useState } from "react";
import styles from "@src/components/navbar/styles";
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const element = <FontAwesomeIcon icon={faBars} />

    {/*Menu*/}
          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                      <div>
                          <h1 className={styles.title}> Marcelo Marques <br /> Devéloppeur Web <br /> Full Stack</h1>
                          <div id="outer-container" >
                            <button type="button">
                            <FontAwesomeIcon icon="fa-solid fa-bars" />                           
                            </button>
                            <Menu>
                                <a id="agence-web" className={styles.list} href="">Agence Web</a>
                                <a id="app-bank" className={styles.list} href="">App Bancaire</a>
                                <a id="shop" className={styles.list} href="">Boutique</a>
                                <a id="blog" className={styles.list} href="">Blog</a>
                                <a id="movie" className={styles.list} href="">Site de Films</a>
                            </Menu>
                          </div>
                      </div>
                  </nav>
              </header>
          );
        };

export default Navbar;