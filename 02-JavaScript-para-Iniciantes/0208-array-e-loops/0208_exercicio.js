// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copa.forEach((item) => {
    console.log(`O Brasil ganhou a copa de ${item}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
frutas.forEach((item) => {
    if (item === 'Pera') {
        console.log('Cheguei na Pera');
    }
});
/*
    Aqui eu descobri que o break não funciona no forEach, pois o que ta sendo executado é uma 
    função e não um loop propriamente dito.
    No site https://masteringjs.io/tutorials/fundamentals/foreach-break ele recomenda, se possível,
    usar o for loop normal para interagir com os elementos do array (ainda não sei o motivo), mas 
    ele dá uma alternativa ao forEach, o every, que quase o mesmo funcionamento do forEach, só que 
    para de executar se retornar false
*/

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta, frutas);
