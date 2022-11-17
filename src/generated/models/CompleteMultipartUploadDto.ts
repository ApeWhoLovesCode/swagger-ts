/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultipartUploadPart } from './MultipartUploadPart';

export type CompleteMultipartUploadDto = {
    /**
     * 文件名
     */
    name: string;
    /**
     * 上传 ID
     */
    uploadId: string;
    /**
     * 分片信息
     */
    parts: Array<MultipartUploadPart>;
};

