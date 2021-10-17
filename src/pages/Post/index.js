import Header from "../../components/Header"
import { Container } from "./styles";
import search from "../../assets/search.png";
import chat from "../../assets/chat.svg";
import filter from "../../assets/filter.svg";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import { SearchContainer, FeedContainer, ContainerResult, ContainerFeed, ContainerProfile, CardProfile } from "./styles"
import user from "../../assets/user.png";
import menu from "../../assets/menu.svg";
import love from "../../assets/love.svg";

function Post(){
    return (
    <>
    <Container>
        <Header />
        <FeedContainer>

        </FeedContainer>
        <Footer />
    </Container>
    </>
    )
}

export default Post;