import styled from "styled-components"
import josisImage from "../../assets/josi's.jpeg"

export default function HeaderHomePage() {
    return (
        <HeaderContainer>
            <h1>Olá, Daniel!</h1>
            <img src={josisImage} alt="cellphone image" />
            <ion-icon name="log-out-outline"></ion-icon>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #EE3135;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    h1 {
        color: white;
        width: 60px;
        font-size: 17px;
        text-align: center;
    }
    img {
        width: 70px;
        border-radius: 50%;
    }
    ion-icon {
        color: white;
        font-size: 30px;
    }
`