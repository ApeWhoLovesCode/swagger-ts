/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProductInfo } from './OrderProductInfo';

export type PrivateRefundListItemVo = {
    /**
     * 商品图片
     */
    productImage?: string;
    /**
     * 商品标题
     */
    productTitle?: string;
    /**
     * 处理截止时间
     */
    processDeadline?: number;
    /**
     * 退款商品
     */
    refundProducts: Array<OrderProductInfo>;
    /**
     * 退款编号
     */
    refundNum: string;
    /**
     * 订单 ID
     */
    orderId: string;
    /**
     * 订单编号
     */
    orderNum: string;
    /**
     * 订单实付金额
     */
    orderAmount: number;
    /**
     * 实际退款金额
     */
    refundAmount: number;
    /**
     * 退款类型
     */
    refundType: PrivateRefundListItemVo.refundType;
    /**
     * 退款解决方案
     */
    refundSolution: PrivateRefundListItemVo.refundSolution;
    /**
     * 退款状态
     */
    refundStatus: PrivateRefundListItemVo.refundStatus;
    /**
     * 货物状态
     */
    goodsStatus: PrivateRefundListItemVo.goodsStatus;
};

export namespace PrivateRefundListItemVo {

    /**
     * 退款类型
     */
    export enum refundType {
        NOT_COMPLETED = 'NotCompleted',
        COMPLETED = 'Completed',
        MASTER_REFUND = 'MasterRefund',
    }

    /**
     * 退款解决方案
     */
    export enum refundSolution {
        REFUND = 'Refund',
        REFUND_AND_RETURN_GOODS = 'RefundAndReturnGoods',
    }

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
    }

    /**
     * 货物状态
     */
    export enum goodsStatus {
        NOT_SHIPPED = 'NotShipped',
        SHIPPED = 'Shipped',
    }


}

