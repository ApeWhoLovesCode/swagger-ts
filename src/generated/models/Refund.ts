/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Note } from './Note';
import type { OperateInfo } from './OperateInfo';
import type { OrderProductInfo } from './OrderProductInfo';
import type { ShippingAddress } from './ShippingAddress';
import type { UserSnap } from './UserSnap';

export type Refund = {
    /**
     * 剩余处理时间
     */
    remainProcessTime?: number;
    /**
     * 退款编号
     */
    refundNum: string;
    /**
     * 退款商品
     */
    refundProducts: Array<OrderProductInfo>;
    /**
     * 申请退款金额
     */
    requestRefundAmount: number;
    /**
     * 实际退款金额
     */
    refundAmount: number;
    /**
     * 退款类型
     */
    refundType: Refund.refundType;
    /**
     * 退款解决方案
     */
    refundSolution: Refund.refundSolution;
    /**
     * 退款状态
     */
    refundStatus: Refund.refundStatus;
    /**
     * 货物状态
     */
    goodsStatus: Refund.goodsStatus;
    /**
     * 照片凭证
     */
    photoEvidences: Array<string>;
    /**
     * 注释
     */
    notes: Array<Note>;
    /**
     * 用户 ID
     */
    userId: string;
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
     * 订单创建时间
     */
    orderCreatedTime: number;
    /**
     * 快递费用
     */
    expressFee?: number;
    /**
     * 快递单号
     */
    expressNum?: string;
    /**
     * 快递公司编号
     */
    expressCompanyCode?: string;
    /**
     * 快递公司名称
     */
    expressCompanyName?: string;
    /**
     * 收货信息（快照）
     */
    shippingAddress: ShippingAddress;
    /**
     * 用户信息（快照）
     */
    userSnap: UserSnap;
    /**
     * paymentId
     */
    paymentId: string;
    /**
     * 退货快递单号
     */
    returnExpressNum?: string;
    /**
     * 退货快递公司编号
     */
    returnExpressCompanyCode?: string;
    /**
     * 退货快递公司名称
     */
    returnExpressCompanyName?: string;
    /**
     * 创建
     */
    createOperateInfo: OperateInfo;
    /**
     * 同意
     */
    agreeOperateInfo?: OperateInfo;
    /**
     * 拒绝
     */
    refuseOperateInfo?: OperateInfo;
    /**
     * 取消
     */
    closeOperateInfo?: OperateInfo;
    /**
     * 同意退货退款
     */
    agreeReturnAndRefundOperateInfo?: OperateInfo;
    /**
     * 提交退货快递单号
     */
    submitReturnExpressNumOperateInfo?: OperateInfo;
    /**
     * 租户 ID
     */
    tenantId: Refund.tenantId;
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 最近一次修改时间
     */
    updatedAt: number;
};

export namespace Refund {

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
        _70_CLOSED = '70-Closed',
    }

    /**
     * 货物状态
     */
    export enum goodsStatus {
        NOT_SHIPPED = 'NotShipped',
        SHIPPED = 'Shipped',
    }

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

