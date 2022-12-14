import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common.scss'
import LandPage from './pages/landpage';
import Loginadm from './pages/loginadm';
import CadastrarLivro from './pages/cadastrarlivro'
import LoginUsuario from './pages/loginusuario';
import CardLivro from './components/cardGerenciarLivro';
import CadastrarCliente from './pages/cadastrarcliente';
import PesquisarLivro from './pages/pesquisarlivro';
import ConsultarLivro from './pages/consultarlivros';
import BarraPesquisa from './components/pesquisa';
import Detalhes from './pages/detalheslivro';
import LivroDetalhe from './components/livrodetalhe';
import MenuUsuario from './components/menucliente';
import HomeAdm from './pages/homeadm';
import Endereco from './pages/endereco'
import Carrinhocard from './components//cardcarrinho/index';
import HomeCliente from './pages/homecliente';
import Carrinho from './pages/carrinho';
import LivroUsuario from './components/livrousuario';
import FinalizarCompra from './pages/finalizarcompra';
import CardEndereco from './components/cardEndereco';
import LivrosDeTerror from './pages/livrosterror';
import LivrosInfantis from './pages/livrosinfantis';
import LivrosDeProgramacao from './pages/livrosprogramacao';
import LivrosDePsicologia from './pages/livrosdepsicologia';
import LivrosDeBiologia from './pages/livrodebiologia';
import LivrosDeRomance from './pages/livrosderomance';
import LivrosDeFantasia from './pages/livrosdefantasia';
import LivrosDePoesia from './pages/livrosdepoesia';
import LivrosDeArtistas from './pages/livrosdeartistas';
import LivrosDeMusica from './pages/livrosdemusica';
import PagamentoPorPix from './pages/pagamentopix';
import PagarCartao from './pages/pagarcartao';
import StatusPedido from './pages/statuspedido';
import StatusPedidoCliente from './pages/statuspedidocliente';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<LandPage/>}/>
        <Route path = '/loginadm' element ={<Loginadm/>}/>
        <Route path = '/cadastrarlivro' element ={<CadastrarLivro/>}/>
        <Route path = '/cadastrarlivro/livro/:idParam' element ={<CadastrarLivro/>}/>
        <Route path = '/loginusuario' element ={<LoginUsuario/>}/>
        <Route path = 'cadastrarcliente' element={<CadastrarCliente/>}/>
        <Route path = '/cardlivro' element ={<CardLivro/>}/>
        <Route path = '/pesquisarlivro' element ={<PesquisarLivro/>}/>
        <Route path = '/consultarlivro' element={<ConsultarLivro/>} />
        <Route path = '/comppesquisa' element={<BarraPesquisa/>} />
        <Route path = '/admhome' element={<HomeAdm/>} />
        <Route path = '/detalhes' element={<Detalhes/>} />
        <Route path = '/carrinhocard' element={<Carrinhocard/>} />
        <Route path = '/livro/:id/detalhe' element={<LivroDetalhe/>} />
        <Route path = '/endereco' element={<Endereco/>} />
        <Route path = '/homecliente' element={<HomeCliente/>} />
        <Route path = '/menusuario' element={<MenuUsuario/>} />
        <Route path = '/detalhe/:idParam' element={<Detalhes/>} />
        <Route path = '/carrinho' element={<Carrinho/>} />
        <Route path = '/livrousuario' element={<LivroUsuario/>} />
        <Route path = '/finalizarcompra' element={<FinalizarCompra/>} />
        <Route path = '/cardendereco' element={<CardEndereco/>} />
        <Route path = '/livrosdeprogramacao' element={<LivrosDeProgramacao/>} />
        <Route path = '/livrosdeterror' element={<LivrosDeTerror/>} />
        <Route path = '/livrosinfantis' element={<LivrosInfantis/>} />
        <Route path = '/livrosdepsicologia' element={<LivrosDePsicologia/>} />
        <Route path = '/livrosdebiologia' element={<LivrosDeBiologia/>} />
        <Route path = '/livrosderomance' element={<LivrosDeRomance/>} />
        <Route path = '/livrosdefantasia' element={<LivrosDeFantasia/>} />
        <Route path = '/livrosdepoesia' element={<LivrosDePoesia/>} />
        <Route path = '/livrosdeartistas' element={<LivrosDeArtistas/>} />
        <Route path = '/livrosdemusica' element={<LivrosDeMusica/>} />
        <Route path = '/pagamentopix' element={<PagamentoPorPix/>} />
        <Route path = '/pagarcartao' element={<PagarCartao/>} />
        <Route path = '/statuspedido' element={<StatusPedido/>} />
        <Route path = '/statuspedidocliente' element={<StatusPedidoCliente/>} />
      </Routes>
    </BrowserRouter>
   
   
  </React.StrictMode>
);

