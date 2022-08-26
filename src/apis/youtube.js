import axios from "axios";

const KEY = 'AIzaSyBUjDEljw7_TRbEk5YeO0AO7FN7XN19k5s';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});