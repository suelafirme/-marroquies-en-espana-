import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('www',{recursive:true});
await copyFile('index.html','www/index.html');
console.log('Marroquíes en España: self-contained site copied to www/');
