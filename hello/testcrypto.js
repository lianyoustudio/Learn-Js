'use strict';
const crypto = require('crypto');

// const hash = crypto.createHash('md5');
// hash.update('Hello,World'); 
// hash.update('Hello, NodeJS');

// console.log(hash.digest('hex'));

// const hmac = crypto.createHmac('sha256', 'secret-key');
// hmac.update('hello');
// hmac.update('world');

// console.log(hmac.digest('hex'));

// //AES


// function aesEncrypt(data, key) {
//     const cipher = crypto.createCipher('aes192', key);
//     var crypted = cipher.update(data, 'utf8', 'hex');
//     crypted += cipher.final('hex');
//     return crypted; 
// }

// function aesDecrypt(encrypted, key){
//     const decipher = crypto.createDecipher('aes192', key);
//     var decrypted = decipher.update(encrypted, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// var data = 'Hello, this is a secret message!';
// var key = 'Password!';

// var encrypted = aesEncrypt(data, key);
// var decrypted = aesDecrypt(encrypted, key);

// console.log('data: ' + data);
// console.log('encrypted: ' + encrypted);
// console.log('decrypted: ' + decrypted);

//DH 

var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('prime: ' + prime.toString('hex'));
console.log('generator: ' + generator.toString('hex'));

var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

console.log('ming_secret: ' + ming_secret.toString('hex'));
console.log('hong_secret: ' + hong_secret.toString('hex'));

//RSA 

