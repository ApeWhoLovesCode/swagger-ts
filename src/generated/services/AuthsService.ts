/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthLoginVo } from '../models/AuthLoginVo';
import type { AuthWechatMPLoginDto } from '../models/AuthWechatMPLoginDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthsService {

    /**
     * 小程序登陆接口
     * @param requestBody
     * @returns AuthLoginVo
     * @throws ApiError
     */
    public static publicLogin(
        requestBody: AuthWechatMPLoginDto,
    ): CancelablePromise<AuthLoginVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/auths/wechatMP',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 登出
     * @returns any
     * @throws ApiError
     */
    public static privateLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/private/auths',
        });
    }

}
