import {SocksProxyAgent} from "socks-proxy-agent";
import * as https from "https";

export async function checkSocks5Proxy(proxyUrl, targetUrl) {
    const agent = new SocksProxyAgent(proxyUrl);
    const url = new URL(targetUrl);
    return new Promise(resolve => {
        const req = https.get({
            hostname: url.hostname,
            path: url.pathname,
            agent: agent
        }, res => {
            console.log(res);
        });
        req.on('error', () => {
            resolve(false);
        });
        req.setTimeout(5000, () => {
            req.abort(); // 终止请求
            resolve(false);
        });
    });
}