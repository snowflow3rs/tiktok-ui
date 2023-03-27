import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import SearchDetails from '~/pages/SearchDetails/SearchDetails';
import StretchLayout from '~/layouts/components/StretchLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: StretchLayout },
    { path: config.routes.live, component: Live },

    { path: config.routes.search, component: SearchDetails },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
