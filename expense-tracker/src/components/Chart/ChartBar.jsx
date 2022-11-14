import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    chartBar: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    chartBarInner: {
        height: '100%',
        width: '100%',
        border: ' 1px solid #313131',
        backgroundColor: '#c3b4f3',
        borderRadius: '30px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    chartBarFill: {
        width: '100%',
        backgroundColor: '#4826b9',
        transition: 'all 0.3s ease-out'
    },
    chartBarLabel: {
        fontWeight: 'bold',
        fontSize: '0.5rem',
        textAlign: 'center',
    }
})

export const ChartBar = (props) => {
    const classes = useStyles();
    const { key, value, maxValue, label } = props;

    let barFillHeight = '0%';
    if (maxValue > 0){
        barFillHeight = Math.round((value/maxValue)*100) + '%';
    }
    return (
        <div className={classes.chartBar}>
            <div className={classes.chartBarInner}>
                <div className={classes.chartBarFill} style={{height:barFillHeight}}>

                </div>
            </div>
            <div className={classes.chartBarLabel}>{label}</div>
        </div>
    )
}

export default ChartBar