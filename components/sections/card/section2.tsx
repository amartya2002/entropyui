import React from "react";
import { CardNoImg } from "../../library/cardVariants";
import { Tab, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Tabs } from "nextra/components";
import AvatarSquareHtml from "../../../data/avatars/avatarSquareHTML.mdx";
import AvatarSquareJsx from "../../../data/avatars/avatarSquareJSX.mdx";
import View from "../../view";

export default function section2({ title }) {
  return (
    <>
      <View
        title={title}
        renderComponent={<CardNoImg />}
        htmlCode={<AvatarSquareHtml />}
        jsxCode={<AvatarSquareJsx />}
      />
    </>
  );
}
