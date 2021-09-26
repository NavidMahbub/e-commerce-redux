import React from "react";

const Over_Lay = {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: "1000",
};

export default function CustomModal({styles,setModalIsOpen, children }) {
    return (
        <>
            <div onClick ={() => setModalIsOpen(false)} style={Over_Lay} />
            
            <div style={{...styles, zIndex: '1000', overflow: 'scroll'}}>
                <div className ='cursor-pointer text-red-500' onClick ={() => setModalIsOpen(false)}>X</div>
                {children}
            </div>
        </>
    );
}
