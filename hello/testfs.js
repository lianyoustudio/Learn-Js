'use strict';

var fs = require('fs'); 

// fs.readFile('./file/sample.txt', 'utf8', function(err, data) {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });

// fs.readFile('./file/sample.png', function(err, data) {
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log(data);
//         console.log(data.length + ' bytes')
//     }
// })

// 同步读文件
// try {
//     var data = fs.readFileSync('./file/sample.txt', 'utf8')
//     console.log(data);
// }
// catch(err)
// {
//     console.log(err);
// }

//写文件
// var writeData = 'hello, node.js';
// fs.writeFile('./file/output.txt', writeData, function(err){
//     if(err)
//     {
//         console.log(err);
//     }
// })

// fs.writeFileSync('./file/output.txt', 'nononoooooooooooooo')

//获取文件stat
// fs.stat('./file/output.txt', function(err, stat){
//     if (err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log('is file? ' + stat.isFile());
//         console.log('is directory? ' + stat.isDirectory()); 

//         if(stat.isFile())
//         {
//             console.log('size: ' + stat.size);
//             console.log('birth time: ' + stat.birthtime);
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// })

// var rs = fs.createReadStream('./file/sample.txt', 'utf8');

// rs.on('data', function(chunk){
//     console.log('Data');
//     console.log(chunk);
// });

// rs.on('end', function(){
//     console.log('End');
// });

// rs.on('error', function(err){
//     console.log('Error: ' + err);
// });

// var ws1 = fs.createWriteStream('./file/output1.txt', 'utf8');
// ws1.write('使用stream流写入数据...\n');
// ws1.write('END');
// ws1.end();

// var ws2 = fs.createWriteStream('./file/output2.txt', 'utf8');
// ws2.write(Buffer.alloc('使用steam流写入数据2...\n'));
// ws2.write(Buffer.alloc('END'));
// ws2.end();

var readable = fs.createReadStream('./file/sample.txt', 'utf8');
var writeable = fs.createWriteStream('./file/copied.txt', 'utf8');
readable.pipe(writeable);
// readable.pipe(writeable, {end :false});