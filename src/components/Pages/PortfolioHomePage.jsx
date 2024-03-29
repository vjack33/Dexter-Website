import ProgressBar from "../Cards/ProgressBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'

function rand()  {
    return 20 + (Math.random() * (80))
}

export default function PortfolioHomePage() {
    return (
        <>
            <div className={"portfolioFullPage"}>
                <div className={"topnav"}>
                    <a href="#Contact">Contact</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#About">About</a>
                    <a className="active" href="#Home">Home</a>
                </div>
                <div id={"Home"} className={"heroSection fill"}>
                    <img className={"heroBackground"} src={"/HeroBackground.jpg"} alt='herobg'/>
                    <div className={"heroNameDesc"}>
                        <p className={"heroName"}>I am Vaibhav Chopade</p>
                        <p className={"heroDesc codetext"}>Web Developer/ Android Developer/ Geek</p>
                    </div>
                </div>
                <div id={"About"} className={"aboutMeSection"}>
                    <p className={"sectionHeader"}>About me</p>
                    <p className={"aboutMeText pb-40"}>
                        My name is Vaibhav Chopade. I am curiosity-driven Developer with 3 years of experience writing
                        code for high-paced business. Eager
                        to modernizing world-class products and delivering incredible user experience. In previous role
                        revamped one of the top revenue generating B2B app for the employer with over 50 lakh+
                        downloads.
                    </p>
                    <div className={"card lighterBg p-20 skillCard"}>
                        <div className={"d-flex dividerContainer"}>
                            <div className={"skillLeftSide rightText"}>
                                <img src={"/profileImg.jpeg"} alt='profileimg'/>
                                <p>Full Name: Vaibhav Chopade</p>
                                <p>Birthday: 15 OCT 1996</p>
                                <p>Phone: +91 9730592846</p>
                                <p>Email: vaibhavchopade33@gmail.com</p>
                            </div>
                            <div className={"skillCenterSide"}/>
                            <div className={"skillRightSide"}>
                                <p>Skills</p>
                                <p>Android Development</p>
                                <ProgressBar hideProgressText={true} progress={rand()}/>
                                <p>Web Development</p>
                                <ProgressBar hideProgressText={true} progress={rand()}/>
                                <p>HTML CSS</p>
                                <ProgressBar hideProgressText={true} progress={rand()}/>
                                <p>HTML CSS</p>
                                <ProgressBar hideProgressText={true} progress={rand()}/>
                                <p/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"Portfolio"}>
                    <p className={"sectionHeader"}>Portfolio</p>
                    <div className={"card lighterBg p-20 m-20"}>
                        <h1 >Something is cooking...</h1>
                    </div>
                </div>
                <div id={"Contact"}>
                    <p className={"sectionHeader"}>Contact</p>
                    <div className={"contactSection "}>
                        <div className={"card footerItem  lighterBg pt-20"}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}size={"2x"} />
                            <p>Address</p>
                            <p>Mumbai - 400701, Earth C-137</p>
                        </div>
                        <div className={"card footerItem  lighterBg pt-20 "}>
                            <FontAwesomeIcon icon={faPhone} size={"2x"} />
                            <p>Phone</p>
                            <p>+91 9730592846</p>
                        </div>
                        <div className={"card footerItem  lighterBg pt-20"}>
                            <FontAwesomeIcon icon={faMailBulk}  size={"2x"}/>
                            <p>Email</p>
                            <p>vaibhavchopade33@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}