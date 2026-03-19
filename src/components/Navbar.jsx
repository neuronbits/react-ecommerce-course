import { Link } from "react-router-dom";

export default function Navbar() {
    const user = null;
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">Shophub</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Cart</Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/login" className="btn btn-secondary">Login</Link>
                        <Link to="/checkout" className="btn btn-primary">Signup</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}