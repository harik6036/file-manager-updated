let fs= require("fs");
let path= require("path");
let folderpath=process.argv[2];
let folderExists=fs.existsSync(folderpath);
let extensions={
    Audio:[".mp3"],
    Video:[".mp4",".mkv"], 
    document:[".doc",".xlsx",".pdf",".txt"],
    image:[".jpeg",".jpg",".png",".gif"],
    software:[".exe"]
};
if(folderExists){
    let files=fs.readdirSync(folderpath);
    for(let i=0;i<files.length;i++){
        let ext=path.extname(files[i]);
        let nameofFolder=giveFolderName(ext);
        let pathofFolder= path.join(folderpath,nameofFolder);
        let exist=fs.existsSync(pathofFolder);
        if(exist)
        {
            moveFile(folderpath,pathofFolder,files[i]);

        }
        else {
            fs.mkdirSync(pathofFolder);
            moveFile(folderpath,pathofFolder,files[i]);
        }
    }
}
else{
    console.log("please enter a valid path");
}
function giveFolderName(ext){
    for(let key in extensions){
        let extarr=extensions[key];
        for(let i=0;i<extarr.length;i++)
        {
            if(extarr[i]==ext){
                return key;
            }
        }
    }
    return 'others'
}
function moveFile(folderpath,pathofFolder,fileName){
    let sourcePath=path.join(folderpath,fileName);
    let destinationPath=path.join(pathofFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}