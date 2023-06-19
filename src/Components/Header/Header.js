import { React } from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header" >
            <div className="header-content" >
                <h1 className="header-title" >Images Bazaar</h1>
                <nav className="header-nav" >
                    <a href="#" className="header-link" >Home</a>
                    <a href="#" className="header-link" >Gallery</a>
                    <a href="https://bento.me/amey" className="header-link" >About</a>
                    <a href="https://bento.me/amey" className="header-link" >Contact</a>
                </nav> </div>
        </header>
    );
}

    ;

export default Header;