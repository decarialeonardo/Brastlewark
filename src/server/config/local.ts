import * as path from 'path';
const rootPath  = path.normalize(`${__dirname}/../..`);

export default {
  buildPath: rootPath,
  api: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
