"use client";
import { createClient } from "@supabase/supabase-js";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { ScaleLoader } from "react-spinners";
import PracticeInterface from "./PracticeInterface";

import {
  BeakerIcon,
  BookOpen,
  FileText,
  FlaskConicalIcon,
  GraduationCap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopicNavigator from "@/components/topicNavigator";
import TopicModal from "@/components/topicModal";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl || "", supabaseKey || "");
async function fetchTopics() {
  const { data, error } = await supabase.from("topics").select("key, data");

  if (error) {
    console.error("There ws an error fetching the data");
    return null;
  }
  return data;
}

export default function TopicsFetcher({
  params,
}: {
  params: { topic: string; topicsIndexer: Record<string, number> };
}) {
  const topic = params.topic;
  const topicsIndexer = params.topicsIndexer;
  const currentIndex = topicsIndexer[topic];
  const [topicsState, settopicsState] = useState<
    { key: any; data: any }[] | null
  >(null);

  useEffect(() => {
    async function getTopics() {
      const topics = await fetchTopics();
      settopicsState(topics);
    }
    getTopics();
  }, []);

  console.log(topicsState);
  return (
    <div className="min-h-screen bg-background">
      {topicsState ? (
        <div className="container mx-auto px-4 py-8">
          <TopicModal />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}

            {topicsState && (
              <Sidebar
                sections={topicsState[currentIndex]?.data.sections || []}
                form={topicsState && topicsState[currentIndex]?.data.form}
              />
            )}

            {/* Main Content */}
            <div className="lg:col-span-9">
              <h2 className="text-base font-bold ">
                Form {topicsState && topicsState[currentIndex]?.data.form}
              </h2>
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {topicsState && topicsState[currentIndex]?.data.title}
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {topicsState && topicsState[currentIndex]?.data.description}
                </p>
              </div>
              <div className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger
                      value="notes"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Notes
                    </TabsTrigger>
                    <TabsTrigger
                      value="practice"
                      className="flex items-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      Practice
                    </TabsTrigger>
                    {/* <TabsTrigger
                      value="Results"
                      className="flex items-center gap-2"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Results
                    </TabsTrigger> */}
                  </TabsList>

                  <TabsContent value="notes">
                    <Card>
                      <ScrollArea className=" p-6">
                        <div className="prose prose-slate max-w-none">
                          {topicsState &&
                            topicsState[currentIndex]?.data.sections.map(
                              (
                                section: {
                                  title:
                                    | string
                                    | number
                                    | boolean
                                    | ReactElement<
                                        any,
                                        string | JSXElementConstructor<any>
                                      >
                                    | Iterable<ReactNode>
                                    | PromiseLikeOfReactNode
                                    | null
                                    | undefined;
                                  content:
                                    | string
                                    | number
                                    | boolean
                                    | ReactElement<
                                        any,
                                        string | JSXElementConstructor<any>
                                      >
                                    | Iterable<ReactNode>
                                    | ReactPortal
                                    | PromiseLikeOfReactNode
                                    | null
                                    | undefined;
                                },
                                index: Key | null | undefined
                              ) => (
                                <div
                                  key={index}
                                  id={
                                    typeof section.title === "string"
                                      ? section.title
                                      : undefined
                                  }
                                  className="mb-8"
                                >
                                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <FlaskConicalIcon className="h-5 w-5 text-primary" />
                                    {section.title}
                                  </h2>
                                  <div className="text-muted-foreground whitespace-pre-line">
                                    {section.content}
                                  </div>
                                </div>
                              )
                            )}
                        </div>
                      </ScrollArea>
                    </Card>
                  </TabsContent>

                  <TabsContent value="practice">
                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4">
                        Practice Problems
                      </h3>
                      <PracticeInterface topic={topic} />
                    </Card>

                    <TopicNavigator
                      params={{
                        topic,
                        topicsIndexer,
                        form:
                          topicsState && topicsState[currentIndex]?.data.form,
                      }}
                    />
                  </TabsContent>

                  {/* <TabsContent value="Results">
                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Results</h3>
                      <p className="text-muted-foreground">
                        No results to display yet. Attempt questions in the
                        practice tab.
                      </p>
                    </Card>

                   
                  </TabsContent> */}
                  {/* <TopicNavigator
                    params={{
                      topic,
                      topicsIndexer,
                      form: topicsState && topicsState[currentIndex]?.data.form,
                    }}
                  /> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center relative top-36">
          <ScaleLoader color={"#1a1a1a"} loading={true} />
        </div>
      )}
    </div>
  );
}
