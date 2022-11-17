/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { LookBook } from '../models/LookBook';
import type { MasterCreateLookBookDto } from '../models/MasterCreateLookBookDto';
import type { MasterUpdateLookBookDto } from '../models/MasterUpdateLookBookDto';
import type { PaginationVo } from '../models/PaginationVo';
import type { PublicLookBookVo } from '../models/PublicLookBookVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LookBooksService {

    /**
     * 新建型录
     * @param requestBody
     * @returns LookBook
     * @throws ApiError
     */
    public static masterCreateLookBook(
        requestBody: MasterCreateLookBookDto,
    ): CancelablePromise<LookBook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/lookBooks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 型录列表
     * @param sortBy 排序：[createdAt, releaseTime]
     * @param lookBookType 型录类型
     * @param tenantId 租户 ID
     * @param title 标题，模糊查询
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListLookBooks(
        sortBy?: string,
        lookBookType?: 'image' | 'video',
        tenantId?: 'sw' | 'sv' | '424',
        title?: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/lookBooks',
            query: {
                'sortBy': sortBy,
                'lookBookType': lookBookType,
                'tenantId': tenantId,
                'title': title,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 更新型录
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static masterUpdateLookBook(
        id: string,
        requestBody: MasterUpdateLookBookDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/lookBooks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除型录
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static masterDeleteLookBook(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/lookBooks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 型录详情
     * @param id ID
     * @returns LookBook
     * @throws ApiError
     */
    public static masterGetLookBook(
        id: string,
    ): CancelablePromise<LookBook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/lookBooks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 型录列表
     * @param lookBookType 型录类型
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @returns any
     * @throws ApiError
     */
    public static publicListLookBooks(
        lookBookType: 'image' | 'video',
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/lookBooks',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'lookBookType': lookBookType,
            },
        });
    }

    /**
     * 型录详情
     * @param id ID
     * @returns PublicLookBookVo
     * @throws ApiError
     */
    public static publicGetLookBook(
        id: string,
    ): CancelablePromise<PublicLookBookVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/lookBooks/{id}',
            path: {
                'id': id,
            },
        });
    }

}
