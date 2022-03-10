import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
      return 'Lista de produtos';
   }

   @Get(':id') 
   obterUm(@Param() params) : string {
       return `Retorna os dados do produto ${params.id}`;
   }

   @Post()
   criar(@Body() produto): string {
       console.log(produto);
       return 'Produto criado com sucesso';
   }

   @Put()
   alterar(@Body() produto): string {
       console.log(produto);
       return 'Produto alterado com sucesso';
   }

   @Delete(':id')
   apagar(@Param() params): string {
       return `Apaga o produto ${params.id}`;
   }

}