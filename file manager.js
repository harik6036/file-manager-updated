//organize
//tree
//help
//
//command dirpath

let command=process.argv[2];
let dirpath= process.argv[3];
let treeobject=require("./tree.js");
//let helpobject=require("../help");
let organizeobject=require("./organize.js");

// console.log(command);
// console.log(dirpath);
switch(command)
{
    case "organize":
        organizeobject.organizekey(dirpath);
       break;

      
    case "help":
        //console.log("the help fn is implemented");
        helpfn()
        break;

        default:
            console.log("enter the correct command");
}




function helpfn(){
console.log(`following are the commands
1 organize "dirpath"
2 tree "dirpath"
3 help`);


}