var express = require("express")
var app = express()


var mongoose = require('mongoose')
        var conexao = ()=>{
                var caminho = mongoose.connect('mongodb+srv://gabkratos:megumin05@cluster0.2djee.mongodb.net/mongoatlas?retryWrites=true&w=majority')
        }
var schema = mongoose.Schema
var depoimentos = new schema({
        nome:String,
        cargo:String,
        mensagem:String
})
var documentos = mongoose.model('depoimentos', depoimentos)
var porta = process.env.PORT || 3030

app.set("view engine", "ejs")
app.use (express.static('./'))

app.get("/", (req,res)=>{
        conexao()
        documentos.find().limit(3).sort({'_id':-1})
        .then((documentos)=>{
                console.log(documentos)
                res.render('index',{documentos})
        })
})

app.listen(porta)