import express from 'express';
import path from 'path';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '1337';

app.use(
	express.static(
		path.resolve(__dirname, '..', 'public')
	)
);

app.get('/', (req, res) => res.end('Hoooooi'));

app.listen(port, host, (err) => {
	if(err) console.log('Error error, does not compute');
	console.log('Server started at %s:%d', host, port);
});