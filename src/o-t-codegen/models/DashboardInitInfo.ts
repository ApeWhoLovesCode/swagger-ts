/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { Department } from './Department';
import type { Tenant } from './Tenant';

export type DashboardInitInfo = {
    tenants: Array<Tenant>;
    categories: Array<Category>;
    departments: Array<Department>;
};

