function veiculo() {
    let marca = "";
    let modelo = "";
    let ano = "";
    let cor = "";
    let placa = "";
    let preco = "";
    
    this.getMarca=function ()/*o strcor a pessoa vai ler*/ {
        return this.marca
    }
    this.setMarca = function(strCor){
        this.marca = strCor
    }
    this.getModelo = function (strMarca) {
        return this.modelo
    }
    this.setModelo = function (strModelo) {
        this.modelo = strModelo
    }
    this.getAno = function (strAno){
        return this.ano
    }
    this.setAno
    
} 
let carro = new veiculo()
carro.setCor("vermelho")
console.log(carro.getCor());