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
    console.log(this.pilha[this.topoIndex]);
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
pilha1 = new pilha(2);
pilha1.adicionar("1");
pilha1.adicionar("2");
pilha1.topo();
pilha1.adicionar(3);
pilha1.remover();
pilha1.adicionar(4);
pilha1.topo();
pilha1.imprimir();