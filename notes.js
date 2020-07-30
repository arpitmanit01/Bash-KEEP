var fs=require("fs");
var chalk=require("chalk");

var allnotes=[];
var getall=function(){
try{
    allnotes=JSON.parse(fs.readFileSync("allnotes.json").toString());
}
catch(e){
    allnotes=[];
}
}


var addnote=function(vart,varb){
    getall();
    var t={
        title:vart.trim(),
        body:varb.trim()
    }

    var found =false;
    for(var i=0;i<allnotes.length;i++){
        if(allnotes[i].title===vart.trim())
            found=true;{
            break;
        }
    }
    debugger;
    if(!found){
        allnotes.push(t);
        fs.writeFileSync("allnotes.json",JSON.stringify(allnotes));
        console.log(chalk.green.inverse("Added SUCCESSFULLY!"));
    }
    else{
        console.log(chalk.red.inverse("TITLE already present!"));
    }
}

var removenote=function(vart){
    getall();
    var a=allnotes.length;
    var t=allnotes.filter(function(item){
        return item.title!=vart;
    });
    allnotes=t;
    var b=allnotes.length;
    if(a===0){console.log(chalk.white.inverse("No Notes Present!"));}
    else{
    if(a===b){
        console.log(chalk.red.inverse("No such title exists!"));
    }
    else{
        fs.writeFileSync("allnotes.json",JSON.stringify(allnotes));
        console.log(chalk.green.inverse("Removed SUCCESSFULLY!"));
    }
    }
}

var listall=function(){
    getall();
    var t= allnotes;
    var i=0;
    console.log(chalk.white(" <--------  ")+ chalk.white.inverse("  ALL NOTES  ")+chalk.white(" -------->  "));
    t.forEach((item)=>{
        i++;
        console.log(i+"."+chalk.magenta(item.title)+"  -  "+chalk.blue(item.body));  
        });
    i=0;
    console.log(chalk.white(" <----------")+ "-------------"+chalk.white("--------->  "));
}

var readnote=function(vart){
    getall();
    var found=false;
    var ans;
    for(var i=0;i<allnotes.length;i++){
        if(allnotes[i].title===vart){
            ans=allnotes[i];
            found=true;
            break;
        }
    }
    if(!found){
        console.log(chalk.red.inverse("No such title exists!"));
    }
    else{
        console.log(chalk.white(" <--------  ")+ chalk.white.inverse("    RESULT    ")+chalk.white(" -------->  \n"));
        
            console.log("  1 . "+chalk.magenta(ans.title)+"  -  "+chalk.blue(ans.body));  
            
        console.log(chalk.white("\n <----------")+ "-------------"+chalk.white("---------->  "));
    }

}

module.exports={
    addnote:addnote,
    removenote:removenote,
    listall:listall,
    readnote:readnote
}