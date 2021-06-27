require("chromedriver");
let fs = require('fs');
const { connected } = require("process");
let wd = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let browser = new wd.Builder().forBrowser('chrome').build();

let myInput = "bad - sidhu moose wala";
// var args = process.argv.slice(2);
console.log("THE SONG/ARTIST WILL BE DOWNLOADED IN A MINUTE.");


async function main(){
    await browser.get("https://pagalfree.com/");
    // let inputField = document.getElementById("searchtextval");
    await browser.findElement(wd.By.id("searchtextval")).sendKeys(myInput);
    await browser.findElement(wd.By.className("btn btn-primary")).click();
    await browser.findElement(wd.By.id("category_content")).click();
    await browser.findElement(wd.By.className("btn-download")).click();
}
// main();


async function second(){
    await browser.get("https://mp3land.co/english-mp3-songs-download-free-full/page/2/");
    let songContainer = await browser.findElements(wd.By.css(".post-title a"));
    let urls = [];
    for(let i in songContainer){
        let tempUrl = await songContainer[i].getAttribute("href");
        let tempName = await songContainer[i].getText();
        let tempObj ={};
        tempObj['url'] = tempUrl;
        tempObj['name'] = tempName;
        urls.push(tempObj);
    }
    console.log(urls);
    // // let songsInfo = await browser.wait(wd.until.elementLocated(wd.By.css(".item-list.item_2.post-thumbnail")));
    // let songsInfo = await browser.findElements(wd.By.css(".item-list.item_2")).findElement;
    
    // console.log(songsInfo.length);
    // for(let i = 0; i < songsInfo.length; i++){
    //     let tempObj = {};
    //     let tempName = await songsInfo[i]
    //     console.log(tempName);      
    // }
    
}


async function three(){
    await browser.get("https://pagalfree.com/category/Punjabi.html");
    let allSongs = await browser.findElements(wd.By.css(".col-lg-6.col-md-6.col-sm-12.col-xs-12 a"));
    let urls= [];
    for(let i = 0; i < 19; i++){
       
            let tempUrl = await allSongs[i].getAttribute("href");
            urls.push(tempUrl);
    }
    
    for(let i in urls){
        await browser.get(urls[i]);
        let btn = await browser.wait(wd.until.elementLocated(wd.By.css(".col-lg-12.col-md-12.col-sm-12.col-xs-12 a")));
        btn.click();

        
    }

    
}

three();
