import axios from '../axios/index'

export const sampleApi = {
    getSampledata,
    post
};
function getSampledata() {
    return axios.get('/test');
}

function post(tempobj) {
    // return axios.get('/student', { params: { rollno: rollno } })
    return axios.post('/test', tempobj)
}


