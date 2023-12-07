import Header from "../../../header";
import { BASIC_HEADER_PROPS, COMPLETE_HEADER_PROPS } from "./data";

import type { Meta, StoryObj } from "@storybook/react";
import { HeaderProps } from "src/header/types";

const meta: Meta<typeof Header> = {
  title: "Templates/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  args: BASIC_HEADER_PROPS as unknown as HeaderProps,
};

export const Complete: Story = {
  args: COMPLETE_HEADER_PROPS as unknown as HeaderProps,
};

export const WithBoxShadow: Story = {
  args: {
    ...COMPLETE_HEADER_PROPS,
    isShadowEnabled: true,
  } as unknown as HeaderProps,
};
