import React from "react";
import { Bleed } from 'nextra-theme-docs'
import { Tab, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Tabs } from "nextra/components";

export default function view({ title, renderComponent, htmlCode, jsxCode }) {
  return (
    <>

      <Tab defaultValue="view">
        <div className="flex items-center justify-between">
          <p className="text-zinc-400 text-xl font-medium">{title}</p>

          <div>
            
            <TabsList>
              <TabsTrigger value="view">View</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
        </div>{" "}
        <TabsContent value="view"> {renderComponent}</TabsContent>
        <TabsContent value="code">
          {" "}
          <Tabs items={["HTML", "JSX"]}>
            <Tabs.Tab>{htmlCode}</Tabs.Tab>
            <Tabs.Tab>{jsxCode}</Tabs.Tab>
          </Tabs>
        </TabsContent>
      </Tab>
    </>
  );
}
