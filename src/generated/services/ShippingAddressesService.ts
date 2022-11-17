/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateCreateShippingAddressDto } from '../models/PrivateCreateShippingAddressDto';
import type { PrivateUpdateShippingAddressDto } from '../models/PrivateUpdateShippingAddressDto';
import type { ShippingAddress } from '../models/ShippingAddress';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShippingAddressesService {

    /**
     * 新建地址
     * @param requestBody
     * @returns ShippingAddress
     * @throws ApiError
     */
    public static privateCreateShippingAddress(
        requestBody: PrivateCreateShippingAddressDto,
    ): CancelablePromise<ShippingAddress> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/shippingAddresses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取所有地址
     * @returns ShippingAddress
     * @throws ApiError
     */
    public static privateGetAllShippingAddress(): CancelablePromise<Array<ShippingAddress>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/shippingAddresses',
        });
    }

    /**
     * 更新地址
     * @param id ID
     * @param requestBody
     * @returns ShippingAddress
     * @throws ApiError
     */
    public static privateUpdateShippingAddress(
        id: string,
        requestBody: PrivateUpdateShippingAddressDto,
    ): CancelablePromise<ShippingAddress> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/private/shippingAddresses/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取指定地址
     * @param id ID
     * @returns ShippingAddress
     * @throws ApiError
     */
    public static privateGetShippingAddressById(
        id: string,
    ): CancelablePromise<ShippingAddress> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/shippingAddresses/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 删除地址
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static privateDeleteShippingAddress(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/private/shippingAddresses/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 获取默认地址
     * @returns ShippingAddress
     * @throws ApiError
     */
    public static privateGetDefaultShippingAddress(): CancelablePromise<ShippingAddress> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/shippingAddresses/-/default',
        });
    }

}
