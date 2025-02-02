"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  AtomIcon,
  FlaskConicalIcon,
  MicroscopeIcon,
  BeakerIcon,
} from "lucide-react";
import Link from "next/link";

export default function ChemistryPage() {
  const forms = [
    {
      id: 1,
      icon: AtomIcon,
      topics: ["Matter", "Acids and bases", "Hydrogen and oxygen"],
    },
    {
      id: 2,
      icon: FlaskConicalIcon,
      topics: ["Chemical Bonding", "Periodic table", "Atomic Structure"],
    },
    {
      id: 3,
      icon: MicroscopeIcon,
      topics: [
        "Organic Chemistry",
        "Nitrogen,Chlorine and Sulphur",
        "Gas Laws",
      ],
    },
    {
      id: 4,
      icon: BeakerIcon,
      topics: ["Electrochemistry", "Nuclear Chemistry", "Chemical Equilibrium"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            High School Chemistry
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Select your form level to begin learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <Link href={`/learn/chemistry/form${form.id}`} key={form.id}>
              <Card className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <form.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Form {form.id}</h2>

                <div className="space-y-2">
                  {form.topics.map((topic, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {topic}
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
