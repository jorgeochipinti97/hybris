import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'


interface Props {
    name: string
    url: string
    icon: any
}
export const ButtonComponent = ({ name, url, icon }: Props) => {
    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'

                    sx={{
                        my: 3,
                        backgroundColor: { xs: "rgba(214, 195, 184,0.8)", sm: "rgba(214, 195, 184,0.8)", md: "rgb(214, 195, 184)", lg: "rgb(214, 195, 184)", xl: "rgb(214, 195, 184)" },
                        borderRadius: "9px",
                        border: '1px solid #6B3710',
                        width: '200px', cursor:'pointer'

                    }}
                >


                    <IconButton
                        size="large"
                        color="secondary"
                        sx={{

                            borderRadius: "9px",
                            py: 2,
                        }}
                    >
                        {icon}
                    <Typography variant="button" sx={{ color: 'black', fontFamily: 'Montserrat', fontWeight: '700' }}>{name}</Typography>
                    </IconButton>
                </Box>

            </Box>
        </>
    )
}
