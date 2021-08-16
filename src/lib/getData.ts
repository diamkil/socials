import fs from 'fs';
import path from 'path';

/* This function is the one used to get the correct json file and parse the info from the filesystem. Id is the name of our variable which is given when calling the function */
export default function getData(id: string) {
  /* We get everything in the file */
  const fileContents = fs.readFileSync(path.join(process.cwd(), 'people', `${id}.json`), 'utf8');

  /* We "parse" the json from the file essentially turning the json in an object we can use */
  const JSONcontent = JSON.parse(fileContents);

  return JSONcontent;
}
