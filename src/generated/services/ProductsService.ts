/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddRecommendProductsDto } from '../models/AddRecommendProductsDto';
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { MasterCreateProductDto } from '../models/MasterCreateProductDto';
import type { MasterListProductsItemVo } from '../models/MasterListProductsItemVo';
import type { MasterUpdateProductDto } from '../models/MasterUpdateProductDto';
import type { PaginationVo } from '../models/PaginationVo';
import type { Product } from '../models/Product';
import type { PublicProductSimpleVo } from '../models/PublicProductSimpleVo';
import type { PublicProductVo } from '../models/PublicProductVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * 商品列表
     * @param sortBy 排序
     * @param categoryId 分类 ID
     * @param title 商品标题
     * @param status 商品状态筛选
     * @param tenantId 品牌 ID (租户 ID)
     * @param departmentId 部门 ID
     * @param isSoldOut 是否售罄
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListProducts(
        sortBy?: string,
        categoryId?: Array<string>,
        title?: string,
        status?: 'active' | 'inactive',
        tenantId?: 'sw' | 'sv' | '424',
        departmentId?: string,
        isSoldOut?: boolean,
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/products',
            query: {
                'sortBy': sortBy,
                'categoryId': categoryId,
                'title': title,
                'status': status,
                'tenantId': tenantId,
                'departmentId': departmentId,
                'isSoldOut': isSoldOut,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 新建商品
     * @param requestBody
     * @returns Product
     * @throws ApiError
     */
    public static masterCreateProduct(
        requestBody: MasterCreateProductDto,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 商品详情
     * @param id ID
     * @returns Product
     * @throws ApiError
     */
    public static masterGetProductById(
        id: string,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/products/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 更新商品
     * @param id ID
     * @param requestBody
     * @returns Product
     * @throws ApiError
     */
    public static masterUpdateProductById(
        id: string,
        requestBody: MasterUpdateProductDto,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 删除商品
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static masterDeleteProductById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/products/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 添加推荐商品
     * @param requestBody
     * @returns MasterListProductsItemVo
     * @throws ApiError
     */
    public static masterUpdateToRecommendByIds(
        requestBody: AddRecommendProductsDto,
    ): CancelablePromise<Array<MasterListProductsItemVo>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/products/-/recommend',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 推荐商品列表
     * @param tenantId 品牌 ID (租户 ID)
     * @returns MasterListProductsItemVo
     * @throws ApiError
     */
    public static masterListRecommendProducts(
        tenantId?: 'sw' | 'sv' | '424',
    ): CancelablePromise<Array<MasterListProductsItemVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/products/-/recommend',
            query: {
                'tenantId': tenantId,
            },
        });
    }

    /**
     * 取消推荐商品
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static masterCancelRecommendById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/products/{id}/recommend',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 商品列表
     *
     * 优先返回有库存商品，如果有库存商品不到查询指定的 limit，查询已售罄商品补充商品列表
     * 如果商品列表最后一个商品为已售罄商品，下次请求时需要将 isSoldOut 设为 true
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @param categoryId 分类 ID
     * @param title 商品标题
     * @param categoryIdInverse 分类 ID 是否为反选，默认为否
     * @param isSoldOut 是否售罄
     * @param isRecommend 是否为推荐商品
     * @returns any
     * @throws ApiError
     */
    public static publicListProductsByCursor(
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
        categoryId?: Array<string>,
        title?: string,
        categoryIdInverse?: boolean,
        isSoldOut?: boolean,
        isRecommend?: boolean,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/products',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'categoryId': categoryId,
                'title': title,
                'categoryIdInverse': categoryIdInverse,
                'isSoldOut': isSoldOut,
                'isRecommend': isRecommend,
            },
        });
    }

    /**
     * 推荐商品列表
     * @returns PublicProductSimpleVo
     * @throws ApiError
     */
    public static publicListRecommendProducts(): CancelablePromise<Array<PublicProductSimpleVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/products/-/recommend',
        });
    }

    /**
     * 被指定商品详情
     * @param id ID
     * @returns PublicProductVo
     * @throws ApiError
     */
    public static publicGetProductById(
        id: string,
    ): CancelablePromise<PublicProductVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/products/{id}',
            path: {
                'id': id,
            },
        });
    }

}
