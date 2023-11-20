import React , { useEffect, useState } from 'react';
import axios from 'axios';
import Hey from './activity';



const Cat = () => {
    const [Jay , setGold] = useState (null);

    useEffect(() => {
        const fetchGolddata =async () => {
            try{
                const res =await axios.get ('https://www.goldapi.io/api/XAU/USD' ,{
                    headers :{
                        'x-access-token': 'goldapi-i97rlp3ny2x2-io'
                    }
                });
                setGold(res.data);
            } catch(error) {
                console.error ('Error fecthing gold data:',error);
            }
        };
        fetchGolddata();
    }, []);
       

return(
    <>
     {Jay ? (
        <div>
            <p>Gold Rate:{Jay.price}</p>
            <p>Exchange:{Jay.exchange}</p>
            <p>24k price:{Jay.price_gram_24k}</p>
        </div>
     ):(
        <Hey/>
     )}
    </>
  );
};

export default Cat;
    