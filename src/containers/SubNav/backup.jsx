import SubMenu from "../../components/SubMenu";

const SubNav = () => {
    return (
        <div className="sub-container">
            <ul>
                <li><div className="submenu-active"></div><a href="">HOME</a></li>
                <li><a href="./pages/store.html">STORE</a></li>
                <li><a href="./pages/about.html">ABOUT</a></li>
            </ul> 
        </div>
    );
}

export default SubNav;