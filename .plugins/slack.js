const fetch = require('node-fetch');

module.exports = {
  async onEnd(input) {
    console.log(input);

    let message = 'Success';

    if (input.error) {
      message = 'Error';
    }

    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SLACK_DEPLOYMENT_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: 'C012K6XJEH1',
        text: message,
      }),
    });
  },
};
