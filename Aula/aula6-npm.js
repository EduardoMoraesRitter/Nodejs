/*
instala global: npm install -g nome_modulo
instala no projeto: npm install nome_modulo
remove: npm remove nome_modulo
Atuliza : npm update nome_modulo
listar todos os modulos: npm list -g
versao : npm -v

site: https://www.npmjs.com/

Abaixo vou lançar 3 comandos para atualizarmos nosso node.

npm cache clean -f    --limpar o modulos
npm install -g n      --instalar novamente
n stable               --

E para finalizar
node --version

--node-gyp is required to build RobotJS.
--Install node-gyp using npm
npm install -g node-gyp

--configurar variavel
npm config set python C:\Python27\python.exe


npm install imagemin-pngquant

sequencia AI
--intalar pyton versao antiga, configurar variavel
npm config set python C:\Python27\python.exe
npm install -g node-gyp
npm install --save robotjs
npm install --save synaptic
npm install --save async
npm install --save lodash
npm install --save blessed-contrib
npm install --save blessed

https://www.npmjs.com/package/robotjs
https://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm/21366601#21366601?newreg=e5cb74b781a74c5289d5bdd51a4c61c4

*/

zipper = require('zipper').Zipper;

var zipfile = new zipper('./arquivos/arquivo.zip');

zipfile.addFile('aula1.js', 'aula1.js', function (err){
	if (err) throw err;
	console.log('ok');
});