/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterArticleRelatedProductVo = {
    /**
     * 商品 ID
     */
    _id: string;
    /**
     * 商品图片
     */
    image: string;
    /**
     * 商品标题
     */
    title: string;
    /**
     * 商品价格
     */
    price: number;
    /**
     * 商品状态
     */
    status: MasterArticleRelatedProductVo.status;
};

export namespace MasterArticleRelatedProductVo {

    /**
     * 商品状态
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }


}

