/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MasterCreateSKUDto } from './MasterCreateSKUDto';
import type { ProductParamDto } from './ProductParamDto';

export type MasterCreateProductDto = {
    /**
     * 商品图片
     */
    images: Array<string>;
    /**
     * 商品标题
     */
    title: string;
    /**
     * 商品描述
     */
    description: string;
    /**
     * 品牌 ID (租户 ID)
     */
    tenantId: MasterCreateProductDto.tenantId;
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
     * skus 信息
     */
    skus: Array<MasterCreateSKUDto>;
    /**
     * spu 参数表
     */
    params: Array<ProductParamDto>;
    /**
     * 标签
     */
    tags?: Array<string>;
    /**
     * 热度
     */
    heat?: number;
};

export namespace MasterCreateProductDto {

    /**
     * 品牌 ID (租户 ID)
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
    }


}

