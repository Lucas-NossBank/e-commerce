import { useState } from "react";
import { useContext } from "react";
import FooterSpace from "../../components/FooterSpace/FooterSpace";
import HeaderComponent from "../../components/Header/HeaderComponent";
import NavBarAside from "../../components/NavBar/NavBar";
import { AuthContext } from "../../contexts/AuthContext";
import { ListBuyedPage } from "./styles";


const ListBuyedSessions = () => {

    const { loading, user } = useContext(AuthContext)

    const [filteredData, setFilteredData] = useState([]);

    // const handleChange = (event) => {
    //     const value = event.target.value.toLowerCase();
    //     setFilterValue(value);
    //     const result = franquias.filter((item) =>
    //     item.cidadeUnidade.toLowerCase().includes(value)
    //     );
    //     setFilteredData(result);
    // }

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HeaderComponent/>
            <ListBuyedPage>
                <NavBarAside/>
                
            </ListBuyedPage>
            <FooterSpace/>
        </>
    )
}

export default ListBuyedSessions