/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterUpdateTenantDto } from '../models/MasterUpdateTenantDto';
import type { Tenant } from '../models/Tenant';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TenantsService {

    /**
     * 更新租户信息
     * @param tenantId
     * @param requestBody
     * @returns Tenant
     * @throws ApiError
     */
    public static masterUpdateTenant(
        tenantId: string,
        requestBody: MasterUpdateTenantDto,
    ): CancelablePromise<Tenant> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
