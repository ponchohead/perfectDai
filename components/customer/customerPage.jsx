import React, { useMemo } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router'
import { getCustomerById } from "../../services/selectors/getCustomerById";

import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  CardActions,
  Avatar,
  blueGrey,
  TextField
} from '@mui/material';



export const CustomerPage = () => {
  
  const router = useRouter();
    const { customerId } = router.query;

 
 
    const customerFiltered = useMemo(() => getCustomerById(customerId), [customerId]) ;

  return (
    <>

 
      <Head>
        <title>
            Account | Material Kit
        </title>
      </Head>

      
      <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
          
      >
        
        <Container maxWidth="lg" >
            <Typography
              sx={{ mb: 3 }}
              variant="h4"
            >
              {customerFiltered?.name + ' '}{customerFiltered?.lastName}
            </Typography>
            <hr/> 
            <br/>

            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <Card >
                    <CardContent >
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <Avatar
                          src={'/user.png'}
                          sx={{
                            height: 80,
                            mb: 2,
                            width: 80
                          }}
                        /> 
                        <Typography
                          color="textPrimary"
                          gutterBottom
                          variant="h5"
                        >
                          {customerFiltered?.name + ' '}{customerFiltered?.lastName}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {customerFiltered?.gender}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          Mobile: {customerFiltered?.mobile}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Divider />
                    <CardActions>
                      <Button
                        color="primary"
                        fullWidth
                        variant="text"
                      >
                        Upload picture
                      </Button>
                    </CardActions>
                  </Card>
               
              </Grid>
              
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
              <Card>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                  />
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="First name"
                          name="firstName"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Last name"
                          name="lastName"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          type="number"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Country"
                          name="country"
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Select State"
                          name="state"
                          required
                          variant="outlined"
                        >
                        </TextField>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                    >
                      Save details
                    </Button>
                  </Box>
              </Card>
               
            </Grid>
          </Grid>
        </Container>
      </Box>

       

    </>

   
  )
}
