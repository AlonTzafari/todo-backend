"use strict"

const fs = require("fs");

function randomId(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function createBin(data) {
    // fs.readdirSync("./database/bins")
    const id = randomId(8);
    const content = JSON.stringify(data);
    fs.appendFileSync(`${__dirname}/database/bins/${id}.json`, content);
    return id;
}
module.exports = {
    createBin
}