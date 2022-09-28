/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category = {
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
};

