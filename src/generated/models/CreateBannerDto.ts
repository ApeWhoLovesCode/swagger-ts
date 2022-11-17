/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBannerDto = {
    /**
     * 租户 ID
     */
    tenantId: CreateBannerDto.tenantId;
    /**
     * 资源 ID
     */
    resourceId: string;
    /**
     * 开始时间
     */
    startTime?: number;
    /**
     * 结束时间
     */
    endTime?: number;
};

export namespace CreateBannerDto {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

