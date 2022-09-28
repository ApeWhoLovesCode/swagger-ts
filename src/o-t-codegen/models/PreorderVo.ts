/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderProductInfo } from './OrderProductInfo';
import type { PreorderDto } from './PreorderDto';

export type PreorderVo = {
    /**
     * 商品信息
     */
    products: Array<OrderProductInfo>;
    /**
     * 快递费用
     */
    expressFee: number;
    /**
     * 商品总价
     */
    totalPrice: number;
    /**
     * 合计总价
     */
    amount: number;
    /**
     * 请求参数
     */
    requestBody: PreorderDto;
};

