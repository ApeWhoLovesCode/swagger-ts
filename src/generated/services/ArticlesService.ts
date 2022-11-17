/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { MasterArticleVo } from '../models/MasterArticleVo';
import type { MasterCreateArticleDto } from '../models/MasterCreateArticleDto';
import type { MasterUpdateArticleDto } from '../models/MasterUpdateArticleDto';
import type { PaginationVo } from '../models/PaginationVo';
import type { PublicArticleVo } from '../models/PublicArticleVo';
import type { SimpleCountVo } from '../models/SimpleCountVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArticlesService {

    /**
     * 新建文章
     * @param requestBody
     * @returns MasterArticleVo
     * @throws ApiError
     */
    public static masterCreateArticle(
        requestBody: MasterCreateArticleDto,
    ): CancelablePromise<MasterArticleVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/articles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 文章列表
     * @param category 文章分类
     * @param sortBy 排序：[createdAt, pageView, status]
     * @param tenantId 租户 ID
     * @param title 标题，模糊查询
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListSimpleArticles(
        category: 'hot' | 'new',
        sortBy?: string,
        tenantId?: 'sw' | 'sv' | '424',
        title?: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/articles',
            query: {
                'sortBy': sortBy,
                'category': category,
                'tenantId': tenantId,
                'title': title,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 更新文章
     * @param id ID
     * @param requestBody
     * @returns MasterArticleVo
     * @throws ApiError
     */
    public static masterUpdateArticle(
        id: string,
        requestBody: MasterUpdateArticleDto,
    ): CancelablePromise<MasterArticleVo> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/articles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取文章详情
     * @param id ID
     * @returns MasterArticleVo
     * @throws ApiError
     */
    public static masterGetArticle(
        id: string,
    ): CancelablePromise<MasterArticleVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 删除文章
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static masterDeleteArticle(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 文章数量
     * @param category 文章分类
     * @param tenantId 租户 ID
     * @param title 标题，模糊查询
     * @returns SimpleCountVo
     * @throws ApiError
     */
    public static masterCountArticle(
        category: 'hot' | 'new',
        tenantId?: 'sw' | 'sv' | '424',
        title?: string,
    ): CancelablePromise<SimpleCountVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/articles/-/count',
            query: {
                'category': category,
                'tenantId': tenantId,
                'title': title,
            },
        });
    }

    /**
     * 获取指定文章详细内容
     * @param id ID
     * @returns PublicArticleVo
     * @throws ApiError
     */
    public static publicGetPublishedArticleById(
        id: string,
    ): CancelablePromise<PublicArticleVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取文章列表
     * @param category 分类
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @returns any
     * @throws ApiError
     */
    public static publicListPublishedSimpleArticles(
        category: 'hot' | 'new',
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/articles',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'category': category,
            },
        });
    }

}
