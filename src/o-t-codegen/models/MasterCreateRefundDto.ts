/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RefundSelectionDto } from './RefundSelectionDto';

export type MasterCreateRefundDto = {
    /**
     * 订单 ID
     */
    orderId: string;
    /**
     * 退款商品选择 (退货退款时必选)
     */
    refundSelections?: Array<RefundSelectionDto>;
    /**
     * 退款金额, 若无则根据 refundSelections 进行计算
     */
    refundAmount?: number;
    /**
     * 退款理由
     */
    refundReason?: string;
    /**
     * 退款方案, 默认为仅退款
     */
    refundSolution?: MasterCreateRefundDto.refundSolution;
    /**
     * 凭证图片
     */
    photoEvidences?: Array<string>;
};

export namespace MasterCreateRefundDto {

    /**
     * 退款方案, 默认为仅退款
     */
    export enum refundSolution {
        REFUND = 'Refund',
        REFUND_AND_RETURN_GOODS = 'RefundAndReturnGoods',
    }


}

