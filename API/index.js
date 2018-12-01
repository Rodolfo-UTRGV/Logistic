import http from 'http';
import HttpServer from './HTTP/Server';
import jsonfile from 'jsonfile';


export default class API
{
    constructor()
    {
        let app     = new HttpServer();

        this.writePublicConfig();

        http.createServer(app).listen(__config.portHttp, __config.IP, () => {
            console.log('INFO -> HTTP Server Started ' + __config.IP + ':' + __config.portHttp);
        })
    }

    writePublicConfig()
    {
        jsonfile.writeFile(__base + '/src/config/constants.json', __config.webSettings, (err) => 
        {
            if(err){
                console.error('There was an error writing the configuration file', err);
                process.exitCode = 1;
            }
        });
    }
}