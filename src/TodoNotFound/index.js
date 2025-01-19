import { Box } from "@mui/material";

function TodoNotFound() {
    return (
        <Box sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
            <p style={{
                fontSize: '1.2em'
            }}> No se encontraron coincidencias </p>
        </Box>
    )
}

export { TodoNotFound };