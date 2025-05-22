import { ReactNode } from 'react';

interface HoverTagProperty {
    icon: ReactNode;
    label: string;
}

export const HoverTag = ({ icon, label, }: HoverTagProperty) => {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium 
                bg-white text-gray-800 border border-gray-300 
                shadow-sm hover:shadow-md hover:border-gray-500 
                transition duration-200 ease-in-out">
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default HoverTag;