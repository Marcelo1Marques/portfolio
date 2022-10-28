import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Image from "next/image";
import Profile from "../../assets/img/proxy.jpg"
import React from "react";
import styles from "@src/components/layouts/styles";
import { useSpring, animated } from 'react-spring';

// const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

const Layout = ({children}) => {      
    return (
        <>
            <Navbar />
            <main style={{ background: "radial-gradient(#a412d0, #3f1a4a)" }} className={styles.main}>{children}
                <div className={styles.template}>
                    <section className={styles.section}>
                        <div className={styles.border}>
                            <div style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}} className={styles.outerframe}>
                                <div style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}} className={styles.innerframe}>
                                    <Image src={Profile} alt="photo" width="350px" height="350px"/>
                                </div>
                            </div>
                        </div>
                        <h1 className={styles.title}>Qui suis je?</h1>
                        <p className={styles.paragraph}>Je m&apos;appelle Marcelo et bienvenue dans mon portfolio. Vous pouvez lire et voir mon travail en tant que développeur web au fil des ans. Pour toutes questions, n&apos;hésitez pas à me contacter via mon espace contact. <br /> Merci de votre visite.</p>
                    </section>
                    <hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 id="agency" className={styles.title}>Agence Web</h1>
                        <div>
                            <p className={styles.paragraph}>
                                Ce projet devait passer par les nombreuses étapes de la création d&apos;une agence en ligne, de l&apos;organisation du travail à la création du site internet. Il a été créé à l&apos;aide de Webpack.
                            </p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={250} height={250}/>
                            <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 id="bank" className={styles.title}>App Bancaire</h1>
                        <div>
                            <p className={styles.paragraph}>
                                Ce projet visait à créer une application qui utilise un algorithme Javascript pour gérer les transactions bancaires.
                            </p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={250} height={250}/>
                            <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 id="shop" className={styles.title}>Boutique</h1>
                        <div>
                            <p className={styles.paragraph}>
                                Ce projet s&apos;inscrit dans la continuité de l&apos;agence web, créant une boutique en ligne pour le site précédemment créé.
                            </p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={250} height={250}/>
                            <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 id="movies" className={styles.title}>Site de films</h1>
                        <div>
                            <p className={styles.paragraph}>Ce projet vise à travailler sur le back-end d&apos;une application, en utilisant un moyen de stocker des données.</p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={250} height={250}/>
                            <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 id="contact" className={styles.title}>Contact</h1>
                        <div>
                            <p className={styles.paragraph}>Si vous souhaitez me contacter, le lien suivant vous guidera vers mon CV en ligne.</p>
                            <Image className={styles.image} src={Profile} alt="agence-web" width={250} height={250}/>
                            <p className={styles.link}>Code: <a href="#">GithubLink</a></p>
                        </div>
                    </section>
                    <hr className={styles.hr} />
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Layout;