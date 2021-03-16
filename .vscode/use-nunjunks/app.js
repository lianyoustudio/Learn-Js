'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts)
{
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape;
    var noCache = opts.noCache || false;
    var watch = opts.watch || false;
    var throwOnUndefined = opts.throwOnUndefined || false;
    var env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('views',{
            noCache: noCache,
            watch: watch,
        }),
        {
            autoescape : autoescape,
            throwOnUndefined: throwOnUndefined
        }
    );

    if(opts.filters)
    {
        for(var f in opts.filters)
        {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env; 
}

var env = createEnv('views',
    {
        watch : true,
        filters :{
            hex : function(n) {
                return '0x' + n.toString(16);
            }
        }
    }
);

// var s = env.render('hello.html', {name : '小明'});
// console.log(s);

// var s = env.render('hello.html', { name: '<script>alert("小明")</script>' });
// console.log(s);

// var s = env.render('fruits.html', {fruits : ['apple', 'banana', 'carot']});
// console.log(s);

var s = env.render('extend.html', {header:'Hello', body:'bla bla bla'});
console.log(s);