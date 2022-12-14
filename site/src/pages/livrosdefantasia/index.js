import './index.scss'
import LivroUsuario from '../../components/livrousuario';
import {useState} from 'react';
import {Link} from 'react-router-dom';


import BarraPesquisa from '../../components/pesquisa';



export default function LivrosDeFantasia() {
    const [livros, setLivros] = useState([]);
    return (
        <section>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>

                
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>

            </div>
        
               <div className='voltar2'>
                  <Link to="/">Voltar</Link>
                </div>
            <h2 className='livros-de-terror-h2'>LIVROS DE <span>FANTASIA</span></h2>
             <div className='livrinhos'> 

            <LivroUsuario></LivroUsuario>

            </div>
       
        </section>
    )
}