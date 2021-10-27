import Header from "../../components/Header"
import { Container } from "./styles";
import add from "../../assets/add.svg";
import { FeedContainer, PostHeader, PostImage, PostButtons } from "./styles"
import {listservice} from "../../services";
import {useEffect} from "react";
import React, { useState } from "react";

function Post(){
    const profileName = localStorage.getItem("name")
    const [service, setService] = useState([]);
    useEffect(async () => {
        const data = await listservice.listService();
        setService(data.services);
    },[]);
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
                <h2>{profileName}</h2>
                <div className="ServicesList">
                <select name="services" className="OptionsServices">
                    {service?.map((item) =>(
                        <option key={item.id_service}>
                            {item.name}
                        </option>
                    ))}
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