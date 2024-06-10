import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <ContainerError>
            <div>404 Not Found</div>
            <Link onClick={() => navigate("/")}>Home</Link>
        </ContainerError>
    )
}

const ContainerError = styled.div`
    font-size: 40px;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        margin-bottom: 20px;
    }
`