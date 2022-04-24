import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header(){
    return(
        
        <div className="body">
            <header className="header">
                <div>
                    <a className="logo" href="/">CapiMusic</a>
                </div>
                <div className="user-icon">
                    <FontAwesomeIcon icon = "fa-regular"/>
                </div>
            </header>
            
        </div>
    )
}