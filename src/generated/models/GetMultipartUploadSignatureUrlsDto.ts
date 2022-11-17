/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetMultipartUploadSignatureUrlsDto = {
    /**
     * uploadId
     */
    uploadId: string;
    /**
     * 需要签的块编号
     */
    partNumbers: Array<number>;
};

