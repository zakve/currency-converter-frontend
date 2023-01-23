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

import ApiService from '../services/ApiService';
import { ICalculatedStats, IStats } from '../models/Stats';
import SkeletonTable from '../components/SkeletonTable';

const StatisticsPage = () => {
    const [stats, setStats] = useState<IStats>();
    const [calculatedStats, setCalculatedStats] = useState<ICalculatedStats>()

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await ApiService.getStats()
                setStats(response)
            } catch (error) {
                alert(`Error: ${error}`)
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


    return (
        <Container maxWidth="xl">
            <Box sx={{
                margin: "30px"
            }}>
                <Typography variant='h5'>Statistics</Typography>
                {
                    calculatedStats &&
                    <>
                        <p>Most Popular Destination Currency: {calculatedStats.popularCurrency}</p>
                        <p>Total Amount Converted: {calculatedStats.totalConverted}</p>
                        <p>Total Number of Conversion Requests: {calculatedStats.totalRequests}</p>
                    </>
                }
                {
                    stats ?
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="statistics">
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
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
        </Container>
    )
}

export default StatisticsPage