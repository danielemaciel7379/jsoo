import Livro  from "./Livro.js";

//Herança que herda as caracteristica da classe livro
class LivroEspecial extends Livro {
    constructor(titulo, autor, ano, categoria) {
        super(titulo, autor, ano);
        this.categoria = categoria;
    }
    //polimorfismo
    exibirInfo() {
       return `['${this.categoria.toUpperCase()}] ${ super.exibirInfo()}`;
    }
}
export default LivroEspecial;
