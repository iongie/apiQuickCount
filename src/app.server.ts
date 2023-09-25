import main from './app.main';
import 'dotenv/config';

main.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send("Express + Typescript + NodeJS = 😍")
});
main.listen(process.env.PORT, () => {
    console.log(`[server] server dimulai di http://localhost:${process.env.PORT} ⚡`);
});