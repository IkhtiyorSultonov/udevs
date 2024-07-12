import { Direction, MobileApp, OurServices, Team } from '@/components'
import { withLayout } from '@/layout/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePageComponents = () => {
  return (
    <Box mt={20}>
      <Direction/>
      <OurServices/>
      <Team/>
      <MobileApp/>
    </Box>
  )
}

export default withLayout(HomePageComponents)