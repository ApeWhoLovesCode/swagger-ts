/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductParam } from './ProductParam';

export type MasterListProductsItemVo = {
    /**
     * 主图
     */
    image: string;
    /**
     * sku 数量
     */
    skusCount: number;
    /**
     * 是否需要库存告警
     */
    needWarning: boolean;
    /**
     * 总库存
     */
    stock: number;
    /**
     * ID
     */
    _id: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 最近一次修改时间
     */
    updatedAt: number;
    /**
     * 租户 ID
     */
    tenantId: MasterListProductsItemVo.tenantId;
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
    categoryIds: Array<string>;
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
    status: MasterListProductsItemVo.status;
    /**
     * 是否为推荐商品
     */
    isRecommend: boolean;
    /**
     * spu 销量
     */
    sales: number;
};

export namespace MasterListProductsItemVo {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }

    /**
     * 状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

