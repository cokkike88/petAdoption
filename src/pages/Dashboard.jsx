import React from 'react';
import Form from '../components/Form';

const Dashboard = () => {
    return ( 
        <div className="Dashboard">
            <div className="Dashboard-container">
                <div className="Dashboard-content">
                    <div className="Dashboard-form">
                        <Form />
                    </div>
                    <div className="Dashboard-profile">
                        <h2>Perfil</h2>
                        <div className="Dashboard-profile-info">
                            <img src="/" alt="Nombre Usuario" />
                            <span>Nombre:</span>
                            <h4>Oscar Enrique</h4>
                            <span>Correo:</span>
                            <h4>oscar@gmail.com</h4>
                            <button>Cerrar sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;