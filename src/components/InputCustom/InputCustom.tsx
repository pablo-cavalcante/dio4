import { Controller } from 'react-hook-form';
import { InputCustomStyled } from './InputCustom.styled';

const InputCustom = ({control, name, errorMessage, ...rest}) => {
    return(
        <div>
            <Controller 
                control={control}
                name={name}
                defaultValue=""
                render={({field}) => (
                    <InputCustomStyled {...rest} type='text' {...field} />
                )}
            />
            {errorMessage ? <p>{errorMessage}</p> : null}
        </div>
    );
};

export default InputCustom;