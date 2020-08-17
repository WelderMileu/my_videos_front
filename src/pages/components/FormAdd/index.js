import React from 'react';

import { Input, Button } from '../../style';
import { Formulario } from './style';

const FormularioAdd = () => {
    return (
        <Formulario>
            <Input 
                type="text"
                placeholder="Title"
            />
            <Input 
                type="text"
                placeholder="Url"
            />
            <Input 
                type="checkbox"
                placeholder="Url"
            />
            <Button color="var(--color-black-light)">
                Adicionar    
            </Button>
        </Formulario>
    )
};

export default FormularioAdd;
