import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import ApiService from '../services/ApiService'
import { ICurrency } from '../models/Currency';
import SkeletonTable from '../components/SkeletonTable';

const ExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState()
    const [isSnackOpen, setIsSnackOpen] = useState(false)
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await ApiService.getLatest()
                if (!response || !response.rates) {
                    setError(`Fetch latest exchange rate error`)
                    setIsSnackOpen(true)
                    return
                }

                setExchangeRates(response.rates)
            } catch (error) {
                setError(`Fetch latest exchange rate error: ${error}`)
                setIsSnackOpen(true)
            }
        }

        fetchExchangeRates()
    }, [])

    const handleSnackClose = () => {
        setIsSnackOpen(false)
    }

    return (
        <>
            <Typography>
                Exchange Rates
            </Typography>
            {
                exchangeRates ?
                    <TableContainer>
                        <Table sx={style.table} aria-label="exchange rates">
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
                                                sx={style.tableRow}
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
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: 'center' }}
                open={isSnackOpen}
                onClose={handleSnackClose}
            >
                <Alert onClose={handleSnackClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>
    )
}

const style = {
    table: {
        textAlign: 'center'
    },
    tableRow: {
        '&:last-child td, &:last-child th': { border: 0 }
    }
}

export default ExchangeRates