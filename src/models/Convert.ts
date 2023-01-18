import { ICurrency } from "./Currency";

export interface IConvertParams {
    amount: string;
    to: string
}

export interface IConvertRes {
    data: {
        base: string,
        disclaimer: string,
        license: string,
        rates: ICurrency
        timestamp: Date
    }
    request: {
        amount: string,
        to: string
    }
    response: number
}