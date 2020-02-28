class fila {
  constructor(tamanho){
    this.fila = [];
    this.filaIndex = 0;
    for(var i=0;i<tamanho;i++) this.fila.push(null);
  } 
  adicionar(elemento) {
      if(this.fila.length > this.filaIndex){
        this.fila[this.filaIndex] = elemento;
        this.filaIndex += 1;
      } 
      else console.log("Fila Cheia");
  }
  remover() {
    if(this.filaIndex > 0) {
      this.fila.forEach((element, index) =>{
        if(element == null) 
          return 0;
        else {
          if(index != 0){
            this.fila[index-1] = element;
            this.fila[index] = null;
          } 
        }
      })
      this.filaIndex--;
    }
    else console.log("Fila Vazia");
  }
  imprimir() {
    var linha = '';
    this.fila.forEach(elemento =>{
      if(elemento != null)
        linha += elemento + ' ';
    })
    console.log(linha);
  }
  inicio() {
    console.log(this.fila[0]);
  }
  final() {
    console.log(this.fila[this.filaIndex-1]);
  }
}
fila1 = new fila(2);
fila1.adicionar("1");
fila1.imprimir()
fila1.adicionar("2");
fila1.final();
fila1.inicio();
fila1.imprimir();
fila1.adicionar(3);
fila1.remover();
fila1.adicionar(4);
fila1.inicio();
fila1.imprimir();