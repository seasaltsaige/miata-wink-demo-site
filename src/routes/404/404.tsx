import { Link } from "react-router-dom";
import "./404.css";

export default function NotFound() {
  return <div className="not-found">
    <h1>Error 404</h1>
    <h2>Page Not Found</h2>
    <h3>This error was caused by navigating to a page that either has been moved or doesn't exist.</h3>
    <Link to="/">Go Home</Link>
  </div>
}