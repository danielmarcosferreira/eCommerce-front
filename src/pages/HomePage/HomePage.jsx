import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sessions from "../../components/Sessions";

export default function HomePage() {
    return (
        <HomeContainer>
            <Header />
            <Sessions />
            <Footer />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    height: 92vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 50px;
`