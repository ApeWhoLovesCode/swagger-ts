/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitialResourcesVo } from '../models/InitialResourcesVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InitialResourcesService {

    /**
     * @returns InitialResourcesVo
     * @throws ApiError
     */
    public static publicGetInitialResources(): CancelablePromise<InitialResourcesVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/initialResources',
        });
    }

}
