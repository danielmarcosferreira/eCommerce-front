import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header";

export default function SignIn() {
    const [form, setForm] = useState({email: "", password: ""})
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: [e.target.value]})
    }

    function login (e) {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        console.log(body)
    }

    return (
        <SignInContainer>
            <Header />
            <Form onSubmit={login}>
                <div>
                    <p>E-mail</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu Email" 
                        value={form.email}
                        onChange={handleForm}
                        required/>
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua senha" 
                        value={form.password}
                        onChange={handleForm}
                        required/>
                </div>

                <span>
                    <button type="submit">Entrar</button>
                    <p>Não tem conta? <LinkStyle>Cadastre-se</LinkStyle></p>
                </span>
            </Form>
        </SignInContainer>
    )
}

const SignInContainer = styled.div`
    height: 90vh;
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
            span {

            }
        }
    }
`

const LinkStyle = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`