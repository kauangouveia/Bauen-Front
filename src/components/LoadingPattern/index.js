
import { ContaineSlide } from "./styles";
import load from "../../assets/loadingPadrap.gif"
function LoadingPadrao(){
    return(
        <ContaineSlide>
          <img src={load} alt='loadingBuild'/>
        </ContaineSlide>
    )
}
export default LoadingPadrao;