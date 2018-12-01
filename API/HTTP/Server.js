import ejs from 'ejs';
import express from 'express';
import session from 'express-session';
import HttpRouter from './Router';
import MySQL from 'mysql';

export default class HttpServer
{
    constructor()
    {
        const app           = express();
        const MySQLStore    = require('express-mysql-session')(session);

        const connection = MySQL.createConnection({
            host: __config.database.connection.host,
            port: __config.database.connection.port,
            user: __config.database.connection.user,
            password: __config.database.connection.password,
            database: __config.database.connection.database
        });

        connection.connect((err) => {
            if(err) {
                console.error('ERROR -> Can\'t connect to the database. (Ctrl + C)');
                return;
            }

            console.log('INFO -> Database Connection Success!');
        });

        const sessionStore  = new MySQLStore({
            createDatabaseTable: false,
            schema: {
                tableName: __config.session.store.tableName,
                columnNames: {
                    session_id: __config.session.store.sessionId,
                    expires: __config.session.store.expires,
                    data: __config.session.store.data
                }
            }
        }, connection);

        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        app.use(session({
            key: __config.session.key,
            secret: __config.session.secret,
            store: sessionStore,
            resave: __config.session.resave,
            saveUninitialized: __config.session.saveUninitialized
        }));

        app.engine('html', ejs.renderFile);
        app.set('view engine', 'html');

        app.use(express.static(__base + '/dist'));
        app.use('/assets', express.static(__base + '/assets'));

        app.use(new HttpRouter);

        return app;
    }
}