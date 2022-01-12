import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      marginBottom: 10,
      [theme.breakpoints.down(460)]: {
        padding: 15,
      },
    },
    paper: {
      fontSize: '1.8rem',
      color: '#fff',
      backgroundColor: '#012970',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    },
    paper: {
        padding: '1rem',
        margin: '2rem 0',
        [theme.breakpoints.up(460)]: {
          paddingInline: 40,
        },
        width: 'auto',
        color: 'black',
      },
      text: {
        color: 'black',
        fontsize: '1rem',
      },
    Hroot: {
      maxWidth: 345,
      margin: 10,
      float: 'left',
      minWidth: 'auto',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.16), 0 6px 20px 0 rgba(0, 0, 0, 0.13)',
    },
    Awrapper: {
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    heading: {
      fontSize: '1.8rem',
      color: '#fff',
      backgroundColor: '#012970',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '3rem 0rem 2rem 0rem',
      padding: '1rem',
    },
  }));


  export default function IdeaList() {
    const classes = useStyles();
    const [idealist , setIdealist] = useState(new Map());
    const [highlight, sethighlight] = useState('');
    const [idea, setIdea] = useState('');

    const addhighlight = (i)=>{
        if(!highlight){
        }
        else{
            if(idealist.get(i)===undefined){
            }
            else{
                var k = idealist
                var temp = k[i];
                k[i].push(highlight);
                
                setIdealist(k);
            }
            sethighlight('')
        }
    }

    const addidea = ()=>{
      var temp = idealist;
      temp[idea] = [];
        if(!idea){
        }
        else{
            if(idealist.get(idea)===undefined){
                var k = idealist
                k.set(idea,[])
                setIdealist(k);
            }
            setIdea('')
        }
    }

    
  //      return (
  //       <div style={{ height: 'auto', width: '100%' }}>
  //         <div className='addidea'style={{alignItems:'center'}}>
  //             <input type="text" placeholder="Add Ideas..." 
  //               value={idea}
  //               onChange={(e)=>setIdea(e.target.value)}
  //             />
  //             <i className="fa fa-plus " title="Add" onClick={addidea}></i>
  //             {console.log(idealist)}
  //           </div>
  //           {(
  //             <>
  //             {
  //             // const idea_keys = []
  //             // for(let key of idealist.keys())
  //             //   idea_keys.push(key)
              
  //             idea_keys.map((item)=>{
  //               <Paper className={classes.paper}>
  //                               {item}
  //                           <div className='addhighlight'>
  //                               <input type="text" placeholder="Add highlights..." 
  //                                 value={highlight}
  //                                 onChange={(e)=>sethighlight(e.target.value)}
  //                               />
  //                               <i className="fa fa-plus " title="Add Highlight" onClick={addhighlight}></i>
  //                           </div>
  //                           <Divider variant="middle" />
  //                           <Grid container spaceing ={3}>
  //                           <Grid item xs ={3}>
  //                           {
  //                             const vals = idealist[item]
  //                             vals.map((val)=>{
  //                               <Card className={classes.Hroot}>
  //                               <CardContent>
  //                                   <Typography
  //                                     gutterBottom
  //                                     style={{ color: 'black' }}
  //                                     variant="h6"
  //                                     component="h2"
  //                                     >
  //                                     {val}
  //                                   </Typography>
  //                                 </CardContent>
  //                             </Card>
  //                             })
  //                           }
  //                           </Grid>
  //                           </Grid>
  //                           </Paper>
  //             })


  // }
  //             </>

  //      )}
  //   </div>
  //   );
  // }








    return (
        <div style={{ height: 'auto', width: '100%' }}>
          <div className='addidea'style={{alignItems:'center'}}>
              <input type="text" placeholder="Add Ideas..." 
                value={idea}
                onChange={(e)=>setIdea(e.target.value)}
              />
              <i className="fa fa-plus " title="Add" onClick={addidea}></i>
              {console.log(idealist)}
            </div>
            
      {(
        <>
            
              {         
                        idealist.forEach(function(idea, highlights) {
                            console.log(idea);
                            return(
                            <Paper className={classes.paper}>
                                {idea}
                            <div className='addhighlight'>
                                <input type="text" placeholder="Add highlights..." 
                                  value={highlight}
                                  onChange={(e)=>sethighlight(e.target.value)}
                                />
                                <i className="fa fa-plus " title="Add Highlight" onClick={addhighlight}></i>
                            </div>
                            <Divider variant="middle" />
                            <Grid container spaceing ={3}>
                            <Grid item xs ={3}>
                            {
                            highlights.forEach(high => {
                              <Card className={classes.Hroot}>
                                <CardContent>
                                    <Typography
                                      gutterBottom
                                      style={{ color: 'black' }}
                                      variant="h6"
                                      component="h2"
                                      >
                                      {high}
                                    </Typography>
                                  </CardContent>
                              </Card>
                            })
                          }
                            </Grid>
                            </Grid>
                            </Paper>
                            )
                        
                        })
            }                             
        </>
      )}
    </div>
    );
  }



// const getdata = ({ data }) => {
//   const getdata_ideas = () => {
//     let idea_list = [];

//     data.map((idea_Obj) => {
//       return idea_list.push(
//         <div key={idea.title}>
//           <div
//             style={{
//               margin: 10,
//               justifyContent: 'center',
//               display: 'flex',
//             }}
//           >
//           <Grid container spacing={3}>
          
//             <Card>
//             </Card>
//           </div>
//         </div>
//       );
//     });