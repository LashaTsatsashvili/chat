import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('World!'));

app.listen(process.env.PORT || 3000, () => console.log(' on port s3000!'));