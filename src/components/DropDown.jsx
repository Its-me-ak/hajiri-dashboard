import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";

const Dropdown = () => {
    const options = ["Day 1", "Week 1", "Month 1", "Year 1"]
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Week 1");

    const divEl = useRef();

    const handleToggle = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    useEffect(() => {
        const handler = (event) => {
            if (divEl.current && !divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div ref={divEl} className="relative">
            <button
                onClick={handleToggle}
                className="w-full flex justify-between items-center bg-white px-4 py-2 rounded-md"
            >
                {selected} <GoChevronDown />
            </button>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border rounded-md shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;