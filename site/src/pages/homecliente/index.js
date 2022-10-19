import storage from 'local-storage'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menucliente';
import './index.scss';
import Icone from '../../assets/images/usuariohome.gif';

export default function HomeCliente() {

    const navigate = useNavigate();
    
    
   
    useEffect(() => {
         if(!storage('usuario-logado')){
            navigate('/loginusuario');
         }
    }, [])
    
    return (
        <div className='pg-usuario'>
             <style>
             @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
             </style>
            <Menu></Menu>
            <div className='boas-vindas'>
                <h3>Seja Bem-vindo Cliente💙</h3>
                <img src={Icone} />
            </div>     
        </div>
    )
}

