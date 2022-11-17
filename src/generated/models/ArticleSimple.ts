/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ArticleSimple = {
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
    tenantId: ArticleSimple.tenantId;
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
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }

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

