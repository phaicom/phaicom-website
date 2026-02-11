import { Code2, FileCode, Server, Palette, Zap, Database, Flame, FileJson } from "lucide-react";

import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Node.js", icon: Server },
  { name: "Tailwind", icon: Palette },
  { name: "Next.js", icon: Zap },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Flame },
  { name: "Python", icon: FileJson },
];
