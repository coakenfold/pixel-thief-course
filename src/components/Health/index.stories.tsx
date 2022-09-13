import { Meta } from "@storybook/react/types-6-0";
import { Health } from ".";

export default {
    title: "Small Components/Health",
} as Meta;

export const index = () => <Health health={3} />;
