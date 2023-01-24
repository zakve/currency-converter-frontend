import React, { useState, useEffect } from 'react'
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import ApiService from '../services/ApiService';
import { IConvertRes } from '../models/Convert';

const ConvertBox = () => {
    const [amount, setAmount] = useState('')
    const [currencies, setCurrencies] = useState({})
    const [currencySelect, setCurrencySelect] = useState('')
    const [converted, setConverted] = useState<IConvertRes | undefined>(undefined)

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await ApiService.getCurrencies()
                setCurrencies(response)
            } catch (error) {
                alert(`Error: ${error}`)
            }
        }

        fetchCurrencies()
    }, [])


    const handleSelectChange = (event: SelectChangeEvent) => {
        setCurrencySelect(event.target.value)
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value)
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        // validation
        if (!amount || isNaN(Number(amount)) || !currencySelect)
            return alert('You must fill in the amount and currency')

        // convert
        const convertRes = await ApiService.convert({ amount, to: currencySelect })
        setConverted(convertRes)
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.box}>
                <FormControl>
                    <InputLabel htmlFor="amount">Amount *</InputLabel>
                    <OutlinedInput
                        required
                        id="amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </FormControl>

                <FormControl sx={style.input}>
                    <InputLabel id="currency-select">To</InputLabel>
                    <Select
                        labelId="currency-select"
                        id="currency-select"
                        value={currencySelect}
                        label="To"
                        onChange={handleSelectChange}
                    >
                        {
                            Object.keys(currencies)?.map((currency, i) => {
                                return (
                                    <MenuItem key={i} value={currency}>{currency}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={style.input}
                >
                    Convert
                </Button>
            </Box>
            {
                converted &&
                <Box sx={{ m: "20px" }}>
                    <Typography>{converted?.request?.amount} US Dollar = </Typography>
                    <Typography variant='h5'>{converted?.response?.toFixed(2)} {converted?.request?.to}</Typography>
                </Box>
            }
        </Box>
    )
};

const style = {
    container: {
        padding: {
            sm: '50px',
            xs: '30px'
        },
        textAlign: 'center'
        // borderRadius: '10px',
        // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
    },
    box: {
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xs: 'column'
        },
        justifyContent: 'center'

    },
    input: {
        minWidth: 120,
        marginLeft: {
            sm: '20px',
            xs: '0px'
        }
    }
}

export default ConvertBox;