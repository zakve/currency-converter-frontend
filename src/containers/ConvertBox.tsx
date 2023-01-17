import React, { useState, useEffect } from 'react'
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import ApiService from '../services/ApiService';

const ConvertBox = () => {
    const [amount, setAmount] = useState('')
    const [currencies, setCurrencies] = useState({})
    const [currencySelect, setCurrencySelect] = useState('')
    const [converted, setConverted] = useState()

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
        <>
            <Box
                sx={{
                    padding: '50px',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                    // borderRadius: '10px',
                    // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
                }}
            >
                <>
                    <FormControl>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount *</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </FormControl>

                    <FormControl sx={{
                        minWidth: 120,
                        marginLeft: '20px'
                    }}>
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
                        sx={{
                            minWidth: 120,
                            marginLeft: '20px'
                        }}
                    >
                        Convert
                    </Button>
                </>
            </Box>
            {
                converted &&
                <Box>
                    <Typography>
                    </Typography>
                </Box>}
        </>
    )
};

export default ConvertBox;