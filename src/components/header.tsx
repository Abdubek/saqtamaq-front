import { Arrow } from "@/src/components/icons/arrow";

type Props = {
  withBack?: boolean;
};

export const Header = ({ withBack = true }: Props) => {
  return (
    <div className="p-4 shadow text-center font-bold text-xl flex justify-between">
      {withBack ? <Arrow /> : <div className="w-6 h-6" />}
      <div>Saqtamaq</div>
      <div className="w-6 h-6" />
    </div>
  );
};
