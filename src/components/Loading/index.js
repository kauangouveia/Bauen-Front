
import { ContaineSlide } from "./styles";
import loadingBuild from "../../assets/building.gif"
import loading from "../../assets/loading.svg"
function Loading(){
    return(
        <ContaineSlide>
          <img src={loadingBuild} alt='loadingBuild'/>
        </ContaineSlide>
    )
}
export default Loading;