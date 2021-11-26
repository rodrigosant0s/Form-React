import { Box, Tab, Tabs, Typography, Paper} from '@material-ui/core'

import Login from '../components/Login'
import SignUp from '../components/SingUp'

import { useState } from 'react';

import styles from './styles.module.scss'


function SignInOutContainer() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  return (
    <Paper className={styles.tabsWrapper} elevation={15} >

      <Tabs
        value={value} 
        onChange={handleChange} 
        variant="fullWidth"
        indicatorColor="primary" 
        textColor="primary"
        >
        
        <Tab label="Sign in"></Tab>
        <Tab label="Sign up"></Tab>

      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Paper>
  )
}

export default SignInOutContainer;