import { useState, createContext } from 'react';

export const ModalContext = createContext();
export function ModalProvider({ children }) {
    const [show, setShow] = useState(false);

    const handleShowModal = () => {
        setShow(true);
    };

    const handleHideModal = () => {
        setShow(false);
    };

    const value = {
        show,
        handleShowModal,
        handleHideModal,
    };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
