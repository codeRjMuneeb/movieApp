import React from 'react'

const continuewatching = () => {
    const list = [
        {
        //   title: "movie 1",
        //   genre: "Action",
          image: "/assets/movies/movie1.jpg",
        },
        {
        //   title: "movie 2",
        //   genre: "Avsdovnsdsd",
          image: "/assets/movies/movie2.jfif",
        },
        {
        //   title: "fdfsdf",
        //   genre: "Avnvnvsd",
          image: "/assets/movies/movie3.jfif",
        },
        {
          //   title: "fdfsdf",
          //   genre: "Avnvnvsd",
            image: "/assets/movies/movie4.jfif",
          },
       ];
    
  return (
    <>
      <div className="text-xs pt-10 pl-8  ">
        <div>
            <p className=" text-lg font-bold ">Continue Watching</p>
            <div className=" flex justify-between pt-7 ">
          {list.map((movie, index) => (
            <div   key={index} className="movie-card rounded       " >
             <img src={movie.image}  width="180px" className='rounded-md'/>
              {/* <div className="pl-2"> */}
              {/* <h2 className="break-all  text-gray-50">{movie.title}</h2> */}
              {/* <p className="break-all  text-gray-400 ">{movie.genre}</p> */}
              {/* </div> */}
              
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default continuewatching
