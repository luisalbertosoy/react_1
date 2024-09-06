import { useLocation } from "react-router-dom";

import Header from "../containers/Header";
import BluredHeader from "../containers/BluredHeader";
import SubNav from "../containers/SubNav";
import Footer from "../containers/Footer";

const BaseLayout = ({children}) => {

    const location = useLocation();
    const hideSubNav = location.pathname.includes("/detail");

    return (
        <>
            <Header />
            {!hideSubNav && <SubNav />}
            <BluredHeader />
            {children}
            <Footer />
        </>
    );
};

export default BaseLayout;