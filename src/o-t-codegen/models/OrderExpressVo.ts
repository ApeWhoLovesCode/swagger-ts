/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KuaidiDataItem } from './KuaidiDataItem';
import type { OrderExpressProductsItem } from './OrderExpressProductsItem';

export type OrderExpressVo = {
    /**
     * order ID
     */
    orderId: string;
    /**
     * order 订单编号
     */
    orderNum: string;
    /**
     * 快递单号
     */
    expressNum: string;
    /**
     * 快递公司名称
     */
    expressCompanyName: string;
    /**
     * 商品信息
     */
    products: Array<OrderExpressProductsItem>;
    /**
     * 当前状态
     * 揽收: '1',
     * 在途: '0',
     * 派送: '5',
     * 签收: '3',
     * 退回: '6',
     * 退签: '4',
     * 转投: '7',
     * 疑难: '2',
     * 清关: '8',
     * 拒签: '14',
     */
    state?: OrderExpressVo.state;
    /**
     * 快递投递时间线
     */
    expressProgress?: Array<KuaidiDataItem>;
};

export namespace OrderExpressVo {

    /**
     * 当前状态
     * 揽收: '1',
     * 在途: '0',
     * 派送: '5',
     * 签收: '3',
     * 退回: '6',
     * 退签: '4',
     * 转投: '7',
     * 疑难: '2',
     * 清关: '8',
     * 拒签: '14',
     */
    export enum state {
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

