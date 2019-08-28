/*  A simple package to get the list of celebrities borned on the date provided.
    We can get that list by calling a function with date of birth as an argument.
    We can also get the same from a particular location or country by passing the name of country. 
*/

const rpn = require('request-promise-native');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function gettingCelebrities(date_of_birth, country) {  // INPUT - dob and  country name.  OUTPUT->  List of celebrities borned on dob
    let options = {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36'
        }
    };

    return new Promise((resolve, reject) => {
        options.uri = "http://google.com/search?q=";
        if (!country) options.uri += `Famous Celebrities borned on  ${date_of_birth}`;
        else
            options.uri += `Famous Celebrities borned on  ${date_of_birth} in ${country}`;

        rpn(options).then(html => {      // if the query has successfully executed and we got the response then
            const { document } = (new JSDOM(html)).window;
            const celebList = document.querySelectorAll('.i8Z77e li');  //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

            if (!celebList) return reject(`Some error occured in retrieving the list of persons having birthday on ${date_of_birth}`);

            resolve(prep({ name: celebList }));
        }).catch(err => reject(err));
    });
};

function prep(current) {
    var info = current.name;
    var celeb = [];

    for (let i = 0; i < info.length; i++) {
        const s = info[i].textContent;
        var x = s.substr(0, s.indexOf('.'));
        celeb[i] = x;
    }

    return celeb;
};

module.exports = gettingCelebrities;