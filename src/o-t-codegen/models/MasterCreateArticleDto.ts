/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterCreateArticleDto = {
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
     * 内容
     */
    content: string;
    /**
     * 分类
     */
    category: MasterCreateArticleDto.category;
    /**
     * 租户 ID
     */
    tenantId: MasterCreateArticleDto.tenantId;
    /**
     * 热度
     */
    heat?: number;
    /**
     * 标签
     */
    tags?: Array<string>;
    /**
     * 相关商品 ID
     */
    relatedProductIds?: Array<string>;
};

export namespace MasterCreateArticleDto {

    /**
     * 分类
     */
    export enum category {
        HOT = 'hot',
        NEW = 'new',
    }

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
    }


}

