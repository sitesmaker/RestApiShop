const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routers/router');
const authRouter = require('./routers/auth');

app.use(cors({ origin: ['http://localhost:8080'], }))
app.use(express.json());
app.use('/api', router);
app.use('/auth', authRouter);

async function startApp() {
    try {
        app.listen(PORT, ()=> {
            console.log(`Server start on ${PORT} port`);
        })
    } catch(err) {
        console.log(err);
    }
}

startApp();