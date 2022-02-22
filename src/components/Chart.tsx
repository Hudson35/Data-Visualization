import React from 'react'
import {Typography} from '@material-ui/core'
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from 'recharts'
import { makeStyles } from '@material-ui/core/styles';

interface obj {
    metric: string
    at: number | string
    value: number | string
    unit: string 
}

interface Props {
    array: obj[]
    metricName: string
    yAxisSymbol: string
}

// STYLES
const useStyles = makeStyles((theme) => ({
    metricName: {
        textAlign: 'start', 
        paddingLeft: '65px'
    }
}))

const Chart = ({array, metricName, yAxisSymbol}: Props) => {

    const classes = useStyles();
  
    return (
        <>
            <div className={classes.metricName}><Typography variant="h5">{metricName}</Typography></div>
            <ResponsiveContainer width="100%" height={600}>
                <AreaChart data={array}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.7} />
                            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>

                    <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
                    
                    <XAxis 
                        dataKey="at"
                        axisLine={false}
                        tickLine={false} 
                    />
                    
                    <YAxis 
                        dataKey="value" 
                        axisLine={false} 
                        tickLine={false} 
                        tickCount={8} 
                        tickFormatter={ (number) => `${number}${yAxisSymbol}` }
                    />
                    
                    <Tooltip />
                    
                    <CartesianGrid opacity={0.4} vertical={true} horizontal={true} />
                
                </AreaChart>
            </ResponsiveContainer> 
        </>
    )
}

export default Chart