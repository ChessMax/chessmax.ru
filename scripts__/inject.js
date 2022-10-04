/**
 * hexo-include
 * https://github.com/pirtleshell/hexo-include.git
 * Copyright (c) 2015, Robert Pirtle
 * Licensed under MIT License
 *
 * Inserts the raw contents of a file into a hexo markdown file.
 *
 * Syntax:
 *   {% inject path/to/file %}
 *   Path is relative to your source__ directory.
 */


// hexo.extend.tag.register('include_alt', include, { asyn: true });
// hexo.extend.tag.register('inject', function (args) {
//     let str = "<canvas id=\"myCanvas\" width=\"150\" height=\"150\"></canvas>";
//     return str;
// });

// var fs = require('hexo-fs');
// var nunjucks = require('nunjucks');
// var pathFn = require('path');
// const {resolve} = require("../themes/next/scripts__/events/lib/utils");
// // hexo.extend.tag.register('include_alt', include, { asyn: true });
// hexo.extend.tag.register('inject', function (args) {
//     let str = "<canvas id=\"myCanvas\" width=\"150\" height=\"150\"></canvas>";
//     return resolve(str);
//     // var path = pathFn.join(hexo.source_dir, args[0]);
//     // return new Promise(function(resolve, reject) {
//     //     nunjucks.render(path, function(err, res) {
//     //         if (err) {
//     //             return reject(err);
//     //         }
//     //         resolve(res);
//     //     });
//     // });
// }, {async: true});

var fs = require('hexo-fs');
var pathFn = require('path');

hexo.extend.tag.register('inject', async args => {
    var filename = args[0];
    var path = pathFn.join(hexo.source_dir, filename);

    return await fs.readFile(path);
}, {async: true});

// var fs = require('hexo-fs');
// var pathFn = require('path');
//
// hexo.extend.tag.register('inject', function(args){
//     var filename = args[0];
//     var path = pathFn.join(hexo.source_dir, filename);
//
//     return fs.readFile(path).then(function(content){
//         return '<pre><code>' + content + '</code></pre>';
//     });
// }, {async: true});

// const fs = require('fs');
// const path = require('path');
//
// hexo.extend.tag.register(
//     'inject',
//     async args => {
//         let filePath = args[0];
//         const file = path.join(hexo.source_dir, filePath);
//
//         if (!fs.existsSync(file)) {
//             throw new Error(`Path "${file}" does not exist.`);
//         }
//
//         const isDirectory = fs.lstatSync(file).isDirectory();
//
//         if (isDirectory) {
//             throw new Error(`Directory "${file}" path is not supported.`);
//
//         }
//
//         return await fs.readFile(file);
//     },
//     {async: true}
// );

// var pathFn = require('path');
// var fs = require('hexo-fs');
//
// var include = function(ctx) {
//     return function includeTag(args) {
//         return "<canvas id=\"myCanvas\" width=\"150\" height=\"150\"></canvas>";
//         var path = pathFn.join(ctx.source_dir, args[0]);
//
//         // exit if path is not defined
//         if (!path) {
//             console.warn("Include file path undefined.");
//             return;
//         }
//
//         // check existence, if it does, check there is content, return content
//         return fs.exists(path).then(function(exist) {
//             if (!exist) {
//                 console.warn('Include file not found.');
//                 return;
//             }
//             return fs.readFile(path).then(function(contents) {
//                 if (!contents) {
//                     console.warn('Include file empty.');
//                     return;
//                 }
//                 return contents;
//             });
//         });
//     };
// }(hexo);
//
// hexo.extend.tag.register('inject', include, {async: true});
