import logo from "../../assets/images/logo.png"
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={styles.container}>
                <img src={logo} alt="Movie Movie" className = {styles.webLogo} />
            </div>
        </header>
    );
}

export default Header;