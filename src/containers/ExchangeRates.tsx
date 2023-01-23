import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ApiService from '../services/ApiService'
import { ICurrency } from '../models/Currency';
import SkeletonTable from '../components/SkeletonTable';

const ExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState()

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await ApiService.getLatest()
                if (!response || !response.rates) {
                    alert(`Error: Cannot get latest exchange rates`)
                    return
                }

                setExchangeRates(response.rates)
            } catch (error) {
                alert(`Error: ${error}`)
            }
        }

        fetchExchangeRates()
    }, [])

    return (
        <>
            <Typography>
                Exchange Rates
            </Typography>
            {
                exchangeRates ?
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="exchange rates">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Currency code</TableCell>
                                    <TableCell>USD convert Rate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    Object.entries(exchangeRates as ICurrency)?.map(([key, value]) => {
                                        return (
                                            <TableRow
                                                key={key}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>{key}</TableCell>
                                                <TableCell>{value}</TableCell>
                                            </TableRow>
                                        )
                                    }) as React.ReactNode}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <SkeletonTable />
            }
        </>
    )
}

export default ExchangeRates