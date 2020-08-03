import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Avatar, Typography, Button, Link,Paper, FormHelperText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useNavigate} from "react-router-dom";
import axios from "../../utils/axios";
import authService from "../../services/authService"

const useStyles =  makeStyles((theme)=>({
    root:{
       
        height:"100vh",
    },
    left:{
    background: "#ffcbdb",
    },

    avatar:{
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        

    },
    
    right:{
        background: "#ffcbdb",
    },
    
    img:{
        maxHeight: "400px",
        padding: theme.spacing(2),
     },
     button:{
         marginTop: theme.spacing(0), 
         marginBottom: theme.spacing(2)
     },
     form:{
        margin: theme.spacing(0,4,0,4),
        flexDirection:"column",
        justifyContent:"center",
        textAlign: "center"
     },
     esenha:{
        marginTop: theme.spacing(1)
     },
     paper:{
        flexDirection:"column",
        
        textAlign: "center"
     }


}));
function Copyright(){
    return(
        <Typography variant="body2" align="center">
        {"Copyright © "}
        <a color="inherit"  href="#">Clube Seleto</a>{" "}
        {new Date().getFullYear()}
        </Typography>
    )


}
function Signin(){
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [errorMessage, setErrorMessage]= useState();

     async function handleSignIn(){
        try{
        await authService.signIn(email,password) 
        navigate("/ ")
        }catch(error){
        setErrorMessage(error.response.data.message)
        }
        
        
    }


    return (
        <Grid container className={classes.root}>
            <Grid className={classes.left}
            md={7} 
            item 
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <img src="/images/cover.png" alt="logo" className={classes.img}></img>,

            </Grid>

            <Grid md={5} className={classes.right} >
                <Box display="flex"
                      flexDirection="column"
                      direction="column"
                      justify="center"
                      alignItems="center" 
                      m={8} >
                    <Paper elevation={10} className={classes.paper} variant="rounded">
                    <Box display="flex"
                      flexDirection="column"
                      alignItems="center" 
                      m={1} >
                   <Avatar className={classes.avatar}>
                    </Avatar>
                    </Box>
                    <Typography variant="h5">
                        Dados de usuário:
                    </Typography>
                    
                    <form className={classes.form}>
                    
                        <TextField 
                            required
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                        />
                        <TextField 
                            required
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                        <Button
                                size="large"                      
                                className={classes.button}
                                variant="contained"
                                color="primary"  
                                onClick={handleSignIn}    
                            >
                                Entrar
                        </Button>
                        {
                            errorMessage&&
                            <FormHelperText error>
                                {errorMessage}
                            </FormHelperText>

                        }
                        
                    </form>
                    </Paper>
                    
                    
                    <Grid Item className={classes.esenha}>
                    <Link>Esqueceu sua senha?</Link>
                </Grid>
                <Grid Item>
                    <Link>Não tem uma conta?Registre-se</Link>
                </Grid>
                <Copyright/>
                
                </Box>
            </Grid>
            



        </Grid>
        

    )

    }

export default Signin;

