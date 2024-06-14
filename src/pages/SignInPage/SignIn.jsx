import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthProvider";

export default function SignIn() {
    const [form, setForm] = useState({email: "", password: ""})
    const {setToken} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    // useEffect(() => {
    //     if (localStorage.getItem("user")) {
    //         navigate("/home")
    //     }
    // }, [navigate])

    async function login (e) {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        try {
            const resp = await axios.post("http://localhost:5956/sign-in", body)
            localStorage.setItem(`user`, JSON.stringify(resp.data))
            const newToken = resp.data.token
            setToken(newToken)
            navigate("/home")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SignInContainer>
            <Header />
            <Form onSubmit={login}>
                <h1>Josi's Restaurant</h1>
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
                    <p>Não tem conta? <LinkStyle onClick={() => navigate("/sign-up")}>Cadastre-se</LinkStyle></p>
                </span>
            </Form>
            <Bottom></Bottom>
        </SignInContainer>
    )
}

const SignInContainer = styled.div`
    height: 95vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0 20px;
`

const Form = styled.form`
    background-color: #F26063;
    font-family: "Source Sans 3", sans-serif;
    width:100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    h1 {
        font-size: 47px;
        font-weight: 500;
        width: 100%;
        margin: 40px;
        text-align: center;
    }
    p {
        font-size: 20px;
        font-weight: bold;
        text-align: start;
        margin-bottom: 10px;
        padding-left: 5px;
    }
    input {
        width: 300px;
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
        margin-top: 25px;
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
            margin-bottom: 30px;
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

const Bottom = styled.div`
    background-color: #EE3135;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
`