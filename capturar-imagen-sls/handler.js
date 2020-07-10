'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!'
      },
      null,
      2
    ),
  };
};

const chromium = require('chrome-aws-lambda');
const fsex = require('fs-extra');


/**
 * This method is called by the APi Gateway in AWS using Lambda.
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
exports.handler = async (event, context, callback) => {
  let result = null;
  let browser = null;
  let ep=await chromium.executablePath;
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: ep,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();
    console.log(JSON.stringify({e:event}));
    console.log("xxx %s",event.queryStringParameters.url);
    console.log("ep %s",ep);
    console.log("args: %s",chromium.args);
    // let dom = await page.on('domcontentloaded',async function (){
    //   console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
    //   let htxx= await page.evaluate(()=>document.querySelector('html'));
    //   console.log("DOM: %s", htxx);
    //   return htxx;
    // });   
    await page.goto(event.queryStringParameters.url || 'https://example.com');
    await page.screenshot({path:'/tmp/screen.png'});
                             
       
    // fsex.outputFile('/tmp/documentDOM.html', dom, function (err,data) {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log(data);
    // });
    let html = await page.content();
    fsex.outputFile('/tmp/content.html', html, function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
    result = await page.title();
  } catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
     // await fsex.close();
    }
  }

  return callback(null, result);
};

