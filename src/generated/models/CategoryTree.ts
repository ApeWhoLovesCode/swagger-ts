/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CategoryTree = {
    /**
     * 子分类
     */
    childrenCategoryTrees?: Array<CategoryTree>;
    /**
     * 分类名称
     */
    categoryName: string;
    /**
     * 分类代号
     */
    categoryCode: string;
    /**
     * 父分类 ID，若无父分类则无此值
     */
    parentCategoryId?: string;
    /**
     * 租户 ID
     */
    tenantId: CategoryTree.tenantId;
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

export namespace CategoryTree {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

