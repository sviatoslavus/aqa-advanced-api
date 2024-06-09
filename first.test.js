const axios = require('axios')
const album1 = {
    albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952'
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


describe('Smoke test jsonPlaceholder API', ()=>{
    test('GET /posts/1 status code is 200', async()=>{
        const response = await axiosInstance.get('/posts/1')
        expect(response.status).toBe(200)
    })
    
    
    test('/POST new post status is 201 ', async () => {
        const response = await axiosInstance.post('/posts', 
            {   userId: 1, 
                title:"checkus",
                body: "helo helo"
            }
        )
        expect(response.status).toBe(201)
        expect(response.data.title).toMatch("checkus")
    })
    
    test('/GET comments from posts/1 ', async () => {
        const response = await axiosInstance.get('/posts/1/comments')
        expect(response.data[0].email).toMatch('Eliseo@gardner.biz')
    })
    
    test('/GET /albums/1/photos', async () => {
        const response = await axiosInstance.get('/albums/1/photos')
        console.log(response.data[0]);
        expect(response.data[0]).toEqual(album1)
    })
    
    test('/Patch a todo to complete the task', async ()=>{
        const response = await axiosInstance.patch('/todos/1', {
            completed: true
        })
        console.log(response.data);
        expect(response.data.completed).toBe(true);
    })
})