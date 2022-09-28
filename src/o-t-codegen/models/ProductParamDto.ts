/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductParamValueDto } from './ProductParamValueDto';

export type ProductParamDto = {
    /**
     * 参数名
     */
    name: string;
    /**
     * 可选值
     */
    values: Array<ProductParamValueDto>;
};

