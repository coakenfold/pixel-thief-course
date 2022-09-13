import { flatten } from "lodash";
import { GRID_COLS, GRID_ROWS } from "../constants";

const row = (rowIndex: number) =>
    Array(GRID_COLS)
        .fill(null)
        .map((_, i) => [i, rowIndex]);
export const grid = flatten(
    Array(GRID_ROWS)
        .fill(null)
        .map((_, rowIndex) => row(rowIndex))
);
