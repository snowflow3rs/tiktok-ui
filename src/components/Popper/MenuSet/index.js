import classNames from 'classnames/bind';
import styles from './MenuSet.module.scss';
import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultfn = () => {};
function MenuSet({ children, items = [], onChange = defaultfn }) {
    const [Open, setOpen] = useState([{ data: items }]);

    const current = Open[Open.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setOpen((prev) => [...prev, item.children]);
                            console.log(item.children);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            placement="bottom-end"
            onHide={() => setOpen((prev) => prev.slice(0, 1))}
            interactive
            delay={[0, 600]}
            render={(attrs) => (
                <div className={cx('menu-content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {Open.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    {
                                        setOpen((prev) => prev.slice(0, prev.length - 1));
                                    }
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default MenuSet;
