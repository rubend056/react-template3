import fs from "fs";
export const configPath = process.env.CONFIG_PATH ?? "./config.json";

type Entry = {
	url: string;
	path: string;
	clear?: boolean;
};
type DTypes = { path: string; entries: Entry[] }

type Vars = Record<string,string>;
type Files = string[];

export type Config = {dtypes: DTypes, uvars: {vars: Vars, files: Files}}

if(!fs.existsSync(configPath))throw Error("Config path doesn't exist");

const config = JSON.parse(fs.readFileSync(configPath)?.toString()) as Config;
export default config;

