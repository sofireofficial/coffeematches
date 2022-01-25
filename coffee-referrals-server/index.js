const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

// http = created for comms across internet, so that pcs can communicate (or clients communicates with servers)
// a protocol (i.e. standar/id required first), they know what to expect from each other
app.use(cors({origin:'http://localhost:3000'}));

app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());

const users = [
    {
        id:'001',
        firstName:'Jane',
        lastName:'Doe',
        age: 20,
        email:'jane.doe@gmail.com',
    },
    {
        id:'002',
        firstName:'John',
        lastName:'Doe',
        age: 30,
        email:'john.doe@gmail.com',
    }
]

app.get('/users', (req, res) => {
    res.status(200).send(users)
});

        // app.get('/users', (req, res) => {
        //     res.status(200).json(users)
        // });

        // app.get('/serving', (req, res) => {
        //     console.log(req)
        //     res.send('req is displaying');
        // });

        //anon function used below

app.post('/add-user', (req, res) => {
        const userData = req.body;
        console.log(req);
        users.push(userData);
        res.status(201).send({message: "created successfully ", data: users});
})

app.listen(8001, () => {console.log('Server running on port 8001 for sure!')});

// test 
// how Node is used to create a server
// servers live on port, you have to open up a port where people can connect to server
// CRUD: get(reads), post(create), put(replaces)/patch(updates), delete

// homework 8001... make a put request... /update-profile/:id
// localhost:8001/update-profile/005
// find out how to get access to that ID!!!
// how to use method req.params   ???? ****** 