import dark from "./dark";
import light from "./light";

export default { dark, light };
export type Theme = typeof dark | typeof light;
