import * as inquirer from "inquirer";

export async function getPrompts() {
    const questions = await inquirer.prompt([{
        name: 'App Name',
        type: 'input',
        message: 'Name of your Micro frontend'
    }]);

    return questions;
}
