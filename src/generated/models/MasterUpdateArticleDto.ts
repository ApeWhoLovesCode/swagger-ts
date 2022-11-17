/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterUpdateArticleDto = {
    /**
     * 状态
     */
    status?: MasterUpdateArticleDto.status;
    /**
     * 标题
     */
    title?: string;
    /**
     * 封面
     */
    cover?: string;
    /**
     * 头图
     */
    headerImages?: Array<string>;
    /**
     * 内容
     */
    content?: string;
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

export namespace MasterUpdateArticleDto {

    /**
     * 状态
     */
    export enum status {
        DRAFT = 'draft',
        PUBLISHED = 'published',
    }


}

