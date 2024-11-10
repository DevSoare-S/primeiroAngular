import { helloWorld } from "./hello";
import { RandomNumber, pi,  } from "./math";

function calcularArea() {
    const obj = {width: 10, heigth: 30}

    const area = obj.width * obj.heigth

    return area;
}

function usuario () {

    const usuario = {
        nome: "Lucas",
        idade: "24"
    }

    usuario.nome
}

function calculo() {

    return Math.random() < 5;
}

function validar(){
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor === 'a') {


    }

    else if (valor === 'b') {

    }
}

function exibirMensagem (pessoa: string, data: string): string{

    console.log(`Olá ${pessoa}, hoje é  ${data}`)

    return 'Teste';
}

exibirMensagem('Lucas', '30/10/2024');

let mensagem: string = "hello world";

let mensagem2 = 'hello world';

let number1: number = 3.3;

let number2 = 3.3;

let obj:any = {x: 0};

function olaMundo(mensagem:string):string {

    return `Olá Mundo ${mensagem};`
}

function exibirCoordenadas(pt: {x: number, y: number}) {
          
    return pt.x + ' ' + pt.y;

}

exibirCoordenadas({x:4, y:6});


function exibirNome(obj: {nome:string, sobrenome?:string}): string {

    if (obj.sobrenome === undefined) {

        mensagem = `Seu nome é ${obj.nome}` ;
    }

    else {

        mensagem = `Seu nome é ${obj.nome} ${obj.sobrenome}` ;
    }

    return mensagem;

   
}

exibirNome({nome: 'Lucas'});

exibirNome({nome: 'Lucas', sobrenome: 'Soares'});

function exibirIds(id: number | string) {

    return 'seu id é' + id;
}

exibirIds(3);

exibirIds('345');

type Ponto = {

    x: number,
    y:number
}

function imprimirPonto(p: Ponto) {

    return 'O seu ponto é ' + p.x + p.y;
}

imprimirPonto({x: 3, y:4});

function imprimirTexto(texto: string, alinhamento: 'left ' | 'right' | 'center') {

}

imprimirTexto('meu texto',  'left ');

var teste = null;

console.log(teste);

var teste2;

console.log(teste2);

function vivendoPerigosamente(x?: number | null) {
    console.log(x?.toFixed());

}

vivendoPerigosamente();

function fazerAlgo(lista: Array<string>) {


}

function fazerAlgoTambem(lista: string[]) {

}

fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambem(['hello', 'world']);


class Point {

    x: number = 0;
    y: number = 0;
}


let p = new Point();
p.x = 4;
p.y = 5;

console.log(`${p.x} ${p.y}`);

class BoasVindas {

    mensagem: string;

    constructor() {

        this.mensagem = "bem vindo";
    }
}

let m = new BoasVindas();

console.log(m.mensagem);


class saudacoes {
    readonly mensagem: string;

    constructor() {

        this.mensagem = "muito bem vindo"
    }

    dizerOla() {
        console.log(this.mensagem);
    }
}

let s = new saudacoes();

class C {
    _length = 0;

    get length(): number {
             return this._length;
    }

    set length(value: number) {
          this._length = value;

    }
}

let c = new C();


helloWorld();


let r = new RandomNumber();