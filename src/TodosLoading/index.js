import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

function TodosLoading() {
    return (
        <Box sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <CircularProgress />
        </Box>
    );
}

export { TodosLoading };