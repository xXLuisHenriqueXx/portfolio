import { DotPattern } from "@src/components/ui/backgrounds/DotPattern";

const Background = () => {
  return (
    <div className="absolute inset-0 w-full min-h-dvh -z-1">
      <DotPattern className="animate-pulse mask-[radial-gradient(360px_circle_at_center,white,transparent)]" />
    </div>
  );
};

export default Background;
