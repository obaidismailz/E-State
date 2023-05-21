const uri = "mongodb+srv://umarakhtar:blackshoulder123@cluster0.4c1zkvg.mongodb.net/ESTATE?retryWrites=true&w=majority";

// Install the required packages:
// npm install express mongoose cors

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const authRoutes = require('./routes/login');
const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();
const port = 3001;
let token = null;

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Create a data schema
const User = require('./models/user');
const Property = require('./models/property');

// Express middleware
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cors()); // Enable CORS for all routes

// API endpoint to store data in the database
app.post('/signup', async (req, res) => {

  const { email } = req.body;
  User.findOne({ email }, async function (err, user) {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      try {
        const newData = new User(req.body); // Use the User model
        await newData.save();
        res.status(200).json({ message: 'Data stored successfully' });
      } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ message: 'Failed to store data' });
      }
    }
    else {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Find the user by email
  User.findOne({ email }, function (err, user) {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Compare password

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (!isMatch) {
        console.log(password);
        return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
      }

      // Create and sign a JWT token
      token = jwt.sign({ userEmail: email }, config.secretKey, { expiresIn: '1h' });
      res.json({ message: 'Authentication successful', token });
    });
  });
});

app.post("/property", async (req, res) => {
  const {
    purpose,
    type,
    city,
    address,
    area,
    unit,
    price,
    rooms,
    bath,
    floors,
    installment,
    description,
    image,
    panorama,
    agent,
  } = req.body;

  jwt.verify(token, config.secretKey, async (err, decoded) => {
    
    if (err) {
      // Handle token verification error
      console.error('Token verification failed:', err.message);
      // Respond with an appropriate error message
    } else {
      const email = decoded.userEmail;
      // Use the 'email' variable as needed
      try {
        const property = new Property({
          email,
          purpose,
          type,
          city,
          address,
          area,
          unit,
          price,
          rooms,
          bath,
          floors,
          installment,
          description,
          image,//: images.map((image) => Buffer.from(image, "base64")), // Convert the base64 image data to Buffers
          panorama,//: panoramas.map((panorama) => Buffer.from(panorama, "base64")), // Convert the base64 panorama data to Buffers
          agent,
        });
    
        await property.save();
        res.status(201).json({ message: "Property created successfully." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred while creating the property." });
      }
      // Respond with the email or perform further actions
    }
  });

  
});

//app.use("/login",authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
