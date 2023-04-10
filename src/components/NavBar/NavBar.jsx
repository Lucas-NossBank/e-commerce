import { IconContext } from "react-icons"
import { NavBar, SideBarStyles, UserImage, UserInfoSpace } from "./styles"
import { FaHome } from "react-icons/fa"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import userImg from "../../assets/icons/user-01.gif"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBarAside = () => {

    const { Logout, user, loading, show} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation(); 

    const changePage = (pathname) => {
        const currentPathname = location.pathname;
        if (currentPathname !== pathname) {
          navigate(pathname);
        }
      };

    useEffect(() => {
    const currentPathname = location.pathname;
    const editSessionPathname = "/dashboardAdmin/editSession";
    if (currentPathname.startsWith(editSessionPathname) && currentPathname !== editSessionPathname) {
    navigate(editSessionPathname);
    }
}, [location.pathname, navigate]);

    const sideBarStyles = {
        fontFamily: "var(--font-primary-nunito)",
        color: "var(--color-senary)",
        fontWeight: "var(--font-weight-700)",
    };

    if(loading) {
        return null;
    }

    return (
        <>
            <NavBar show={show}>
                    <UserInfoSpace>
                        <UserImage>
                            <img src={user.image ? user.image : userImg} alt="User Profile Image"/>
                        </UserImage>
                        <h1>Bem-vindo! <span>{user.nickname}</span></h1>
                    </UserInfoSpace>
                    <SideBarStyles backgroundColor="var(--color-primary)" rootStyles={sideBarStyles}>
                    <Menu>
                        <SubMenu label="Início">
                        <MenuItem icon={<IconContext.Provider
                            value={{
                                color: "var(--color-senary)",
                                size: "1.2em",
                            }}
                            >
                            <FaHome/>
                            </IconContext.Provider>} onClick={() => changePage("/dashboardUser")}> Home </MenuItem>
                        <MenuItem> Lista Franquias </MenuItem>
                        </SubMenu>
                        <SubMenu label="Sessões">
                        <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Listar Sessões </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardUser/listBuyedSessions")}>
                            S. Compradas
                        </MenuItem>
                        </SubMenu>
                        <SubMenu label="Documentação">
                        <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Doc Pessoal </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Apostilas </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Termos de Uso </MenuItem>
                        </SubMenu>
                        <SubMenu label="Usuário">
                            <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Editar Usuário </MenuItem>
                            <MenuItem onClick={()=> changePage("/dashboardUser/listSession")}> Excluir Usuário </MenuItem>
                        </SubMenu>
                        <MenuItem> Agenda </MenuItem>
                        <MenuItem onClick={() => Logout()}> Sair </MenuItem>
                    </Menu>
                    </SideBarStyles>
     
            </NavBar>
        </>
    )
}

export default NavBarAside