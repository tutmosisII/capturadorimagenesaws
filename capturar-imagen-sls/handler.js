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

    await page.goto(event.queryStringParameters.url || 'https://example.com');

    result = await page.title();
  } catch (error) {
    return callback(error);
  } finally {111
    if (browser !== null) {
      await browser.close();
    }
  }

  return callback(null, result);
};

