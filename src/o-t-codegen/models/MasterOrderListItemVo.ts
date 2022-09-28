/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProductInfo } from './OrderProductInfo';
import type { ShippingAddress } from './ShippingAddress';
import type { UserSnap } from './UserSnap';

export type MasterOrderListItemVo = {
    /**
     * 付款剩余时间（毫秒）
     */
    waitingTimeForPayment: number | null;
    /**
     * 实际付款
     */
    amount: number;
    /**
     * 收货信息
     */
    shippingAddress: ShippingAddress;
    /**
     * 用户信息（快照）
     */
    userSnap: UserSnap;
    /**
     * 商品列表
     */
    products: Array<OrderProductInfo>;
    /**
     * 快递单号
     */
    expressNum?: string;
    /**
     * 状态
     */
    status: MasterOrderListItemVo.status;
    /**
     * 订单号
     */
    orderNum: string;
    /**
     * 发起支付时间
     */
    createPaymentTime?: number;
};

export namespace MasterOrderListItemVo {

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

