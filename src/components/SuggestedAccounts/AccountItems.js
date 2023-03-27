import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { WrapperPop as PopperWrapper } from '~/components/Popper';
import PreviewAccounts from './PreviewAccounts/PreviewAccounts';
import images from '~/assets/images';
import Img from '~/components/Image/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <div>
            <Tippy
                appendTo={document.body}
                delay={[600, 0]}
                interactive
                zIndex="99"
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('preview-user')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('wrapper-popper')}>
                            <PreviewAccounts data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`} state={data} className={cx('account-items')}>
                    <Img className={cx('avatar')} src={data.avatar} alt={images.errImg} />
                    <div className={cx('infor')}>
                        <p className={cx('nickname')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                        </p>
                        <p className={cx('name')}>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItems.propTypes = {};
export default AccountItems;
