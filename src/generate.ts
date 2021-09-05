import {getPrompts} from "./prompts";

export async function generate() {
    const prompts = await getPrompts();

    console.log(prompts);
}
