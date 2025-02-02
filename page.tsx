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
      topics: ["Matter", "Atomic Structure", "Periodic Table"],
    },
    {
      id: 2,
      icon: FlaskConicalIcon,
      topics: ["Chemical Bonding", "Acids & Bases", "Mole Concept"],
    },
    {
      id: 3,
      icon: MicroscopeIcon,
      topics: ["Organic Chemistry", "Energy Changes", "Gas Laws"],
    },
    {
      id: 4,
      icon: BeakerIcon,
      topics: ["Electrochemistry", "Nuclear Chemistry", "Chemical Equilibrium"],
    },
  ];

  return (
    <div>
      <h1>Form one page</h1>
    </div>
  );
}
