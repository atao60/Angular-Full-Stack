/**
 * Make available variables from environment and env files in npm scripts:
 * 
 * Any required transformation should be done through 'config'
 * 
 * Note. Even if bash doesn't allow creation of variable in thir name, env vars
 *       with such name are balid.
 * 
 * See https://github.com/vielhuber/from-env
 */

import { config as values } from '../../server/config/config';

import { argv, exit } from 'process';
import * as spawn from 'cross-spawn';
import { hasIn, get } from 'lodash';

const varPrefix = '$'; // '$' must be escaped inside an npm script with simple quotes, eg "'$'varname" or "'$varname'"

const args = argv.slice(2);
args.forEach((args__value, args__key) => {
    if (args__value[0] !== varPrefix) {
        return;
    }

    const varPath = args__value.substring(1);
    if (!hasIn(values, varPath)) {
        return;
    }

    args[args__key] = get(values, varPath);
});

const command = args.shift();
const proc = spawn.sync(command, args, { stdio: 'inherit' });
exit(proc.status);
