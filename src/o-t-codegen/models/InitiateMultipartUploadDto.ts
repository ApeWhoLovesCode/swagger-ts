/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InitiateMultipartUploadDto = {
    /**
     * 上传类型
     */
    fileType: InitiateMultipartUploadDto.fileType;
    /**
     * 文件后缀
     */
    ext: string;
    /**
     * 切分数量
     */
    partCount: number;
};

export namespace InitiateMultipartUploadDto {

    /**
     * 上传类型
     */
    export enum fileType {
        IMG = 'img',
        VID = 'vid',
        TXT = 'txt',
        OTH = 'oth',
    }


}

