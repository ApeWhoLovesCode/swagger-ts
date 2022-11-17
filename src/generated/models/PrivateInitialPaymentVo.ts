/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrivateOrderVo } from './PrivateOrderVo';

export type PrivateInitialPaymentVo = {
    timestamp: number;
    nonceStr: string;
    prepayId: string;
    signType: string;
    paySign: string;
    /**
     * 订单信息
     */
    order: PrivateOrderVo;
};

