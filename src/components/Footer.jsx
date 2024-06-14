import React from 'react'


import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                <ion-icon name="home-outline"></ion-icon>
                Home
            </div>
            <div>
                <ion-icon name="cart-outline"></ion-icon>
                Carrinho
            </div>
            <div>
                <ion-icon name="person-outline"></ion-icon>
                Perfil
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: sticky;
    bottom: 0;
    left: 0;
    div {
        background-color: lightgray;
        width: 120px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            color: white;
            background-color: gray;
        }
    }
`