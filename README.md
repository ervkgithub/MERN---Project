# MERN - Project Management APP 

# Rest API vs GraphQL

### `Rest API - Many end points for API - Response includes all data`
### `GraphQL - Single edpint - Response includes only requested data`

# MongoDB Environment

### `mongodb atlas - for cloud`
### `mongodb compass - for desktop`

# Server - Run Below Command to install dependencies

### `npm install express express-graphql graphql mongoose cors colors`

### `npm i -D nodemon dotenv`

# To run Server run below Command

### ` npm run dev `

# Client - Run Below Command to create app and install all dependencies

### `npx create-react-app client`

### `npm i @apollo/client graphql react-router-dom react-icons`

# GraphQL Query for Data from MongoDB

// Add client

mutation{
  addClient(name:"Test 1", email:"test1.email@test.com", phone:"12345"){
    name
    email
  }
}

// Get All Clients

{
  clients{
    id
    name
    email
    phone
  }
}

// Add projects

mutation {
  addProject(name: "Web App", description: "This is the web app project description", status: progress, clientId: "640f179b2111c2df32bdcf9c") {
   name
   description
  }
}

// Get single project

{
  project(id: "640f1de3e5dcfc1bcab85313") {
    name
    description
  }
}

// Get all projects

{
  projects{
    id
    name
    status
    client{
      name
      email
    }
  }
}

// Delete Project

mutation {
  deleteProject(id:"640f1a81e5dcfc1bcab852fd"){
    id
  }
}

// Update Project

mutation {
  updateProject(id:"640f1a81e5dcfc1bcab852fd", name:"Android Application", status:completed, description:"android apps"){
    name
    description
  }
}
