import { theme } from "./theme";

export const space = (amount: number) => {
    return `${amount * theme.spacePx}px`;
};
