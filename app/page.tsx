"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BeakerIcon,
  BookOpen,
  GraduationCap,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-20">
          <h1 className="text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">
            Master Chemistry
            <br />
            Through Practice
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Interactive learning platform designed to help you understand
            chemistry concepts through comprehensive lessons, quizzes, and
            assessments. Specifically tailored for the Kenyan curriculum.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/learn/chemistry">
              <Button size="lg" className="h-12 px-6">
                Start Learning
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-6">
              Take Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Learning Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fundamentals",
                icon: BeakerIcon,
                description: "Master the basic concepts of chemistry",
                topics: [
                  "Atomic Structure",
                  "Chemical Bonding",
                  "Periodic Table",
                ],
              },
              {
                title: "Advanced Topics",
                icon: FlaskConical,
                description: "Dive deep into complex chemical principles",
                topics: ["Organic Chemistry", "Thermodynamics", "Kinetics"],
              },
              {
                title: "Practice Tests",
                icon: GraduationCap,
                description:
                  "Assess your knowledge through comprehensive tests",
                topics: ["Chapter Tests", "Mock Exams", "Interactive Quizzes"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are mastering chemistry through our
            interactive platform.
          </p>
          <Button size="lg" className="h-12 px-8">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
