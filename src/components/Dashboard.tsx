import React, { useState, useEffect } from 'react'
import {Grid, Typography, Paper, FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { getMultipleMeasurementsQuery } from '../queries';
import Chart from './Chart';


type Props = {}

interface genericObj {
    metric: string
    at: number | string
    value: number | string
    unit: string
}

interface containerType {
    metric: string
    at: number | string
    value: number | string
    unit: string 
}

// STYLES 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
            '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    formControl: {
        margin: theme.spacing(3),
    },
    centeringText: {
        textAlign: 'center'
    },
    submitBtn: {
        paddingBottom: theme.spacing(1),
        textAlign: 'center'
    },
    metricName: {
        textAlign: 'start', 
        paddingLeft: '65px'
    }
}))



const Dashboard = (props: Props) => {
  
    const classes = useStyles();
  
    // STATE
    // Boolean states for the checkboxes
    const [oilTempBool, setOilTempBool] = useState<boolean>(false);
    const [tubingPressureBool, setTubingPressureBool] = useState<boolean>(false);
    const [injValveOpenBool, setInjValveOpenBool] = useState<boolean>(false);
    const [flareTempBool, setFlareTempBool] = useState<boolean>(false);
    const [casingPressureBool, setCasingPressureBool] = useState<boolean>(false);
    const [waterTempBool, setWaterTempBool] = useState<boolean>(false);

    // State for getMultipleMeasurements data array
    const [getMultipleMeasurements, setGetMultipleMeasurements] = useState<null | []>(null);

    // Array States to hold their respective metric data
    const [oilTempArray, setOilTempArray] = useState<genericObj[]>([]);
    const [tubingPressureArray, setTubingPressureArray] = useState<genericObj[]>([]);
    const [injValveOpenArray, setInjValveOpenArray] = useState<genericObj[]>([]);
    const [flareTempArray, setFlareTempArray] = useState<genericObj[]>([]);
    const [casingPressureArray, setCasingPressureArray] = useState<genericObj[]>([]);
    const [waterTempArray, setWaterTempArray] = useState<genericObj[]>([]);

    // useEffect for getting Multiple Measurements api query and array manipulations on page load
    useEffect(() => {
        const fetchAll = async () => {
            // Call/hit the graphQL API
            const queryResponse = await axios.post('https://react.eogresources.com/graphql', { query: getMultipleMeasurementsQuery });
            
            // console.log('All the data: ', queryResponse);

            // Set the state for all the metric measurements
            setGetMultipleMeasurements(queryResponse.data.data.getMultipleMeasurements);
        
            // Dealing with Oil Temp array
            const oilTempArrayCopy = queryResponse.data.data.getMultipleMeasurements[0].measurements;
            
            const oilArray = oilTempArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
                
                container.metric = element.metric;
                // container.at = finalDate;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;
    
                // console.log('Here is the oil temp container: ', container);
    
                return container;
            })
            setOilTempArray(oilArray); 

            // Dealing with Tubing Pressure array
            const tubingPressureArrayCopy = queryResponse.data.data.getMultipleMeasurements[1].measurements;

            const tubingPressureArray = tubingPressureArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    
                container.metric = element.metric;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;
    
                // console.log('Here is the tubing pressure container: ', container);
    
                return container;
            })
            setTubingPressureArray(tubingPressureArray); 

            // Dealing with Injection Valve Open array
            const injValveOpenArrayCopy = queryResponse.data.data.getMultipleMeasurements[2].measurements;

            const injValveOpenArray = injValveOpenArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    
                container.metric = element.metric;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;

                // console.log('Here is the tubing pressure container: ', container);
    
                return container;
            })
            setInjValveOpenArray(injValveOpenArray);
           
            // Dealing with Flare Temperature array
            const flareTempArrayCopy = queryResponse.data.data.getMultipleMeasurements[3].measurements;

            const flareTempArray = flareTempArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    
                container.metric = element.metric;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;
                
                // console.log('Here is the flare temperature container: ', container);
    
                return container;
            })
            setFlareTempArray(flareTempArray);

            // Dealing with Casing Pressure array
            const casingPressureArrayCopy = queryResponse.data.data.getMultipleMeasurements[4].measurements;

            const casingPressureArray = casingPressureArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    
                container.metric = element.metric;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;
    
                // console.log('Here is the casing pressure container: ', container);
    
                return container;
            })
            setCasingPressureArray(casingPressureArray);
            
            // Dealing with Water Temperature array
            const waterTempArrayCopy = queryResponse.data.data.getMultipleMeasurements[5].measurements;

            const waterTempArray = waterTempArrayCopy.map((element: genericObj) => {
                const container: containerType = {
                    metric: '',
                    at: 0,
                    value: 0,
                    unit: '' 
                };
                const timestamp: number | string = element.at;
                const date: Date = new Date(timestamp);
                const fullDate: string = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    
                container.metric = element.metric;
                container.at = fullDate;
                container.value = element.value;
                container.unit = element.unit;
    
                // console.log('Here is the water temperature container: ', container);
    
                return container;
            })
            setWaterTempArray(waterTempArray);
        }

        fetchAll();

    },[])

    // FUNCTIONS
    // HandleCheckbox change function
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, instance: number) => {
        if(event.target.checked === true){
            switch(instance) {
                // handle oilTemp
                case 0: 
                    setOilTempBool(true);

                    // set the other states to false
                    setTubingPressureBool(false);
                    setInjValveOpenBool(false);
                    setFlareTempBool(false);
                    setCasingPressureBool(false);
                    setWaterTempBool(false);
                    break;

                // handle tubingPressure
                case 1: 
                    setTubingPressureBool(true);

                    // set the other states to false
                    setOilTempBool(false);
                    setInjValveOpenBool(false);
                    setFlareTempBool(false);
                    setCasingPressureBool(false);
                    setWaterTempBool(false);
                    break;

                // handle injValveOpen 
                case 2: 
                    setInjValveOpenBool(true);

                    // set the other states to false
                    setOilTempBool(false);
                    setTubingPressureBool(false);
                    setFlareTempBool(false);
                    setCasingPressureBool(false);
                    setWaterTempBool(false);
                    break;

                // handle flareTemp
                case 3: 
                    setFlareTempBool(true);

                    // set the other states to false
                    setOilTempBool(false);
                    setTubingPressureBool(false);
                    setInjValveOpenBool(false);
                    setCasingPressureBool(false);
                    setWaterTempBool(false);
                    break;
                
                // handle casingPressure
                case 4: 
                    setCasingPressureBool(true);

                    // set the other states to false
                    setOilTempBool(false);
                    setTubingPressureBool(false);
                    setInjValveOpenBool(false);
                    setFlareTempBool(false);
                    setWaterTempBool(false);
                    break;
                
                // handle waterTemp
                case 5:
                    setWaterTempBool(true);

                    // set the other states to false
                    setOilTempBool(false);
                    setTubingPressureBool(false);
                    setInjValveOpenBool(false);
                    setFlareTempBool(false);
                    setCasingPressureBool(false); 
                    break;
            }
        }
        else {
            switch(instance) {
                // handle oilTemp
                case 0: 
                    setOilTempBool(false);
                    break;
                
                // handle tubingPressure
                case 1: 
                    setTubingPressureBool(false);
                    break;

                // handle injValveOpen 
                case 2: 
                    setInjValveOpenBool(false);
                    break;

                // handle flareTemp
                case 3: 
                    setFlareTempBool(false);
                    break;
                
                // handle casingPressure
                case 4: 
                    setCasingPressureBool(false);
                    break;

                // handle waterTemp
                case 5: 
                    setWaterTempBool(false);
                    break;
            }
        }
    }

    return (
    <>
         <Grid container spacing={1}>

            <Grid item md={2} />
            <Grid item xs={12} sm={12} md={8}> 
                <Typography variant='h3' className={classes.centeringText}>Data Visualization</Typography>
            </Grid>
            <Grid item md={2} />

            <Grid item xs={12} sm={12} md={3} lg={2}>
                <Paper elevation={2}>
                    <div>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Select a metric</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={oilTempBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 0)} name="oilTempBool" />}
                                    label="oilTemp"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={tubingPressureBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 1)} name="tubingPressureBool" />}
                                    label="tubingPressure"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={injValveOpenBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 2)} name="injValveOpenBool" />}
                                    label="InjValveOpen"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={flareTempBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 3)} name="flareTempBool" />}
                                    label="flareTemp"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={casingPressureBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 4)} name="casingPressureBool" />}
                                    label="casingPressure"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={waterTempBool} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, 5)} name="waterTempBool" />}
                                    label="waterTemp"
                                />
                            </FormGroup>
                        </FormControl>
                        {/* <div className={classes.submitBtn}>
                            <Button size="small" variant="contained" color="primary" onClick={handleSubmitClick}>Submit</Button>
                        </div> */}
                    </div> 
                </Paper> 
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={8}>
                <Paper elevation={2}>
                    {
                        oilTempBool === true && tubingPressureBool === false && injValveOpenBool === false && 
                        flareTempBool === false && casingPressureBool === false && waterTempBool === false ?
                        <>
                            <Chart array={oilTempArray} metricName="Oil Temperature" yAxisSymbol={"°F"}/>
                        </>
                        : <></>
                    }
                
                </Paper>
                <Paper elevation={2}>
                    {
                        tubingPressureBool === true && oilTempBool === false && injValveOpenBool === false && 
                        flareTempBool === false && casingPressureBool === false && waterTempBool === false ?
                        <>
                            <Chart array={tubingPressureArray} metricName="Tubing Pressure" yAxisSymbol={"PSI"}/>
                        </>
                        : <></>
                    }
                </Paper>
                <Paper elevation={2}>
                    {
                        injValveOpenBool === true && oilTempBool === false && tubingPressureBool === false && 
                        flareTempBool === false && casingPressureBool === false && waterTempBool === false ?
                        <>
                            <Chart array={injValveOpenArray} metricName="Injection Valve Open" yAxisSymbol={"%"}/>
                        </>
                        : <></>
                    }
                </Paper>
                <Paper elevation={2}>
                    {
                        flareTempBool === true && oilTempBool === false && tubingPressureBool === false && 
                        injValveOpenBool === false && casingPressureBool === false && waterTempBool === false ?
                        <>
                            <Chart array={flareTempArray} metricName="Flare Temperature" yAxisSymbol={"°F"} />
                        </>
                        : <></>
                    }
                </Paper>
                <Paper elevation={2}>
                    {
                        casingPressureBool === true && oilTempBool === false && tubingPressureBool === false && 
                        injValveOpenBool === false && flareTempBool === false && waterTempBool === false ?
                        <>
                            <Chart array={casingPressureArray} metricName="Casing Pressure" yAxisSymbol={"PSI"} />
                        </>
                        : <></>
                    }
                </Paper>
                <Paper elevation={2}>
                    {
                        waterTempBool === true && oilTempBool === false && tubingPressureBool === false && 
                        injValveOpenBool === false && flareTempBool === false && casingPressureBool === false ?
                        <>
                            <Chart array={waterTempArray} metricName="Water Temperature" yAxisSymbol={"°F"} />
                        </>
                        : <></>
                    }
                </Paper>
                
            </Grid>

        </Grid>
    </>
  )
}

export default Dashboard