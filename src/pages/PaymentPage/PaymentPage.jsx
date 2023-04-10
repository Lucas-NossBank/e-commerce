import FooterSpace from "../../components/FooterSpace/FooterSpace"
import HeaderComponent from "../../components/Header/HeaderComponent"
import NavBarAside from "../../components/NavBar/NavBar"
import { FormSpacePayment, PaymentMain, PaymentSection, PixBox, QrCodeImg, QrCodeSpace } from "./styles"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PaymentCheckout from "../../components/PaymentCheckout/PaymentCheckout";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import WhatsappIcon from "../../components/Buttons/Whatsapp/Whatsapp";


const PaymentPage = () => {

    const location = useLocation()
    const {groupId, groupAmount, cartTotal} = location.state

    const cartTotalPrice = cartTotal.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    const { Payment, link, qrcodelink } = useContext(AuthContext);

    const formSchema = yup.object().shape({
        numberId: yup.array().default(groupId),
        amount: yup.array().default(groupAmount),
    });

    const handleCopy = () => {
        toast.success(
            "Copiado com sucesso!",
             {
                icon: "📋",
                style: {
                fontFamily: "var(--font-primary-nunito)",
                fontWeight: "var(--font-weight-700)",
                borderRadius: "10px",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-black-mode)",
                width: "250px",
                height: "60px",
                },
             },
           );
        navigator.clipboard.writeText(link)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    return (
        <>
            <HeaderComponent/>
            <PaymentMain>
                <NavBarAside/>
                <PaymentSection>
                    <PixBox>
                        <FormSpacePayment>
                            <h1>Preço total da compra: R$ {cartTotalPrice},00</h1>
                            <form onSubmit={handleSubmit(Payment)}>
                                <input 
                                type="number"
                                id="numberId"
                                placeholder={`Ids das sessões: ${groupId}`}
                                disabled
                                {...register("numberId", {defaultValue: groupId})} />
                                <p>{errors.numberId?.message}</p>
                                <input 
                                type="number"
                                id="amount"
                                placeholder={`Total de sessões compradas: ${groupAmount.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue;
                                }, 0)}`}
                                disabled
                                {...register("amount", {defaultValue: groupAmount})} />
                                <p>{errors.amount?.message}</p>
                                <button>Gerar QrCode</button>

                                <a href={qrcodelink} target="_blank" download={`qrcode.png`}>
                                    Baixar QrCode
                                </a>
                            </form>
                            <div onClick={handleCopy}>
                                <h2>Pix copia e cola (Copiar código)</h2> 
                            </div>
                        </FormSpacePayment>
                        <QrCodeSpace>
                            {link ? <QrCodeImg value={link} /> : <h1>Aperte Gerar QrCode</h1>}
                        </QrCodeSpace>
                    </PixBox>
                    <PaymentCheckout/>
                </PaymentSection>
            </PaymentMain>
            <FooterSpace/>
            <WhatsappIcon/>
        </>
    )
}

export default PaymentPage