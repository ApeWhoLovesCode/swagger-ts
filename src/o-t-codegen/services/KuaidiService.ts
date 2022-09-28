/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoRecognitionCompanyVo } from '../models/AutoRecognitionCompanyVo';
import type { KuaidiDataItem } from '../models/KuaidiDataItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KuaidiService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static publicSubscriptionCallback(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/kuaidi/-/callback',
        });
    }

    /**
     * 智能识别快递单号
     * @param expressNum
     * @returns AutoRecognitionCompanyVo
     * @throws ApiError
     */
    public static privateAutoRecognition(
        expressNum: string,
    ): CancelablePromise<Array<AutoRecognitionCompanyVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/kuaidi/{expressNum}/autoRecognition',
            path: {
                'expressNum': expressNum,
            },
        });
    }

    /**
     * 智能识别快递单号
     * @param expressNum
     * @returns AutoRecognitionCompanyVo
     * @throws ApiError
     */
    public static masterAutoRecognition(
        expressNum: string,
    ): CancelablePromise<Array<AutoRecognitionCompanyVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/kuaidi/{expressNum}/autoRecognition',
            path: {
                'expressNum': expressNum,
            },
        });
    }

    /**
     * 快递详情
     * @param expressNum
     * @returns KuaidiDataItem
     * @throws ApiError
     */
    public static masterGetKuaidiByExpressNum(
        expressNum: string,
    ): CancelablePromise<Array<KuaidiDataItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/kuaidi/{expressNum}',
            path: {
                'expressNum': expressNum,
            },
        });
    }

}
