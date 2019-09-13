//const csvFilePath = 'Bok1.csv'

//const csv = require('csvtojson')

//var fs = require('fs')

//const path = require('path')
//csv()
//.fromFile(csvFilePath)
//.then((jsonObj)=>{
  //  console.log(jsonObj);
    //fs.writeFile(json.json,jsonObj)
//  })

//  const jsonArray =csv().fromFile(csvFilePath);
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'Bok1.csv';
let fileOutputName = 'target.json';
console.log('Csv to Json Complete')
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
