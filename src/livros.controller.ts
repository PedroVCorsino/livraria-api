import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivroService } from "./livros.service";

@Controller('livros')
export class LivrosController {

constructor(private livrosService: LivroService) {} // injeção de dependência

    @Get()
    async obterTodos(): Promise<Livro[]> {
      return this.livrosService.obterTodos();
   }

   @Get(':id') 
   async obterUm(@Param() params) : Promise<Livro> {
        return this.livrosService.obterUm(params.id);
   }

   @Post()
   async criar(@Body() livro: Livro) { 
        this.livrosService.criar(livro);
   }

   @Put()
   async alterar(@Body() livro: Livro){
       this.livrosService.alterar(livro);
   }

   @Delete(':id')
   async apagar(@Param() params) {
       this.livrosService.apagar(params.id);
   }

}