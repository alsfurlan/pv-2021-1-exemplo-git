function helloWorld() {
    var inputs = document.getElementsByTagName('input');
    var input = inputs[0];
    var nome = input.value;
    console.log('Nome: ', nome);
    window.alert('Hello world, ' + nome + '!');
    input.value = '';
}