import React from 'react';
import ChartBar from './ChartBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    chart: {
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: '#f8dfff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        height: '10rem'
    },
})

export const Chart = (props) => {
    const classes = useStyles();
    const { dataPoints } = props;
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={classes.chart}>
            {dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.id}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    )
}

export default Chart