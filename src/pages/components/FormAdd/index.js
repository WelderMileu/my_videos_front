import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

import { Input, Button } from '../../style';
import { Formulario, TitleForm, InputGroupChecked } from './style';

const FormularioAdd = () => {

    return (
        <Formulario block={ true }>
            <FaTimes />
            <TitleForm>New Video</TitleForm>
            <Input 
                type="text"
                placeholder="Title"
            />
            <Input 
                type="text"
                placeholder="Url"
            />
            <InputGroupChecked>
                <input 
                    id="favorite"
                    type="checkbox"
                />
                <label htmlFor="favorite" style={{ paddingLeft: "5px" }}> Favorite</label>
            </InputGroupChecked>
            <Button 
                style={{ marginTop: "30px" }}
                color="var(--color-black-light)"
                >
                Adicionar    
            </Button>
        </Formulario>
    )
};

export default FormularioAdd;
