import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from 'axios';

import { Input, Button } from '../../style';
import { Formulario, TitleForm, InputGroupChecked, InputError } from './style';

const FormularioAdd = props => {
    // Methods de formulario do unForm
    const { register, errors , handleSubmit } = useForm();
    
    // Adicionando nossos videos a base de dados.
    // Erro na url ao adicionar os dados
    // Não esta reconhecendo os parametros passados pela url
    const onSubmit = async (data) => {
        console.log(data);
        
        const urlPost = `http://localhost:3000/post`; 
        await axios.post(urlPost, data)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                })
                .catch(err => console.log(`Erro: ${err}`));
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
            { errors.title && <InputError>Este campo e Obrigatorio</InputError> }

            <Input 
                type="text"
                placeholder="Url"
                name="url"
                ref={register({ required: true })}
            />
            { errors.url && <InputError>Esta campo e Obrigatorio</InputError> }

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
