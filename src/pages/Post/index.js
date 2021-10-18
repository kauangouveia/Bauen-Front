import Header from "../../components/Header"
import { Container } from "./styles";
import add from "../../assets/add.svg";
import Footer from "../../components/Footer";
import { FeedContainer, PostHeader, PostImage, PostButtons } from "./styles"

function Post(){
    return (
    <>
    <Container>
        <Header />
        <FeedContainer>
            <PostHeader>

            </PostHeader>
            <PostImage>
                <div className="post">
                    <img src={add} alt="add"/>
                </div>
            </PostImage>
            <PostButtons>
                <div className="areaButtons">
                    <input type="submit" value="Cancelar" className="Cancel"/>
                    <input type="submit" value="Confirmar" className="Confirm"/>
                </div>
            </PostButtons>
        </FeedContainer>
        <Footer />
    </Container>
    </>
    )
}

export default Post;