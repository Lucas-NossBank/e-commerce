import { IconContext } from "react-icons";
import {
  AddressDiv,
  BillingAddress,
  BoxInner1,
  BoxInner2,
  CardDetails,
  CardDetailsInputDates,
  CardDetailsInputDiv,
  CardHolderName,
  CarouselDiv,
  CheckoutCard,
  CheckoutCardSpace,
  CheckoutCardTitle,
  CheckoutContainer,
  CheckoutTitle,
  EmailSpace,
  FirstBox,
  FormSpace,
  PayButton,
  PaymentDetails,
  SecondBox,
  StateDiv,
  Subtotal,
  SwiperImgDiv,
  TitleDiv,
  UserName,
  VATCheck,
  VATNumber,
} from "./styles";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination,  Autoplay, Scrollbar } from "swiper";
import banner01 from "../../assets/img/tratamento-depilacao-1.jpg"

const PaymentCheckout = () => {
  const { LoginUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    cardDetails: yup
      .string()
      .required("Detalhes do cartão obrigatório")
      .matches(/^4[0-9]{15}$/, "Deve conter os números do cartão"),
    cardDetailsDate: yup
      .string()
      .required("Detalhes do cartão obrigatório")
      .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Data incorreta"),
    cardDetailsCVV: yup.string().required("Detalhes do cartão obrigatório"),
    cardHolder: yup.string().required("nome do portador obrigatório"),
    AddressCountry: yup.string().required("Endereço obrigatório"),
    AddressZip: yup.string().required("Endereço obrigatório"),
    AddressState: yup.string().required("Endereço obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const test = (data) => {
    console.log(data);
  };

  return (
    <>
      <CheckoutContainer>
        <FirstBox>
          <UserName>
            <img
              src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="user pic"
            />
            <h2>{}Lucas</h2>
          </UserName>
          <BoxInner1>
            <CheckoutTitle>
              <h2>Carrinho de Compras</h2>
              <p>
                <span>R$</span>33.00+
              </p>
            </CheckoutTitle>

            <CarouselDiv>
                <Swiper
                    modules={[Autoplay, Pagination, Scrollbar]}
                    slidesPerView={1}
                    scrollbar={{
                        hide: true
                    }}
                    autoplay={{
                        delay: 3500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                        }}
                    loop
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SwiperImgDiv>
                            <img src={banner01} alt="#" />
                        </SwiperImgDiv>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperImgDiv>
                            <img src={banner01} alt="#" />
                        </SwiperImgDiv>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperImgDiv>
                            <img src={banner01} alt="#" />
                        </SwiperImgDiv>
                    </SwiperSlide>
                </Swiper>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                    sed officiis odio
                </p>

            </CarouselDiv>
         
            <CheckoutCardSpace>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
              <CheckoutCard>
                <IconContext.Provider
                  value={{
                    color: "var(--color-black-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineCheckCircle />
                  <CheckoutCardTitle>
                    <h1>Product Teste</h1>
                    <h2>10x Release 2021</h2>
                  </CheckoutCardTitle>
                  <span>R$30,00</span>
                </IconContext.Provider>
              </CheckoutCard>
            </CheckoutCardSpace>
          </BoxInner1>
        </FirstBox>
        <SecondBox>
          <BoxInner2>
            <PaymentDetails>
              <h1>Detalhes de Pagamento</h1>
              <p>Complete sua compra com algumas informações adicionais</p>
            </PaymentDetails>
            <FormSpace onSubmit={handleSubmit(test)}>
              <EmailSpace>
                <h2>E-mail</h2>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu e-mail"
                  {...register("email")}
                />
              </EmailSpace>
              <CardDetails>
                <h2>Detalhes do cartão</h2>
                <CardDetailsInputDiv>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-black-mode)",
                      size: "1.5em",
                    }}
                  >
                    <FaCcVisa />
                  </IconContext.Provider>
                  <input
                    type="text"
                    placeholder="Card Details"
                    id="cardDetails"
                    {...register("cardDetails")}
                  />
                  <CardDetailsInputDates>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      id="cardDetailsDate"
                      {...register("cardDetailsDate")}
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      id="cardDetailsCVV"
                      {...register("cardDetailsCVV")}
                    />
                  </CardDetailsInputDates>
                </CardDetailsInputDiv>
                <CardHolderName>
                  <h2>Nome no Cartão</h2>
                  <input
                    type="text"
                    id="cardHolder"
                    {...register("cardHolder")}
                  />
                </CardHolderName>
                <BillingAddress>
                  <h2>Endereço de Cobrança</h2>
                  <AddressDiv>
                    <select id="AddressCountry" {...register("AddressCountry")}>
                      <option hidden>Brasil</option>
                      <option>India</option>
                      <option>Australia</option>
                      <option>Canada</option>
                    </select>
                    <StateDiv>
                      <input
                        type="text"
                        placeholder="ZIP"
                        id="AddressZip"
                        {...register("AddressZip")}
                      />
                      <input
                        type="text"
                        placeholder="State"
                        id="AddressState"
                        {...register("AddressState")}
                      />
                    </StateDiv>
                  </AddressDiv>
                  <VATNumber>
                    <h2>Taxas</h2>
                    <VATCheck>
                      <input type="text" id="VAT" {...register("VAT")} />
                      <IconContext.Provider
                        value={{
                          color: "var(--color-black-mode)",
                          size: "1.5em",
                        }}
                      >
                        <BsCheck2Circle />
                      </IconContext.Provider>
                    </VATCheck>
                  </VATNumber>
                  <Subtotal>
                    <div>
                      <h3>Subtotal</h3>
                      <p>
                        <span>R$</span> 33.00
                      </p>
                    </div>
                    <div>
                      <h3>
                        VAT<span>(20%)</span>
                      </h3>
                      <p>
                        <span>R$</span> 2.80
                      </p>
                    </div>
                    <div>
                      <h3>Total</h3>
                      <p>
                        <span>R$</span> 35.80
                      </p>
                    </div>
                  </Subtotal>
                </BillingAddress>
              </CardDetails>
              <PayButton type="submit">Pagar</PayButton>
            </FormSpace>
          </BoxInner2>
        </SecondBox>
      </CheckoutContainer>
    </>
  );
};

export default PaymentCheckout;
