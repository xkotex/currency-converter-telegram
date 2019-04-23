// var request = require('request');
// var fs = require('fs');

// function req(routeId){
//     var headers = {
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Accept-Language': 'en-US,en;q=0.9',
//         'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36',
//         'Accept': '*/*',
//         'Referer': 'https://www.eway.in.ua/ua/cities/kharkiv/routes',
//         'X-Requested-With': 'XMLHttpRequest',
//         'Connection': 'keep-alive',
//         'Cookie': 'old_full_version=1; full_version=1; city^[key^]=kharkiv; lang=ua; _ga=GA1.3.597882238.1555523992; _gid=GA1.3.1155398554.1555784911; _gat_UA-26195241-1=1'
//     };
    
//     var options = {
//         url: 'https://www.eway.in.ua/ajax/ua/kharkiv/stopPopup/' + routeId,
//         headers: headers
//     };

//     function callback(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(String.fromCharCode(...toUTF8Array(body)));
//         }
//     }
//     request(options, callback);
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

// async function app(){
//     let array = [186771];

//         for(let a = 0; a < array.length; a++){
//             await sleep(2000).then(() => {
//                 try {
//                     req(array[a]);
//                 } catch(err){
//                     console.log(err)
//                 }
//             });
//         }
// }

// function toUTF8Array(str) {
//     var utf8 = [];
//     for (var i=0; i < str.length; i++) {
//         var charcode = str.charCodeAt(i);
//         if (charcode < 0x80) utf8.push(charcode);
//         else if (charcode < 0x800) {
//             utf8.push(0xc0 | (charcode >> 6), 
//                       0x80 | (charcode & 0x3f));
//         }
//         else if (charcode < 0xd800 || charcode >= 0xe000) {
//             utf8.push(0xe0 | (charcode >> 12), 
//                       0x80 | ((charcode>>6) & 0x3f), 
//                       0x80 | (charcode & 0x3f));
//         }
//         // surrogate pair
//         else {
//             i++;
//             charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
//             utf8.push(0xf0 | (charcode >>18), 
//                       0x80 | ((charcode>>12) & 0x3f), 
//                       0x80 | ((charcode>>6) & 0x3f), 
//                       0x80 | (charcode & 0x3f));
//         }
//     }
//     return utf8;
// }

// app();

var request = require('request');
var iconv  = require('iconv-lite');

var headers = {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36',
    'Accept': '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'https://www.eway.in.ua/ua/cities/kharkiv/routes',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'Cookie': 'old_full_version=1; full_version=1; city^[key^]=kharkiv; lang=ua; _ga=GA1.3.597882238.1555523992; _gid=GA1.3.1155398554.1555784911; _gat_UA-26195241-1=1'
};

var options = {
    url: 'https://www.eway.in.ua/ajax/ua/kharkiv/stopPopup/69954',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        // var utf8String = iconv.decode(new Buffer(body), "hex");
        // var buffer = new Buffer(utf8String, 'hex');
asdsadsadsadsa
        // console.lodasdsadasdg(buffer.toString('utf8'));
    }
}
dsadsadsadsa
request(options, callback);dasdsadsadsadsa
dsadsadsadsa
afdafsdfdsfdsfdfdsfsadasdasdsad





