const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
app.use(cors());
app.use(bodyparser.json());
//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'masterclass',
    port: 3306
});
//check data base connection
db.connect(err => {
    if (err) { console.log(err, 'bderr'); }
    console.log('database connected ..');
});
/**--------------Formation Data------------------------------------- */
//get all Formationdata
app.get('/formation', (req, res) => {
    let qr = 'select * from formation';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all formation data',
                data: result
            });
        }
    });
});
//get single Formationdata 
app.get('/formation/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from formation where idFormation= ${qId} `;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});
//delete formation data
app.delete('/formation/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from formation where idFormation='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'formation data deleted'
            }
        );
    });
});
//create formation data
app.post('/formation',(req,res)=>
{
    let titreFormation=req.body.titreFormation;
    let prixFormation=req.body.prixFormation;
    let dureeHeure=req.body.dureeHeure;
    let dureeSemaine=req.body.dureeSemaine;
    let idInstructor=req.body.idInstructor;
    let categorieFormation=req.body.categorieFormation;
    let nbParticipant=req.body.nbParticipant;
    let description=req.body.description;
    let program=req.body.program;
    let nbEtoiles=req.body.nbEtoiles;
    let image=req.body.image;
    let populaire=req.body.populaire;
    let paiementParMois=req.body.paiementParMois;

    let qr=` insert into formation(titreFormation,prixFormation,dureeHeure,dureeSemaine,idInstructor,categorieFormation,nbParticipant,description,program,nbEtoiles,image,populaire,paiementParMois) values('${titreFormation}','${prixFormation}','${dureeHeure}','${dureeSemaine}','${idInstructor}','${categorieFormation}','${nbParticipant}','${description}','${program}','${nbEtoiles}','${image}','${populaire}','${paiementParMois}')`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'formation data inserted'
        });
    });

});
//update formation data
app.put('/formation/:id',(req,res)=>
{   let idFormation=req.body.idFormation;
    let titreFormation=req.body.titreFormation;
    let prixFormation=req.body.prixFormation;
    let dureeHeure=req.body.dureeHeure;
    let dureeSemaine=req.body.dureeSemaine;
    let idInstructor=req.body.idInstructor;
    let categorieFormation=req.body.categorieFormation;
    let nbParticipant=req.body.nbParticipant;
    let description=req.body.description;
    let program=req.body.program;
    let nbEtoiles=req.body.nbEtoiles;
    let image=req.body.image;
    let populaire=req.body.populaire;
    let paiementParMois=req.body.paiementParMois;
    

    let qr=`update formation set idFormation='${idFormation}', titreFormation='${titreFormation}' ,prixFormation='${prixFormation}' ,dureeHeure='${dureeHeure}' ,dureeSemaine='${dureeSemaine}' ,idInstructor='${idInstructor}' ,categorieFormation='${categorieFormation}' ,nbParticipant='${nbParticipant}' ,description='${description}',program='${program}' ,nbEtoiles='${nbEtoiles}' ,image='${image}' ,populaire='${populaire}' ,paiementParMois='${paiementParMois}' where idFormation='${idFormation}'`
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'formation data updated'
        });
    });
});
/**--------------Instructor Data------------------------------------- */
//get all instructordata
app.get('/instructor', (req, res) => {
    let qr = 'select * from isntructor';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all Instuctor data',
                data: result
            });
        }
    });
});
//get single Instructordata 
app.get('/instructor/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from isntructor where 	idInstructor= ${qId} `;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});
//delete Instructor data
app.delete('/instructor/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from isntructor where idInstructor='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'instructor data deleted'
            }
        );
    });
});

/**----------demande Formateur------------------------- */
//get all instructordata
app.get('/formateur', (req, res) => {
    let qr = 'select * from demandeformateur';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all Instuctor data',
                data: result
            });
        }
    });
});
//get single Instructordata 
app.get('/formateur/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from demandeformateur where 	idFormateur= ${qId} `;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});
//delete Instructor data
app.delete('/formateur/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from demandeformateur where idFormateur='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'formateur data deleted'
            }
        );
    });
});
/**--------------Categorie Data------------------------------------- */
//get categorieData
app.get('/categorie', (req, res) => {
    let qr = 'select * from categorie';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all categorie data',
                data: result
            });
        }
    });
});
//delete Categorie data
app.delete('/categorie/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from categorie where idCategorie='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'Categorie data deleted'
            }
        );
    });
});

//create categorie data
app.post('/categorie',(req,res)=>
{
   let nomCategorie=req.body.nomCategorie;

    let qr=` insert into categorie(nomCategorie) values('${nomCategorie}')`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'categorie data inserted'
        });
    });

});
//update categorie data
app.put('/categorie/:id',(req,res)=>
{   let nomCategorie=req.body.nomCategorie;
    let qId = req.params.id;

    let qr=`update categorie set nomCategorie='${nomCategorie}' where idCategorie=${qId}`
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'categorie data updated'
        });
    });
});
//get single categorie Data
app.get('/categorie/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from categorie where idCategorie= ${qId} `;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single categorie data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});
/**--------------Contact Data------------------------------------- */
//get contact data
app.get('/contact',(req,res)=>
{
    let qr ='select * from contact ';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all contact data',
                data: result
            });
        }
    });
});
//create contact data
app.post('/contact',(req,res)=>
{console.log(req.body, "createdata");
let contactNom=req.body.contactNom;
let contactMail=req.body.contactMail;
let contactTel=req.body.contactTel;
let contactMessage=req.body.contactMessage;

let qr =` insert into contact (contactNom,contactMail,contactTel,contactMessage) values('${contactNom}','${contactMail}','${contactTel}','${contactMessage}')`;
console.log(qr, 'qr');
db.query(qr, (err, result) => {
    if (err) { console.log(err); }
    console.log(result, "result")
    res.send({
        message: 'studiant data inserted'
    });
});
});
//delete Contact data
app.delete('/contact/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from contact where idContact='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'Contact data deleted'
            }
        );
    });
});

/**--------------Etudiant Data------------------------------------- */
//get etudiant Data
app.get('/inscription', (req, res) => {
    let qr = 'select * from etudiant';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all etudiant data',
                data: result
            });
        }
    });
});
//get single inscriptuion
app.get('/inscription/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from etudiant where idEtudiant=${qId}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all etudiant data',
                data: result
            });
        }
    });
});

//create studiant data
app.post('/inscription', (req, res) => {
    console.log(req.body, "createdata");
    let firstname = req.body.nomEtudiant;
    let lastname = req.body.prenomEtudiant;
    let numTel = req.body.numeroTelEtudiant;
    let email = req.body.emailEtudiant;
    let categorie = req.body.nomCategorie;
    let accepter=req.body.accepter;

    let qr = `insert into etudiant(nomEtudiant,prenomEtudiant,numeroTelEtudiant,emailEtudiant,nomCategorie,accepter) values('${firstname}','${lastname}','${numTel}','${email}','${categorie}','${accepter}')`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'studiant data inserted'
        });
    });
});
//delete etudiant data
app.delete('/inscription/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from etudiant where idEtudiant='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'inscription data deleted'
            }
        );
    });
});
//update inscription etudiant accepter data

/*app.put('inscriptionAccept/:id',(req,res)=>
{let accepter=req.body.accepter;
    let qId= req.params.id;
    let qr=`update etudiant set accepter=${accepter} where idEtudiant=${qId} `;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'studiant data inserted'
        });
    });
});
//update nos etudiant data
app.put('/inscription/:id', (req, res) => {
    console.log(req.body, "createdata");
    let nomNosEtudiant = req.body.nomNosEtudiant;
    let prenomNosEtudiant = req.body.prenomNosEtudiant;
    let numeroTelNosEtudiant = req.body.numeroTelNosEtudiant;
    let emailNosEtudiant = req.body.emailNosEtudiant;
    let nomCategorie = req.body.nomCategorie;
    let accepter=req.body.accepter;
    let qId= req.params.id;
    let qr=`update nosetudiant set nomEtudiant='${nomNosEtudiant}', prenomEtudiant='${prenomNosEtudiant}' ,numeroTelEtudiant='${numeroTelNosEtudiant}' ,emailEtudiant='${emailNosEtudiant}' ,nomCategorie='${nomCategorie}' ,accepter='${accepter}' where idEtudiant=${qId}`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'studiant data inserted'
        });
    });
});
*/
/**-----------Nos Etudiant data------------------------------ **/
//get nos etudiant data
app.get('/etudiant', (req, res) => {
    let qr = 'select * from  nosetudiant';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all etudiant data',
                data: result
            });
        }
    });
});

//get single etudiant data
app.get('/etudiant/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from  nosetudiant where idNosEtudiant=${qId}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all etudiant data',
                data: result
            });
        }
    });
});

//delete nos etudiant data
app.delete('/etudiant/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from nosetudiant where idNosEtudiant='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'etudiant data deleted'
            }
        );
    });
});
//create nos etudiant data
app.post('/etudiant', (req, res) => {
  
    let nomNosEtudiant = req.body.nomNosEtudiant;
    let prenomNosEtudiant = req.body.prenomNosEtudiant;
    let numeroTelNosEtudiant = req.body.numeroTelNosEtudiant;
    let emailNosEtudiant = req.body.emailNosEtudiant;
    let nomCategorie = req.body.nomCategorie;
    let accepter=req.body.accepter;

    let qr = `insert into nosetudiant(nomNosEtudiant,prenomNosEtudiant,numeroTelNosEtudiant,emailNosEtudiant,nomCategorie,accepter) values('${nomNosEtudiant}','${prenomNosEtudiant}','${numeroTelNosEtudiant}','${emailNosEtudiant}','${nomCategorie}','${accepter}')`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'studiant data inserted'
        });
    });
});
//update nos etudiant data
app.put('/etudiant/:id', (req, res) => {
    console.log(req.body, "createdata");
    let nomNosEtudiant = req.body.nomNosEtudiant;
    let prenomNosEtudiant = req.body.prenomNosEtudiant;
    let numeroTelNosEtudiant = req.body.numeroTelNosEtudiant;
    let emailNosEtudiant = req.body.emailNosEtudiant;
    let nomCategorie = req.body.nomCategorie;
    let accepter=req.body.accepter;
    let qId= req.params.id;
    let qr=`update nosetudiant set nomNosEtudiant='${nomNosEtudiant}', prenomNosEtudiant='${prenomNosEtudiant}' ,numeroTelNosEtudiant='${numeroTelNosEtudiant}' ,emailNosEtudiant='${emailNosEtudiant}' ,nomCategorie='${nomCategorie}' ,accepter='${accepter}' where idNosEtudiant=${qId}`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'studiant data inserted'
        });
    });
});


/**--------------Blog Data------------------------------------- */
//get blog Data
app.get('/blog', (req, res) => {
    let qr = 'select * from blog';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all blog data',
                data: result
            });
        }
    });
});
//get single blog Data
app.get('/blog/:id', (req, res) => {
    let qId = req.params.id;
    let qr = `select * from blog where 	idBlog= ${qId} `;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        if (result.length > 0) {
            res.send({
                message: 'get single blog data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});
//delete formation data
app.delete('/blog/:id',(req,res)=>
{
    let qId= req.params.id;
    let qr=` delete from blog where idBlog='${qId}'`;
    db.query(qr,(err,result)=>
    {
        if(err)
        {crossOriginIsolated.log(err);}
        res.send(
            {
                message:'blog data deleted'
            }
        );
    });
});

//create blog data
app.post('/blog',(req,res)=>
{ let dateBlog=req.body.dateBlog;
    let auteurBlog=req.body.auteurBlog;
    let titreBlog=req.body.titreBlog;
    let descriptionBlog=req.body.descriptionBlog;
    let categorieBlog=req.body.categorieBlog;
    let contenueBlog=req.body.contenueBlog;
    let imageBlog=req.body.imageBlog;
    let imageAuteur=req.body.imageAuteur;
  

    let qr=` insert into blog(auteurBlog,dateBlog,titreBlog,descriptionBlog,categorieBlog,contenueBlog,imageBlog,imageAuteur) values('${auteurBlog}','${dateBlog}','${titreBlog}','${descriptionBlog}','${categorieBlog}','${contenueBlog}','${imageBlog}','${imageAuteur}')`;
    console.log(qr, 'qr');
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'formation data inserted'
        });
    });

});

//update blog data
app.put('/blog/:id',(req,res)=>
{ let dateBlog=req.body.dateBlog;
    let auteurBlog=req.body.auteurBlog;
    let titreBlog=req.body.titreBlog;
    let descriptionBlog=req.body.descriptionBlog;
    let categorieBlog=req.body.categorieBlog;
    let contenueBlog=req.body.contenueBlog;
    let imageBlog=req.body.imageBlog;
    let imageAuteur=req.body.imageAuteur;
    
    let qId = req.params.id;
    let qr=`update blog set dateBlog='${dateBlog}', titreBlog='${titreBlog}' ,auteurBlog='${auteurBlog}' ,imageBlog='${imageBlog}' ,imageAuteur='${imageAuteur}' ,categorieBlog='${categorieBlog}' ,descriptionBlog='${descriptionBlog}' ,contenueBlog='${contenueBlog}' where idBlog=${qId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        console.log(result, "result")
        res.send({
            message: 'blog data updated'
        });
    });
})

/**---------Comment Data-------------- */
app.get('/comment', (req, res) => {
    let qr = 'select * from comment';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all comment data',
                data: result
            });
        }
    });
});

app.listen(4000, () => { console.log('server running ..'); });