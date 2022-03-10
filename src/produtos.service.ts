import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutoService {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Livro Iniciando com Flutter", 39.90),
        new Produto("LIV03", "Livro Inteligência artificial como serviço", 29.90)
    ];


    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos.find(produto => produto.id == id);
    }

    criar(produto: Produto) {
        let ultimoId = this.produtos.length + 1;
        produto.id = ultimoId + 1;
        this.produtos.push(produto);
        console.log(produto);
    }

    alterar(produto: Produto) {
        let index = this.produtos.findIndex(p => p.id == produto.id);
        this.produtos[index] = produto;
    }

    apagar(id: number) {
        let index = this.produtos.findIndex(p => p.id == id);
        this.produtos.splice(index, 1);
    }

}