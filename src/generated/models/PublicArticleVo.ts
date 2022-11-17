/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicProductSimpleVo } from './PublicProductSimpleVo';

export type PublicArticleVo = {
    /**
     * 相关商品信息
     */
    relatedProducts: Array<PublicProductSimpleVo>;
    /**
     * 标题
     */
    title: string;
    /**
     * 封面
     */
    cover: string;
    /**
     * 头图
     */
    headerImages: Array<string>;
    /**
     * 文章内容
     */
    content: string;
    /**
     * 分类
     */
    category: PublicArticleVo.category;
    /**
     * 状态
     */
    status: PublicArticleVo.status;
    /**
     * PV
     */
    pageView: number;
    /**
     * 热度
     */
    heat: number;
    /**
     * 相关商品 ID
     */
    relatedProductIds: Array<string>;
    /**
     * 标签
     */
    tags?: Array<string>;
    /**
     * 租户 ID
     */
    tenantId: PublicArticleVo.tenantId;
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
};

export namespace PublicArticleVo {

    /**
     * 分类
     */
    export enum category {
        HOT = 'hot',
        NEW = 'new',
    }

    /**
     * 状态
     */
    export enum status {
        DRAFT = 'draft',
        PUBLISHED = 'published',
    }

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

