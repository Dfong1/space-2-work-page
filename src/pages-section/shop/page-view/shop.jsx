"use client"

import { Box, Button } from '@mui/material'
import React from 'react'

export default function Shop() {
  return (
    <Box>
        <Button color='primary' variant='outlined'>Click me</Button>
        <Button color='primary' variant='contained'>Click me</Button>
        <Button color='error' variant='contained'>Click me</Button>
        <Button color='info' variant='contained'>Click me</Button>
        <Button color='secondary' variant='contained'>Click me</Button>
        <Button color='success' variant='contained'>Click me</Button>
        <Button color='warning' variant='contained'>Click me</Button>
        <Button  variant='outlined'>Click me</Button>

    </Box>
  )
}
