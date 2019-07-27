import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 74d1ff61d53b70109149b186226203480bfc7852bc351f575de0ed082bd33ba1' }

});

