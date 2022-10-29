import React from 'react'
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query'

import { getAccountList } from '../services/account';

const AccountList = () => {

    const { isLoading, data:queryData } = useQuery(['account-data'], async () => {
        return await getAccountList();
    })

    const {status, data, message} = queryData || {}

    return (
        <Paper
            sx={{
                maxHeight: "35rem",
                padding: 2,
                overflow: "auto"
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    fontSize: '2rem',
                    paddingY: "1rem"
                }}
            >
                Tài khoản đã tạo
            </Box>
            <List>
                {isLoading && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && data.map((item, index) => {
                    return (
                        <ListItem key={item.username}>
                            <ListItemAvatar>
                                <Avatar alt={item.username}>{item.username[0]}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.username}
                            />
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
}

export default AccountList