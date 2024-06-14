import styled from "styled-components"
import phoneImage from "../assets/cellphone.png"
import josisImage from "../assets/josi's.jpeg"

export default function Header() {
    return (
        <HeaderContainer>
            <img src={josisImage} alt="cellphone image"/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #EE3135;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    img {
        width: 70px;
        border-radius: 50%;
    }
`