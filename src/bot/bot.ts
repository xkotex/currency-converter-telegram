var request = require('request');

// import Telegraf from 'telegraf';

// import { getConfig } from '../config/config';

// const config = getConfig('bot_config_');
// const bot = new Telegraf(config.bot_section.bot_token);
// bot.start((ctx) => ctx.reply('Welcome!'));
// (<any>bot).launch().then(() => {
//   console.log('Bot started') 
// });

const options = {
  method: 'GET',
  uri: 'https://risingstack.com'
}

request('https://www.eway.in.ua/ajax/ua/kharkiv/routes', { json: true }, (err: any, res: any, body: any) => {
if (err) { return console.log(err); }
console.log(body);
});