import LayoutRegister from "../../../components/LayoutRegister";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { address } from "../../../services";
import { PATTERN_ZIP_CODE } from "../../../utils/regex";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../../context";
import { useContext } from "react";

function Register2() {
  const { registerValue, setRegisterValue } = useContext(RegisterContext);

  console.log(registerValue);

  const { register, setValue } = useForm();
  const handleZipCode = async (event) => {
    const zipCode = event.target.value;

    if (!zipCode.match(PATTERN_ZIP_CODE)) return;
    const { logradouro, bairro, localidade, uf, number } =
      await address.findAddressByZipCode(zipCode);

    setValue("street", logradouro);
    setValue("neighborhood", bairro);
    setValue("city", localidade);
    setValue("state", uf);
    setValue("number", number);
    setRegisterValue({
      ...registerValue,
      address: {
        zipCode: zipCode,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      },
    });
  };
  
  const handleNumber = (event) => {
    const {address, ...values} = registerValue
    address.number = event.target.value
    setRegisterValue({
      ...values,
      address,
    });
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
                id="zipcode"
                type="text"
                name="text"
                placeholder="CEP"
                required
                {...register("zipcode", {
                  onChange: handleZipCode,
                })}
                value={registerValue.address.zipCode}
              />
              <h3>Numero*</h3>
              <input
                required
                id="number"
                type="text"
                name="text"
                placeholder="Numero"
                {...register("number", {
                  onChange: handleNumber ,
                })}
                value={registerValue.address.number}
              />
              <h3>Rua*</h3>
              <input
                required
                id="street"
                type="text"
                name="text"
                placeholder="Rua"
                {...register("street", {
                  onChange: handleZipCode,
                })}
                value={registerValue.address.street}
              />
              <h3>Bairro*</h3>
              <input
                id="neighborhood"
                required
                type="text"
                name="text"
                placeholder="Bairro"
                {...register("neighborhood", {
                  onChange: handleZipCode,
                })}
                value={registerValue.address.neighborhood}
              />
              <h3>Cidade*</h3>
              <input
                id="city"
                type="text"
                name="text"
                placeholder="Cidade"
                required
                {...register("city", {
                  onChange: handleZipCode,
                })}
                value={registerValue.address.city}
              />
              <h3>Estado*</h3>
              <input
                id="state"
                required
                type="text"
                name="text"
                placeholder="Estado"
                {...register("state", {
                  onChange: handleZipCode,
                })}
                value={registerValue.address.state}
              />
            </label>
            <Link to="register3">
              <button>
                <h2>CONTINUAR -{">"} </h2>
              </button>
            </Link>
          </form>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register2;
