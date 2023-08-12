import { createReader } from "@keystatic/core/reader";
import config from "keystatic.config";

export const keystatic = createReader(process.cwd(), config);
