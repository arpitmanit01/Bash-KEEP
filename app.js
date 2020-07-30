const yargs=require("yargs");
const chalk=require("chalk");
const notes=require("./notes.js");
//ADD COMMAND ka section
yargs.command(
    'add','To add  an item',
    {
    title:{
        alias:'t',
        description:"Title of Note",
        type:"string",
        demand:true
    },
    body:{
        alias:'b',
        description:"Body of Note",
        type:"string",
        demand:true
    }    
    }

    ,
    function(res){
        notes.addnote(res.title,res.body);
    }
);

//REMOVE COMMAND ka section hai yeh
yargs.command(
    "remove",
    "To remove an item",
    {
        title:{
            alias:'t',
            description:"Title of Note",
            type:"string",
            demand:true
        }
    },
    function(res){
        notes.removenote(res.title);
    }
);


//READ COMMAND ka section
yargs.command(
    'read','To read an item',
    {
        title:{
            alias:'t',
            description:"Title of Note",
            type:"string",
            demand:true
        }
    }
    ,
    function(res){
    
        notes.readnote(res.title);
    }
);


//LIST COMMAND ka section
yargs.command(
    'list','To list an item',function(res){
        notes.listall();
    }
);


yargs.parse();
