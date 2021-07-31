import express from 'express'

// create a base app
const app = express()

app.use(express.json())

const data = [
  {
    name: "john doe",
    age: 34,
    hobbies: ['boxing', 'swimming'],
    createdOn: new Date(),
  }
]

// controllers
app.get('/', (request, response) => {
  return response.status(200).json(data)
})

app.post('/', (request, response) => {
  const requestBody = request.body

  data.push(requestBody)
  
  return response.json({
    "success": true
  })
})

const PORT = process.env.PORT || 5000

// listen on a port
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))