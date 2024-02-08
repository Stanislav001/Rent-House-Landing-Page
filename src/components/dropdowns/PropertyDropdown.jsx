import { Menu } from '@headlessui/react';
import { useState } from "react";
import { useHouse } from "../../context/house-context";
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";

const PropertyDropdown = () => {
    const { property, setProperty, properties } = useHouse();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as={"div"} className={"dropdown relative"}>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className={'dropdown-btn w-full text-left'}>
                <RiHome5Line className="dropdown-icon-primary" />
                <div>
                    <div className="text-[15px] font-medium leading-tight">
                        {property}
                    </div>
                    <div className="text-[13px]">
                        Select your place
                    </div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className="dropdown-icon-secondary" />
                ) : (
                    <RiArrowDownSLine className="dropdown-icon-secondary" />
                )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {properties.map((property, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setProperty(property)}
                            className="cursor-pointer hover:to-violet-700 transition" as='li' key={index}>
                            {property}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}

export default PropertyDropdown