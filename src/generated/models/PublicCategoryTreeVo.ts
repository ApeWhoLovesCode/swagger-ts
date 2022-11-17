/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicCategoryTreeVo = {
    /**
     * 子分类
     */
    childrenCategoryTrees?: Array<PublicCategoryTreeVo>;
    /**
     * ID
     */
    _id: string;
    /**
     * 分类代号
     */
    categoryCode: string;
    /**
     * 分类名称
     */
    categoryName: string;
};

