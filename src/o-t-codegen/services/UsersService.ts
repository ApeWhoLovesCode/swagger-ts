/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterUpdateUserDto } from '../models/MasterUpdateUserDto';
import type { PaginationVo } from '../models/PaginationVo';
import type { SimpleCountVo } from '../models/SimpleCountVo';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * 获取个人信息
     * @returns User
     * @throws ApiError
     */
    public static privateSelf(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/users/-/self',
        });
    }

    /**
     * 用户列表
     * @param sortBy 排序：[createdAt]
     * @param tenantId 租户 ID
     * @param nickName 用户名，模糊查询
     * @param isBlack 是否为黑名单用户
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListUser(
        sortBy?: string,
        tenantId?: 'sw' | 'sv',
        nickName?: string,
        isBlack?: boolean,
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/users',
            query: {
                'sortBy': sortBy,
                'tenantId': tenantId,
                'nickName': nickName,
                'isBlack': isBlack,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 用户数量
     * @param tenantId 租户 ID
     * @param nickName 用户名，模糊查询
     * @param isBlack 是否为黑名单用户
     * @returns SimpleCountVo
     * @throws ApiError
     */
    public static masterCountUser(
        tenantId?: 'sw' | 'sv',
        nickName?: string,
        isBlack?: boolean,
    ): CancelablePromise<SimpleCountVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/users/-/count',
            query: {
                'tenantId': tenantId,
                'nickName': nickName,
                'isBlack': isBlack,
            },
        });
    }

    /**
     * 更新用户信息
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static masterSetUserBlackById(
        id: string,
        requestBody: MasterUpdateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
