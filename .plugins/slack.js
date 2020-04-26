const fetch = require('node-fetch');

module.exports = {
  async onEnd({ utils, error }) {
    console.log(JSON.stringify(utils.git.commits));

    let text = '*Whoop Whoop new release for yetanother.blog! 🎉* \n\n';
    text += 'Commits: \n\n';
    text += utils.git.commits
      .map(
        (commit) =>
          `* ${commit.message} by _${
            commit.committer.name
          }_ ((${commit.sha.substring(
            0,
            7
          )})[https://github.com/yetanother-blog/website/commit/${commit.sha}])`
      )
      .join(' \n');

    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SLACK_DEPLOYMENT_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: 'C012K6XJEH1',
        text,
      }),
    });
  },
};
