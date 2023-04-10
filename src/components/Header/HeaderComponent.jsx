import { Header, LogoDiv, LogoLink } from "./styles"
import logo from "../../assets/logo/logo.png"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const HeaderComponent = () => {

    const authority = localStorage.getItem("@NMPuser:id")

    function getCurrentYear(separator=''){

        let newDate = new Date()
        let date = newDate.getFullYear();
 
        
        return `${separator}${date}`
    }

    return (
        <>
            <Header>
                <LogoDiv>
                    {authority === "MASTER" ? (
                        <LogoLink to={"/dashboardAdmin"}>
                            <img src={logo} alt="Não mais pelo main Logo" />
                        </LogoLink>
                    ) : authority === 'USER' ? (
                        <LogoLink to={"/dashboardUser"}>
                            <img src={logo} alt="Não mais pelo main Logo" />
                        </LogoLink>
                    ) : (
                        <LogoLink to={"/"}>
                            <img src={logo} alt="Não mais pelo main Logo" />
                        </LogoLink>
                    )}
                </LogoDiv>
                <h1>{ +getCurrentYear() - 2010} anos no Brasil!</h1>
            </Header>
        </>
    )
}

export default HeaderComponent