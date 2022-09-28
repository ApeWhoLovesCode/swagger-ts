/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicCategoryVo } from './PublicCategoryVo';
import type { Tenant } from './Tenant';

export type InitialResourcesVo = {
    tenant: Tenant;
    categories: Array<PublicCategoryVo>;
};

