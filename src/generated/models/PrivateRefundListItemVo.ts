/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProductInfo } from './OrderProductInfo';

export type PrivateRefundListItemVo = {
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 退款状态
     */
    refundStatus: PrivateRefundListItemVo.refundStatus;
    /**
     * 退款商品
     */
    refundProducts: Array<OrderProductInfo>;
};

export namespace PrivateRefundListItemVo {

    /**
     * 退款状态
     */
    export enum refundStatus {
        _10_PENDING = '10-Pending',
        _20_AWAIT_FOR_BUYER_SHIP = '20-AwaitForBuyerShip',
        _30_AWAIT_FOR_PARCEL = '30-AwaitForParcel',
        _40_REFUNDING = '40-Refunding',
        _50_REFUND_SUCCESS = '50-RefundSuccess',
        _60_REFUND_FAIL = '60-RefundFail',
        _70_CLOSED = '70-Closed',
    }


}

