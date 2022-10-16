import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);


async function run() {
  let standardOut;
  try {
  const { stdout } = await execAsync('npx vitest --reporter json --run' );
  standardOut = stdout;
  } catch(err: any) {
    if(err.stdout) {
      standardOut = err.stdout;
    }
  }
  const result = JSON.parse(standardOut.toString());
  
  console.log(JSON.stringify(result, null, 2));
}

run();
