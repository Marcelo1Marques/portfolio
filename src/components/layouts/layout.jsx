import React from "react";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Profile from "../../assets/img/proxy.jpg";
import Html from "../../assets/img/html5.png";
import Css from "../../assets/img/css.png";
import Javascript from "../../assets/img/javascript.png";
import ReactImg from "../../assets/img/react.png";
import Sql from "../../assets/img/sql.png";
import Php from "../../assets/img/php.png";
import Nodejs from "../../assets/img/nodejs.png";
import Python from "../../assets/img/python.png";
import Agence from "../../assets/img/agence.png";
import Bank from "../../assets/img/bank.png";
// import Shop from "../../assets/img/";
import styles from "@src/components/layouts/styles";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({children}) => {      
    return (
        <>
            <Navbar />
            <main style={{ background: "linear-gradient(#000000, #0d0ab9, #1059d9, #0d0ab9, #000000)" }} className={styles.main}>{children}
                <div className={styles.template}>
                    <section style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }} className={styles.section}>
                        <div className={styles.border}>
                            <div style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}} className={styles.outerframe}>
                                <div style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}} className={styles.innerframe}>
                                    <Image src={Profile} alt="photo" width="350px" height="350px"/>
                                </div>
                            </div>
                        </div>
                        <b className={styles.title}>Qui suis je?</b>
                        <p className={styles.paragraph}>Je m&apos;appelle Marcelo et bienvenue dans mon portfolio. Vous pouvez lire et voir mon travail en tant que développeur web au fil des ans. Pour toutes questions, n&apos;hésitez pas à me contacter via mon espace contact. <br /> Merci de votre visite.</p>
                        <b className={styles.title}>Domaines de travail</b>
                        <h3 className={styles.h3}>Avec quoi je travaille ?</h3>
                        <div style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }} className={styles.logo}>
                            <div className={styles.frontend}>
                                <Image src={Html} alt="logo" width="100" height="100" />
                                <p>HTML5</p>
                            </div>
                            <div className={styles.frontend}>
                                <Image src={Css} alt="logo" width="100" height="100" />
                                <p>CSS3</p>
                            </div>
                            <div className={styles.frontend}>
                                <Image src={Javascript} alt="logo" width="100" height="100" />
                                <p>Javascript</p>
                            </div>
                            <div className={styles.frontend}>
                                <Image src={ReactImg} alt="logo" width="100" height="100" />
                                <p>React</p>
                            </div>
                        </div>
                        <div style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }} className={styles.logo}>
                            <div className={styles.backend}>
                                <Image src={Sql} alt="logo" width="100" height="100" />
                                <p>SQL</p>
                            </div>
                            <div className={styles.backend}>
                                <Image src={Php} alt="logo" width="100" height="100" />
                                <p>PHP</p>
                            </div>
                            <div className={styles.backend}>
                                <Image src={Nodejs} alt="logo" width="100" height="100" />
                                <p>NodeJS</p>
                            </div>
                            <div className={styles.backend}>
                                <Image src={Python} alt="logo" width="100" height="100" />
                                <p>Python</p>
                            </div>
                        </div>
                    </section>
                    <div className={styles.sectionBorder} style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }}> 
                        <section className={styles.section}>
                            <b id="agency" className={styles.title}>Mes Projects</b>
                            <h1 className={styles.title}>Agence Web</h1>
                            <div>
                                <p className={styles.paragraph}>
                                    Ce projet devait passer par les nombreuses étapes de la création d&apos;une agence en ligne, de l&apos;organisation du travail à la création du site internet. Il a été créé à l&apos;aide de Webpack.
                                </p>
                                <Image className={styles.image} src={Agence} alt="agence-web" width={300} height={300}/>
                                <p className={styles.link}>Code: <a href="https://github.com/MEGK-171/agence-web">GithubLink</a></p>
                            </div>
                        </section>
                        <hr className={styles.hr} />
                        <section className={styles.section}>
                            <h1 id="bank" className={styles.title}>App Bancaire</h1>
                            <div>
                                <p className={styles.paragraph}>
                                    Ce projet visait à créer une application qui utilise un algorithme Javascript pour gérer les transactions bancaires.
                                </p>
                                <Image className={styles.image} src={Bank} alt="bank" width={300} height={300}/>
                                <p className={styles.link}>Code: <a href="https://github.com/Marcelo1Marques/maze-bank">GithubLink</a></p>
                            </div>
                        </section>
                        <hr className={styles.hr} />
                        <section className={styles.section}>
                            <h1 id="shop" className={styles.title}>Boutique</h1>
                            <div>
                                <p className={styles.paragraph}>
                                    Ce projet s&apos;inscrit dans la continuité de l&apos;agence web, créant une boutique en ligne pour le site précédemment créé.
                                </p>
                                <Image className={styles.image} src={Profile} alt="shop" width={300} height={300}/>
                                <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                            </div>
                        </section>
                        <hr className={styles.hr} />
                        <section className={styles.section}>
                            <h1 id="movies" className={styles.title}>Site de films</h1>
                            <div>
                                <p className={styles.paragraph}>Ce projet vise à travailler sur le back-end d&apos;une application, en utilisant un moyen de stocker des données.</p>
                                <Image className={styles.image} src={Profile} alt="movies" width={300} height={300}/>
                                <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                            </div>
                        </section>
                        <hr className={styles.hr} />
                        <section className={styles.section}>
                            <h1 id="movies" className={styles.title}>Blog</h1>
                            <div>
                                <p className={styles.paragraph}>Ce projet vise à travailler sur le back-end d&apos;une application, en utilisant un moyen de stocker des données.</p>
                                <Image className={styles.image} src={Profile} alt="blog" width={300} height={300}/>
                                <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                            </div>
                        </section>
                    </div>
                    <section style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }} className={styles.section}>
                        <h1 id="contact" className={styles.title}>Contact</h1>
                        <div>
                            <p className={styles.paragraph}>Si vous souhaitez me contacter, le lien suivant vous guidera vers mon CV en ligne.</p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={300} height={300}/>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
};


export default Layout;