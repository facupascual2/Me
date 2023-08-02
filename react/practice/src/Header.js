

import styles from "./Header.module.css"
export  function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.picture} src="https://pps.whatsapp.net/v/t61.24694-24/359820757_9848795025192104_5588055643048623523_n.jpg?ccb=11-4&oh=01_AdTg4xfyIiPd0fr6mFw8dNc61Q6stXxIpSRAlV_hY5nZrg&oe=64D568B3"></img>
            <h1 className={styles.title}>Lucas Facundo Pascual</h1>
            <h2 className={styles.title}>18 years</h2>
        </div>
        )
}