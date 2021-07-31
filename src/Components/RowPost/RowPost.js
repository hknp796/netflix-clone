import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../Constants/axios'
import {API_KEY,imageUrl} from '../../Constants/constants'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            // alert("Network error")
        })
        
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if (response.data.results.lenght!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('not available');
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((object)=>

                
                <img onClick={()=>handleMovie(object.id)} className={props.isSmall ?"smallPosters":"poster"} alt="post"    src={`${imageUrl + object.backdrop_path}`}  />
    )}
           
           </div>
          {urlId &&  <Youtube opts={opts} videoId={urlId.key} /> }
        </div>
    )
}

export default RowPost
