//join for content access in the file
const path= require("path");
const fs= require("fs");
let extension={
    Audio:[".mp3"],
    video:[".mp4",".mkv",".gif"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png"],
    software:[".exe"]
}


function organizefn(dirpath){
    //1 input the directory path given
    //2 create organize files
    //3 check the category of all files to that directory
    //4 cut/copy the files to organized files
let destPath;

    if(dirpath==undefined){
console.log("kindly enter the path");
    }
    else{
        let doesExist=fs.existsSync(dirpath)
        if(doesExist){
            //create organize files directory
       destPath=path.join(dirpath,"organizefiles");
       //agr organize file exist nhi krta ho to bna do 
       if(fs.existsSync(destPath)==false) 
       {

           fs.mkdirSync(destPath);
       }
        //organize file directory created


        }
        else{
            console.log("enter the correct path");
        }
    }


    //now read the files and identify the category of files in the folder
    //src file will be unorganized and destination will be organized directory
    organizehelper(dirpath,destPath);
    
}

function organizehelper(src,dest){
    //read the file and check the category
   let filesnames= fs.readdirSync(src);
   for(let i=0;i<filesnames.length;i++)
   {
let address=path.join(src,filesnames[i]);
let isFile=fs.lstatSync(address).isFile();
if(isFile){
    //agr file he to cut/copy krdo usse phele extensios check kro

    let ext=path.extname(filesnames);// to check which category it belongs
    for(let type in extension){
        //extensions sare
        let ctypearray=extension[type];
        for(let i=0;i<ctypearray.length;i++){
            if(ext==ctypearray){
                return type;
            }
        }
        return others;
    }
}
   }
   sendfile(address,dest,filesnames);

   //cut or copy file

}
function sendfile(address,dest,filenames){
    let categoryPath=path.join(dest,filenames);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let filename=path.basename(address);
   let destFilepath=path.join(categoryPath,filename);
   fs.copyFileSync(src,destFilepath);
}


module.exports={
    organizekey:organizefn

}
