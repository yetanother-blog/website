module.exports = {
  async onPreBuild({ utils }) {
    try {
      await utils.run.command('git diff --exit-code yarn.lock');
    } catch (error) {
      utils.build.failBuild(
        'Please commit the latest updates in your yarn.lock file!'
      );
    }

    await Promise.all([
      utils.run.command('yarn build-storybook'),
      utils.run.command('yarn test:ci'),
    ]).catch((err) => {
      utils.build.failBuild('CI failed!');
    });
  },
};
