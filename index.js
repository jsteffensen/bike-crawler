// bike-crawler
const https = require('https');
const bl = require('bl');
const parser = require('node-html-parser');

let url = 'https://www.specialized.com/dk/en/shop/bikes/road-bikes/adventure--gravel-bikes/c/roadadventuregravel';

httpsGet(url).then((data)=>{
    //parse(data);
}, (e)=>{
    console.log(e);
});


function parse(data){

    let page = parser.parse(data);
    console.log(page.toString());
    //let owlStage = page.querySelector('.owl-stage');
    /*let owlItem = owlStage.querySelectorAll('.owl-item');

    owlItem.forEach((item)=>{
        let modelUrl = item.querySelector('a');
        console.log(modelUrl.getAttribute('href'));
    });*/

}

async function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            response.setEncoding('utf8');
            response.pipe(bl((err, data) => {
                if (err) {
                    reject(err);
                }
                if(response.statusCode == 404) {
                    reject('Page does not exist');
                }
                resolve(data.toString());
            }));
        });
    });
}