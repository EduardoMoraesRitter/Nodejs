//https://www.youtube.com/watch?v=X9puksEu7sg&list=PLB5Ert9JDAi1RWAiJ8U4-3LrukdMiIWQK
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'teste'));
var session = driver.session();

app.get('/', function(req, res) {
    session
        .run('MATCH(n:pessoa) RETURN n LIMIT 25')
        .then(function(result) {
            var pessoaArr = [];
            result.records.forEach(function(record) {
                pessoaArr.push({
                        //id: record._fields[0].identity.low,
                        nome: record._fields[0].properties.nome,
                        idade: record._fields[0].properties.idade
                            //,ano: record._fields[0].properties.year,
                    })
                    //console.log(record._fields[0].properties);
            });
            session
                .run('MATCH(n:autor) RETURN n LIMIT 25')
                .then(function(result2) {
                    var autorArr = [];
                    result2.records.forEach(function(record) {
                        autorArr.push({
                            nome: record._fields[0].properties.nome
                        });
                    });
                    res.render('index', {
                        pessoas: pessoaArr,
                        autores: autorArr
                    });
                })
                .catch(function(err) {
                    console.log(err);
                })
        })
        .catch(function(err) {
            console.log(err);
        });
    //res.send('hhh');
})

app.post('/pessoa/add', function(req, res) {
    var nome = req.body.pessoa_nome;
    var idade = req.body.pessoa_idade;

    session
        .run('CREATE(n:pessoa {nome:{nomeParam},idade:{idadeParam}}) RETURN n.nome', { nomeParam: nome, idadeParam: idade })
        .then(function(result2) {
            res.redirect('/');
            session.close();
        })
        .catch(function(err) {
            console.log(err);
        })
        //console.log(nome);
    res.redirect('/');
})

app.post('/autor/add', function(req, res) {
    var nome = req.body.nome;

    session
        .run('CREATE(n:autor {nome:{nomeParam}}) RETURN n.nome', { nomeParam: nome })
        .then(function(result2) {
            res.redirect('/');
            session.close();
        })
        .catch(function(err) {
            console.log(err);
        })
        //console.log(nome);
    res.redirect('/');
})

app.post('/pessoa/autor/add', function(req, res) {
    var pessoa_nome = req.body.pessoa_nome;
    var autor_nome = req.body.autor_nome;
    console.log(pessoa_nome + autor_nome)
    session
        .run('MATCH(a:autor {nome:{autorParam}}),(b:pessoa{nome:{pessoaParam}}) MERGE(a)-[r:TEM]-(b) RETURN a,b', { pessoaParam: pessoa_nome, autorParam: autor_nome })
        .then(function(result2) {
            res.redirect('/');
            session.close();
        })
        .catch(function(err) {
            console.log(err);
        })
        //console.log(nome);
    res.redirect('/');
})

app.listen(3000);
console.log('porta 3000');

module.exports = app;