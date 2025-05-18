const { Helper } = require('codeceptjs');

class PlaywrightDialogHelper extends Helper {
  async handleDialog(messageIncludes) {
    const { page } = this.helpers.Playwright;
    page.once('dialog', async (dialog) => {
      if (!dialog.message().includes(messageIncludes)) {
        throw new Error('xpected validation message not shown');
      }
      await dialog.accept();
    });
  }
}

module.exports = PlaywrightDialogHelper;
