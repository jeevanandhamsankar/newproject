import React from 'react';
function Cat(){
    const Anime =[
        {id:1,name:'naruto',image:'https://m.media-amazon.com/images/I/810Xo+d8xlL._AC_UF894,1000_QL80_.jpg'},
        {id:2,name:'one piece',image:'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'},
        {id:3,name:'dragon ball z',image:'https://images.justwatch.com/poster/8569196/s592/dragon-ball-z'},
        {id:4,name:'bleach',image:'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'},
        {id:5,name:'death note',image:'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg'},
        {id:6,name:'attack on titans',image:'https://qph.cf2.quoracdn.net/main-qimg-27ca627743a80380ddb451e6507d39d5-lq'},
        {id:7,name:'demon slayer',image:'https://w0.peakpx.com/wallpaper/328/718/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-kimetsu-no-yaiba-tanjirou-kamado.jpg'},
    ];
    return(
        <div className='Hi'>
            <header className='Hi-header'>
                <h1>ANIME LIST</h1>
               
                {<ul className="ani">
                 {
                    Anime.map((data,index)=>(
                    <li key={index} className="ani-item">
                        <p>{data.name}</p>
                    <a href={data.image} target='_blank' rel='noopener noreferrer'>
                        <img src={data.image}/>
                    </a>
                    
                    </li>
                    ))
                 }    
                </ul>}
            </header>
        </div>
    )
}export default Cat;