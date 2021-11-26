import styles from './styles.module.scss'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'

import LockOutlined from '@material-ui/icons/LockOutlined';
import green from '@material-ui/core/colors/green';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import React from 'react'

function Login({ handleChange }) {

  const schema = yup.object({
    emailLogin: yup.string()
      .email( "email invalid*")
      .required("required field*"),
    passwordLogin: yup.string()
      .min(4, "password minimum length should be 4*")
      .max(80, "password maximum length should be 80*")
      .required("required field*"),
  }).required();

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    alert("[LOGIN SUCCESSFUL]");
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
          
        <div className={styles.link}>
          <Typography>
            <Link href="/">
              Forgot password ?
            </Link>
          </Typography>

          <Typography> Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)} >
              Sign Up
            </Link>
          </Typography>
        </div>
      </form>
      </Paper>
    </Grid >
  )
}

export default Login;