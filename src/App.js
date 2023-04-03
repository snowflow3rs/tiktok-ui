import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

import { DefaultLayout } from './layouts';

import { useContext } from 'react';
import { ThemeContext } from '~/hooks';
import GetApp from './components/GetApp';

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <Router basename="tiktok-ui">
            <div className="App" data-theme={theme}>
                <GetApp />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
