import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@mui/material'

const useStyles = makeStyles({
    UserItem: {
        justifyContent: 'center',
        padding: '0.5rem',
        margin: 'auto',
        width: '90%',
        border: '1px solid #aeb4ff',
        borderRadius: '12px',
        marginBottom: '0.5em',
        marginTop: '0.5em',
    },
})

const UserItem = (props) => {
    const classes = useStyles()
    debugger;
    const { name, age } = props

    return (
        <div className={classes.UserItem}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'left'}}>
                <Typography variant='h9' color="primary">{name}</Typography>
                <Typography variant='h9' color="primary">{age} years</Typography>
            </Box>
        </div>
    )
}

export default UserItem;
