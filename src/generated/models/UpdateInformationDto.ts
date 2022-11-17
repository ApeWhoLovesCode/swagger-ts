/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReturnAddress } from './ReturnAddress';

export type UpdateInformationDto = {
    /**
     * 退货地址
     */
    returnAddress?: ReturnAddress;
    /**
     * 退货原因
     */
    returnReasons?: Array<string>;
};

