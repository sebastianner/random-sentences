const pupeteer = require('puppeteer')

async function randomSentence() {
    const browser = await pupeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://randomwordgenerator.com/sentence.php')

    let getSentence = await page.evaluate(()=>{
        const span = document.getElementsByClassName('support-sentence')[0]
        return span.innerHTML
    })
        
    browser.close()
    return getSentence
}

module.exports = {randomSentence}