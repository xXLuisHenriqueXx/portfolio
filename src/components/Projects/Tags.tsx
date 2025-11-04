import { BadgePlus, CheckCircle2, Loader } from "lucide-react";

export const InProgressTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-primary/70 rounded-lg z-10 shadow-sm">
    <Loader className="w-3 h-3" aria-hidden />
    <p className="text-[10px] font-medium">Em andamento</p>
  </div>
);

export const CompletedTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-projects/70 rounded-lg z-10 shadow-sm">
    <CheckCircle2 className="w-3 h-3" aria-hidden />
    <p className="text-[10px] font-medium">Concluído</p>
  </div>
);

export const NewTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-graduation/70 rounded-lg z-10 shadow-sm">
    <BadgePlus className="w-3 h-3" aria-hidden />
    <p className="text-[10px] font-medium">Novo</p>
  </div>
);
