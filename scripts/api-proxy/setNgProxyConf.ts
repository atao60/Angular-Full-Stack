/**
 * Update api proxy configuration file
 * 
 */
import { config } from '../../server/config/config';

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { env } from 'process';

const proxyFilePath = env.PROXY_FILE_PATH || './proxy.conf.json';

const proxyFileContent = existsSync(proxyFilePath) ? readFileSync(proxyFilePath, 'utf8') : "{}";

const oldConf = JSON.parse(proxyFileContent);

const newConf = Object.assign({}, oldConf, config.api.proxy);

if (JSON.stringify(oldConf) !== JSON.stringify(newConf)) {
    const newFileContent = JSON.stringify(newConf, null, 2) + "\n";
    writeFileSync(proxyFilePath, newFileContent, { "encoding": "utf8" });
}
