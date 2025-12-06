import { DifficultyLevel } from "@/lib/problems-data";

interface DifficultyBadgeProps {
  level: DifficultyLevel;
}

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const styles = {
    Iniciante: "bg-green-100 text-green-700 border-green-300",
    Intermediário: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Avançado: "bg-red-100 text-red-700 border-red-300"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${styles[level]}`}>
      {level}
    </span>
  );
}
