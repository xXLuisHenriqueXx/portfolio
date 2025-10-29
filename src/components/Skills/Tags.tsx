import {
  Blocks,
  BriefcaseBusiness,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

export const DiaryTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <RefreshCw className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-primary" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-primary/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-primary">
        # Uso diário
      </p>
    </div>
  );
};

export const ProjectsTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <BriefcaseBusiness className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-projects" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-projects/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-projects">
        # Projetos
      </p>
    </div>
  );
};

export const GraduationTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <GraduationCap className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-graduation" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-graduation/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-graduation">
        # Faculdade
      </p>
    </div>
  );
};

export const StudyTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <Blocks className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-study" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-study/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-study">
        # Estudando
      </p>
    </div>
  );
};
