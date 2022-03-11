import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
// import { DatabaseModule } from './core/database/database.module';

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
      synchronize: true // sincroniza o banco de dados e cria as tabelas caso não existam
      // logging: true

    }),
    SequelizeModule.forFeature([Livro]),
    // DatabaseModule, // carrega os models
  ],
  controllers: [AppController, LivrosController], 
  providers: [AppService, LivrosService], 
})
export class AppModule {} 
