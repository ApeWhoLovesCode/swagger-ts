/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicCategoryVo } from '../models/PublicCategoryVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * 获取所有分类
     * @returns PublicCategoryVo
     * @throws ApiError
     */
    public static publicGetAllCategories(): CancelablePromise<Array<PublicCategoryVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/categories',
        });
    }

}
