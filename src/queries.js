export const getMultipleMeasurementsQuery = `
{
    getMultipleMeasurements(input: [
        {
            metricName: "oilTemp"
        } 
        {
            metricName: "tubingPressure"
        }
        {
            metricName: "injValveOpen"
        }
        {
            metricName: "flareTemp"
        }
        {
            metricName: "casingPressure"
        }
        {
            metricName: "waterTemp"
        }
    ]) 
    {
        metric 
        measurements {
            metric 
            at
            value 
            unit 
        }
    }
}
`