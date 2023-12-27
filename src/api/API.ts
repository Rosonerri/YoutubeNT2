import axios from "axios"

export const getsearchedVideo = async (search: any) =>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: search,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '12',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '55937f67eamsh16cb5506a296d2fp1a5a6djsn8b7f7bd3e1b0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    localStorage.setItem("tubeVideo", JSON.stringify(response.data))
    // console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
export const getDetails = async(videoId: string)=>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: {
      part: 'contentDetails,snippet,statistics',
      id: videoId,
    },
    headers: {
      'X-RapidAPI-Key': '55937f67eamsh16cb5506a296d2fp1a5a6djsn8b7f7bd3e1b0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data.item[0].snippet;
  } catch (error) {
    console.error(error);
  }
}
 export const sugestVideo = async ()=>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '55937f67eamsh16cb5506a296d2fp1a5a6djsn8b7f7bd3e1b0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data.items;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
 }