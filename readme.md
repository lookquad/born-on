# Born-On

This is a Node package that can be used to retrieve the list of celebrities borned on a particular date. With the help of search engines we can find it eaasily. But when it comes to program we need some technique to get that list in our program, So we have exploited that power of search engines to get the name of celebrities borned on the specified date. And later this list can be used for further processing. 

## Installing the Package

```bash
npm install born-on --save
```

## Usage
After installing the package create a file with any name (say test.js) and write the folowing code- 

```js
var bornOn = require("born-on");
bornOn("02 october").then(info => {
    if (Array.isArray(info)) {
        for (let i = 0; i < info.length; i++) {
            console.log(info[i]);
            console.log(`\n`);
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
```

If you want to retrieve the list of celebrities borned on a particular date and in a particular country you can do it as following-

```js
var bornOn = require("born-on");
bornOn("02 october", "India").then(info => {
    if (Array.isArray(info)) {
        for (let i = 0; i < info.length; i++) {
            console.log(info[i]);
            console.log(`\n`);
        }
    }

    /* OUTPUT:
        Mahatma Gandhi
        Lal Bahadur Shastri
        Asha Parekh
        Persis Khambatta
        Rohit Roy
        Ashutosh Kaushik
        Rachana Banerjee
        Praveen Kumar
    */
});
```
The location can also be inserted at the functiona call by using any IP to Geographical location API. 

## License

[MIT][mit] © [lookquad][author]

[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/lookquad