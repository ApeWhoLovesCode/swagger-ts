/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReturnAddress } from './ReturnAddress';

export type Information = {
    /**
     * 退货地址
     */
    returnAddress?: ReturnAddress;
    /**
     * 退货原因
     */
    returnReasons?: Array<string>;
    /**
     * 退货退款原因 (api v2)
     */
    returnProductAndMoneyReason?: Array<string>;
    /**
     * 退款（但不退货）原因 (api v2)
     */
    returnMoneyReason?: Array<string>;
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

