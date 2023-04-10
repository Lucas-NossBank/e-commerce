import { IconContext } from "react-icons"
import { NavBarMenuBtn } from "./styles"
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const NavBarButton = () => {

    const {openMenu} = useContext(AuthContext)
    return (
        <>
            <NavBarMenuBtn onClick={() => openMenu()}>
                    <IconContext.Provider
                    value={{
                        color: "var(--color-grey-0)",
                    }}
                    >
                    <GiHamburgerMenu />
                </IconContext.Provider>
            </NavBarMenuBtn>
        </>
    )
}

export default NavBarButton