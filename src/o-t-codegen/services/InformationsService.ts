/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Information } from '../models/Information';
import type { UpdateInformationDto } from '../models/UpdateInformationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InformationsService {

    /**
     * 获取所有配置信息
     * @returns Information
     * @throws ApiError
     */
    public static masterGetInformation(): CancelablePromise<Information> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/informations',
        });
    }

    /**
     * 修改配置信息
     * @param requestBody
     * @returns Information
     * @throws ApiError
     */
    public static masterUpdateInformation(
        requestBody: UpdateInformationDto,
    ): CancelablePromise<Information> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/informations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
