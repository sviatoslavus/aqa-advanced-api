const { CarsController } = require('../controllers/CarsController.js')



const carsController = new CarsController()
let idArray = []; 

describe("Positive Cars creation", () =>{
   
    beforeAll(async()  =>{
        // console.log("Before");
        await carsController.login()
    })

    afterAll(async () =>{
        for(let i = 0; i< idArray.length; i++){
           await carsController.deleteCarById(idArray[i])
        }
        console.log("afterall");
        const rest = await carsController.logout()
        console.log(rest);
    })
    test("Create Audi ", async ()=>{
        for(let i = 1; i <=5 ; i++){
            const res = await carsController.createCar(1, i, 1000)
            console.log(res.data.data.id);
            expect(res.status).toBe(201)
            idArray.push(res.data.data.id)
        }
        
    })
    test("Create BMW ", async ()=>{
        for(let i = 6; i <= 10 ; i++){
            const res = await carsController.createCar(2, i, 100)
            console.log(res.data.data.id);
            expect(res.status).toBe(201)
            idArray.push(res.data.data.id)
        }
    
})
test("Create Ford ", async ()=>{
    for(let i = 11; i <=15 ; i++){
        const res = await carsController.createCar(3, i, 100)
        console.log(res.data.data.id);
        expect(res.status).toBe(201)
        idArray.push(res.data.data.id)
    }

})
test("Create Porsche ", async ()=>{
    for(let i = 16; i <= 18 ; i++){
        const res = await carsController.createCar(4, i, 100)
        console.log(res.data.data.id);
        expect(res.status).toBe(201)
        idArray.push(res.data.data.id)
    }

})
test("Create Fiat ", async ()=>{
    for(let i = 19; i <= 23 ; i++){
        const res = await carsController.createCar(5, i, 100)
        console.log(res.data.data.id);
        expect(res.status).toBe(201)
        idArray.push(res.data.data.id)
    }

})

})
describe("Negative", () => {

    test("User is unable to create a car if not authorized(401)", async () => {
        const res = await carsController.createCar(1, 1, 100)
        expect(res.status).toBe(401)
    })
    test("User gets 404 if the brand does not exist", async () => {
        const auth = await carsController.login()
        const res = await carsController.createCar(10, 1, 100)
        expect(res.status).toBe(404)
    })
    test("User gets 404 if the car id does not exist in the garage", async () => {
        const auth = await carsController.login()
        const res = await carsController.getCarById(1)
        expect(res.status).toBe(404)
    })


})