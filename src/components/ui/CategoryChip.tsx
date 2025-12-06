interface CategoryChipProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryChip = ({ icon, label, isActive, onClick }: CategoryChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center w-full max-w-[100px] min-w-[80px] p-3 rounded-xl transition-all transform ${
        isActive
          ? "bg-primary/10 border-2 border-primary shadow-lg"
          : "bg-card border-2 border-transparent hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-primaryDark text-center leading-tight">{label}</p>
    </button>
  );
};
