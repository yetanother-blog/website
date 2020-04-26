const fetch = require('node-fetch');

module.exports = {
  async onEnd({ utils, error }) {
    console.log(JSON.stringify(utils.git.commits));

    let message = 'Success';

    if (error) {
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
