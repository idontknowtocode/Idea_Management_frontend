import React, { useState, useEffect } from 'react';
import Loading from './loading';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from './Animation/FadeIn';
import IdeaList from './idealist';



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
      backgroundColor: 'black',
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
    media: {
      height: 140,
    },
    Awrapper: {
      justifyContent: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    actionArea: {
      minHeight: '100%',
      flexFlow: 'column-reverse',
      height: 350,
      maxHeight: 400,
    },
    otherActionArea: {
      height: 200,
    },
    action: {
      justifyContent: 'space-evenly',
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


  export default function Main() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (loading) {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }
      }, [loading]);
    if (loading) return <Loading />;


    return (
        <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg">
            <FadeInWhenVisible>
              <Paper
                className={classes.heading}
                style={{ background: '#012970', color: '#fff' }}
                elevation={2}
              >
                <i
                  class="fas fa-comment"
                  style={{ margin: '0 1.2rem', padding: '0' }}
                ></i>
                Idea List
              </Paper>
            </FadeInWhenVisible>
          </Container>
          <IdeaList></IdeaList>
            
          
        </>
      )}
    </div>
    );
  }