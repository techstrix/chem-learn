"use client";

import {
  ArrowLeftIcon,
  BeakerIcon,
  ChevronRight,
  LibraryBig,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SidebarProps {
  sections: { title: string; content: string }[];
}

export default function Sidebar({
  sections,
  form,
}: SidebarProps & { form: string }) {
  return (
    <div className="lg:col-span-3">
      <Link href={`/learn/chemistry/form${form}/`}>
        <Button
          variant="outline"
          className="group mx-5 my-2 sticky top-5 cursor-pointer"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Topics selection
        </Button>
      </Link>
      <Card className="p-4 sticky top-20 max-h-[calc(100vh-6rem)]">
        <div className="flex items-center gap-2 mb-6">
          <LibraryBig className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Quick Navigation</h2>
        </div>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
              onClick={() =>
                document
                  .getElementById(section.title)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {section.title}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
