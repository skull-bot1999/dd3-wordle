import { promises as fsPromises } from "fs";

export async function asyncReadFile(filename: any) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");

    const arr = contents.split(/\r?\n/);

    return arr;
  } catch (err) {
    console.log(err);
  }
}
