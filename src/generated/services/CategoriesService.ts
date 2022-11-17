/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicCategoryTreeVo } from '../models/PublicCategoryTreeVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * 获取所有分类
     * @returns PublicCategoryTreeVo
     * @throws ApiError
     */
    public static publicGetAllCategories(): CancelablePromise<Array<PublicCategoryTreeVo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/categories',
        });
    }

}
