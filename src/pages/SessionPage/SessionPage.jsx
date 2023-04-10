import HeaderComponent from "../../components/Header/HeaderComponent"
import NavBarAside from "../../components/NavBar/NavBar"
import { ButtonFilterSpace, CartEmpty, FilterButton, FilterSessionSpace, FranchiseCartSpace, FranchiseImgDiv, FranchiseInfo, FranchiseMain, FranchiseShowcase,  ResetFilterButton,  SessionCart, SessionCartCard, SessionCartInfo, SessionFinalPrice, SessionMain, SessionShowcase, SessioShowCaseDiv, TelDiv, ToPaymentButton, TrashIcon } from "./styles"
import banner01 from "../../assets/img/promo_banner.jpg"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import SessionCard from "../../components/SessionCard/SessionCard"
import { IconContext } from "react-icons"
import { BsTrash } from "react-icons/bs"
import FooterSpace from "../../components/FooterSpace/FooterSpace"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithLabel from "../../components/Buttons/FormInput/FormInput"
import WhatsappIcon from "../../components/Buttons/Whatsapp/Whatsapp"

const SessionPage = () => {

    const location = useLocation()
    const {unit} = location.state

    const { sessoes, loading, cart, filteredCart, setFilteredCart, removeToCart, value, SubmitFilter} = useContext(AuthContext)

    const formSchema = yup.object().shape({
        name: yup.string().notRequired(),
        area: yup.string().notRequired(),
        minPrice: yup.string().notRequired(),
        maxPrice: yup.string().notRequired(),
    });

    const handleClick = (e) => {
        if (cart.length === 0) {
          e.preventDefault()
        }
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <HeaderComponent/>
            <SessionMain>
                <NavBarAside/>
                <FranchiseMain>
                    <FranchiseShowcase>
                        <FranchiseImgDiv>
                            <img src={banner01} alt="franchise img" />
                            <h1>Unidade: <span>{unit.nomeUnidade}</span></h1>
                            <TelDiv>
                                <h2><span>Tel 01:</span> {(unit.telefone1) ? unit.telefone1 : "Sem contato"} /</h2>
                                <h2>&nbsp;<span>Tel 02:</span> {(unit.telefone2) ? unit.telefone2 : " Sem contato"}</h2>
                            </TelDiv>

                            <TelDiv>
                                <h2><span>Wp 01:</span> {(unit.whatsapp1) ? unit.whatsapp1 : "Sem contato" } /</h2>
                                <h2>&nbsp;<span>Wp 02:</span> {(unit.whatsapp2) ? unit.whatsapp2 : " Sem contato" }</h2>        
                            </TelDiv>
                        </FranchiseImgDiv>

                        <FranchiseInfo>
                            <h1>{unit.bairroUnidade} - {unit.cidadeUnidade} - {unit.estadoUnidade}</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                        </FranchiseInfo>

                        <FranchiseCartSpace>
                            <SessionCart>
                                {cart.length > 0 ? (
                                     cart.map((elem)=> {
                                        return (
                                            <SessionCartCard key={elem.id}>
                                            <SessionCartInfo>
                                                <h1>Sessão: {elem.itemName}</h1>
                                                <h1>Qtde: {elem.quantity}</h1>
                                            </SessionCartInfo>
                                            <TrashIcon onClick={() => removeToCart(elem.id)}>
                                                <IconContext.Provider
                                                    value={{
                                                        color: "var(--color-black-mode)",
                                                        size: "1.5em",
                                                    }}
                                                    >
                                                    <BsTrash />
                                                </IconContext.Provider>
                                            </TrashIcon>
                                        </SessionCartCard>
                                        )
                                    })
                                )
                                :

                                <CartEmpty>
                                    <h2>Carrinho vazio</h2>
                                </CartEmpty>       
                                }
                            </SessionCart>
                                <SessionFinalPrice>
                                    <h2>Valor Total:</h2>
                                    <p>R$ {value}</p>
                                    {cart.length > 0 ? (
                                        <ToPaymentButton 
                                        to={"payment"} 
                                        state={{groupId: cart.map((el) => el.id), groupAmount: cart.map((el) => el.quantity),
                                        cartTotal: cart.map((el) => el.price * el.quantity)}}
                                        onClick={handleClick}
                                        disabled={cart.length===0}
                                    >Pagar</ToPaymentButton>
                                    ) :
                                    <span>Vazio</span>}
                                </SessionFinalPrice>

                        </FranchiseCartSpace>
                    </FranchiseShowcase>
                    <SessionShowcase>
                        <FilterSessionSpace>
                            <form onSubmit={handleSubmit(SubmitFilter)}>
                                <InputWithLabel 
                                    label="Filtrar Sessão" 
                                    type="text"
                                    name="name"
                                    control={control}
                                    />
                                    

                                <InputWithLabel 
                                    label="Filtrar Area" 
                                    type="text"
                                    name="area"
                                    control={control}
                                    />
                                <p>{errors.area?.message}</p>

                                <InputWithLabel 
                                    label="Filtrar Preço min" 
                                    type="number"
                                    name="minPrice"
                                    control={control}
                                    />
                                <p>{errors.minPrice?.message}</p>
                                
                                <InputWithLabel 
                                    label="Filtrar Preço max" 
                                    type="number"
                                    name="maxPrice"
                                    control={control}
                                    />
                                <p>{errors.maxPrice?.message}</p>

                                <ButtonFilterSpace>
                                    <FilterButton type="submit">Enviar</FilterButton>
                                </ButtonFilterSpace>
                                
                            </form>
                                <ResetFilterButton onClick={() => setFilteredCart(sessoes)}>Reset</ResetFilterButton>

                        </FilterSessionSpace>
                        <SessioShowCaseDiv>

                            {filteredCart.length > 0 ? 
                                filteredCart.map((elem) => {
                                    return (
                                        <SessionCard elem={elem} key={elem.id}/>
                                    )
                                })
                            :
                            sessoes.map((elem) => {
                                return (
                                    <SessionCard elem={elem} key={elem.id}/>
                                )
                            })
                            }
                        </SessioShowCaseDiv>
                    </SessionShowcase>
                </FranchiseMain>
            </SessionMain>
            <FooterSpace/>
            <WhatsappIcon/>
        </>
    )
}

export default SessionPage