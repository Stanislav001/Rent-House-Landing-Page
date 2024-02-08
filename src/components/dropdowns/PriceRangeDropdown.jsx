import { useState } from "react";
import { Menu } from '@headlessui/react';
import { useHouse } from "../../context/house-context";
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from "react-icons/ri";

const PriceRangeDropdown = () => {
    const { price, setPrice } = useHouse();
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: 'Price range (any)'
        },
        {
            value: '30000 - 130000'
        },
        {
            value: '130000 - 160000'
        },
        {
            value: '160000 - 190000'
        },
        {
            value: '190000 - 220000'
        },
        {
            value: '220000 - 22220000'
        },
    ]

    return (
        <Menu as={"div"} className={"dropdown relative"}>
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className={'dropdown-btn w-full text-left'}>
                <RiWallet3Line className="dropdown-icon-primary" />
                <div>
                    <div className="text-[15px] font-medium leading-tight">
                        {price}
                    </div>
                    <div className="text-[13px]">
                        Choose price range
                    </div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className="dropdown-icon-secondary" />
                ) : (
                    <RiArrowDownSLine className="dropdown-icon-secondary" />
                )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {prices.map((price, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setPrice(price?.value)}
                            className="cursor-pointer hover:to-violet-700 transition" as='li' key={index}>
                            {price?.value}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}

export default PriceRangeDropdown;