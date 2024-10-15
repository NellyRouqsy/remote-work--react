import LogoImg from "../assets/Images/logo.svg";
import "./Header.css";

const Header = () => {
    return ( 
        <header>
            <navLeft>
                <img src={LogoImg} />
                <select className="features">
                    <option value="">Features</option>
                </select>
                <select className="features">
                    <option value="">Company</option>
                </select>
                <a href="">Careers</a>
                <a href="">About</a>
            </navLeft>

            <navRight>
                <button className="login">Login</button>
                <button className="register">Register</button>
            </navRight>

        </header>
     );
}
 
export default Header;
