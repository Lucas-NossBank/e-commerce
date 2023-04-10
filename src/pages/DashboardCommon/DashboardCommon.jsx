import { useContext, useState } from "react"
import NavBarButton from "../../components/Buttons/NavBarButton/NavBarButton"
import WhatsappIcon from "../../components/Buttons/Whatsapp/Whatsapp"
import FooterSpace from "../../components/FooterSpace/FooterSpace"
import FranquiaCard from "../../components/FranquiaCard/FranquiaCard"
import HeaderComponent from "../../components/Header/HeaderComponent"
import NavBarAside from "../../components/NavBar/NavBar"
import { AuthContext } from "../../contexts/AuthContext"
import { DashboardPage, FilterSpace, ShowCase, ShowCaseSpace } from "./styles"

const DashboardCommon = () => {

    const { filterValue, setFilterValue, franquias, loading } = useContext(AuthContext)
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value.toLowerCase();
        setFilterValue(value);
        const result = franquias.filter((item) =>
        item.cidadeUnidade.toLowerCase().includes(value)
        );
        setFilteredData(result);
    }
    
    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HeaderComponent/>
            <NavBarButton/>
            
            <DashboardPage>
                <NavBarAside/>
                <ShowCase>
                    <ShowCaseSpace>
                        <FilterSpace>
                            <h1>Filtre sua franquia!</h1>
                            <input 
                                type="text" 
                                id="filterInput"
                                value={filterValue}
                                onChange={handleChange}
                            />
                        </FilterSpace>
                        {filterValue ? 
                            filteredData.map((elem) => {
                                return (
                                    <FranquiaCard elem={elem} key={elem.id}/>
                                )
                            
                            }) 
                        : 
                            franquias.map((elem)=> {
                                return (
                                    <FranquiaCard elem={elem} key={elem.id}/>
                                )
                            }) 
                        }
                    </ShowCaseSpace>
                </ShowCase>
            </DashboardPage>
            <FooterSpace/>
            <WhatsappIcon/>
        </>
    )
}

export default DashboardCommon