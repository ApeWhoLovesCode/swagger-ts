/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OperateInfo = {
    /**
     * 操作时间
     */
    operateTime: number;
    /**
     * 操作者类型
     */
    operatorType: OperateInfo.operatorType;
    /**
     * 操作人员 ID, operatorType 为 System 时无 ID
     */
    operatorId?: string;
    /**
     * 操作原因
     */
    operateReason?: string;
};

export namespace OperateInfo {

    /**
     * 操作者类型
     */
    export enum operatorType {
        SYSTEM = 'System',
        USER = 'User',
        MASTER = 'Master',
    }


}

