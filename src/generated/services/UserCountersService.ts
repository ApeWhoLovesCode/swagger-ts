/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MePageUserCounter } from '../models/MePageUserCounter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserCountersService {

    /**
     * 获取 “我的” 页面相关计数
     *
     * - 未读订单更新
     * - 未读【退款/售后】更新
     * @returns MePageUserCounter
     * @throws ApiError
     */
    public static privateGetMePageUserCounter(): CancelablePromise<MePageUserCounter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/userCounters/myPage',
        });
    }

}
