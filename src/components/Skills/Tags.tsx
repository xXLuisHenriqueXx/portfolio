import { useTranslation } from "react-i18next";
import {
  Blocks,
  BriefcaseBusiness,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

export const DiaryTag = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <RefreshCw
        className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-primary"
        aria-hidden
      />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-primary/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-primary">
        # {t("skills.tags.0")}
      </p>
    </div>
  );
};

export const ProjectsTag = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <BriefcaseBusiness
        className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-projects"
        aria-hidden
      />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-projects/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-projects">
        # {t("skills.tags.1")}
      </p>
    </div>
  );
};

export const GraduationTag = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <GraduationCap
        className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-graduation"
        aria-hidden
      />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-graduation/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-graduation">
        # {t("skills.tags.2")}
      </p>
    </div>
  );
};

export const StudyTag = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <Blocks
        className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-study"
        aria-hidden
      />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-study/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-study">
        # {t("skills.tags.3")}
      </p>
    </div>
  );
};
