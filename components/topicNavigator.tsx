"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export default function TopicNavigator({
  params,
}: {
  params: {
    topic: string;
    topicsIndexer: { [key: string]: number };
    form: number;
  };
}) {
  const router = useRouter();
  const topicsIndexer = params.topicsIndexer;
  const topic = params.topic;
  const form = params.form;
  const topics = Object.keys(topicsIndexer);
  const currentIndex = topicsIndexer[topic];
  const nextTopic = topics[currentIndex + 1];

  let href = `/learn/chemistry/form${form}/${nextTopic}`;
  return (
    <div className="flex justify-between items-center mt-6">
      <Button
        variant="outline"
        className="group"
        disabled={topicsIndexer[topic] === 0}
        onClick={() => {
          const previousTopic = topics[currentIndex - 1];
          href = `/learn/chemistry/form${form}/${previousTopic}`;
          router.push(href);
        }}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Previous Topic
      </Button>

      <Button
        variant="outline"
        className="group"
        onClick={() => router.push(href)}
        disabled={topicsIndexer[topic] === topics.length - 1}
      >
        Next Topic
        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
