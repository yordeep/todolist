"use client"
import { Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
const page = () => {

    const Theme = createTheme({
        palette:{
            black:{
                main:"#000000",
                contrastText: "#ffffff",
            },
        },
    });
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        setmainTask([...mainTask,{title,desc}]);
        settitle("");
        setdesc("");
        console.log(mainTask);
    }
    const deleteHandler = (i)=>{
        let copyTask = [...mainTask];
        copyTask.splice(i,1);
        setmainTask(copyTask);
    }
    let renderTask = <h4>No task availabe</h4>

    if(mainTask.length > 0){
      renderTask = mainTask.map((t,i)=>{
        return(
            <li key={i} style={{listStyle:'none',margin:4,display:'flex',justifyContent:'space-between',alignContent:'center'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'70%',textAlign:'start'}}>
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                    </Box>
                  <Button type='submit' variant='contained' color='error' size='large' onClick={()=>{deleteHandler(i)}}>Remove</Button>
            </li>
        );
      });
    }
   
    return ( 
        <>
        
        <Box display={"flex"} bgcolor={"black"} color={"white"} justifyContent={"center"} padding={3}>
            <Typography variant='h4'>
            deep's Todo List
            </Typography>
        </Box>
        <form onSubmit={submitHandler} style={{margin:'30px',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                <TextField id="filled-basic" label="Title" variant="filled" value={title} sx={{width:"30ch"}} onChange={(e)=>{settitle(e.target.value)}}/>
                <TextField id="filled-basic" label="Description" variant="filled" value={desc} sx={{width:"50ch"}} onChange={(e)=>{setdesc(e.target.value)}}/>
              <ThemeProvider theme={Theme}>  <Button type='submit' variant='contained' color='black' sx={{width:"15ch",height:"6ch"}}>Add</Button></ThemeProvider>
        </form>
        <hr />
            <Typography variant='h5' sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:4,padding:2,bgcolor:'lightgrey'}}>
                <ul style={{width:'100%',textAlign:'center'}}>
                    {renderTask}
                </ul>
            </Typography>
        </>
     );
}
 
export default page;