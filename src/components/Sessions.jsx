import { useState } from "react"
import styled from "styled-components"
import hotImage from "../assets/hotdog-image.jpeg"
import acaiImage from "../assets/acai-image.webp"
import refriImage from "../assets/refrigerante-image.jpeg"

export default function Sessions() {
    const [options, setOptions] = useState([
        { title: "Hot Dog", image: hotImage },
        { title: "Açai", image: acaiImage },
        { title: "Bebidas", image: refriImage }
    ])

    function verificaOption () {
        console.log(options)
    }

    return (
        <>
            
            {options.map((item, index) => (
                <SessionsComponent key={index}>
                    <h1>{item.title}</h1>
                    <img src={item.image} />
                </SessionsComponent>
            ))}
        </>

    )
}

const SessionsComponent = styled.div`
    padding: 20px;
    h1 {
        font-weight: bolder;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }
    img {
        width: 200px;
        height: 150px;
        border-radius: 10px;
        margin-top: 15px;
    }
`

