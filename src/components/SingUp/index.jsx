import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import styles from './styles.module.scss'

import green from '@material-ui/core/colors/green';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import React from 'react'


function SignUp() {
  const schema = yup.object({
    name: yup.string().required("required field*").min(2, "name minimum length should be 2*"),
    email: yup.string().email("email invalid*").required("required field*"),
    password: yup.string().required("required field*").min(4, "password minimum length should be 4*"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "passwords must match*").required("required field*"),
    checkbox: yup.string().oneOf(["true", null], "you must accept the terms and conditions*").required("checkbox is required*"),
  }).required();

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    alert('[SUCCESS]\n\n' + JSON.stringify(data, null, 4));
  }


  return (
    <Grid align="center">
      <Paper className={styles.paperStyles}>
        <Grid>
          <Avatar sx={{ bgcolor: green[500] }}>
            <AddCircleOutline />
          </Avatar>
          <h2 className={styles.header}>Sign up</h2>
          <Typography variante="caption">Please fill this form</Typography>
        </Grid>

        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth name="name" label="Name" variant="standard" {...register("name")} error={errors.name}/>
              <p className={styles.message}>{errors.name?.message}</p>
              
            <TextField fullWidth name="email" label="Email" variant="standard" {...register("email")} error={errors.email}/>
              <p className={styles.message}>{errors.email?.message}</p>

            <TextField fullWidth label="Password" type="password" variant="standard" {...register("password")} error={errors.password}/>
              <p className={styles.message}>{errors.password?.message}</p>

            <TextField fullWidth label="Confirm Password" type="password" variant="standard" {...register("confirmPassword")} error={errors.confirmPassword}/>
              <p className={styles.message}>{errors.confirmPassword?.message}</p>

              <FormControlLabel
                control={<Checkbox />} 
                label="I accept all the terms  and  conditions"
                {...register("checkbox")} 
              />
               <p className={styles.message}>{errors.checkbox?.message}</p>

            <Button fullWidth type="submit" variant="contained" className={styles.buttonSignUp}>Sign Up</Button>
        
        </form>

      </Paper>
    </Grid>
  )
}

export default SignUp;