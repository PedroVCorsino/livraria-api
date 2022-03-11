export class Livro {
    public id: number;
    constructor(
        public codigo: string,
        public nome: string,
        public preco: number
    ) {}
}