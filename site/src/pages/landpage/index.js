
import './index.scss';
import login from '../../assets/images/login.png'
import carrinho from '../../assets/images/carrinho.png'
import BarraPesquisa from '../../components/pesquisa';
import SetEsq from '../../assets/images/setaesq.png'
import SetDir from '../../assets/images/setdir.png'
import Terror from '../../assets/images/generoterror.png'
import InfantilGenero from '../../assets/images/infantil.png'
import Programacao from '../../assets/images/programacao.png'
import Psico from '../../assets/images/psico.png'
import Romance from '../../assets/images/romance.png'
import Menina from '../../assets/images/menina.png'
import Isabella from '../../assets/images/isabella.png'
import Ashley from '../../assets/images/ashley.png'
import Ana from '../../assets/images/ana.png'
import Guilherme from '../../assets/images/guilherme.png'
import Mulher from '../../assets/images/mulher.png'
import Pagamento from '../../assets/images/pagamento.png'
import Tiktok from '../../assets/images/TikTok.png'
import Instagram from '../../assets/images/Instagram.png'
import Email from '../../assets/images/email.png'
import LivroUsuario from '../../components/livrousuario';
import { Link } from 'react-router-dom';





function LandPage() {
    return (
        
        <div className='landpage'>
            <div className='cabecalho-principal'>
                <p className='logo-branca'>Livraria Montes</p>
                <div>
                    <BarraPesquisa></BarraPesquisa>
                </div>

                <div className='login'>
                     <Link to="/loginusuario" className='login'> <img src={login}/></Link>
                    <p>Login</p>
                </div>
                <div className='carrinho'>
                    <img src={carrinho} />
                    <p>Meu carrinho</p>
                </div>
            </div>
            <div>
                <p className='mais-vendidos'>Mais vendidos</p> <hr></hr>
            </div>
            <div className='pt-carrosel'>
                <div>
                    <p className='explore-os-montes'>EXPLORE OS <span>MONTES</span></p>
                    
                    <div className='carrosel-pt1'>
                        <img src={SetEsq} className='img-set-esq' />
                        <div className='div-terror'>
                            <img src={Terror} className='img-terror' />
                            <p>TERROR</p>
                        </div>
                        <div className='div-infantil'>
                            <img src={InfantilGenero} className='img-infantil' />
                            <p>INFANTIL</p>
                        </div>
                        <div className='div-programacao'>
                            <img src={Programacao} className='img-programacao' />
                            <p>PROGRAMAÇÃO</p>
                        </div>
                        <div className='div-psico'>
                            <img src={Psico} className='img-psico' />
                            <p>PSICOLOGIA</p>
                        </div>
                        <div className='div-romance'>
                            <img src={Romance} className='img-romance' />
                            <p>ROMANCE</p>
                        </div>
                        <img src={SetDir} className='img-set-dir' />
                    </div>
                </div>
            </div>

            <div>
                <h3 className='novidades-ladpage'>Novidades que você precisa conhecer</h3>
                <div className='livros-landpage'>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                </div>
                <div className='livros-landpage'>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                    <LivroUsuario/>
                </div>
            </div>
            <br></br>
            

            <div className='beneficios-landpage'>
                <h2 className='titulo-land'>Beneficios da leitura</h2>
                <div className='paragrafos-landpage'>
                    <div className='paragrafo1-landpage'>
                        <h3>Expande a criatividade</h3>
                        <p>Livros que narram fantasias, aventuras ou até mesmo romances levam você a outro mundo. Apenas o ato de imaginar como é um personagem descrito estimula a criatividade. Essa mesma habilidade pode ser incentivada com a leitura de diversos gêneros literários.</p>
                    </div>
                    <div className='paragrafo1-landpage'>
                        <h3>Desenvolve o pensamento crítico</h3>
                        <p>O pensamento crítico nada mais é do que ter a própria visão sobre um conjunto de assuntos, sendo capaz de formular a própria opinião, questionar conceitos e desenvolver os próprios argumentos. A leitura coloca você em contato com novos conteúdos, o que ajuda a estimular essa habilidade.</p>
                    </div>
                </div>
                <img src={Menina} className='menina' />
            </div>

            <div>
                <h2 className='agazinho2'>CONHEÇA A ADMINISTRAÇÃO <span>DA LIVRARIA MONTES</span></h2>
                <div className='nos'>
                    <div className='div-isabella'>
                        <img src={Isabella} className='foto-isabella'/>
                        <p className='txt-desenvolvedora'>Desenvolvedora Back-End</p>
                    </div>
                    <div className='div-ashley'>
                        <img src={Ashley} className='img-ashley'/>
                        <p className='txt-desenvolvedora1'>Desenvolvedora Back-End</p>
                    </div>
                    <div className='div-ana'>
                        <img src={Ana} className='foto-ana'/>
                        <p className='txt-desenvolvedora2'>Desenvolvedora Front-End</p>
                    </div>
                    <div className='div-guilherme'>
                        <img src={Guilherme} className='foto-guilherme' />
                        <p className='txt-desenvolvedora2'>Desenvolvedor Front-End</p>
                    </div>
                </div>
                <div>
                    <h2 className='hagazinhooo2'>QUEM <span>SOMOS?</span></h2>
                    <p className='quemsomos-desc'>Somos uma empresa nacional de livros que se deu início em setembro de 2011, e que se teve maior reconhecimento em abril de 2020 graças ao frete mais rápido do Brasil. Entregamos livros para todo o território brasileiro. Rapidez, confiança e segurança.</p>
                </div>
                <img src={Mulher} className='mulher-ti' />
            </div>

            <div className='rodape-landapage'>
                <div>
                    <p className='p-pagamento'>Formas de pagamento</p>
                    <img src={Pagamento} className='p-pagamento'/>
                </div>

                <div>
                    <p className='r-redes'>Redes Sociais</p>
                    <div className='div-insta'>
                        <img src={Instagram}/>
                        <p>@monteslivraria</p>
                    </div>
                    <div className='div-insta'>
                        <img src={Tiktok}/>
                        <p>@livrariamontes</p>
                    </div>
                </div>

                <div>
                    <p className='r-redes'>Entre em contato</p>
                    <div className='div-insta'>
                        <img src={Email}/>
                        <p>livrariamontes@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandPage;
