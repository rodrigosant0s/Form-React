import styles from './styles.module.scss'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@material-ui/core'

import LockOutlined from '@material-ui/icons/LockOutlined';
import green from '@material-ui/core/colors/green';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import React from 'react'

function Login() {

  const schema = yup.object({
    emailLogin: yup.string().required("required field*").email( "email invalid*"),
    passwordLogin: yup.string().required("required field*"),
  }).required();

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Grid>
      <Paper className={styles.paperStyles}>
        <Grid align='center'>
          <Avatar sx={{ bgcolor: green[500] }}><LockOutlined /></Avatar>
          <h2 className={styles.header}>Login</h2>
        </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth label='Email' variant="standard" {...register("emailLogin")} error={errors.emailLogin}/>
          <p className={styles.message}>{errors.emailLogin?.message}</p>
        <TextField fullWidth label='Password' type="password" variant="standard" {...register("passwordLogin")} error={errors.passwordLogin}/>
          <p className={styles.message}>{errors.passwordLogin?.message}</p>

        <FormControlLabel
          control={
            <Checkbox
              name="checkedBd"
              color="primary"
            />
          }
          label="Remember-me"
        />
         
          <Button fullWidth  type="submit" onSubmit={handleSubmit(onSubmit)} className={styles.buttonLogin} color="primary" variant="contained">Sign in</Button>
    
      </form>
      </Paper>
    </Grid >
  )
}

export default Login;