import { Outlet } from "react-router-dom";
import { ScrollToTop } from './components/index'

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    )
}

export default Layout