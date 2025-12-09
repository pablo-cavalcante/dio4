import { ButtonCustomStyled } from "./ButtonCustom.styled";

function ButtonCustom(props: any){
    const {label, type, onClick} = props;

    return(
        <div>
            <ButtonCustomStyled type={type} onClick={onClick}>
                {label}
            </ButtonCustomStyled>
        </div>
    );
}

export default ButtonCustom;