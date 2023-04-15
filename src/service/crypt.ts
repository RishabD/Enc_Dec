import { AES, enc, lib } from 'crypto-js';

export const encryptMessage = (message: string, key: string) => {
    try {
        const iv = lib.WordArray.random(16);
        return AES.encrypt(enc.Utf8.parse(message), key, { iv }).toString(JsonFormatter)
    }
    catch (e) {
        console.error(e)
        return null
    }
}

export const decryptMessage = (encryptedMessage: string, key: string) => {
    try {
        const decrypted = AES.decrypt(JsonFormatter.parse(encryptedMessage), key);
        return decrypted.toString(enc.Utf8);
    }
    catch (e) {
        console.error(e)
        return null
    }
}

type JsonFormat = {
    ct: string,
    iv?: string,
    salt?: string
}

const JsonFormatter = {
    stringify: function (cipherParams: lib.CipherParams) {
        const jsonObj = {
            ct: cipherParams.ciphertext.toString(enc.Base64),
            iv: cipherParams.iv ? cipherParams.iv.toString(enc.Base64) : undefined,
            salt: cipherParams.salt ? cipherParams.salt.toString(enc.Base64) : undefined
        };
        return JSON.stringify(jsonObj);
    },
    parse: function (jsonStr: string) {
        const jsonObj = JSON.parse(jsonStr) as JsonFormat;
        const cipherParams = lib.CipherParams.create({
            ciphertext: enc.Base64.parse(jsonObj.ct),
            iv: jsonObj.iv ? enc.Base64.parse(jsonObj.iv) : undefined,
            salt: jsonObj.salt ? enc.Base64.parse(jsonObj.salt) : undefined
        });
        return cipherParams;
    }
};
