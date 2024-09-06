import CartWidget from "../../components/CartWidget"
import SubMenu from "../../components/SubMenu";
import MainMenu from "../../components/MainMenu";

const Header = () => {

    const links = [
        {
            label: 'READY TO WEAR',
            href: '/store',
        },
        {
            label: 'SALE',
            href: '/store'
        },
        {
            label: 'JOURNAL',
            href: '#'
        }
    ]

    return (
        <header className='header-index'>      
            <nav className='nav-container'>
                <input className="menu-toggle" type="checkbox" id="menu-toggle"></input>
                <label className="menu-button n2 push-right" for="menu-toggle">MENU</label>
                <MainMenu className="navbar n3 push-right" links={links} />
                <a href="">
                    <CartWidget quantity={3} />
                </a>
            </nav>
        </header>
    );
}

export default Header;