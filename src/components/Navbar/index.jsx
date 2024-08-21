import CartWidget from "../CartWidget";

const Navbar = () => {
    return (
        <header className='header-index'>      
            <nav className='nav-container'>
                <input className="menu-toggle" type="checkbox" id="menu-toggle"></input>
                <label className="menu-button n2 push-right" for="menu-toggle">MENU</label>
                <ul className="navbar n3 push-right">
                    <li className="li-link"><a href="./pages/store.html">READY TO WEAR</a></li>
                    <li className="li-link"><a href="./pages/store.html">SALE</a></li>
                    <li className="li-link"><a href="./pages/journal.html">JOURNAL</a></li>
                </ul>
                <a href="">
                    <CartWidget quantity={3} />
                </a>
            </nav>
        </header>
    );
}

export default Navbar;