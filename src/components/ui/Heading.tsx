import { cn } from "@/lib";

interface HeadingProps {
  title: string;
  description: string;
  icon: JSX.Element;
  iconColor?: string;
  bgColor?: string;
  button?: JSX.Element;
}

const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
  button,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>{icon}</div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {button && <div>{button}</div>}
      </div>
    </>
  );
};

export default Heading;
