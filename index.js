const express = require("express");
const app = express();

//rota inicial
app.get("/", function(req,res){
	res.send("<h1>primeira rota</h1>");
})

//segunda rota
app.get("/segundarota", function(req,res){
	res.send("<h1>segunda rota</h1>");
})

app.get("/terceirarota", function(req,res){
	res.send("<h1>terceira rota</h1>");
})

//rota como parametro
app.get("/consulta/:parametro", function(req,res){
	res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
	
	var nome = req.params.nome;
	if(nome){
		res.send("<h1>produto" + nome + "criado!</h1>");
	}else{
		res.send("produto criado");
	}
})

app.listen(4000,function(erro){
	if(erro){
		console.log("erro ao iniciar");
	}else{
		console.log("servidor iniciado");
	}
})
