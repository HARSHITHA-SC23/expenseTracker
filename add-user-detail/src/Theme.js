import  createTheme from '@mui/material/styles/createTheme';

const smartLensBlue = '#2B2E7D';
const secondaryMain = '#2E3CDE';
const smartLensWhite = '#F8FAFC';
const listItemHover = 'linear-gradient(90deg, #AEB4FF 5%, #000863 5%)';

export default createTheme({
    palette: {
        common: {
            blue: smartLensBlue,
            white: smartLensWhite
        },
        primary: {
            main: smartLensBlue,
        },
        secondary: {
            main: secondaryMain
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '12px',
            fontWeight: 400
        },
        h5: {
            fontSize: '36px',
            fontWeight: 600
        },
        h9: {
            fontSize: '21px',
            fontWeight: 600
        },
        h10: {
            fontSize: '18px',
            // fontWeight: 600
        },
        tableCell: {
            fontSize: '16px',
            fontWeight: 600
        },
        pageTitle: {
            fontSize: '28px',
            fontWeight: 600,
            background: "-webkit-linear-gradient(45deg, #2B2E7D 30%, red 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
        
    },
    components: {
        MuiTextField: {
            defaultProps: {
                color: 'secondary',
            }
        },
        MuiLink: {
            defaultProps: {
                color: 'secondary',
            },
        },
        MuiListItem: {
            styleOverrides: {
                button: {
                    ":hover":{
                        background: listItemHover
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderStyle: 'none',
                },
                root: {
                    borderRadius: '16px',
                    background: '#F1F5F9',
                    marginRight: '30px'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': { 
                        background: '#EDEFFF' 
                    },
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    '&:hover': {
                        background: '#EDEFFF'
                    },
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(to right, #666aca , #F1F5F9)',
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: 'none',
                    color: '#1c1e50'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '10px',
                    width:'78%'
                }
            }
        },
        /* MuiTooltip: {
            styleOverrides: {
              tooltip: {
                //backgroundColor: '#2B2E7D',
                color: 'white',
                border: '1px solid #2B2E7D',
                borderRadius: '10px'
              },
              arrow: {
                '&:before': {
                    border: '1px solid #2B2E7D',
                },
                color: '#2B2E7D',
            },
            },
        } */
    },
})