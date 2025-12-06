import Link from "next/link";
import { Clock, Wrench } from "lucide-react";
import { Problem } from "@/lib/problems-data";
import { DifficultyBadge } from "./DifficultyBadge";

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link href={`/problema/${problem.slug}`}>
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex-1">{problem.title}</h3>
          <DifficultyBadge level={problem.difficulty} />
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{problem.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{problem.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="w-4 h-4" />
            <span>{problem.tools.length} ferramentas</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-blue-600">{problem.category}</span>
        </div>
      </div>
    </Link>
  );
}
