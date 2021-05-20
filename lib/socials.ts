import fs from 'fs';
import path from 'path';

/* Simply getting the current directory from where code is being run to parse the json files */
const informationDirectory = path.join(process.cwd(), 'people');

/* This function allows to get the name of all the json files if you wish to use prerendering it get get the path for getStaticPaths */
export function getAllPeopleIds() {
  const files = fs.readdirSync(informationDirectory);

  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

/* This function is the one used to get the correct json file and parse the info from the filesystem. Id is the name of our variable which is given when calling the function */
export async function getPeopleData(id: string) {
  /* The direct path to our file is the directory from where code is being run and we add the name of the json file at the end */
  const fullPath = path.join(informationDirectory, `${id}.json`);
  /* We get everything in the file */
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  /* We "parse" the json from the file essentially turning the json in an object we can use */
  const JSONcontent = JSON.parse(fileContents);

  return JSONcontent;
}
