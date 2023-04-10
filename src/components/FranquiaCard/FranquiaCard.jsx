import { IconContext } from "react-icons"
import banner01 from "../../assets/img/promo_banner.jpg"
import { CardLocation, CardLocationMap, FooterClock, FooterComment, NoticeCard, NoticeCardBody, NoticeCardCategory, NoticeCardDate, NoticeCardDay, NoticeCardFooter, NoticeCardHeader, NoticeCardMonth, NoticeCardName } from "./styles"
import { ImLocation2 } from "react-icons/im"
import { BsClockHistory } from "react-icons/bs"
import { AiOutlineComment } from "react-icons/ai"
import { Link } from "react-router-dom"

const FranquiaCard = ({elem}) => {

    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
 
        
        return `${separator}${date}`
        }

    function getCurrentMonth(separator=''){

        let newDate = new Date()
 
        let month = newDate.getMonth() + 1;
  
        
        return `${separator}${month<10?`0${month}`:`${month}`}`
        }

    return (
        <>
            <NoticeCard>
                <NoticeCardHeader className="headerS">
                    <Link to={`sessions/${elem.id}`} state={{ unit: elem}}>
                        <img src={banner01} alt="blabla" className="imageS"/>
                    </Link>
                </NoticeCardHeader>
                <NoticeCardDate>
                    <NoticeCardDay>{getCurrentDate()}</NoticeCardDay>
                    <br/>
                    <NoticeCardMonth>{getCurrentMonth()}</NoticeCardMonth>
                </NoticeCardDate>

                <CardLocation>
                    <CardLocationMap to={elem.mapa} target="_blank">
                        <IconContext.Provider
                            value={{
                                color: "var(--color-white-mode)",
                                size: "1.2em",
                            }}
                            >
                            <ImLocation2 />
                        </IconContext.Provider>
                    </CardLocationMap>
                </CardLocation>

                <NoticeCardBody className="cardBodyS">
                    <NoticeCardCategory>
                        <h2>{elem.estadoUnidade}</h2>
                    </NoticeCardCategory>
                    <NoticeCardName>
                        <h2>{elem.nomeUnidade}</h2>
                    </NoticeCardName>
                    <h2><Link to={`sessions/${elem.id}`} state={{unit: elem}}>{elem.bairroUnidade} - {elem.cidadeUnidade}</Link></h2>
                    <h3>{elem.telefone1 ? elem.telefone1 : elem.telefone2} | {elem.whatsapp1 ? elem.whatsapp1 : elem.whatsapp2}</h3>
                    <p className="cardPS">5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!</p>
                </NoticeCardBody>
                <NoticeCardFooter>
                    <FooterClock>
                        <IconContext.Provider
                        value={{
                            color: "var(--color-white-mode)",
                            size: "1.5em",
                        }}
                        >
                        <BsClockHistory />
                        </IconContext.Provider>
                        <span>
                            Aberto
                        </span>
                    </FooterClock> 
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
                            10 mins ago
                        </span>
                    </FooterComment>                        
                </NoticeCardFooter>
            </NoticeCard>
        </>
    )
}

export default FranquiaCard