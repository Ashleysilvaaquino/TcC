import './index.scss'

import QRCode from '../../assets/images/pagpix.png'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";

export default function PagamentoPorPix(){

    function SalvarClick(){
        try{
            toast('Pagamento Aprovado')
        }catch{
            console.log('Erro!')
        }
    }
    return(
        

        <main>
            <div className='livraria-logo-maneira'>
             <h2 >LIVRARIA MONTES</h2>   
            </div>
            
            <div className='conteudo-pag-pix'>
                <img src={QRCode} className='img-pag-pix'/>
                <p>Código do pedido: <span>00559252925942549259425499</span></p>
            </div>
            <main className='pt-inferior-pg-pagamento'>
                <Link to='/finalizarcompra' className='pg-pag-pix-link'>Voltar</Link>
                <button className='pag-pix-button'onClick={SalvarClick}> PAGAR</button>
            </main>
        </main>
    )
}