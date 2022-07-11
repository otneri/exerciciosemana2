function submitFormContact () {
    var nome = document.getElementById('nome');
    var email = document.getElementById ('email');
    var descricao = document.getElementById ('descricao')


if (nome.value == '' || email.value == '') {
    alert('Preencha os campos vazios!')
}



console.log(
    'Formulário de contato :',
    '\nNome:' + nome.value,
    '\nE-mail:' + email.value,
    '\nDescrição:' + descricao.value
);

alert('Formulário enviado com sucesso!');


nome.value = '';
email.value = '';
descricao.value = '';

}