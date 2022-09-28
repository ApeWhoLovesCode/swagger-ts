/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShoppingCartSKU } from './ShoppingCartSKU';

export type ShoppingCartVo = {
    /**
     * skuId
     */
    skuId: string;
    /**
     * 数量
     */
    count: number;
    /**
     * 标题
     */
    title: string;
    /**
     * 主图
     */
    image: string;
    /**
     * sku 信息
     */
    sku: ShoppingCartSKU;
    /**
     * 状态
     */
    status: ShoppingCartVo.status;
    /**
     * 商品 ID
     */
    productId: string;
};

export namespace ShoppingCartVo {

    /**
     * 状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

