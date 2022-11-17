/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MasterUpdateSKUDto } from './MasterUpdateSKUDto';
import type { ProductParamDto } from './ProductParamDto';

export type MasterUpdateProductDto = {
    /**
     * skus 信息
     */
    skus?: Array<MasterUpdateSKUDto>;
    /**
     * 商品状态
     */
    status?: MasterUpdateProductDto.status;
    /**
     * 商品图片
     */
    images?: Array<string>;
    /**
     * 商品标题
     */
    title?: string;
    /**
     * 商品描述
     */
    description?: string;
    /**
     * 部门 ID
     */
    departmentId?: string;
    /**
     * 分类 ID
     */
    categoryIds?: Array<string>;
    /**
     * 价格，单位：分
     */
    price?: number;
    /**
     * spu 参数表
     */
    params?: Array<ProductParamDto>;
    /**
     * 标签
     */
    tags?: Array<string>;
    /**
     * 热度
     */
    heat?: number;
};

export namespace MasterUpdateProductDto {

    /**
     * 商品状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

