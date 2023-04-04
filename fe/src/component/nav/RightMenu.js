import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Image, Menu } from 'antd';
const items = [
    {
        key: 'search',
        icon: <SearchOutlined />
    },
    {
        key: 'vn',
        icon: <Image preview={false} src='https://ghdc.vn/home/vnm.png' />
    },
    {
        key: 'en',
        icon: <Image preview={false} src='https://ghdc.vn/home/eng.png' />

    }
];
const RightMenu = ({ mode }) => {
    const onClick = (e) => {
        const key = e.key
        switch (key) {
            case 'logout':
                break;
            default:
                break;
        }
    };
    return <Menu style={{ float: 'right', alignItems: 'center' }} onClick={onClick} selectedKeys={[]} mode={mode} items={items} />
};
export default RightMenu;

