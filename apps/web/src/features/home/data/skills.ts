import MdiCodeParenthesesBox from "~icons/mdi/code-parentheses-box";
import MdiDatabase from "~icons/mdi/database";
import MdiFirebase from "~icons/mdi/firebase";
import MdiLanguageTypescript from "~icons/mdi/language-typescript";
import MdiNodejs from "~icons/mdi/nodejs";
import MdiReact from "~icons/mdi/react";
import MdiTailwind from "~icons/mdi/tailwind";

import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "React", icon: MdiReact },
  { name: "TypeScript", icon: MdiLanguageTypescript },
  { name: "Node.js", icon: MdiNodejs },
  { name: "Tailwind", icon: MdiTailwind },
  { name: "Next.js", icon: MdiCodeParenthesesBox },
  { name: "MongoDB", icon: MdiDatabase },
  { name: "Firebase", icon: MdiFirebase },
];
