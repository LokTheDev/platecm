import { Outlet } from "react-router-dom"
import PrimarySearchAppBar from "./components/AppBar/AppBar"
import { userContext, userStore } from "./store/userStore"

const AppWrapper = () => {

    return (
        <userContext.Provider value={userStore}>
            <PrimarySearchAppBar />
            <Outlet />
        </userContext.Provider>
    )
}

export default AppWrapper;