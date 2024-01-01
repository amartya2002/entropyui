import React from "react";
import { ButtonPrimary } from "../../library/buttonVariants";
import { Tab, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Tabs } from "nextra/components";
import ButtonPrimaryHtml from "../../../data/buttons/ButtonPrimaryHTML.mdx";
import ButtonPrimaryJsx from "../../../data/buttons/ButtonPrimaryJSX.mdx";
import View from "../../view";

export default function section1({ title }) {
  return (
    <>
      {/* <Tab defaultValue="view">
        <div className="flex items-center justify-between">
          <p className="text-zinc-400 text-xl font-medium">{title}</p>
          <div>
            <TabsList>
              <TabsTrigger value="view">View</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
        </div>{" "}
        <TabsContent value="view">
          {" "}
          <AvatarRounded />
        </TabsContent>
        <TabsContent value="code">
          {" "}
          <Tabs items={["HTML", "JSX"]}>
            <Tabs.Tab>
              <AvatarCircularHtml />
            </Tabs.Tab>
            <Tabs.Tab>
              <AvatarCircularJsx />
            </Tabs.Tab>
          </Tabs>
        </TabsContent>
      </Tab> */}

      <View
        title={title}
        renderComponent={<ButtonPrimary />}
        htmlCode={<ButtonPrimaryHtml />}
        jsxCode={<ButtonPrimaryJsx />}
      />
    </>
  );
}
