/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterUpdateTenantDto = {
    /**
     * 租户状态
     */
    tenantStatus?: MasterUpdateTenantDto.tenantStatus;
};

export namespace MasterUpdateTenantDto {

    /**
     * 租户状态
     */
    export enum tenantStatus {
        OPEN = 'open',
        CLOSED = 'closed',
    }


}

