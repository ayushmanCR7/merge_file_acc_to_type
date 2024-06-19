import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const base = "C:\\Users\\ayush\\Downloads"
let files = await fs.readdir(base)
console.log(files)
for (const it of files) {
    let ext = it.split(".")[it.split(".").length - 1]
    if(ext != "js" && ext!= "json" && it.split(".").length>1){

    if(fsn.existsSync(path.join(base,ext))){
       fs.rename(path.join(base,it), path.join(base,ext,it));
    }
    else{
        fs.mkdir(ext);
        fs.rename(path.join(base,it), path.join(base,ext,it))
    }
}
}
