/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderTabCount = {
    /**
     * 全部计数
     */
    allCount: number;
    /**
     * 待付款计数
     */
    notPayCount: number;
    /**
     * 待发货计数
     */
    awaitShipCount: number;
    /**
     * 已发货计数（不包含已完成和已关闭）
     */
    shippedCount: number;
};

