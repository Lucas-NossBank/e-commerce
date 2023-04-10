import { useContext, useState } from "react"
import FooterSpace from "../../components/FooterSpace/FooterSpace"
import FranquiaCard from "../../components/FranquiaCard/FranquiaCard"
import HeaderComponent from "../../components/Header/HeaderComponent"
import NavBarAsideAdmin from "../../components/NavBarAdmin/NavBarAdmin"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom";
import { DashboardAdminPage, FilterSpace, ShowCase, ShowCaseSpace } from "./styles"

const DashboardAdmin = () => {

    const { filterValue, setFilterValue, franquias, loading, user} = useContext(AuthContext)
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
            {user ? (
                <>
                <HeaderComponent/>
                    <DashboardAdminPage>
                        <NavBarAsideAdmin/>
                        <ShowCase>
                            <ShowCaseSpace>
                                <FilterSpace>
                                    <h1>Filtre sua franquia!</h1>
                                    <input 
                                        type="text" 
                                        id="filterInput"
                                        value={filterValue}
                                        onChange={handleChange}
                                        disabled
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
                    </DashboardAdminPage>
                    <FooterSpace/>
                </>
            ) : (
                <Navigate to="/" replace />
            )}
            
        </>
    )
}

export default DashboardAdmin