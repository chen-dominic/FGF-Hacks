import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropdownSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-semibold bg-[#222222] hover:bg-[#333333] transition-all"
      >
        <span>{title}</span>
        <ChevronDownIcon className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="px-4 pb-4 pt-2 text-gray-300 text-sm space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropdownSection;