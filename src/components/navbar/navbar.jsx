import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { styles } from "@src/components/navbar/styles";
import { TypeAnimation } from 'react-type-animation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Navbar = () => {

          return (
              <header>
                {/*Navbar*/}
                  <nav className={styles.navbar}>
                          <TypeAnimation className={styles.title} sequence={[
                            "Bonjour, je m'appelle Marcelo et bienvenue dans mon portfolio",
                            3000,
                            "Explorez à volonté et profitez de votre séjour!",
                            7000,
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
                          <div className={styles.scroller}>
                            <AnchorLink href="#presentation">
                              <button type="button" className={styles.arrow}>
                              <ArrowDownwardIcon />
                              Clique ici pour scroller!
                              </button>
                            </AnchorLink>
                          </div>
                  </nav>
              </header>
          );
        };

export default Navbar;