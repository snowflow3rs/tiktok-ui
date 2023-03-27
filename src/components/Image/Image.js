import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Img.module.scss';

import PropTypes from 'prop-types';

const Img = forwardRef(({ className, src, fallback: cuztom = images.errImg, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErr = () => {
        setFallback(cuztom);
    };
    return (
        <img
            className={classNames(className, styles.wrapper)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErr}
        />
    );
});
Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    fallback: PropTypes.string,
    alt: PropTypes.string,
};
export default Img;
