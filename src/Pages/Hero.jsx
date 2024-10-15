import Button from "../Component/Button"
import Img1 from "../assets/Images/client-databiz.svg";
import Img2 from "../assets/Images/client-audiophile.svg";
import Img3 from "../assets/Images/client-meet.svg";
import Img4 from "../assets/Images/client-maker.svg";
import Img5 from "../assets/Images/image-hero-desktop.png"

import "./Hero.css"


const Hero = () => {
    return (
        <hero>
            <div className="heroContent">
                <h1>
                    Make <br />
                    remote work
                </h1>
                <p>
                    Make remote work Get your team in sync, no matter your location.
                    <br /> Streamline processes, create team rituals, and 
                    <br />watch productivity soar.
                </p>
                <Button/>
            
                <div className="flexing">
                    <img src={Img1} alt="img" />
                    <img src={Img2} alt="img" /> 
                    <img src={Img3} alt="img" />
                    <img src={Img4} alt="img" />
                </div>
            </div>
            <div className="imgSize">
                <img src={Img5} alt="img" />
            </div>

        </hero>
    );  
};

export default Hero;
