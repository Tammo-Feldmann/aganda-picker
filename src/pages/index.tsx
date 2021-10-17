import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Agenda } from "../components/Agenda";

const Index = () => (
    <Container height="100vh">
        <Hero />
        <Main>
            <Agenda></Agenda>
        </Main>
        <DarkModeSwitch />
        <Footer></Footer>
    </Container>
);

export default Index;
