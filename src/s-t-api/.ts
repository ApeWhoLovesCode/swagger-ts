/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MasterCreateArticleDto {
  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 头图 */
  headerImages: string[];

  /** 内容 */
  content: string;

  /** 分类 */
  category: "hot" | "new";

  /** 租户 ID */
  tenantId: "sw" | "sv";

  /**
   * 热度
   * @min 0
   */
  heat?: number;

  /** 标签 */
  tags?: string[];

  /** 相关商品 ID */
  relatedProductIds?: string[];
}

export interface MasterArticleRelatedProductVo {
  /** 商品 ID */
  _id: string;

  /** 商品图片 */
  image: string;

  /** 商品标题 */
  title: string;

  /** 商品价格 */
  price: number;

  /** 商品状态 */
  status: "active" | "inactive";
}

export interface MasterArticleVo {
  /** 相关商品信息 */
  relatedProducts: MasterArticleRelatedProductVo[];

  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 头图 */
  headerImages: string[];

  /** 文章内容 */
  content: string;

  /** 分类 */
  category: "hot" | "new";

  /** 状态 */
  status: "draft" | "published";

  /** PV */
  pageView: number;

  /** 热度 */
  heat: number;

  /** 相关商品 ID */
  relatedProductIds: string[];

  /** 标签 */
  tags?: string[];
}

export interface MasterUpdateArticleDto {
  /** 状态 */
  status?: "draft" | "published";

  /** 标题 */
  title?: string;

  /** 封面 */
  cover?: string;

  /** 头图 */
  headerImages?: string[];

  /** 内容 */
  content?: string;

  /**
   * 热度
   * @min 0
   */
  heat?: number;

  /** 标签 */
  tags?: string[];

  /** 相关商品 ID */
  relatedProductIds?: string[];
}

export interface MasterArticleListItemVo {
  /** 是否可删除或撤回 */
  canUnpublishOrDelete: boolean;

  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 分类 */
  category: "hot" | "new";

  /** 状态 */
  status: "draft" | "published";

  /** PV */
  pageView: number;

  /** 热度 */
  heat: number;

  /** 标签 */
  tags?: string[];
}

export interface SimpleCountVo {
  /** 数量 */
  count: number;
}

export interface PublicProductSimpleVo {
  /** 主图 */
  image: string;

  /** 给前端展示的状态 */
  statusForFront: "active" | "soldOut";

  /** 所有 sku 图 */
  skuImages?: string[];

  /** 标题 */
  title: string;

  /** 价格，单位：分 */
  price: number;
}

export interface PublicArticleVo {
  /** 相关商品信息 */
  relatedProducts: PublicProductSimpleVo[];

  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 头图 */
  headerImages: string[];

  /** 文章内容 */
  content: string;

  /** 分类 */
  category: "hot" | "new";

  /** 状态 */
  status: "draft" | "published";

  /** PV */
  pageView: number;

  /** 热度 */
  heat: number;

  /** 相关商品 ID */
  relatedProductIds: string[];

  /** 标签 */
  tags?: string[];
}

export interface ArticleSimple {
  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 分类 */
  category: "hot" | "new";

  /** 状态 */
  status: "draft" | "published";

  /** PV */
  pageView: number;

  /** 热度 */
  heat: number;

  /** 标签 */
  tags?: string[];
}

export interface AuthWechatMPLoginDto {
  /** wx.login code */
  code: string;

  /** 昵称 */
  nickName: string;

  /** 头像 URL */
  avatarUrl?: string;
}

export interface User {
  /** 头像 */
  avatarUrl: string;

  /** 数字 uid */
  uid: string;

  /** 昵称 */
  nickName: string;

  /** 是否为黑名单用户 */
  isBlack: boolean;
}

export interface AuthLoginVo {
  /** sessionToken */
  sessionToken?: string;

  /** userInfo */
  user?: User;
}

export interface CreateBannerDto {
  /** 租户 ID */
  tenantId: "sw" | "sv";

  /** 资源 ID */
  resourceId: string;

  /** 开始时间 */
  startTime?: number;

  /** 结束时间 */
  endTime?: number;
}

export interface Banner {
  /** 标题 */
  title: string;

  /** 封面 */
  cover: string;

  /** 开始展示时间 */
  startTime: number;

  /** 结束展示时间 */
  endTime: number;

  /** 位置 */
  index: number;

  /** 资源类型 */
  resourceType: "article";

  /** 资源 ID */
  resourceId: string;
}

export interface SortBannerDto {
  ids: string[];
}

export interface PublicCategoryVo {
  /** 分类代号 */
  categoryCode: string;

  /** 分类名称 */
  categoryName: string;
}

export interface ReturnAddress {
  /** 收件人 */
  consigneeName: string;

  /** 联系方式 */
  phoneNumber: string;

  /** 详细地址 */
  address: string;
}

export interface Information {
  /** 退货地址 */
  returnAddress?: ReturnAddress;

  /** 退货原因 */
  returnReasons?: string[];
}

export interface UpdateInformationDto {
  /** 退货地址 */
  returnAddress?: ReturnAddress;

  /** 退货原因 */
  returnReasons?: string[];
}

export interface Tenant {
  tenantId: "sw" | "sv";
  tenantIcon: string;
  tenantName: string;
  tenantStatus: "open" | "closed";
}

export interface InitialResourcesVo {
  tenant: Tenant;
  categories: PublicCategoryVo[];
}

export interface AutoRecognitionCompanyVo {
  /** 快递公司编号 */
  companyCode: string;

  /** 快递公司名称 */
  companyName: string;
}

export interface KuaidiDataItem {
  /** 内容 */
  context: string;

  /** 时间戳 */
  time: number;

  /** 状态 */
  status: string;
}

export interface MasterCreateLookBookDto {
  /** 租户 ID */
  tenantId: "sw" | "sv";

  /** 型录类型 */
  lookBookType: "image" | "video";

  /** 图片, lookBookType 为 image 时必传 */
  images?: string[];

  /** 视频, lookBookType 为 video 时必传 */
  video?: string;

  /** 标题 */
  title: string;

  /** 说明, lookBookType 为 image 时必传 */
  description?: string;

  /** 联名发布时间戳, lookBookType 为 image 时必传 */
  releaseTime?: number;

  /** 型录状态, 默认为 draft */
  lookBookStatus?: "draft" | "published";
}

export interface LookBookVideoItem {
  /** 视频地址 */
  url?: string;

  /** 转码状态 */
  state: "Submitted" | "Transcoding" | "TranscodeSuccess" | "TranscodeFail" | "TranscodeCancelled";
}

export interface LookBookVideo {
  /** 720p 视频地址 */
  hd: LookBookVideoItem;

  /** 原始视频地址 */
  raw: string;
}

export interface LookBook {
  /** 型录类型 */
  lookBookType: "image" | "video";

  /** 图片, lookBookType 为 image 时存在 */
  images?: string[];

  /** 视频, lookBookType 为 video 时存在 */
  video?: LookBookVideo;

  /** 标题 */
  title: string;

  /** 说明, lookBookType 为 image 时存在 */
  description?: string;

  /** 联名发布时间戳, lookBookType 为 image 时存在 */
  releaseTime?: number;

  /** 型录状态 */
  lookBookStatus: "draft" | "published";
}

export interface MasterUpdateLookBookDto {
  /** 租户 ID */
  tenantId?: "sw" | "sv";

  /** 图片, lookBookType 为 image 时必传 */
  images?: string[];

  /** 视频, lookBookType 为 video 时必传 */
  video?: string;

  /** 标题 */
  title?: string;

  /** 说明, lookBookType 为 image 时必传 */
  description?: string;

  /** 联名发布时间戳, lookBookType 为 image 时必传 */
  releaseTime?: number;

  /** 型录状态, 默认为 draft */
  lookBookStatus?: "draft" | "published";
}

export interface MasterLookBookListItemVo {
  /** 封面图或视频链接, 根据 lookBookType 判断 */
  cover: string;

  /** 型录类型 */
  lookBookType: "image" | "video";

  /** 标题 */
  title: string;

  /** 说明, lookBookType 为 image 时存在 */
  description?: string;

  /** 联名发布时间戳, lookBookType 为 image 时存在 */
  releaseTime?: number;

  /** 型录状态 */
  lookBookStatus: "draft" | "published";
}

export interface PublicLookBookListItemVo {
  /** 封面图或视频链接, 根据 lookBookType 判断 */
  cover: string;

  /** 标题 */
  title: string;

  /** 联名发布时间戳, lookBookType 为 image 时存在 */
  releaseTime?: number;
}

export interface PublicLookBookVo {
  /** 视频链接 */
  video?: string;

  /** 型录类型 */
  lookBookType: "image" | "video";

  /** 图片, lookBookType 为 image 时存在 */
  images?: string[];

  /** 标题 */
  title: string;

  /** 说明, lookBookType 为 image 时存在 */
  description?: string;

  /** 联名发布时间戳, lookBookType 为 image 时存在 */
  releaseTime?: number;
}

export interface MasterLoginDto {
  /** 邮箱 */
  email: string;

  /** 密码 */
  password: string;
}

export interface Master {
  /** email */
  email: string;

  /** 名称 */
  masterName: string;

  /** 头像 */
  avatar?: string;
}

export interface MasterLoginVo {
  /** sessionToken */
  sessionToken: string;

  /** master 用户信息 */
  master: Master;
}

export interface RegisterMasterDto {
  /** email */
  email: string;

  /** 密码 */
  password: string;

  /** 名称 */
  masterName: string;

  /** 头像（不含域名） */
  avatar?: string;
}

export interface UpdateMasterInfoDto {
  /** 新密码 */
  newPassword?: string;

  /** 旧密码 */
  oldPassword?: string;

  /** 名称 */
  masterName?: string;

  /** 头像（不含域名） */
  avatar?: string;
}

export interface Category {
  /** 分类名称 */
  categoryName: string;

  /** 分类代号 */
  categoryCode: string;

  /** 父分类 ID，若无父分类则无此值 */
  parentCategoryId?: string;
}

export interface Department {
  /** 部门名称 */
  departmentName: string;

  /** 部门代号 */
  departmentCode: string;
}

export interface DashboardInitInfo {
  tenants: Tenant[];
  categories: Category[];
  departments: Department[];
}

export interface SKUParam {
  /** 参数名 */
  name: string;

  /** 参数值 */
  value: string;
}

export interface SKUWithoutStock {
  /** ID */
  _id: string;

  /** sku 编号（运营那边的） */
  skuNum?: string;

  /** 价格，单位：分 */
  price: number;

  /** 参数 */
  params: SKUParam[];

  /** sku 图 */
  image?: string;
}

export interface OrderProductInfo {
  /** productId */
  _id: string;

  /** skuId */
  skuId: string;

  /** 商品标题 */
  title: string;

  /** 主图 */
  image: string;

  /** sku 信息 */
  sku: SKUWithoutStock;

  /** 数量 */
  count: number;

  /** sku.price * count */
  price: number;
}

export interface PrivateOrderOperateInfoVo {
  /** 操作时间 */
  operateTime: number;
}

export interface ShippingAddress {
  /** 用户 ID */
  userId: string;

  /** 收货人姓名 */
  consigneeName: string;

  /** 手机号 */
  phoneNumber: string;

  /** 邮编 */
  postalCode: string;

  /** 国标收货地址第一级地址 */
  provinceName: string;

  /** 国标收货地址第二级地址 */
  cityName: string;

  /** 国标收货地址第三级地址 */
  countyName: string;

  /** 国标收货地址第四级地址 */
  streetName?: string;

  /** 详细收货地址信息（不含街道） */
  detailInfo: string;

  /** 收货地址国家码 */
  nationalCode: string;

  /** 是否为默认地址 */
  isDefault: boolean;
}

export interface UserSnap {
  /** 头像 */
  avatarUrl: string;

  /** 数字 uid */
  uid: string;

  /** 昵称 */
  nickName: string;

  /** 是否为黑名单用户 */
  isBlack: boolean;
}

export interface PrivateOrderVo {
  /** 是否可退款 */
  canRefund: boolean;

  /** 已退款商品列表 */
  refundedProducts: OrderProductInfo[];

  /** 退款中商品列表 */
  refundingProducts: OrderProductInfo[];
  confirmOperateInfo?: PrivateOrderOperateInfoVo;
  shipOperateInfo?: PrivateOrderOperateInfoVo;
  completeOperateInfo?: PrivateOrderOperateInfoVo;
  closeOperateInfo?: PrivateOrderOperateInfoVo;

  /** 订单号 */
  orderNum: string;

  /** 用户 ID */
  userId: string;

  /** 实际付款 */
  amount: number;

  /** 商品总价 */
  totalPrice: number;

  /** （原始）实际付款 */
  originalAmount?: number;

  /** （原始）商品总价 */
  originalTotalPrice?: number;

  /** 快递费 */
  expressFee: number;

  /** 状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 是否在售后 */
  isPendingRefund?: boolean;

  /** 商品列表 */
  products: OrderProductInfo[];

  /** 收货信息 */
  shippingAddress: ShippingAddress;

  /** 用户信息（快照） */
  userSnap: UserSnap;

  /** 发起支付时间 */
  createPaymentTime?: number;

  /** 支付成功时间 */
  paySuccessTime?: number;

  /** 快递公司名称 */
  expressCompanyName?: string;

  /** 快递公司编号 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNum?: string;

  /** 快递状态 */
  expressState?: "1" | "0" | "5" | "3" | "6" | "4" | "7" | "2" | "8" | "14";

  /** 微信小程序物流查询 ID */
  waybillToken?: string;
}

export interface OrderExpressProductsItem {
  /** 商品 ID */
  productId: string;

  /** 商品主图 */
  image: string;

  /** 商品名称 */
  title: string;

  /** 商品描述 */
  desc: string;

  /** 商品个数 */
  count: number;
}

export interface OrderExpressVo {
  /** order ID */
  orderId: string;

  /** order 订单编号 */
  orderNum: string;

  /** 快递单号 */
  expressNum: string;

  /** 快递公司名称 */
  expressCompanyName: string;

  /** 商品信息 */
  products: OrderExpressProductsItem[];

  /**
   * 当前状态
   * 揽收: '1',
   * 在途: '0',
   * 派送: '5',
   * 签收: '3',
   * 退回: '6',
   * 退签: '4',
   * 转投: '7',
   * 疑难: '2',
   * 清关: '8',
   * 拒签: '14',
   */
  state?: "1" | "0" | "5" | "3" | "6" | "4" | "7" | "2" | "8" | "14";

  /** 快递投递时间线 */
  expressProgress?: KuaidiDataItem[];
}

export interface OperateInfo {
  /** 操作时间 */
  operateTime: number;

  /** 操作者类型 */
  operatorType: "System" | "User" | "Master";

  /** 操作人员 ID, operatorType 为 System 时无 ID */
  operatorId?: string;

  /** 操作原因 */
  operateReason?: string;
}

export interface PrivateOrderListItemVo {
  /** 是否可退款 */
  canRefund: boolean;

  /** 已退款商品列表 */
  refundedProducts: OrderProductInfo[];

  /** 完成时间 */
  completeOperateInfo?: OperateInfo;

  /** 实际付款 */
  amount: number;

  /** 状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 微信小程序物流查询 ID */
  waybillToken?: string;

  /** 商品列表 */
  products: OrderProductInfo[];

  /** 订单号 */
  orderNum: string;

  /** 是否在售后 */
  isPendingRefund?: boolean;
}

export interface CreateOrderProductInfoDto {
  /** skuId */
  skuId: string;

  /**
   * 数量, 取值范围 1 - 20
   * @min 1
   * @max 20
   */
  count: number;
}

export interface PreorderDto {
  /** 商品信息，当 shoppingCartIds 为空时必选 */
  createOrderProductInfos?: CreateOrderProductInfoDto[];

  /** 购物车 IDs，当 createOrderProductInfos 为空时必选 */
  shoppingCartIds?: string[];
}

export interface PreorderVo {
  /** 商品信息 */
  products: OrderProductInfo[];

  /** 快递费用 */
  expressFee: number;

  /** 商品总价 */
  totalPrice: number;

  /** 合计总价 */
  amount: number;

  /** 请求参数 */
  requestBody: PreorderDto;
}

export interface PrivateCreateOrderDto {
  /** 商品信息，当 shoppingCartIds 为空时必选 */
  createOrderProductInfos?: CreateOrderProductInfoDto[];

  /** 购物车 IDs，当 createOrderProductInfos 为空时必选 */
  shoppingCartIds?: string[];

  /** 配送地址 ID */
  shippingAddressId: string;
}

export interface PrivateInitialPaymentVo {
  timestamp: number;
  nonceStr: string;
  prepayId: string;
  signType: string;
  paySign: string;

  /** 订单信息 */
  order: PrivateOrderVo;
}

export interface PrivateCreateShippingAddressDto {
  /** 收件人姓名 */
  consigneeName: string;

  /** 手机号 */
  phoneNumber: string;

  /** 邮编 */
  postalCode: string;

  /** 国标收货地址第一级地址, 省 */
  provinceName: string;

  /** 国标收货地址第二级地址, 市 */
  cityName: string;

  /** 国标收货地址第三级地址, 区 */
  countyName: string;

  /** 国标收货地址第四级地址, 街道 */
  streetName?: string;

  /** 详细收货地址信息（不含街道） */
  detailInfo: string;

  /** 收货地址国家码 */
  nationalCode: string;

  /** 是否为默认地址 */
  isDefault?: boolean;
}

export interface MasterSnap {
  /** email */
  email: string;

  /** 名称 */
  masterName: string;

  /** 头像 */
  avatar?: string;
}

export interface Note {
  /** 内容 */
  content: string;

  /** 管理员信息 */
  masterSnap: MasterSnap;

  /** 创建时间 */
  createdAt: number;
}

export interface Order {
  /** 订单号 */
  orderNum: string;

  /** 用户 ID */
  userId: string;

  /** 实际付款 */
  amount: number;

  /** 商品总价 */
  totalPrice: number;

  /** （原始）实际付款 */
  originalAmount?: number;

  /** （原始）商品总价 */
  originalTotalPrice?: number;

  /** 快递费 */
  expressFee: number;

  /** tags */
  tags: string[];

  /** 注释 */
  notes: Note[];

  /** 状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 是否在售后 */
  isPendingRefund?: boolean;

  /** 商品列表 */
  products: OrderProductInfo[];

  /** （退款中）商品列表 */
  refundingProducts: OrderProductInfo[];

  /** （原始）商品列表 */
  originalProducts: OrderProductInfo[];

  /** 收货信息 */
  shippingAddress: ShippingAddress;

  /** 用户信息（快照） */
  userSnap: UserSnap;

  /** paymentId */
  paymentId?: string;

  /** 发起支付时间 */
  createPaymentTime?: number;

  /** 支付成功时间 */
  paySuccessTime?: number;

  /** 确认订单 */
  confirmOperateInfo?: OperateInfo;

  /** 快递公司名称 */
  expressCompanyName?: string;

  /** 快递公司编号 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNum?: string;

  /** 快递状态 */
  expressState?: "1" | "0" | "5" | "3" | "6" | "4" | "7" | "2" | "8" | "14";

  /** 发货 */
  shipOperateInfo?: OperateInfo;

  /** 微信小程序物流查询 ID */
  waybillToken?: string;

  /** 完成时间 */
  completeOperateInfo?: OperateInfo;

  /** 订单关闭时间 */
  closeOperateInfo?: OperateInfo;
}

export interface OrderTabCount {
  /** 全部计数 */
  allCount: number;

  /** 待付款计数 */
  notPayCount: number;

  /** 待发货计数 */
  awaitShipCount: number;

  /** 已发货计数（不包含已完成和已关闭） */
  shippedCount: number;
}

export interface PrivateRefundVo {
  /** 剩余处理时间 */
  remainProcessTime?: number;

  /** 退款编号 */
  refundNum: string;

  /** 退款商品 */
  refundProducts: OrderProductInfo[];

  /** 申请退款金额 */
  requestRefundAmount: number;

  /** 实际退款金额 */
  refundAmount: number;

  /** 退款类型 */
  refundType: "NotCompleted" | "Completed" | "MasterRefund";

  /** 退款解决方案 */
  refundSolution: "Refund" | "RefundAndReturnGoods";

  /** 退款状态 */
  refundStatus:
    | "10-Pending"
    | "20-AwaitForBuyerShip"
    | "30-AwaitForParcel"
    | "40-Refunding"
    | "50-RefundSuccess"
    | "60-RefundFail";

  /** 货物状态 */
  goodsStatus: "NotShipped" | "Shipped";

  /** 照片凭证 */
  photoEvidences: string[];

  /** 订单 ID */
  orderId: string;

  /** 订单编号 */
  orderNum: string;

  /** 订单实付金额 */
  orderAmount: number;

  /** 快递费用 */
  expressFee?: number;

  /** 快递单号 */
  expressNum?: string;

  /** 快递公司编号 */
  expressCompanyCode?: string;

  /** 快递公司名称 */
  expressCompanyName?: string;

  /** 收货信息（快照） */
  shippingAddress: ShippingAddress;

  /** 退货快递单号 */
  returnExpressNum?: string;

  /** 退货快递公司编号 */
  returnExpressCompanyCode?: string;

  /** 退货快递公司名称 */
  returnExpressCompanyName?: string;

  /** 创建 */
  createOperateInfo: OperateInfo;

  /** 拒绝 */
  refuseOperateInfo?: OperateInfo;
}

export interface MasterOrderListItemVo {
  /** 付款剩余时间（毫秒） */
  waitingTimeForPayment: number | null;

  /** 实际付款 */
  amount: number;

  /** 收货信息 */
  shippingAddress: ShippingAddress;

  /** 用户信息（快照） */
  userSnap: UserSnap;

  /** 商品列表 */
  products: OrderProductInfo[];

  /** 快递单号 */
  expressNum?: string;

  /** 状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 订单号 */
  orderNum: string;

  /** 发起支付时间 */
  createPaymentTime?: number;
}

export interface ExpressCompany {
  /** 快递公司名称 */
  companyName: string;

  /** 快递公司编号 */
  companyCode: string;
}

export interface MasterOrderVo {
  /** 订单号 */
  orderNum: string;

  /** 用户 ID */
  userId: string;

  /** 实际付款 */
  amount: number;

  /** 商品总价 */
  totalPrice: number;

  /** （原始）实际付款 */
  originalAmount?: number;

  /** （原始）商品总价 */
  originalTotalPrice?: number;

  /** 快递费 */
  expressFee: number;

  /** tags */
  tags: string[];

  /** 注释 */
  notes: Note[];

  /** 状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 是否在售后 */
  isPendingRefund?: boolean;

  /** 商品列表 */
  products: OrderProductInfo[];

  /** （退款中）商品列表 */
  refundingProducts: OrderProductInfo[];

  /** （原始）商品列表 */
  originalProducts: OrderProductInfo[];

  /** 收货信息 */
  shippingAddress: ShippingAddress;

  /** 用户信息（快照） */
  userSnap: UserSnap;

  /** paymentId */
  paymentId?: string;

  /** 发起支付时间 */
  createPaymentTime?: number;

  /** 支付成功时间 */
  paySuccessTime?: number;

  /** 确认订单 */
  confirmOperateInfo?: OperateInfo;

  /** 快递公司名称 */
  expressCompanyName?: string;

  /** 快递公司编号 */
  expressCompanyCode?: string;

  /** 快递单号 */
  expressNum?: string;

  /** 快递状态 */
  expressState?: "1" | "0" | "5" | "3" | "6" | "4" | "7" | "2" | "8" | "14";

  /** 发货 */
  shipOperateInfo?: OperateInfo;

  /** 微信小程序物流查询 ID */
  waybillToken?: string;

  /** 完成时间 */
  completeOperateInfo?: OperateInfo;

  /** 订单关闭时间 */
  closeOperateInfo?: OperateInfo;

  /** 是否可退款 */
  canRefund: boolean;

  /** 已退款商品列表 */
  refundedProducts: OrderProductInfo[];

  /** 快递公司列表 */
  expressCompanies: ExpressCompany[];
}

export interface TimelineItemContent {
  /** 内容 */
  content: string;

  /** 类型 */
  type: "Text";
}

export interface TimelineItem {
  /** 内容 */
  contents: TimelineItemContent[];
}

export interface MasterUpdateOrderStatusDto {
  /** 快递公司编号（当 status 为 40-Shipped 时必传） */
  expressCompanyCode?:
    | "shunfeng"
    | "yuantong"
    | "yunda"
    | "zhongtong"
    | "shentong"
    | "youzhengguonei"
    | "youzhengbk"
    | "ems";

  /** 目标状态 */
  status:
    | "00-AwaitCreatePayment"
    | "10-NotPay"
    | "20-Paid"
    | "30-AwaitShip"
    | "40-Shipped"
    | "50-Completed"
    | "70-Closed";

  /** 快递单号（当 status 为 40-Shipped 时必传） */
  expressNum?: string;

  /** 关闭订单原因 （当 status 为 70-Closed 时必传） */
  closeReason?: string;
}

export interface MasterUpdateOrderShippingAddressDto {
  /** 收件人姓名 */
  consigneeName?: string;

  /** 手机号 */
  phoneNumber?: string;

  /** 邮编 */
  postalCode?: string;

  /** 国标收货地址第一级地址, 省 */
  provinceName?: string;

  /** 国标收货地址第二级地址, 市 */
  cityName?: string;

  /** 国标收货地址第三级地址, 区 */
  countyName?: string;

  /** 国标收货地址第四级地址, 街道 */
  streetName?: string;

  /** 详细收货地址信息（不含街道） */
  detailInfo?: string;

  /** 收货地址国家码 */
  nationalCode?: string;
}

export interface MasterCreateOrderNoteDto {
  /** 内容 */
  content: string;
}

export interface FilesUploadDto {
  files: File[];
}

export interface UploadFileVo {
  /** 文件原名 */
  originalName: string;

  /** 文件 url */
  url: string;

  /** 文件名 */
  name: string;
}

export interface GetSignatureVo {
  /** 文件名 */
  keys: string[];

  /** bucket 域名 */
  bucketDomain: string;
  policy: string;
  OSSAccessKeyId: string;
  Signature: string;
}

export interface InitiateMultipartUploadDto {
  /** 上传类型 */
  fileType: "img" | "vid" | "txt" | "oth";

  /** 文件后缀 */
  ext: string;

  /**
   * 切分数量
   * @min 1
   * @max 10000
   */
  partCount: number;
}

export interface InitiateMultipartUploadVo {
  /** 文件名 */
  name: string;

  /** 上传任务 ID */
  uploadId: string;

  /** 分片上传需要使用的 URL, 长度等于传入的 partCount, 一个 URL 对应一个 part, 按顺序 */
  urls: string;
}

export interface GetMultipartUploadSignatureUrlsDto {
  /** uploadId */
  uploadId: string;

  /** 需要签的块编号 */
  partNumbers: number[];
}

export interface MultipartUploadPart {
  /** 编号 */
  number: number;

  /** etag */
  etag: string;
}

export interface CompleteMultipartUploadDto {
  /** 文件名 */
  name: string;

  /** 上传 ID */
  uploadId: string;

  /** 分片信息 */
  parts: MultipartUploadPart[];
}

export interface CompleteMultipartUploadVo {
  /** 文件名 */
  name: string;

  /** 文件 URL */
  url: string;
}

export interface WechatpayNotifyResourceDto {
  original_type: "transaction" | "refund";
  ciphertext: string;
  associated_data: string;
  nonce: string;
}

export interface WechatpayTransactionSuccessNotifyDto {
  event_type: string;
  resource: WechatpayNotifyResourceDto;
}

export interface WechatpayRefundSuccessNotifyDto {
  event_type: string;
  resource: WechatpayNotifyResourceDto;
}

export interface ProductParamValue {
  /** 文本 (为和 sku param 的 value 保持同名) */
  value: string;

  /** 图片 */
  image?: string;
}

export interface ProductParam {
  /** 参数名 */
  name: string;

  /** 参数可选值 */
  values: ProductParamValue[];
}

export interface MasterListProductsItemVo {
  /** 主图 */
  image: string;

  /** sku 数量 */
  skusCount: number;

  /** 是否需要库存告警 */
  needWarning: boolean;

  /** 总库存 */
  stock: number;

  /** 标题 */
  title: string;

  /** 商品描述 */
  description: string;

  /** 部门 ID */
  departmentId: string;

  /** 分类 ID */
  categoryId: string;

  /** 价格，单位：分 */
  price: number;

  /** 参数 */
  params: ProductParam[];

  /** 标签 */
  tags: string[];

  /** 热度 */
  heat: number;

  /** 状态 */
  status: "active" | "inactive";

  /** 是否为推荐商品 */
  isRecommend: boolean;
}

export interface SKU {
  /** ID */
  _id: string;

  /** sku 编号（运营那边的） */
  skuNum?: string;

  /** 价格，单位：分 */
  price: number;

  /** 库存 */
  stock: number;

  /** 参数 */
  params: SKUParam[];

  /** sku 图 */
  image?: string;
}

export interface Product {
  /** 图片 */
  images: string[];

  /** 标题 */
  title: string;

  /** 商品描述 */
  description: string;

  /** 部门 ID */
  departmentId: string;

  /** 分类 ID */
  categoryId: string;

  /** 价格，单位：分 */
  price: number;

  /** 参数 */
  params: ProductParam[];

  /** 标签 */
  tags: string[];

  /** 热度 */
  heat: number;

  /** 状态 */
  status: "active" | "inactive";

  /** skus 信息 */
  skus: SKU[];

  /** 总库存 */
  stock: number;

  /** 是否为推荐商品 */
  isRecommend: boolean;
}

export interface SKUParamDto {
  /** 参数名 */
  name: string;

  /** 参数 */
  value: string;
}

export interface MasterCreateSKUDto {
  /** sku 编号 */
  skuNum?: string;

  /**
   * 价格，单位：分
   * @min 1
   */
  price: number;

  /**
   * 库存
   * @min 0
   */
  stock: number;

  /** 参数 */
  params: SKUParamDto[];

  /** sku 图 */
  image?: string;
}

export interface ProductParamValueDto {
  /** 文本 */
  value: string;

  /** 图片 */
  image?: string;
}

export interface ProductParamDto {
  /** 参数名 */
  name: string;

  /** 可选值 */
  values: ProductParamValueDto[];
}

export interface MasterCreateProductDto {
  /** 商品图片 */
  images: string[];

  /** 商品标题 */
  title: string;

  /** 商品描述 */
  description: string;

  /** 品牌 ID (租户 ID) */
  tenantId: "sw" | "sv";

  /** 部门 ID */
  departmentId: string;

  /** 分类 ID */
  categoryId: string;

  /**
   * 价格，单位：分
   * @min 1
   */
  price: number;

  /** skus 信息 */
  skus: MasterCreateSKUDto[];

  /** spu 参数表 */
  params: ProductParamDto[];

  /** 标签 */
  tags?: string[];

  /**
   * 热度
   * @min 0
   */
  heat?: number;
}

export interface MasterUpdateSKUDto {
  /** sku 编号 */
  skuNum?: string;

  /**
   * 价格，单位：分
   * @min 1
   */
  price: number;

  /**
   * 库存
   * @min 0
   */
  stock: number;

  /** 参数 */
  params: SKUParamDto[];

  /** sku 图 */
  image?: string;

  /** skuId */
  _id?: string;
}

export interface MasterUpdateProductDto {
  /** skus 信息 */
  skus?: MasterUpdateSKUDto[];

  /** 商品状态 */
  status?: "active" | "inactive";

  /** 商品图片 */
  images?: string[];

  /** 商品标题 */
  title?: string;

  /** 商品描述 */
  description?: string;

  /** 部门 ID */
  departmentId?: string;

  /** 分类 ID */
  categoryId?: string;

  /**
   * 价格，单位：分
   * @min 1
   */
  price?: number;

  /** spu 参数表 */
  params?: ProductParamDto[];

  /** 标签 */
  tags?: string[];

  /**
   * 热度
   * @min 0
   */
  heat?: number;
}

export interface AddRecommendProductsDto {
  /** 商品 IDs */
  productIds: string[];
}

export interface PublicSKUVo {
  /** ID */
  _id: string;

  /** 价格，单位：分 */
  price: number;

  /** 库存 */
  stock: number;

  /** 参数 */
  params: SKUParam[];

  /** sku 图 */
  image?: string;
}

export interface PublicProductVo {
  /** skus 信息 */
  skus: PublicSKUVo[];

  /** 购物车数量 */
  shoppingCartCount: number;

  /** 给前端展示的状态 */
  statusForFront: "active" | "soldOut";

  /** 标题 */
  title: string;

  /** 价格，单位：分 */
  price: number;

  /** 图片 */
  images: string[];

  /** 商品描述 */
  description: string;

  /** 参数 */
  params: ProductParam[];

  /** 状态 */
  status: "active" | "inactive";

  /** 分类 ID */
  categoryId: string;

  /** 是否为推荐商品 */
  isRecommend: boolean;
}

export interface RefundSelectionDto {
  /** skuId */
  skuId: string;

  /**
   * 数量
   * @min 1
   */
  count: number;
}

export interface PrivateCreateRefundDto {
  /** 订单 ID */
  orderId: string;

  /** 退款商品选择 (退货退款时必选) */
  refundSelections?: RefundSelectionDto[];

  /** 退款理由 */
  refundReason?: string;

  /** 退款方案, 默认为仅退款 */
  refundSolution?: "Refund" | "RefundAndReturnGoods";

  /** 凭证图片 */
  photoEvidences?: string[];
}

export interface MongoIdVo {
  _id: string;
}

export interface PrivateUpdateRefundDto {
  /** 退款商品选择 (退货退款时必选) */
  refundSelections?: RefundSelectionDto[];

  /** 退款理由 */
  refundReason?: string;

  /** 凭证图片 */
  photoEvidences?: string[];
}

export interface PrivateRefundListItemVo {
  /** 商品图片 */
  productImage?: string;

  /** 商品标题 */
  productTitle?: string;

  /** 处理截止时间 */
  processDeadline?: number;

  /** 退款商品 */
  refundProducts: OrderProductInfo[];

  /** 退款编号 */
  refundNum: string;

  /** 订单 ID */
  orderId: string;

  /** 订单编号 */
  orderNum: string;

  /** 订单实付金额 */
  orderAmount: number;

  /** 实际退款金额 */
  refundAmount: number;

  /** 退款类型 */
  refundType: "NotCompleted" | "Completed" | "MasterRefund";

  /** 退款解决方案 */
  refundSolution: "Refund" | "RefundAndReturnGoods";

  /** 退款状态 */
  refundStatus:
    | "10-Pending"
    | "20-AwaitForBuyerShip"
    | "30-AwaitForParcel"
    | "40-Refunding"
    | "50-RefundSuccess"
    | "60-RefundFail";

  /** 货物状态 */
  goodsStatus: "NotShipped" | "Shipped";
}

export interface PrivateReturnExpressInfoDto {
  /** 快递单号 */
  expressNum: string;

  /** 快递公司编号 */
  expressCompanyCode: string;

  /** 快递公司名称 */
  expressCompanyName: string;
}

export interface MasterCreateRefundDto {
  /** 订单 ID */
  orderId: string;

  /** 退款商品选择 (退货退款时必选) */
  refundSelections?: RefundSelectionDto[];

  /** 退款金额, 若无则根据 refundSelections 进行计算 */
  refundAmount?: number;

  /** 退款理由 */
  refundReason?: string;

  /** 退款方案, 默认为仅退款 */
  refundSolution?: "Refund" | "RefundAndReturnGoods";

  /** 凭证图片 */
  photoEvidences?: string[];
}

export interface MasterUpdateRefundDto {
  /** 操作理由, 拒绝退款时必传 */
  operateReason?: string;

  /** 买家退货的快递单号，action 为 submitExpressNum 时填写 */
  returnExpressNum?: string;

  /** 买家退货的快递公司编号，action 为 submitExpressNum 时填写 */
  returnExpressCompanyCode?: string;

  /** 买家退货的快递公司名称，action 为 submitExpressNum 时填写 */
  returnExpressCompanyName?: string;

  /** 同意退款金额，action 为 aggree 时可填写 */
  refundAmount?: number;
}

export interface MasterRefundListItemVo {
  /** 商品图片 */
  productImage?: string;

  /** 商品标题 */
  productTitle?: string;

  /** 处理截止时间 */
  processDeadline?: number;

  /** 退款商品 */
  refundProducts: OrderProductInfo[];

  /** 退款编号 */
  refundNum: string;

  /** 订单 ID */
  orderId: string;

  /** 订单编号 */
  orderNum: string;

  /** 订单实付金额 */
  orderAmount: number;

  /** 实际退款金额 */
  refundAmount: number;

  /** 退款类型 */
  refundType: "NotCompleted" | "Completed" | "MasterRefund";

  /** 退款解决方案 */
  refundSolution: "Refund" | "RefundAndReturnGoods";

  /** 退款状态 */
  refundStatus:
    | "10-Pending"
    | "20-AwaitForBuyerShip"
    | "30-AwaitForParcel"
    | "40-Refunding"
    | "50-RefundSuccess"
    | "60-RefundFail";

  /** 货物状态 */
  goodsStatus: "NotShipped" | "Shipped";
}

export interface Refund {
  /** 剩余处理时间 */
  remainProcessTime?: number;

  /** 退款编号 */
  refundNum: string;

  /** 退款商品 */
  refundProducts: OrderProductInfo[];

  /** 申请退款金额 */
  requestRefundAmount: number;

  /** 实际退款金额 */
  refundAmount: number;

  /** 退款类型 */
  refundType: "NotCompleted" | "Completed" | "MasterRefund";

  /** 退款解决方案 */
  refundSolution: "Refund" | "RefundAndReturnGoods";

  /** 退款状态 */
  refundStatus:
    | "10-Pending"
    | "20-AwaitForBuyerShip"
    | "30-AwaitForParcel"
    | "40-Refunding"
    | "50-RefundSuccess"
    | "60-RefundFail";

  /** 货物状态 */
  goodsStatus: "NotShipped" | "Shipped";

  /** 照片凭证 */
  photoEvidences: string[];

  /** 注释 */
  notes: Note[];

  /** 用户 ID */
  userId: string;

  /** 订单 ID */
  orderId: string;

  /** 订单编号 */
  orderNum: string;

  /** 订单实付金额 */
  orderAmount: number;

  /** 快递费用 */
  expressFee?: number;

  /** 快递单号 */
  expressNum?: string;

  /** 快递公司编号 */
  expressCompanyCode?: string;

  /** 快递公司名称 */
  expressCompanyName?: string;

  /** 收货信息（快照） */
  shippingAddress: ShippingAddress;

  /** 用户信息（快照） */
  userSnap: UserSnap;

  /** paymentId */
  paymentId: string;

  /** 退货快递单号 */
  returnExpressNum?: string;

  /** 退货快递公司编号 */
  returnExpressCompanyCode?: string;

  /** 退货快递公司名称 */
  returnExpressCompanyName?: string;

  /** 创建 */
  createOperateInfo: OperateInfo;

  /** 同意 */
  agreeOperateInfo?: OperateInfo;

  /** 拒绝 */
  refuseOperateInfo?: OperateInfo;

  /** 同意退货退款 */
  agreeReturnAndRefundOperateInfo?: OperateInfo;

  /** 提交退货快递单号 */
  submitReturnExpressNumOperateInfo?: OperateInfo;
}

export interface MasterAddRefundNoteDto {
  /** 内容 */
  content: string;
}

export interface PrivateUpdateShippingAddressDto {
  /** 收件人姓名 */
  consigneeName?: string;

  /** 手机号 */
  phoneNumber?: string;

  /** 邮编 */
  postalCode?: string;

  /** 国标收货地址第一级地址, 省 */
  provinceName?: string;

  /** 国标收货地址第二级地址, 市 */
  cityName?: string;

  /** 国标收货地址第三级地址, 区 */
  countyName?: string;

  /** 国标收货地址第四级地址, 街道 */
  streetName?: string;

  /** 详细收货地址信息（不含街道） */
  detailInfo?: string;

  /** 收货地址国家码 */
  nationalCode?: string;

  /** 是否为默认地址 */
  isDefault?: boolean;
}

export interface PrivateCreateShoppingCartDto {
  /** 要加入购物车的 sku Id */
  skuId: string;

  /**
   * 数量, 取值范围 1 - 20
   * @min 1
   * @max 20
   */
  count?: number;
}

export interface ShoppingCartSKU {
  /** ID */
  _id: string;

  /** 价格，单位：分 */
  price: number;

  /** 库存 */
  stock: number;

  /** 参数 */
  params: SKUParam[];

  /** sku 图 */
  image?: string;
}

export interface ShoppingCartVo {
  /** skuId */
  skuId: string;

  /** 数量 */
  count: number;

  /** 标题 */
  title: string;

  /** 主图 */
  image: string;

  /** sku 信息 */
  sku: ShoppingCartSKU;

  /** 状态 */
  status: "active" | "inactive";

  /** 商品 ID */
  productId: string;
}

export interface PrivateUpdateShoppingCartDto {
  /**
   * 数量, 取值范围 1 - 20
   * @min 1
   * @max 20
   */
  count?: number;
}

export interface MasterUpdateTenantDto {
  /** 租户状态 */
  tenantStatus?: "open" | "closed";
}

export interface MasterUserListItemVo {
  /** 头像 */
  avatarUrl: string;

  /** 数字 uid */
  uid: string;

  /** 昵称 */
  nickName: string;

  /** 是否为黑名单用户 */
  isBlack: boolean;

  /** 购物车商品数量 */
  shoppingCartCount: number;

  /** 消费总额 */
  totalConsumption: number;
}

export interface MasterUpdateUserDto {
  /** 是否被拉黑 */
  isBlack?: boolean;
}

export interface CursorPaginationVo {
  /** 最后的游标 */
  lastCursor: string | null;
}

export interface PaginationVo {
  /** 是否还有下一页 */
  hasNext: boolean;

  /** 列表总数，仅第一页返回 */
  count?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Lightwork Server
 * @version 1.0.0
 * @contact
 *
 * [接口规范](http://szo.ezze.live:18181/docs/lightwork/lightwork-api)
 *
 * [api-json](/api-doc-json)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description 新建文章
     *
     * @tags articles
     * @name MasterCreateArticle
     * @request POST:/api/master/articles
     * @secure
     */
    masterCreateArticle: (data: MasterCreateArticleDto, params: RequestParams = {}) =>
      this.request<MasterArticleVo, any>({
        path: `/api/master/articles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 文章列表
     *
     * @tags articles
     * @name MasterListSimpleArticles
     * @request GET:/api/master/articles
     * @secure
     */
    masterListSimpleArticles: (
      query: {
        sortBy?: string;
        category: "hot" | "new";
        tenantId?: "sw" | "sv";
        title?: string;
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterArticleListItemVo[] }, any>({
        path: `/api/master/articles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新文章
     *
     * @tags articles
     * @name MasterUpdateArticle
     * @request PATCH:/api/master/articles/{id}
     * @secure
     */
    masterUpdateArticle: (id: string, data: MasterUpdateArticleDto, params: RequestParams = {}) =>
      this.request<MasterArticleVo, any>({
        path: `/api/master/articles/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取文章详情
     *
     * @tags articles
     * @name MasterGetArticle
     * @request GET:/api/master/articles/{id}
     * @secure
     */
    masterGetArticle: (id: string, params: RequestParams = {}) =>
      this.request<MasterArticleVo, any>({
        path: `/api/master/articles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除文章
     *
     * @tags articles
     * @name MasterDeleteArticle
     * @request DELETE:/api/master/articles/{id}
     * @secure
     */
    masterDeleteArticle: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/articles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 文章数量
     *
     * @tags articles
     * @name MasterCountArticle
     * @request GET:/api/master/articles/-/count
     * @secure
     */
    masterCountArticle: (
      query: { category: "hot" | "new"; tenantId?: "sw" | "sv"; title?: string },
      params: RequestParams = {},
    ) =>
      this.request<SimpleCountVo, any>({
        path: `/api/master/articles/-/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取指定文章详细内容
     *
     * @tags articles
     * @name PublicGetPublishedArticleById
     * @request GET:/api/public/articles/{id}
     * @secure
     */
    publicGetPublishedArticleById: (id: string, params: RequestParams = {}) =>
      this.request<PublicArticleVo, any>({
        path: `/api/public/articles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取文章列表
     *
     * @tags articles
     * @name PublicListPublishedSimpleArticles
     * @request GET:/api/public/articles
     * @secure
     */
    publicListPublishedSimpleArticles: (
      query: { limit?: number; cursor?: string; sortBy?: string; category: "hot" | "new" },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: ArticleSimple[] }, any>({
        path: `/api/public/articles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 小程序登陆接口
     *
     * @tags auths
     * @name PublicLogin
     * @request POST:/api/public/auths/wechatMP
     * @secure
     */
    publicLogin: (data: AuthWechatMPLoginDto, params: RequestParams = {}) =>
      this.request<AuthLoginVo, any>({
        path: `/api/public/auths/wechatMP`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 登出
     *
     * @tags auths
     * @name PrivateLogout
     * @request DELETE:/api/private/auths
     * @secure
     */
    privateLogout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/auths`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 新建 banner
     *
     * @tags banners
     * @name MasterCreateBanner
     * @request POST:/api/master/banners
     * @secure
     */
    masterCreateBanner: (data: CreateBannerDto, params: RequestParams = {}) =>
      this.request<Banner, any>({
        path: `/api/master/banners`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description banner 列表
     *
     * @tags banners
     * @name MasterListAllBanners
     * @request GET:/api/master/banners
     * @secure
     */
    masterListAllBanners: (query: { tenantId: "sw" | "sv" }, params: RequestParams = {}) =>
      this.request<Banner[], any>({
        path: `/api/master/banners`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除 banner
     *
     * @tags banners
     * @name MasterDeleteBanner
     * @request DELETE:/api/master/banners/{id}
     * @secure
     */
    masterDeleteBanner: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/banners/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 排序
     *
     * @tags banners
     * @name MasterSortBanner
     * @request PATCH:/api/master/banners/-/sorting
     * @secure
     */
    masterSortBanner: (data: SortBannerDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/banners/-/sorting`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description banner 列表
     *
     * @tags banners
     * @name PublicListBanners
     * @request GET:/api/public/banners
     * @secure
     */
    publicListBanners: (params: RequestParams = {}) =>
      this.request<Banner[], any>({
        path: `/api/public/banners`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取所有分类
     *
     * @tags categories
     * @name PublicGetAllCategories
     * @request GET:/api/public/categories
     * @secure
     */
    publicGetAllCategories: (params: RequestParams = {}) =>
      this.request<PublicCategoryVo[], any>({
        path: `/api/public/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description hello world
     *
     * @tags hello
     * @name Hello
     * @request GET:/api/public/hello
     * @secure
     */
    hello: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/public/hello`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取所有配置信息
     *
     * @tags informations
     * @name MasterGetInformation
     * @request GET:/api/master/informations
     * @secure
     */
    masterGetInformation: (params: RequestParams = {}) =>
      this.request<Information, any>({
        path: `/api/master/informations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 修改配置信息
     *
     * @tags informations
     * @name MasterUpdateInformation
     * @request PATCH:/api/master/informations
     * @secure
     */
    masterUpdateInformation: (data: UpdateInformationDto, params: RequestParams = {}) =>
      this.request<Information, any>({
        path: `/api/master/informations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags initialResources
     * @name PublicGetInitialResources
     * @request GET:/api/public/initialResources
     * @secure
     */
    publicGetInitialResources: (params: RequestParams = {}) =>
      this.request<InitialResourcesVo, any>({
        path: `/api/public/initialResources`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags kuaidi
     * @name PublicSubscriptionCallback
     * @request POST:/api/public/kuaidi/-/callback
     * @secure
     */
    publicSubscriptionCallback: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/public/kuaidi/-/callback`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description 智能识别快递单号
     *
     * @tags kuaidi
     * @name PrivateAutoRecognition
     * @request GET:/api/private/kuaidi/{expressNum}/autoRecognition
     * @secure
     */
    privateAutoRecognition: (expressNum: string, params: RequestParams = {}) =>
      this.request<AutoRecognitionCompanyVo[], any>({
        path: `/api/private/kuaidi/${expressNum}/autoRecognition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 智能识别快递单号
     *
     * @tags kuaidi
     * @name MasterAutoRecognition
     * @request GET:/api/master/kuaidi/{expressNum}/autoRecognition
     * @secure
     */
    masterAutoRecognition: (expressNum: string, params: RequestParams = {}) =>
      this.request<AutoRecognitionCompanyVo[], any>({
        path: `/api/master/kuaidi/${expressNum}/autoRecognition`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 快递详情
     *
     * @tags kuaidi
     * @name MasterGetKuaidiByExpressNum
     * @request GET:/api/master/kuaidi/{expressNum}
     * @secure
     */
    masterGetKuaidiByExpressNum: (expressNum: string, params: RequestParams = {}) =>
      this.request<KuaidiDataItem[], any>({
        path: `/api/master/kuaidi/${expressNum}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 新建型录
     *
     * @tags lookBooks
     * @name MasterCreateLookBook
     * @request POST:/api/master/lookBooks
     * @secure
     */
    masterCreateLookBook: (data: MasterCreateLookBookDto, params: RequestParams = {}) =>
      this.request<LookBook, any>({
        path: `/api/master/lookBooks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 型录列表
     *
     * @tags lookBooks
     * @name MasterListLookBooks
     * @request GET:/api/master/lookBooks
     * @secure
     */
    masterListLookBooks: (
      query?: {
        sortBy?: string;
        lookBookType?: "image" | "video";
        tenantId?: "sw" | "sv";
        title?: string;
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterLookBookListItemVo[] }, any>({
        path: `/api/master/lookBooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新型录
     *
     * @tags lookBooks
     * @name MasterUpdateLookBook
     * @request PATCH:/api/master/lookBooks/{id}
     * @secure
     */
    masterUpdateLookBook: (id: string, data: MasterUpdateLookBookDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/lookBooks/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除型录
     *
     * @tags lookBooks
     * @name MasterDeleteLookBook
     * @request DELETE:/api/master/lookBooks/{id}
     * @secure
     */
    masterDeleteLookBook: (id: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/master/lookBooks/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 型录详情
     *
     * @tags lookBooks
     * @name MasterGetLookBook
     * @request GET:/api/master/lookBooks/{id}
     * @secure
     */
    masterGetLookBook: (id: string, params: RequestParams = {}) =>
      this.request<LookBook, any>({
        path: `/api/master/lookBooks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 型录列表
     *
     * @tags lookBooks
     * @name PublicListLookBooks
     * @request GET:/api/public/lookBooks
     * @secure
     */
    publicListLookBooks: (
      query: { limit?: number; cursor?: string; sortBy?: string; lookBookType: "image" | "video" },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: PublicLookBookListItemVo[] }, any>({
        path: `/api/public/lookBooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 型录详情
     *
     * @tags lookBooks
     * @name PublicGetLookBook
     * @request GET:/api/public/lookBooks/{id}
     * @secure
     */
    publicGetLookBook: (id: string, params: RequestParams = {}) =>
      this.request<PublicLookBookVo, any>({
        path: `/api/public/lookBooks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员登陆
     *
     * @tags masters
     * @name PublicLogin2
     * @request POST:/api/public/masters/-/token
     * @originalName publicLogin
     * @duplicate
     * @secure
     */
    publicLogin2: (data: MasterLoginDto, params: RequestParams = {}) =>
      this.request<MasterLoginVo, any>({
        path: `/api/public/masters/-/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 注册一个 master 用户, 暂时仅 system 用户可调用
     *
     * @tags masters
     * @name MasterRegister
     * @request POST:/api/master/masters
     * @secure
     */
    masterRegister: (data: RegisterMasterDto, params: RequestParams = {}) =>
      this.request<Master, any>({
        path: `/api/master/masters`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新个人信息
     *
     * @tags masters
     * @name MasterUpdateMasterInfo
     * @request PATCH:/api/master/masters
     * @secure
     */
    masterUpdateMasterInfo: (data: UpdateMasterInfoDto, params: RequestParams = {}) =>
      this.request<Master, any>({
        path: `/api/master/masters`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员登出
     *
     * @tags masters
     * @name MasterLogout
     * @request DELETE:/api/master/masters/-/token
     * @secure
     */
    masterLogout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/masters/-/token`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description master 个人信息
     *
     * @tags masters
     * @name MasterSelf
     * @request GET:/api/master/masters/-/self
     * @secure
     */
    masterSelf: (params: RequestParams = {}) =>
      this.request<Master, any>({
        path: `/api/master/masters/-/self`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description dashboard 信息
     *
     * @tags masters
     * @name MasterGetDashboardInitInfo
     * @request GET:/api/master/masters/-/dashboardInitInfo
     * @secure
     */
    masterGetDashboardInitInfo: (params: RequestParams = {}) =>
      this.request<DashboardInitInfo, any>({
        path: `/api/master/masters/-/dashboardInitInfo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单详情
     *
     * @tags orders
     * @name PrivateGetOrderById
     * @request GET:/api/private/orders/{id}
     * @secure
     */
    privateGetOrderById: (id: string, params: RequestParams = {}) =>
      this.request<PrivateOrderVo, any>({
        path: `/api/private/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 取消订单
     *
     * @tags orders
     * @name PrivateCancelOrder
     * @request DELETE:/api/private/orders/{id}
     * @secure
     */
    privateCancelOrder: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/orders/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 快递详情
     *
     * @tags orders
     * @name PrivateGetExpressByOrderId
     * @request GET:/api/private/orders/{id}/express
     * @secure
     */
    privateGetExpressByOrderId: (id: string, params: RequestParams = {}) =>
      this.request<OrderExpressVo, any>({
        path: `/api/private/orders/${id}/express`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单列表
     *
     * @tags orders
     * @name PrivateListOrdersByCursor
     * @request GET:/api/private/orders
     * @secure
     */
    privateListOrdersByCursor: (
      query?: { limit?: number; cursor?: string; sortBy?: string; type?: "NotPay" | "AwaitShip" | "Shipped" },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: PrivateOrderListItemVo[] }, any>({
        path: `/api/private/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 提交订单
     *
     * @tags orders
     * @name PrivateCreateOrder
     * @request POST:/api/private/orders
     * @secure
     */
    privateCreateOrder: (data: PrivateCreateOrderDto, params: RequestParams = {}) =>
      this.request<PrivateInitialPaymentVo, any>({
        path: `/api/private/orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单预览
     *
     * @tags orders
     * @name PrivatePreorder
     * @request POST:/api/private/orders/-/preorder
     * @secure
     */
    privatePreorder: (data: PreorderDto, params: RequestParams = {}) =>
      this.request<PreorderVo, any>({
        path: `/api/private/orders/-/preorder`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 重新发起支付
     *
     * @tags orders
     * @name PrivateInitialPayment
     * @request POST:/api/private/orders/{id}/payment
     * @secure
     */
    privateInitialPayment: (id: string, params: RequestParams = {}) =>
      this.request<PrivateInitialPaymentVo, any>({
        path: `/api/private/orders/${id}/payment`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单完成（确认收货）
     *
     * @tags orders
     * @name PrivateCompleteOrder
     * @request PUT:/api/private/orders/{id}/completion
     * @secure
     */
    privateCompleteOrder: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/orders/${id}/completion`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description 修改收货地址
     *
     * @tags orders
     * @name PrivateUpdateOrderShippingAddress
     * @request PUT:/api/private/orders/{id}/shippingAddress
     * @secure
     */
    privateUpdateOrderShippingAddress: (
      id: string,
      data: PrivateCreateShippingAddressDto,
      params: RequestParams = {},
    ) =>
      this.request<Order, any>({
        path: `/api/private/orders/${id}/shippingAddress`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单列表 tab 计数
     *
     * @tags orders
     * @name PrivateGetTabCount
     * @request GET:/api/private/orders/-/tabCount
     * @secure
     */
    privateGetTabCount: (params: RequestParams = {}) =>
      this.request<OrderTabCount, any>({
        path: `/api/private/orders/-/tabCount`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单当前售后详情, 调用前请确保 order.isPendingRefund 为 true
     *
     * @tags orders
     * @name PrivateGetCurrentRefund
     * @request GET:/api/private/orders/{id}/refund
     * @secure
     */
    privateGetCurrentRefund: (id: string, params: RequestParams = {}) =>
      this.request<PrivateRefundVo, any>({
        path: `/api/private/orders/${id}/refund`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单列表
     *
     * @tags orders
     * @name MasterListOrders
     * @request GET:/api/master/orders
     * @secure
     */
    masterListOrders: (
      query?: {
        sortBy?: string;
        q?: string;
        userId?: string;
        tenantId?: "sw" | "sv";
        status?:
          | "00-AwaitCreatePayment"
          | "10-NotPay"
          | "20-Paid"
          | "30-AwaitShip"
          | "40-Shipped"
          | "50-Completed"
          | "70-Closed";
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterOrderListItemVo[] }, any>({
        path: `/api/master/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单详情
     *
     * @tags orders
     * @name MasterGetOrderById
     * @request GET:/api/master/orders/{id}
     * @secure
     */
    masterGetOrderById: (id: string, params: RequestParams = {}) =>
      this.request<MasterOrderVo, any>({
        path: `/api/master/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单时间线列表
     *
     * @tags orders
     * @name MasterGetOrderTimelineById
     * @request GET:/api/master/orders/{id}/timeline
     * @secure
     */
    masterGetOrderTimelineById: (
      id: string,
      query?: { limit?: number; cursor?: string; sortBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: TimelineItem[] }, any>({
        path: `/api/master/orders/${id}/timeline`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单状态变更
     *
     * @tags orders
     * @name MasterUpdateOrderStatusById
     * @request PATCH:/api/master/orders/{id}/status
     * @secure
     */
    masterUpdateOrderStatusById: (id: string, data: MasterUpdateOrderStatusDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/orders/${id}/status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 修改订单收货地址, 仅当订单状态处于 ['00-AwaitCreatePayment', '10-NotPay', '20-Paid'] 时可调用
     *
     * @tags orders
     * @name MasterUpdateOrderShippingAddress
     * @request PATCH:/api/master/orders/{id}/shippingAddress
     * @secure
     */
    masterUpdateOrderShippingAddress: (
      id: string,
      data: MasterUpdateOrderShippingAddressDto,
      params: RequestParams = {},
    ) =>
      this.request<Order, any>({
        path: `/api/master/orders/${id}/shippingAddress`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 添加注释
     *
     * @tags orders
     * @name MasterAddOrderNote
     * @request POST:/api/master/orders/{id}/notes
     * @secure
     */
    masterAddOrderNote: (id: string, data: MasterCreateOrderNoteDto, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/api/master/orders/${id}/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 上传文件
     *
     * @tags oss
     * @name MasterUploadFiles
     * @request POST:/api/master/oss/fromFiles
     * @secure
     */
    masterUploadFiles: (
      query: { fileType: "img" | "vid" | "txt" | "oth" },
      data: FilesUploadDto,
      params: RequestParams = {},
    ) =>
      this.request<UploadFileVo[], any>({
        path: `/api/master/oss/fromFiles`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取上传所需信息
     *
     * @tags oss
     * @name MasterGetSignature
     * @request GET:/api/master/oss/signature
     * @secure
     */
    masterGetSignature: (
      query: { fileType: "img" | "vid" | "txt" | "oth"; count: number },
      params: RequestParams = {},
    ) =>
      this.request<GetSignatureVo, any>({
        path: `/api/master/oss/signature`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 初始化分片上传
     *
     * @tags oss
     * @name MasterInitiateMultipartUpload
     * @request POST:/api/master/oss/multipartUpload/initialization
     * @secure
     */
    masterInitiateMultipartUpload: (data: InitiateMultipartUploadDto, params: RequestParams = {}) =>
      this.request<InitiateMultipartUploadVo, any>({
        path: `/api/master/oss/multipartUpload/initialization`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取分片上传所需 urls
     *
     * @tags oss
     * @name MasterGetMultipartUploadSignatureUrls
     * @request POST:/api/master/oss/multipartUpload/signatrueUrls
     * @secure
     */
    masterGetMultipartUploadSignatureUrls: (data: GetMultipartUploadSignatureUrlsDto, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/master/oss/multipartUpload/signatrueUrls`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 结束分片上传
     *
     * @tags oss
     * @name MasterCompleteMultipartUpload
     * @request POST:/api/master/oss/multipartUpload/completion
     * @secure
     */
    masterCompleteMultipartUpload: (data: CompleteMultipartUploadDto, params: RequestParams = {}) =>
      this.request<CompleteMultipartUploadVo, any>({
        path: `/api/master/oss/multipartUpload/completion`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name PublicWechatpayTransactionNotify
     * @request POST:/api/public/payments/wechatpay/transactionNotify
     * @secure
     */
    publicWechatpayTransactionNotify: (data: WechatpayTransactionSuccessNotifyDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/public/payments/wechatpay/transactionNotify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payments
     * @name PublicWechatpayRefundNotify
     * @request POST:/api/public/payments/wechatpay/refundNotify
     * @secure
     */
    publicWechatpayRefundNotify: (data: WechatpayRefundSuccessNotifyDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/public/payments/wechatpay/refundNotify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 商品列表
     *
     * @tags products
     * @name MasterListProducts
     * @request GET:/api/master/products
     * @secure
     */
    masterListProducts: (
      query?: {
        sortBy?: string;
        title?: string;
        status?: "active" | "inactive";
        tenantId?: "sw" | "sv";
        departmentId?: string;
        categoryId?: string;
        isSoldOut?: boolean;
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterListProductsItemVo[] }, any>({
        path: `/api/master/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 新建商品
     *
     * @tags products
     * @name MasterCreateProduct
     * @request POST:/api/master/products
     * @secure
     */
    masterCreateProduct: (data: MasterCreateProductDto, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/api/master/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 商品详情
     *
     * @tags products
     * @name MasterGetProductById
     * @request GET:/api/master/products/{id}
     * @secure
     */
    masterGetProductById: (id: string, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/api/master/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新商品
     *
     * @tags products
     * @name MasterUpdateProductById
     * @request PATCH:/api/master/products/{id}
     * @secure
     */
    masterUpdateProductById: (id: string, data: MasterUpdateProductDto, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/api/master/products/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除商品
     *
     * @tags products
     * @name MasterDeleteProductById
     * @request DELETE:/api/master/products/{id}
     * @secure
     */
    masterDeleteProductById: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/products/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 添加推荐商品
     *
     * @tags products
     * @name MasterUpdateToRecommendByIds
     * @request POST:/api/master/products/-/recommend
     * @secure
     */
    masterUpdateToRecommendByIds: (data: AddRecommendProductsDto, params: RequestParams = {}) =>
      this.request<MasterListProductsItemVo[], any>({
        path: `/api/master/products/-/recommend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 推荐商品列表
     *
     * @tags products
     * @name MasterListRecommendProducts
     * @request GET:/api/master/products/-/recommend
     * @secure
     */
    masterListRecommendProducts: (query?: { tenantId?: "sw" | "sv" }, params: RequestParams = {}) =>
      this.request<MasterListProductsItemVo[], any>({
        path: `/api/master/products/-/recommend`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 取消推荐商品
     *
     * @tags products
     * @name MasterCancelRecommendById
     * @request DELETE:/api/master/products/{id}/recommend
     * @secure
     */
    masterCancelRecommendById: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/products/${id}/recommend`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 商品列表
     *
     * @tags products
     * @name PublicListProductsByCursor
     * @request GET:/api/public/products
     * @secure
     */
    publicListProductsByCursor: (
      query?: {
        limit?: number;
        cursor?: string;
        sortBy?: string;
        categoryId?: string;
        categoryIdInverse?: boolean;
        isSoldOut?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: PublicProductSimpleVo[] }, any>({
        path: `/api/public/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 推荐商品列表
     *
     * @tags products
     * @name PublicListRecommendProducts
     * @request GET:/api/public/products/-/recommend
     * @secure
     */
    publicListRecommendProducts: (params: RequestParams = {}) =>
      this.request<PublicProductSimpleVo[], any>({
        path: `/api/public/products/-/recommend`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 被指定商品详情
     *
     * @tags products
     * @name PublicGetProductById
     * @request GET:/api/public/products/{id}
     * @secure
     */
    publicGetProductById: (id: string, params: RequestParams = {}) =>
      this.request<PublicProductVo, any>({
        path: `/api/public/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 发起售后申请
     *
     * @tags refunds
     * @name PrivateCreateRefund
     * @request POST:/api/private/refunds
     * @secure
     */
    privateCreateRefund: (data: PrivateCreateRefundDto, params: RequestParams = {}) =>
      this.request<MongoIdVo, any>({
        path: `/api/private/refunds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 通过 orderId 获取所有相关售后申请
     *
     * @tags refunds
     * @name PrivateGetRefundsByOrderId
     * @request GET:/api/private/refunds
     * @secure
     */
    privateGetRefundsByOrderId: (query: { orderId: string }, params: RequestParams = {}) =>
      this.request<PrivateRefundListItemVo[], any>({
        path: `/api/private/refunds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新申请信息，仅状态为 10-Pending 前可调用
     *
     * @tags refunds
     * @name PrivateUpdateRefund
     * @request PATCH:/api/private/refunds/{id}
     * @secure
     */
    privateUpdateRefund: (id: string, data: PrivateUpdateRefundDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/refunds/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 售后详情
     *
     * @tags refunds
     * @name PrivateGetRefundById
     * @request GET:/api/private/refunds/{id}
     * @secure
     */
    privateGetRefundById: (id: string, params: RequestParams = {}) =>
      this.request<PrivateRefundVo, any>({
        path: `/api/private/refunds/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 提交退货信息
     *
     * @tags refunds
     * @name PrivateSubmitReturnExpressInfo
     * @request POST:/api/private/refunds/{id}/returnExpressInfo
     * @secure
     */
    privateSubmitReturnExpressInfo: (id: string, data: PrivateReturnExpressInfoDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/refunds/${id}/returnExpressInfo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 获取退货地址信息
     *
     * @tags refunds
     * @name PrivateGetReturnAddress
     * @request GET:/api/private/refunds/-/returnAddress
     * @secure
     */
    privateGetReturnAddress: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/private/refunds/-/returnAddress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 退货原因列表
     *
     * @tags refunds
     * @name PrivateListReturnReasons
     * @request GET:/api/private/refunds/-/returnReasons
     * @secure
     */
    privateListReturnReasons: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/private/refunds/-/returnReasons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 发起售后申请
     *
     * @tags refunds
     * @name MasterCreateRefund
     * @request POST:/api/master/refunds
     * @secure
     */
    masterCreateRefund: (data: MasterCreateRefundDto, params: RequestParams = {}) =>
      this.request<MongoIdVo, any>({
        path: `/api/master/refunds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 售后列表
     *
     * @tags refunds
     * @name MasterListRefunds
     * @request GET:/api/master/refunds
     * @secure
     */
    masterListRefunds: (
      query?: {
        sortBy?: string;
        tenantId?: "sw" | "sv";
        orderNum?: string;
        refundNum?: string;
        productTitle?: string;
        expressNum?: string;
        startTime?: number;
        endTime?: number;
        refundType?: "NotCompleted" | "Completed" | "MasterRefund";
        refundSolution?: "Refund" | "RefundAndReturnGoods";
        refundStatus?:
          | "10-Pending"
          | "20-AwaitForBuyerShip"
          | "30-AwaitForParcel"
          | "40-Refunding"
          | "50-RefundSuccess"
          | "60-RefundFail";
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterRefundListItemVo[] }, any>({
        path: `/api/master/refunds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新 refund
     *
     * @tags refunds
     * @name MasterUpdateRefund
     * @request PATCH:/api/master/refunds/{id}
     * @secure
     */
    masterUpdateRefund: (
      id: string,
      query: { action: "agree" | "refuse" | "agreeReturnAndRefund" | "submitExpressNum" | "initiatePaymentRefund" },
      data: MasterUpdateRefundDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/master/refunds/${id}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 售后详情
     *
     * @tags refunds
     * @name MasterGetRefundById
     * @request GET:/api/master/refunds/{id}
     * @secure
     */
    masterGetRefundById: (id: string, params: RequestParams = {}) =>
      this.request<Refund, any>({
        path: `/api/master/refunds/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 添加 note
     *
     * @tags refunds
     * @name MasterAddNoteToRefundById
     * @request POST:/api/master/refunds/{id}/notes
     * @secure
     */
    masterAddNoteToRefundById: (id: string, data: MasterAddRefundNoteDto, params: RequestParams = {}) =>
      this.request<Note[], any>({
        path: `/api/master/refunds/${id}/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 新建地址
     *
     * @tags shippingAddresses
     * @name PrivateCreateShippingAddress
     * @request POST:/api/private/shippingAddresses
     * @secure
     */
    privateCreateShippingAddress: (data: PrivateCreateShippingAddressDto, params: RequestParams = {}) =>
      this.request<ShippingAddress, any>({
        path: `/api/private/shippingAddresses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取所有地址
     *
     * @tags shippingAddresses
     * @name PrivateGetAllShippingAddress
     * @request GET:/api/private/shippingAddresses
     * @secure
     */
    privateGetAllShippingAddress: (params: RequestParams = {}) =>
      this.request<ShippingAddress[], any>({
        path: `/api/private/shippingAddresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新地址
     *
     * @tags shippingAddresses
     * @name PrivateUpdateShippingAddress
     * @request PUT:/api/private/shippingAddresses/{id}
     * @secure
     */
    privateUpdateShippingAddress: (id: string, data: PrivateUpdateShippingAddressDto, params: RequestParams = {}) =>
      this.request<ShippingAddress, any>({
        path: `/api/private/shippingAddresses/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取指定地址
     *
     * @tags shippingAddresses
     * @name PrivateGetShippingAddressById
     * @request GET:/api/private/shippingAddresses/{id}
     * @secure
     */
    privateGetShippingAddressById: (id: string, params: RequestParams = {}) =>
      this.request<ShippingAddress, any>({
        path: `/api/private/shippingAddresses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除地址
     *
     * @tags shippingAddresses
     * @name PrivateDeleteShippingAddress
     * @request DELETE:/api/private/shippingAddresses/{id}
     * @secure
     */
    privateDeleteShippingAddress: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/shippingAddresses/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 获取默认地址
     *
     * @tags shippingAddresses
     * @name PrivateGetDefaultShippingAddress
     * @request GET:/api/private/shippingAddresses/-/default
     * @secure
     */
    privateGetDefaultShippingAddress: (params: RequestParams = {}) =>
      this.request<ShippingAddress, any>({
        path: `/api/private/shippingAddresses/-/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 加入购物车
     *
     * @tags shoppingCarts
     * @name PrivateAddShoppingCart
     * @request POST:/api/private/shoppingCarts
     * @secure
     */
    privateAddShoppingCart: (data: PrivateCreateShoppingCartDto, params: RequestParams = {}) =>
      this.request<ShoppingCartVo, any>({
        path: `/api/private/shoppingCarts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取购物车列表
     *
     * @tags shoppingCarts
     * @name PrivateListShoppingCarts
     * @request GET:/api/private/shoppingCarts
     * @secure
     */
    privateListShoppingCarts: (params: RequestParams = {}) =>
      this.request<ShoppingCartVo[], any>({
        path: `/api/private/shoppingCarts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取购物车商品总件数
     *
     * @tags shoppingCarts
     * @name PrivateCountShoppingCarts
     * @request GET:/api/private/shoppingCarts/-/count
     * @secure
     */
    privateCountShoppingCarts: (params: RequestParams = {}) =>
      this.request<SimpleCountVo, any>({
        path: `/api/private/shoppingCarts/-/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新购物车商品信息，如：数量
     *
     * @tags shoppingCarts
     * @name PrivateUpdateShoppingCart
     * @request PUT:/api/private/shoppingCarts/{id}
     * @secure
     */
    privateUpdateShoppingCart: (id: string, data: PrivateUpdateShoppingCartDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/shoppingCarts/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除购物车商品
     *
     * @tags shoppingCarts
     * @name PrivateDeleteShoppingCart
     * @request DELETE:/api/private/shoppingCarts/{id}
     * @secure
     */
    privateDeleteShoppingCart: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/private/shoppingCarts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description 获取某个用户的购物车列表
     *
     * @tags shoppingCarts
     * @name MasterListUserShoppingCarts
     * @request GET:/api/master/shoppingCarts
     * @secure
     */
    masterListUserShoppingCarts: (
      query: { limit?: number; cursor?: string; sortBy?: string; userId: string },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: ShoppingCartVo[] }, any>({
        path: `/api/master/shoppingCarts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新租户信息
     *
     * @tags tenants
     * @name MasterUpdateTenant
     * @request PATCH:/api/master/tenants/{tenantId}
     * @secure
     */
    masterUpdateTenant: (tenantId: string, data: MasterUpdateTenantDto, params: RequestParams = {}) =>
      this.request<Tenant, any>({
        path: `/api/master/tenants/${tenantId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags timeline
     * @name MasterGetTimelineByResourceId
     * @request GET:/api/master/timeline/{resourceType}/{resourceId}
     * @secure
     */
    masterGetTimelineByResourceId: (
      resourceType: "Order" | "Refund",
      resourceId: string,
      query?: { limit?: number; cursor?: string; sortBy?: string },
      params: RequestParams = {},
    ) =>
      this.request<CursorPaginationVo & { list: TimelineItem[] }, any>({
        path: `/api/master/timeline/${resourceType}/${resourceId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ueditor
     * @name PublicUeditor
     * @request GET:/api/public/ueditor
     * @secure
     */
    publicUeditor: (
      query: { action: "config" | "catchimage"; callback: string; source?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/public/ueditor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取个人信息
     *
     * @tags users
     * @name PrivateSelf
     * @request GET:/api/private/users/-/self
     * @secure
     */
    privateSelf: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/private/users/-/self`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 用户列表
     *
     * @tags users
     * @name MasterListUser
     * @request GET:/api/master/users
     * @secure
     */
    masterListUser: (
      query?: {
        sortBy?: string;
        tenantId?: "sw" | "sv";
        nickName?: string;
        isBlack?: boolean;
        page?: number;
        perPage?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationVo & { list: MasterUserListItemVo[] }, any>({
        path: `/api/master/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 用户数量
     *
     * @tags users
     * @name MasterCountUser
     * @request GET:/api/master/users/-/count
     * @secure
     */
    masterCountUser: (
      query?: { tenantId?: "sw" | "sv"; nickName?: string; isBlack?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<SimpleCountVo, any>({
        path: `/api/master/users/-/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新用户信息
     *
     * @tags users
     * @name MasterSetUserBlackById
     * @request PATCH:/api/master/users/{id}
     * @secure
     */
    masterSetUserBlackById: (id: string, data: MasterUpdateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/master/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
