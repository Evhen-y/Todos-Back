require('dotenv').config()

interface IConfigSettings {
    host: string;
    user: string;
    port: string;
    password: string;
    database: string;
}

interface IConfig {
    [key: string]: IConfigSettings
}

const config: IConfig = {
    dev: {
        host: "localhost",
        user: "",
        password: "",
        port: "5432",
        database: "todosDB"
    },
    qa: {
        host: "",
        user: "",
        password: "",
        port: "",
        database: ""
    },
    uat: {
        host: "",
        user: "",
        password: "",
        port: "",
        database: ""
    },
    prod: {
        host: "",
        user: "",
        password: "",
        port: "",
        database: ""
    }
}

export default config[process.env.NODE_ENV || "dev"]