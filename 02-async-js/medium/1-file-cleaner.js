const fs=require('fs');

const pathName = path.join(__dirname,"1-file-cleaner.md");
fs.readFile(pathName,'utf-8',(err,data)=>{
    if(err)
    console.log(err);
    else
    {
       const cleanedData= data.replace(/\s+/g,'');
        fs.writeFile(pathName,cleanedData,(err)=>{
            if(err)
            console.log(err)
            else
            console.log('File cleaned successfully.');
        });
    }
})

