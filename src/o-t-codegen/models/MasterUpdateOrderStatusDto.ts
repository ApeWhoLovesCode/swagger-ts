/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MasterUpdateOrderStatusDto = {
    /**
     * 快递公司编号（当 status 为 40-Shipped 时必传）
     */
    expressCompanyCode?: MasterUpdateOrderStatusDto.expressCompanyCode;
    /**
     * 目标状态
     */
    status: MasterUpdateOrderStatusDto.status;
    /**
     * 快递单号（当 status 为 40-Shipped 时必传）
     */
    expressNum?: string;
    /**
     * 关闭订单原因 （当 status 为 70-Closed 时必传）
     */
    closeReason?: string;
};

export namespace MasterUpdateOrderStatusDto {

    /**
     * 快递公司编号（当 status 为 40-Shipped 时必传）
     */
    export enum expressCompanyCode {
        SHUNFENG = 'shunfeng',
        YUANTONG = 'yuantong',
        YUNDA = 'yunda',
        ZHONGTONG = 'zhongtong',
        SHENTONG = 'shentong',
        YOUZHENGGUONEI = 'youzhengguonei',
        YOUZHENGBK = 'youzhengbk',
        EMS = 'ems',
    }

    /**
     * 目标状态
     */
    export enum status {
        _00_AWAIT_CREATE_PAYMENT = '00-AwaitCreatePayment',
        _10_NOT_PAY = '10-NotPay',
        _20_PAID = '20-Paid',
        _30_AWAIT_SHIP = '30-AwaitShip',
        _40_SHIPPED = '40-Shipped',
        _50_COMPLETED = '50-Completed',
        _70_CLOSED = '70-Closed',
    }


}

