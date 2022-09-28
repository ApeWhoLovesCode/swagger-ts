/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WechatpayRefundSuccessNotifyDto } from '../models/WechatpayRefundSuccessNotifyDto';
import type { WechatpayTransactionSuccessNotifyDto } from '../models/WechatpayTransactionSuccessNotifyDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentsService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static publicWechatpayTransactionNotify(
        requestBody: WechatpayTransactionSuccessNotifyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/payments/wechatpay/transactionNotify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static publicWechatpayRefundNotify(
        requestBody: WechatpayRefundSuccessNotifyDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/public/payments/wechatpay/refundNotify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
