const os = require('os');

const executablePaths = {
    'linux': '/usr/bin/google-chrome',
    'darwin': '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
};

const platform = os.platform();

module.exports = executablePaths[platform];