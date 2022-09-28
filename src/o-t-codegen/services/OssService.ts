/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteMultipartUploadDto } from '../models/CompleteMultipartUploadDto';
import type { CompleteMultipartUploadVo } from '../models/CompleteMultipartUploadVo';
import type { FilesUploadDto } from '../models/FilesUploadDto';
import type { GetMultipartUploadSignatureUrlsDto } from '../models/GetMultipartUploadSignatureUrlsDto';
import type { GetSignatureVo } from '../models/GetSignatureVo';
import type { InitiateMultipartUploadDto } from '../models/InitiateMultipartUploadDto';
import type { InitiateMultipartUploadVo } from '../models/InitiateMultipartUploadVo';
import type { UploadFileVo } from '../models/UploadFileVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OssService {

    /**
     * 上传文件
     * @param fileType 文件类型
     * @param formData files
     * @returns UploadFileVo
     * @throws ApiError
     */
    public static masterUploadFiles(
        fileType: 'img' | 'vid' | 'txt' | 'oth',
        formData: FilesUploadDto,
    ): CancelablePromise<Array<UploadFileVo>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/oss/fromFiles',
            query: {
                'fileType': fileType,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * 获取上传所需信息
     * @param fileType 上传类型, 一次只能批量传同一类型文件
     * @param count 文件数量
     * @returns GetSignatureVo
     * @throws ApiError
     */
    public static masterGetSignature(
        fileType: 'img' | 'vid' | 'txt' | 'oth',
        count: number,
    ): CancelablePromise<GetSignatureVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/oss/signature',
            query: {
                'fileType': fileType,
                'count': count,
            },
        });
    }

    /**
     * 初始化分片上传
     * @param requestBody
     * @returns InitiateMultipartUploadVo
     * @throws ApiError
     */
    public static masterInitiateMultipartUpload(
        requestBody: InitiateMultipartUploadDto,
    ): CancelablePromise<InitiateMultipartUploadVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/oss/multipartUpload/initialization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取分片上传所需 urls
     * @param requestBody
     * @returns string
     * @throws ApiError
     */
    public static masterGetMultipartUploadSignatureUrls(
        requestBody: GetMultipartUploadSignatureUrlsDto,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/oss/multipartUpload/signatrueUrls',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 结束分片上传
     * @param requestBody
     * @returns CompleteMultipartUploadVo
     * @throws ApiError
     */
    public static masterCompleteMultipartUpload(
        requestBody: CompleteMultipartUploadDto,
    ): CancelablePromise<CompleteMultipartUploadVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/oss/multipartUpload/completion',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
