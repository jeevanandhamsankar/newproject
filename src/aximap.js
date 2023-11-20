import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Hey from './activity';



const Cat = () => {
    const [Jay , setDivision] = useState ('');

    useEffect(() => {
        axios.get('https://www.balldontlie.io/api/v1/stats')
            .then(response => {

              const sat = response.data.data;

              const Kay = sat.map(a=>a.game.season);

             setDivision(Kay);
            })
            .catch(error => {
             console.error( 'Error fetching data: ', error);
            });
    }, []);

return(
    <>
     <h1> Data Fetched: </h1>
     {Jay.length> 0 ? (
        <ol>
            {Jay.map((Try, index) => (
                <li key={index}>val: {Try} </li>
            ))}
        </ol>
     ): (
        <Hey/>
     )}
    </>
  );
};

export default Cat;
    