var veiculo = {
marca : 'Peugeot',
modelo : '208',
ano:'2022',
cor: 'azul',
placa: 'JDF-0219',
preco: 70.000,
 
getIdade: function(anoatual){
return anoatual-this.ano
},
getValorComDesconto: function (percentualDeDEsconto){
return this.preco*(1-percentualDeDEsconto)

}
}
console.log(`O ano doo PEugeot é : ${veiculo.getIdade(2023)}, com o desconto de 10%, fica no total de ${veiculo.getValorComDesconto(0.10)}`);