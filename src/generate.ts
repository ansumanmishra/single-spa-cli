import {getPrompts} from "./prompts";
import * as fs from "fs";
import path from "path";
import chalk from "chalk";
import Listr from "listr";

const projectDir = path.resolve(process.cwd());

export async function generate() {
    const {appName, appUrl} = await getPrompts();

    const tasks = new Listr([
        {
            title: 'Updating import map json',
            task: () => {
                const json = JSON.parse(fs.readFileSync(path.resolve(projectDir, 'importmap.json')).toString());
                if (json.imports) {
                    json.imports[appName] = appUrl;
                }
                fs.writeFileSync(path.resolve(projectDir, 'importmap.json'), JSON.stringify(json, null, 2));
                console.log(chalk.green('DONE'));
            }
        }
    ]);

    tasks.run().catch( (err: any) => {
        console.error(err);
    });
}
