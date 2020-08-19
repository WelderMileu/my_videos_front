import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { Input, Button } from '../../style';
import { Formulario, TitleForm, InputGroupChecked } from './style';

const FormularioAdd = props => {
    const { register, errors , handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Formulario block={ props.block } onSubmit={handleSubmit(onSubmit)}>
            <FaTimes onClick={ props.func } />
            <TitleForm>New Video</TitleForm>
            <Input 
                type="text"
                placeholder="Title"
                name="title"
                ref={register({ required:true })}
            />
            { errors.title && "Este campo e Obrigatorio" }

            <Input 
                type="text"
                placeholder="Url"
                name="url"
                ref={register({ required: true })}
            />
            { errors.url && "Esta campo e Obrigatorio" }
            
            <InputGroupChecked>
                <input 
                    id="favorite"
                    type="checkbox"
                    name="favorite"
                    ref={register}
                />
                <label htmlFor="favorite" style={{ paddingLeft: "5px" }}> Favorite</label>
            </InputGroupChecked>
            <Button 
                type="submit"
                style={{ marginTop: "30px" }}
                color="var(--color-black-light)"
                >
                Adicionar    
            </Button>
        </Formulario>
    )
};

// Exportando o component
export default FormularioAdd;
