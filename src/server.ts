import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hellso World!'));

app.listen(process.env.PORT || 8083, () => console.log('sssistening on port 8083!'));