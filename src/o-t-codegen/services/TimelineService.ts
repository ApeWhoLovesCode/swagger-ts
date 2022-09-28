/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TimelineService {

    /**
     * @param resourceType 所属资源类型
     * @param resourceId 所属资源 ID
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @returns any
     * @throws ApiError
     */
    public static masterGetTimelineByResourceId(
        resourceType: 'Order' | 'Refund',
        resourceId: string,
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/timeline/{resourceType}/{resourceId}',
            path: {
                'resourceType': resourceType,
                'resourceId': resourceId,
            },
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
            },
        });
    }

}
