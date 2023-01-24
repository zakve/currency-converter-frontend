import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import ApiService from '../services/ApiService';
import { ICalculatedStats, IStats } from '../models/Stats';
import SkeletonTable from '../components/SkeletonTable';

const StatisticsPage = () => {
    const [stats, setStats] = useState<IStats>();
    const [calculatedStats, setCalculatedStats] = useState<ICalculatedStats>()
    const [isSnackOpen, setIsSnackOpen] = useState(false)
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await ApiService.getStats()
                setStats(response)
            } catch (error) {
                console.error(error)
                setError(`Fetch statistics error: ${error}`)
                setIsSnackOpen(true)
            }
        }

        fetchCurrencies()
    }, [])

    useEffect(() => {
        if (stats) {
            // Find the most popular destination currency
            const mostPopular = stats.Items.reduce((a, b) => (a.TotalConversionRequests > b.TotalConversionRequests ? a : b));
            const popularCurrency = mostPopular.DestinationCurrency;

            // Find the total amount converted
            const totalConverted = stats.Items.reduce((total, item) => total + item.TotalAmountConverted, 0);

            // Find the total number of conversion requests
            const totalRequests = stats.Items.reduce((total, item) => total + item.TotalConversionRequests, 0);

            setCalculatedStats({ popularCurrency, totalConverted, totalRequests })
        }
    }, [stats])

    const handleSnackClose = () => {
        setIsSnackOpen(false)
    }

    return (
        <Container maxWidth="lg">
            <Box sx={style.box}>
                <Typography variant='h5'>Statistics</Typography>
                {
                    calculatedStats &&
                    <>
                        Most Popular Destination Currency: <Typography sx={style.bold}>{calculatedStats.popularCurrency}</Typography>
                        Total Amount Converted: <Typography sx={style.bold}>{calculatedStats.totalConverted}</Typography>
                        Total Number of Conversion Requests: <Typography sx={style.bold}>{calculatedStats.totalRequests}</Typography>
                    </>
                }
                {
                    stats ?
                        <TableContainer>
                            <Table sx={style.table} aria-label="statistics">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Currency code</TableCell>
                                        <TableCell>Total Amount Converted</TableCell>
                                        <TableCell>Total Conversion Requests</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        stats.Items?.map((item, i) => {
                                            return (
                                                <TableRow
                                                    key={i}
                                                    sx={style.tableRow}
                                                >
                                                    <TableCell>{item.DestinationCurrency}</TableCell>
                                                    <TableCell>{item.TotalAmountConverted}</TableCell>
                                                    <TableCell>{item.TotalConversionRequests}</TableCell>
                                                </TableRow>
                                            )
                                        }) as React.ReactNode}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <SkeletonTable />
                }
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: 'center' }}
                open={isSnackOpen}
                onClose={handleSnackClose}
            >
                <Alert onClose={handleSnackClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </Container>
    )
}

const style = {
    box: {
        my: "30px"
    },
    table: {
        textAlign: 'center'
    },
    tableRow: {
        '&:last-child td, &:last-child th': { border: 0 }
    },
    bold: {
        fontWeight: 'bold'
    }
}

export default StatisticsPage