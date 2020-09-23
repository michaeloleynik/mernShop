const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();

// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoURL'), {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    app.listen(PORT, () => console.log(`App has been started on ${PORT}`));
  } catch (e) {
    console.log(e.message);

    process.exit(1);
  }
}

start();

