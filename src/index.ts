import Listr from 'listr';
import {generate} from "./generate";

const tasks = new Listr([
    {
        title: 'Run tests',
        task: () => console.log('hi')
    }
]);

generate();

// tasks.run().catch( (err: any) => {
//     console.error(err);
// });

