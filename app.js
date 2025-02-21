import pkg from 'webvtt-parser';
const { WebVTTParser } = pkg;
import fs from "fs";

// Set local directory path
const DIR_PATH = "/path/to/transcript/files"

// Get txt files
var files = fs.readdirSync(DIR_PATH);

// Set WEBVTT parser
var pa = new WebVTTParser();

// Loop over each .txt file
console.log("INVALID:")
files.forEach((file) => {
    if (file.split(".").pop() == "txt") {
        var path = DIR_PATH + "/" + file;
        fs.readFile(path, (err, data) => {
            if (err) throw err;
    
            var r = pa.parse(data.toString(), "captions");
            var errors = r.errors.length;
            if (errors > 0)
            {
                console.log(file);
            }   
        })
    }
})