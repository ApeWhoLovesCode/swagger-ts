/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { MasterAddRefundNoteDto } from '../models/MasterAddRefundNoteDto';
import type { MasterCreateRefundDto } from '../models/MasterCreateRefundDto';
import type { MasterUpdateRefundDto } from '../models/MasterUpdateRefundDto';
import type { MongoIdVo } from '../models/MongoIdVo';
import type { Note } from '../models/Note';
import type { PaginationVo } from '../models/PaginationVo';
import type { PrivateCreateRefundDto } from '../models/PrivateCreateRefundDto';
import type { PrivateRefundVo } from '../models/PrivateRefundVo';
import type { PrivateReturnExpressInfoDto } from '../models/PrivateReturnExpressInfoDto';
import type { PrivateUpdateRefundDto } from '../models/PrivateUpdateRefundDto';
import type { Refund } from '../models/Refund';
import type { RefundExpressVo } from '../models/RefundExpressVo';
import type { ReturnReasonsV2Vo } from '../models/ReturnReasonsV2Vo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RefundsService {

    /**
     * 发起售后申请
     * @param requestBody
     * @returns MongoIdVo
     * @throws ApiError
     */
    public static privateCreateRefund(
        requestBody: PrivateCreateRefundDto,
    ): CancelablePromise<MongoIdVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/refunds',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 售后列表
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @param refundSolution 退款解决方案
     * @param orderId 订单 ID
     * @param goodsStatus 发起退款时的货物状态
     * @returns any
     * @throws ApiError
     */
    public static privateListRefunds(
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
        refundSolution?: 'Refund' | 'RefundAndReturnGoods',
        orderId?: string,
        goodsStatus?: 'NotShipped' | 'Shipped',
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/refunds',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'refundSolution': refundSolution,
                'orderId': orderId,
                'goodsStatus': goodsStatus,
            },
        });
    }

    /**
     * 更新申请信息，仅状态为 10-Pending 前可调用
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static privateUpdateRefund(
        id: string,
        requestBody: PrivateUpdateRefundDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/private/refunds/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 取消售后申请，仅状态为 10-Pending 或 20-AwaitForBuyerShip 可调用
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static privateCloseRefundById(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/private/refunds/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 售后详情
     * @param id ID
     * @returns PrivateRefundVo
     * @throws ApiError
     */
    public static privateGetRefundById(
        id: string,
    ): CancelablePromise<PrivateRefundVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/refunds/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 提交退货信息
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static privateSubmitReturnExpressInfo(
        id: string,
        requestBody: PrivateReturnExpressInfoDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/refunds/{id}/returnExpressInfo',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 获取退货地址信息
     * @returns string
     * @throws ApiError
     */
    public static privateGetReturnAddress(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/refunds/-/returnAddress',
        });
    }

    /**
     * 退货原因列表
     * @returns string
     * @throws ApiError
     */
    public static privateListReturnReasons(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/refunds/-/returnReasons',
        });
    }

    /**
     * 退货退款和仅退款原因列表
     * @returns ReturnReasonsV2Vo
     * @throws ApiError
     */
    public static privateListReturnReasonsV2(): CancelablePromise<ReturnReasonsV2Vo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/private/refunds/-/returnReasons',
        });
    }

    /**
     * 退货快递详情
     * @param id ID
     * @returns RefundExpressVo
     * @throws ApiError
     */
    public static privateGetRefundExpressByOrderId(
        id: string,
    ): CancelablePromise<RefundExpressVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/refunds/{id}/express',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 发起售后申请
     * @param requestBody
     * @returns MongoIdVo
     * @throws ApiError
     */
    public static masterCreateRefund(
        requestBody: MasterCreateRefundDto,
    ): CancelablePromise<MongoIdVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/refunds',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 售后列表
     * @param sortBy 排序
     * @param tenantId 租户 ID
     * @param orderNum 订单编号
     * @param refundNum 退款编号
     * @param productTitle 商品名称（模糊）
     * @param expressNum 快递单号
     * @param startTime 申请时间（区间开始）, 和 endTime 需要成对出现
     * @param endTime 申请时间（区间终止）, 和 startTime 需要成对出现
     * @param refundType 退款类型
     * @param refundSolution 退款方式（解决方案）
     * @param refundStatus 退款状态
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListRefunds(
        sortBy?: string,
        tenantId?: 'sw' | 'sv' | '424',
        orderNum?: string,
        refundNum?: string,
        productTitle?: string,
        expressNum?: string,
        startTime?: number,
        endTime?: number,
        refundType?: 'NotCompleted' | 'Completed' | 'MasterRefund',
        refundSolution?: 'Refund' | 'RefundAndReturnGoods',
        refundStatus?: '10-Pending' | '20-AwaitForBuyerShip' | '30-AwaitForParcel' | '40-Refunding' | '50-RefundSuccess' | '60-RefundFail' | '70-Closed',
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/refunds',
            query: {
                'sortBy': sortBy,
                'tenantId': tenantId,
                'orderNum': orderNum,
                'refundNum': refundNum,
                'productTitle': productTitle,
                'expressNum': expressNum,
                'startTime': startTime,
                'endTime': endTime,
                'refundType': refundType,
                'refundSolution': refundSolution,
                'refundStatus': refundStatus,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 更新 refund
     * @param id ID
     * @param action
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static masterUpdateRefund(
        id: string,
        action: 'agree' | 'refuse' | 'agreeReturnAndRefund' | 'submitExpressNum' | 'initiatePaymentRefund',
        requestBody: MasterUpdateRefundDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/refunds/{id}',
            path: {
                'id': id,
            },
            query: {
                'action': action,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 售后详情
     * @param id ID
     * @returns Refund
     * @throws ApiError
     */
    public static masterGetRefundById(
        id: string,
    ): CancelablePromise<Refund> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/refunds/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 添加 note
     * @param id ID
     * @param requestBody
     * @returns Note
     * @throws ApiError
     */
    public static masterAddNoteToRefundById(
        id: string,
        requestBody: MasterAddRefundNoteDto,
    ): CancelablePromise<Array<Note>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/refunds/{id}/notes',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
