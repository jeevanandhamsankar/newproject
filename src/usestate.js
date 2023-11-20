import React ,{ useState } from 'react';

const Cat = () => {
    const [One, setOne] =useState('');
    const [Two, setTwo] =useState('');

    const Hi = (a, setterFunction) => {
        const value = a.target.value;
        setterFunction (value === '10' ? '10' :'-5'); 
    };

    return(
        <div>
          <h2> select currency </h2>
          <select value={One} onChange={(a) =>Hi(a, setOne)}>
            <option value=""> select an option</option>
            <option value="10">RUPEE</option>
            <option value="0">DOLLAR</option>
            <option value="0">POUND</option>
            <option value="0">EURO</option>
          </select>
        
          <h2> select currency country </h2>
          <select value={Two} onChange={(a) =>Hi(a, setTwo)}>
           <option value="">select an option</option>
           <option value="10">India</option>
           <option value="0">America</option>
           <option value="0">United Kingdom</option>
           <option value="0">Germany</option>
          </select>

          {
            (One && Two) && (
                <p> 
                Total marks: {Number(One) + Number(Two)}
                </p>
            )
          }
        </div>
    );
};

export default Cat;