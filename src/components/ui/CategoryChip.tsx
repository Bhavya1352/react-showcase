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
      style={{
        width: '100px',
        height: '100px',
        padding: '12px',
        borderRadius: '50%',
        background: isActive ? '#EAF4EA' : 'white',
        border: isActive ? '2px solid #3A643B55' : '2px solid transparent',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease'
      }}
      className="flex flex-col items-center justify-center hover:-translate-y-1"
    >
      <div style={{ width: '40px', height: '40px', marginBottom: '4px' }} className="rounded-full bg-white shadow-md flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-xs font-medium text-primaryDark text-center leading-tight">{label}</p>
    </button>
  );
};
