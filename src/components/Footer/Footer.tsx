import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return <div className="footer">
    <p className="footer-item">© 2024 Miata Tech Wink Mod</p>
    <p className="footer-item">Website Designed and Maintained by <a href="https://github.com/seasaltsaige" target="_blank">@seasaltsaige</a></p>
    <div className="footer-nav">
      <Link className="footer-quick-link" to="/info">Learn More</Link>
      <Link className="footer-quick-link" to="/gallery">Gallery</Link>
      <Link className="footer-quick-link" to="/faq">FAQ</Link>
      <Link className="footer-quick-link" to="/contact">Contact Us</Link>
      <Link className="footer-quick-link" to="/terms">Terms of Use</Link>
    </div>
  </div>
}