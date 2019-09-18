import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyAjcH0jvJCHOv0WHk6JnuaXH_gC9X7yZw4'
    }
})