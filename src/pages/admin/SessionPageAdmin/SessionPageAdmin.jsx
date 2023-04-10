import { useContext } from "react"
import { useForm } from "react-hook-form"
import FooterSpace from "../../../components/FooterSpace/FooterSpace"
import HeaderComponent from "../../../components/Header/HeaderComponent"
import NavBarAsideAdmin from "../../../components/NavBarAdmin/NavBarAdmin"
import { AuthContext } from "../../../contexts/AuthContext"
import { DataSpaceInput, EditableSpace, EditSessionForm, EditSessionFormSection, EditSessionSpace, ImageDivExample, ModelExample, SessionAdmin, UploadImageForm} from "./styles"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SessionPageAdmin = () => {

    const { SubmitSessionCreation, SubmitSessionImage, imageFile, loading } = useContext(AuthContext);

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome da Sessão é obrigatório"),
        originalPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Preço original é obrigatório"),
        actualPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Preço atual é obrigatório"),
        area: yup.string().required("Area da depilação é obrigatório"),
        duration: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Tempo de duração da sessão é obrigatório"),
        sessionInterval: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Tempo de intervalo é obrigatório"),
        sunExposureTime: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Tempo de exposição ao sol é obrigatório")
    });

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        SubmitSessionImage(file)
      };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    
    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HeaderComponent/>
            <SessionAdmin>
                <NavBarAsideAdmin/>
                <EditSessionSpace>
                    <EditableSpace>

                        <UploadImageForm>
                            <label htmlFor="file-input" className="file-label">
                                Selecione uma imagem para a Sessão
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                onChange={handleFileUpload}
                                className="file-input"
                            />
                        </UploadImageForm>

                        
                        <EditSessionFormSection>
                            <EditSessionForm onSubmit={handleSubmit(SubmitSessionCreation)}>
                            <h2>Crie uma Sessão</h2>
                            <h3>Simples e de forma prática</h3>

                            <DataSpaceInput>
                                <label>Nome da Sessão</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Digite aqui o nome da Sessão"
                                    {...register("name")}
                                />
                                <p>{errors.name?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Preço Original</label>
                                <input
                                    type="number"
                                    id="originalPrice"
                                    placeholder="Digite aqui o preço original"
                                    {...register("originalPrice")}
                                />
                                <p>{errors.originalPrice?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Preço Atual</label>
                                <input
                                    type="number"
                                    id="actualPrice"
                                    placeholder="Digite aqui o preço atual"
                                    {...register("actualPrice")}
                                />
                                <p>{errors.actualPrice?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Area da Depilação</label>
                                <input
                                    type="string"
                                    id="area"
                                    placeholder="Digite aqui a Área da depilação"
                                    {...register("area")}
                                />
                                <p>{errors.area?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Duração da Sessão (min)</label>
                                <input
                                    type="number"
                                    id="duration"
                                    placeholder="Informe a duração da sessão (min)"
                                    {...register("duration")}
                                />
                                <p>{errors.duration?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Tempo de intervalo entre sessões (dias)</label>
                                <input
                                    type="number"
                                    id="sessionInterval"
                                    placeholder="Digite o tempo de intevalo entre sessões (dias)"
                                    {...register("sessionInterval")}
                                />
                                <p>{errors.sessionInterval?.message}</p>
                            </DataSpaceInput>

                            <DataSpaceInput>
                                <label>Tempo de exposição ao sol (dias)</label>
                                <input
                                    type="number"
                                    id="sunExposureTime"
                                    placeholder="Digite o tempo não exposição ao sol (dias)"
                                    {...register("sunExposureTime")}
                                />
                                <p>{errors.sunExposureTime?.message}</p>
                            </DataSpaceInput>

                            <button type="submit">Cadastrar</button>

                            </EditSessionForm>
                        </EditSessionFormSection>
                    </EditableSpace>
                    {/* <ModelExample>
                        <ImageDivExample>
                        <div>
                            {imageFile ? (
                                <img src={imageFile} alt="imagem" />
                            ) : (
                                <h1>Espaço para a imagem</h1>
                            )}
                        </div>
                        </ImageDivExample>
                    </ModelExample> */}
                </EditSessionSpace>
               
            </SessionAdmin>
            <FooterSpace/>
        </>
    )
}

export default SessionPageAdmin