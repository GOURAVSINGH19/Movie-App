import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
function HorizontalCard({ data }) {

  return (
    <div className=" w-full  h-[60vh] px-5 mt-[5vw] ">
      {/* <div className="mb-5 flex justify-between">
        <h1 className="text-3xl  text-white mb-5">Treding</h1>
      </div> */}
      <div className="w-[100%] h-[40vh]  text-white flex gap-10 overflow-x-auto overflow-hidden">
        {data.map((item, i) => (
          <Link to={`/${item.media_type}/details/${item.id}`} key={i} className="min-w-[25%] overflow-y-auto bg-[#d9d4d418] rounded-md">
            <img className="w-[30vw] h-[20vh] object-cover"  src={`https://image.tmdb.org/t/p/original/${ item.backdrop_path || item.profile_path|| data.poster_path}`} alt="img" />
           <h1 className="ml-2 text-[1.5vw]  font-medium">{item.name || item.title || item.original_name || item.original_title}</h1>
           <p className="mt-3 mb-3 ml-3 leading-tight tracking-tight ">
            {item.overview.slice(0,50)}... 
           <Link className=" text-blue-500">more</Link>
           </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCard;
