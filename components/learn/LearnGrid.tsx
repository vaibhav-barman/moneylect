import LearnCard from "./LearnCard";
import { roadmap } from "@/data/roadmap/roadmap";

export default function LearnGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {roadmap.map((item) => (
        <LearnCard
          key={item.id}
          title={item.title}
          description={item.description}
          lessons={item.lessons}
        />
      ))}

    </div>
  );
}