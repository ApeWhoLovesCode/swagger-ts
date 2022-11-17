/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Department = {
    /**
     * 部门名称
     */
    departmentName: string;
    /**
     * 部门代号
     */
    departmentCode: string;
    /**
     * 租户 ID
     */
    tenantId: Department.tenantId;
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

export namespace Department {

    /**
     * 租户 ID
     */
    export enum tenantId {
        SW = 'sw',
        SV = 'sv',
        _424 = '424',
    }


}

