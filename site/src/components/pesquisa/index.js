import lupa from '../../assets/images/lupa-pretinha.png';

import './index.scss';
import { buscarLivrosPorNome } from '../../api/admAPI';
import { useState, useEffect } from 'react';

export default function BarraPesquisa() {
    const [livros, setLivros] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar(){
     
        const resp = await buscarLivrosPorNome(filtro);
        setLivros(resp);
    } 
    
    useEffect(() => {
        buscarLivrosPorNome();       
    }, []);
  
    return (
        <div className='comp-pesquisa'>
            <input type="text" placeholder='Pesquise aqui...' className='input-pesquisa' value={filtro}  onChange={e => setFiltro(e.target.value)} />
            <img src={lupa} className='lupa' onClick={filtrar}/>
        </div>
    )
}