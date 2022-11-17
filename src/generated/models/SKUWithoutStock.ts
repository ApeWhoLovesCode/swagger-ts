/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SKUParam } from './SKUParam';

export type SKUWithoutStock = {
    /**
     * ID
     */
    _id: string;
    /**
     * sku 编号（运营那边的）
     */
    skuNum?: string;
    /**
     * 价格，单位：分
     */
    price: number;
    /**
     * 参数
     */
    params: Array<SKUParam>;
    /**
     * sku 图
     */
    image?: string;
    /**
     * sku 销量
     */
    sales: number;
};

