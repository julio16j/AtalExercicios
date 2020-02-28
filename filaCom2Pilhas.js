class pilha {
    constructor(tamanho){
      this.topoIndex = -1;
      this.pilha = [];
      for(var i=0;i<tamanho;i++) this.pilha.push(null);
      }
    adicionar(elemento) {
      if(this.pilha.length > this.topoIndex){
        pilha.empurrar(this, elemento);
        return true;
      }
      else return false;
    }
    remover() {
      if(this.topoIndex >= 0){
        return pilha.retirar(this);
      }
      else return null;
    }
    imprimir() {
      var linha = '';
      this.pilha.forEach(elemento =>{
        if(elemento != null)
          linha += elemento + ' ';
      })
      console.log(linha);
    }
    topo() {
      return this.pilha[this.topoIndex];
    }
    static empurrar(pilha, elemento){
      pilha.topoIndex += 1;
      pilha.pilha[pilha.topoIndex] = elemento ;
    }
    static retirar(pilha){
      var elemento = pilha.pilha[pilha.topoIndex]; 
      pilha.pilha[pilha.topoIndex] = null;
      pilha.topoIndex -= 1;
      return elemento;
    }
}
/*pilha1 = new pilha(2);
pilha1.adicionar(3);
pilha1.adicionar(4);
console.log(pilha1.topo());
pilha1.imprimir();
console.log(pilha1.remover());
console.log(pilha1.remover());
console.log(pilha1.remover());
console.log(pilha1.adicionar(6));
console.log(pilha1.topo());*/
class filaAtal {
    constructor(tamanho){
        this.tamanho = tamanho;
        this.pilhaA = new pilha(Math.round(tamanho/2));
        this.pilhaB = new pilha(Math.round(tamanho/2));
        this.index = 0;
    }
    adicionar(elemento){
        var adicionou = false;
        if(this.index < this.tamanho){
            if(this.pilhaA.topoIndex + 1 < this.pilhaA.pilha.length) adicionou = this.pilhaA.adicionar(elemento);
            else {
                this.mudaPilha(true);
                adicionou = this.pilhaA.adicionar(elemento);
            }
            this.index = adicionou ? this.index + 1: this.index;
            return adicionou ? true : false
        }
        else return false;
    }
    remover(){
        var removeu = false;
        if(this.index > 0){
            if(this.pilhaB.topoIndex > -1 )  removeu = this.pilhaB.remover() != null ;
            else {
                this.mudaPilha(false);
                removeu = this.pilhaB.remover() != null ;
            }
            this.index = removeu ? this.index - 1: this.index;
            return removeu ? true : false
        }
        else return false;
    }

    inicio(){
        if(this.pilhaB.topoIndex > -1) return this.pilhaB.topo();
        else {
            this.mudaPilha(true);
            return this.pilhaB.topo();
        }
    }

    final(){
        if(this.pilhaA.topoIndex > -1) return this.pilhaA.topo();
        else {
            this.mudaPilha(false);
            return this.pilhaA.topo();
        }
    }

    estaVazia(){
        return this.index > 0 ? false : true;
    }

    imprimir(){
        var linha = "";
        for(var i = this.pilhaA.pilha.length;i>0;i--){
            linha += this.pilhaA.pilha[i-1] != null ? this.pilhaA.pilha[i-1] + ", ": "";
        }
        this.pilhaB.pilha.forEach(elemento => {
            linha+= elemento != null ? elemento + ", ": "";
        })
        console.log(linha);
    }

    mudaPilha(aParaB) {
        var adicionou = null;
        var removido = null;
        if(aParaB){
            while (true){
                removido = this.pilhaA.remover();
                if(removido == null) break;
                adicionou = this.pilhaB.adicionar(removido);
                if(!adicionou) {
                    this.pilhaA.adicionar(removido); 
                    break;
                }
            }
        }
        else {
            while (true){
                removido = this.pilhaB.remover();
                if(removido == null) break;
                adicionou = this.pilhaA.adicionar(removido);
                if(!adicionou) {
                    this.pilhaB.adicionar(removido); 
                    break;
                }
            }
        }
        return adicionou != null ? adicionou : false ;
    }
}
fila1 = new filaAtal(4);
fila1.adicionar(3);
fila1.adicionar(5);
fila1.adicionar(7);
fila1.adicionar(9);
console.log(fila1.inicio());
console.log(fila1.final());
fila1.imprimir();
fila1.remover();
console.log(fila1.final());
fila1.imprimir();
fila1.remover();
fila1.imprimir();
fila1.adicionar(8);
fila1.adicionar(10);
fila1.imprimir();