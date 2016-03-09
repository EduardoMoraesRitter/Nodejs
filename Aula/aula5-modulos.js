/*
modulos sao cruciais ajuda a organizar o codigo, por arquivo, e sendo reutilizavel

var modulo = require('nome da biblioteca ou o caminho do arquivo');
*/
var modulo = require('./modulos/mod1');

modulo('edu');

//cria um objeto
var pessoa = require('./modulos/mod2');

//chama a função
pessoa.minhaIdade('24');
pessoa.minhaProfissao('Dev');