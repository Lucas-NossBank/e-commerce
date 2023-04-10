import { useContext } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent"
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackBtn, DataSpaceInput, DataSpecialInput, DataStructure, FormStructure, RegisterSection, RegisterTitle } from "./styles";
import WhatsappIcon from "../../components/Buttons/Whatsapp/Whatsapp";

const RegisterPage = () => {
    const { SubmitFunction } = useContext(AuthContext);

    const formSchema = yup.object().shape({
        name: yup.string().notRequired(),
        nickname: yup.string().notRequired(),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup
        .string()
        // .matches(
        //     /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        //     "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
        // )
        .required("escolha uma senha"),
        cpf: yup.string().notRequired(),
        cellphone: yup.string().notRequired(),
        foreignerDocument: yup.string().notRequired(),
    });

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
            <RegisterSection>
                <RegisterTitle>
                <BackBtn to={"/"}>Voltar</BackBtn>
                </RegisterTitle>

                <DataStructure>
                <FormStructure onSubmit={handleSubmit(SubmitFunction)}>
                    <h2>Crie sua conta</h2>

                    <DataSpaceInput>
                        <label>Nome *</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite aqui seu nome"
                            {...register("name")}
                        />
                        <p>{errors.name?.message}</p>
                    </DataSpaceInput>

                    <DataSpaceInput>
                        <label>Nickname *</label>
                        <input
                            type="text"
                            id="nickname"
                            placeholder="Digite aqui seu usuário"
                            {...register("nickname")}
                        />
                        <p>{errors.nickname?.message}</p>
                    </DataSpaceInput>

                    <DataSpaceInput>
                        <label>Email *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite aqui seu email"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </DataSpaceInput>

                    <DataSpaceInput>
                        <label>Senha *</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite aqui sua senha"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </DataSpaceInput>

                    <DataSpaceInput>
                        <label>Cpf *</label>
                        <input
                            type="string"
                            id="cpfNumber"
                            placeholder="Digite seu número de CPF"
                            {...register("cpf")}
                        />
                        <p>{errors.cpf?.message}</p>
                    </DataSpaceInput>

                    <DataSpaceInput>
                        <label>Telefone *</label>
                        <input
                            type="string"
                            id="cellphone"
                            placeholder="99-99999-9999"
                            // pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                            {...register("cellphone")}
                        />
                        <p>{errors.cellphone?.message}</p>
                    </DataSpaceInput>

                    {/* <DataSpaceInput>
                        <label>Documento Estrangeiro</label>
                        <input
                            type="string"
                            id="foreignerDocument"
                            placeholder="Digite seu número RNE"
                            {...register("foreignerDocument")}
                        />
                        <p>{errors.foreignerDocument?.message}</p>
                    </DataSpaceInput> */}

                    <DataSpecialInput>
                        <input
                            type="checkbox"
                            id="acceptTerms"
                        />
                        <label>Aceito os Termos de uso *</label>
                        {/* <p>{errors.acceptTerms?.message}</p> */}
                    </DataSpecialInput>


                    <button type="submit">Cadastrar</button>
                </FormStructure>
                </DataStructure>
            </RegisterSection>
            <WhatsappIcon/>
        </>
    )
}

export default RegisterPage