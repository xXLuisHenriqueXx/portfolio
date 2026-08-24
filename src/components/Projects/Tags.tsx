import { useTranslation } from "react-i18next";
import { BadgePlus, CheckCircle2, Loader, type LucideIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

interface BaseTagProps {
  type: "in-progress" | "completed" | "new";
  label: string;
  icon: LucideIcon;
}
const BaseTag = ({ type, label, icon: Icon }: BaseTagProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "absolute top-4 left-4 flex flex-row items-center gap-x-2 px-4 py-2 rounded-xl z-10",
        {
          "bg-primary/70": type === "in-progress",
          "bg-projects/70": type === "completed",
          "bg-graduation/70": type === "new",
        },
      )}
    >
      <Icon className="size-4" aria-hidden />
      <p className="text-xs font-medium">{t(label)}</p>
    </div>
  );
};

export const InProgressTag = () => (
  <BaseTag type="in-progress" label="projects.tags.0" icon={Loader} />
);

export const CompletedTag = () => (
  <BaseTag type="completed" label="projects.tags.1" icon={CheckCircle2} />
);

export const NewTag = () => (
  <BaseTag type="new" label="projects.tags.2" icon={BadgePlus} />
);
