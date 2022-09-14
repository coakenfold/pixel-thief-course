import { Meta } from "@storybook/react/types-6-0";
import { GameCompleteScreen } from ".";

export default {
    title: "Menu Screen/GameCompleteScreen",
} as Meta;

export const index = () => (
    <GameCompleteScreen onClickGameHomeButton={() => {}} />
);
