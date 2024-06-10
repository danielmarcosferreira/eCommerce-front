import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import Header from "../../components/Header";

export default function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function setImagem() {
        const imageURL = prompt("Cole o link da imagem")
        setImage(imageURL)
    }

    async function signUp(e) {
        e.preventDefault()
        const body = {
            name: form.name,
            email: form.email,
            password: form.password,
            image
        }
        try {
            await axios.post("http://localhost:5956/sign-up", body)
            navigate("/")
            console.log(body)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SignInContainer>
            <Header />
            <Form onSubmit={signUp}>
                <div>
                    <p>Nome</p>
                    <input
                        type="name"
                        name="name"
                        placeholder="Digite seu Nome"
                        value={form.name}
                        onChange={handleForm}
                        required />
                </div>
                <div>
                    <p>E-mail</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu Email"
                        value={form.email}
                        onChange={handleForm}
                        required />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={form.password}
                        onChange={handleForm}
                        required />
                </div>
                <Circle onClick={setImagem} image={image} required>
                    {image ? <img src={image} /> : "Enviar"}
                </Circle>
                <h4>Foto de perfil</h4>
                <span>
                    <button type="submit">Cadastrar</button>
                    <p>Já tem conta? <LinkStyle onClick={() => navigate("/")}>Entre</LinkStyle></p>
                </span>
            </Form>
        </SignInContainer>
    )
}

const SignInContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

const Form = styled.form`
    font-family: Roboto;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    p {
        font-size: 20px;
        text-align: start;
        margin-bottom: 10px;
        padding-left: 5px;
    }
    input {
        width: 350px;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 15px;
        border: none;
        box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.75);
        &::placeholder {
            color: #B5B5B5;
            font-weight: 700;
            font-size: 15px;
            padding: 10px;
        }
    }

    span{
        position: absolute;
        bottom: 0;
        button {
            background-color:#D00303;
            color: white;
            width: 320px;
            height: 45px;
            border: none;
            border-radius: 15px;
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 10px;
            cursor: pointer;
            &:hover {
                background-color: red;
            }
        }
        p {
            text-align: center;
        }
    }
`

const Circle = styled.div`
    color: #979797;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 2px 12px 28px -5px rgba(0,0,0,0.75);
    margin: 20px 0;
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 50%;
    }
`

const LinkStyle = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`