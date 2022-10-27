import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Image from "../../assets/img/proxy.jpg";
import React from "react";
import styles from "@src/components/layouts/styles";
import { useSpring, animated } from 'react-spring';

// const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


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
                                    <img src="" alt="photo" />
                                </div>
                            </div>
                        </div>
                        <h1 className={styles.title}>Qui suis je?</h1>
                        <p className={styles.paragraph}>Je m'appelle Marcelo et bienvenue dans mon portfolio. Vous pouvez lire et voir mon travail en tant que développeur web au fil des ans. Pour toutes questions, n'hésitez pas à me contacter via mon espace contact. <br /> Merci de votre visite.</p>
                    </section>
                    <hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>Agence Web</h1>
                        <div>
                            <p>
                                Ce projet devait passer par les nombreuses étapes de la création d'une agence en ligne, de l'organisation du travail à la création du site internet. Il a été créé à l'aide de Webpack.
                            </p>
                            <img src={Image} alt="agence-web" />
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>App Bancaire</h1>
                        <div>
                            <p>
                                Ce projet visait à créer une application qui utilise un algorithme Javascript pour gérer les transactions bancaires.
                            </p>
                            <div>
                                
                            </div>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>Boutique</h1>
                        <div>
                            <p>
                                Ce projet s'inscrit dans la continuité de l'agence web, créant une boutique en ligne pour le site précédemment créé.
                            </p>
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>Blog</h1>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione pariatur fugit dolorem recusandae, numquam mollitia iste tenetur possimus illo quod, enim nam nisi perferendis amet iure animi. Temporibus, libero!
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>Site de films</h1>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione pariatur fugit dolorem recusandae, numquam mollitia iste tenetur possimus illo quod, enim nam nisi perferendis amet iure animi. Temporibus, libero!
                        </div>
                    </section><hr className={styles.hr} />
                    <section className={styles.section}>
                        <h1 className={styles.title}>Contact</h1>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione pariatur fugit dolorem recusandae, numquam mollitia iste tenetur possimus illo quod, enim nam nisi perferendis amet iure animi. Temporibus, libero!
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