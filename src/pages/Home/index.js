import Main from '~/layouts/components/Main/Main';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import * as videosServices from '~/services/videosServices';
import Video from '~/layouts/components/Main/Video/Video';

const cx = classNames.bind(styles);

function Home() {
    return <Main />;
}
export default Home;
