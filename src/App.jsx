import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Home/Body';
import Head from './components/Head';
import TrandingTopic from './components/TrandingTopic';
import VideoContainer from './components/Home/VideoContainer';
import WatchPage from './components/watchPage/watchPage';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Head />
          <Body />
        </>
      ),
      children: [
        {
          path: '/',
          element: (
            <>
              <TrandingTopic />
              <VideoContainer />
            </>
          ),
        },
        {
          path: '/WatchPage',
          element: <WatchPage />,
        },
        {
          path: '/SearchPage',
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
