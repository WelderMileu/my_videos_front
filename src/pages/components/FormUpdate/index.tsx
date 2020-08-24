import React from 'react';
import { FaTimes } from "react-icons/fa";
//import { useForm } from "react-hook-form";
//import axios from 'axios';

import { Input, Button } from '../../style';
import { Formulario, TitleForm, InputGroupChecked } from '../FormAdd/style';

const FormularioUpdate: React.FC = props => {
    // Arrumar uma forma de colocar o favorito como valor no formulario
    
    return (
        <Formulario block={ props.block }>
            <FaTimes onClick={ props.close }/>
            <TitleForm>Update Video</TitleForm>

            <Input
                type="text"
                name="title"
                placeholder="Title"
                value={ props.title }
            />

            <Input
                type="text"
                name="url"
                placeholder="Url"
                value={ props.url }
            />

            <InputGroupChecked>
                <input 
                    id="favorite"
                    type="checkbox"
                    name="favorite"
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
                Alterar    
            </Button>
        </Formulario>
    )
}

export default FormularioUpdate;
