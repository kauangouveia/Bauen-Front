import Header from "../../components/Header"
import { Container } from "./styles";
import add from "../../assets/add.svg";
import { FeedContainer, PostHeader, PostImage, PostButtons } from "./styles"

function Post(){
    return (
    <>
    <Container>
        <Header />
        <FeedContainer>
            <PostHeader>
                <div className="PerfilPost">
                    <div className="PerfilImage">
                    
                    </div>
                </div>
                <div className="TitlePost">
                    <h2>Nome do usúario</h2>
                    <div className="ServicesList">

                </div>
                </div>
               
            </PostHeader>
            <PostImage>
                <div className="post">
                    <img src={add} alt="add"/>
                </div>
            </PostImage>
            <PostButtons>
                <div className="areaButtons">
                    <button type="submit" className="Cancel">Cancelar</button>
                    <button type="submit" className="Confirm">Confirmar</button>
                </div>
            </PostButtons>
        </FeedContainer>
    </Container>
    </>
    )
}

export default Post;