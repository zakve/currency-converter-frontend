import React, { useState } from 'react'
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ConvertBox = () => {
    const [amount, setAmount] = useState('')
    const [currencySelect, setCurrencySelect] = useState('')

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCurrencySelect(event.target.value)
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value)
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        // validation
        if (!amount || isNaN(Number(amount)) || !currencySelect)
            return alert('You must fill in the amount and currency')

        // get currency data
        // const selectedCurrency = data?.data.find(line => Object.keys(line)[0] === currencySelect)

        // // calculate
        // if (selectedCurrency && currencySelect) {
        //   const rate = Number(Object.values(selectedCurrency)[0].rate)
        //   const currencyAmount = Number(Object.values(selectedCurrency)[0].amount)

        //   setCalculated((Number(amount) / Number(rate) * Number(currencyAmount)).toString())
        // }
    }

    return (
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
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="EUR">EUR</MenuItem>
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
    )
};

export default ConvertBox;