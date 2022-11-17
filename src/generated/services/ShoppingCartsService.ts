/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { PrivateCreateShoppingCartDto } from '../models/PrivateCreateShoppingCartDto';
import type { PrivateUpdateShoppingCartDto } from '../models/PrivateUpdateShoppingCartDto';
import type { ShoppingCartVo } from '../models/ShoppingCartVo';
import type { SimpleCountVo } from '../models/SimpleCountVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShoppingCartsService {

    /**
     * 加入购物车
     * @param requestBody
     * @returns ShoppingCartVo
     * @throws ApiError
     */
    public static privateAddShoppingCart(
        requestBody: PrivateCreateShoppingCartDto,
    ): CancelablePromise<ShoppingCartVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/shoppingCarts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取购物车列表
     * @returns ShoppingCartVo
     * @throws ApiError
     */
    public static privateListShoppingCarts(): CancelablePromise<Array<ShoppingCartVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/shoppingCarts',
        });
    }

    /**
     * 获取购物车商品总件数
     * @returns SimpleCountVo
     * @throws ApiError
     */
    public static privateCountShoppingCarts(): CancelablePromise<SimpleCountVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/shoppingCarts/-/count',
        });
    }

    /**
     * 更新购物车商品信息，如：数量
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static privateUpdateShoppingCart(
        id: string,
        requestBody: PrivateUpdateShoppingCartDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/private/shoppingCarts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除购物车商品
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static privateDeleteShoppingCart(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/private/shoppingCarts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取某个用户的购物车列表
     * @param userId userId
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @returns any
     * @throws ApiError
     */
    public static masterListUserShoppingCarts(
        userId: string,
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/shoppingCarts',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'userId': userId,
            },
        });
    }

}
