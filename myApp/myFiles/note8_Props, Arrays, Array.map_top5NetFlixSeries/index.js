//-----Props in React Js-------------------------------
//-----Arrays in React Js-------------------------------
//-----Array Map & Fat Arrow function in React Js-------------------------------

//--ReactJS Project Netflix Top Series list-------------

//"props" (which stands for properties)
//React Props are like function arguments in Js and attributes in HTML e.g href, type, alt, src, value...

import React from 'react';
import ReactDOM from 'react-dom';

import Cards from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2022</h1>
    <Cards
      imgsrc={Sdata[0].imgsrc}
      category={Sdata[0].category}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
      duration={Sdata[0].duration}
    />
    <Cards
      imgsrc={Sdata[1].imgsrc}
      category={Sdata[1].category}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
      duration={Sdata[1].duration}
    />
    <Cards
      imgsrc={Sdata[2].imgsrc}
      category={Sdata[2].category}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
      duration={Sdata[2].duration}
    />
    <Cards
      imgsrc={Sdata[3].imgsrc}
      category={Sdata[3].category}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
      duration={Sdata[3].duration}
    />
    <Cards
      imgsrc={Sdata[4].imgsrc}
      category={Sdata[4].category}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
      duration={Sdata[4].duration}
      
    />
  </>,
  document.getElementById("root")
);
//attributes in JSX element is called Props e.g. 👆🏼(here) sname, category, imgsrc, link
//props are used to send our custom data(sname, category, imgsrc,..) in any component(e.g. Card)👆🏼

//note : <Component /> k ander CSS styling k liye HTML attributes nhi likhna h nhi to wo use apna ek as a property smjhega 

//---------------------------------------------------

//mapping, functional programming -- ⭐

//Ref: function abc(value, index, array){}
function nFcard(val){
// console.log(val);
return(
  <Cards
  imgsrc={val.imgsrc}
  category={val.category} 
  sname={val.sname}
  link={val.link}
  duration={val.duration}
  typeGenre={val.typeGenre}
  description={val.description}
  yearActor={val.yearActor}
  />
)
}

ReactDOM.render(
  <>
    <h1 className="heading_style">List of topp 5 Netflix Series in 2022</h1>
    {Sdata.map((val, idx) => {
      {
        /* console.log(idx); */
      }
      return (
        <Cards
          key={val.id}
          imgsrc={val.imgsrc}
          category={val.category}
          sname={val.sname}
          link={val.link}
          duration={val.duration}
          typeGenre={val.typeGenre}
          description={val.description}
          yearActor={val.yearActor}
        />
      );
    })}

    {/* or */}
    {/* {Sdata.map(nFcard)} */}
  </>,
  document.getElementById("root")
);


//note: Map method needs a unique key.Keys are necessary to improve performance of React app.



