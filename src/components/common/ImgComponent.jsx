import React from 'react';


const ImgComponent = ({ src, onClick, style, className, id }) => {

    return (
        <img 
            className={className}
            style={style}
            src={require('./../../assets/images/' + src)} 
            alt={'img'}
            onClick={onClick}
            id={id}
        />
    );
};

export default ImgComponent;