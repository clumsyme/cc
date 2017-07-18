import SDK from '../imsdk/NIM_Web_SDK_v4.0.0'

const NIM = SDK.NIM

const account = localStorage.imaccount
const token = localStorage.imtoken

//! 开发log用
import { clc } from '../utils'

var data = {};
export const nim = NIM.getInstance({
    debug: true,
    appKey: '88f4848627decbd8627d9ca19c7a7bbd',
    account,
    token,
    onconnect: onConnect,
    onwillreconnect: onWillReconnect,
    ondisconnect: onDisconnect,
    onerror: onError
});

function onConnect() {
    //!
    clc('连接成功');
}
function onWillReconnect(obj) {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    //!
    clc('即将重连');
    clc(obj.retryCount);
    clc(obj.duration);
}
function onDisconnect(error) {
    // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    //!
    clc('丢失连接');
    clc(error);
    if (error) {
        switch (error.code) {
            // 账号或者密码错误, 请跳转到登录页面并提示错误
            case 302:
                break;
            // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
            case 417:
                break;
            // 被踢, 请提示错误后跳转到登录页面
            case 'kicked':
                break;
            default:
                break;
        }
    }
}
function onError(error) {
    //!
    clc(error);
}