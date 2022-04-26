import "./css/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userIcon from "./user-icon.png"

export function Header(){
    return(
        
        <div className="body">
            <header className="header">
                <div>
                    <a className="logo" href="/">CapiMusic</a>
                    <div className="user-icon">
                        <img src={userIcon} alt="user" width="40" height="50" />
                    </div>
                </div>
                
            </header>
            
        </div>
    )
}