/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorPaginationVo } from '../models/CursorPaginationVo';
import type { MasterCreateOrderNoteDto } from '../models/MasterCreateOrderNoteDto';
import type { MasterOrderVo } from '../models/MasterOrderVo';
import type { MasterUpdateOrderShippingAddressDto } from '../models/MasterUpdateOrderShippingAddressDto';
import type { MasterUpdateOrderStatusDto } from '../models/MasterUpdateOrderStatusDto';
import type { Order } from '../models/Order';
import type { OrderExpressVo } from '../models/OrderExpressVo';
import type { OrderTabCount } from '../models/OrderTabCount';
import type { PaginationVo } from '../models/PaginationVo';
import type { PreorderDto } from '../models/PreorderDto';
import type { PreorderVo } from '../models/PreorderVo';
import type { PrivateCreateOrderDto } from '../models/PrivateCreateOrderDto';
import type { PrivateCreateShippingAddressDto } from '../models/PrivateCreateShippingAddressDto';
import type { PrivateInitialPaymentVo } from '../models/PrivateInitialPaymentVo';
import type { PrivateOrderVo } from '../models/PrivateOrderVo';
import type { PrivateRefundVo } from '../models/PrivateRefundVo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrdersService {

    /**
     * 订单详情
     * @param id ID
     * @returns PrivateOrderVo
     * @throws ApiError
     */
    public static privateGetOrderById(
        id: string,
    ): CancelablePromise<PrivateOrderVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/orders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 取消订单
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static privateCancelOrder(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/private/orders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 快递详情
     * @param id ID
     * @returns OrderExpressVo
     * @throws ApiError
     */
    public static privateGetExpressByOrderId(
        id: string,
    ): CancelablePromise<OrderExpressVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/orders/{id}/express',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 订单列表
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @param type 订单列表 tab 类型, 不传则为全部订单
     * @returns any
     * @throws ApiError
     */
    public static privateListOrdersByCursor(
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
        type?: 'NotPay' | 'AwaitShip' | 'Shipped',
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/orders',
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
                'type': type,
            },
        });
    }

    /**
     * 提交订单
     * @param requestBody
     * @returns PrivateInitialPaymentVo
     * @throws ApiError
     */
    public static privateCreateOrder(
        requestBody: PrivateCreateOrderDto,
    ): CancelablePromise<PrivateInitialPaymentVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 订单预览
     * @param requestBody
     * @returns PreorderVo
     * @throws ApiError
     */
    public static privatePreorder(
        requestBody: PreorderDto,
    ): CancelablePromise<PreorderVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/orders/-/preorder',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 重新发起支付
     * @param id ID
     * @returns PrivateInitialPaymentVo
     * @throws ApiError
     */
    public static privateInitialPayment(
        id: string,
    ): CancelablePromise<PrivateInitialPaymentVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private/orders/{id}/payment',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 订单完成（确认收货）
     * @param id ID
     * @returns any
     * @throws ApiError
     */
    public static privateCompleteOrder(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/private/orders/{id}/completion',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 修改收货地址
     * @param id ID
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public static privateUpdateOrderShippingAddress(
        id: string,
        requestBody: PrivateCreateShippingAddressDto,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/private/orders/{id}/shippingAddress',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 订单列表 tab 计数
     * @returns OrderTabCount
     * @throws ApiError
     */
    public static privateGetTabCount(): CancelablePromise<OrderTabCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/orders/-/tabCount',
        });
    }

    /**
     * 订单当前售后详情, 调用前请确保 order.isPendingRefund 为 true
     * @param id ID
     * @returns PrivateRefundVo
     * @throws ApiError
     */
    public static privateGetCurrentRefund(
        id: string,
    ): CancelablePromise<PrivateRefundVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private/orders/{id}/refund',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 订单列表
     * @param sortBy 排序
     * @param q 单号, 收件人姓名, 用户微信名复合搜索, userId 存在时该字段不起效
     * @param userId userId 搜索
     * @param tenantId 租户 ID
     * @param status 订单状态
     * @param page 页码
     * @param perPage 每页数据条数
     * @returns any
     * @throws ApiError
     */
    public static masterListOrders(
        sortBy?: string,
        q?: string,
        userId?: string,
        tenantId?: 'sw' | 'sv' | '424',
        status?: '00-AwaitCreatePayment' | '10-NotPay' | '20-Paid' | '30-AwaitShip' | '40-Shipped' | '50-Completed' | '60-Archived' | '70-Closed',
        page?: number,
        perPage?: number,
    ): CancelablePromise<PaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/orders',
            query: {
                'sortBy': sortBy,
                'q': q,
                'userId': userId,
                'tenantId': tenantId,
                'status': status,
                'page': page,
                'perPage': perPage,
            },
        });
    }

    /**
     * 订单详情
     * @param id ID
     * @returns MasterOrderVo
     * @throws ApiError
     */
    public static masterGetOrderById(
        id: string,
    ): CancelablePromise<MasterOrderVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/orders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 订单时间线列表
     * @param id ID
     * @param limit 查询 n 条数据, 取值范围 1 - 50, 默认为 10
     * @param cursor 查询起点 ID（响应结果不含此 ID）
     * @param sortBy 排序
     * @returns any
     * @throws ApiError
     */
    public static masterGetOrderTimelineById(
        id: string,
        limit: number = 10,
        cursor?: string,
        sortBy?: string,
    ): CancelablePromise<CursorPaginationVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/orders/{id}/timeline',
            path: {
                'id': id,
            },
            query: {
                'limit': limit,
                'cursor': cursor,
                'sortBy': sortBy,
            },
        });
    }

    /**
     * 订单状态变更
     * @param id ID
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static masterUpdateOrderStatusById(
        id: string,
        requestBody: MasterUpdateOrderStatusDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/orders/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 修改订单收货地址, 仅当订单状态处于 ['00-AwaitCreatePayment', '10-NotPay', '20-Paid'] 时可调用
     * @param id ID
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public static masterUpdateOrderShippingAddress(
        id: string,
        requestBody: MasterUpdateOrderShippingAddressDto,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/master/orders/{id}/shippingAddress',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 添加注释
     * @param id ID
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public static masterAddOrderNote(
        id: string,
        requestBody: MasterCreateOrderNoteDto,
    ): CancelablePromise<Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/master/orders/{id}/notes',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
