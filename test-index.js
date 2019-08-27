
const getdetails = require('./index.js');

/*  INPUT: 
    following function can take two arguments date of birth and country.
    You can get the country name by using any IP to Geo Location service API.
    So you can also call it like -- getdetails("02 october", "India").then(......  )
    For further details you can see the respective github page- https://github.com/lookquad/born-on
*/

getdetails("02 october").then(info => {
    if (Array.isArray(info)) {
        console.log(`\n`);
        console.log(`List of celebrities are - `);
        console.log(`\n`);


        for (let i = 0; i < info.length; i++) {
            console.log(info[i]);
            // console.log(`\n`);
        }
    }

    /* OUTPUT:
        Mahatma Gandhi
        Richard III of England
        Roberto Firmino
        Johnnie Cochran
        Lal Bahadur Shastri
        Lorraine Bracco
        Huda Kattan
        Groucho Marx
    */
});