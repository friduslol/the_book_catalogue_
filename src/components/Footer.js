import Styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={Styles.footerContainer}>
            <div className={Styles.infoWrapper}>
                <p className={Styles.info}>Malmö, Hyllie Vattenparksgata 34d, Sverige</p>
                <p className={Styles.info}>thebookcatalouge@hotmail.com</p>
            </div>
            <div className={Styles.socialsWrapper}>
                <img className={Styles.socials} src={process.env.PUBLIC_URL + '/icons8-facebook-48.png'} alt="facebook"/>
                <img className={Styles.socials} src={process.env.PUBLIC_URL + '/icons8-instagram-48.png'} alt="instagram"/>
                <img className={Styles.socials} src={process.env.PUBLIC_URL + '/icons8-twitter-48.png'} alt="twitter"/>
            </div>
        </div>
    )
}

export default Footer;