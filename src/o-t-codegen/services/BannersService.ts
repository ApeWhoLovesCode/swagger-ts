/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Banner } from '../models/Banner';
import type { CreateBannerDto } from '../models/CreateBannerDto';
import type { SortBannerDto } from '../models/SortBannerDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BannersService {

    /**
     * 新建 banner
     * @param requestBody
     * @returns Banner
     * @throws ApiError
     */
    public static masterCreateBanner(
        requestBody: CreateBannerDto,
    ): CancelablePromise<Banner> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/banners',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * banner 列表
     * @param tenantId 租户 ID
     * @returns Banner
     * @throws ApiError
     */
    public static masterListAllBanners(
        tenantId: 'sw' | 'sv',
    ): CancelablePromise<Array<Banner>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/banners',
            query: {
                'tenantId': tenantId,
            },
        });
    }

    /**
     * 删除 banner
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static masterDeleteBanner(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/master/banners/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 排序
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static masterSortBanner(
        requestBody: SortBannerDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/banners/-/sorting',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * banner 列表
     * @returns Banner
     * @throws ApiError
     */
    public static publicListBanners(): CancelablePromise<Array<Banner>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/banners',
        });
    }

}
