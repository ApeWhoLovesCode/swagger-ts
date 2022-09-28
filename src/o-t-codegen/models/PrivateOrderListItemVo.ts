/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperateInfo } from './OperateInfo';
import type { OrderProductInfo } from './OrderProductInfo';

export type PrivateOrderListItemVo = {
    /**
     * 是否可退款
     */
    canRefund: boolean;
    /**
     * 已退款商品列表
     */
    refundedProducts: Array<OrderProductInfo>;
    /**
     * 完成时间
     */
    completeOperateInfo?: OperateInfo;
    /**
     * 实际付款
     */
    amount: number;
    /**
     * 状态
     */
    status: PrivateOrderListItemVo.status;
    /**
     * 微信小程序物流查询 ID
     */
    waybillToken?: string;
    /**
     * 商品列表
     */
    products: Array<OrderProductInfo>;
    /**
     * 订单号
     */
    orderNum: string;
    /**
     * 是否在售后
     */
    isPendingRefund?: boolean;
};

export namespace PrivateOrderListItemVo {

    /**
     * 状态
     */
    export enum status {
        _00_AWAIT_CREATE_PAYMENT = '00-AwaitCreatePayment',
        _10_NOT_PAY = '10-NotPay',
        _20_PAID = '20-Paid',
        _30_AWAIT_SHIP = '30-AwaitShip',
        _40_SHIPPED = '40-Shipped',
        _50_COMPLETED = '50-Completed',
        _70_CLOSED = '70-Closed',
    }


}

