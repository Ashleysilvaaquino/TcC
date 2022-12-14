
import { Router } from "express";
import { cadastrarcliente, listarEstados, usuarioendereco, loginUsuario } from "../repository/usuariorepository.js";
const server = Router();

//cadastrar cliente
server.post('/cadastrarcliente', async (req, resp) => {
    try {
        const usuarionovo = req.body;
       
        if (!usuarionovo.nome)
            throw new Error('Nome do usuário é obrigatório!');

        if (!usuarionovo.email)
            throw new Error('O email do usuário é obrigatório!');

        if (usuarionovo.senha === undefined || usuarionovo < 0)
            throw new Error('A senha do usuário é obrigatória!');

        if (!usuarionovo.celular)
            throw new Error('O celular do usuário é obrigatório!');
          
    
        console.log(usuarionovo);
        const usuarioinserido = await cadastrarcliente(usuarionovo);
        resp.send(usuarioinserido);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
           
        })
    }
}
)

//login usuario 
server.post('/cliente/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        const resposta = await loginUsuario(email, senha);

        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


//mostrar estados
server.get('/estado', async (req, resp) => {
    try{
        const linhas = await listarEstados();
        resp.send(linhas);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

//cadastrar endereco 
server.post('/endereco', async (req,resp) => {
    try {
        const endereconovo = req.body;
       
        if (!endereconovo.cep)
            throw new Error('O Cep é obrigatório!');

        if (!endereconovo.numero)
            throw new Error('O Número é obrigatório!');
        
        if (!endereconovo.estado)
            throw new Error('O Estado é obrigatório!');
        
        
        
        const enderecoinserido = await usuarioendereco(endereconovo);
        resp.send(enderecoinserido);

    
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;