export interface IStats {
    Items: [
        {
            DestinationCurrency: string,
            TotalAmountConverted: number,
            TotalConversionRequests: number
        }
    ],
    Count: number,
    ScannedCount: number
}