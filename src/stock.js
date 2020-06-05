var request = require('request');
const async = require('async');
const fetch = require('node-fetch');

var services = {
    "NPSE":{
        "todaysprice": "https://nepse-data-api.herokuapp.com/data/todaysprice",
        //http://www.nepalstock.com/todaysprice?_limit=5
        //https://github.com/koju/nepse-data/blob/0d5086851f865b88caef35ccb8a91dd93898c06c/src/main/resources/application.properties
    },
    "IDX":{
        "comapanies":"https://www.idx.co.id/umbraco/Surface/ListedCompany/GetCompanyProfiles?start=0&length=3&search[value]=&search[regex]=false",
    }
};

exports.init = async function (request, callback) {

    exports.getIdxCompanies(null, function (res) {
        callback(res);
    });
};


 exports.getIdxCompanies = function (req,callback) {
    let url = 'https://www.idx.co.id/umbraco/Surface/ListedCompany/GetCompanyProfiles?start=0&length=3&search[value]=&search[regex]=false';
     fetchJson(url,callback);
 };



 function fetchJson(url,callback) {
     fetch(url)
         .then(response => response.json())
         .then(entities => {
             callback(entities);
         });
 }

// async function async_fetch(url) {
//     let response = await fetch(url);
//     if (response.ok) return await response.json();
//     throw new Error(response.status)
// }

// async function fetchAsync (input) {
//     // await response of fetch call
//     let response = await fetch(input);
//     // only proceed once promise is resolved
//     let data = await response.json();
//     // only proceed once second promise is resolved
//     return data;
// }
