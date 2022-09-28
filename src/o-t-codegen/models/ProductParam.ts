/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductParamValue } from './ProductParamValue';

export type ProductParam = {
    /**
     * 参数名
     */
    name: string;
    /**
     * 参数可选值
     */
    values: Array<ProductParamValue>;
};

