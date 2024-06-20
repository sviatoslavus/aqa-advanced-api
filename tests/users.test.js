const { UsersController } = require('../controllers/UsersController.js')

const usersController = new UsersController()


test('Get current user profile', async () => {
    await usersController.login()
    const res = await usersController.getUserProfile()
    expect(res.status).toBe(200)
    console.log(res.data.data.name);
    expect(res.data.data.name).toBe('Sviat')
})





