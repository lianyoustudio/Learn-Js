'use strict';

function testBaseModel(){
    console.log(global.console);

    console.log(process === global.process);
    console.log(process.version);
    console.log(process.platform);
    console.log(process.arch);
    console.log(process.cwd())

    process.nextTick(function(){
        console.log('console next tick');
    });

    console.log('next tick is set');

    process.on('exit', function(code){
        console.log('exit with code ' + code);
    });

    if(typeof(window) === 'undefined')
    {
        console.log('node.js');
    }
    else{
        console.log('browser');
    }
}

module.exports.testBaseModel = testBaseModel;