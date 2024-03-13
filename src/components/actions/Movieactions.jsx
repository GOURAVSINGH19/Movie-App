import axios from '../../utiis/Axios'
import { loadmovie } from '../Redux/Movieslice'
export {removemovie} from '../Redux/Movieslice'



export const asyncloadmovie= (id)=> async (dispatch,getstate)=>{
    try{
        const detail= await axios.get(`/movie/${id}`);
        const externalid=await axios.get(`/movie/${id}/external_ids`);
        const recommendation=await axios.get(`/movie/${id}/recommendations`);
        const similar=await axios.get(`/movie/${id}/similar`);
        const videos=await axios.get(`/movie/${id}/videos`);
        const translations=await axios.get(`/movie/${id}/translations`)
        const watchproviders=await axios.get(`/movie/${id}/watch/providers`);
        let theultimate={
            detail:detail.data,
            externalid:externalid.data,
            recommendation:recommendation.data.results,
            similar:similar.data.results,
            translations:translations.data.translations.map((t)=>(
                t.english_name
            )),
            videos:videos.data.results.find((key)=>key.type === 'trailer'),
            watchproviders:watchproviders.data.results.IN
        };
        dispatch(loadmovie(theultimate));
        console.log(theultimate)
    }
    catch(error){
        console.log(error);
    }
}