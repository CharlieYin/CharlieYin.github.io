import { createTheme } from "@mui/material";

const theme = createTheme()

theme.typography.h1 = {
    fontFamily: 'Baskervville SC',
    color: 'white',
    fontSize: '6rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3.5rem',
    },
};

theme.typography.h2 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '3.75rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '3.25rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.75rem',
    },
};

theme.typography.h3 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.6rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
    },
};

theme.typography.h4 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '2.125rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    '&.MuiTypography-gutterBottom': {
        marginBottom: '0.5em'
    }
};

theme.typography.h5 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.35rem',
    },
    '&.MuiTypography-gutterBottom': {
        marginBottom: '0.75em'
    }
};

theme.typography.h6 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '1.25rem',
    '&.MuiTypography-gutterBottom': {
        marginBottom: '0.75em'
    }
};

theme.typography.body1 = {
    fontFamily: 'Libre Baskerville',
    color: 'white',
    fontSize: '1rem',
    lineHeight: '1.7rem',
    '&.MuiTypography-gutterBottom': {
        marginBottom: '0.75em'
    },
};

theme.typography.button = {
    fontFamily: 'Libre Baskerville',
    color: 'white !important',
    fontSize: '1rem',
    fontWeight: '700'
};

export default theme
