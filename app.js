'use strict';
/*jshint esversion: 6 */

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const mongo_url = 'mongodb://localhost:27017/techgrazer';
mongoose.connect(mongo_url, {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(express.static('images'));
app.use(bodyParser.urlencoded({ extended: true }));

var tutorialSchema = new mongoose.Schema({
    title: String,
    date: String,
    image: String,
    description: String,
    text: String
});

var Tutorial = mongoose.model('Tutorial', tutorialSchema);

const starterData = [
    {
        title: 'Tutorial 1 title',
        date: '25 Feb 2019',
        image: 'laptop-on-desk.jpg',
        description: `Tutorial 1 description. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod.`,
        text: `Tutorial 1 body. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod eloquentiam, eos ex causae indoctum. In ius aperiri eripuit definitiones, nec in posse urbanitas. Vim malis oratio elaboraret ad. Mei accumsan adipisci periculis ut, per apeirian temporibus an. Ne usu invidunt praesent.

        Usu et vocibus repudiare. Modo impetus est id, luptatum posidonium eu pri. Ad vim quot aeque, eos et partem apeirian. Eum ne veritus legendos constituam, no inciderint reformidans ius. Eos verterem gubergren et, postulant voluptaria sit cu, ad voluptua electram gloriatur qui. Movet solet eu usu, eum ex choro ignota eloquentiam, ius novum nostrum necessitatibus ea.
        
        Quo omnis albucius cu, sed ad elit debet aliquando. Duo nisl integre no, no nibh ullum pri, per eros decore vocent ut. Mea elit accumsan hendrerit ex, quod quaeque maiestatis eos eu, eu quodsi detraxit voluptaria vel. Ad duo purto iusto ocurreret, alia expetenda scribentur vim at. Sit in rebum docendi dissentiunt, saepe quaerendum contentiones eos ut.
        
        No docendi fastidii molestie per. Sit te congue voluptatibus, labores hendrerit in usu, sed alia solet ei. Bonorum pertinax persequeris te mei. Vis altera numquam ea, iisque necessitatibus sed ad. Mei atqui liberavisse no, vis adhuc minimum eu. Has veniam lucilius consequuntur ea. Vel aliquam inciderint ei, nec no omnium tacimates.
        
        Ea efficiantur comprehensam nec. Pri reque dicta hendrerit ex, id civibus pertinacia sit, id vix oratio populo iuvaret. Te quidam denique nam, qui ei sint ipsum dissentiunt. Et qui stet assentior, magna oblique vix et. Audire suscipit antiopam sed at. Ex mutat vocibus inimicus vix.`
    },
    {
        title: 'Tutorial 2 title',
        date: '26 Feb 2019',
        image: 'programmers-in-an-office.jpg',
        description: `Tutorial 2 description. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod.`,
        text: `Tutorial 2 body. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod eloquentiam, eos ex causae indoctum. In ius aperiri eripuit definitiones, nec in posse urbanitas. Vim malis oratio elaboraret ad. Mei accumsan adipisci periculis ut, per apeirian temporibus an. Ne usu invidunt praesent.

        Usu et vocibus repudiare. Modo impetus est id, luptatum posidonium eu pri. Ad vim quot aeque, eos et partem apeirian. Eum ne veritus legendos constituam, no inciderint reformidans ius. Eos verterem gubergren et, postulant voluptaria sit cu, ad voluptua electram gloriatur qui. Movet solet eu usu, eum ex choro ignota eloquentiam, ius novum nostrum necessitatibus ea.
        
        Quo omnis albucius cu, sed ad elit debet aliquando. Duo nisl integre no, no nibh ullum pri, per eros decore vocent ut. Mea elit accumsan hendrerit ex, quod quaeque maiestatis eos eu, eu quodsi detraxit voluptaria vel. Ad duo purto iusto ocurreret, alia expetenda scribentur vim at. Sit in rebum docendi dissentiunt, saepe quaerendum contentiones eos ut.
        
        No docendi fastidii molestie per. Sit te congue voluptatibus, labores hendrerit in usu, sed alia solet ei. Bonorum pertinax persequeris te mei. Vis altera numquam ea, iisque necessitatibus sed ad. Mei atqui liberavisse no, vis adhuc minimum eu. Has veniam lucilius consequuntur ea. Vel aliquam inciderint ei, nec no omnium tacimates.
        
        Ea efficiantur comprehensam nec. Pri reque dicta hendrerit ex, id civibus pertinacia sit, id vix oratio populo iuvaret. Te quidam denique nam, qui ei sint ipsum dissentiunt. Et qui stet assentior, magna oblique vix et. Audire suscipit antiopam sed at. Ex mutat vocibus inimicus vix.`
    },
    {
        title: 'Tutorial 3 title',
        date: '27 Feb 2019',
        image: 'pair-programmers.jpg',
        description: `Tutorial 3 description. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod.`,
        text: `Tutorial 3 body. Lorem ipsum dolor sit amet, sed tale accusamus at, vel no euismod eloquentiam, eos ex causae indoctum. In ius aperiri eripuit definitiones, nec in posse urbanitas. Vim malis oratio elaboraret ad. Mei accumsan adipisci periculis ut, per apeirian temporibus an. Ne usu invidunt praesent.

        Usu et vocibus repudiare. Modo impetus est id, luptatum posidonium eu pri. Ad vim quot aeque, eos et partem apeirian. Eum ne veritus legendos constituam, no inciderint reformidans ius. Eos verterem gubergren et, postulant voluptaria sit cu, ad voluptua electram gloriatur qui. Movet solet eu usu, eum ex choro ignota eloquentiam, ius novum nostrum necessitatibus ea.
        
        Quo omnis albucius cu, sed ad elit debet aliquando. Duo nisl integre no, no nibh ullum pri, per eros decore vocent ut. Mea elit accumsan hendrerit ex, quod quaeque maiestatis eos eu, eu quodsi detraxit voluptaria vel. Ad duo purto iusto ocurreret, alia expetenda scribentur vim at. Sit in rebum docendi dissentiunt, saepe quaerendum contentiones eos ut.
        
        No docendi fastidii molestie per. Sit te congue voluptatibus, labores hendrerit in usu, sed alia solet ei. Bonorum pertinax persequeris te mei. Vis altera numquam ea, iisque necessitatibus sed ad. Mei atqui liberavisse no, vis adhuc minimum eu. Has veniam lucilius consequuntur ea. Vel aliquam inciderint ei, nec no omnium tacimates.
        
        Ea efficiantur comprehensam nec. Pri reque dicta hendrerit ex, id civibus pertinacia sit, id vix oratio populo iuvaret. Te quidam denique nam, qui ei sint ipsum dissentiunt. Et qui stet assentior, magna oblique vix et. Audire suscipit antiopam sed at. Ex mutat vocibus inimicus vix.`
    }
];

function createStarterData(){
    console.log('Creating starter data.');
    starterData.forEach(function(tutorial){
        Tutorial.create({
           title: tutorial.title,
           date: tutorial.date,
           image: tutorial.image,
           description: tutorial.description,
           text: tutorial.text
        }, function(err, tutorial){
            if (err) {
                console.log(err);
            }
        });
    });
}

app.get('/', function(req, res) {
    res.redirect('/tutorials');
});

app.get('/tutorials', function(req, res) {
    // get all tutorials from db
    Tutorial.find({}, function(err, allTutorials){
        if (err){
            console.log(err);
        }
        // ok to render even if err?
        res.render('index', {tutorials: allTutorials});
    });
});

app.get('/tutorials/new', function(req, res) {
    res.render('new');
});

app.post('/tutorials', function(req, res) {
    // get data from form and add to tutorials array
    const newTutorial = {
        title: req.body.title,
        date: req.body.date,
        image: req.body.image,
        description: tutorial.description,
        text: req.body.text,
    };
    // tutorials.push(newTutorial);
    Tutorial.create(newTutorial, function(err, tutorial){
        if (err){
            console.log(err);
        } 
        res.redirect('/tutorials');
    });
});

app.get('/tutorials/:id', function(req, res){
    Tutorial.findById(req.params.id, function(err, foundTutorial){
        if (err){
            console.log(err);
        }
        res.render('show', {tutorial: foundTutorial});
    });
});

if (process.argv[2] === 'createStarterData'){
    createStarterData();
} 

app.listen(4444, 'localhost', function() {
    console.log('techgrazer is running!!!!');
});