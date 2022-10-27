import styles from "./styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAddressCard } from '@fortawesome/fontawesome-free';


const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                {/* Col 1 */}
                <div className={styles.column}>
                    <b className={styles.title}>Projects</b>
                    <a id="agence-web" href="#">Agence Web</a>
                    <a id="app-bank" href="#">App Bancaire</a>
                    <a id="shop" href="#">Boutique</a>
                    <a id="blog" href="#">Blog</a>
                    <a id="movie" href="#">Site de Films</a>
                </div>
                <hr />
                <div className={styles.column}>
                    <b>Copyright</b>
                    <a href="#">Conditions d&apos;utilisation</a>
                    <a href="#">Politique de Confidentialité</a>
                    <a href="#">About</a>
                </div>
                <hr />
                <div className={styles.column}>
                    <b>Liens sociaux</b>
                </div>
            </div>
        </footer>
    )
};

export default Footer;