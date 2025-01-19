import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

function TodosLoading() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
            <CircularProgress />
        </Box>
    );
}

export { TodosLoading };