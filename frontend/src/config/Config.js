
import config from '../../package.json';

const Config = () => {

    const version = config.version;
    const serverUrl = config.serverURL;

    return {
        version,
        serverUrl,
    }
}

export default Config();
