import { FaArrowRight } from "react-icons/fa";
import Mobail_menu from "./Mobail_menu";
import Button from "../Common_Componants/Button";
function Home() {
    return (
        <>

            {/* High Divise */}
            <section className="Home_full d-none d-lg-block">
                <div className="ss">
                    <div className="shap d-none d-lg-block"></div>
                    <div className="home_img d-none d-lg-block"></div>

                    <div className="home_text d-none d-lg-block">
                        <div className="over">
                            <div className="d-flex">
                                <div className="line mb-4 d-none d-xl-block"></div>
                                <div>
                                    <h1>I'm steve milner.</h1>
                                    <span className="text-web-d">web designer</span>
                                </div>
                            </div>
                            <p>
                                I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                            </p>
                            <Button btntext="more about me" icon={<FaArrowRight />}/>
                        </div>
                    </div>
                </div>
            </section>


            {/* MOBAIL */}

            <section>
                <div className="home_t d-flex flex-column align-item-sm-center d-block d-lg-none justify-content-center">
                    <div className="M_img pt-4 pb-4 d-none d-sm-block">
                        <img src={require('../assest/img-mobile.jpg')} alt="" />
                    </div>
                    <div className="over d-flex flex-column align-items-center">
                        <div className="d-flex">
                            <div className="line d-none d-xl-block"></div>
                            <div className="d-flex flex-column">
                                <h1 className="text-sm-center text-start">I'm steve milner.</h1>
                                <span className="text-web-d text-center d-inline-block">web designer</span>
                            </div>
                        </div>
                        <p className="text-center">
                            I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                        </p>
                        <a href="" className="button">
                            <span class="button-text">more about me</span>
                            <span class="button-icon">
                                <FaArrowRight></FaArrowRight>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* <Mobail_menu></Mobail_menu> */}
        </>
    )
}

export default Home