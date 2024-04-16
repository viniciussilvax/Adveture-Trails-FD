import { useContext, useState } from "react";
import { Button, ButtonsContainer, InputContainer, InputDoubleContainer, RegisterContainer, TitleRegister } from "./RegisterPageStyle";
import { globalContext } from "../../context/globalContext"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const { trails, setTrails } = useContext(globalContext)

    const [name, setName] = useState("")
    const [duration, setDuration] = useState("")
    const [route, setRoute] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [created, setCreated] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [type, setType] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const navigate = useNavigate()

    function regiter(e) {
        e.preventDefault()
        const newTrails = { name, duration, route, city, state, created, difficulty, imageUrl }

        setTrails([...trails, newTrails])

        navigate('/explorar-trilhas')
    }

    return (
        <RegisterContainer>
            <form onSubmit={regiter}>
                <TitleRegister>Cadastro de nova trilha</TitleRegister>
                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="name">Nome da trilha</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="digite o nome da trilha"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </InputContainer>

                <InputDoubleContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="duration">Duração estimada (min)</label>
                        <input
                            type="text"
                            id="duration"
                            placeholder="digite a duração em minutos"
                            required

                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="route">Trajeto (km)</label>
                        <input
                            type="text"
                            id="route"
                            placeholder="digite a distância em km"
                            required

                            value={route}
                            onChange={(e) => setRoute(e.target.value)}
                        />
                    </InputContainer>
                </InputDoubleContainer>

                <InputDoubleContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="city">Cidade</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="digite o nome da cidade"
                            required

                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="state">Estado</label>
                        <select
                            name="state"
                            id="state"
                            required

                            value={state}
                            onChange={(e) => setState(e.target.value)}
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
                            type="text"
                            id="user"
                            placeholder="seu nome completo"
                            required

                            value={created}
                            onChange={(e) => setCreated(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer style={{ width: "286px" }}>
                        <label htmlFor="difficulty">Dificuldade</label>
                        <select
                            name="difficulty"
                            id="difficulty"
                            required

                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediario">Indermediário</option>
                            <option value="avancado">Avançado</option>
                        </select>
                    </InputContainer>
                </InputDoubleContainer>

                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="trail-type">Tipo de trilha</label>
                    <select
                        name="trail-type"
                        id="trail-type"
                        required

                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="caminhada">Caminhada / trekking</option>
                        <option value="corrida">Corrida</option>
                        <option value="escalada">Escalada</option>
                    </select>
                </InputContainer>
                <InputContainer style={{ input: { width: "592px" } }}>
                    <label htmlFor="name-trail">URL imagem da trilha</label>
                    <input
                        type="text"
                        id="name-trail"
                        placeholder="insira um link de uma imagem da trilha"
                        required

                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}

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
