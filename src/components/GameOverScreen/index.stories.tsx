import { Meta } from "@storybook/react/types-6-0";
import { GameOverScreen } from ".";

export default {
    title: "Menu Screen/GameOverScreen",
} as Meta;

export const index = () => (
    <GameOverScreen onClickRestartGameButton={() => {}} />
);
