import { IconContext } from "react-icons"
import { BuyButton, CardLocation, CardLocationMap, ExtraInfoSpace, FooterClock, FooterComment, FooterHeart, Infos, NoticeCard, NoticeCardBody, NoticeCardCategory, NoticeCardDate, NoticeCardDay, NoticeCardFooter, NoticeCardHeader, NoticeCardMonth, NoticeCardName, SessionCardArticle, SessionCardBody, SessionCardFooter, SessionCardHeader } from "./styles"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const SessionCard = ({elem}) => {

    const {like, GiveALike, addToCart, cart} = useContext(AuthContext)

    return (
        <>
            <SessionCardArticle>
                <SessionCardHeader className="headerS" elem={elem}/>

                <SessionCardBody className="cardBodyS">
                    <h2>{elem.name}</h2>
                    <h3>Area: <span>{elem.area}</span></h3>
                    
                    <ExtraInfoSpace>
                        <Infos>
                            <h4>Duração</h4>
                            <h5><span>{elem.duration} min</span></h5>
                        </Infos>
                        <Infos>
                            <h4>Exposição ao sol</h4>
                            <h5><span>{elem.sunExposureTime} min</span></h5>
                        </Infos>

                    </ExtraInfoSpace>

                    <BuyButton onClick={() => addToCart(elem)}>R$ {elem.actualPrice}</BuyButton>
                </SessionCardBody>

                <SessionCardFooter>
                    <FooterHeart onClick={()=> GiveALike()}>
                        <IconContext.Provider
                        value={{
                            color: "var(--color-white-mode)",
                            size: "1.5em",
                        }}
                        >
                        <AiOutlineHeart />
                        </IconContext.Provider>
                        <span>
                            {like} likes
                        </span>
                    </FooterHeart> 
                    <FooterComment>
                    <IconContext.Provider
                        value={{
                            color: "var(--color-white-mode)",
                            size: "1.5em",
                        }}
                        >
                        <AiOutlineComment />
                        </IconContext.Provider>
                        <span>
                            10 atrás
                        </span>
                    </FooterComment>                        
                </SessionCardFooter>
            </SessionCardArticle>
        </>
    )
}

export default SessionCard