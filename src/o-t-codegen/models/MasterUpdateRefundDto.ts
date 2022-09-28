/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterUpdateRefundDto = {
    /**
     * 操作理由, 拒绝退款时必传
     */
    operateReason?: string;
    /**
     * 买家退货的快递单号，action 为 submitExpressNum 时填写
     */
    returnExpressNum?: string;
    /**
     * 买家退货的快递公司编号，action 为 submitExpressNum 时填写
     */
    returnExpressCompanyCode?: string;
    /**
     * 买家退货的快递公司名称，action 为 submitExpressNum 时填写
     */
    returnExpressCompanyName?: string;
    /**
     * 同意退款金额，action 为 aggree 时可填写
     */
    refundAmount?: number;
};

