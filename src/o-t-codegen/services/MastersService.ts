/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardInitInfo } from '../models/DashboardInitInfo';
import type { Master } from '../models/Master';
import type { MasterLoginDto } from '../models/MasterLoginDto';
import type { MasterLoginVo } from '../models/MasterLoginVo';
import type { RegisterMasterDto } from '../models/RegisterMasterDto';
import type { UpdateMasterInfoDto } from '../models/UpdateMasterInfoDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MastersService {

    /**
     * 管理员登陆
     * @param requestBody
     * @returns MasterLoginVo
     * @throws ApiError
     */
    public static publicLogin(
        requestBody: MasterLoginDto,
    ): CancelablePromise<MasterLoginVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/masters/-/token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 注册一个 master 用户, 暂时仅 system 用户可调用
     * @param requestBody
     * @returns Master
     * @throws ApiError
     */
    public static masterRegister(
        requestBody: RegisterMasterDto,
    ): CancelablePromise<Master> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/masters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 更新个人信息
     * @param requestBody
     * @returns Master
     * @throws ApiError
     */
    public static masterUpdateMasterInfo(
        requestBody: UpdateMasterInfoDto,
    ): CancelablePromise<Master> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/masters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 管理员登出
     * @returns any
     * @throws ApiError
     */
    public static masterLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/masters/-/token',
        });
    }

    /**
     * master 个人信息
     * @returns Master
     * @throws ApiError
     */
    public static masterSelf(): CancelablePromise<Master> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/masters/-/self',
        });
    }

    /**
     * dashboard 信息
     * @returns DashboardInitInfo
     * @throws ApiError
     */
    public static masterGetDashboardInitInfo(): CancelablePromise<DashboardInitInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/masters/-/dashboardInitInfo',
        });
    }

}
