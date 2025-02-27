import { Box } from "@mui/material";

function EmptyTodos() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
        }}>
            <p style={{
                fontWeight: 'bold',
                fontSize: '1.2em'
            }}> ¡Crea tu primer ToDo! </p>
        </Box> 
    );
}

export { EmptyTodos };