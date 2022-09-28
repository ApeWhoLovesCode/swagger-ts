/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrivateCreateShoppingCartDto = {
    /**
     * 要加入购物车的 sku Id
     */
    skuId: string;
    /**
     * 数量, 取值范围 1 - 20
     */
    count?: number;
};

