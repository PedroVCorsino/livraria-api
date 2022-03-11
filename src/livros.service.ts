import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import console from "console";
import { Livro } from "./livro.model";

@Injectable()
export class LivroService {
    constructor(
        @InjectModel(Livro) // Injeta o modelo de Livro
        private livroModel: typeof Livro
    ) {}
        
    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async obterUm(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    async criar(livro: Livro) {
        return this.livroModel.create(livro);
        console.log(livro);
    }

    // alterar um livro
    async alterar(livro: Livro) {
        return this.livroModel.update(livro, {
            where: {
              id: livro.id
            }
        });
        console.log(livro);
    }     

    async apagar(id: number) {
        const livro: Livro = await this.obterUm(id);
        livro.destroy();
        console.log(livro);
    }

}