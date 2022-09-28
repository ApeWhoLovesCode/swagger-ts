/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateOrderProductInfoDto } from './CreateOrderProductInfoDto';

export type PreorderDto = {
    /**
     * 商品信息，当 shoppingCartIds 为空时必选
     */
    createOrderProductInfos?: Array<CreateOrderProductInfoDto>;
    /**
     * 购物车 IDs，当 createOrderProductInfos 为空时必选
     */
    shoppingCartIds?: Array<string>;
};

