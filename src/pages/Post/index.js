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
                <select name="services" className="OptionsServices">
                <option value="Op1">Opção 01</option>
                <option value="Op2">Opção 02</option>
                <option value="Op3">Opção 03</option>
                <option value="Op4">Opção 04</option>
                <option value="Op5">Opção 05</option>
                <option value="Op6">Opção 06</option>
                <option value="Op7">Opção 07</option>
                <option value="Op8">Opção 08</option>
                <option value="Op9">Opção 09</option>
                <option value="Op10">Opção 10</option>
                <option value="Op11">Opção 11</option>
                <option value="Op12">Opção 12</option>
            </select>
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