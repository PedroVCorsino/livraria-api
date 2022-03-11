import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivroService } from './livros.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pedro',
      database: 'livraria',
      autoLoadModels: true, // carrega automaticamente os models
      synchronize: true, // sincroniza o banco de dados e cria as tabelas caso não existam
    }),
    SequelizeModule.forFeature([Livro]), // carrega os models
  ],
  controllers: [AppController, LivrosController], 
  providers: [AppService, LivroService], 
})
export class AppModule {} 
