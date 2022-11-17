/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductParam } from './ProductParam';
import type { PublicSKUVo } from './PublicSKUVo';

export type PublicProductVo = {
    /**
     * skus 信息
     */
    skus: Array<PublicSKUVo>;
    /**
     * 购物车数量
     */
    shoppingCartCount: number;
    /**
     * 给前端展示的状态
     */
    statusForFront: PublicProductVo.statusForFront;
    /**
     * ID
     */
    _id: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 价格，单位：分
     */
    price: number;
    /**
     * 图片
     */
    images: Array<string>;
    /**
     * 商品描述
     */
    description: string;
    /**
     * 参数
     */
    params: Array<ProductParam>;
    /**
     * 状态
     */
    status: PublicProductVo.status;
    /**
     * 分类 ID
     */
    categoryIds: Array<string>;
    /**
     * 是否为推荐商品
     */
    isRecommend: boolean;
};

export namespace PublicProductVo {

    /**
     * 给前端展示的状态
     */
    export enum statusForFront {
        ACTIVE = 'active',
        SOLD_OUT = 'soldOut',
    }

    /**
     * 状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

