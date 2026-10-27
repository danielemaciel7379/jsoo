import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";


const minhaBiblioteca = new Biblioteca('GT Bezerra'); 

const livro1 =  new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954)
const livro2 =  new Livro('1984', 'George Orwell', 1949);
const livro3 = new Livro('MistBorn', 'Brendon Sanderson', 2006)
const livro4 = new LivroEspecial('Sapiens','Yuval Harari',2011, 'História' );


//Estoque Biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2); 
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

//operação da biblioteca
livro1.emprestar();
livro3.emprestar()
livro1.devolver();
livro2.emprestar();

//listagem geral
minhaBiblioteca.listarLivros();
