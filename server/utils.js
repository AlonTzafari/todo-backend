"use strict"

const fs = require("fs");

function randomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function createBin(data) {
    // fs.readdirSync("./database/bins")
    const id = randomId(8);
    fs.appendFileSync(`./database/bins/${id}.json`, data);
    return id;
}
module.exports = {
}