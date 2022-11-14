import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react'

export const ErrorModal = (props) => {
    const {title, message, errorHandler} = props
    return (
        <div  style={{position:'fixed', top:0, left:0, right:0, bottom:0, width:'100%', zIndex: 270, background: 'rgba(0, 0, 0, 0.75)'}} onClick={errorHandler}>
            <Card sx={{width: '50em', backgroundColor: '#aeb4ff', mt:40, ml:53 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
                        <Box  sx={{ backgroundColor: '#271f80' }}>
                            <Typography variant="h5" color="white">{title}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h10" color="primary">{message}</Typography>
                        </Box>
                        <Box sx={{ ml: 70 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 2, mb: 4 }}
                                onClick={errorHandler}
                            >
                                <span>Close</span>
                            </Button>
                        </Box>
                    </Grid>
                </Box>
            </Card>
        </div>
    )
}

export default ErrorModal;