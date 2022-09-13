import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            black: string;
            focus: string;
            white: string;
        };
        fontSize: string[];
        fontFamily: string;
        spacePx: number;
    }
}
