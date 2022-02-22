export const getMultipleMeasurementsQuery = `
{
    getMultipleMeasurements(input: [
        {
            metricName: "oilTemp"
            after: 1645489703
        } 
        {
            metricName: "tubingPressure"
            after: 1645489703
        }
        {
            metricName: "injValveOpen"
            after: 1645489703
        }
        {
            metricName: "flareTemp"
            after: 1645489703
        }
        {
            metricName: "casingPressure"
            after: 1645489703
        }
        {
            metricName: "waterTemp"
            after: 1645489703
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