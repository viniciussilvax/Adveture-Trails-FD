import { useContext, useState } from "react";
import { Button, ButtonsContainer, InputContainer, InputDoubleContainer, RegisterContainer, TitleRegister } from "./RegisterPageStyle";
import { globalContext } from "../../context/globalContext"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

    const {register, 
        handleSubmit,
        formState: { errors}
        
    } = useForm()

    const { trails, setTrails } = useContext(globalContext)

    const navigate = useNavigate()

    function onSubmit (newTrail) {
        setTrails([...trails, newTrail])
        navigate('/explorar-trilhas')
    }

    return (
        <RegisterContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TitleRegister>Cadastro de nova trilha</TitleRegister>
                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="name">Nome da trilha</label>
                    <input
                        type="text"
                        placeholder="digite o nome da trilha"
                        {
                            ...register("name",
                            {required: "Por favor, insira o nome da trilha"}
                        )
                            
                        }
                    />
                {errors.name && <p>{errors.name.message}</p>}
                </InputContainer>

                <InputDoubleContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="duration">Duração estimada (min)</label>
                        <input
                            type="text"
                            placeholder="digite a duração em minutos"
                            required
                            {
                                ...register("duration",
                                {required: "Por favor, insira a duração da trilha"}
                            )
                                
                            }
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="distance">Trajeto (km)</label>
                        <input
                            type="text"
                            placeholder="digite a distância em km"
                            required
                            {
                                ...register("distance",
                                {required: "Por favor, insira a duração da trilha"}
                            )
                                
                            }
                        />
                    </InputContainer>
                </InputDoubleContainer>
                   
                <InputDoubleContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="city">Cidade</label>
                        <input
                            type="text"
                            placeholder="digite o nome da cidade"
                            required
                            {
                                ...register("city",
                                {required: "Por favor, insira a cidade da trilha"}
                            )
                                
                            }
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="state">Estado</label>
                        <select
                            name="state"
                            required
                            {
                                ...register("state",
                                {required: "Por favor, insira a duração da trilha"}
                            )
                                
                            }
                        >
                            <option value="SC">SC</option>
                            <option value="RS">RS</option>
                            <option value="PR">PR</option>
                        </select>
                    </InputContainer>
                </InputDoubleContainer>

                <InputDoubleContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="user">Nome completo usuário</label>
                        <input
                            type="created"
                            placeholder="seu nome completo"
                            required
                            {
                                ...register("created",
                                {required: "Por favor, insira a duração da trilha"}
                            )
                                
                            }
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="difficulty">Dificuldade</label>
                        <select
                            name="difficulty"
                            required
                            {
                                ...register("difficulty",
                                {required: "Por favor, insira a duração da trilha"}
                            )
                                
                            }
                        >
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediario">Indermediário</option>
                            <option value="avancado">Avançado</option>
                        </select>
                    </InputContainer>
                </InputDoubleContainer>

                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="type">Tipo de trilha</label>
                    <select
                        name="type"
                        required
                        {
                            ...register("type",
                            {required: "Por favor, insira a duração da trilha"}
                        )
                            
                        }
                    >
                        <option value="caminhada">Caminhada / trekking</option>
                        <option value="corrida">Corrida</option>
                        <option value="escalada">Escalada</option>
                    </select>
                </InputContainer>
                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="imageUrl">URL imagem da trilha</label>
                    <input
                        type="text"
                        placeholder="insira um link de uma imagem da trilha"
                        {
                            ...register("imageUrl",
                            {required: "Por favor, insira a duração da trilha"}
                        )
                            
                        }

                    />
                </InputContainer>

                <ButtonsContainer>
                    <Button
                        style={{
                            width: "111px",
                            border: "1px solid #504908",
                            backgroundColor: "#504908",
                            color: "white"
                        }}
                    >Cadastrar
                    </Button>

                    <Button
                        style={{
                            width: "80px",
                            border: "2px solid #504908",
                            backgroundColor: "transparent",
                            color: "#504908"
                        }}
                        onClick={() => navigate('/')}
                    >Voltar</Button>
                </ButtonsContainer>
            </form>
        </RegisterContainer>
    )
}
