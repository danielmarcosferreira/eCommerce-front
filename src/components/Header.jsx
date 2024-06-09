import styled from "styled-components"
import phoneImage from "../assets/cellphone.png"

export default function Header() {
    return (
        <HeaderContainer>
            <img src={phoneImage} alt="cellphone image"/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`