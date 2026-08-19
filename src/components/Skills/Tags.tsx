import { useTranslation } from "react-i18next";
import {
  Blocks,
  BriefcaseBusiness,
  GraduationCap,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@src/lib/utils";

interface BaseTagProps {
  type: "diary" | "projects" | "graduation" | "study";
  label: string;
  icon: LucideIcon;
}

export const BaseTag = ({ type, label, icon: Icon }: BaseTagProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn("flex flex-row items-center gap-x-1", {
        "text-primary": type === "diary",
        "text-projects": type === "projects",
        "text-graduation": type === "graduation",
        "text-study": type === "study",
      })}
    >
      <Icon className="size-4" aria-hidden />
      <p
        className={cn("p-2 rounded-lg text-[10px] font-semibold", {
          "bg-primary/25": type === "diary",
          "bg-projects/25": type === "projects",
          "bg-graduation/25": type === "graduation",
          "bg-study/25": type === "study",
        })}
      >
        # {t(label)}
      </p>
    </div>
  );
};

export const DiaryTag = () => (
  <BaseTag type="diary" label="skills.tags.0" icon={RefreshCw} />
);

export const ProjectsTag = () => (
  <BaseTag type="projects" label="skills.tags.1" icon={BriefcaseBusiness} />
);

export const GraduationTag = () => (
  <BaseTag type="graduation" label="skills.tags.2" icon={GraduationCap} />
);

export const StudyTag = () => (
  <BaseTag type="study" label="skills.tags.3" icon={Blocks} />
);
