import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
import TopicsFetcher from "@/components/topicsFetcher";
import {
  BeakerIcon,
  BookOpen,
  FileText,
  FlaskConicalIcon,
  GraduationCap,
} from "lucide-react";

type FormKeys = "form1" | "form2" | "form3" | "form4";
type ContentKeys =
  | "intro-to-chemistry"
  | "states-of-matter"
  | "acids-bases-indicators"
  | "air-and-combustion"
  | "water-and-hydrogen"
  | "structure-of-the-atom"
  | "chemical-families"
  | "structure-and-bonding"
  | "properties-and-trends"
  | "salts"
  | "electrolysis-1"
  | "carbon-and-its-compounds"
  | "gas-laws"
  | "the-mole"
  | "organic-chemistry-1"
  | "nitrogen-and-its-compounds"
  | "sulphur-and-its-compounds"
  | "chlorine-and-its-compounds"
  | "acids-bases-salts"
  | "energy-changes"
  | "reaction-rates"
  | "organic-chemistry-2"
  | "electrochemistry"
  | "metals"
  | "radioactivity";

const topicsIndexer: Record<string, number> = {
  "intro-to-chemistry": 0,
  "states-of-matter": 1,
  "acids-bases-indicators": 2,
  "air-and-combustion": 3,
  "water-and-hydrogen": 4,
  "structure-of-the-atom": 5,
  "chemical-families": 6,
  "structure-and-bonding": 7,
  "properties-and-trends": 8,
  salts: 9,
  "electrolysis-1": 10,
  "carbon-and-its-compounds": 11,
  "gas-laws": 12,
  "the-mole": 13,
  "organic-chemistry-1": 14,
  "nitrogen-and-its-compounds": 15,
  "sulphur-and-its-compounds": 16,
  "chlorine-and-its-compounds": 17,
  "acids-bases-salts": 18,
  "energy-changes": 19,
  "reaction-rates": 20,
  "organic-chemistry-2": 21,
  electrochemistry: 22,
  metals: 23,
  radioactivity: 24,
};

export default async function Page({
  params,
}: {
  params: { form: string; topic: string };
}) {
  const { topic } = await params;
  const { form } = await params;

  return <TopicsFetcher params={{ topic, topicsIndexer }} />;
}

export async function generateStaticParams() {
  const forms: FormKeys[] = ["form1", "form2", "form3", "form4"];
  const topics: ContentKeys[] = [
    "intro-to-chemistry",
    "states-of-matter",
    "acids-bases-indicators",
    "air-and-combustion",
    "water-and-hydrogen",
    "structure-of-the-atom",
    "chemical-families",
    "structure-and-bonding",
    "properties-and-trends",
    "salts",
    "electrolysis-1",
    "carbon-and-its-compounds",
    "gas-laws",
    "the-mole",
    "organic-chemistry-1",
    "nitrogen-and-its-compounds",
    "sulphur-and-its-compounds",
    "chlorine-and-its-compounds",
    "acids-bases-salts",
    "energy-changes",
    "reaction-rates",
    "organic-chemistry-2",
    "electrochemistry",
    "metals",
    "radioactivity",
  ];

  // Generate all combinations of forms and topics
  const params = [];
  for (const form of forms) {
    for (const topic of topics) {
      params.push({ form, topic });
    }
  }

  return params;
}
