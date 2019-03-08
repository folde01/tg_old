'use strict';
/*jshint esversion: 6 */

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    articles_dir = './views/Articles';

const mongo_url = 'mongodb://localhost:27017/techgrazer';
mongoose.connect(mongo_url, {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));

var articleSchema = new mongoose.Schema({
    title: String,
    folder: String,
});

var Article = mongoose.model('Article', articleSchema);

app.get('/', function(req, res) {
    res.redirect('/articles');
});

app.get('/articles', function(req, res) {
    // get all articles from db
    Article.find({}, function(err, allArticles){
        if (err){
            console.log(err);
        }
        // ok to render even if err?
        res.render('index', {articles: allArticles});
    });
});

app.get('/articles/new', function(req, res) {
    res.render('new');
});

app.post('/articles', function(req, res) {
    // get data from form and add to articles array
    const newArticle = {
        title: req.body.title,
        folder: req.body.folder
    };
    Article.create(newArticle, function(err, article){
        if (err){
            console.log(err);
        } 

        // Todo: make mkdir asynchronous and handle errors
        
        const article_dir = articles_dir + '/' + newArticle.folder;

        if (!fs.existsSync(article_dir)) {
            fs.mkdirSync(article_dir);
        }

        // fs.writeFileSync(article_dir + '/article.ejs');
        fs.copyFileSync(articles_dir + '/template.ejs', article_dir + '/article.ejs');
        
        res.redirect('/articles');
    });
});

app.get('/articles/:id', function(req, res){
    Article.findById(req.params.id, function(err, foundArticle){
        if (err){
            console.log(err);
        }
        foundArticle.indexPage = '../' + articles_dir + '/' + foundArticle.folder + '/index.html';
        //res.render('show', {article: foundArticle});

        res.render('Articles/' + foundArticle.folder + '/article');
    });
});

if (process.argv[2] === 'createStarterData'){
    createStarterData();
} 

app.listen(4444, 'localhost', function() {
    console.log('techgrazer is running!!!!');
});