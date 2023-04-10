import { IconContext } from "react-icons"
import { NavBarAdmin, UserImage, UserInfoSpace } from "./styles"
import { FaHome } from "react-icons/fa"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import userImg from "../../assets/icons/user-01.gif"
import {useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBarAsideAdmin = () => {

    const { Logout, user, loading} = useContext(AuthContext)
    

    const navigate = useNavigate();
    const location = useLocation(); 

    const sideBarStyles = {
        fontFamily: "var(--font-primary-nunito)",
        color: "var(--color-senary)",
        fontWeight: "var(--font-weight-700)",
    };

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

    if(loading) {
        return null;
    }

    return (
        <>
            <NavBarAdmin>
                    <UserInfoSpace>
                        <UserImage>
                            <img src={user.image ? user.image : userImg} alt="User Profile Image"/>
                        </UserImage>
                        <h1>Bem-vindo! <span>{user.nickname}</span></h1>
                    </UserInfoSpace>
                    <Sidebar width="13vw" backgroundColor="var(--color-primary)" rootStyles={sideBarStyles}>
                    <Menu>
                        <SubMenu label="Início">
                        <MenuItem icon={<IconContext.Provider
                            value={{
                                color: "var(--color-senary)",
                                size: "1.2em",
                            }}
                            >
                            <FaHome />
                            </IconContext.Provider>}> Home </MenuItem>
                        <MenuItem> Lista Franquias </MenuItem>
                        </SubMenu>
                        <SubMenu label="Sessões">
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Listar Sessões </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/editSession")}>
                            Criar Sessões
                        </MenuItem>
                        </SubMenu>
                        <SubMenu label="Documentação">
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Doc desenvolvimento </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Doc Juridico </MenuItem>
                        </SubMenu>
                        <SubMenu label="Usuário">
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Listar Usuários </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Editar Usuário </MenuItem>
                        </SubMenu>
                        <SubMenu label="Financeiro">
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Analítico </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Estatisticas </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Royalties </MenuItem>
                        <MenuItem onClick={()=> changePage("/dashboardAdmin/listSession")}> Gráficos </MenuItem>
                        </SubMenu >
                        <MenuItem> Agenda </MenuItem>
                        <MenuItem onClick={() => Logout()}> Sair </MenuItem>
                    </Menu>
                    </Sidebar>
            </NavBarAdmin>
        </>
    )
}

export default NavBarAsideAdmin