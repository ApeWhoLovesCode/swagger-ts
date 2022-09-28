/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProductInfo } from './OrderProductInfo';
import type { PrivateOrderOperateInfoVo } from './PrivateOrderOperateInfoVo';
import type { ShippingAddress } from './ShippingAddress';
import type { UserSnap } from './UserSnap';

export type PrivateOrderVo = {
    /**
     * 是否可退款
     */
    canRefund: boolean;
    /**
     * 已退款商品列表
     */
    refundedProducts: Array<OrderProductInfo>;
    /**
     * 退款中商品列表
     */
    refundingProducts: Array<OrderProductInfo>;
    confirmOperateInfo?: PrivateOrderOperateInfoVo;
    shipOperateInfo?: PrivateOrderOperateInfoVo;
    completeOperateInfo?: PrivateOrderOperateInfoVo;
    closeOperateInfo?: PrivateOrderOperateInfoVo;
    /**
     * 订单号
     */
    orderNum: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 实际付款
     */
    amount: number;
    /**
     * 商品总价
     */
    totalPrice: number;
    /**
     * （原始）实际付款
     */
    originalAmount?: number;
    /**
     * （原始）商品总价
     */
    originalTotalPrice?: number;
    /**
     * 快递费
     */
    expressFee: number;
    /**
     * 状态
     */
    status: PrivateOrderVo.status;
    /**
     * 是否在售后
     */
    isPendingRefund?: boolean;
    /**
     * 商品列表
     */
    products: Array<OrderProductInfo>;
    /**
     * 收货信息
     */
    shippingAddress: ShippingAddress;
    /**
     * 用户信息（快照）
     */
    userSnap: UserSnap;
    /**
     * 发起支付时间
     */
    createPaymentTime?: number;
    /**
     * 支付成功时间
     */
    paySuccessTime?: number;
    /**
     * 快递公司名称
     */
    expressCompanyName?: string;
    /**
     * 快递公司编号
     */
    expressCompanyCode?: string;
    /**
     * 快递单号
     */
    expressNum?: string;
    /**
     * 快递状态
     */
    expressState?: PrivateOrderVo.expressState;
    /**
     * 微信小程序物流查询 ID
     */
    waybillToken?: string;
};

export namespace PrivateOrderVo {

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

    /**
     * 快递状态
     */
    export enum expressState {
        _1 = '1',
        _0 = '0',
        _5 = '5',
        _3 = '3',
        _6 = '6',
        _4 = '4',
        _7 = '7',
        _2 = '2',
        _8 = '8',
        _14 = '14',
    }


}

