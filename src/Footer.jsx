import "./css/Footer.css";
import imagen from "./icono.png";

export function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <img src = {imagen} alt="a" />
        </div>
      </div>
    );
  }