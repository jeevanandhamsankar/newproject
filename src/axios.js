import React , { useEffect, useState } from 'react';
import axios from 'axios';

const Cat = () => {
    const [Jay , setDivision] = useState('');

    useEffect(() => {
        axios.get('https://api.github.com/users/hadley/orgs')
            .then(response => {

              const b = response.data;

              const Jay = b[0].url;

             setDivision(Jay);
            })
            .catch(error => {
             console.error( 'Error fetching data: ', error);
            });
    }, []);

return(
    <>
    {Jay !== '' &&(
        <div>
            <p>Division: {Jay}</p>
        </div>
    )}
    </>
  );
};

export default Cat;
    