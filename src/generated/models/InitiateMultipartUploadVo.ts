/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InitiateMultipartUploadVo = {
    /**
     * 文件名
     */
    name: string;
    /**
     * 上传任务 ID
     */
    uploadId: string;
    /**
     * 分片上传需要使用的 URL, 长度等于传入的 partCount, 一个 URL 对应一个 part, 按顺序
     */
    urls: string;
};

