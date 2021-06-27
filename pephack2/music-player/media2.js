// https://www.djpunjab.fm/page/top20_month.html#gsc.tab=0
const pup = require("puppeteer");
const fs = require("fs");


let finalArr = [];

async function main(){

    //--------open browser---------------//
    // ----------------------------------
    const browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"],
      });

      let pages = await browser.pages();

      tab = pages[0];
      await tab.goto("https://www.djpunjab.fm/page/top20_month.html#gsc.tab=0", {
        waituntil: "load",
        timeout: 0,
      }); //change 2

      await tab.waitForSelector('ol li p a');
      let allUrlElements = await tab.$$('ol li p a');
      let url = [];
      for(let i in allUrlElements){
          let tempUrl = await tab.evaluate(function(el){
              return el.getAttribute('href');
          },allUrlElements[i]);
        //   https://www.djpunjab.fm/single-track/baarish-ki-jaaye-b-praak-mp3-song-297565.html#gsc.tab=0
          url.push("https://www.djpunjab.fm"+tempUrl);
      }

    let promiseArr = [];
    
    for(let i = 1;i < 50;i++){
         await englishSongs(url[i],browser);
        // console.log(`${urlpage}${i}.html`);
    }
    // await englishSongs(urlpage2,browser);
    // await Promise.all(promiseArr);
    console.log(finalArr);
}



async function englishSongs(url, browser){
    const page = await browser.newPage();
    await page.goto(url, { waituntil: "load", timeout: 0 });
   
    
    try{
        let tempObj = {};

        await page.waitForSelector('.album_img img');
        await page.waitForSelector('audio source');
        await page.waitForSelector('.cont-a p');
        
        let imageElement =await page.$('.album_img img');
        // imgUrl
        // ----------------------------------------
        imgUrl = await page.evaluate(function(el){
            return el.getAttribute('src');
        },imageElement)
    
        // audioSrc
        // ----------------------------------------
        let audio = await page.$('audio source');
        let audioSrc = await page.evaluate(function(el){
             return el.getAttribute('src');
        },audio);
    
        // title
        // ---------------------------------------
        // let title = await page.evaluate(function(el){
        //     return el.getAttribute('alt');
        // },imageElement);
        // console.log(imgUrl);
        // console.log(title);
        // console.log(audioSrc)

        //  artist
        // --------------------------------
        let info = await page.$('.border_btm span');
        let title = await(await info.getProperty('innerText')).jsonValue();

        let info2 = await page.$$('.cont-a p');
        let artistSel =await info2[2].$('a');
        let artist = await(await artistSel.getProperty('innerText')).jsonValue();

    
        tempObj['audioSrc'] = audioSrc;
        tempObj['imgUrl'] = imgUrl;
        tempObj['title'] = title;
        tempObj['artist'] = artist;
             
        finalArr.push(tempObj);
        page.close();

    }catch(e){
        console.log(e);
    }
    
       
}


main();

 

