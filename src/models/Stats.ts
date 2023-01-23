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

export interface ICalculatedStats {
    popularCurrency: string,
    totalConverted: number,
    totalRequests: number
}