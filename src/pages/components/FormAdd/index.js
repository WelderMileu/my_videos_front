import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { Input, Button } from '../../style';
import { Formulario, TitleForm, InputGroupChecked } from './style';

const FormularioAdd = props => {
    // Methods de formulario do unForm
    const { register, errors , handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        // Pegar a url para adicionar vidios
        // usar o axios para fazer as requisições
    } 

    return (
        <Formulario block={ props.block } onSubmit={handleSubmit(onSubmit)}>
            {/* icone para fechar o formulario */}
            <FaTimes onClick={ props.func } />

            {/* Titulo do nosso formulario */}
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

                <label 
                    htmlFor="favorite" 
                    style={{ paddingLeft: "5px" }}> 
                    Favorite
                </label>
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
