const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/curse/, (msg, match) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Какая валюта васинтересует', {
      reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '€ EUR',
                    callback_data: 'EUR'
                }, {
                    text: '$ USD',
                    callback_data: 'USD'
                }, {
                    text: '₽ RUR',
                    callback_data: 'RUR'
                }, {
                    text: '₿ BTC',
                    callback_data: 'BTC'
                }
            ]
        ]
      }
  });
});

bot.on('callback_query', query =>{
    const id = query.message.chat.id;

    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(err, response, body) {
        const data = JSON.parse(body);
        const result = data.filter(item => item.ccy === query.data)[0];
        console.log(query);
        console.log(result);

        const flag = {
            'EUR': '🇪🇺',
            'USD': '🇺🇸',
            'RUR': '🇷🇺',
            'UAH': '🇺🇦',
            'BTC': '₿'
        }

        let markDown = `
            *${flag[result.ccy]} ${result.ccy} 💱 ${result.base_ccy} ${flag[result.base_ccy]}*
            Buy: _${result.buy}_
            Sale: _${result.sale}_
        `;
        bot.sendMessage(id, markDown, {parse_mode: 'Markdown'});
    })
});
