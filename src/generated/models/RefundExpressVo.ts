/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KuaidiDataItem } from './KuaidiDataItem';

export type RefundExpressVo = {
    /**
     * 退货快递公司名称
     */
    expressCompanyName: string;
    /**
     * 售后编号
     */
    refundNum: string;
    /**
     * 退货快递单号
     */
    expressNum: string;
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
    state?: RefundExpressVo.state;
    /**
     * 快递投递时间线
     */
    expressProgress?: Array<KuaidiDataItem>;
};

export namespace RefundExpressVo {

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

