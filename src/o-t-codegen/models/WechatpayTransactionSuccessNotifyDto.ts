/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WechatpayNotifyResourceDto } from './WechatpayNotifyResourceDto';

export type WechatpayTransactionSuccessNotifyDto = {
    event_type: string;
    resource: WechatpayNotifyResourceDto;
};

