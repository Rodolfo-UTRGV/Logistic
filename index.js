import API from './API';
import config from './config.json';
import translation from './translation.json'

console.log('###################################################################################');
console.log('## --.--                                                                         ##');
console.log('##   |      ,---.    ,---.    ,---.    ,---.    ,---.    ,---.    ,---.    ,---. ##');
console.log('##   |      |        ,---|    |   |    `---.    |        |   |    |        |   | ##');
console.log("##   `      `        `---^    `   '    `---'    `---'    `---'    `        `---' ##");
console.log('###################################################################################');

global.__base           = __dirname;
global.__config         = config;
global.__translation    = translation;

new API;