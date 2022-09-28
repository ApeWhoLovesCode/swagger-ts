/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ArticleSimple = {
    /**
     * 标题
     */
    title: string;
    /**
     * 封面
     */
    cover: string;
    /**
     * 分类
     */
    category: ArticleSimple.category;
    /**
     * 状态
     */
    status: ArticleSimple.status;
    /**
     * PV
     */
    pageView: number;
    /**
     * 热度
     */
    heat: number;
    /**
     * 标签
     */
    tags?: Array<string>;
};

export namespace ArticleSimple {

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


}

