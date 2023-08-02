import styles from "./Footer.module.css"
export function Footer(){
    return (
        <div className={styles.iconZone}>
            
            <a href="https://www.linkedin.com/in/facundo-pascual/"><img className={styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" ></img></a>
            <a href="https://github.com/facupascual2"><img className={styles.icon} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
        </div>
    )
}