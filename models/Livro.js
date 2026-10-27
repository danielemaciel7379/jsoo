//  Encapsulamento
class Livro {
    #status;
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.#status = 'Disponível';
    }

    getStatus() {   
        return this.#status;
    }  

    emprestar() {
        if (this.#status === 'Disponível') {
            this.#status = 'Emprestado';
            console.log(` ${this.titulo}  emprestado com sucesso!`);
        } else {
            console.log(` ${this.titulo}  está indisponível para empréstimo.`);
        }      
    }
    devolver() {
        if (this.#status === 'Emprestado') {
            this.#status = 'Disponível';
            console.log(` ${this.titulo} 
                foi devovido com sucesso!`);   
        }
    }
    exibirInfo() {
        return `
                    => ${this.titulo}, 
                    => ${this.autor}, 
                    => ${this.ano}, 
                    => ${this.#status}
                    ;`
    }
}
export default Livro;
