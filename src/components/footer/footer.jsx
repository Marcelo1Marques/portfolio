import styles from "./styles";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                {/* Col 1 */}
                <div className={styles.column}>
                    <b className={styles.title}>Projects</b>
                    <a id="agence-web" href="https://meta-code.netlify.app/">Agence Web</a>
                    <a id="app-bank" href="https://bank-marcelo.netlify.app/">App Bancaire</a>
                    <a id="shop" href="https://metacode-mekg.fr/">Boutique</a>
                    <a id="blog" href="#">Blog</a>
                    <a id="movie" href="#">Site de Films</a>
                </div>
                <div className={styles.column}>
                    <b>Copyright</b>
                    <a href="#">Conditions d&apos;utilisation</a>
                    <a href="#">Politique de Confidentialité</a>
                    <a href="#">About</a>
                </div>
                <div className={styles.column}>
                    <b>Liens sociaux</b>
                    <a href="https://github.com/Marcelo1Marques">Github</a>
                    <a href="https://www.linkedin.com/in/marcelo-marques-57297a22a/">Linkedin</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;