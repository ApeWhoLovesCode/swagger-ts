/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SKUParam } from './SKUParam';

export type SKU = {
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
     * 库存
     */
    stock: number;
    /**
     * 参数
     */
    params: Array<SKUParam>;
    /**
     * sku 图
     */
    image?: string;
};

