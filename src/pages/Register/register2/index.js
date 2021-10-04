import { Container } from "./styles";
import LayoutRegister from "../../../components/LayoutRegister";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { address } from "../../../services";
import {PATTERN_ZIP_CODE} from "../../../utils/regex"
function Register2() {
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  


  const handleZipCode = async (event) => {
    const zipCode = event.target.value;
    if (!zipCode.match(PATTERN_ZIP_CODE))return
    const foundedAddress = await address.findAddressByZipCode(event.target.value);
    console.log(foundedAddress);
    setValue('street', foundedAddress.logradouro)
    setValue('neighborhood', foundedAddress.bairro)
    setValue('city', foundedAddress.localidade)
    setValue('state', foundedAddress.uf)

    
  };

  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>Cadastro</h2>
          </div>
          <form {...register("zipcode")}>
            <label>
              <h3>CEP*</h3>
              <input
                id="cep"
                type="text"
                name="text"
                placeholder="CEP"
                required
                onKeyPress={(event) => handleZipCode(event)}
                {...register("zipcode")}
              />
              <h3>Numero*</h3>
              <input
                required
                id="number"
                type="text"
                name="text"
                placeholder="Numero"
                {...register("number")}
              />
               <h3>Rua*</h3>
              <input
                required
                id="logradouro"
                type="text"
                name="text"
                placeholder="Rua"
                {...register("street")}
              />
              <h3>Bairro*</h3>
              <input
                id="bairro"
                required
                type="text"
                name="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              <h3>Cidade*</h3>
              <input
                id="localidade"
                type="text"
                name="text"
                placeholder="Cidade"
                required
                {...register("city")}
              />
              <h3>Estado*</h3>
              <input
                id="uf"
                required
                type="text"
                name="text"
                placeholder="Estado"
                {...register("state")}
              />
            </label>
            {/* <Link to="register3"> */}
            <button type="submit">
              <h2>CONTINUAR -{">"} </h2>
            </button>
            {/* </Link> */}
          </form>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register2;
