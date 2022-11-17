/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicProductSimpleVo = {
    /**
     * 主图
     */
    image: string;
    /**
     * 给前端展示的状态
     */
    statusForFront: PublicProductSimpleVo.statusForFront;
    /**
     * 所有 sku 图
     */
    skuImages?: Array<string>;
    /**
     * ID
     */
    _id: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 价格，单位：分
     */
    price: number;
};

export namespace PublicProductSimpleVo {

    /**
     * 给前端展示的状态
     */
    export enum statusForFront {
        ACTIVE = 'active',
        SOLD_OUT = 'soldOut',
    }


}

