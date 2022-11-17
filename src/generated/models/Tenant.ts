/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Tenant = {
    tenantId: Tenant.tenantId;
    tenantIcon: string;
    tenantName: string;
    tenantStatus: Tenant.tenantStatus;
};

export namespace Tenant {

    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }

    export enum tenantStatus {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

