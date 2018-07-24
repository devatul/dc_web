import ReactGA from 'react-ga';

export const initGA = (path) => {
    ReactGA.pageview(path);    
}