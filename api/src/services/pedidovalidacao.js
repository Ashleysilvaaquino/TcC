import randomString from 'randomstring'



export function criarNotaFiscal(){
    return randomString.generate(8);

}

export function criarNovoPedido(idUsuario, info){
   
    let agora = new Date();
    const notaFiscal = criarNotaFiscal();
    return{
       idUsuario: idUsuario,
       idEndereco: info.idEndereco,
       data: agora, 
       tipoPagamento: 'Cartao',
       status: 'Aguardando Pagamento',
       notaFiscal: notaFiscal
    }
}