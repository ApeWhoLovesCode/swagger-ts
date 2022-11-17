/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MasterArticleRelatedProductVo } from './MasterArticleRelatedProductVo';

export type MasterArticleVo = {
    /**
     * 相关商品信息
     */
    relatedProducts: Array<MasterArticleRelatedProductVo>;
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
    category: MasterArticleVo.category;
    /**
     * 状态
     */
    status: MasterArticleVo.status;
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
    tenantId: MasterArticleVo.tenantId;
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

export namespace MasterArticleVo {

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

