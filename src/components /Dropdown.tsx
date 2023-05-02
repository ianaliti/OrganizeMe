import React from "react";
import { Option } from "../types/types";

interface DropdownItemProps {
    icon?: string,
    options: Array<Option>
}


export const Dropdown: React.FC<DropdownItemProps> = ({options}) => {
    return (
        <div className="dropdown">
            <div className="dropdown-title">dropdown</div>
            <div className="dropdown-list-container">
                {options.map((option: Option) => {
                    return (
                        <button>
                            {option.value}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}