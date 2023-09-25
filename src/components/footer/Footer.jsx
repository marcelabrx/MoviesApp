import styles from './Footer.module.css'

function Footer() {
    return (
        <>
        <div className={styles.contentFooter}>
            <footer className={styles.footer}>
                <div className={styles.waves}>
                    <div className={`${styles.wave} ${styles.wave1}`}></div>
                    <div className={`${styles.wave} ${styles.wave2}`}></div>
                    <div className={`${styles.wave} ${styles.wave3}`}></div>
                    <div className={`${styles.wave} ${styles.wave4}`}></div>
                </div>
                
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><a className={styles.menuLink} href="#">Home</a></li>
                    <li className={styles.menuItem}><a className={styles.menuLink} href="#">About</a></li>
                    <li className={styles.menuItem}><a className={styles.menuLink} href="#">Services</a></li>
                    <li className={styles.menuItem}><a className={styles.menuLink} href="#">Team</a></li>
                    <li className={styles.menuItem}><a className={styles.menuLink} href="#">Contact</a></li>
                </ul>
                
                <p>&copy;2023 Created By Marcela Britos & Indra Lima | All Rights Reserved</p>
            </footer>
            </div>
        </>
        
    )
}

export default Footer