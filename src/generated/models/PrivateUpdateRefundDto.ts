/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RefundSelectionDto } from './RefundSelectionDto';

export type PrivateUpdateRefundDto = {
    /**
     * 退款商品选择 (退货退款时必选)
     */
    refundSelections?: Array<RefundSelectionDto>;
    /**
     * 退款理由
     */
    refundReason?: string;
    /**
     * 凭证图片
     */
    photoEvidences?: Array<string>;
};

