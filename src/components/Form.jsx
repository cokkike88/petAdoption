import React from 'react';

const Form = () => {
    return ( 
        <div className="Form">
            <div className="Form-head">
                <h2>Dar en adopcion</h2>
            </div>
            <div className="Form-item">
                <form>
                    <input name="name" type="text" placeholder="Nombre de tu mascota" />
                    <input name="description" type="text" placeholder="Describe a tu mascota" />
                    <select name="type">
                        <option disabled selected>Seleccionar</option>
                        <option value="cat">Gato</option>
                        <option value="dog">Perro</option>
                    </select>
                    <select name="gender">
                        <option disabled selected>Seleccionar</option>
                        <option value="female">Femenino</option>
                        <option value="male">Masculino</option>
                    </select>
                    <select name="adopt">
                        <option disabled selected>Seleccionar</option>
                        <option value="true">DAr en Adopcion</option>
                        <option value="false">Cuidar</option>
                    </select>
                    <input type="file" name="photo" />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
     );
}
 
export default Form;