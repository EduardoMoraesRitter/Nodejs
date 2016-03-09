/*
instala global: npm install -g nome_modulo
instala no projeto: npm install nome_modulo
remove: npm remove nome_modulo
Atuliza : npm update nome_modulo
listar todos os modulos: npm list -g
versao : npm -v

site: https://www.npmjs.com/

Abaixo vou lançar 3 comandos para atualizarmos nosso node.

npm cache clean -f
npm install -g n
n stable

E para finalizar
node --version

npm install imagemin-pngquant

*/

zipper = require('zipper').Zipper;

var zipfile = new zipper('./arquivos/arquivo.zip');

zipfile.addFile('aula1.js', 'aula1.js', function (err){
	if (err) throw err;
	console.log('ok');
});