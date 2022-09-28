/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UeditorService {

    /**
     * @param action
     * @param callback
     * @param source
     * @returns string
     * @throws ApiError
     */
    public static publicUeditor(
        action: 'config' | 'catchimage',
        callback: string,
        source?: Array<string>,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/public/ueditor',
            query: {
                'action': action,
                'callback': callback,
                'source': source,
            },
        });
    }

}
