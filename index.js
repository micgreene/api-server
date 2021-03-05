const Example = require('./models/example-model.js');
const MONGODB_URI = 'mongodb://localhost:27017/mongo-db-demo'//mongo-db-demo is the db name

const options = {useNewURLParser: true, useUnifiedTopology: true}; //always pass in these options

mongoose.connect(MONGODB_URI, options);
//Mongodb is the database management service
//Mongoose provides methods to communicate between app and database