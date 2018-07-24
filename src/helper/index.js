import ReactGA from 'react-ga';

export const initGA = (path) => {
    ReactGA.initialize('UA-122834774-1', {
        testMode: true ,
        debug: true,
        titleCase: false,
        gaOptions: {
          page:path
        }
    });

    ReactGA.pageview(path);
    
}