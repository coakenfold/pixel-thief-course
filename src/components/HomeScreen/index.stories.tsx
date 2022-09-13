import { Meta } from "@storybook/react/types-6-0";
import { HomeScreen } from ".";

export default {
    title: "Menu Screen/HomeScreen",
} as Meta;

export const index = () => <HomeScreen onClickStartGameButton={() => {}} />;
