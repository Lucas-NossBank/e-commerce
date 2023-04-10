import { IconContext } from "react-icons"
import { WhatsappButton } from "./styles"
import { BsWhatsapp } from "react-icons/bs"
import { Navigate } from "react-router-dom"

const WhatsappIcon = () => {


    return(

        <>
            <WhatsappButton to={"https://whts.co/naomaispelo"}>
                <IconContext.Provider
                    value={{
                        color: "var(--color-black-mode)",
                        size: "1.8em",
                    }}
                    >
                    <BsWhatsapp />
                </IconContext.Provider>
            </WhatsappButton>
        </>

    )

}

export default WhatsappIcon