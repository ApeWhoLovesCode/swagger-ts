/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductParam } from './ProductParam';
import type { SKU } from './SKU';

export type Product = {
    /**
     * 图片
     */
    images: Array<string>;
    /**
     * 标题
     */
    title: string;
    /**
     * 商品描述
     */
    description: string;
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 分类 ID
     */
    categoryId: string;
    /**
     * 价格，单位：分
     */
    price: number;
    /**
     * 参数
     */
    params: Array<ProductParam>;
    /**
     * 标签
     */
    tags: Array<string>;
    /**
     * 热度
     */
    heat: number;
    /**
     * 状态
     */
    status: Product.status;
    /**
     * skus 信息
     */
    skus: Array<SKU>;
    /**
     * 总库存
     */
    stock: number;
    /**
     * 是否为推荐商品
     */
    isRecommend: boolean;
};

export namespace Product {

    /**
     * 状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

