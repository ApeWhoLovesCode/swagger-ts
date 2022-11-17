/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShoppingCartSKU } from './ShoppingCartSKU';

export type ShoppingCartVo = {
  /**
   * skuId
   */
  skuId: string;
  /**
   * 数量
   */
  count: number;
  /**
   * 标题
   */
  title: string;
  /**
   * 主图
   */
  image: string;
  /**
   * sku 信息
   */
  sku: ShoppingCartSKU;
  /**
   * 状态（spu sku 是否下架或售罄或库存不足）
   */
  status: ShoppingCartVo.status;
  /**
   * 商品 ID
   */
  productId: string;
  /**
   * spu 库存
   */
  productStock: number;
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

export namespace ShoppingCartVo {

  /**
   * 状态（spu sku 是否下架或售罄或库存不足）
   */
  export enum status {
    ACTIVE = 'active',
    PRODUCT_INACTIVE = 'productInactive',
    PRODUCT_SOLD_OUT = 'productSoldOut',
    SKU_INACTIVE = 'skuInactive',
    SKU_SOLD_OUT = 'skuSoldOut',
    SKU_STOCK_INSUFFICIENT = 'skuStockInsufficient',
  }

}

