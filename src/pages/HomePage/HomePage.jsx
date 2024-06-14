import styled from "styled-components";
import Footer from "../../components/Footer";
import Sessions from "../../components/Sessions";
import HeaderHomePage from "./HeaderHomePage";

export default function HomePage() {
    return (
        <HomeContainer>
            <HeaderHomePage />
            <Sessions />
            <Footer />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 50px;
`