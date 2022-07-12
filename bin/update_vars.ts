import fs from "fs";
import lodash from "lodash";
import deepdash from "deepdash";
import config from "./config";
const _ = deepdash(lodash);

const get_var = (v:string) => config.uvars.vars[v] ?? process.env[v];

/**
 * Replaces value here with environment variable REACT_APP_COLOR_PRIMARY
 * 
 * primary: #2196f3, //%REACT_APP_COLOR_PRIMARY%
 */
const defaultReplacer = (v: string) =>
	v.replace(
		/(?<=[\w-]+: *)([\w\-()#{}$]*) *([;,]?) *\/\/%([^%]*)%/g,
		(...m) => `${get_var(m[3]) ?? m[1]}${m[2]} //%${m[3]}%`
	);
/**
 * Replaces value here with environment variable REACT_APP_COLOR_PRIMARY
 * 
 * primary: #2196f3, //%REACT_APP_COLOR_PRIMARY%
 */
const jsonReplacer = (v: string) => {
	let r = JSON.parse(v);
	r = _.mapValuesDeep(r, (v, k, p) => {
		const env = typeof k == "string" && Object.entries(p).find((e) => e[0] === k + "_env");
		if (env) {
			v = get_var(env[1] as string) ?? v;
		}
		return v;
	}, {leavesOnly:true});
	r = JSON.stringify(r, undefined, '	');
	return r;
};



Object.values(config.uvars.files).forEach((d) => {
	const f = fs.readFileSync(d).toString();
	const s = d.split('.'), ext = s[s.length-1];
	
	const r = (ext === 'json'?jsonReplacer : defaultReplacer)(f.toString());
	console.log("W: " + d);
	fs.writeFileSync(d, r);
});
