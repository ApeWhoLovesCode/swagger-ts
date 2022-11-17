/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicCategoryTreeVo } from './PublicCategoryTreeVo';
import type { Tenant } from './Tenant';

export type InitialResourcesVo = {
    tenant: Tenant;
    categories: Array<PublicCategoryTreeVo>;
};

