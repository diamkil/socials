import fs from 'fs';
import path from 'path';

/* This function is the one used to get the correct json file and parse the info from the filesystem. Id is the name of our variable which is given when calling the function */
export default function getData(id: string) {
  /* Simply getting the current directory from where code is being run to parse the json files */
  const informationDirectory = path.join(process.cwd(), 'people');

  /* The direct path to our file is the directory from where code is being run and we add the name of the json file at the end */
  const fullPath = path.join(informationDirectory, `${id}.json`);
  /* We get everything in the file */
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  /* We "parse" the json from the file essentially turning the json in an object we can use */
  const JSONcontent = JSON.parse(fileContents);

  return JSONcontent;
}
