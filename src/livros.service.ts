import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivroService {
    livros: Livro[] = [
        new Livro("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Livro("LIV02", "Livro Iniciando com Flutter", 39.90),
        new Livro("LIV03", "Livro Inteligência artificial como serviço", 29.90)
    ];


    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros.find(livro => livro.id == id);
    }

    criar(livro: Livro) {
        let ultimoId = this.livros.length + 1;
        livro.id = ultimoId;
        this.livros.push(livro);
        console.log(livro);
    }

    alterar(livro: Livro) {
        let index = this.livros.findIndex(l => l.id == livro.id);
        this.livros[index] = livro;
    }

    apagar(id: number) {
        let index = this.livros.findIndex(l => l.id == id);
        this.livros.splice(index, 1);
    }

}