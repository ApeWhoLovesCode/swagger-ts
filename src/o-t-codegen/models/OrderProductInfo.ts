/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SKUWithoutStock } from './SKUWithoutStock';

export type OrderProductInfo = {
    /**
     * productId
     */
    _id: string;
    /**
     * skuId
     */
    skuId: string;
    /**
     * 商品标题
     */
    title: string;
    /**
     * 主图
     */
    image: string;
    /**
     * sku 信息
     */
    sku: SKUWithoutStock;
    /**
     * 数量
     */
    count: number;
    /**
     * sku.price * count
     */
    price: number;
};

