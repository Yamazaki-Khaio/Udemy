export default class Cliente {
    public id: number;
    public nome: string;
    public idade: number;


    constructor(id: number, nome: string, idade: number, ) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    static vazio(): Cliente {
        return new Cliente(0, '', 0);
    }
    
    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }


    getIdade(): number {
        return this.idade;
    }  


}