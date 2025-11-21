import { useTranslation } from "react-i18next";
import { BadgePlus, CheckCircle2, Loader } from "lucide-react";

export const InProgressTag = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-primary/70 rounded-lg z-10 shadow-sm">
      <Loader className="w-3 h-3" aria-hidden />
      <p className="text-[10px] font-medium">{t("projects.tags.0")}</p>
    </div>
  );
};

export const CompletedTag = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-projects/70 rounded-lg z-10 shadow-sm">
      <CheckCircle2 className="w-3 h-3" aria-hidden />
      <p className="text-[10px] font-medium">{t("projects.tags.1")}</p>
    </div>
  );
};

export const NewTag = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-graduation/70 rounded-lg z-10 shadow-sm">
      <BadgePlus className="w-3 h-3" aria-hidden />
      <p className="text-[10px] font-medium">{t("projects.tags.2")}</p>
    </div>
  );
};
