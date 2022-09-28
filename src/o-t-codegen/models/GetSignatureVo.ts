/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSignatureVo = {
    /**
     * 文件名
     */
    keys: Array<string>;
    /**
     * bucket 域名
     */
    bucketDomain: string;
    policy: string;
    OSSAccessKeyId: string;
    Signature: string;
};

