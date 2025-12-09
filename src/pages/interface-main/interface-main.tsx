import { InterfaceMainStyled } from "./interface-main.styled";
import { ContainerBox } from '../../components/ContainerBox/ContainerBox.styled';
import InputCustom from "../../components/InputCustom/InputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { HeaderCustomStyled } from "../../components/HeaderCustom/HeaderCustom.styled";
import { useForm } from "react-hook-form";
import ServidorService from "../../services/servidor/servidor.sevice";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().min(3).email().required(),
  senha: yup.string().min(3).required()
});

function InterfaceMain() {
  const {
    watch,
    handleSubmit,
    control,
    formState: {isValid, errors}
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  const form = watch();

  const onSubmitFunction = () => {
    let resposta = ServidorService.sendPost('/assets/a.json', form);
    console.log(resposta);
  }

  return (
    <InterfaceMainStyled>
      <ContainerBox>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
          <HeaderCustomStyled> LOGIN </HeaderCustomStyled>
          <InputCustom control={control} name="email" errorMessage={errors.email?.message} />
          <InputCustom control={control} name="senha" errorMessage={errors.senha?.message} />
          <ButtonCustom label="Entrar" type="submit" onClick={()=>{  }} />
      </form>
      </ContainerBox>
    </InterfaceMainStyled> 
  );
}

export default InterfaceMain;
