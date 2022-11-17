/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SKUParamDto } from './SKUParamDto';

export type MasterUpdateSKUDto = {
    /**
     * sku 编号
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
    params: Array<SKUParamDto>;
    /**
     * sku 图
     */
    image?: string;
    /**
     * skuId
     */
    _id?: string;
};

