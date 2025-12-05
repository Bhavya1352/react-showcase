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
      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
        isActive
          ? "bg-primary/10 border-2 border-primary"
          : "bg-card hover:bg-muted border-2 border-transparent"
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
        isActive ? "bg-primary/20" : "bg-muted"
      }`}>
        {icon}
      </div>
      <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-foreground"}`}>
        {label}
      </span>
    </button>
  );
};
