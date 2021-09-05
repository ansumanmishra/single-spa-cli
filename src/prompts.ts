import * as inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        name: 'appName',
        type: 'input',
        message: 'Name of your Micro frontend',
        validate: (input: any) => {
            if (!input) {
                console.log(chalk.red('Name should not be blank'))
                return;
            }
            return true;
        }
    },
    {
        name: 'appUrl',
        type: 'input',
        message: 'URL of your Micro frontend',
        validate: (input: any) => {
            if (!input) {
                console.log(chalk.red('URL should not be blank'));
                return;
            }
            return true;
        }
    }];

export async function getPrompts() {
    return await inquirer.prompt(questions);
}
