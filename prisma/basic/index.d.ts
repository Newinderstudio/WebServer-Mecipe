
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  loginId: string
  loginPw: string | null
  username: string
  loginType: LoginType
  userType: UserType
  nickname: string
  email: string
  isDisable: boolean
}

/**
 * Model Notice
 * 
 */
export type Notice = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  userId: number
}

/**
 * Model Board
 * 
 */
export type Board = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  startDay: Date
  endDay: Date
  isDisable: boolean
  userId: number
  boardType: BoardType
}

/**
 * Model BoardImage
 * 
 */
export type BoardImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  isThumb: boolean
  boardId: number
}

/**
 * Model BoardReply
 * 
 */
export type BoardReply = {
  id: number
  createdAt: Date
  updatedAt: Date | null
  content: string
  isDisable: boolean
  userId: number
  boardId: number
  boardReplyId: number | null
  boardType: BoardType
}

/**
 * Model RegionCategory
 * 
 */
export type RegionCategory = {
  id: number
  createdAt: Date
  name: string
  isDisable: boolean
  govermentType: GovermentType
}

/**
 * Model ClosureRegionCategory
 * 
 */
export type ClosureRegionCategory = {
  ancestor: number
  descendant: number
  depth: number
}

/**
 * Model CafeInfo
 * 
 */
export type CafeInfo = {
  id: number
  createdAt: Date
  isDisable: boolean
  name: string
  regionCategoryId: number
  address: string
  directions: string
  businessNumber: string
  ceoName: string
}

/**
 * Model CafeThumbnailImage
 * 
 */
export type CafeThumbnailImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  priority: number
  isDisable: boolean
  cafeInfoId: number
}

/**
 * Model CafeVirtualImage
 * 
 */
export type CafeVirtualImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  priority: number
  isDisable: boolean
  cafeInfoId: number
}

/**
 * Model CafeRealImage
 * 
 */
export type CafeRealImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  priority: number
  isDisable: boolean
  cafeInfoId: number
}

/**
 * Model CafeVirtualLink
 * 
 */
export type CafeVirtualLink = {
  id: number
  createdAt: Date
  name: string
  url: string
  type: string
  isDisable: boolean
  isAvaliable: boolean
  cafeInfoId: number
}

/**
 * Model CafeVirtualLinkThumbnailImage
 * 
 */
export type CafeVirtualLinkThumbnailImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  cafeVirtualLinkId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const BoardType: {
  BTALK: 'BTALK',
  BINFORM: 'BINFORM',
  BQUESTION: 'BQUESTION'
};

export type BoardType = (typeof BoardType)[keyof typeof BoardType]


export const GovermentType: {
  SPECIAL_CITY: 'SPECIAL_CITY',
  METROPOLITAN_CITY: 'METROPOLITAN_CITY',
  SPECIAL_SELF_GOVERNING_CITY: 'SPECIAL_SELF_GOVERNING_CITY',
  PROVINCE: 'PROVINCE',
  SPECIAL_SELF_GOVERNING_PROVINCE: 'SPECIAL_SELF_GOVERNING_PROVINCE',
  DISTRICT: 'DISTRICT',
  CITY: 'CITY',
  COUNTY: 'COUNTY',
  TOWN: 'TOWN',
  TOWNSHIP: 'TOWNSHIP',
  NEIGHBORHOOD: 'NEIGHBORHOOD',
  PLACENAME: 'PLACENAME'
};

export type GovermentType = (typeof GovermentType)[keyof typeof GovermentType]


export const LoginType: {
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
};

export type LoginType = (typeof LoginType)[keyof typeof LoginType]


export const UserType: {
  GENERAL: 'GENERAL',
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<GlobalReject>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<GlobalReject>;

  /**
   * `prisma.boardImage`: Exposes CRUD operations for the **BoardImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardImages
    * const boardImages = await prisma.boardImage.findMany()
    * ```
    */
  get boardImage(): Prisma.BoardImageDelegate<GlobalReject>;

  /**
   * `prisma.boardReply`: Exposes CRUD operations for the **BoardReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardReplies
    * const boardReplies = await prisma.boardReply.findMany()
    * ```
    */
  get boardReply(): Prisma.BoardReplyDelegate<GlobalReject>;

  /**
   * `prisma.regionCategory`: Exposes CRUD operations for the **RegionCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegionCategories
    * const regionCategories = await prisma.regionCategory.findMany()
    * ```
    */
  get regionCategory(): Prisma.RegionCategoryDelegate<GlobalReject>;

  /**
   * `prisma.closureRegionCategory`: Exposes CRUD operations for the **ClosureRegionCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClosureRegionCategories
    * const closureRegionCategories = await prisma.closureRegionCategory.findMany()
    * ```
    */
  get closureRegionCategory(): Prisma.ClosureRegionCategoryDelegate<GlobalReject>;

  /**
   * `prisma.cafeInfo`: Exposes CRUD operations for the **CafeInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeInfos
    * const cafeInfos = await prisma.cafeInfo.findMany()
    * ```
    */
  get cafeInfo(): Prisma.CafeInfoDelegate<GlobalReject>;

  /**
   * `prisma.cafeThumbnailImage`: Exposes CRUD operations for the **CafeThumbnailImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeThumbnailImages
    * const cafeThumbnailImages = await prisma.cafeThumbnailImage.findMany()
    * ```
    */
  get cafeThumbnailImage(): Prisma.CafeThumbnailImageDelegate<GlobalReject>;

  /**
   * `prisma.cafeVirtualImage`: Exposes CRUD operations for the **CafeVirtualImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeVirtualImages
    * const cafeVirtualImages = await prisma.cafeVirtualImage.findMany()
    * ```
    */
  get cafeVirtualImage(): Prisma.CafeVirtualImageDelegate<GlobalReject>;

  /**
   * `prisma.cafeRealImage`: Exposes CRUD operations for the **CafeRealImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeRealImages
    * const cafeRealImages = await prisma.cafeRealImage.findMany()
    * ```
    */
  get cafeRealImage(): Prisma.CafeRealImageDelegate<GlobalReject>;

  /**
   * `prisma.cafeVirtualLink`: Exposes CRUD operations for the **CafeVirtualLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeVirtualLinks
    * const cafeVirtualLinks = await prisma.cafeVirtualLink.findMany()
    * ```
    */
  get cafeVirtualLink(): Prisma.CafeVirtualLinkDelegate<GlobalReject>;

  /**
   * `prisma.cafeVirtualLinkThumbnailImage`: Exposes CRUD operations for the **CafeVirtualLinkThumbnailImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeVirtualLinkThumbnailImages
    * const cafeVirtualLinkThumbnailImages = await prisma.cafeVirtualLinkThumbnailImage.findMany()
    * ```
    */
  get cafeVirtualLinkThumbnailImage(): Prisma.CafeVirtualLinkThumbnailImageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.0
   * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Notice: 'Notice',
    Board: 'Board',
    BoardImage: 'BoardImage',
    BoardReply: 'BoardReply',
    RegionCategory: 'RegionCategory',
    ClosureRegionCategory: 'ClosureRegionCategory',
    CafeInfo: 'CafeInfo',
    CafeThumbnailImage: 'CafeThumbnailImage',
    CafeVirtualImage: 'CafeVirtualImage',
    CafeRealImage: 'CafeRealImage',
    CafeVirtualLink: 'CafeVirtualLink',
    CafeVirtualLinkThumbnailImage: 'CafeVirtualLinkThumbnailImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Boards: number
    BoardReplies: number
    Notices: number
  }

  export type UserCountOutputTypeSelect = {
    Boards?: boolean
    BoardReplies?: boolean
    Notices?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardCountOutputType
   */


  export type BoardCountOutputType = {
    BoardImages: number
    BoardReplies: number
  }

  export type BoardCountOutputTypeSelect = {
    BoardImages?: boolean
    BoardReplies?: boolean
  }

  export type BoardCountOutputTypeGetPayload<S extends boolean | null | undefined | BoardCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoardCountOutputTypeArgs)
    ? BoardCountOutputType 
    : S extends { select: any } & (BoardCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoardCountOutputType ? BoardCountOutputType[P] : never
  } 
      : BoardCountOutputType




  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     * 
    **/
    select?: BoardCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardReplyCountOutputType
   */


  export type BoardReplyCountOutputType = {
    BoardNestedReplies: number
  }

  export type BoardReplyCountOutputTypeSelect = {
    BoardNestedReplies?: boolean
  }

  export type BoardReplyCountOutputTypeGetPayload<S extends boolean | null | undefined | BoardReplyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardReplyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoardReplyCountOutputTypeArgs)
    ? BoardReplyCountOutputType 
    : S extends { select: any } & (BoardReplyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoardReplyCountOutputType ? BoardReplyCountOutputType[P] : never
  } 
      : BoardReplyCountOutputType




  // Custom InputTypes

  /**
   * BoardReplyCountOutputType without action
   */
  export type BoardReplyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardReplyCountOutputType
     * 
    **/
    select?: BoardReplyCountOutputTypeSelect | null
  }



  /**
   * Count Type RegionCategoryCountOutputType
   */


  export type RegionCategoryCountOutputType = {
    CafeInfos: number
    AncestorCategories: number
    DescendantCategories: number
  }

  export type RegionCategoryCountOutputTypeSelect = {
    CafeInfos?: boolean
    AncestorCategories?: boolean
    DescendantCategories?: boolean
  }

  export type RegionCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | RegionCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RegionCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RegionCategoryCountOutputTypeArgs)
    ? RegionCategoryCountOutputType 
    : S extends { select: any } & (RegionCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RegionCategoryCountOutputType ? RegionCategoryCountOutputType[P] : never
  } 
      : RegionCategoryCountOutputType




  // Custom InputTypes

  /**
   * RegionCategoryCountOutputType without action
   */
  export type RegionCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RegionCategoryCountOutputType
     * 
    **/
    select?: RegionCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type CafeInfoCountOutputType
   */


  export type CafeInfoCountOutputType = {
    CafeVirtualLinks: number
    CafeThumbnailImages: number
    CafeVirtualImages: number
    CafeRealImages: number
  }

  export type CafeInfoCountOutputTypeSelect = {
    CafeVirtualLinks?: boolean
    CafeThumbnailImages?: boolean
    CafeVirtualImages?: boolean
    CafeRealImages?: boolean
  }

  export type CafeInfoCountOutputTypeGetPayload<S extends boolean | null | undefined | CafeInfoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeInfoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CafeInfoCountOutputTypeArgs)
    ? CafeInfoCountOutputType 
    : S extends { select: any } & (CafeInfoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CafeInfoCountOutputType ? CafeInfoCountOutputType[P] : never
  } 
      : CafeInfoCountOutputType




  // Custom InputTypes

  /**
   * CafeInfoCountOutputType without action
   */
  export type CafeInfoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CafeInfoCountOutputType
     * 
    **/
    select?: CafeInfoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    email: string | null
    isDisable: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    email: string | null
    isDisable: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    loginId: number
    loginPw: number
    username: number
    loginType: number
    userType: number
    nickname: number
    email: number
    isDisable: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    email?: true
    isDisable?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    email?: true
    isDisable?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    email?: true
    isDisable?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    loginId: string
    loginPw: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    loginId?: boolean
    loginPw?: boolean
    username?: boolean
    loginType?: boolean
    userType?: boolean
    nickname?: boolean
    email?: boolean
    isDisable?: boolean
    Boards?: boolean | BoardFindManyArgs
    BoardReplies?: boolean | BoardReplyFindManyArgs
    Notices?: boolean | NoticeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Boards?: boolean | BoardFindManyArgs
    BoardReplies?: boolean | BoardReplyFindManyArgs
    Notices?: boolean | NoticeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Boards' ? Array < BoardGetPayload<S['include'][P]>>  :
        P extends 'BoardReplies' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'Notices' ? Array < NoticeGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Boards' ? Array < BoardGetPayload<S['select'][P]>>  :
        P extends 'BoardReplies' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'Notices' ? Array < NoticeGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Boards<T extends BoardFindManyArgs= {}>(args?: Subset<T, BoardFindManyArgs>): PrismaPromise<Array<BoardGetPayload<T>>| Null>;

    BoardReplies<T extends BoardReplyFindManyArgs= {}>(args?: Subset<T, BoardReplyFindManyArgs>): PrismaPromise<Array<BoardReplyGetPayload<T>>| Null>;

    Notices<T extends NoticeFindManyArgs= {}>(args?: Subset<T, NoticeFindManyArgs>): PrismaPromise<Array<NoticeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Notice
   */


  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    userId: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
    _all?: true
  }

  export type NoticeAggregateArgs = {
    /**
     * Filter which Notice to aggregate.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs = {
    where?: NoticeWhereInput
    orderBy?: Enumerable<NoticeOrderByWithAggregationInput>
    by: Array<NoticeScalarFieldEnum>
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }


  export type NoticeGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    userId: number
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }


  export type NoticeInclude = {
    User?: boolean | UserArgs
  } 

  export type NoticeGetPayload<S extends boolean | null | undefined | NoticeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notice :
    S extends undefined ? never :
    S extends { include: any } & (NoticeArgs | NoticeFindManyArgs)
    ? Notice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NoticeArgs | NoticeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Notice ? Notice[P] : never
  } 
      : Notice


  type NoticeCountArgs = Merge<
    Omit<NoticeFindManyArgs, 'select' | 'include'> & {
      select?: NoticeCountAggregateInputType | true
    }
  >

  export interface NoticeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoticeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NoticeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notice'> extends True ? Prisma__NoticeClient<NoticeGetPayload<T>> : Prisma__NoticeClient<NoticeGetPayload<T> | null, null>

    /**
     * Find one Notice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NoticeFindUniqueOrThrowArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoticeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NoticeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notice'> extends True ? Prisma__NoticeClient<NoticeGetPayload<T>> : Prisma__NoticeClient<NoticeGetPayload<T> | null, null>

    /**
     * Find the first Notice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoticeFindFirstOrThrowArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoticeFindManyArgs>(
      args?: SelectSubset<T, NoticeFindManyArgs>
    ): PrismaPromise<Array<NoticeGetPayload<T>>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
    **/
    create<T extends NoticeCreateArgs>(
      args: SelectSubset<T, NoticeCreateArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Create many Notices.
     *     @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     *     @example
     *     // Create many Notices
     *     const notice = await prisma.notice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NoticeCreateManyArgs>(
      args?: SelectSubset<T, NoticeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
    **/
    delete<T extends NoticeDeleteArgs>(
      args: SelectSubset<T, NoticeDeleteArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoticeUpdateArgs>(
      args: SelectSubset<T, NoticeUpdateArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoticeDeleteManyArgs>(
      args?: SelectSubset<T, NoticeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoticeUpdateManyArgs>(
      args: SelectSubset<T, NoticeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
    **/
    upsert<T extends NoticeUpsertArgs>(
      args: SelectSubset<T, NoticeUpsertArgs>
    ): Prisma__NoticeClient<NoticeGetPayload<T>>

    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoticeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Notice base type for findUnique actions
   */
  export type NoticeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice: findUnique
   */
  export interface NoticeFindUniqueArgs extends NoticeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice base type for findFirst actions
   */
  export type NoticeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     * 
    **/
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }

  /**
   * Notice: findFirst
   */
  export interface NoticeFindFirstArgs extends NoticeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     * 
    **/
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notices to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice create
   */
  export type NoticeCreateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to create a Notice.
     * 
    **/
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }


  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs = {
    /**
     * The data used to create many Notices.
     * 
    **/
    data: Enumerable<NoticeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notice update
   */
  export type NoticeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to update a Notice.
     * 
    **/
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs = {
    /**
     * The data used to update Notices.
     * 
    **/
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The filter to search for the Notice to update in case it exists.
     * 
    **/
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     * 
    **/
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }


  /**
   * Notice delete
   */
  export type NoticeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter which Notice to delete.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs = {
    /**
     * Filter which Notices to delete
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice without action
   */
  export type NoticeArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
  }



  /**
   * Model Board
   */


  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    startDay: number
    endDay: number
    isDisable: number
    userId: number
    boardType: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
    _all?: true
  }

  export type BoardAggregateArgs = {
    /**
     * Filter which Board to aggregate.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs = {
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithAggregationInput>
    by: Array<BoardScalarFieldEnum>
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }


  export type BoardGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    startDay: Date
    endDay: Date
    isDisable: boolean
    userId: number
    boardType: BoardType
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    startDay?: boolean
    endDay?: boolean
    isDisable?: boolean
    BoardImages?: boolean | BoardImageFindManyArgs
    BoardReplies?: boolean | BoardReplyFindManyArgs
    userId?: boolean
    User?: boolean | UserArgs
    boardType?: boolean
    _count?: boolean | BoardCountOutputTypeArgs
  }


  export type BoardInclude = {
    BoardImages?: boolean | BoardImageFindManyArgs
    BoardReplies?: boolean | BoardReplyFindManyArgs
    User?: boolean | UserArgs
    _count?: boolean | BoardCountOutputTypeArgs
  } 

  export type BoardGetPayload<S extends boolean | null | undefined | BoardArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Board :
    S extends undefined ? never :
    S extends { include: any } & (BoardArgs | BoardFindManyArgs)
    ? Board  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BoardImages' ? Array < BoardImageGetPayload<S['include'][P]>>  :
        P extends 'BoardReplies' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardArgs | BoardFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BoardImages' ? Array < BoardImageGetPayload<S['select'][P]>>  :
        P extends 'BoardReplies' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Board ? Board[P] : never
  } 
      : Board


  type BoardCountArgs = Merge<
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }
  >

  export interface BoardDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Board'> extends True ? Prisma__BoardClient<BoardGetPayload<T>> : Prisma__BoardClient<BoardGetPayload<T> | null, null>

    /**
     * Find one Board that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardFindUniqueOrThrowArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Board'> extends True ? Prisma__BoardClient<BoardGetPayload<T>> : Prisma__BoardClient<BoardGetPayload<T> | null, null>

    /**
     * Find the first Board that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs>(
      args?: SelectSubset<T, BoardFindManyArgs>
    ): PrismaPromise<Array<BoardGetPayload<T>>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs>(
      args: SelectSubset<T, BoardCreateArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs>(
      args?: SelectSubset<T, BoardCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs>(
      args: SelectSubset<T, BoardDeleteArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs>(
      args: SelectSubset<T, BoardUpdateArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs>(
      args?: SelectSubset<T, BoardDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs>(
      args: SelectSubset<T, BoardUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs>(
      args: SelectSubset<T, BoardUpsertArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    BoardImages<T extends BoardImageFindManyArgs= {}>(args?: Subset<T, BoardImageFindManyArgs>): PrismaPromise<Array<BoardImageGetPayload<T>>| Null>;

    BoardReplies<T extends BoardReplyFindManyArgs= {}>(args?: Subset<T, BoardReplyFindManyArgs>): PrismaPromise<Array<BoardReplyGetPayload<T>>| Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Board base type for findUnique actions
   */
  export type BoardFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where: BoardWhereUniqueInput
  }

  /**
   * Board: findUnique
   */
  export interface BoardFindUniqueArgs extends BoardFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board base type for findFirst actions
   */
  export type BoardFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     * 
    **/
    distinct?: Enumerable<BoardScalarFieldEnum>
  }

  /**
   * Board: findFirst
   */
  export interface BoardFindFirstArgs extends BoardFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     * 
    **/
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Boards to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board create
   */
  export type BoardCreateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to create a Board.
     * 
    **/
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs = {
    /**
     * The data used to create many Boards.
     * 
    **/
    data: Enumerable<BoardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to update a Board.
     * 
    **/
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs = {
    /**
     * The data used to update Boards.
     * 
    **/
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The filter to search for the Board to update in case it exists.
     * 
    **/
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     * 
    **/
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter which Board to delete.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs = {
    /**
     * Filter which Boards to delete
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board without action
   */
  export type BoardArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
  }



  /**
   * Model BoardImage
   */


  export type AggregateBoardImage = {
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  export type BoardImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    isThumb: number
    boardId: number
    _all: number
  }


  export type BoardImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
    _all?: true
  }

  export type BoardImageAggregateArgs = {
    /**
     * Filter which BoardImage to aggregate.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardImages
    **/
    _count?: true | BoardImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardImageMaxAggregateInputType
  }

  export type GetBoardImageAggregateType<T extends BoardImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardImage[P]>
      : GetScalarType<T[P], AggregateBoardImage[P]>
  }




  export type BoardImageGroupByArgs = {
    where?: BoardImageWhereInput
    orderBy?: Enumerable<BoardImageOrderByWithAggregationInput>
    by: Array<BoardImageScalarFieldEnum>
    having?: BoardImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardImageCountAggregateInputType | true
    _avg?: BoardImageAvgAggregateInputType
    _sum?: BoardImageSumAggregateInputType
    _min?: BoardImageMinAggregateInputType
    _max?: BoardImageMaxAggregateInputType
  }


  export type BoardImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    isThumb: boolean
    boardId: number
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  type GetBoardImageGroupByPayload<T extends BoardImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
            : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
        }
      >
    >


  export type BoardImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    isThumb?: boolean
    boardId?: boolean
    Board?: boolean | BoardArgs
  }


  export type BoardImageInclude = {
    Board?: boolean | BoardArgs
  } 

  export type BoardImageGetPayload<S extends boolean | null | undefined | BoardImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardImage :
    S extends undefined ? never :
    S extends { include: any } & (BoardImageArgs | BoardImageFindManyArgs)
    ? BoardImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardImageArgs | BoardImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :  P extends keyof BoardImage ? BoardImage[P] : never
  } 
      : BoardImage


  type BoardImageCountArgs = Merge<
    Omit<BoardImageFindManyArgs, 'select' | 'include'> & {
      select?: BoardImageCountAggregateInputType | true
    }
  >

  export interface BoardImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one BoardImage that matches the filter.
     * @param {BoardImageFindUniqueArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardImage'> extends True ? Prisma__BoardImageClient<BoardImageGetPayload<T>> : Prisma__BoardImageClient<BoardImageGetPayload<T> | null, null>

    /**
     * Find one BoardImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardImageFindUniqueOrThrowArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardImageFindUniqueOrThrowArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Find the first BoardImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindFirstArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardImage'> extends True ? Prisma__BoardImageClient<BoardImageGetPayload<T>> : Prisma__BoardImageClient<BoardImageGetPayload<T> | null, null>

    /**
     * Find the first BoardImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindFirstOrThrowArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardImageFindFirstOrThrowArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Find zero or more BoardImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardImages
     * const boardImages = await prisma.boardImage.findMany()
     * 
     * // Get first 10 BoardImages
     * const boardImages = await prisma.boardImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardImageWithIdOnly = await prisma.boardImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardImageFindManyArgs>(
      args?: SelectSubset<T, BoardImageFindManyArgs>
    ): PrismaPromise<Array<BoardImageGetPayload<T>>>

    /**
     * Create a BoardImage.
     * @param {BoardImageCreateArgs} args - Arguments to create a BoardImage.
     * @example
     * // Create one BoardImage
     * const BoardImage = await prisma.boardImage.create({
     *   data: {
     *     // ... data to create a BoardImage
     *   }
     * })
     * 
    **/
    create<T extends BoardImageCreateArgs>(
      args: SelectSubset<T, BoardImageCreateArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Create many BoardImages.
     *     @param {BoardImageCreateManyArgs} args - Arguments to create many BoardImages.
     *     @example
     *     // Create many BoardImages
     *     const boardImage = await prisma.boardImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardImageCreateManyArgs>(
      args?: SelectSubset<T, BoardImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardImage.
     * @param {BoardImageDeleteArgs} args - Arguments to delete one BoardImage.
     * @example
     * // Delete one BoardImage
     * const BoardImage = await prisma.boardImage.delete({
     *   where: {
     *     // ... filter to delete one BoardImage
     *   }
     * })
     * 
    **/
    delete<T extends BoardImageDeleteArgs>(
      args: SelectSubset<T, BoardImageDeleteArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Update one BoardImage.
     * @param {BoardImageUpdateArgs} args - Arguments to update one BoardImage.
     * @example
     * // Update one BoardImage
     * const boardImage = await prisma.boardImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardImageUpdateArgs>(
      args: SelectSubset<T, BoardImageUpdateArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Delete zero or more BoardImages.
     * @param {BoardImageDeleteManyArgs} args - Arguments to filter BoardImages to delete.
     * @example
     * // Delete a few BoardImages
     * const { count } = await prisma.boardImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardImageDeleteManyArgs>(
      args?: SelectSubset<T, BoardImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardImages
     * const boardImage = await prisma.boardImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardImageUpdateManyArgs>(
      args: SelectSubset<T, BoardImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardImage.
     * @param {BoardImageUpsertArgs} args - Arguments to update or create a BoardImage.
     * @example
     * // Update or create a BoardImage
     * const boardImage = await prisma.boardImage.upsert({
     *   create: {
     *     // ... data to create a BoardImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardImage we want to update
     *   }
     * })
    **/
    upsert<T extends BoardImageUpsertArgs>(
      args: SelectSubset<T, BoardImageUpsertArgs>
    ): Prisma__BoardImageClient<BoardImageGetPayload<T>>

    /**
     * Count the number of BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageCountArgs} args - Arguments to filter BoardImages to count.
     * @example
     * // Count the number of BoardImages
     * const count = await prisma.boardImage.count({
     *   where: {
     *     // ... the filter for the BoardImages we want to count
     *   }
     * })
    **/
    count<T extends BoardImageCountArgs>(
      args?: Subset<T, BoardImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardImageAggregateArgs>(args: Subset<T, BoardImageAggregateArgs>): PrismaPromise<GetBoardImageAggregateType<T>>

    /**
     * Group by BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardImageGroupByArgs['orderBy'] }
        : { orderBy?: BoardImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Board<T extends BoardArgs= {}>(args?: Subset<T, BoardArgs>): Prisma__BoardClient<BoardGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BoardImage base type for findUnique actions
   */
  export type BoardImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }

  /**
   * BoardImage: findUnique
   */
  export interface BoardImageFindUniqueArgs extends BoardImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardImage findUniqueOrThrow
   */
  export type BoardImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage base type for findFirst actions
   */
  export type BoardImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardImages.
     * 
    **/
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }

  /**
   * BoardImage: findFirst
   */
  export interface BoardImageFindFirstArgs extends BoardImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardImage findFirstOrThrow
   */
  export type BoardImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardImages.
     * 
    **/
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage findMany
   */
  export type BoardImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImages to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage create
   */
  export type BoardImageCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to create a BoardImage.
     * 
    **/
    data: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
  }


  /**
   * BoardImage createMany
   */
  export type BoardImageCreateManyArgs = {
    /**
     * The data used to create many BoardImages.
     * 
    **/
    data: Enumerable<BoardImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardImage update
   */
  export type BoardImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to update a BoardImage.
     * 
    **/
    data: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
    /**
     * Choose, which BoardImage to update.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage updateMany
   */
  export type BoardImageUpdateManyArgs = {
    /**
     * The data used to update BoardImages.
     * 
    **/
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyInput>
    /**
     * Filter which BoardImages to update
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage upsert
   */
  export type BoardImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The filter to search for the BoardImage to update in case it exists.
     * 
    **/
    where: BoardImageWhereUniqueInput
    /**
     * In case the BoardImage found by the `where` argument doesn't exist, create a new BoardImage with this data.
     * 
    **/
    create: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
    /**
     * In case the BoardImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
  }


  /**
   * BoardImage delete
   */
  export type BoardImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter which BoardImage to delete.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage deleteMany
   */
  export type BoardImageDeleteManyArgs = {
    /**
     * Filter which BoardImages to delete
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage without action
   */
  export type BoardImageArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
  }



  /**
   * Model BoardReply
   */


  export type AggregateBoardReply = {
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  export type BoardReplyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplySumAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplyMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    isDisable: number
    userId: number
    boardId: number
    boardReplyId: number
    boardType: number
    _all: number
  }


  export type BoardReplyAvgAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplySumAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
    _all?: true
  }

  export type BoardReplyAggregateArgs = {
    /**
     * Filter which BoardReply to aggregate.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardReplies
    **/
    _count?: true | BoardReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardReplyMaxAggregateInputType
  }

  export type GetBoardReplyAggregateType<T extends BoardReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardReply[P]>
      : GetScalarType<T[P], AggregateBoardReply[P]>
  }




  export type BoardReplyGroupByArgs = {
    where?: BoardReplyWhereInput
    orderBy?: Enumerable<BoardReplyOrderByWithAggregationInput>
    by: Array<BoardReplyScalarFieldEnum>
    having?: BoardReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardReplyCountAggregateInputType | true
    _avg?: BoardReplyAvgAggregateInputType
    _sum?: BoardReplySumAggregateInputType
    _min?: BoardReplyMinAggregateInputType
    _max?: BoardReplyMaxAggregateInputType
  }


  export type BoardReplyGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    content: string
    isDisable: boolean
    userId: number
    boardId: number
    boardReplyId: number | null
    boardType: BoardType
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  type GetBoardReplyGroupByPayload<T extends BoardReplyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
            : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
        }
      >
    >


  export type BoardReplySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    isDisable?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    boardId?: boolean
    Board?: boolean | BoardArgs
    boardReplyId?: boolean
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReplies?: boolean | BoardReplyFindManyArgs
    boardType?: boolean
    _count?: boolean | BoardReplyCountOutputTypeArgs
  }


  export type BoardReplyInclude = {
    User?: boolean | UserArgs
    Board?: boolean | BoardArgs
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReplies?: boolean | BoardReplyFindManyArgs
    _count?: boolean | BoardReplyCountOutputTypeArgs
  } 

  export type BoardReplyGetPayload<S extends boolean | null | undefined | BoardReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardReply :
    S extends undefined ? never :
    S extends { include: any } & (BoardReplyArgs | BoardReplyFindManyArgs)
    ? BoardReply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['include'][P]> | null :
        P extends 'BoardNestedReplies' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardReplyArgs | BoardReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['select'][P]> | null :
        P extends 'BoardNestedReplies' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BoardReply ? BoardReply[P] : never
  } 
      : BoardReply


  type BoardReplyCountArgs = Merge<
    Omit<BoardReplyFindManyArgs, 'select' | 'include'> & {
      select?: BoardReplyCountAggregateInputType | true
    }
  >

  export interface BoardReplyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one BoardReply that matches the filter.
     * @param {BoardReplyFindUniqueArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardReply'> extends True ? Prisma__BoardReplyClient<BoardReplyGetPayload<T>> : Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null, null>

    /**
     * Find one BoardReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardReplyFindUniqueOrThrowArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardReplyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardReplyFindUniqueOrThrowArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Find the first BoardReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindFirstArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardReply'> extends True ? Prisma__BoardReplyClient<BoardReplyGetPayload<T>> : Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null, null>

    /**
     * Find the first BoardReply that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindFirstOrThrowArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardReplyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardReplyFindFirstOrThrowArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Find zero or more BoardReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardReplies
     * const boardReplies = await prisma.boardReply.findMany()
     * 
     * // Get first 10 BoardReplies
     * const boardReplies = await prisma.boardReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardReplyWithIdOnly = await prisma.boardReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardReplyFindManyArgs>(
      args?: SelectSubset<T, BoardReplyFindManyArgs>
    ): PrismaPromise<Array<BoardReplyGetPayload<T>>>

    /**
     * Create a BoardReply.
     * @param {BoardReplyCreateArgs} args - Arguments to create a BoardReply.
     * @example
     * // Create one BoardReply
     * const BoardReply = await prisma.boardReply.create({
     *   data: {
     *     // ... data to create a BoardReply
     *   }
     * })
     * 
    **/
    create<T extends BoardReplyCreateArgs>(
      args: SelectSubset<T, BoardReplyCreateArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Create many BoardReplies.
     *     @param {BoardReplyCreateManyArgs} args - Arguments to create many BoardReplies.
     *     @example
     *     // Create many BoardReplies
     *     const boardReply = await prisma.boardReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardReplyCreateManyArgs>(
      args?: SelectSubset<T, BoardReplyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardReply.
     * @param {BoardReplyDeleteArgs} args - Arguments to delete one BoardReply.
     * @example
     * // Delete one BoardReply
     * const BoardReply = await prisma.boardReply.delete({
     *   where: {
     *     // ... filter to delete one BoardReply
     *   }
     * })
     * 
    **/
    delete<T extends BoardReplyDeleteArgs>(
      args: SelectSubset<T, BoardReplyDeleteArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Update one BoardReply.
     * @param {BoardReplyUpdateArgs} args - Arguments to update one BoardReply.
     * @example
     * // Update one BoardReply
     * const boardReply = await prisma.boardReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardReplyUpdateArgs>(
      args: SelectSubset<T, BoardReplyUpdateArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Delete zero or more BoardReplies.
     * @param {BoardReplyDeleteManyArgs} args - Arguments to filter BoardReplies to delete.
     * @example
     * // Delete a few BoardReplies
     * const { count } = await prisma.boardReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardReplyDeleteManyArgs>(
      args?: SelectSubset<T, BoardReplyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardReplies
     * const boardReply = await prisma.boardReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardReplyUpdateManyArgs>(
      args: SelectSubset<T, BoardReplyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardReply.
     * @param {BoardReplyUpsertArgs} args - Arguments to update or create a BoardReply.
     * @example
     * // Update or create a BoardReply
     * const boardReply = await prisma.boardReply.upsert({
     *   create: {
     *     // ... data to create a BoardReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardReply we want to update
     *   }
     * })
    **/
    upsert<T extends BoardReplyUpsertArgs>(
      args: SelectSubset<T, BoardReplyUpsertArgs>
    ): Prisma__BoardReplyClient<BoardReplyGetPayload<T>>

    /**
     * Count the number of BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyCountArgs} args - Arguments to filter BoardReplies to count.
     * @example
     * // Count the number of BoardReplies
     * const count = await prisma.boardReply.count({
     *   where: {
     *     // ... the filter for the BoardReplies we want to count
     *   }
     * })
    **/
    count<T extends BoardReplyCountArgs>(
      args?: Subset<T, BoardReplyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardReplyAggregateArgs>(args: Subset<T, BoardReplyAggregateArgs>): PrismaPromise<GetBoardReplyAggregateType<T>>

    /**
     * Group by BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardReplyGroupByArgs['orderBy'] }
        : { orderBy?: BoardReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardReplyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardReplyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Board<T extends BoardArgs= {}>(args?: Subset<T, BoardArgs>): Prisma__BoardClient<BoardGetPayload<T> | Null>;

    BoardReply<T extends BoardReplyArgs= {}>(args?: Subset<T, BoardReplyArgs>): Prisma__BoardReplyClient<BoardReplyGetPayload<T> | Null>;

    BoardNestedReplies<T extends BoardReplyFindManyArgs= {}>(args?: Subset<T, BoardReplyFindManyArgs>): PrismaPromise<Array<BoardReplyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BoardReply base type for findUnique actions
   */
  export type BoardReplyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }

  /**
   * BoardReply: findUnique
   */
  export interface BoardReplyFindUniqueArgs extends BoardReplyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardReply findUniqueOrThrow
   */
  export type BoardReplyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply base type for findFirst actions
   */
  export type BoardReplyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardReplies.
     * 
    **/
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }

  /**
   * BoardReply: findFirst
   */
  export interface BoardReplyFindFirstArgs extends BoardReplyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardReply findFirstOrThrow
   */
  export type BoardReplyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardReplies.
     * 
    **/
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply findMany
   */
  export type BoardReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReplies to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply create
   */
  export type BoardReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to create a BoardReply.
     * 
    **/
    data: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
  }


  /**
   * BoardReply createMany
   */
  export type BoardReplyCreateManyArgs = {
    /**
     * The data used to create many BoardReplies.
     * 
    **/
    data: Enumerable<BoardReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardReply update
   */
  export type BoardReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to update a BoardReply.
     * 
    **/
    data: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
    /**
     * Choose, which BoardReply to update.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply updateMany
   */
  export type BoardReplyUpdateManyArgs = {
    /**
     * The data used to update BoardReplies.
     * 
    **/
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyInput>
    /**
     * Filter which BoardReplies to update
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply upsert
   */
  export type BoardReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The filter to search for the BoardReply to update in case it exists.
     * 
    **/
    where: BoardReplyWhereUniqueInput
    /**
     * In case the BoardReply found by the `where` argument doesn't exist, create a new BoardReply with this data.
     * 
    **/
    create: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
    /**
     * In case the BoardReply was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
  }


  /**
   * BoardReply delete
   */
  export type BoardReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter which BoardReply to delete.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply deleteMany
   */
  export type BoardReplyDeleteManyArgs = {
    /**
     * Filter which BoardReplies to delete
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply without action
   */
  export type BoardReplyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
  }



  /**
   * Model RegionCategory
   */


  export type AggregateRegionCategory = {
    _count: RegionCategoryCountAggregateOutputType | null
    _avg: RegionCategoryAvgAggregateOutputType | null
    _sum: RegionCategorySumAggregateOutputType | null
    _min: RegionCategoryMinAggregateOutputType | null
    _max: RegionCategoryMaxAggregateOutputType | null
  }

  export type RegionCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionCategorySumAggregateOutputType = {
    id: number | null
  }

  export type RegionCategoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    isDisable: boolean | null
    govermentType: GovermentType | null
  }

  export type RegionCategoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    isDisable: boolean | null
    govermentType: GovermentType | null
  }

  export type RegionCategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    isDisable: number
    govermentType: number
    _all: number
  }


  export type RegionCategoryAvgAggregateInputType = {
    id?: true
  }

  export type RegionCategorySumAggregateInputType = {
    id?: true
  }

  export type RegionCategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    isDisable?: true
    govermentType?: true
  }

  export type RegionCategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    isDisable?: true
    govermentType?: true
  }

  export type RegionCategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    isDisable?: true
    govermentType?: true
    _all?: true
  }

  export type RegionCategoryAggregateArgs = {
    /**
     * Filter which RegionCategory to aggregate.
     * 
    **/
    where?: RegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<RegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegionCategories
    **/
    _count?: true | RegionCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionCategoryMaxAggregateInputType
  }

  export type GetRegionCategoryAggregateType<T extends RegionCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRegionCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegionCategory[P]>
      : GetScalarType<T[P], AggregateRegionCategory[P]>
  }




  export type RegionCategoryGroupByArgs = {
    where?: RegionCategoryWhereInput
    orderBy?: Enumerable<RegionCategoryOrderByWithAggregationInput>
    by: Array<RegionCategoryScalarFieldEnum>
    having?: RegionCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCategoryCountAggregateInputType | true
    _avg?: RegionCategoryAvgAggregateInputType
    _sum?: RegionCategorySumAggregateInputType
    _min?: RegionCategoryMinAggregateInputType
    _max?: RegionCategoryMaxAggregateInputType
  }


  export type RegionCategoryGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    isDisable: boolean
    govermentType: GovermentType
    _count: RegionCategoryCountAggregateOutputType | null
    _avg: RegionCategoryAvgAggregateOutputType | null
    _sum: RegionCategorySumAggregateOutputType | null
    _min: RegionCategoryMinAggregateOutputType | null
    _max: RegionCategoryMaxAggregateOutputType | null
  }

  type GetRegionCategoryGroupByPayload<T extends RegionCategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RegionCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], RegionCategoryGroupByOutputType[P]>
        }
      >
    >


  export type RegionCategorySelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    isDisable?: boolean
    govermentType?: boolean
    CafeInfos?: boolean | CafeInfoFindManyArgs
    AncestorCategories?: boolean | ClosureRegionCategoryFindManyArgs
    DescendantCategories?: boolean | ClosureRegionCategoryFindManyArgs
    _count?: boolean | RegionCategoryCountOutputTypeArgs
  }


  export type RegionCategoryInclude = {
    CafeInfos?: boolean | CafeInfoFindManyArgs
    AncestorCategories?: boolean | ClosureRegionCategoryFindManyArgs
    DescendantCategories?: boolean | ClosureRegionCategoryFindManyArgs
    _count?: boolean | RegionCategoryCountOutputTypeArgs
  } 

  export type RegionCategoryGetPayload<S extends boolean | null | undefined | RegionCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RegionCategory :
    S extends undefined ? never :
    S extends { include: any } & (RegionCategoryArgs | RegionCategoryFindManyArgs)
    ? RegionCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeInfos' ? Array < CafeInfoGetPayload<S['include'][P]>>  :
        P extends 'AncestorCategories' ? Array < ClosureRegionCategoryGetPayload<S['include'][P]>>  :
        P extends 'DescendantCategories' ? Array < ClosureRegionCategoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? RegionCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RegionCategoryArgs | RegionCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeInfos' ? Array < CafeInfoGetPayload<S['select'][P]>>  :
        P extends 'AncestorCategories' ? Array < ClosureRegionCategoryGetPayload<S['select'][P]>>  :
        P extends 'DescendantCategories' ? Array < ClosureRegionCategoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? RegionCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RegionCategory ? RegionCategory[P] : never
  } 
      : RegionCategory


  type RegionCategoryCountArgs = Merge<
    Omit<RegionCategoryFindManyArgs, 'select' | 'include'> & {
      select?: RegionCategoryCountAggregateInputType | true
    }
  >

  export interface RegionCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RegionCategory that matches the filter.
     * @param {RegionCategoryFindUniqueArgs} args - Arguments to find a RegionCategory
     * @example
     * // Get one RegionCategory
     * const regionCategory = await prisma.regionCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegionCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RegionCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RegionCategory'> extends True ? Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>> : Prisma__RegionCategoryClient<RegionCategoryGetPayload<T> | null, null>

    /**
     * Find one RegionCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegionCategoryFindUniqueOrThrowArgs} args - Arguments to find a RegionCategory
     * @example
     * // Get one RegionCategory
     * const regionCategory = await prisma.regionCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegionCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RegionCategoryFindUniqueOrThrowArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Find the first RegionCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryFindFirstArgs} args - Arguments to find a RegionCategory
     * @example
     * // Get one RegionCategory
     * const regionCategory = await prisma.regionCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegionCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RegionCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RegionCategory'> extends True ? Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>> : Prisma__RegionCategoryClient<RegionCategoryGetPayload<T> | null, null>

    /**
     * Find the first RegionCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryFindFirstOrThrowArgs} args - Arguments to find a RegionCategory
     * @example
     * // Get one RegionCategory
     * const regionCategory = await prisma.regionCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegionCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RegionCategoryFindFirstOrThrowArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Find zero or more RegionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegionCategories
     * const regionCategories = await prisma.regionCategory.findMany()
     * 
     * // Get first 10 RegionCategories
     * const regionCategories = await prisma.regionCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionCategoryWithIdOnly = await prisma.regionCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegionCategoryFindManyArgs>(
      args?: SelectSubset<T, RegionCategoryFindManyArgs>
    ): PrismaPromise<Array<RegionCategoryGetPayload<T>>>

    /**
     * Create a RegionCategory.
     * @param {RegionCategoryCreateArgs} args - Arguments to create a RegionCategory.
     * @example
     * // Create one RegionCategory
     * const RegionCategory = await prisma.regionCategory.create({
     *   data: {
     *     // ... data to create a RegionCategory
     *   }
     * })
     * 
    **/
    create<T extends RegionCategoryCreateArgs>(
      args: SelectSubset<T, RegionCategoryCreateArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Create many RegionCategories.
     *     @param {RegionCategoryCreateManyArgs} args - Arguments to create many RegionCategories.
     *     @example
     *     // Create many RegionCategories
     *     const regionCategory = await prisma.regionCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegionCategoryCreateManyArgs>(
      args?: SelectSubset<T, RegionCategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RegionCategory.
     * @param {RegionCategoryDeleteArgs} args - Arguments to delete one RegionCategory.
     * @example
     * // Delete one RegionCategory
     * const RegionCategory = await prisma.regionCategory.delete({
     *   where: {
     *     // ... filter to delete one RegionCategory
     *   }
     * })
     * 
    **/
    delete<T extends RegionCategoryDeleteArgs>(
      args: SelectSubset<T, RegionCategoryDeleteArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Update one RegionCategory.
     * @param {RegionCategoryUpdateArgs} args - Arguments to update one RegionCategory.
     * @example
     * // Update one RegionCategory
     * const regionCategory = await prisma.regionCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegionCategoryUpdateArgs>(
      args: SelectSubset<T, RegionCategoryUpdateArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Delete zero or more RegionCategories.
     * @param {RegionCategoryDeleteManyArgs} args - Arguments to filter RegionCategories to delete.
     * @example
     * // Delete a few RegionCategories
     * const { count } = await prisma.regionCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegionCategoryDeleteManyArgs>(
      args?: SelectSubset<T, RegionCategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegionCategories
     * const regionCategory = await prisma.regionCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegionCategoryUpdateManyArgs>(
      args: SelectSubset<T, RegionCategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RegionCategory.
     * @param {RegionCategoryUpsertArgs} args - Arguments to update or create a RegionCategory.
     * @example
     * // Update or create a RegionCategory
     * const regionCategory = await prisma.regionCategory.upsert({
     *   create: {
     *     // ... data to create a RegionCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegionCategory we want to update
     *   }
     * })
    **/
    upsert<T extends RegionCategoryUpsertArgs>(
      args: SelectSubset<T, RegionCategoryUpsertArgs>
    ): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T>>

    /**
     * Count the number of RegionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryCountArgs} args - Arguments to filter RegionCategories to count.
     * @example
     * // Count the number of RegionCategories
     * const count = await prisma.regionCategory.count({
     *   where: {
     *     // ... the filter for the RegionCategories we want to count
     *   }
     * })
    **/
    count<T extends RegionCategoryCountArgs>(
      args?: Subset<T, RegionCategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionCategoryAggregateArgs>(args: Subset<T, RegionCategoryAggregateArgs>): PrismaPromise<GetRegionCategoryAggregateType<T>>

    /**
     * Group by RegionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionCategoryGroupByArgs['orderBy'] }
        : { orderBy?: RegionCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RegionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RegionCategoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeInfos<T extends CafeInfoFindManyArgs= {}>(args?: Subset<T, CafeInfoFindManyArgs>): PrismaPromise<Array<CafeInfoGetPayload<T>>| Null>;

    AncestorCategories<T extends ClosureRegionCategoryFindManyArgs= {}>(args?: Subset<T, ClosureRegionCategoryFindManyArgs>): PrismaPromise<Array<ClosureRegionCategoryGetPayload<T>>| Null>;

    DescendantCategories<T extends ClosureRegionCategoryFindManyArgs= {}>(args?: Subset<T, ClosureRegionCategoryFindManyArgs>): PrismaPromise<Array<ClosureRegionCategoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RegionCategory base type for findUnique actions
   */
  export type RegionCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter, which RegionCategory to fetch.
     * 
    **/
    where: RegionCategoryWhereUniqueInput
  }

  /**
   * RegionCategory: findUnique
   */
  export interface RegionCategoryFindUniqueArgs extends RegionCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RegionCategory findUniqueOrThrow
   */
  export type RegionCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter, which RegionCategory to fetch.
     * 
    **/
    where: RegionCategoryWhereUniqueInput
  }


  /**
   * RegionCategory base type for findFirst actions
   */
  export type RegionCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter, which RegionCategory to fetch.
     * 
    **/
    where?: RegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<RegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionCategories.
     * 
    **/
    cursor?: RegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionCategories.
     * 
    **/
    distinct?: Enumerable<RegionCategoryScalarFieldEnum>
  }

  /**
   * RegionCategory: findFirst
   */
  export interface RegionCategoryFindFirstArgs extends RegionCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RegionCategory findFirstOrThrow
   */
  export type RegionCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter, which RegionCategory to fetch.
     * 
    **/
    where?: RegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<RegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionCategories.
     * 
    **/
    cursor?: RegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionCategories.
     * 
    **/
    distinct?: Enumerable<RegionCategoryScalarFieldEnum>
  }


  /**
   * RegionCategory findMany
   */
  export type RegionCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter, which RegionCategories to fetch.
     * 
    **/
    where?: RegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<RegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegionCategories.
     * 
    **/
    cursor?: RegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionCategories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RegionCategoryScalarFieldEnum>
  }


  /**
   * RegionCategory create
   */
  export type RegionCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * The data needed to create a RegionCategory.
     * 
    **/
    data: XOR<RegionCategoryCreateInput, RegionCategoryUncheckedCreateInput>
  }


  /**
   * RegionCategory createMany
   */
  export type RegionCategoryCreateManyArgs = {
    /**
     * The data used to create many RegionCategories.
     * 
    **/
    data: Enumerable<RegionCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RegionCategory update
   */
  export type RegionCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * The data needed to update a RegionCategory.
     * 
    **/
    data: XOR<RegionCategoryUpdateInput, RegionCategoryUncheckedUpdateInput>
    /**
     * Choose, which RegionCategory to update.
     * 
    **/
    where: RegionCategoryWhereUniqueInput
  }


  /**
   * RegionCategory updateMany
   */
  export type RegionCategoryUpdateManyArgs = {
    /**
     * The data used to update RegionCategories.
     * 
    **/
    data: XOR<RegionCategoryUpdateManyMutationInput, RegionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RegionCategories to update
     * 
    **/
    where?: RegionCategoryWhereInput
  }


  /**
   * RegionCategory upsert
   */
  export type RegionCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * The filter to search for the RegionCategory to update in case it exists.
     * 
    **/
    where: RegionCategoryWhereUniqueInput
    /**
     * In case the RegionCategory found by the `where` argument doesn't exist, create a new RegionCategory with this data.
     * 
    **/
    create: XOR<RegionCategoryCreateInput, RegionCategoryUncheckedCreateInput>
    /**
     * In case the RegionCategory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RegionCategoryUpdateInput, RegionCategoryUncheckedUpdateInput>
  }


  /**
   * RegionCategory delete
   */
  export type RegionCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
    /**
     * Filter which RegionCategory to delete.
     * 
    **/
    where: RegionCategoryWhereUniqueInput
  }


  /**
   * RegionCategory deleteMany
   */
  export type RegionCategoryDeleteManyArgs = {
    /**
     * Filter which RegionCategories to delete
     * 
    **/
    where?: RegionCategoryWhereInput
  }


  /**
   * RegionCategory without action
   */
  export type RegionCategoryArgs = {
    /**
     * Select specific fields to fetch from the RegionCategory
     * 
    **/
    select?: RegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegionCategoryInclude | null
  }



  /**
   * Model ClosureRegionCategory
   */


  export type AggregateClosureRegionCategory = {
    _count: ClosureRegionCategoryCountAggregateOutputType | null
    _avg: ClosureRegionCategoryAvgAggregateOutputType | null
    _sum: ClosureRegionCategorySumAggregateOutputType | null
    _min: ClosureRegionCategoryMinAggregateOutputType | null
    _max: ClosureRegionCategoryMaxAggregateOutputType | null
  }

  export type ClosureRegionCategoryAvgAggregateOutputType = {
    ancestor: number | null
    descendant: number | null
    depth: number | null
  }

  export type ClosureRegionCategorySumAggregateOutputType = {
    ancestor: number | null
    descendant: number | null
    depth: number | null
  }

  export type ClosureRegionCategoryMinAggregateOutputType = {
    ancestor: number | null
    descendant: number | null
    depth: number | null
  }

  export type ClosureRegionCategoryMaxAggregateOutputType = {
    ancestor: number | null
    descendant: number | null
    depth: number | null
  }

  export type ClosureRegionCategoryCountAggregateOutputType = {
    ancestor: number
    descendant: number
    depth: number
    _all: number
  }


  export type ClosureRegionCategoryAvgAggregateInputType = {
    ancestor?: true
    descendant?: true
    depth?: true
  }

  export type ClosureRegionCategorySumAggregateInputType = {
    ancestor?: true
    descendant?: true
    depth?: true
  }

  export type ClosureRegionCategoryMinAggregateInputType = {
    ancestor?: true
    descendant?: true
    depth?: true
  }

  export type ClosureRegionCategoryMaxAggregateInputType = {
    ancestor?: true
    descendant?: true
    depth?: true
  }

  export type ClosureRegionCategoryCountAggregateInputType = {
    ancestor?: true
    descendant?: true
    depth?: true
    _all?: true
  }

  export type ClosureRegionCategoryAggregateArgs = {
    /**
     * Filter which ClosureRegionCategory to aggregate.
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosureRegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ClosureRegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClosureRegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosureRegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosureRegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClosureRegionCategories
    **/
    _count?: true | ClosureRegionCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClosureRegionCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClosureRegionCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClosureRegionCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClosureRegionCategoryMaxAggregateInputType
  }

  export type GetClosureRegionCategoryAggregateType<T extends ClosureRegionCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateClosureRegionCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClosureRegionCategory[P]>
      : GetScalarType<T[P], AggregateClosureRegionCategory[P]>
  }




  export type ClosureRegionCategoryGroupByArgs = {
    where?: ClosureRegionCategoryWhereInput
    orderBy?: Enumerable<ClosureRegionCategoryOrderByWithAggregationInput>
    by: Array<ClosureRegionCategoryScalarFieldEnum>
    having?: ClosureRegionCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClosureRegionCategoryCountAggregateInputType | true
    _avg?: ClosureRegionCategoryAvgAggregateInputType
    _sum?: ClosureRegionCategorySumAggregateInputType
    _min?: ClosureRegionCategoryMinAggregateInputType
    _max?: ClosureRegionCategoryMaxAggregateInputType
  }


  export type ClosureRegionCategoryGroupByOutputType = {
    ancestor: number
    descendant: number
    depth: number
    _count: ClosureRegionCategoryCountAggregateOutputType | null
    _avg: ClosureRegionCategoryAvgAggregateOutputType | null
    _sum: ClosureRegionCategorySumAggregateOutputType | null
    _min: ClosureRegionCategoryMinAggregateOutputType | null
    _max: ClosureRegionCategoryMaxAggregateOutputType | null
  }

  type GetClosureRegionCategoryGroupByPayload<T extends ClosureRegionCategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClosureRegionCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClosureRegionCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClosureRegionCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ClosureRegionCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ClosureRegionCategorySelect = {
    ancestor?: boolean
    descendant?: boolean
    depth?: boolean
    AncestorCategory?: boolean | RegionCategoryArgs
    DescendantCategory?: boolean | RegionCategoryArgs
  }


  export type ClosureRegionCategoryInclude = {
    AncestorCategory?: boolean | RegionCategoryArgs
    DescendantCategory?: boolean | RegionCategoryArgs
  } 

  export type ClosureRegionCategoryGetPayload<S extends boolean | null | undefined | ClosureRegionCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClosureRegionCategory :
    S extends undefined ? never :
    S extends { include: any } & (ClosureRegionCategoryArgs | ClosureRegionCategoryFindManyArgs)
    ? ClosureRegionCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'AncestorCategory' ? RegionCategoryGetPayload<S['include'][P]> :
        P extends 'DescendantCategory' ? RegionCategoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClosureRegionCategoryArgs | ClosureRegionCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'AncestorCategory' ? RegionCategoryGetPayload<S['select'][P]> :
        P extends 'DescendantCategory' ? RegionCategoryGetPayload<S['select'][P]> :  P extends keyof ClosureRegionCategory ? ClosureRegionCategory[P] : never
  } 
      : ClosureRegionCategory


  type ClosureRegionCategoryCountArgs = Merge<
    Omit<ClosureRegionCategoryFindManyArgs, 'select' | 'include'> & {
      select?: ClosureRegionCategoryCountAggregateInputType | true
    }
  >

  export interface ClosureRegionCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ClosureRegionCategory that matches the filter.
     * @param {ClosureRegionCategoryFindUniqueArgs} args - Arguments to find a ClosureRegionCategory
     * @example
     * // Get one ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClosureRegionCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClosureRegionCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClosureRegionCategory'> extends True ? Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>> : Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T> | null, null>

    /**
     * Find one ClosureRegionCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClosureRegionCategoryFindUniqueOrThrowArgs} args - Arguments to find a ClosureRegionCategory
     * @example
     * // Get one ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClosureRegionCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClosureRegionCategoryFindUniqueOrThrowArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Find the first ClosureRegionCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryFindFirstArgs} args - Arguments to find a ClosureRegionCategory
     * @example
     * // Get one ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClosureRegionCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClosureRegionCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClosureRegionCategory'> extends True ? Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>> : Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T> | null, null>

    /**
     * Find the first ClosureRegionCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryFindFirstOrThrowArgs} args - Arguments to find a ClosureRegionCategory
     * @example
     * // Get one ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClosureRegionCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClosureRegionCategoryFindFirstOrThrowArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Find zero or more ClosureRegionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClosureRegionCategories
     * const closureRegionCategories = await prisma.closureRegionCategory.findMany()
     * 
     * // Get first 10 ClosureRegionCategories
     * const closureRegionCategories = await prisma.closureRegionCategory.findMany({ take: 10 })
     * 
     * // Only select the `ancestor`
     * const closureRegionCategoryWithAncestorOnly = await prisma.closureRegionCategory.findMany({ select: { ancestor: true } })
     * 
    **/
    findMany<T extends ClosureRegionCategoryFindManyArgs>(
      args?: SelectSubset<T, ClosureRegionCategoryFindManyArgs>
    ): PrismaPromise<Array<ClosureRegionCategoryGetPayload<T>>>

    /**
     * Create a ClosureRegionCategory.
     * @param {ClosureRegionCategoryCreateArgs} args - Arguments to create a ClosureRegionCategory.
     * @example
     * // Create one ClosureRegionCategory
     * const ClosureRegionCategory = await prisma.closureRegionCategory.create({
     *   data: {
     *     // ... data to create a ClosureRegionCategory
     *   }
     * })
     * 
    **/
    create<T extends ClosureRegionCategoryCreateArgs>(
      args: SelectSubset<T, ClosureRegionCategoryCreateArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Create many ClosureRegionCategories.
     *     @param {ClosureRegionCategoryCreateManyArgs} args - Arguments to create many ClosureRegionCategories.
     *     @example
     *     // Create many ClosureRegionCategories
     *     const closureRegionCategory = await prisma.closureRegionCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClosureRegionCategoryCreateManyArgs>(
      args?: SelectSubset<T, ClosureRegionCategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClosureRegionCategory.
     * @param {ClosureRegionCategoryDeleteArgs} args - Arguments to delete one ClosureRegionCategory.
     * @example
     * // Delete one ClosureRegionCategory
     * const ClosureRegionCategory = await prisma.closureRegionCategory.delete({
     *   where: {
     *     // ... filter to delete one ClosureRegionCategory
     *   }
     * })
     * 
    **/
    delete<T extends ClosureRegionCategoryDeleteArgs>(
      args: SelectSubset<T, ClosureRegionCategoryDeleteArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Update one ClosureRegionCategory.
     * @param {ClosureRegionCategoryUpdateArgs} args - Arguments to update one ClosureRegionCategory.
     * @example
     * // Update one ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClosureRegionCategoryUpdateArgs>(
      args: SelectSubset<T, ClosureRegionCategoryUpdateArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Delete zero or more ClosureRegionCategories.
     * @param {ClosureRegionCategoryDeleteManyArgs} args - Arguments to filter ClosureRegionCategories to delete.
     * @example
     * // Delete a few ClosureRegionCategories
     * const { count } = await prisma.closureRegionCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClosureRegionCategoryDeleteManyArgs>(
      args?: SelectSubset<T, ClosureRegionCategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClosureRegionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClosureRegionCategories
     * const closureRegionCategory = await prisma.closureRegionCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClosureRegionCategoryUpdateManyArgs>(
      args: SelectSubset<T, ClosureRegionCategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClosureRegionCategory.
     * @param {ClosureRegionCategoryUpsertArgs} args - Arguments to update or create a ClosureRegionCategory.
     * @example
     * // Update or create a ClosureRegionCategory
     * const closureRegionCategory = await prisma.closureRegionCategory.upsert({
     *   create: {
     *     // ... data to create a ClosureRegionCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClosureRegionCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ClosureRegionCategoryUpsertArgs>(
      args: SelectSubset<T, ClosureRegionCategoryUpsertArgs>
    ): Prisma__ClosureRegionCategoryClient<ClosureRegionCategoryGetPayload<T>>

    /**
     * Count the number of ClosureRegionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryCountArgs} args - Arguments to filter ClosureRegionCategories to count.
     * @example
     * // Count the number of ClosureRegionCategories
     * const count = await prisma.closureRegionCategory.count({
     *   where: {
     *     // ... the filter for the ClosureRegionCategories we want to count
     *   }
     * })
    **/
    count<T extends ClosureRegionCategoryCountArgs>(
      args?: Subset<T, ClosureRegionCategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClosureRegionCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClosureRegionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClosureRegionCategoryAggregateArgs>(args: Subset<T, ClosureRegionCategoryAggregateArgs>): PrismaPromise<GetClosureRegionCategoryAggregateType<T>>

    /**
     * Group by ClosureRegionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClosureRegionCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClosureRegionCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClosureRegionCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ClosureRegionCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClosureRegionCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClosureRegionCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ClosureRegionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClosureRegionCategoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    AncestorCategory<T extends RegionCategoryArgs= {}>(args?: Subset<T, RegionCategoryArgs>): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T> | Null>;

    DescendantCategory<T extends RegionCategoryArgs= {}>(args?: Subset<T, RegionCategoryArgs>): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ClosureRegionCategory base type for findUnique actions
   */
  export type ClosureRegionCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter, which ClosureRegionCategory to fetch.
     * 
    **/
    where: ClosureRegionCategoryWhereUniqueInput
  }

  /**
   * ClosureRegionCategory: findUnique
   */
  export interface ClosureRegionCategoryFindUniqueArgs extends ClosureRegionCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClosureRegionCategory findUniqueOrThrow
   */
  export type ClosureRegionCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter, which ClosureRegionCategory to fetch.
     * 
    **/
    where: ClosureRegionCategoryWhereUniqueInput
  }


  /**
   * ClosureRegionCategory base type for findFirst actions
   */
  export type ClosureRegionCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter, which ClosureRegionCategory to fetch.
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosureRegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ClosureRegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosureRegionCategories.
     * 
    **/
    cursor?: ClosureRegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosureRegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosureRegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosureRegionCategories.
     * 
    **/
    distinct?: Enumerable<ClosureRegionCategoryScalarFieldEnum>
  }

  /**
   * ClosureRegionCategory: findFirst
   */
  export interface ClosureRegionCategoryFindFirstArgs extends ClosureRegionCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClosureRegionCategory findFirstOrThrow
   */
  export type ClosureRegionCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter, which ClosureRegionCategory to fetch.
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosureRegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ClosureRegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClosureRegionCategories.
     * 
    **/
    cursor?: ClosureRegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosureRegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosureRegionCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClosureRegionCategories.
     * 
    **/
    distinct?: Enumerable<ClosureRegionCategoryScalarFieldEnum>
  }


  /**
   * ClosureRegionCategory findMany
   */
  export type ClosureRegionCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter, which ClosureRegionCategories to fetch.
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClosureRegionCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<ClosureRegionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClosureRegionCategories.
     * 
    **/
    cursor?: ClosureRegionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClosureRegionCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClosureRegionCategories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClosureRegionCategoryScalarFieldEnum>
  }


  /**
   * ClosureRegionCategory create
   */
  export type ClosureRegionCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * The data needed to create a ClosureRegionCategory.
     * 
    **/
    data: XOR<ClosureRegionCategoryCreateInput, ClosureRegionCategoryUncheckedCreateInput>
  }


  /**
   * ClosureRegionCategory createMany
   */
  export type ClosureRegionCategoryCreateManyArgs = {
    /**
     * The data used to create many ClosureRegionCategories.
     * 
    **/
    data: Enumerable<ClosureRegionCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClosureRegionCategory update
   */
  export type ClosureRegionCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * The data needed to update a ClosureRegionCategory.
     * 
    **/
    data: XOR<ClosureRegionCategoryUpdateInput, ClosureRegionCategoryUncheckedUpdateInput>
    /**
     * Choose, which ClosureRegionCategory to update.
     * 
    **/
    where: ClosureRegionCategoryWhereUniqueInput
  }


  /**
   * ClosureRegionCategory updateMany
   */
  export type ClosureRegionCategoryUpdateManyArgs = {
    /**
     * The data used to update ClosureRegionCategories.
     * 
    **/
    data: XOR<ClosureRegionCategoryUpdateManyMutationInput, ClosureRegionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ClosureRegionCategories to update
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
  }


  /**
   * ClosureRegionCategory upsert
   */
  export type ClosureRegionCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * The filter to search for the ClosureRegionCategory to update in case it exists.
     * 
    **/
    where: ClosureRegionCategoryWhereUniqueInput
    /**
     * In case the ClosureRegionCategory found by the `where` argument doesn't exist, create a new ClosureRegionCategory with this data.
     * 
    **/
    create: XOR<ClosureRegionCategoryCreateInput, ClosureRegionCategoryUncheckedCreateInput>
    /**
     * In case the ClosureRegionCategory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClosureRegionCategoryUpdateInput, ClosureRegionCategoryUncheckedUpdateInput>
  }


  /**
   * ClosureRegionCategory delete
   */
  export type ClosureRegionCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
    /**
     * Filter which ClosureRegionCategory to delete.
     * 
    **/
    where: ClosureRegionCategoryWhereUniqueInput
  }


  /**
   * ClosureRegionCategory deleteMany
   */
  export type ClosureRegionCategoryDeleteManyArgs = {
    /**
     * Filter which ClosureRegionCategories to delete
     * 
    **/
    where?: ClosureRegionCategoryWhereInput
  }


  /**
   * ClosureRegionCategory without action
   */
  export type ClosureRegionCategoryArgs = {
    /**
     * Select specific fields to fetch from the ClosureRegionCategory
     * 
    **/
    select?: ClosureRegionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClosureRegionCategoryInclude | null
  }



  /**
   * Model CafeInfo
   */


  export type AggregateCafeInfo = {
    _count: CafeInfoCountAggregateOutputType | null
    _avg: CafeInfoAvgAggregateOutputType | null
    _sum: CafeInfoSumAggregateOutputType | null
    _min: CafeInfoMinAggregateOutputType | null
    _max: CafeInfoMaxAggregateOutputType | null
  }

  export type CafeInfoAvgAggregateOutputType = {
    id: number | null
    regionCategoryId: number | null
  }

  export type CafeInfoSumAggregateOutputType = {
    id: number | null
    regionCategoryId: number | null
  }

  export type CafeInfoMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    isDisable: boolean | null
    name: string | null
    regionCategoryId: number | null
    address: string | null
    directions: string | null
    businessNumber: string | null
    ceoName: string | null
  }

  export type CafeInfoMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    isDisable: boolean | null
    name: string | null
    regionCategoryId: number | null
    address: string | null
    directions: string | null
    businessNumber: string | null
    ceoName: string | null
  }

  export type CafeInfoCountAggregateOutputType = {
    id: number
    createdAt: number
    isDisable: number
    name: number
    regionCategoryId: number
    address: number
    directions: number
    businessNumber: number
    ceoName: number
    _all: number
  }


  export type CafeInfoAvgAggregateInputType = {
    id?: true
    regionCategoryId?: true
  }

  export type CafeInfoSumAggregateInputType = {
    id?: true
    regionCategoryId?: true
  }

  export type CafeInfoMinAggregateInputType = {
    id?: true
    createdAt?: true
    isDisable?: true
    name?: true
    regionCategoryId?: true
    address?: true
    directions?: true
    businessNumber?: true
    ceoName?: true
  }

  export type CafeInfoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    isDisable?: true
    name?: true
    regionCategoryId?: true
    address?: true
    directions?: true
    businessNumber?: true
    ceoName?: true
  }

  export type CafeInfoCountAggregateInputType = {
    id?: true
    createdAt?: true
    isDisable?: true
    name?: true
    regionCategoryId?: true
    address?: true
    directions?: true
    businessNumber?: true
    ceoName?: true
    _all?: true
  }

  export type CafeInfoAggregateArgs = {
    /**
     * Filter which CafeInfo to aggregate.
     * 
    **/
    where?: CafeInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeInfos
    **/
    _count?: true | CafeInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeInfoMaxAggregateInputType
  }

  export type GetCafeInfoAggregateType<T extends CafeInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeInfo[P]>
      : GetScalarType<T[P], AggregateCafeInfo[P]>
  }




  export type CafeInfoGroupByArgs = {
    where?: CafeInfoWhereInput
    orderBy?: Enumerable<CafeInfoOrderByWithAggregationInput>
    by: Array<CafeInfoScalarFieldEnum>
    having?: CafeInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeInfoCountAggregateInputType | true
    _avg?: CafeInfoAvgAggregateInputType
    _sum?: CafeInfoSumAggregateInputType
    _min?: CafeInfoMinAggregateInputType
    _max?: CafeInfoMaxAggregateInputType
  }


  export type CafeInfoGroupByOutputType = {
    id: number
    createdAt: Date
    isDisable: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    _count: CafeInfoCountAggregateOutputType | null
    _avg: CafeInfoAvgAggregateOutputType | null
    _sum: CafeInfoSumAggregateOutputType | null
    _min: CafeInfoMinAggregateOutputType | null
    _max: CafeInfoMaxAggregateOutputType | null
  }

  type GetCafeInfoGroupByPayload<T extends CafeInfoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CafeInfoGroupByOutputType[P]>
        }
      >
    >


  export type CafeInfoSelect = {
    id?: boolean
    createdAt?: boolean
    isDisable?: boolean
    name?: boolean
    regionCategoryId?: boolean
    RegionCategory?: boolean | RegionCategoryArgs
    address?: boolean
    directions?: boolean
    businessNumber?: boolean
    ceoName?: boolean
    CafeVirtualLinks?: boolean | CafeVirtualLinkFindManyArgs
    CafeThumbnailImages?: boolean | CafeThumbnailImageFindManyArgs
    CafeVirtualImages?: boolean | CafeVirtualImageFindManyArgs
    CafeRealImages?: boolean | CafeRealImageFindManyArgs
    _count?: boolean | CafeInfoCountOutputTypeArgs
  }


  export type CafeInfoInclude = {
    RegionCategory?: boolean | RegionCategoryArgs
    CafeVirtualLinks?: boolean | CafeVirtualLinkFindManyArgs
    CafeThumbnailImages?: boolean | CafeThumbnailImageFindManyArgs
    CafeVirtualImages?: boolean | CafeVirtualImageFindManyArgs
    CafeRealImages?: boolean | CafeRealImageFindManyArgs
    _count?: boolean | CafeInfoCountOutputTypeArgs
  } 

  export type CafeInfoGetPayload<S extends boolean | null | undefined | CafeInfoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeInfo :
    S extends undefined ? never :
    S extends { include: any } & (CafeInfoArgs | CafeInfoFindManyArgs)
    ? CafeInfo  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'RegionCategory' ? RegionCategoryGetPayload<S['include'][P]> :
        P extends 'CafeVirtualLinks' ? Array < CafeVirtualLinkGetPayload<S['include'][P]>>  :
        P extends 'CafeThumbnailImages' ? Array < CafeThumbnailImageGetPayload<S['include'][P]>>  :
        P extends 'CafeVirtualImages' ? Array < CafeVirtualImageGetPayload<S['include'][P]>>  :
        P extends 'CafeRealImages' ? Array < CafeRealImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? CafeInfoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CafeInfoArgs | CafeInfoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'RegionCategory' ? RegionCategoryGetPayload<S['select'][P]> :
        P extends 'CafeVirtualLinks' ? Array < CafeVirtualLinkGetPayload<S['select'][P]>>  :
        P extends 'CafeThumbnailImages' ? Array < CafeThumbnailImageGetPayload<S['select'][P]>>  :
        P extends 'CafeVirtualImages' ? Array < CafeVirtualImageGetPayload<S['select'][P]>>  :
        P extends 'CafeRealImages' ? Array < CafeRealImageGetPayload<S['select'][P]>>  :
        P extends '_count' ? CafeInfoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CafeInfo ? CafeInfo[P] : never
  } 
      : CafeInfo


  type CafeInfoCountArgs = Merge<
    Omit<CafeInfoFindManyArgs, 'select' | 'include'> & {
      select?: CafeInfoCountAggregateInputType | true
    }
  >

  export interface CafeInfoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeInfo that matches the filter.
     * @param {CafeInfoFindUniqueArgs} args - Arguments to find a CafeInfo
     * @example
     * // Get one CafeInfo
     * const cafeInfo = await prisma.cafeInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeInfo'> extends True ? Prisma__CafeInfoClient<CafeInfoGetPayload<T>> : Prisma__CafeInfoClient<CafeInfoGetPayload<T> | null, null>

    /**
     * Find one CafeInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeInfoFindUniqueOrThrowArgs} args - Arguments to find a CafeInfo
     * @example
     * // Get one CafeInfo
     * const cafeInfo = await prisma.cafeInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeInfoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeInfoFindUniqueOrThrowArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Find the first CafeInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoFindFirstArgs} args - Arguments to find a CafeInfo
     * @example
     * // Get one CafeInfo
     * const cafeInfo = await prisma.cafeInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeInfo'> extends True ? Prisma__CafeInfoClient<CafeInfoGetPayload<T>> : Prisma__CafeInfoClient<CafeInfoGetPayload<T> | null, null>

    /**
     * Find the first CafeInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoFindFirstOrThrowArgs} args - Arguments to find a CafeInfo
     * @example
     * // Get one CafeInfo
     * const cafeInfo = await prisma.cafeInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeInfoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeInfoFindFirstOrThrowArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Find zero or more CafeInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeInfos
     * const cafeInfos = await prisma.cafeInfo.findMany()
     * 
     * // Get first 10 CafeInfos
     * const cafeInfos = await prisma.cafeInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeInfoWithIdOnly = await prisma.cafeInfo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeInfoFindManyArgs>(
      args?: SelectSubset<T, CafeInfoFindManyArgs>
    ): PrismaPromise<Array<CafeInfoGetPayload<T>>>

    /**
     * Create a CafeInfo.
     * @param {CafeInfoCreateArgs} args - Arguments to create a CafeInfo.
     * @example
     * // Create one CafeInfo
     * const CafeInfo = await prisma.cafeInfo.create({
     *   data: {
     *     // ... data to create a CafeInfo
     *   }
     * })
     * 
    **/
    create<T extends CafeInfoCreateArgs>(
      args: SelectSubset<T, CafeInfoCreateArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Create many CafeInfos.
     *     @param {CafeInfoCreateManyArgs} args - Arguments to create many CafeInfos.
     *     @example
     *     // Create many CafeInfos
     *     const cafeInfo = await prisma.cafeInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeInfoCreateManyArgs>(
      args?: SelectSubset<T, CafeInfoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeInfo.
     * @param {CafeInfoDeleteArgs} args - Arguments to delete one CafeInfo.
     * @example
     * // Delete one CafeInfo
     * const CafeInfo = await prisma.cafeInfo.delete({
     *   where: {
     *     // ... filter to delete one CafeInfo
     *   }
     * })
     * 
    **/
    delete<T extends CafeInfoDeleteArgs>(
      args: SelectSubset<T, CafeInfoDeleteArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Update one CafeInfo.
     * @param {CafeInfoUpdateArgs} args - Arguments to update one CafeInfo.
     * @example
     * // Update one CafeInfo
     * const cafeInfo = await prisma.cafeInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeInfoUpdateArgs>(
      args: SelectSubset<T, CafeInfoUpdateArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Delete zero or more CafeInfos.
     * @param {CafeInfoDeleteManyArgs} args - Arguments to filter CafeInfos to delete.
     * @example
     * // Delete a few CafeInfos
     * const { count } = await prisma.cafeInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeInfoDeleteManyArgs>(
      args?: SelectSubset<T, CafeInfoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeInfos
     * const cafeInfo = await prisma.cafeInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeInfoUpdateManyArgs>(
      args: SelectSubset<T, CafeInfoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeInfo.
     * @param {CafeInfoUpsertArgs} args - Arguments to update or create a CafeInfo.
     * @example
     * // Update or create a CafeInfo
     * const cafeInfo = await prisma.cafeInfo.upsert({
     *   create: {
     *     // ... data to create a CafeInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeInfo we want to update
     *   }
     * })
    **/
    upsert<T extends CafeInfoUpsertArgs>(
      args: SelectSubset<T, CafeInfoUpsertArgs>
    ): Prisma__CafeInfoClient<CafeInfoGetPayload<T>>

    /**
     * Count the number of CafeInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoCountArgs} args - Arguments to filter CafeInfos to count.
     * @example
     * // Count the number of CafeInfos
     * const count = await prisma.cafeInfo.count({
     *   where: {
     *     // ... the filter for the CafeInfos we want to count
     *   }
     * })
    **/
    count<T extends CafeInfoCountArgs>(
      args?: Subset<T, CafeInfoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeInfoAggregateArgs>(args: Subset<T, CafeInfoAggregateArgs>): PrismaPromise<GetCafeInfoAggregateType<T>>

    /**
     * Group by CafeInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeInfoGroupByArgs['orderBy'] }
        : { orderBy?: CafeInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeInfoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeInfoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    RegionCategory<T extends RegionCategoryArgs= {}>(args?: Subset<T, RegionCategoryArgs>): Prisma__RegionCategoryClient<RegionCategoryGetPayload<T> | Null>;

    CafeVirtualLinks<T extends CafeVirtualLinkFindManyArgs= {}>(args?: Subset<T, CafeVirtualLinkFindManyArgs>): PrismaPromise<Array<CafeVirtualLinkGetPayload<T>>| Null>;

    CafeThumbnailImages<T extends CafeThumbnailImageFindManyArgs= {}>(args?: Subset<T, CafeThumbnailImageFindManyArgs>): PrismaPromise<Array<CafeThumbnailImageGetPayload<T>>| Null>;

    CafeVirtualImages<T extends CafeVirtualImageFindManyArgs= {}>(args?: Subset<T, CafeVirtualImageFindManyArgs>): PrismaPromise<Array<CafeVirtualImageGetPayload<T>>| Null>;

    CafeRealImages<T extends CafeRealImageFindManyArgs= {}>(args?: Subset<T, CafeRealImageFindManyArgs>): PrismaPromise<Array<CafeRealImageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeInfo base type for findUnique actions
   */
  export type CafeInfoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter, which CafeInfo to fetch.
     * 
    **/
    where: CafeInfoWhereUniqueInput
  }

  /**
   * CafeInfo: findUnique
   */
  export interface CafeInfoFindUniqueArgs extends CafeInfoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeInfo findUniqueOrThrow
   */
  export type CafeInfoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter, which CafeInfo to fetch.
     * 
    **/
    where: CafeInfoWhereUniqueInput
  }


  /**
   * CafeInfo base type for findFirst actions
   */
  export type CafeInfoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter, which CafeInfo to fetch.
     * 
    **/
    where?: CafeInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeInfos.
     * 
    **/
    cursor?: CafeInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeInfos.
     * 
    **/
    distinct?: Enumerable<CafeInfoScalarFieldEnum>
  }

  /**
   * CafeInfo: findFirst
   */
  export interface CafeInfoFindFirstArgs extends CafeInfoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeInfo findFirstOrThrow
   */
  export type CafeInfoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter, which CafeInfo to fetch.
     * 
    **/
    where?: CafeInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeInfos.
     * 
    **/
    cursor?: CafeInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeInfos.
     * 
    **/
    distinct?: Enumerable<CafeInfoScalarFieldEnum>
  }


  /**
   * CafeInfo findMany
   */
  export type CafeInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter, which CafeInfos to fetch.
     * 
    **/
    where?: CafeInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeInfos.
     * 
    **/
    cursor?: CafeInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeInfos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeInfoScalarFieldEnum>
  }


  /**
   * CafeInfo create
   */
  export type CafeInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * The data needed to create a CafeInfo.
     * 
    **/
    data: XOR<CafeInfoCreateInput, CafeInfoUncheckedCreateInput>
  }


  /**
   * CafeInfo createMany
   */
  export type CafeInfoCreateManyArgs = {
    /**
     * The data used to create many CafeInfos.
     * 
    **/
    data: Enumerable<CafeInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeInfo update
   */
  export type CafeInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * The data needed to update a CafeInfo.
     * 
    **/
    data: XOR<CafeInfoUpdateInput, CafeInfoUncheckedUpdateInput>
    /**
     * Choose, which CafeInfo to update.
     * 
    **/
    where: CafeInfoWhereUniqueInput
  }


  /**
   * CafeInfo updateMany
   */
  export type CafeInfoUpdateManyArgs = {
    /**
     * The data used to update CafeInfos.
     * 
    **/
    data: XOR<CafeInfoUpdateManyMutationInput, CafeInfoUncheckedUpdateManyInput>
    /**
     * Filter which CafeInfos to update
     * 
    **/
    where?: CafeInfoWhereInput
  }


  /**
   * CafeInfo upsert
   */
  export type CafeInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * The filter to search for the CafeInfo to update in case it exists.
     * 
    **/
    where: CafeInfoWhereUniqueInput
    /**
     * In case the CafeInfo found by the `where` argument doesn't exist, create a new CafeInfo with this data.
     * 
    **/
    create: XOR<CafeInfoCreateInput, CafeInfoUncheckedCreateInput>
    /**
     * In case the CafeInfo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeInfoUpdateInput, CafeInfoUncheckedUpdateInput>
  }


  /**
   * CafeInfo delete
   */
  export type CafeInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
    /**
     * Filter which CafeInfo to delete.
     * 
    **/
    where: CafeInfoWhereUniqueInput
  }


  /**
   * CafeInfo deleteMany
   */
  export type CafeInfoDeleteManyArgs = {
    /**
     * Filter which CafeInfos to delete
     * 
    **/
    where?: CafeInfoWhereInput
  }


  /**
   * CafeInfo without action
   */
  export type CafeInfoArgs = {
    /**
     * Select specific fields to fetch from the CafeInfo
     * 
    **/
    select?: CafeInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeInfoInclude | null
  }



  /**
   * Model CafeThumbnailImage
   */


  export type AggregateCafeThumbnailImage = {
    _count: CafeThumbnailImageCountAggregateOutputType | null
    _avg: CafeThumbnailImageAvgAggregateOutputType | null
    _sum: CafeThumbnailImageSumAggregateOutputType | null
    _min: CafeThumbnailImageMinAggregateOutputType | null
    _max: CafeThumbnailImageMaxAggregateOutputType | null
  }

  export type CafeThumbnailImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeThumbnailImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeThumbnailImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeThumbnailImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeThumbnailImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    priority: number
    isDisable: number
    cafeInfoId: number
    _all: number
  }


  export type CafeThumbnailImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeThumbnailImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeThumbnailImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeThumbnailImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeThumbnailImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
    _all?: true
  }

  export type CafeThumbnailImageAggregateArgs = {
    /**
     * Filter which CafeThumbnailImage to aggregate.
     * 
    **/
    where?: CafeThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeThumbnailImages
    **/
    _count?: true | CafeThumbnailImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeThumbnailImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeThumbnailImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeThumbnailImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeThumbnailImageMaxAggregateInputType
  }

  export type GetCafeThumbnailImageAggregateType<T extends CafeThumbnailImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeThumbnailImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeThumbnailImage[P]>
      : GetScalarType<T[P], AggregateCafeThumbnailImage[P]>
  }




  export type CafeThumbnailImageGroupByArgs = {
    where?: CafeThumbnailImageWhereInput
    orderBy?: Enumerable<CafeThumbnailImageOrderByWithAggregationInput>
    by: Array<CafeThumbnailImageScalarFieldEnum>
    having?: CafeThumbnailImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeThumbnailImageCountAggregateInputType | true
    _avg?: CafeThumbnailImageAvgAggregateInputType
    _sum?: CafeThumbnailImageSumAggregateInputType
    _min?: CafeThumbnailImageMinAggregateInputType
    _max?: CafeThumbnailImageMaxAggregateInputType
  }


  export type CafeThumbnailImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    priority: number
    isDisable: boolean
    cafeInfoId: number
    _count: CafeThumbnailImageCountAggregateOutputType | null
    _avg: CafeThumbnailImageAvgAggregateOutputType | null
    _sum: CafeThumbnailImageSumAggregateOutputType | null
    _min: CafeThumbnailImageMinAggregateOutputType | null
    _max: CafeThumbnailImageMaxAggregateOutputType | null
  }

  type GetCafeThumbnailImageGroupByPayload<T extends CafeThumbnailImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeThumbnailImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeThumbnailImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeThumbnailImageGroupByOutputType[P]>
            : GetScalarType<T[P], CafeThumbnailImageGroupByOutputType[P]>
        }
      >
    >


  export type CafeThumbnailImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    priority?: boolean
    isDisable?: boolean
    cafeInfoId?: boolean
    CafeInfo?: boolean | CafeInfoArgs
  }


  export type CafeThumbnailImageInclude = {
    CafeInfo?: boolean | CafeInfoArgs
  } 

  export type CafeThumbnailImageGetPayload<S extends boolean | null | undefined | CafeThumbnailImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeThumbnailImage :
    S extends undefined ? never :
    S extends { include: any } & (CafeThumbnailImageArgs | CafeThumbnailImageFindManyArgs)
    ? CafeThumbnailImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CafeThumbnailImageArgs | CafeThumbnailImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['select'][P]> :  P extends keyof CafeThumbnailImage ? CafeThumbnailImage[P] : never
  } 
      : CafeThumbnailImage


  type CafeThumbnailImageCountArgs = Merge<
    Omit<CafeThumbnailImageFindManyArgs, 'select' | 'include'> & {
      select?: CafeThumbnailImageCountAggregateInputType | true
    }
  >

  export interface CafeThumbnailImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeThumbnailImage that matches the filter.
     * @param {CafeThumbnailImageFindUniqueArgs} args - Arguments to find a CafeThumbnailImage
     * @example
     * // Get one CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeThumbnailImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeThumbnailImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeThumbnailImage'> extends True ? Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>> : Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T> | null, null>

    /**
     * Find one CafeThumbnailImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeThumbnailImageFindUniqueOrThrowArgs} args - Arguments to find a CafeThumbnailImage
     * @example
     * // Get one CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeThumbnailImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeThumbnailImageFindUniqueOrThrowArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Find the first CafeThumbnailImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageFindFirstArgs} args - Arguments to find a CafeThumbnailImage
     * @example
     * // Get one CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeThumbnailImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeThumbnailImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeThumbnailImage'> extends True ? Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>> : Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T> | null, null>

    /**
     * Find the first CafeThumbnailImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageFindFirstOrThrowArgs} args - Arguments to find a CafeThumbnailImage
     * @example
     * // Get one CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeThumbnailImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeThumbnailImageFindFirstOrThrowArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Find zero or more CafeThumbnailImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeThumbnailImages
     * const cafeThumbnailImages = await prisma.cafeThumbnailImage.findMany()
     * 
     * // Get first 10 CafeThumbnailImages
     * const cafeThumbnailImages = await prisma.cafeThumbnailImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeThumbnailImageWithIdOnly = await prisma.cafeThumbnailImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeThumbnailImageFindManyArgs>(
      args?: SelectSubset<T, CafeThumbnailImageFindManyArgs>
    ): PrismaPromise<Array<CafeThumbnailImageGetPayload<T>>>

    /**
     * Create a CafeThumbnailImage.
     * @param {CafeThumbnailImageCreateArgs} args - Arguments to create a CafeThumbnailImage.
     * @example
     * // Create one CafeThumbnailImage
     * const CafeThumbnailImage = await prisma.cafeThumbnailImage.create({
     *   data: {
     *     // ... data to create a CafeThumbnailImage
     *   }
     * })
     * 
    **/
    create<T extends CafeThumbnailImageCreateArgs>(
      args: SelectSubset<T, CafeThumbnailImageCreateArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Create many CafeThumbnailImages.
     *     @param {CafeThumbnailImageCreateManyArgs} args - Arguments to create many CafeThumbnailImages.
     *     @example
     *     // Create many CafeThumbnailImages
     *     const cafeThumbnailImage = await prisma.cafeThumbnailImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeThumbnailImageCreateManyArgs>(
      args?: SelectSubset<T, CafeThumbnailImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeThumbnailImage.
     * @param {CafeThumbnailImageDeleteArgs} args - Arguments to delete one CafeThumbnailImage.
     * @example
     * // Delete one CafeThumbnailImage
     * const CafeThumbnailImage = await prisma.cafeThumbnailImage.delete({
     *   where: {
     *     // ... filter to delete one CafeThumbnailImage
     *   }
     * })
     * 
    **/
    delete<T extends CafeThumbnailImageDeleteArgs>(
      args: SelectSubset<T, CafeThumbnailImageDeleteArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Update one CafeThumbnailImage.
     * @param {CafeThumbnailImageUpdateArgs} args - Arguments to update one CafeThumbnailImage.
     * @example
     * // Update one CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeThumbnailImageUpdateArgs>(
      args: SelectSubset<T, CafeThumbnailImageUpdateArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Delete zero or more CafeThumbnailImages.
     * @param {CafeThumbnailImageDeleteManyArgs} args - Arguments to filter CafeThumbnailImages to delete.
     * @example
     * // Delete a few CafeThumbnailImages
     * const { count } = await prisma.cafeThumbnailImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeThumbnailImageDeleteManyArgs>(
      args?: SelectSubset<T, CafeThumbnailImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeThumbnailImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeThumbnailImages
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeThumbnailImageUpdateManyArgs>(
      args: SelectSubset<T, CafeThumbnailImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeThumbnailImage.
     * @param {CafeThumbnailImageUpsertArgs} args - Arguments to update or create a CafeThumbnailImage.
     * @example
     * // Update or create a CafeThumbnailImage
     * const cafeThumbnailImage = await prisma.cafeThumbnailImage.upsert({
     *   create: {
     *     // ... data to create a CafeThumbnailImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeThumbnailImage we want to update
     *   }
     * })
    **/
    upsert<T extends CafeThumbnailImageUpsertArgs>(
      args: SelectSubset<T, CafeThumbnailImageUpsertArgs>
    ): Prisma__CafeThumbnailImageClient<CafeThumbnailImageGetPayload<T>>

    /**
     * Count the number of CafeThumbnailImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageCountArgs} args - Arguments to filter CafeThumbnailImages to count.
     * @example
     * // Count the number of CafeThumbnailImages
     * const count = await prisma.cafeThumbnailImage.count({
     *   where: {
     *     // ... the filter for the CafeThumbnailImages we want to count
     *   }
     * })
    **/
    count<T extends CafeThumbnailImageCountArgs>(
      args?: Subset<T, CafeThumbnailImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeThumbnailImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeThumbnailImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeThumbnailImageAggregateArgs>(args: Subset<T, CafeThumbnailImageAggregateArgs>): PrismaPromise<GetCafeThumbnailImageAggregateType<T>>

    /**
     * Group by CafeThumbnailImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeThumbnailImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeThumbnailImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeThumbnailImageGroupByArgs['orderBy'] }
        : { orderBy?: CafeThumbnailImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeThumbnailImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeThumbnailImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeThumbnailImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeThumbnailImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeInfo<T extends CafeInfoArgs= {}>(args?: Subset<T, CafeInfoArgs>): Prisma__CafeInfoClient<CafeInfoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeThumbnailImage base type for findUnique actions
   */
  export type CafeThumbnailImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter, which CafeThumbnailImage to fetch.
     * 
    **/
    where: CafeThumbnailImageWhereUniqueInput
  }

  /**
   * CafeThumbnailImage: findUnique
   */
  export interface CafeThumbnailImageFindUniqueArgs extends CafeThumbnailImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeThumbnailImage findUniqueOrThrow
   */
  export type CafeThumbnailImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter, which CafeThumbnailImage to fetch.
     * 
    **/
    where: CafeThumbnailImageWhereUniqueInput
  }


  /**
   * CafeThumbnailImage base type for findFirst actions
   */
  export type CafeThumbnailImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter, which CafeThumbnailImage to fetch.
     * 
    **/
    where?: CafeThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeThumbnailImages.
     * 
    **/
    cursor?: CafeThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeThumbnailImages.
     * 
    **/
    distinct?: Enumerable<CafeThumbnailImageScalarFieldEnum>
  }

  /**
   * CafeThumbnailImage: findFirst
   */
  export interface CafeThumbnailImageFindFirstArgs extends CafeThumbnailImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeThumbnailImage findFirstOrThrow
   */
  export type CafeThumbnailImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter, which CafeThumbnailImage to fetch.
     * 
    **/
    where?: CafeThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeThumbnailImages.
     * 
    **/
    cursor?: CafeThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeThumbnailImages.
     * 
    **/
    distinct?: Enumerable<CafeThumbnailImageScalarFieldEnum>
  }


  /**
   * CafeThumbnailImage findMany
   */
  export type CafeThumbnailImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter, which CafeThumbnailImages to fetch.
     * 
    **/
    where?: CafeThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeThumbnailImages.
     * 
    **/
    cursor?: CafeThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeThumbnailImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeThumbnailImageScalarFieldEnum>
  }


  /**
   * CafeThumbnailImage create
   */
  export type CafeThumbnailImageCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * The data needed to create a CafeThumbnailImage.
     * 
    **/
    data: XOR<CafeThumbnailImageCreateInput, CafeThumbnailImageUncheckedCreateInput>
  }


  /**
   * CafeThumbnailImage createMany
   */
  export type CafeThumbnailImageCreateManyArgs = {
    /**
     * The data used to create many CafeThumbnailImages.
     * 
    **/
    data: Enumerable<CafeThumbnailImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeThumbnailImage update
   */
  export type CafeThumbnailImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * The data needed to update a CafeThumbnailImage.
     * 
    **/
    data: XOR<CafeThumbnailImageUpdateInput, CafeThumbnailImageUncheckedUpdateInput>
    /**
     * Choose, which CafeThumbnailImage to update.
     * 
    **/
    where: CafeThumbnailImageWhereUniqueInput
  }


  /**
   * CafeThumbnailImage updateMany
   */
  export type CafeThumbnailImageUpdateManyArgs = {
    /**
     * The data used to update CafeThumbnailImages.
     * 
    **/
    data: XOR<CafeThumbnailImageUpdateManyMutationInput, CafeThumbnailImageUncheckedUpdateManyInput>
    /**
     * Filter which CafeThumbnailImages to update
     * 
    **/
    where?: CafeThumbnailImageWhereInput
  }


  /**
   * CafeThumbnailImage upsert
   */
  export type CafeThumbnailImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * The filter to search for the CafeThumbnailImage to update in case it exists.
     * 
    **/
    where: CafeThumbnailImageWhereUniqueInput
    /**
     * In case the CafeThumbnailImage found by the `where` argument doesn't exist, create a new CafeThumbnailImage with this data.
     * 
    **/
    create: XOR<CafeThumbnailImageCreateInput, CafeThumbnailImageUncheckedCreateInput>
    /**
     * In case the CafeThumbnailImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeThumbnailImageUpdateInput, CafeThumbnailImageUncheckedUpdateInput>
  }


  /**
   * CafeThumbnailImage delete
   */
  export type CafeThumbnailImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
    /**
     * Filter which CafeThumbnailImage to delete.
     * 
    **/
    where: CafeThumbnailImageWhereUniqueInput
  }


  /**
   * CafeThumbnailImage deleteMany
   */
  export type CafeThumbnailImageDeleteManyArgs = {
    /**
     * Filter which CafeThumbnailImages to delete
     * 
    **/
    where?: CafeThumbnailImageWhereInput
  }


  /**
   * CafeThumbnailImage without action
   */
  export type CafeThumbnailImageArgs = {
    /**
     * Select specific fields to fetch from the CafeThumbnailImage
     * 
    **/
    select?: CafeThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeThumbnailImageInclude | null
  }



  /**
   * Model CafeVirtualImage
   */


  export type AggregateCafeVirtualImage = {
    _count: CafeVirtualImageCountAggregateOutputType | null
    _avg: CafeVirtualImageAvgAggregateOutputType | null
    _sum: CafeVirtualImageSumAggregateOutputType | null
    _min: CafeVirtualImageMinAggregateOutputType | null
    _max: CafeVirtualImageMaxAggregateOutputType | null
  }

  export type CafeVirtualImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeVirtualImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeVirtualImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeVirtualImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeVirtualImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    priority: number
    isDisable: number
    cafeInfoId: number
    _all: number
  }


  export type CafeVirtualImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeVirtualImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeVirtualImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeVirtualImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeVirtualImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
    _all?: true
  }

  export type CafeVirtualImageAggregateArgs = {
    /**
     * Filter which CafeVirtualImage to aggregate.
     * 
    **/
    where?: CafeVirtualImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeVirtualImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeVirtualImages
    **/
    _count?: true | CafeVirtualImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeVirtualImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeVirtualImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeVirtualImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeVirtualImageMaxAggregateInputType
  }

  export type GetCafeVirtualImageAggregateType<T extends CafeVirtualImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeVirtualImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeVirtualImage[P]>
      : GetScalarType<T[P], AggregateCafeVirtualImage[P]>
  }




  export type CafeVirtualImageGroupByArgs = {
    where?: CafeVirtualImageWhereInput
    orderBy?: Enumerable<CafeVirtualImageOrderByWithAggregationInput>
    by: Array<CafeVirtualImageScalarFieldEnum>
    having?: CafeVirtualImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeVirtualImageCountAggregateInputType | true
    _avg?: CafeVirtualImageAvgAggregateInputType
    _sum?: CafeVirtualImageSumAggregateInputType
    _min?: CafeVirtualImageMinAggregateInputType
    _max?: CafeVirtualImageMaxAggregateInputType
  }


  export type CafeVirtualImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    priority: number
    isDisable: boolean
    cafeInfoId: number
    _count: CafeVirtualImageCountAggregateOutputType | null
    _avg: CafeVirtualImageAvgAggregateOutputType | null
    _sum: CafeVirtualImageSumAggregateOutputType | null
    _min: CafeVirtualImageMinAggregateOutputType | null
    _max: CafeVirtualImageMaxAggregateOutputType | null
  }

  type GetCafeVirtualImageGroupByPayload<T extends CafeVirtualImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeVirtualImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeVirtualImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeVirtualImageGroupByOutputType[P]>
            : GetScalarType<T[P], CafeVirtualImageGroupByOutputType[P]>
        }
      >
    >


  export type CafeVirtualImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    priority?: boolean
    isDisable?: boolean
    cafeInfoId?: boolean
    CafeInfo?: boolean | CafeInfoArgs
  }


  export type CafeVirtualImageInclude = {
    CafeInfo?: boolean | CafeInfoArgs
  } 

  export type CafeVirtualImageGetPayload<S extends boolean | null | undefined | CafeVirtualImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeVirtualImage :
    S extends undefined ? never :
    S extends { include: any } & (CafeVirtualImageArgs | CafeVirtualImageFindManyArgs)
    ? CafeVirtualImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CafeVirtualImageArgs | CafeVirtualImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['select'][P]> :  P extends keyof CafeVirtualImage ? CafeVirtualImage[P] : never
  } 
      : CafeVirtualImage


  type CafeVirtualImageCountArgs = Merge<
    Omit<CafeVirtualImageFindManyArgs, 'select' | 'include'> & {
      select?: CafeVirtualImageCountAggregateInputType | true
    }
  >

  export interface CafeVirtualImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeVirtualImage that matches the filter.
     * @param {CafeVirtualImageFindUniqueArgs} args - Arguments to find a CafeVirtualImage
     * @example
     * // Get one CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeVirtualImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeVirtualImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeVirtualImage'> extends True ? Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>> : Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T> | null, null>

    /**
     * Find one CafeVirtualImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeVirtualImageFindUniqueOrThrowArgs} args - Arguments to find a CafeVirtualImage
     * @example
     * // Get one CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeVirtualImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualImageFindUniqueOrThrowArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Find the first CafeVirtualImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageFindFirstArgs} args - Arguments to find a CafeVirtualImage
     * @example
     * // Get one CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeVirtualImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeVirtualImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeVirtualImage'> extends True ? Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>> : Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T> | null, null>

    /**
     * Find the first CafeVirtualImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageFindFirstOrThrowArgs} args - Arguments to find a CafeVirtualImage
     * @example
     * // Get one CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeVirtualImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualImageFindFirstOrThrowArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Find zero or more CafeVirtualImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeVirtualImages
     * const cafeVirtualImages = await prisma.cafeVirtualImage.findMany()
     * 
     * // Get first 10 CafeVirtualImages
     * const cafeVirtualImages = await prisma.cafeVirtualImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeVirtualImageWithIdOnly = await prisma.cafeVirtualImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeVirtualImageFindManyArgs>(
      args?: SelectSubset<T, CafeVirtualImageFindManyArgs>
    ): PrismaPromise<Array<CafeVirtualImageGetPayload<T>>>

    /**
     * Create a CafeVirtualImage.
     * @param {CafeVirtualImageCreateArgs} args - Arguments to create a CafeVirtualImage.
     * @example
     * // Create one CafeVirtualImage
     * const CafeVirtualImage = await prisma.cafeVirtualImage.create({
     *   data: {
     *     // ... data to create a CafeVirtualImage
     *   }
     * })
     * 
    **/
    create<T extends CafeVirtualImageCreateArgs>(
      args: SelectSubset<T, CafeVirtualImageCreateArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Create many CafeVirtualImages.
     *     @param {CafeVirtualImageCreateManyArgs} args - Arguments to create many CafeVirtualImages.
     *     @example
     *     // Create many CafeVirtualImages
     *     const cafeVirtualImage = await prisma.cafeVirtualImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeVirtualImageCreateManyArgs>(
      args?: SelectSubset<T, CafeVirtualImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeVirtualImage.
     * @param {CafeVirtualImageDeleteArgs} args - Arguments to delete one CafeVirtualImage.
     * @example
     * // Delete one CafeVirtualImage
     * const CafeVirtualImage = await prisma.cafeVirtualImage.delete({
     *   where: {
     *     // ... filter to delete one CafeVirtualImage
     *   }
     * })
     * 
    **/
    delete<T extends CafeVirtualImageDeleteArgs>(
      args: SelectSubset<T, CafeVirtualImageDeleteArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Update one CafeVirtualImage.
     * @param {CafeVirtualImageUpdateArgs} args - Arguments to update one CafeVirtualImage.
     * @example
     * // Update one CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeVirtualImageUpdateArgs>(
      args: SelectSubset<T, CafeVirtualImageUpdateArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Delete zero or more CafeVirtualImages.
     * @param {CafeVirtualImageDeleteManyArgs} args - Arguments to filter CafeVirtualImages to delete.
     * @example
     * // Delete a few CafeVirtualImages
     * const { count } = await prisma.cafeVirtualImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeVirtualImageDeleteManyArgs>(
      args?: SelectSubset<T, CafeVirtualImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeVirtualImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeVirtualImages
     * const cafeVirtualImage = await prisma.cafeVirtualImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeVirtualImageUpdateManyArgs>(
      args: SelectSubset<T, CafeVirtualImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeVirtualImage.
     * @param {CafeVirtualImageUpsertArgs} args - Arguments to update or create a CafeVirtualImage.
     * @example
     * // Update or create a CafeVirtualImage
     * const cafeVirtualImage = await prisma.cafeVirtualImage.upsert({
     *   create: {
     *     // ... data to create a CafeVirtualImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeVirtualImage we want to update
     *   }
     * })
    **/
    upsert<T extends CafeVirtualImageUpsertArgs>(
      args: SelectSubset<T, CafeVirtualImageUpsertArgs>
    ): Prisma__CafeVirtualImageClient<CafeVirtualImageGetPayload<T>>

    /**
     * Count the number of CafeVirtualImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageCountArgs} args - Arguments to filter CafeVirtualImages to count.
     * @example
     * // Count the number of CafeVirtualImages
     * const count = await prisma.cafeVirtualImage.count({
     *   where: {
     *     // ... the filter for the CafeVirtualImages we want to count
     *   }
     * })
    **/
    count<T extends CafeVirtualImageCountArgs>(
      args?: Subset<T, CafeVirtualImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeVirtualImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeVirtualImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeVirtualImageAggregateArgs>(args: Subset<T, CafeVirtualImageAggregateArgs>): PrismaPromise<GetCafeVirtualImageAggregateType<T>>

    /**
     * Group by CafeVirtualImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeVirtualImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeVirtualImageGroupByArgs['orderBy'] }
        : { orderBy?: CafeVirtualImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeVirtualImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeVirtualImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeVirtualImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeVirtualImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeInfo<T extends CafeInfoArgs= {}>(args?: Subset<T, CafeInfoArgs>): Prisma__CafeInfoClient<CafeInfoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeVirtualImage base type for findUnique actions
   */
  export type CafeVirtualImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter, which CafeVirtualImage to fetch.
     * 
    **/
    where: CafeVirtualImageWhereUniqueInput
  }

  /**
   * CafeVirtualImage: findUnique
   */
  export interface CafeVirtualImageFindUniqueArgs extends CafeVirtualImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualImage findUniqueOrThrow
   */
  export type CafeVirtualImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter, which CafeVirtualImage to fetch.
     * 
    **/
    where: CafeVirtualImageWhereUniqueInput
  }


  /**
   * CafeVirtualImage base type for findFirst actions
   */
  export type CafeVirtualImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter, which CafeVirtualImage to fetch.
     * 
    **/
    where?: CafeVirtualImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualImages.
     * 
    **/
    cursor?: CafeVirtualImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualImages.
     * 
    **/
    distinct?: Enumerable<CafeVirtualImageScalarFieldEnum>
  }

  /**
   * CafeVirtualImage: findFirst
   */
  export interface CafeVirtualImageFindFirstArgs extends CafeVirtualImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualImage findFirstOrThrow
   */
  export type CafeVirtualImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter, which CafeVirtualImage to fetch.
     * 
    **/
    where?: CafeVirtualImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualImages.
     * 
    **/
    cursor?: CafeVirtualImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualImages.
     * 
    **/
    distinct?: Enumerable<CafeVirtualImageScalarFieldEnum>
  }


  /**
   * CafeVirtualImage findMany
   */
  export type CafeVirtualImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter, which CafeVirtualImages to fetch.
     * 
    **/
    where?: CafeVirtualImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeVirtualImages.
     * 
    **/
    cursor?: CafeVirtualImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeVirtualImageScalarFieldEnum>
  }


  /**
   * CafeVirtualImage create
   */
  export type CafeVirtualImageCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * The data needed to create a CafeVirtualImage.
     * 
    **/
    data: XOR<CafeVirtualImageCreateInput, CafeVirtualImageUncheckedCreateInput>
  }


  /**
   * CafeVirtualImage createMany
   */
  export type CafeVirtualImageCreateManyArgs = {
    /**
     * The data used to create many CafeVirtualImages.
     * 
    **/
    data: Enumerable<CafeVirtualImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeVirtualImage update
   */
  export type CafeVirtualImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * The data needed to update a CafeVirtualImage.
     * 
    **/
    data: XOR<CafeVirtualImageUpdateInput, CafeVirtualImageUncheckedUpdateInput>
    /**
     * Choose, which CafeVirtualImage to update.
     * 
    **/
    where: CafeVirtualImageWhereUniqueInput
  }


  /**
   * CafeVirtualImage updateMany
   */
  export type CafeVirtualImageUpdateManyArgs = {
    /**
     * The data used to update CafeVirtualImages.
     * 
    **/
    data: XOR<CafeVirtualImageUpdateManyMutationInput, CafeVirtualImageUncheckedUpdateManyInput>
    /**
     * Filter which CafeVirtualImages to update
     * 
    **/
    where?: CafeVirtualImageWhereInput
  }


  /**
   * CafeVirtualImage upsert
   */
  export type CafeVirtualImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * The filter to search for the CafeVirtualImage to update in case it exists.
     * 
    **/
    where: CafeVirtualImageWhereUniqueInput
    /**
     * In case the CafeVirtualImage found by the `where` argument doesn't exist, create a new CafeVirtualImage with this data.
     * 
    **/
    create: XOR<CafeVirtualImageCreateInput, CafeVirtualImageUncheckedCreateInput>
    /**
     * In case the CafeVirtualImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeVirtualImageUpdateInput, CafeVirtualImageUncheckedUpdateInput>
  }


  /**
   * CafeVirtualImage delete
   */
  export type CafeVirtualImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
    /**
     * Filter which CafeVirtualImage to delete.
     * 
    **/
    where: CafeVirtualImageWhereUniqueInput
  }


  /**
   * CafeVirtualImage deleteMany
   */
  export type CafeVirtualImageDeleteManyArgs = {
    /**
     * Filter which CafeVirtualImages to delete
     * 
    **/
    where?: CafeVirtualImageWhereInput
  }


  /**
   * CafeVirtualImage without action
   */
  export type CafeVirtualImageArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualImage
     * 
    **/
    select?: CafeVirtualImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualImageInclude | null
  }



  /**
   * Model CafeRealImage
   */


  export type AggregateCafeRealImage = {
    _count: CafeRealImageCountAggregateOutputType | null
    _avg: CafeRealImageAvgAggregateOutputType | null
    _sum: CafeRealImageSumAggregateOutputType | null
    _min: CafeRealImageMinAggregateOutputType | null
    _max: CafeRealImageMaxAggregateOutputType | null
  }

  export type CafeRealImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeRealImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    cafeInfoId: number | null
  }

  export type CafeRealImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeRealImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    priority: number | null
    isDisable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeRealImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    priority: number
    isDisable: number
    cafeInfoId: number
    _all: number
  }


  export type CafeRealImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeRealImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    cafeInfoId?: true
  }

  export type CafeRealImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeRealImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
  }

  export type CafeRealImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    priority?: true
    isDisable?: true
    cafeInfoId?: true
    _all?: true
  }

  export type CafeRealImageAggregateArgs = {
    /**
     * Filter which CafeRealImage to aggregate.
     * 
    **/
    where?: CafeRealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeRealImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeRealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeRealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeRealImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeRealImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeRealImages
    **/
    _count?: true | CafeRealImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeRealImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeRealImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeRealImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeRealImageMaxAggregateInputType
  }

  export type GetCafeRealImageAggregateType<T extends CafeRealImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeRealImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeRealImage[P]>
      : GetScalarType<T[P], AggregateCafeRealImage[P]>
  }




  export type CafeRealImageGroupByArgs = {
    where?: CafeRealImageWhereInput
    orderBy?: Enumerable<CafeRealImageOrderByWithAggregationInput>
    by: Array<CafeRealImageScalarFieldEnum>
    having?: CafeRealImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeRealImageCountAggregateInputType | true
    _avg?: CafeRealImageAvgAggregateInputType
    _sum?: CafeRealImageSumAggregateInputType
    _min?: CafeRealImageMinAggregateInputType
    _max?: CafeRealImageMaxAggregateInputType
  }


  export type CafeRealImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    priority: number
    isDisable: boolean
    cafeInfoId: number
    _count: CafeRealImageCountAggregateOutputType | null
    _avg: CafeRealImageAvgAggregateOutputType | null
    _sum: CafeRealImageSumAggregateOutputType | null
    _min: CafeRealImageMinAggregateOutputType | null
    _max: CafeRealImageMaxAggregateOutputType | null
  }

  type GetCafeRealImageGroupByPayload<T extends CafeRealImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeRealImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeRealImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeRealImageGroupByOutputType[P]>
            : GetScalarType<T[P], CafeRealImageGroupByOutputType[P]>
        }
      >
    >


  export type CafeRealImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    priority?: boolean
    isDisable?: boolean
    cafeInfoId?: boolean
    CafeInfo?: boolean | CafeInfoArgs
  }


  export type CafeRealImageInclude = {
    CafeInfo?: boolean | CafeInfoArgs
  } 

  export type CafeRealImageGetPayload<S extends boolean | null | undefined | CafeRealImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeRealImage :
    S extends undefined ? never :
    S extends { include: any } & (CafeRealImageArgs | CafeRealImageFindManyArgs)
    ? CafeRealImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CafeRealImageArgs | CafeRealImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['select'][P]> :  P extends keyof CafeRealImage ? CafeRealImage[P] : never
  } 
      : CafeRealImage


  type CafeRealImageCountArgs = Merge<
    Omit<CafeRealImageFindManyArgs, 'select' | 'include'> & {
      select?: CafeRealImageCountAggregateInputType | true
    }
  >

  export interface CafeRealImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeRealImage that matches the filter.
     * @param {CafeRealImageFindUniqueArgs} args - Arguments to find a CafeRealImage
     * @example
     * // Get one CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeRealImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeRealImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeRealImage'> extends True ? Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>> : Prisma__CafeRealImageClient<CafeRealImageGetPayload<T> | null, null>

    /**
     * Find one CafeRealImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeRealImageFindUniqueOrThrowArgs} args - Arguments to find a CafeRealImage
     * @example
     * // Get one CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeRealImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeRealImageFindUniqueOrThrowArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Find the first CafeRealImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageFindFirstArgs} args - Arguments to find a CafeRealImage
     * @example
     * // Get one CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeRealImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeRealImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeRealImage'> extends True ? Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>> : Prisma__CafeRealImageClient<CafeRealImageGetPayload<T> | null, null>

    /**
     * Find the first CafeRealImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageFindFirstOrThrowArgs} args - Arguments to find a CafeRealImage
     * @example
     * // Get one CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeRealImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeRealImageFindFirstOrThrowArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Find zero or more CafeRealImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeRealImages
     * const cafeRealImages = await prisma.cafeRealImage.findMany()
     * 
     * // Get first 10 CafeRealImages
     * const cafeRealImages = await prisma.cafeRealImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeRealImageWithIdOnly = await prisma.cafeRealImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeRealImageFindManyArgs>(
      args?: SelectSubset<T, CafeRealImageFindManyArgs>
    ): PrismaPromise<Array<CafeRealImageGetPayload<T>>>

    /**
     * Create a CafeRealImage.
     * @param {CafeRealImageCreateArgs} args - Arguments to create a CafeRealImage.
     * @example
     * // Create one CafeRealImage
     * const CafeRealImage = await prisma.cafeRealImage.create({
     *   data: {
     *     // ... data to create a CafeRealImage
     *   }
     * })
     * 
    **/
    create<T extends CafeRealImageCreateArgs>(
      args: SelectSubset<T, CafeRealImageCreateArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Create many CafeRealImages.
     *     @param {CafeRealImageCreateManyArgs} args - Arguments to create many CafeRealImages.
     *     @example
     *     // Create many CafeRealImages
     *     const cafeRealImage = await prisma.cafeRealImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeRealImageCreateManyArgs>(
      args?: SelectSubset<T, CafeRealImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeRealImage.
     * @param {CafeRealImageDeleteArgs} args - Arguments to delete one CafeRealImage.
     * @example
     * // Delete one CafeRealImage
     * const CafeRealImage = await prisma.cafeRealImage.delete({
     *   where: {
     *     // ... filter to delete one CafeRealImage
     *   }
     * })
     * 
    **/
    delete<T extends CafeRealImageDeleteArgs>(
      args: SelectSubset<T, CafeRealImageDeleteArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Update one CafeRealImage.
     * @param {CafeRealImageUpdateArgs} args - Arguments to update one CafeRealImage.
     * @example
     * // Update one CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeRealImageUpdateArgs>(
      args: SelectSubset<T, CafeRealImageUpdateArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Delete zero or more CafeRealImages.
     * @param {CafeRealImageDeleteManyArgs} args - Arguments to filter CafeRealImages to delete.
     * @example
     * // Delete a few CafeRealImages
     * const { count } = await prisma.cafeRealImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeRealImageDeleteManyArgs>(
      args?: SelectSubset<T, CafeRealImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeRealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeRealImages
     * const cafeRealImage = await prisma.cafeRealImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeRealImageUpdateManyArgs>(
      args: SelectSubset<T, CafeRealImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeRealImage.
     * @param {CafeRealImageUpsertArgs} args - Arguments to update or create a CafeRealImage.
     * @example
     * // Update or create a CafeRealImage
     * const cafeRealImage = await prisma.cafeRealImage.upsert({
     *   create: {
     *     // ... data to create a CafeRealImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeRealImage we want to update
     *   }
     * })
    **/
    upsert<T extends CafeRealImageUpsertArgs>(
      args: SelectSubset<T, CafeRealImageUpsertArgs>
    ): Prisma__CafeRealImageClient<CafeRealImageGetPayload<T>>

    /**
     * Count the number of CafeRealImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageCountArgs} args - Arguments to filter CafeRealImages to count.
     * @example
     * // Count the number of CafeRealImages
     * const count = await prisma.cafeRealImage.count({
     *   where: {
     *     // ... the filter for the CafeRealImages we want to count
     *   }
     * })
    **/
    count<T extends CafeRealImageCountArgs>(
      args?: Subset<T, CafeRealImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeRealImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeRealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeRealImageAggregateArgs>(args: Subset<T, CafeRealImageAggregateArgs>): PrismaPromise<GetCafeRealImageAggregateType<T>>

    /**
     * Group by CafeRealImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeRealImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeRealImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeRealImageGroupByArgs['orderBy'] }
        : { orderBy?: CafeRealImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeRealImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeRealImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeRealImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeRealImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeInfo<T extends CafeInfoArgs= {}>(args?: Subset<T, CafeInfoArgs>): Prisma__CafeInfoClient<CafeInfoGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeRealImage base type for findUnique actions
   */
  export type CafeRealImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter, which CafeRealImage to fetch.
     * 
    **/
    where: CafeRealImageWhereUniqueInput
  }

  /**
   * CafeRealImage: findUnique
   */
  export interface CafeRealImageFindUniqueArgs extends CafeRealImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeRealImage findUniqueOrThrow
   */
  export type CafeRealImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter, which CafeRealImage to fetch.
     * 
    **/
    where: CafeRealImageWhereUniqueInput
  }


  /**
   * CafeRealImage base type for findFirst actions
   */
  export type CafeRealImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter, which CafeRealImage to fetch.
     * 
    **/
    where?: CafeRealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeRealImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeRealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeRealImages.
     * 
    **/
    cursor?: CafeRealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeRealImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeRealImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeRealImages.
     * 
    **/
    distinct?: Enumerable<CafeRealImageScalarFieldEnum>
  }

  /**
   * CafeRealImage: findFirst
   */
  export interface CafeRealImageFindFirstArgs extends CafeRealImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeRealImage findFirstOrThrow
   */
  export type CafeRealImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter, which CafeRealImage to fetch.
     * 
    **/
    where?: CafeRealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeRealImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeRealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeRealImages.
     * 
    **/
    cursor?: CafeRealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeRealImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeRealImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeRealImages.
     * 
    **/
    distinct?: Enumerable<CafeRealImageScalarFieldEnum>
  }


  /**
   * CafeRealImage findMany
   */
  export type CafeRealImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter, which CafeRealImages to fetch.
     * 
    **/
    where?: CafeRealImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeRealImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeRealImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeRealImages.
     * 
    **/
    cursor?: CafeRealImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeRealImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeRealImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeRealImageScalarFieldEnum>
  }


  /**
   * CafeRealImage create
   */
  export type CafeRealImageCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * The data needed to create a CafeRealImage.
     * 
    **/
    data: XOR<CafeRealImageCreateInput, CafeRealImageUncheckedCreateInput>
  }


  /**
   * CafeRealImage createMany
   */
  export type CafeRealImageCreateManyArgs = {
    /**
     * The data used to create many CafeRealImages.
     * 
    **/
    data: Enumerable<CafeRealImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeRealImage update
   */
  export type CafeRealImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * The data needed to update a CafeRealImage.
     * 
    **/
    data: XOR<CafeRealImageUpdateInput, CafeRealImageUncheckedUpdateInput>
    /**
     * Choose, which CafeRealImage to update.
     * 
    **/
    where: CafeRealImageWhereUniqueInput
  }


  /**
   * CafeRealImage updateMany
   */
  export type CafeRealImageUpdateManyArgs = {
    /**
     * The data used to update CafeRealImages.
     * 
    **/
    data: XOR<CafeRealImageUpdateManyMutationInput, CafeRealImageUncheckedUpdateManyInput>
    /**
     * Filter which CafeRealImages to update
     * 
    **/
    where?: CafeRealImageWhereInput
  }


  /**
   * CafeRealImage upsert
   */
  export type CafeRealImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * The filter to search for the CafeRealImage to update in case it exists.
     * 
    **/
    where: CafeRealImageWhereUniqueInput
    /**
     * In case the CafeRealImage found by the `where` argument doesn't exist, create a new CafeRealImage with this data.
     * 
    **/
    create: XOR<CafeRealImageCreateInput, CafeRealImageUncheckedCreateInput>
    /**
     * In case the CafeRealImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeRealImageUpdateInput, CafeRealImageUncheckedUpdateInput>
  }


  /**
   * CafeRealImage delete
   */
  export type CafeRealImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
    /**
     * Filter which CafeRealImage to delete.
     * 
    **/
    where: CafeRealImageWhereUniqueInput
  }


  /**
   * CafeRealImage deleteMany
   */
  export type CafeRealImageDeleteManyArgs = {
    /**
     * Filter which CafeRealImages to delete
     * 
    **/
    where?: CafeRealImageWhereInput
  }


  /**
   * CafeRealImage without action
   */
  export type CafeRealImageArgs = {
    /**
     * Select specific fields to fetch from the CafeRealImage
     * 
    **/
    select?: CafeRealImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeRealImageInclude | null
  }



  /**
   * Model CafeVirtualLink
   */


  export type AggregateCafeVirtualLink = {
    _count: CafeVirtualLinkCountAggregateOutputType | null
    _avg: CafeVirtualLinkAvgAggregateOutputType | null
    _sum: CafeVirtualLinkSumAggregateOutputType | null
    _min: CafeVirtualLinkMinAggregateOutputType | null
    _max: CafeVirtualLinkMaxAggregateOutputType | null
  }

  export type CafeVirtualLinkAvgAggregateOutputType = {
    id: number | null
    cafeInfoId: number | null
  }

  export type CafeVirtualLinkSumAggregateOutputType = {
    id: number | null
    cafeInfoId: number | null
  }

  export type CafeVirtualLinkMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    url: string | null
    type: string | null
    isDisable: boolean | null
    isAvaliable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeVirtualLinkMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    url: string | null
    type: string | null
    isDisable: boolean | null
    isAvaliable: boolean | null
    cafeInfoId: number | null
  }

  export type CafeVirtualLinkCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    url: number
    type: number
    isDisable: number
    isAvaliable: number
    cafeInfoId: number
    _all: number
  }


  export type CafeVirtualLinkAvgAggregateInputType = {
    id?: true
    cafeInfoId?: true
  }

  export type CafeVirtualLinkSumAggregateInputType = {
    id?: true
    cafeInfoId?: true
  }

  export type CafeVirtualLinkMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    url?: true
    type?: true
    isDisable?: true
    isAvaliable?: true
    cafeInfoId?: true
  }

  export type CafeVirtualLinkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    url?: true
    type?: true
    isDisable?: true
    isAvaliable?: true
    cafeInfoId?: true
  }

  export type CafeVirtualLinkCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    url?: true
    type?: true
    isDisable?: true
    isAvaliable?: true
    cafeInfoId?: true
    _all?: true
  }

  export type CafeVirtualLinkAggregateArgs = {
    /**
     * Filter which CafeVirtualLink to aggregate.
     * 
    **/
    where?: CafeVirtualLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeVirtualLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeVirtualLinks
    **/
    _count?: true | CafeVirtualLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeVirtualLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeVirtualLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeVirtualLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeVirtualLinkMaxAggregateInputType
  }

  export type GetCafeVirtualLinkAggregateType<T extends CafeVirtualLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeVirtualLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeVirtualLink[P]>
      : GetScalarType<T[P], AggregateCafeVirtualLink[P]>
  }




  export type CafeVirtualLinkGroupByArgs = {
    where?: CafeVirtualLinkWhereInput
    orderBy?: Enumerable<CafeVirtualLinkOrderByWithAggregationInput>
    by: Array<CafeVirtualLinkScalarFieldEnum>
    having?: CafeVirtualLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeVirtualLinkCountAggregateInputType | true
    _avg?: CafeVirtualLinkAvgAggregateInputType
    _sum?: CafeVirtualLinkSumAggregateInputType
    _min?: CafeVirtualLinkMinAggregateInputType
    _max?: CafeVirtualLinkMaxAggregateInputType
  }


  export type CafeVirtualLinkGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    url: string
    type: string
    isDisable: boolean
    isAvaliable: boolean
    cafeInfoId: number
    _count: CafeVirtualLinkCountAggregateOutputType | null
    _avg: CafeVirtualLinkAvgAggregateOutputType | null
    _sum: CafeVirtualLinkSumAggregateOutputType | null
    _min: CafeVirtualLinkMinAggregateOutputType | null
    _max: CafeVirtualLinkMaxAggregateOutputType | null
  }

  type GetCafeVirtualLinkGroupByPayload<T extends CafeVirtualLinkGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeVirtualLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeVirtualLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeVirtualLinkGroupByOutputType[P]>
            : GetScalarType<T[P], CafeVirtualLinkGroupByOutputType[P]>
        }
      >
    >


  export type CafeVirtualLinkSelect = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    isDisable?: boolean
    isAvaliable?: boolean
    cafeInfoId?: boolean
    CafeInfo?: boolean | CafeInfoArgs
    CafeVirtualLinkThumbnailImage?: boolean | CafeVirtualLinkThumbnailImageArgs
  }


  export type CafeVirtualLinkInclude = {
    CafeInfo?: boolean | CafeInfoArgs
    CafeVirtualLinkThumbnailImage?: boolean | CafeVirtualLinkThumbnailImageArgs
  } 

  export type CafeVirtualLinkGetPayload<S extends boolean | null | undefined | CafeVirtualLinkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeVirtualLink :
    S extends undefined ? never :
    S extends { include: any } & (CafeVirtualLinkArgs | CafeVirtualLinkFindManyArgs)
    ? CafeVirtualLink  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['include'][P]> :
        P extends 'CafeVirtualLinkThumbnailImage' ? CafeVirtualLinkThumbnailImageGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CafeVirtualLinkArgs | CafeVirtualLinkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeInfo' ? CafeInfoGetPayload<S['select'][P]> :
        P extends 'CafeVirtualLinkThumbnailImage' ? CafeVirtualLinkThumbnailImageGetPayload<S['select'][P]> | null :  P extends keyof CafeVirtualLink ? CafeVirtualLink[P] : never
  } 
      : CafeVirtualLink


  type CafeVirtualLinkCountArgs = Merge<
    Omit<CafeVirtualLinkFindManyArgs, 'select' | 'include'> & {
      select?: CafeVirtualLinkCountAggregateInputType | true
    }
  >

  export interface CafeVirtualLinkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeVirtualLink that matches the filter.
     * @param {CafeVirtualLinkFindUniqueArgs} args - Arguments to find a CafeVirtualLink
     * @example
     * // Get one CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeVirtualLinkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeVirtualLinkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeVirtualLink'> extends True ? Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>> : Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T> | null, null>

    /**
     * Find one CafeVirtualLink that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeVirtualLinkFindUniqueOrThrowArgs} args - Arguments to find a CafeVirtualLink
     * @example
     * // Get one CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeVirtualLinkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualLinkFindUniqueOrThrowArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Find the first CafeVirtualLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkFindFirstArgs} args - Arguments to find a CafeVirtualLink
     * @example
     * // Get one CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeVirtualLinkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeVirtualLinkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeVirtualLink'> extends True ? Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>> : Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T> | null, null>

    /**
     * Find the first CafeVirtualLink that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkFindFirstOrThrowArgs} args - Arguments to find a CafeVirtualLink
     * @example
     * // Get one CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeVirtualLinkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualLinkFindFirstOrThrowArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Find zero or more CafeVirtualLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeVirtualLinks
     * const cafeVirtualLinks = await prisma.cafeVirtualLink.findMany()
     * 
     * // Get first 10 CafeVirtualLinks
     * const cafeVirtualLinks = await prisma.cafeVirtualLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeVirtualLinkWithIdOnly = await prisma.cafeVirtualLink.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeVirtualLinkFindManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkFindManyArgs>
    ): PrismaPromise<Array<CafeVirtualLinkGetPayload<T>>>

    /**
     * Create a CafeVirtualLink.
     * @param {CafeVirtualLinkCreateArgs} args - Arguments to create a CafeVirtualLink.
     * @example
     * // Create one CafeVirtualLink
     * const CafeVirtualLink = await prisma.cafeVirtualLink.create({
     *   data: {
     *     // ... data to create a CafeVirtualLink
     *   }
     * })
     * 
    **/
    create<T extends CafeVirtualLinkCreateArgs>(
      args: SelectSubset<T, CafeVirtualLinkCreateArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Create many CafeVirtualLinks.
     *     @param {CafeVirtualLinkCreateManyArgs} args - Arguments to create many CafeVirtualLinks.
     *     @example
     *     // Create many CafeVirtualLinks
     *     const cafeVirtualLink = await prisma.cafeVirtualLink.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeVirtualLinkCreateManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeVirtualLink.
     * @param {CafeVirtualLinkDeleteArgs} args - Arguments to delete one CafeVirtualLink.
     * @example
     * // Delete one CafeVirtualLink
     * const CafeVirtualLink = await prisma.cafeVirtualLink.delete({
     *   where: {
     *     // ... filter to delete one CafeVirtualLink
     *   }
     * })
     * 
    **/
    delete<T extends CafeVirtualLinkDeleteArgs>(
      args: SelectSubset<T, CafeVirtualLinkDeleteArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Update one CafeVirtualLink.
     * @param {CafeVirtualLinkUpdateArgs} args - Arguments to update one CafeVirtualLink.
     * @example
     * // Update one CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeVirtualLinkUpdateArgs>(
      args: SelectSubset<T, CafeVirtualLinkUpdateArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Delete zero or more CafeVirtualLinks.
     * @param {CafeVirtualLinkDeleteManyArgs} args - Arguments to filter CafeVirtualLinks to delete.
     * @example
     * // Delete a few CafeVirtualLinks
     * const { count } = await prisma.cafeVirtualLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeVirtualLinkDeleteManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeVirtualLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeVirtualLinks
     * const cafeVirtualLink = await prisma.cafeVirtualLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeVirtualLinkUpdateManyArgs>(
      args: SelectSubset<T, CafeVirtualLinkUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeVirtualLink.
     * @param {CafeVirtualLinkUpsertArgs} args - Arguments to update or create a CafeVirtualLink.
     * @example
     * // Update or create a CafeVirtualLink
     * const cafeVirtualLink = await prisma.cafeVirtualLink.upsert({
     *   create: {
     *     // ... data to create a CafeVirtualLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeVirtualLink we want to update
     *   }
     * })
    **/
    upsert<T extends CafeVirtualLinkUpsertArgs>(
      args: SelectSubset<T, CafeVirtualLinkUpsertArgs>
    ): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T>>

    /**
     * Count the number of CafeVirtualLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkCountArgs} args - Arguments to filter CafeVirtualLinks to count.
     * @example
     * // Count the number of CafeVirtualLinks
     * const count = await prisma.cafeVirtualLink.count({
     *   where: {
     *     // ... the filter for the CafeVirtualLinks we want to count
     *   }
     * })
    **/
    count<T extends CafeVirtualLinkCountArgs>(
      args?: Subset<T, CafeVirtualLinkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeVirtualLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeVirtualLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeVirtualLinkAggregateArgs>(args: Subset<T, CafeVirtualLinkAggregateArgs>): PrismaPromise<GetCafeVirtualLinkAggregateType<T>>

    /**
     * Group by CafeVirtualLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeVirtualLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeVirtualLinkGroupByArgs['orderBy'] }
        : { orderBy?: CafeVirtualLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeVirtualLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeVirtualLinkGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeVirtualLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeVirtualLinkClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeInfo<T extends CafeInfoArgs= {}>(args?: Subset<T, CafeInfoArgs>): Prisma__CafeInfoClient<CafeInfoGetPayload<T> | Null>;

    CafeVirtualLinkThumbnailImage<T extends CafeVirtualLinkThumbnailImageArgs= {}>(args?: Subset<T, CafeVirtualLinkThumbnailImageArgs>): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeVirtualLink base type for findUnique actions
   */
  export type CafeVirtualLinkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter, which CafeVirtualLink to fetch.
     * 
    **/
    where: CafeVirtualLinkWhereUniqueInput
  }

  /**
   * CafeVirtualLink: findUnique
   */
  export interface CafeVirtualLinkFindUniqueArgs extends CafeVirtualLinkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualLink findUniqueOrThrow
   */
  export type CafeVirtualLinkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter, which CafeVirtualLink to fetch.
     * 
    **/
    where: CafeVirtualLinkWhereUniqueInput
  }


  /**
   * CafeVirtualLink base type for findFirst actions
   */
  export type CafeVirtualLinkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter, which CafeVirtualLink to fetch.
     * 
    **/
    where?: CafeVirtualLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualLinks.
     * 
    **/
    cursor?: CafeVirtualLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualLinks.
     * 
    **/
    distinct?: Enumerable<CafeVirtualLinkScalarFieldEnum>
  }

  /**
   * CafeVirtualLink: findFirst
   */
  export interface CafeVirtualLinkFindFirstArgs extends CafeVirtualLinkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualLink findFirstOrThrow
   */
  export type CafeVirtualLinkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter, which CafeVirtualLink to fetch.
     * 
    **/
    where?: CafeVirtualLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualLinks.
     * 
    **/
    cursor?: CafeVirtualLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualLinks.
     * 
    **/
    distinct?: Enumerable<CafeVirtualLinkScalarFieldEnum>
  }


  /**
   * CafeVirtualLink findMany
   */
  export type CafeVirtualLinkFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter, which CafeVirtualLinks to fetch.
     * 
    **/
    where?: CafeVirtualLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeVirtualLinks.
     * 
    **/
    cursor?: CafeVirtualLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeVirtualLinkScalarFieldEnum>
  }


  /**
   * CafeVirtualLink create
   */
  export type CafeVirtualLinkCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * The data needed to create a CafeVirtualLink.
     * 
    **/
    data: XOR<CafeVirtualLinkCreateInput, CafeVirtualLinkUncheckedCreateInput>
  }


  /**
   * CafeVirtualLink createMany
   */
  export type CafeVirtualLinkCreateManyArgs = {
    /**
     * The data used to create many CafeVirtualLinks.
     * 
    **/
    data: Enumerable<CafeVirtualLinkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeVirtualLink update
   */
  export type CafeVirtualLinkUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * The data needed to update a CafeVirtualLink.
     * 
    **/
    data: XOR<CafeVirtualLinkUpdateInput, CafeVirtualLinkUncheckedUpdateInput>
    /**
     * Choose, which CafeVirtualLink to update.
     * 
    **/
    where: CafeVirtualLinkWhereUniqueInput
  }


  /**
   * CafeVirtualLink updateMany
   */
  export type CafeVirtualLinkUpdateManyArgs = {
    /**
     * The data used to update CafeVirtualLinks.
     * 
    **/
    data: XOR<CafeVirtualLinkUpdateManyMutationInput, CafeVirtualLinkUncheckedUpdateManyInput>
    /**
     * Filter which CafeVirtualLinks to update
     * 
    **/
    where?: CafeVirtualLinkWhereInput
  }


  /**
   * CafeVirtualLink upsert
   */
  export type CafeVirtualLinkUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * The filter to search for the CafeVirtualLink to update in case it exists.
     * 
    **/
    where: CafeVirtualLinkWhereUniqueInput
    /**
     * In case the CafeVirtualLink found by the `where` argument doesn't exist, create a new CafeVirtualLink with this data.
     * 
    **/
    create: XOR<CafeVirtualLinkCreateInput, CafeVirtualLinkUncheckedCreateInput>
    /**
     * In case the CafeVirtualLink was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeVirtualLinkUpdateInput, CafeVirtualLinkUncheckedUpdateInput>
  }


  /**
   * CafeVirtualLink delete
   */
  export type CafeVirtualLinkDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
    /**
     * Filter which CafeVirtualLink to delete.
     * 
    **/
    where: CafeVirtualLinkWhereUniqueInput
  }


  /**
   * CafeVirtualLink deleteMany
   */
  export type CafeVirtualLinkDeleteManyArgs = {
    /**
     * Filter which CafeVirtualLinks to delete
     * 
    **/
    where?: CafeVirtualLinkWhereInput
  }


  /**
   * CafeVirtualLink without action
   */
  export type CafeVirtualLinkArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLink
     * 
    **/
    select?: CafeVirtualLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkInclude | null
  }



  /**
   * Model CafeVirtualLinkThumbnailImage
   */


  export type AggregateCafeVirtualLinkThumbnailImage = {
    _count: CafeVirtualLinkThumbnailImageCountAggregateOutputType | null
    _avg: CafeVirtualLinkThumbnailImageAvgAggregateOutputType | null
    _sum: CafeVirtualLinkThumbnailImageSumAggregateOutputType | null
    _min: CafeVirtualLinkThumbnailImageMinAggregateOutputType | null
    _max: CafeVirtualLinkThumbnailImageMaxAggregateOutputType | null
  }

  export type CafeVirtualLinkThumbnailImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    cafeVirtualLinkId: number | null
  }

  export type CafeVirtualLinkThumbnailImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    cafeVirtualLinkId: number | null
  }

  export type CafeVirtualLinkThumbnailImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    cafeVirtualLinkId: number | null
  }

  export type CafeVirtualLinkThumbnailImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    cafeVirtualLinkId: number | null
  }

  export type CafeVirtualLinkThumbnailImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    cafeVirtualLinkId: number
    _all: number
  }


  export type CafeVirtualLinkThumbnailImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    cafeVirtualLinkId?: true
  }

  export type CafeVirtualLinkThumbnailImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    cafeVirtualLinkId?: true
  }

  export type CafeVirtualLinkThumbnailImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    cafeVirtualLinkId?: true
  }

  export type CafeVirtualLinkThumbnailImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    cafeVirtualLinkId?: true
  }

  export type CafeVirtualLinkThumbnailImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    cafeVirtualLinkId?: true
    _all?: true
  }

  export type CafeVirtualLinkThumbnailImageAggregateArgs = {
    /**
     * Filter which CafeVirtualLinkThumbnailImage to aggregate.
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinkThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinkThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinkThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeVirtualLinkThumbnailImages
    **/
    _count?: true | CafeVirtualLinkThumbnailImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeVirtualLinkThumbnailImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeVirtualLinkThumbnailImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeVirtualLinkThumbnailImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeVirtualLinkThumbnailImageMaxAggregateInputType
  }

  export type GetCafeVirtualLinkThumbnailImageAggregateType<T extends CafeVirtualLinkThumbnailImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeVirtualLinkThumbnailImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeVirtualLinkThumbnailImage[P]>
      : GetScalarType<T[P], AggregateCafeVirtualLinkThumbnailImage[P]>
  }




  export type CafeVirtualLinkThumbnailImageGroupByArgs = {
    where?: CafeVirtualLinkThumbnailImageWhereInput
    orderBy?: Enumerable<CafeVirtualLinkThumbnailImageOrderByWithAggregationInput>
    by: Array<CafeVirtualLinkThumbnailImageScalarFieldEnum>
    having?: CafeVirtualLinkThumbnailImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeVirtualLinkThumbnailImageCountAggregateInputType | true
    _avg?: CafeVirtualLinkThumbnailImageAvgAggregateInputType
    _sum?: CafeVirtualLinkThumbnailImageSumAggregateInputType
    _min?: CafeVirtualLinkThumbnailImageMinAggregateInputType
    _max?: CafeVirtualLinkThumbnailImageMaxAggregateInputType
  }


  export type CafeVirtualLinkThumbnailImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    cafeVirtualLinkId: number
    _count: CafeVirtualLinkThumbnailImageCountAggregateOutputType | null
    _avg: CafeVirtualLinkThumbnailImageAvgAggregateOutputType | null
    _sum: CafeVirtualLinkThumbnailImageSumAggregateOutputType | null
    _min: CafeVirtualLinkThumbnailImageMinAggregateOutputType | null
    _max: CafeVirtualLinkThumbnailImageMaxAggregateOutputType | null
  }

  type GetCafeVirtualLinkThumbnailImageGroupByPayload<T extends CafeVirtualLinkThumbnailImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CafeVirtualLinkThumbnailImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeVirtualLinkThumbnailImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeVirtualLinkThumbnailImageGroupByOutputType[P]>
            : GetScalarType<T[P], CafeVirtualLinkThumbnailImageGroupByOutputType[P]>
        }
      >
    >


  export type CafeVirtualLinkThumbnailImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    cafeVirtualLinkId?: boolean
    CafeVirtualLink?: boolean | CafeVirtualLinkArgs
  }


  export type CafeVirtualLinkThumbnailImageInclude = {
    CafeVirtualLink?: boolean | CafeVirtualLinkArgs
  } 

  export type CafeVirtualLinkThumbnailImageGetPayload<S extends boolean | null | undefined | CafeVirtualLinkThumbnailImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CafeVirtualLinkThumbnailImage :
    S extends undefined ? never :
    S extends { include: any } & (CafeVirtualLinkThumbnailImageArgs | CafeVirtualLinkThumbnailImageFindManyArgs)
    ? CafeVirtualLinkThumbnailImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CafeVirtualLink' ? CafeVirtualLinkGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CafeVirtualLinkThumbnailImageArgs | CafeVirtualLinkThumbnailImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CafeVirtualLink' ? CafeVirtualLinkGetPayload<S['select'][P]> :  P extends keyof CafeVirtualLinkThumbnailImage ? CafeVirtualLinkThumbnailImage[P] : never
  } 
      : CafeVirtualLinkThumbnailImage


  type CafeVirtualLinkThumbnailImageCountArgs = Merge<
    Omit<CafeVirtualLinkThumbnailImageFindManyArgs, 'select' | 'include'> & {
      select?: CafeVirtualLinkThumbnailImageCountAggregateInputType | true
    }
  >

  export interface CafeVirtualLinkThumbnailImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CafeVirtualLinkThumbnailImage that matches the filter.
     * @param {CafeVirtualLinkThumbnailImageFindUniqueArgs} args - Arguments to find a CafeVirtualLinkThumbnailImage
     * @example
     * // Get one CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CafeVirtualLinkThumbnailImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CafeVirtualLinkThumbnailImage'> extends True ? Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>> : Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T> | null, null>

    /**
     * Find one CafeVirtualLinkThumbnailImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CafeVirtualLinkThumbnailImageFindUniqueOrThrowArgs} args - Arguments to find a CafeVirtualLinkThumbnailImage
     * @example
     * // Get one CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CafeVirtualLinkThumbnailImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageFindUniqueOrThrowArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Find the first CafeVirtualLinkThumbnailImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageFindFirstArgs} args - Arguments to find a CafeVirtualLinkThumbnailImage
     * @example
     * // Get one CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CafeVirtualLinkThumbnailImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CafeVirtualLinkThumbnailImage'> extends True ? Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>> : Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T> | null, null>

    /**
     * Find the first CafeVirtualLinkThumbnailImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageFindFirstOrThrowArgs} args - Arguments to find a CafeVirtualLinkThumbnailImage
     * @example
     * // Get one CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CafeVirtualLinkThumbnailImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageFindFirstOrThrowArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Find zero or more CafeVirtualLinkThumbnailImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeVirtualLinkThumbnailImages
     * const cafeVirtualLinkThumbnailImages = await prisma.cafeVirtualLinkThumbnailImage.findMany()
     * 
     * // Get first 10 CafeVirtualLinkThumbnailImages
     * const cafeVirtualLinkThumbnailImages = await prisma.cafeVirtualLinkThumbnailImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeVirtualLinkThumbnailImageWithIdOnly = await prisma.cafeVirtualLinkThumbnailImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CafeVirtualLinkThumbnailImageFindManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageFindManyArgs>
    ): PrismaPromise<Array<CafeVirtualLinkThumbnailImageGetPayload<T>>>

    /**
     * Create a CafeVirtualLinkThumbnailImage.
     * @param {CafeVirtualLinkThumbnailImageCreateArgs} args - Arguments to create a CafeVirtualLinkThumbnailImage.
     * @example
     * // Create one CafeVirtualLinkThumbnailImage
     * const CafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.create({
     *   data: {
     *     // ... data to create a CafeVirtualLinkThumbnailImage
     *   }
     * })
     * 
    **/
    create<T extends CafeVirtualLinkThumbnailImageCreateArgs>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageCreateArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Create many CafeVirtualLinkThumbnailImages.
     *     @param {CafeVirtualLinkThumbnailImageCreateManyArgs} args - Arguments to create many CafeVirtualLinkThumbnailImages.
     *     @example
     *     // Create many CafeVirtualLinkThumbnailImages
     *     const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CafeVirtualLinkThumbnailImageCreateManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CafeVirtualLinkThumbnailImage.
     * @param {CafeVirtualLinkThumbnailImageDeleteArgs} args - Arguments to delete one CafeVirtualLinkThumbnailImage.
     * @example
     * // Delete one CafeVirtualLinkThumbnailImage
     * const CafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.delete({
     *   where: {
     *     // ... filter to delete one CafeVirtualLinkThumbnailImage
     *   }
     * })
     * 
    **/
    delete<T extends CafeVirtualLinkThumbnailImageDeleteArgs>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageDeleteArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Update one CafeVirtualLinkThumbnailImage.
     * @param {CafeVirtualLinkThumbnailImageUpdateArgs} args - Arguments to update one CafeVirtualLinkThumbnailImage.
     * @example
     * // Update one CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CafeVirtualLinkThumbnailImageUpdateArgs>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageUpdateArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Delete zero or more CafeVirtualLinkThumbnailImages.
     * @param {CafeVirtualLinkThumbnailImageDeleteManyArgs} args - Arguments to filter CafeVirtualLinkThumbnailImages to delete.
     * @example
     * // Delete a few CafeVirtualLinkThumbnailImages
     * const { count } = await prisma.cafeVirtualLinkThumbnailImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CafeVirtualLinkThumbnailImageDeleteManyArgs>(
      args?: SelectSubset<T, CafeVirtualLinkThumbnailImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeVirtualLinkThumbnailImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeVirtualLinkThumbnailImages
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CafeVirtualLinkThumbnailImageUpdateManyArgs>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CafeVirtualLinkThumbnailImage.
     * @param {CafeVirtualLinkThumbnailImageUpsertArgs} args - Arguments to update or create a CafeVirtualLinkThumbnailImage.
     * @example
     * // Update or create a CafeVirtualLinkThumbnailImage
     * const cafeVirtualLinkThumbnailImage = await prisma.cafeVirtualLinkThumbnailImage.upsert({
     *   create: {
     *     // ... data to create a CafeVirtualLinkThumbnailImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeVirtualLinkThumbnailImage we want to update
     *   }
     * })
    **/
    upsert<T extends CafeVirtualLinkThumbnailImageUpsertArgs>(
      args: SelectSubset<T, CafeVirtualLinkThumbnailImageUpsertArgs>
    ): Prisma__CafeVirtualLinkThumbnailImageClient<CafeVirtualLinkThumbnailImageGetPayload<T>>

    /**
     * Count the number of CafeVirtualLinkThumbnailImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageCountArgs} args - Arguments to filter CafeVirtualLinkThumbnailImages to count.
     * @example
     * // Count the number of CafeVirtualLinkThumbnailImages
     * const count = await prisma.cafeVirtualLinkThumbnailImage.count({
     *   where: {
     *     // ... the filter for the CafeVirtualLinkThumbnailImages we want to count
     *   }
     * })
    **/
    count<T extends CafeVirtualLinkThumbnailImageCountArgs>(
      args?: Subset<T, CafeVirtualLinkThumbnailImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeVirtualLinkThumbnailImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeVirtualLinkThumbnailImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CafeVirtualLinkThumbnailImageAggregateArgs>(args: Subset<T, CafeVirtualLinkThumbnailImageAggregateArgs>): PrismaPromise<GetCafeVirtualLinkThumbnailImageAggregateType<T>>

    /**
     * Group by CafeVirtualLinkThumbnailImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeVirtualLinkThumbnailImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CafeVirtualLinkThumbnailImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeVirtualLinkThumbnailImageGroupByArgs['orderBy'] }
        : { orderBy?: CafeVirtualLinkThumbnailImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CafeVirtualLinkThumbnailImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeVirtualLinkThumbnailImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeVirtualLinkThumbnailImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CafeVirtualLinkThumbnailImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CafeVirtualLink<T extends CafeVirtualLinkArgs= {}>(args?: Subset<T, CafeVirtualLinkArgs>): Prisma__CafeVirtualLinkClient<CafeVirtualLinkGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CafeVirtualLinkThumbnailImage base type for findUnique actions
   */
  export type CafeVirtualLinkThumbnailImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter, which CafeVirtualLinkThumbnailImage to fetch.
     * 
    **/
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }

  /**
   * CafeVirtualLinkThumbnailImage: findUnique
   */
  export interface CafeVirtualLinkThumbnailImageFindUniqueArgs extends CafeVirtualLinkThumbnailImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualLinkThumbnailImage findUniqueOrThrow
   */
  export type CafeVirtualLinkThumbnailImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter, which CafeVirtualLinkThumbnailImage to fetch.
     * 
    **/
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }


  /**
   * CafeVirtualLinkThumbnailImage base type for findFirst actions
   */
  export type CafeVirtualLinkThumbnailImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter, which CafeVirtualLinkThumbnailImage to fetch.
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinkThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualLinkThumbnailImages.
     * 
    **/
    cursor?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinkThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinkThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualLinkThumbnailImages.
     * 
    **/
    distinct?: Enumerable<CafeVirtualLinkThumbnailImageScalarFieldEnum>
  }

  /**
   * CafeVirtualLinkThumbnailImage: findFirst
   */
  export interface CafeVirtualLinkThumbnailImageFindFirstArgs extends CafeVirtualLinkThumbnailImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CafeVirtualLinkThumbnailImage findFirstOrThrow
   */
  export type CafeVirtualLinkThumbnailImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter, which CafeVirtualLinkThumbnailImage to fetch.
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinkThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeVirtualLinkThumbnailImages.
     * 
    **/
    cursor?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinkThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinkThumbnailImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeVirtualLinkThumbnailImages.
     * 
    **/
    distinct?: Enumerable<CafeVirtualLinkThumbnailImageScalarFieldEnum>
  }


  /**
   * CafeVirtualLinkThumbnailImage findMany
   */
  export type CafeVirtualLinkThumbnailImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter, which CafeVirtualLinkThumbnailImages to fetch.
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeVirtualLinkThumbnailImages to fetch.
     * 
    **/
    orderBy?: Enumerable<CafeVirtualLinkThumbnailImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeVirtualLinkThumbnailImages.
     * 
    **/
    cursor?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeVirtualLinkThumbnailImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeVirtualLinkThumbnailImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CafeVirtualLinkThumbnailImageScalarFieldEnum>
  }


  /**
   * CafeVirtualLinkThumbnailImage create
   */
  export type CafeVirtualLinkThumbnailImageCreateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * The data needed to create a CafeVirtualLinkThumbnailImage.
     * 
    **/
    data: XOR<CafeVirtualLinkThumbnailImageCreateInput, CafeVirtualLinkThumbnailImageUncheckedCreateInput>
  }


  /**
   * CafeVirtualLinkThumbnailImage createMany
   */
  export type CafeVirtualLinkThumbnailImageCreateManyArgs = {
    /**
     * The data used to create many CafeVirtualLinkThumbnailImages.
     * 
    **/
    data: Enumerable<CafeVirtualLinkThumbnailImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CafeVirtualLinkThumbnailImage update
   */
  export type CafeVirtualLinkThumbnailImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * The data needed to update a CafeVirtualLinkThumbnailImage.
     * 
    **/
    data: XOR<CafeVirtualLinkThumbnailImageUpdateInput, CafeVirtualLinkThumbnailImageUncheckedUpdateInput>
    /**
     * Choose, which CafeVirtualLinkThumbnailImage to update.
     * 
    **/
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }


  /**
   * CafeVirtualLinkThumbnailImage updateMany
   */
  export type CafeVirtualLinkThumbnailImageUpdateManyArgs = {
    /**
     * The data used to update CafeVirtualLinkThumbnailImages.
     * 
    **/
    data: XOR<CafeVirtualLinkThumbnailImageUpdateManyMutationInput, CafeVirtualLinkThumbnailImageUncheckedUpdateManyInput>
    /**
     * Filter which CafeVirtualLinkThumbnailImages to update
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
  }


  /**
   * CafeVirtualLinkThumbnailImage upsert
   */
  export type CafeVirtualLinkThumbnailImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * The filter to search for the CafeVirtualLinkThumbnailImage to update in case it exists.
     * 
    **/
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
    /**
     * In case the CafeVirtualLinkThumbnailImage found by the `where` argument doesn't exist, create a new CafeVirtualLinkThumbnailImage with this data.
     * 
    **/
    create: XOR<CafeVirtualLinkThumbnailImageCreateInput, CafeVirtualLinkThumbnailImageUncheckedCreateInput>
    /**
     * In case the CafeVirtualLinkThumbnailImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CafeVirtualLinkThumbnailImageUpdateInput, CafeVirtualLinkThumbnailImageUncheckedUpdateInput>
  }


  /**
   * CafeVirtualLinkThumbnailImage delete
   */
  export type CafeVirtualLinkThumbnailImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
    /**
     * Filter which CafeVirtualLinkThumbnailImage to delete.
     * 
    **/
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }


  /**
   * CafeVirtualLinkThumbnailImage deleteMany
   */
  export type CafeVirtualLinkThumbnailImageDeleteManyArgs = {
    /**
     * Filter which CafeVirtualLinkThumbnailImages to delete
     * 
    **/
    where?: CafeVirtualLinkThumbnailImageWhereInput
  }


  /**
   * CafeVirtualLinkThumbnailImage without action
   */
  export type CafeVirtualLinkThumbnailImageArgs = {
    /**
     * Select specific fields to fetch from the CafeVirtualLinkThumbnailImage
     * 
    **/
    select?: CafeVirtualLinkThumbnailImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CafeVirtualLinkThumbnailImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BoardImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    isThumb: 'isThumb',
    boardId: 'boardId'
  };

  export type BoardImageScalarFieldEnum = (typeof BoardImageScalarFieldEnum)[keyof typeof BoardImageScalarFieldEnum]


  export const BoardReplyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    isDisable: 'isDisable',
    userId: 'userId',
    boardId: 'boardId',
    boardReplyId: 'boardReplyId',
    boardType: 'boardType'
  };

  export type BoardReplyScalarFieldEnum = (typeof BoardReplyScalarFieldEnum)[keyof typeof BoardReplyScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    startDay: 'startDay',
    endDay: 'endDay',
    isDisable: 'isDisable',
    userId: 'userId',
    boardType: 'boardType'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const CafeInfoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    isDisable: 'isDisable',
    name: 'name',
    regionCategoryId: 'regionCategoryId',
    address: 'address',
    directions: 'directions',
    businessNumber: 'businessNumber',
    ceoName: 'ceoName'
  };

  export type CafeInfoScalarFieldEnum = (typeof CafeInfoScalarFieldEnum)[keyof typeof CafeInfoScalarFieldEnum]


  export const CafeRealImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    priority: 'priority',
    isDisable: 'isDisable',
    cafeInfoId: 'cafeInfoId'
  };

  export type CafeRealImageScalarFieldEnum = (typeof CafeRealImageScalarFieldEnum)[keyof typeof CafeRealImageScalarFieldEnum]


  export const CafeThumbnailImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    priority: 'priority',
    isDisable: 'isDisable',
    cafeInfoId: 'cafeInfoId'
  };

  export type CafeThumbnailImageScalarFieldEnum = (typeof CafeThumbnailImageScalarFieldEnum)[keyof typeof CafeThumbnailImageScalarFieldEnum]


  export const CafeVirtualImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    priority: 'priority',
    isDisable: 'isDisable',
    cafeInfoId: 'cafeInfoId'
  };

  export type CafeVirtualImageScalarFieldEnum = (typeof CafeVirtualImageScalarFieldEnum)[keyof typeof CafeVirtualImageScalarFieldEnum]


  export const CafeVirtualLinkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    url: 'url',
    type: 'type',
    isDisable: 'isDisable',
    isAvaliable: 'isAvaliable',
    cafeInfoId: 'cafeInfoId'
  };

  export type CafeVirtualLinkScalarFieldEnum = (typeof CafeVirtualLinkScalarFieldEnum)[keyof typeof CafeVirtualLinkScalarFieldEnum]


  export const CafeVirtualLinkThumbnailImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    cafeVirtualLinkId: 'cafeVirtualLinkId'
  };

  export type CafeVirtualLinkThumbnailImageScalarFieldEnum = (typeof CafeVirtualLinkThumbnailImageScalarFieldEnum)[keyof typeof CafeVirtualLinkThumbnailImageScalarFieldEnum]


  export const ClosureRegionCategoryScalarFieldEnum: {
    ancestor: 'ancestor',
    descendant: 'descendant',
    depth: 'depth'
  };

  export type ClosureRegionCategoryScalarFieldEnum = (typeof ClosureRegionCategoryScalarFieldEnum)[keyof typeof ClosureRegionCategoryScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    userId: 'userId'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RegionCategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    isDisable: 'isDisable',
    govermentType: 'govermentType'
  };

  export type RegionCategoryScalarFieldEnum = (typeof RegionCategoryScalarFieldEnum)[keyof typeof RegionCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    loginId: 'loginId',
    loginPw: 'loginPw',
    username: 'username',
    loginType: 'loginType',
    userType: 'userType',
    nickname: 'nickname',
    email: 'email',
    isDisable: 'isDisable'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    loginId?: StringFilter | string
    loginPw?: StringNullableFilter | string | null
    username?: StringFilter | string
    loginType?: EnumLoginTypeFilter | LoginType
    userType?: EnumUserTypeFilter | UserType
    nickname?: StringFilter | string
    email?: StringFilter | string
    isDisable?: BoolFilter | boolean
    Boards?: BoardListRelationFilter
    BoardReplies?: BoardReplyListRelationFilter
    Notices?: NoticeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    isDisable?: SortOrder
    Boards?: BoardOrderByRelationAggregateInput
    BoardReplies?: BoardReplyOrderByRelationAggregateInput
    Notices?: NoticeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    loginUnique?: UserLoginUniqueCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    isDisable?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    loginId?: StringWithAggregatesFilter | string
    loginPw?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    loginType?: EnumLoginTypeWithAggregatesFilter | LoginType
    userType?: EnumUserTypeWithAggregatesFilter | UserType
    nickname?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
  }

  export type NoticeWhereInput = {
    AND?: Enumerable<NoticeWhereInput>
    OR?: Enumerable<NoticeWhereInput>
    NOT?: Enumerable<NoticeWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type NoticeWhereUniqueInput = {
    id?: number
  }

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    OR?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type BoardWhereInput = {
    AND?: Enumerable<BoardWhereInput>
    OR?: Enumerable<BoardWhereInput>
    NOT?: Enumerable<BoardWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    BoardImages?: BoardImageListRelationFilter
    BoardReplies?: BoardReplyListRelationFilter
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    BoardImages?: BoardImageOrderByRelationAggregateInput
    BoardReplies?: BoardReplyOrderByRelationAggregateInput
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardType?: SortOrder
  }

  export type BoardWhereUniqueInput = {
    id?: number
  }

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    startDay?: DateTimeWithAggregatesFilter | Date | string
    endDay?: DateTimeWithAggregatesFilter | Date | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type BoardImageWhereInput = {
    AND?: Enumerable<BoardImageWhereInput>
    OR?: Enumerable<BoardImageWhereInput>
    NOT?: Enumerable<BoardImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
  }

  export type BoardImageWhereUniqueInput = {
    id?: number
    boardId?: number
  }

  export type BoardImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    _count?: BoardImageCountOrderByAggregateInput
    _avg?: BoardImageAvgOrderByAggregateInput
    _max?: BoardImageMaxOrderByAggregateInput
    _min?: BoardImageMinOrderByAggregateInput
    _sum?: BoardImageSumOrderByAggregateInput
  }

  export type BoardImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    isThumb?: BoolWithAggregatesFilter | boolean
    boardId?: IntWithAggregatesFilter | number
  }

  export type BoardReplyWhereInput = {
    AND?: Enumerable<BoardReplyWhereInput>
    OR?: Enumerable<BoardReplyWhereInput>
    NOT?: Enumerable<BoardReplyWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
    boardReplyId?: IntNullableFilter | number | null
    BoardReply?: XOR<BoardReplyRelationFilter, BoardReplyWhereInput> | null
    BoardNestedReplies?: BoardReplyListRelationFilter
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
    boardReplyId?: SortOrder
    BoardReply?: BoardReplyOrderByWithRelationInput
    BoardNestedReplies?: BoardReplyOrderByRelationAggregateInput
    boardType?: SortOrder
  }

  export type BoardReplyWhereUniqueInput = {
    id?: number
  }

  export type BoardReplyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
    _count?: BoardReplyCountOrderByAggregateInput
    _avg?: BoardReplyAvgOrderByAggregateInput
    _max?: BoardReplyMaxOrderByAggregateInput
    _min?: BoardReplyMinOrderByAggregateInput
    _sum?: BoardReplySumOrderByAggregateInput
  }

  export type BoardReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    content?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardId?: IntWithAggregatesFilter | number
    boardReplyId?: IntNullableWithAggregatesFilter | number | null
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type RegionCategoryWhereInput = {
    AND?: Enumerable<RegionCategoryWhereInput>
    OR?: Enumerable<RegionCategoryWhereInput>
    NOT?: Enumerable<RegionCategoryWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    isDisable?: BoolFilter | boolean
    govermentType?: EnumGovermentTypeFilter | GovermentType
    CafeInfos?: CafeInfoListRelationFilter
    AncestorCategories?: ClosureRegionCategoryListRelationFilter
    DescendantCategories?: ClosureRegionCategoryListRelationFilter
  }

  export type RegionCategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    isDisable?: SortOrder
    govermentType?: SortOrder
    CafeInfos?: CafeInfoOrderByRelationAggregateInput
    AncestorCategories?: ClosureRegionCategoryOrderByRelationAggregateInput
    DescendantCategories?: ClosureRegionCategoryOrderByRelationAggregateInput
  }

  export type RegionCategoryWhereUniqueInput = {
    id?: number
  }

  export type RegionCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    isDisable?: SortOrder
    govermentType?: SortOrder
    _count?: RegionCategoryCountOrderByAggregateInput
    _avg?: RegionCategoryAvgOrderByAggregateInput
    _max?: RegionCategoryMaxOrderByAggregateInput
    _min?: RegionCategoryMinOrderByAggregateInput
    _sum?: RegionCategorySumOrderByAggregateInput
  }

  export type RegionCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RegionCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<RegionCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RegionCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
    govermentType?: EnumGovermentTypeWithAggregatesFilter | GovermentType
  }

  export type ClosureRegionCategoryWhereInput = {
    AND?: Enumerable<ClosureRegionCategoryWhereInput>
    OR?: Enumerable<ClosureRegionCategoryWhereInput>
    NOT?: Enumerable<ClosureRegionCategoryWhereInput>
    ancestor?: IntFilter | number
    descendant?: IntFilter | number
    depth?: IntFilter | number
    AncestorCategory?: XOR<RegionCategoryRelationFilter, RegionCategoryWhereInput>
    DescendantCategory?: XOR<RegionCategoryRelationFilter, RegionCategoryWhereInput>
  }

  export type ClosureRegionCategoryOrderByWithRelationInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
    AncestorCategory?: RegionCategoryOrderByWithRelationInput
    DescendantCategory?: RegionCategoryOrderByWithRelationInput
  }

  export type ClosureRegionCategoryWhereUniqueInput = {
    regionCategoryTreeUnique?: ClosureRegionCategoryRegionCategoryTreeUniqueCompoundUniqueInput
  }

  export type ClosureRegionCategoryOrderByWithAggregationInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
    _count?: ClosureRegionCategoryCountOrderByAggregateInput
    _avg?: ClosureRegionCategoryAvgOrderByAggregateInput
    _max?: ClosureRegionCategoryMaxOrderByAggregateInput
    _min?: ClosureRegionCategoryMinOrderByAggregateInput
    _sum?: ClosureRegionCategorySumOrderByAggregateInput
  }

  export type ClosureRegionCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClosureRegionCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClosureRegionCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClosureRegionCategoryScalarWhereWithAggregatesInput>
    ancestor?: IntWithAggregatesFilter | number
    descendant?: IntWithAggregatesFilter | number
    depth?: IntWithAggregatesFilter | number
  }

  export type CafeInfoWhereInput = {
    AND?: Enumerable<CafeInfoWhereInput>
    OR?: Enumerable<CafeInfoWhereInput>
    NOT?: Enumerable<CafeInfoWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    name?: StringFilter | string
    regionCategoryId?: IntFilter | number
    RegionCategory?: XOR<RegionCategoryRelationFilter, RegionCategoryWhereInput>
    address?: StringFilter | string
    directions?: StringFilter | string
    businessNumber?: StringFilter | string
    ceoName?: StringFilter | string
    CafeVirtualLinks?: CafeVirtualLinkListRelationFilter
    CafeThumbnailImages?: CafeThumbnailImageListRelationFilter
    CafeVirtualImages?: CafeVirtualImageListRelationFilter
    CafeRealImages?: CafeRealImageListRelationFilter
  }

  export type CafeInfoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    isDisable?: SortOrder
    name?: SortOrder
    regionCategoryId?: SortOrder
    RegionCategory?: RegionCategoryOrderByWithRelationInput
    address?: SortOrder
    directions?: SortOrder
    businessNumber?: SortOrder
    ceoName?: SortOrder
    CafeVirtualLinks?: CafeVirtualLinkOrderByRelationAggregateInput
    CafeThumbnailImages?: CafeThumbnailImageOrderByRelationAggregateInput
    CafeVirtualImages?: CafeVirtualImageOrderByRelationAggregateInput
    CafeRealImages?: CafeRealImageOrderByRelationAggregateInput
  }

  export type CafeInfoWhereUniqueInput = {
    id?: number
  }

  export type CafeInfoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    isDisable?: SortOrder
    name?: SortOrder
    regionCategoryId?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    businessNumber?: SortOrder
    ceoName?: SortOrder
    _count?: CafeInfoCountOrderByAggregateInput
    _avg?: CafeInfoAvgOrderByAggregateInput
    _max?: CafeInfoMaxOrderByAggregateInput
    _min?: CafeInfoMinOrderByAggregateInput
    _sum?: CafeInfoSumOrderByAggregateInput
  }

  export type CafeInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeInfoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    isDisable?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    regionCategoryId?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
    directions?: StringWithAggregatesFilter | string
    businessNumber?: StringWithAggregatesFilter | string
    ceoName?: StringWithAggregatesFilter | string
  }

  export type CafeThumbnailImageWhereInput = {
    AND?: Enumerable<CafeThumbnailImageWhereInput>
    OR?: Enumerable<CafeThumbnailImageWhereInput>
    NOT?: Enumerable<CafeThumbnailImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
    CafeInfo?: XOR<CafeInfoRelationFilter, CafeInfoWhereInput>
  }

  export type CafeThumbnailImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    CafeInfo?: CafeInfoOrderByWithRelationInput
  }

  export type CafeThumbnailImageWhereUniqueInput = {
    id?: number
  }

  export type CafeThumbnailImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    _count?: CafeThumbnailImageCountOrderByAggregateInput
    _avg?: CafeThumbnailImageAvgOrderByAggregateInput
    _max?: CafeThumbnailImageMaxOrderByAggregateInput
    _min?: CafeThumbnailImageMinOrderByAggregateInput
    _sum?: CafeThumbnailImageSumOrderByAggregateInput
  }

  export type CafeThumbnailImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeThumbnailImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeThumbnailImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeThumbnailImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    priority?: IntWithAggregatesFilter | number
    isDisable?: BoolWithAggregatesFilter | boolean
    cafeInfoId?: IntWithAggregatesFilter | number
  }

  export type CafeVirtualImageWhereInput = {
    AND?: Enumerable<CafeVirtualImageWhereInput>
    OR?: Enumerable<CafeVirtualImageWhereInput>
    NOT?: Enumerable<CafeVirtualImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
    CafeInfo?: XOR<CafeInfoRelationFilter, CafeInfoWhereInput>
  }

  export type CafeVirtualImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    CafeInfo?: CafeInfoOrderByWithRelationInput
  }

  export type CafeVirtualImageWhereUniqueInput = {
    id?: number
  }

  export type CafeVirtualImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    _count?: CafeVirtualImageCountOrderByAggregateInput
    _avg?: CafeVirtualImageAvgOrderByAggregateInput
    _max?: CafeVirtualImageMaxOrderByAggregateInput
    _min?: CafeVirtualImageMinOrderByAggregateInput
    _sum?: CafeVirtualImageSumOrderByAggregateInput
  }

  export type CafeVirtualImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeVirtualImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeVirtualImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeVirtualImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    priority?: IntWithAggregatesFilter | number
    isDisable?: BoolWithAggregatesFilter | boolean
    cafeInfoId?: IntWithAggregatesFilter | number
  }

  export type CafeRealImageWhereInput = {
    AND?: Enumerable<CafeRealImageWhereInput>
    OR?: Enumerable<CafeRealImageWhereInput>
    NOT?: Enumerable<CafeRealImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
    CafeInfo?: XOR<CafeInfoRelationFilter, CafeInfoWhereInput>
  }

  export type CafeRealImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    CafeInfo?: CafeInfoOrderByWithRelationInput
  }

  export type CafeRealImageWhereUniqueInput = {
    id?: number
  }

  export type CafeRealImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
    _count?: CafeRealImageCountOrderByAggregateInput
    _avg?: CafeRealImageAvgOrderByAggregateInput
    _max?: CafeRealImageMaxOrderByAggregateInput
    _min?: CafeRealImageMinOrderByAggregateInput
    _sum?: CafeRealImageSumOrderByAggregateInput
  }

  export type CafeRealImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeRealImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeRealImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeRealImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    priority?: IntWithAggregatesFilter | number
    isDisable?: BoolWithAggregatesFilter | boolean
    cafeInfoId?: IntWithAggregatesFilter | number
  }

  export type CafeVirtualLinkWhereInput = {
    AND?: Enumerable<CafeVirtualLinkWhereInput>
    OR?: Enumerable<CafeVirtualLinkWhereInput>
    NOT?: Enumerable<CafeVirtualLinkWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    url?: StringFilter | string
    type?: StringFilter | string
    isDisable?: BoolFilter | boolean
    isAvaliable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
    CafeInfo?: XOR<CafeInfoRelationFilter, CafeInfoWhereInput>
    CafeVirtualLinkThumbnailImage?: XOR<CafeVirtualLinkThumbnailImageRelationFilter, CafeVirtualLinkThumbnailImageWhereInput> | null
  }

  export type CafeVirtualLinkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    isDisable?: SortOrder
    isAvaliable?: SortOrder
    cafeInfoId?: SortOrder
    CafeInfo?: CafeInfoOrderByWithRelationInput
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageOrderByWithRelationInput
  }

  export type CafeVirtualLinkWhereUniqueInput = {
    id?: number
  }

  export type CafeVirtualLinkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    isDisable?: SortOrder
    isAvaliable?: SortOrder
    cafeInfoId?: SortOrder
    _count?: CafeVirtualLinkCountOrderByAggregateInput
    _avg?: CafeVirtualLinkAvgOrderByAggregateInput
    _max?: CafeVirtualLinkMaxOrderByAggregateInput
    _min?: CafeVirtualLinkMinOrderByAggregateInput
    _sum?: CafeVirtualLinkSumOrderByAggregateInput
  }

  export type CafeVirtualLinkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeVirtualLinkScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeVirtualLinkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeVirtualLinkScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
    isAvaliable?: BoolWithAggregatesFilter | boolean
    cafeInfoId?: IntWithAggregatesFilter | number
  }

  export type CafeVirtualLinkThumbnailImageWhereInput = {
    AND?: Enumerable<CafeVirtualLinkThumbnailImageWhereInput>
    OR?: Enumerable<CafeVirtualLinkThumbnailImageWhereInput>
    NOT?: Enumerable<CafeVirtualLinkThumbnailImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    cafeVirtualLinkId?: IntFilter | number
    CafeVirtualLink?: XOR<CafeVirtualLinkRelationFilter, CafeVirtualLinkWhereInput>
  }

  export type CafeVirtualLinkThumbnailImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
    CafeVirtualLink?: CafeVirtualLinkOrderByWithRelationInput
  }

  export type CafeVirtualLinkThumbnailImageWhereUniqueInput = {
    id?: number
    cafeVirtualLinkId?: number
  }

  export type CafeVirtualLinkThumbnailImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
    _count?: CafeVirtualLinkThumbnailImageCountOrderByAggregateInput
    _avg?: CafeVirtualLinkThumbnailImageAvgOrderByAggregateInput
    _max?: CafeVirtualLinkThumbnailImageMaxOrderByAggregateInput
    _min?: CafeVirtualLinkThumbnailImageMinOrderByAggregateInput
    _sum?: CafeVirtualLinkThumbnailImageSumOrderByAggregateInput
  }

  export type CafeVirtualLinkThumbnailImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CafeVirtualLinkThumbnailImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<CafeVirtualLinkThumbnailImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CafeVirtualLinkThumbnailImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    cafeVirtualLinkId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardCreateNestedManyWithoutUserInput
    BoardReplies?: BoardReplyCreateNestedManyWithoutUserInput
    Notices?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notices?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUpdateManyWithoutUserNestedInput
    BoardReplies?: BoardReplyUpdateManyWithoutUserNestedInput
    Notices?: NoticeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutUserNestedInput
    Notices?: NoticeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    User: UserCreateNestedOneWithoutNoticesInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutNoticesNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NoticeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReplies?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardsInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUpdateManyWithoutBoardNestedInput
    BoardReplies?: BoardReplyUpdateManyWithoutBoardNestedInput
    User?: UserUpdateOneRequiredWithoutBoardsNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUncheckedUpdateManyWithoutBoardNestedInput
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutBoardNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    Board: BoardCreateNestedOneWithoutBoardImagesInput
  }

  export type BoardImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardImagesNestedInput
  }

  export type BoardImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardReplyCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardRepliesInput
    Board: BoardCreateNestedOneWithoutBoardRepliesInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedRepliesInput
    BoardNestedReplies?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    BoardNestedReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardRepliesNestedInput
    Board?: BoardUpdateOneRequiredWithoutBoardRepliesNestedInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedRepliesNestedInput
    BoardNestedReplies?: BoardReplyUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReplies?: BoardReplyUncheckedUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type RegionCategoryCreateInput = {
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoCreateNestedManyWithoutRegionCategoryInput
    AncestorCategories?: ClosureRegionCategoryCreateNestedManyWithoutAncestorCategoryInput
    DescendantCategories?: ClosureRegionCategoryCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoUncheckedCreateNestedManyWithoutRegionCategoryInput
    AncestorCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutAncestorCategoryInput
    DescendantCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUpdateManyWithoutRegionCategoryNestedInput
    AncestorCategories?: ClosureRegionCategoryUpdateManyWithoutAncestorCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type RegionCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUncheckedUpdateManyWithoutRegionCategoryNestedInput
    AncestorCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type RegionCategoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
  }

  export type RegionCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
  }

  export type RegionCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
  }

  export type ClosureRegionCategoryCreateInput = {
    depth?: number
    AncestorCategory: RegionCategoryCreateNestedOneWithoutAncestorCategoriesInput
    DescendantCategory: RegionCategoryCreateNestedOneWithoutDescendantCategoriesInput
  }

  export type ClosureRegionCategoryUncheckedCreateInput = {
    ancestor: number
    descendant: number
    depth?: number
  }

  export type ClosureRegionCategoryUpdateInput = {
    depth?: IntFieldUpdateOperationsInput | number
    AncestorCategory?: RegionCategoryUpdateOneRequiredWithoutAncestorCategoriesNestedInput
    DescendantCategory?: RegionCategoryUpdateOneRequiredWithoutDescendantCategoriesNestedInput
  }

  export type ClosureRegionCategoryUncheckedUpdateInput = {
    ancestor?: IntFieldUpdateOperationsInput | number
    descendant?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ClosureRegionCategoryCreateManyInput = {
    ancestor: number
    descendant: number
    depth?: number
  }

  export type ClosureRegionCategoryUpdateManyMutationInput = {
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ClosureRegionCategoryUncheckedUpdateManyInput = {
    ancestor?: IntFieldUpdateOperationsInput | number
    descendant?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CafeInfoCreateInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    RegionCategory: RegionCategoryCreateNestedOneWithoutCafeInfosInput
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    RegionCategory?: RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoCreateManyInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
  }

  export type CafeInfoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
  }

  export type CafeInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
  }

  export type CafeThumbnailImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    CafeInfo: CafeInfoCreateNestedOneWithoutCafeThumbnailImagesInput
  }

  export type CafeThumbnailImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeThumbnailImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    CafeInfo?: CafeInfoUpdateOneRequiredWithoutCafeThumbnailImagesNestedInput
  }

  export type CafeThumbnailImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeThumbnailImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeThumbnailImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeThumbnailImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    CafeInfo: CafeInfoCreateNestedOneWithoutCafeVirtualImagesInput
  }

  export type CafeVirtualImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeVirtualImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    CafeInfo?: CafeInfoUpdateOneRequiredWithoutCafeVirtualImagesNestedInput
  }

  export type CafeVirtualImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeVirtualImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeVirtualImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeRealImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    CafeInfo: CafeInfoCreateNestedOneWithoutCafeRealImagesInput
  }

  export type CafeRealImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeRealImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    CafeInfo?: CafeInfoUpdateOneRequiredWithoutCafeRealImagesNestedInput
  }

  export type CafeRealImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeRealImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
    cafeInfoId: number
  }

  export type CafeRealImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeRealImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkCreateInput = {
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    CafeInfo: CafeInfoCreateNestedOneWithoutCafeVirtualLinksInput
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageCreateNestedOneWithoutCafeVirtualLinkInput
  }

  export type CafeVirtualLinkUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    cafeInfoId: number
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUncheckedCreateNestedOneWithoutCafeVirtualLinkInput
  }

  export type CafeVirtualLinkUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    CafeInfo?: CafeInfoUpdateOneRequiredWithoutCafeVirtualLinksNestedInput
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUpdateOneWithoutCafeVirtualLinkNestedInput
  }

  export type CafeVirtualLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUncheckedUpdateOneWithoutCafeVirtualLinkNestedInput
  }

  export type CafeVirtualLinkCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    cafeInfoId: number
  }

  export type CafeVirtualLinkUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeVirtualLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkThumbnailImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    CafeVirtualLink: CafeVirtualLinkCreateNestedOneWithoutCafeVirtualLinkThumbnailImageInput
  }

  export type CafeVirtualLinkThumbnailImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    cafeVirtualLinkId: number
  }

  export type CafeVirtualLinkThumbnailImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    CafeVirtualLink?: CafeVirtualLinkUpdateOneRequiredWithoutCafeVirtualLinkThumbnailImageNestedInput
  }

  export type CafeVirtualLinkThumbnailImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    cafeVirtualLinkId?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkThumbnailImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    cafeVirtualLinkId: number
  }

  export type CafeVirtualLinkThumbnailImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkThumbnailImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    cafeVirtualLinkId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type EnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type BoardReplyListRelationFilter = {
    every?: BoardReplyWhereInput
    some?: BoardReplyWhereInput
    none?: BoardReplyWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoginUniqueCompoundUniqueInput = {
    loginType: LoginType
    loginId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    isDisable?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    isDisable?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    isDisable?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type EnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardImageListRelationFilter = {
    every?: BoardImageWhereInput
    some?: BoardImageWhereInput
    none?: BoardImageWhereInput
  }

  export type EnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type BoardImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoardReplyRelationFilter = {
    is?: BoardReplyWhereInput | null
    isNot?: BoardReplyWhereInput | null
  }

  export type BoardReplyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type BoardReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumGovermentTypeFilter = {
    equals?: GovermentType
    in?: Enumerable<GovermentType>
    notIn?: Enumerable<GovermentType>
    not?: NestedEnumGovermentTypeFilter | GovermentType
  }

  export type CafeInfoListRelationFilter = {
    every?: CafeInfoWhereInput
    some?: CafeInfoWhereInput
    none?: CafeInfoWhereInput
  }

  export type ClosureRegionCategoryListRelationFilter = {
    every?: ClosureRegionCategoryWhereInput
    some?: ClosureRegionCategoryWhereInput
    none?: ClosureRegionCategoryWhereInput
  }

  export type CafeInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClosureRegionCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    isDisable?: SortOrder
    govermentType?: SortOrder
  }

  export type RegionCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    isDisable?: SortOrder
    govermentType?: SortOrder
  }

  export type RegionCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    isDisable?: SortOrder
    govermentType?: SortOrder
  }

  export type RegionCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGovermentTypeWithAggregatesFilter = {
    equals?: GovermentType
    in?: Enumerable<GovermentType>
    notIn?: Enumerable<GovermentType>
    not?: NestedEnumGovermentTypeWithAggregatesFilter | GovermentType
    _count?: NestedIntFilter
    _min?: NestedEnumGovermentTypeFilter
    _max?: NestedEnumGovermentTypeFilter
  }

  export type RegionCategoryRelationFilter = {
    is?: RegionCategoryWhereInput
    isNot?: RegionCategoryWhereInput
  }

  export type ClosureRegionCategoryRegionCategoryTreeUniqueCompoundUniqueInput = {
    ancestor: number
    descendant: number
    depth: number
  }

  export type ClosureRegionCategoryCountOrderByAggregateInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
  }

  export type ClosureRegionCategoryAvgOrderByAggregateInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
  }

  export type ClosureRegionCategoryMaxOrderByAggregateInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
  }

  export type ClosureRegionCategoryMinOrderByAggregateInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
  }

  export type ClosureRegionCategorySumOrderByAggregateInput = {
    ancestor?: SortOrder
    descendant?: SortOrder
    depth?: SortOrder
  }

  export type CafeVirtualLinkListRelationFilter = {
    every?: CafeVirtualLinkWhereInput
    some?: CafeVirtualLinkWhereInput
    none?: CafeVirtualLinkWhereInput
  }

  export type CafeThumbnailImageListRelationFilter = {
    every?: CafeThumbnailImageWhereInput
    some?: CafeThumbnailImageWhereInput
    none?: CafeThumbnailImageWhereInput
  }

  export type CafeVirtualImageListRelationFilter = {
    every?: CafeVirtualImageWhereInput
    some?: CafeVirtualImageWhereInput
    none?: CafeVirtualImageWhereInput
  }

  export type CafeRealImageListRelationFilter = {
    every?: CafeRealImageWhereInput
    some?: CafeRealImageWhereInput
    none?: CafeRealImageWhereInput
  }

  export type CafeVirtualLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeThumbnailImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeVirtualImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeRealImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeInfoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    isDisable?: SortOrder
    name?: SortOrder
    regionCategoryId?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    businessNumber?: SortOrder
    ceoName?: SortOrder
  }

  export type CafeInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    regionCategoryId?: SortOrder
  }

  export type CafeInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    isDisable?: SortOrder
    name?: SortOrder
    regionCategoryId?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    businessNumber?: SortOrder
    ceoName?: SortOrder
  }

  export type CafeInfoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    isDisable?: SortOrder
    name?: SortOrder
    regionCategoryId?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    businessNumber?: SortOrder
    ceoName?: SortOrder
  }

  export type CafeInfoSumOrderByAggregateInput = {
    id?: SortOrder
    regionCategoryId?: SortOrder
  }

  export type CafeInfoRelationFilter = {
    is?: CafeInfoWhereInput
    isNot?: CafeInfoWhereInput
  }

  export type CafeThumbnailImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeThumbnailImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeThumbnailImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeThumbnailImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeThumbnailImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeRealImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeRealImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeRealImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeRealImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    isDisable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeRealImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    priority?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkThumbnailImageRelationFilter = {
    is?: CafeVirtualLinkThumbnailImageWhereInput | null
    isNot?: CafeVirtualLinkThumbnailImageWhereInput | null
  }

  export type CafeVirtualLinkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    isDisable?: SortOrder
    isAvaliable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    isDisable?: SortOrder
    isAvaliable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    isDisable?: SortOrder
    isAvaliable?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkSumOrderByAggregateInput = {
    id?: SortOrder
    cafeInfoId?: SortOrder
  }

  export type CafeVirtualLinkRelationFilter = {
    is?: CafeVirtualLinkWhereInput
    isNot?: CafeVirtualLinkWhereInput
  }

  export type CafeVirtualLinkThumbnailImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
  }

  export type CafeVirtualLinkThumbnailImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
  }

  export type CafeVirtualLinkThumbnailImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
  }

  export type CafeVirtualLinkThumbnailImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
  }

  export type CafeVirtualLinkThumbnailImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    cafeVirtualLinkId?: SortOrder
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLoginTypeFieldUpdateOperationsInput = {
    set?: LoginType
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutNoticesInput = {
    create?: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNoticesNestedInput = {
    create?: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticesInput
    upsert?: UserUpsertWithoutNoticesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNoticesInput, UserUncheckedUpdateWithoutNoticesInput>
  }

  export type BoardImageCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardImageUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardImageUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    upsert?: UserUpsertWithoutBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type EnumBoardTypeFieldUpdateOperationsInput = {
    set?: BoardType
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type BoardCreateNestedOneWithoutBoardImagesInput = {
    create?: XOR<BoardCreateWithoutBoardImagesInput, BoardUncheckedCreateWithoutBoardImagesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImagesInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutBoardImagesNestedInput = {
    create?: XOR<BoardCreateWithoutBoardImagesInput, BoardUncheckedCreateWithoutBoardImagesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImagesInput
    upsert?: BoardUpsertWithoutBoardImagesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardImagesInput, BoardUncheckedUpdateWithoutBoardImagesInput>
  }

  export type UserCreateNestedOneWithoutBoardRepliesInput = {
    create?: XOR<UserCreateWithoutBoardRepliesInput, UserUncheckedCreateWithoutBoardRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutBoardRepliesInput = {
    create?: XOR<BoardCreateWithoutBoardRepliesInput, BoardUncheckedCreateWithoutBoardRepliesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardRepliesInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardReplyCreateNestedOneWithoutBoardNestedRepliesInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedRepliesInput, BoardReplyUncheckedCreateWithoutBoardNestedRepliesInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedRepliesInput
    connect?: BoardReplyWhereUniqueInput
  }

  export type BoardReplyCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBoardRepliesNestedInput = {
    create?: XOR<UserCreateWithoutBoardRepliesInput, UserUncheckedCreateWithoutBoardRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardRepliesInput
    upsert?: UserUpsertWithoutBoardRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardRepliesInput, UserUncheckedUpdateWithoutBoardRepliesInput>
  }

  export type BoardUpdateOneRequiredWithoutBoardRepliesNestedInput = {
    create?: XOR<BoardCreateWithoutBoardRepliesInput, BoardUncheckedCreateWithoutBoardRepliesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardRepliesInput
    upsert?: BoardUpsertWithoutBoardRepliesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardRepliesInput, BoardUncheckedUpdateWithoutBoardRepliesInput>
  }

  export type BoardReplyUpdateOneWithoutBoardNestedRepliesNestedInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedRepliesInput, BoardReplyUncheckedCreateWithoutBoardNestedRepliesInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedRepliesInput
    upsert?: BoardReplyUpsertWithoutBoardNestedRepliesInput
    disconnect?: boolean
    delete?: boolean
    connect?: BoardReplyWhereUniqueInput
    update?: XOR<BoardReplyUpdateWithoutBoardNestedRepliesInput, BoardReplyUncheckedUpdateWithoutBoardNestedRepliesInput>
  }

  export type BoardReplyUpdateManyWithoutBoardReplyNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardReplyNestedInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type CafeInfoCreateNestedManyWithoutRegionCategoryInput = {
    create?: XOR<Enumerable<CafeInfoCreateWithoutRegionCategoryInput>, Enumerable<CafeInfoUncheckedCreateWithoutRegionCategoryInput>>
    connectOrCreate?: Enumerable<CafeInfoCreateOrConnectWithoutRegionCategoryInput>
    createMany?: CafeInfoCreateManyRegionCategoryInputEnvelope
    connect?: Enumerable<CafeInfoWhereUniqueInput>
  }

  export type ClosureRegionCategoryCreateNestedManyWithoutAncestorCategoryInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutAncestorCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutAncestorCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyAncestorCategoryInputEnvelope
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
  }

  export type ClosureRegionCategoryCreateNestedManyWithoutDescendantCategoryInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutDescendantCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutDescendantCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyDescendantCategoryInputEnvelope
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
  }

  export type CafeInfoUncheckedCreateNestedManyWithoutRegionCategoryInput = {
    create?: XOR<Enumerable<CafeInfoCreateWithoutRegionCategoryInput>, Enumerable<CafeInfoUncheckedCreateWithoutRegionCategoryInput>>
    connectOrCreate?: Enumerable<CafeInfoCreateOrConnectWithoutRegionCategoryInput>
    createMany?: CafeInfoCreateManyRegionCategoryInputEnvelope
    connect?: Enumerable<CafeInfoWhereUniqueInput>
  }

  export type ClosureRegionCategoryUncheckedCreateNestedManyWithoutAncestorCategoryInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutAncestorCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutAncestorCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyAncestorCategoryInputEnvelope
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
  }

  export type ClosureRegionCategoryUncheckedCreateNestedManyWithoutDescendantCategoryInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutDescendantCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutDescendantCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyDescendantCategoryInputEnvelope
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
  }

  export type EnumGovermentTypeFieldUpdateOperationsInput = {
    set?: GovermentType
  }

  export type CafeInfoUpdateManyWithoutRegionCategoryNestedInput = {
    create?: XOR<Enumerable<CafeInfoCreateWithoutRegionCategoryInput>, Enumerable<CafeInfoUncheckedCreateWithoutRegionCategoryInput>>
    connectOrCreate?: Enumerable<CafeInfoCreateOrConnectWithoutRegionCategoryInput>
    upsert?: Enumerable<CafeInfoUpsertWithWhereUniqueWithoutRegionCategoryInput>
    createMany?: CafeInfoCreateManyRegionCategoryInputEnvelope
    set?: Enumerable<CafeInfoWhereUniqueInput>
    disconnect?: Enumerable<CafeInfoWhereUniqueInput>
    delete?: Enumerable<CafeInfoWhereUniqueInput>
    connect?: Enumerable<CafeInfoWhereUniqueInput>
    update?: Enumerable<CafeInfoUpdateWithWhereUniqueWithoutRegionCategoryInput>
    updateMany?: Enumerable<CafeInfoUpdateManyWithWhereWithoutRegionCategoryInput>
    deleteMany?: Enumerable<CafeInfoScalarWhereInput>
  }

  export type ClosureRegionCategoryUpdateManyWithoutAncestorCategoryNestedInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutAncestorCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutAncestorCategoryInput>
    upsert?: Enumerable<ClosureRegionCategoryUpsertWithWhereUniqueWithoutAncestorCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyAncestorCategoryInputEnvelope
    set?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    disconnect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    delete?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    update?: Enumerable<ClosureRegionCategoryUpdateWithWhereUniqueWithoutAncestorCategoryInput>
    updateMany?: Enumerable<ClosureRegionCategoryUpdateManyWithWhereWithoutAncestorCategoryInput>
    deleteMany?: Enumerable<ClosureRegionCategoryScalarWhereInput>
  }

  export type ClosureRegionCategoryUpdateManyWithoutDescendantCategoryNestedInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutDescendantCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutDescendantCategoryInput>
    upsert?: Enumerable<ClosureRegionCategoryUpsertWithWhereUniqueWithoutDescendantCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyDescendantCategoryInputEnvelope
    set?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    disconnect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    delete?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    update?: Enumerable<ClosureRegionCategoryUpdateWithWhereUniqueWithoutDescendantCategoryInput>
    updateMany?: Enumerable<ClosureRegionCategoryUpdateManyWithWhereWithoutDescendantCategoryInput>
    deleteMany?: Enumerable<ClosureRegionCategoryScalarWhereInput>
  }

  export type CafeInfoUncheckedUpdateManyWithoutRegionCategoryNestedInput = {
    create?: XOR<Enumerable<CafeInfoCreateWithoutRegionCategoryInput>, Enumerable<CafeInfoUncheckedCreateWithoutRegionCategoryInput>>
    connectOrCreate?: Enumerable<CafeInfoCreateOrConnectWithoutRegionCategoryInput>
    upsert?: Enumerable<CafeInfoUpsertWithWhereUniqueWithoutRegionCategoryInput>
    createMany?: CafeInfoCreateManyRegionCategoryInputEnvelope
    set?: Enumerable<CafeInfoWhereUniqueInput>
    disconnect?: Enumerable<CafeInfoWhereUniqueInput>
    delete?: Enumerable<CafeInfoWhereUniqueInput>
    connect?: Enumerable<CafeInfoWhereUniqueInput>
    update?: Enumerable<CafeInfoUpdateWithWhereUniqueWithoutRegionCategoryInput>
    updateMany?: Enumerable<CafeInfoUpdateManyWithWhereWithoutRegionCategoryInput>
    deleteMany?: Enumerable<CafeInfoScalarWhereInput>
  }

  export type ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoryNestedInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutAncestorCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutAncestorCategoryInput>
    upsert?: Enumerable<ClosureRegionCategoryUpsertWithWhereUniqueWithoutAncestorCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyAncestorCategoryInputEnvelope
    set?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    disconnect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    delete?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    update?: Enumerable<ClosureRegionCategoryUpdateWithWhereUniqueWithoutAncestorCategoryInput>
    updateMany?: Enumerable<ClosureRegionCategoryUpdateManyWithWhereWithoutAncestorCategoryInput>
    deleteMany?: Enumerable<ClosureRegionCategoryScalarWhereInput>
  }

  export type ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoryNestedInput = {
    create?: XOR<Enumerable<ClosureRegionCategoryCreateWithoutDescendantCategoryInput>, Enumerable<ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>>
    connectOrCreate?: Enumerable<ClosureRegionCategoryCreateOrConnectWithoutDescendantCategoryInput>
    upsert?: Enumerable<ClosureRegionCategoryUpsertWithWhereUniqueWithoutDescendantCategoryInput>
    createMany?: ClosureRegionCategoryCreateManyDescendantCategoryInputEnvelope
    set?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    disconnect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    delete?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    connect?: Enumerable<ClosureRegionCategoryWhereUniqueInput>
    update?: Enumerable<ClosureRegionCategoryUpdateWithWhereUniqueWithoutDescendantCategoryInput>
    updateMany?: Enumerable<ClosureRegionCategoryUpdateManyWithWhereWithoutDescendantCategoryInput>
    deleteMany?: Enumerable<ClosureRegionCategoryScalarWhereInput>
  }

  export type RegionCategoryCreateNestedOneWithoutAncestorCategoriesInput = {
    create?: XOR<RegionCategoryCreateWithoutAncestorCategoriesInput, RegionCategoryUncheckedCreateWithoutAncestorCategoriesInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutAncestorCategoriesInput
    connect?: RegionCategoryWhereUniqueInput
  }

  export type RegionCategoryCreateNestedOneWithoutDescendantCategoriesInput = {
    create?: XOR<RegionCategoryCreateWithoutDescendantCategoriesInput, RegionCategoryUncheckedCreateWithoutDescendantCategoriesInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutDescendantCategoriesInput
    connect?: RegionCategoryWhereUniqueInput
  }

  export type RegionCategoryUpdateOneRequiredWithoutAncestorCategoriesNestedInput = {
    create?: XOR<RegionCategoryCreateWithoutAncestorCategoriesInput, RegionCategoryUncheckedCreateWithoutAncestorCategoriesInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutAncestorCategoriesInput
    upsert?: RegionCategoryUpsertWithoutAncestorCategoriesInput
    connect?: RegionCategoryWhereUniqueInput
    update?: XOR<RegionCategoryUpdateWithoutAncestorCategoriesInput, RegionCategoryUncheckedUpdateWithoutAncestorCategoriesInput>
  }

  export type RegionCategoryUpdateOneRequiredWithoutDescendantCategoriesNestedInput = {
    create?: XOR<RegionCategoryCreateWithoutDescendantCategoriesInput, RegionCategoryUncheckedCreateWithoutDescendantCategoriesInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutDescendantCategoriesInput
    upsert?: RegionCategoryUpsertWithoutDescendantCategoriesInput
    connect?: RegionCategoryWhereUniqueInput
    update?: XOR<RegionCategoryUpdateWithoutDescendantCategoriesInput, RegionCategoryUncheckedUpdateWithoutDescendantCategoriesInput>
  }

  export type RegionCategoryCreateNestedOneWithoutCafeInfosInput = {
    create?: XOR<RegionCategoryCreateWithoutCafeInfosInput, RegionCategoryUncheckedCreateWithoutCafeInfosInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutCafeInfosInput
    connect?: RegionCategoryWhereUniqueInput
  }

  export type CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeVirtualLinkCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualLinkCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeVirtualLinkCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
  }

  export type CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeThumbnailImageCreateWithoutCafeInfoInput>, Enumerable<CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeThumbnailImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeThumbnailImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
  }

  export type CafeVirtualImageCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeVirtualImageCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeVirtualImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeVirtualImageWhereUniqueInput>
  }

  export type CafeRealImageCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeRealImageCreateWithoutCafeInfoInput>, Enumerable<CafeRealImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeRealImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeRealImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeRealImageWhereUniqueInput>
  }

  export type CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeVirtualLinkCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualLinkCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeVirtualLinkCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
  }

  export type CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeThumbnailImageCreateWithoutCafeInfoInput>, Enumerable<CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeThumbnailImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeThumbnailImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
  }

  export type CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeVirtualImageCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeVirtualImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeVirtualImageWhereUniqueInput>
  }

  export type CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput = {
    create?: XOR<Enumerable<CafeRealImageCreateWithoutCafeInfoInput>, Enumerable<CafeRealImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeRealImageCreateOrConnectWithoutCafeInfoInput>
    createMany?: CafeRealImageCreateManyCafeInfoInputEnvelope
    connect?: Enumerable<CafeRealImageWhereUniqueInput>
  }

  export type RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput = {
    create?: XOR<RegionCategoryCreateWithoutCafeInfosInput, RegionCategoryUncheckedCreateWithoutCafeInfosInput>
    connectOrCreate?: RegionCategoryCreateOrConnectWithoutCafeInfosInput
    upsert?: RegionCategoryUpsertWithoutCafeInfosInput
    connect?: RegionCategoryWhereUniqueInput
    update?: XOR<RegionCategoryUpdateWithoutCafeInfosInput, RegionCategoryUncheckedUpdateWithoutCafeInfosInput>
  }

  export type CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeVirtualLinkCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualLinkCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeVirtualLinkUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeVirtualLinkCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    disconnect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    delete?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    connect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    update?: Enumerable<CafeVirtualLinkUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeVirtualLinkUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeVirtualLinkScalarWhereInput>
  }

  export type CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeThumbnailImageCreateWithoutCafeInfoInput>, Enumerable<CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeThumbnailImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeThumbnailImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeThumbnailImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    disconnect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    delete?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    connect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    update?: Enumerable<CafeThumbnailImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeThumbnailImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeThumbnailImageScalarWhereInput>
  }

  export type CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeVirtualImageCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeVirtualImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeVirtualImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeVirtualImageWhereUniqueInput>
    disconnect?: Enumerable<CafeVirtualImageWhereUniqueInput>
    delete?: Enumerable<CafeVirtualImageWhereUniqueInput>
    connect?: Enumerable<CafeVirtualImageWhereUniqueInput>
    update?: Enumerable<CafeVirtualImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeVirtualImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeVirtualImageScalarWhereInput>
  }

  export type CafeRealImageUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeRealImageCreateWithoutCafeInfoInput>, Enumerable<CafeRealImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeRealImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeRealImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeRealImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeRealImageWhereUniqueInput>
    disconnect?: Enumerable<CafeRealImageWhereUniqueInput>
    delete?: Enumerable<CafeRealImageWhereUniqueInput>
    connect?: Enumerable<CafeRealImageWhereUniqueInput>
    update?: Enumerable<CafeRealImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeRealImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeRealImageScalarWhereInput>
  }

  export type CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeVirtualLinkCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualLinkCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeVirtualLinkUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeVirtualLinkCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    disconnect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    delete?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    connect?: Enumerable<CafeVirtualLinkWhereUniqueInput>
    update?: Enumerable<CafeVirtualLinkUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeVirtualLinkUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeVirtualLinkScalarWhereInput>
  }

  export type CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeThumbnailImageCreateWithoutCafeInfoInput>, Enumerable<CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeThumbnailImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeThumbnailImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeThumbnailImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    disconnect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    delete?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    connect?: Enumerable<CafeThumbnailImageWhereUniqueInput>
    update?: Enumerable<CafeThumbnailImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeThumbnailImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeThumbnailImageScalarWhereInput>
  }

  export type CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeVirtualImageCreateWithoutCafeInfoInput>, Enumerable<CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeVirtualImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeVirtualImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeVirtualImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeVirtualImageWhereUniqueInput>
    disconnect?: Enumerable<CafeVirtualImageWhereUniqueInput>
    delete?: Enumerable<CafeVirtualImageWhereUniqueInput>
    connect?: Enumerable<CafeVirtualImageWhereUniqueInput>
    update?: Enumerable<CafeVirtualImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeVirtualImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeVirtualImageScalarWhereInput>
  }

  export type CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput = {
    create?: XOR<Enumerable<CafeRealImageCreateWithoutCafeInfoInput>, Enumerable<CafeRealImageUncheckedCreateWithoutCafeInfoInput>>
    connectOrCreate?: Enumerable<CafeRealImageCreateOrConnectWithoutCafeInfoInput>
    upsert?: Enumerable<CafeRealImageUpsertWithWhereUniqueWithoutCafeInfoInput>
    createMany?: CafeRealImageCreateManyCafeInfoInputEnvelope
    set?: Enumerable<CafeRealImageWhereUniqueInput>
    disconnect?: Enumerable<CafeRealImageWhereUniqueInput>
    delete?: Enumerable<CafeRealImageWhereUniqueInput>
    connect?: Enumerable<CafeRealImageWhereUniqueInput>
    update?: Enumerable<CafeRealImageUpdateWithWhereUniqueWithoutCafeInfoInput>
    updateMany?: Enumerable<CafeRealImageUpdateManyWithWhereWithoutCafeInfoInput>
    deleteMany?: Enumerable<CafeRealImageScalarWhereInput>
  }

  export type CafeInfoCreateNestedOneWithoutCafeThumbnailImagesInput = {
    create?: XOR<CafeInfoCreateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedCreateWithoutCafeThumbnailImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeThumbnailImagesInput
    connect?: CafeInfoWhereUniqueInput
  }

  export type CafeInfoUpdateOneRequiredWithoutCafeThumbnailImagesNestedInput = {
    create?: XOR<CafeInfoCreateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedCreateWithoutCafeThumbnailImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeThumbnailImagesInput
    upsert?: CafeInfoUpsertWithoutCafeThumbnailImagesInput
    connect?: CafeInfoWhereUniqueInput
    update?: XOR<CafeInfoUpdateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedUpdateWithoutCafeThumbnailImagesInput>
  }

  export type CafeInfoCreateNestedOneWithoutCafeVirtualImagesInput = {
    create?: XOR<CafeInfoCreateWithoutCafeVirtualImagesInput, CafeInfoUncheckedCreateWithoutCafeVirtualImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeVirtualImagesInput
    connect?: CafeInfoWhereUniqueInput
  }

  export type CafeInfoUpdateOneRequiredWithoutCafeVirtualImagesNestedInput = {
    create?: XOR<CafeInfoCreateWithoutCafeVirtualImagesInput, CafeInfoUncheckedCreateWithoutCafeVirtualImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeVirtualImagesInput
    upsert?: CafeInfoUpsertWithoutCafeVirtualImagesInput
    connect?: CafeInfoWhereUniqueInput
    update?: XOR<CafeInfoUpdateWithoutCafeVirtualImagesInput, CafeInfoUncheckedUpdateWithoutCafeVirtualImagesInput>
  }

  export type CafeInfoCreateNestedOneWithoutCafeRealImagesInput = {
    create?: XOR<CafeInfoCreateWithoutCafeRealImagesInput, CafeInfoUncheckedCreateWithoutCafeRealImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeRealImagesInput
    connect?: CafeInfoWhereUniqueInput
  }

  export type CafeInfoUpdateOneRequiredWithoutCafeRealImagesNestedInput = {
    create?: XOR<CafeInfoCreateWithoutCafeRealImagesInput, CafeInfoUncheckedCreateWithoutCafeRealImagesInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeRealImagesInput
    upsert?: CafeInfoUpsertWithoutCafeRealImagesInput
    connect?: CafeInfoWhereUniqueInput
    update?: XOR<CafeInfoUpdateWithoutCafeRealImagesInput, CafeInfoUncheckedUpdateWithoutCafeRealImagesInput>
  }

  export type CafeInfoCreateNestedOneWithoutCafeVirtualLinksInput = {
    create?: XOR<CafeInfoCreateWithoutCafeVirtualLinksInput, CafeInfoUncheckedCreateWithoutCafeVirtualLinksInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeVirtualLinksInput
    connect?: CafeInfoWhereUniqueInput
  }

  export type CafeVirtualLinkThumbnailImageCreateNestedOneWithoutCafeVirtualLinkInput = {
    create?: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
    connectOrCreate?: CafeVirtualLinkThumbnailImageCreateOrConnectWithoutCafeVirtualLinkInput
    connect?: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }

  export type CafeVirtualLinkThumbnailImageUncheckedCreateNestedOneWithoutCafeVirtualLinkInput = {
    create?: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
    connectOrCreate?: CafeVirtualLinkThumbnailImageCreateOrConnectWithoutCafeVirtualLinkInput
    connect?: CafeVirtualLinkThumbnailImageWhereUniqueInput
  }

  export type CafeInfoUpdateOneRequiredWithoutCafeVirtualLinksNestedInput = {
    create?: XOR<CafeInfoCreateWithoutCafeVirtualLinksInput, CafeInfoUncheckedCreateWithoutCafeVirtualLinksInput>
    connectOrCreate?: CafeInfoCreateOrConnectWithoutCafeVirtualLinksInput
    upsert?: CafeInfoUpsertWithoutCafeVirtualLinksInput
    connect?: CafeInfoWhereUniqueInput
    update?: XOR<CafeInfoUpdateWithoutCafeVirtualLinksInput, CafeInfoUncheckedUpdateWithoutCafeVirtualLinksInput>
  }

  export type CafeVirtualLinkThumbnailImageUpdateOneWithoutCafeVirtualLinkNestedInput = {
    create?: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
    connectOrCreate?: CafeVirtualLinkThumbnailImageCreateOrConnectWithoutCafeVirtualLinkInput
    upsert?: CafeVirtualLinkThumbnailImageUpsertWithoutCafeVirtualLinkInput
    disconnect?: boolean
    delete?: boolean
    connect?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    update?: XOR<CafeVirtualLinkThumbnailImageUpdateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedUpdateWithoutCafeVirtualLinkInput>
  }

  export type CafeVirtualLinkThumbnailImageUncheckedUpdateOneWithoutCafeVirtualLinkNestedInput = {
    create?: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
    connectOrCreate?: CafeVirtualLinkThumbnailImageCreateOrConnectWithoutCafeVirtualLinkInput
    upsert?: CafeVirtualLinkThumbnailImageUpsertWithoutCafeVirtualLinkInput
    disconnect?: boolean
    delete?: boolean
    connect?: CafeVirtualLinkThumbnailImageWhereUniqueInput
    update?: XOR<CafeVirtualLinkThumbnailImageUpdateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedUpdateWithoutCafeVirtualLinkInput>
  }

  export type CafeVirtualLinkCreateNestedOneWithoutCafeVirtualLinkThumbnailImageInput = {
    create?: XOR<CafeVirtualLinkCreateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedCreateWithoutCafeVirtualLinkThumbnailImageInput>
    connectOrCreate?: CafeVirtualLinkCreateOrConnectWithoutCafeVirtualLinkThumbnailImageInput
    connect?: CafeVirtualLinkWhereUniqueInput
  }

  export type CafeVirtualLinkUpdateOneRequiredWithoutCafeVirtualLinkThumbnailImageNestedInput = {
    create?: XOR<CafeVirtualLinkCreateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedCreateWithoutCafeVirtualLinkThumbnailImageInput>
    connectOrCreate?: CafeVirtualLinkCreateOrConnectWithoutCafeVirtualLinkThumbnailImageInput
    upsert?: CafeVirtualLinkUpsertWithoutCafeVirtualLinkThumbnailImageInput
    connect?: CafeVirtualLinkWhereUniqueInput
    update?: XOR<CafeVirtualLinkUpdateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedUpdateWithoutCafeVirtualLinkThumbnailImageInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type NestedEnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type NestedEnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type NestedEnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumGovermentTypeFilter = {
    equals?: GovermentType
    in?: Enumerable<GovermentType>
    notIn?: Enumerable<GovermentType>
    not?: NestedEnumGovermentTypeFilter | GovermentType
  }

  export type NestedEnumGovermentTypeWithAggregatesFilter = {
    equals?: GovermentType
    in?: Enumerable<GovermentType>
    notIn?: Enumerable<GovermentType>
    not?: NestedEnumGovermentTypeWithAggregatesFilter | GovermentType
    _count?: NestedIntFilter
    _min?: NestedEnumGovermentTypeFilter
    _max?: NestedEnumGovermentTypeFilter
  }

  export type BoardCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReplies?: BoardReplyCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: Enumerable<BoardCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    Board: BoardCreateNestedOneWithoutBoardRepliesInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedRepliesInput
    BoardNestedReplies?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    BoardNestedReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyCreateManyUserInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeCreateOrConnectWithoutUserInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeCreateManyUserInputEnvelope = {
    data: Enumerable<NoticeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutBoardsInput>
  }

  export type BoardScalarWhereInput = {
    AND?: Enumerable<BoardScalarWhereInput>
    OR?: Enumerable<BoardScalarWhereInput>
    NOT?: Enumerable<BoardScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutUserInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardRepliesInput>
  }

  export type BoardReplyScalarWhereInput = {
    AND?: Enumerable<BoardReplyScalarWhereInput>
    OR?: Enumerable<BoardReplyScalarWhereInput>
    NOT?: Enumerable<BoardReplyScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardId?: IntFilter | number
    boardReplyId?: IntNullableFilter | number | null
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type NoticeUpsertWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
  }

  export type NoticeUpdateManyWithWhereWithoutUserInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutNoticesInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: Enumerable<NoticeScalarWhereInput>
    OR?: Enumerable<NoticeScalarWhereInput>
    NOT?: Enumerable<NoticeScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
  }

  export type UserCreateWithoutNoticesInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardCreateNestedManyWithoutUserInput
    BoardReplies?: BoardReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoticesInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoticesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
  }

  export type UserUpsertWithoutNoticesInput = {
    update: XOR<UserUpdateWithoutNoticesInput, UserUncheckedUpdateWithoutNoticesInput>
    create: XOR<UserCreateWithoutNoticesInput, UserUncheckedCreateWithoutNoticesInput>
  }

  export type UserUpdateWithoutNoticesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUpdateManyWithoutUserNestedInput
    BoardReplies?: BoardReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNoticesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardImageCreateWithoutBoardInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageCreateOrConnectWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardImageCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutBoardInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardRepliesInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedRepliesInput
    BoardNestedReplies?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    BoardNestedReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBoardsInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    BoardReplies?: BoardReplyCreateNestedManyWithoutUserInput
    Notices?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardsInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notices?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type BoardImageUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    update: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    data: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
  }

  export type BoardImageUpdateManyWithWhereWithoutBoardInput = {
    where: BoardImageScalarWhereInput
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyWithoutBoardImagesInput>
  }

  export type BoardImageScalarWhereInput = {
    AND?: Enumerable<BoardImageScalarWhereInput>
    OR?: Enumerable<BoardImageScalarWhereInput>
    NOT?: Enumerable<BoardImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardRepliesInput>
  }

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type UserUpdateWithoutBoardsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReplies?: BoardReplyUpdateManyWithoutUserNestedInput
    Notices?: NoticeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutUserNestedInput
    Notices?: NoticeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardCreateWithoutBoardImagesInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReplies?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardsInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardImagesInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardImagesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardImagesInput, BoardUncheckedCreateWithoutBoardImagesInput>
  }

  export type BoardUpsertWithoutBoardImagesInput = {
    update: XOR<BoardUpdateWithoutBoardImagesInput, BoardUncheckedUpdateWithoutBoardImagesInput>
    create: XOR<BoardCreateWithoutBoardImagesInput, BoardUncheckedCreateWithoutBoardImagesInput>
  }

  export type BoardUpdateWithoutBoardImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReplies?: BoardReplyUpdateManyWithoutBoardNestedInput
    User?: UserUpdateOneRequiredWithoutBoardsNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutBoardNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type UserCreateWithoutBoardRepliesInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardCreateNestedManyWithoutUserInput
    Notices?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardRepliesInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    email: string
    isDisable?: boolean
    Boards?: BoardUncheckedCreateNestedManyWithoutUserInput
    Notices?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardRepliesInput, UserUncheckedCreateWithoutBoardRepliesInput>
  }

  export type BoardCreateWithoutBoardRepliesInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardsInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardRepliesInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImages?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardRepliesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardRepliesInput, BoardUncheckedCreateWithoutBoardRepliesInput>
  }

  export type BoardReplyCreateWithoutBoardNestedRepliesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardRepliesInput
    Board: BoardCreateNestedOneWithoutBoardRepliesInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedRepliesInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardNestedRepliesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardNestedRepliesInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardNestedRepliesInput, BoardReplyUncheckedCreateWithoutBoardNestedRepliesInput>
  }

  export type BoardReplyCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardRepliesInput
    Board: BoardCreateNestedOneWithoutBoardRepliesInput
    BoardNestedReplies?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    BoardNestedReplies?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyCreateManyBoardReplyInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardReplyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoardRepliesInput = {
    update: XOR<UserUpdateWithoutBoardRepliesInput, UserUncheckedUpdateWithoutBoardRepliesInput>
    create: XOR<UserCreateWithoutBoardRepliesInput, UserUncheckedCreateWithoutBoardRepliesInput>
  }

  export type UserUpdateWithoutBoardRepliesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUpdateManyWithoutUserNestedInput
    Notices?: NoticeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
    Notices?: NoticeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardUpsertWithoutBoardRepliesInput = {
    update: XOR<BoardUpdateWithoutBoardRepliesInput, BoardUncheckedUpdateWithoutBoardRepliesInput>
    create: XOR<BoardCreateWithoutBoardRepliesInput, BoardUncheckedCreateWithoutBoardRepliesInput>
  }

  export type BoardUpdateWithoutBoardRepliesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUpdateManyWithoutBoardNestedInput
    User?: UserUpdateOneRequiredWithoutBoardsNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUncheckedUpdateManyWithoutBoardNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithoutBoardNestedRepliesInput = {
    update: XOR<BoardReplyUpdateWithoutBoardNestedRepliesInput, BoardReplyUncheckedUpdateWithoutBoardNestedRepliesInput>
    create: XOR<BoardReplyCreateWithoutBoardNestedRepliesInput, BoardReplyUncheckedCreateWithoutBoardNestedRepliesInput>
  }

  export type BoardReplyUpdateWithoutBoardNestedRepliesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardRepliesNestedInput
    Board?: BoardUpdateOneRequiredWithoutBoardRepliesNestedInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedRepliesNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardNestedRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardReplyInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardNestedRepliesInput>
  }

  export type CafeInfoCreateWithoutRegionCategoryInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateWithoutRegionCategoryInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoCreateOrConnectWithoutRegionCategoryInput = {
    where: CafeInfoWhereUniqueInput
    create: XOR<CafeInfoCreateWithoutRegionCategoryInput, CafeInfoUncheckedCreateWithoutRegionCategoryInput>
  }

  export type CafeInfoCreateManyRegionCategoryInputEnvelope = {
    data: Enumerable<CafeInfoCreateManyRegionCategoryInput>
    skipDuplicates?: boolean
  }

  export type ClosureRegionCategoryCreateWithoutAncestorCategoryInput = {
    depth?: number
    DescendantCategory: RegionCategoryCreateNestedOneWithoutDescendantCategoriesInput
  }

  export type ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput = {
    descendant: number
    depth?: number
  }

  export type ClosureRegionCategoryCreateOrConnectWithoutAncestorCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    create: XOR<ClosureRegionCategoryCreateWithoutAncestorCategoryInput, ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>
  }

  export type ClosureRegionCategoryCreateManyAncestorCategoryInputEnvelope = {
    data: Enumerable<ClosureRegionCategoryCreateManyAncestorCategoryInput>
    skipDuplicates?: boolean
  }

  export type ClosureRegionCategoryCreateWithoutDescendantCategoryInput = {
    depth?: number
    AncestorCategory: RegionCategoryCreateNestedOneWithoutAncestorCategoriesInput
  }

  export type ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput = {
    ancestor: number
    depth?: number
  }

  export type ClosureRegionCategoryCreateOrConnectWithoutDescendantCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    create: XOR<ClosureRegionCategoryCreateWithoutDescendantCategoryInput, ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>
  }

  export type ClosureRegionCategoryCreateManyDescendantCategoryInputEnvelope = {
    data: Enumerable<ClosureRegionCategoryCreateManyDescendantCategoryInput>
    skipDuplicates?: boolean
  }

  export type CafeInfoUpsertWithWhereUniqueWithoutRegionCategoryInput = {
    where: CafeInfoWhereUniqueInput
    update: XOR<CafeInfoUpdateWithoutRegionCategoryInput, CafeInfoUncheckedUpdateWithoutRegionCategoryInput>
    create: XOR<CafeInfoCreateWithoutRegionCategoryInput, CafeInfoUncheckedCreateWithoutRegionCategoryInput>
  }

  export type CafeInfoUpdateWithWhereUniqueWithoutRegionCategoryInput = {
    where: CafeInfoWhereUniqueInput
    data: XOR<CafeInfoUpdateWithoutRegionCategoryInput, CafeInfoUncheckedUpdateWithoutRegionCategoryInput>
  }

  export type CafeInfoUpdateManyWithWhereWithoutRegionCategoryInput = {
    where: CafeInfoScalarWhereInput
    data: XOR<CafeInfoUpdateManyMutationInput, CafeInfoUncheckedUpdateManyWithoutCafeInfosInput>
  }

  export type CafeInfoScalarWhereInput = {
    AND?: Enumerable<CafeInfoScalarWhereInput>
    OR?: Enumerable<CafeInfoScalarWhereInput>
    NOT?: Enumerable<CafeInfoScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    name?: StringFilter | string
    regionCategoryId?: IntFilter | number
    address?: StringFilter | string
    directions?: StringFilter | string
    businessNumber?: StringFilter | string
    ceoName?: StringFilter | string
  }

  export type ClosureRegionCategoryUpsertWithWhereUniqueWithoutAncestorCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    update: XOR<ClosureRegionCategoryUpdateWithoutAncestorCategoryInput, ClosureRegionCategoryUncheckedUpdateWithoutAncestorCategoryInput>
    create: XOR<ClosureRegionCategoryCreateWithoutAncestorCategoryInput, ClosureRegionCategoryUncheckedCreateWithoutAncestorCategoryInput>
  }

  export type ClosureRegionCategoryUpdateWithWhereUniqueWithoutAncestorCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    data: XOR<ClosureRegionCategoryUpdateWithoutAncestorCategoryInput, ClosureRegionCategoryUncheckedUpdateWithoutAncestorCategoryInput>
  }

  export type ClosureRegionCategoryUpdateManyWithWhereWithoutAncestorCategoryInput = {
    where: ClosureRegionCategoryScalarWhereInput
    data: XOR<ClosureRegionCategoryUpdateManyMutationInput, ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoriesInput>
  }

  export type ClosureRegionCategoryScalarWhereInput = {
    AND?: Enumerable<ClosureRegionCategoryScalarWhereInput>
    OR?: Enumerable<ClosureRegionCategoryScalarWhereInput>
    NOT?: Enumerable<ClosureRegionCategoryScalarWhereInput>
    ancestor?: IntFilter | number
    descendant?: IntFilter | number
    depth?: IntFilter | number
  }

  export type ClosureRegionCategoryUpsertWithWhereUniqueWithoutDescendantCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    update: XOR<ClosureRegionCategoryUpdateWithoutDescendantCategoryInput, ClosureRegionCategoryUncheckedUpdateWithoutDescendantCategoryInput>
    create: XOR<ClosureRegionCategoryCreateWithoutDescendantCategoryInput, ClosureRegionCategoryUncheckedCreateWithoutDescendantCategoryInput>
  }

  export type ClosureRegionCategoryUpdateWithWhereUniqueWithoutDescendantCategoryInput = {
    where: ClosureRegionCategoryWhereUniqueInput
    data: XOR<ClosureRegionCategoryUpdateWithoutDescendantCategoryInput, ClosureRegionCategoryUncheckedUpdateWithoutDescendantCategoryInput>
  }

  export type ClosureRegionCategoryUpdateManyWithWhereWithoutDescendantCategoryInput = {
    where: ClosureRegionCategoryScalarWhereInput
    data: XOR<ClosureRegionCategoryUpdateManyMutationInput, ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoriesInput>
  }

  export type RegionCategoryCreateWithoutAncestorCategoriesInput = {
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoCreateNestedManyWithoutRegionCategoryInput
    DescendantCategories?: ClosureRegionCategoryCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryUncheckedCreateWithoutAncestorCategoriesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoUncheckedCreateNestedManyWithoutRegionCategoryInput
    DescendantCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryCreateOrConnectWithoutAncestorCategoriesInput = {
    where: RegionCategoryWhereUniqueInput
    create: XOR<RegionCategoryCreateWithoutAncestorCategoriesInput, RegionCategoryUncheckedCreateWithoutAncestorCategoriesInput>
  }

  export type RegionCategoryCreateWithoutDescendantCategoriesInput = {
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoCreateNestedManyWithoutRegionCategoryInput
    AncestorCategories?: ClosureRegionCategoryCreateNestedManyWithoutAncestorCategoryInput
  }

  export type RegionCategoryUncheckedCreateWithoutDescendantCategoriesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    CafeInfos?: CafeInfoUncheckedCreateNestedManyWithoutRegionCategoryInput
    AncestorCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutAncestorCategoryInput
  }

  export type RegionCategoryCreateOrConnectWithoutDescendantCategoriesInput = {
    where: RegionCategoryWhereUniqueInput
    create: XOR<RegionCategoryCreateWithoutDescendantCategoriesInput, RegionCategoryUncheckedCreateWithoutDescendantCategoriesInput>
  }

  export type RegionCategoryUpsertWithoutAncestorCategoriesInput = {
    update: XOR<RegionCategoryUpdateWithoutAncestorCategoriesInput, RegionCategoryUncheckedUpdateWithoutAncestorCategoriesInput>
    create: XOR<RegionCategoryCreateWithoutAncestorCategoriesInput, RegionCategoryUncheckedCreateWithoutAncestorCategoriesInput>
  }

  export type RegionCategoryUpdateWithoutAncestorCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUpdateManyWithoutRegionCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type RegionCategoryUncheckedUpdateWithoutAncestorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUncheckedUpdateManyWithoutRegionCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type RegionCategoryUpsertWithoutDescendantCategoriesInput = {
    update: XOR<RegionCategoryUpdateWithoutDescendantCategoriesInput, RegionCategoryUncheckedUpdateWithoutDescendantCategoriesInput>
    create: XOR<RegionCategoryCreateWithoutDescendantCategoriesInput, RegionCategoryUncheckedCreateWithoutDescendantCategoriesInput>
  }

  export type RegionCategoryUpdateWithoutDescendantCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUpdateManyWithoutRegionCategoryNestedInput
    AncestorCategories?: ClosureRegionCategoryUpdateManyWithoutAncestorCategoryNestedInput
  }

  export type RegionCategoryUncheckedUpdateWithoutDescendantCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    CafeInfos?: CafeInfoUncheckedUpdateManyWithoutRegionCategoryNestedInput
    AncestorCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoryNestedInput
  }

  export type RegionCategoryCreateWithoutCafeInfosInput = {
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    AncestorCategories?: ClosureRegionCategoryCreateNestedManyWithoutAncestorCategoryInput
    DescendantCategories?: ClosureRegionCategoryCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryUncheckedCreateWithoutCafeInfosInput = {
    id?: number
    createdAt?: Date | string
    name: string
    isDisable?: boolean
    govermentType: GovermentType
    AncestorCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutAncestorCategoryInput
    DescendantCategories?: ClosureRegionCategoryUncheckedCreateNestedManyWithoutDescendantCategoryInput
  }

  export type RegionCategoryCreateOrConnectWithoutCafeInfosInput = {
    where: RegionCategoryWhereUniqueInput
    create: XOR<RegionCategoryCreateWithoutCafeInfosInput, RegionCategoryUncheckedCreateWithoutCafeInfosInput>
  }

  export type CafeVirtualLinkCreateWithoutCafeInfoInput = {
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageCreateNestedOneWithoutCafeVirtualLinkInput
  }

  export type CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUncheckedCreateNestedOneWithoutCafeVirtualLinkInput
  }

  export type CafeVirtualLinkCreateOrConnectWithoutCafeInfoInput = {
    where: CafeVirtualLinkWhereUniqueInput
    create: XOR<CafeVirtualLinkCreateWithoutCafeInfoInput, CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeVirtualLinkCreateManyCafeInfoInputEnvelope = {
    data: Enumerable<CafeVirtualLinkCreateManyCafeInfoInput>
    skipDuplicates?: boolean
  }

  export type CafeThumbnailImageCreateWithoutCafeInfoInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeThumbnailImageCreateOrConnectWithoutCafeInfoInput = {
    where: CafeThumbnailImageWhereUniqueInput
    create: XOR<CafeThumbnailImageCreateWithoutCafeInfoInput, CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeThumbnailImageCreateManyCafeInfoInputEnvelope = {
    data: Enumerable<CafeThumbnailImageCreateManyCafeInfoInput>
    skipDuplicates?: boolean
  }

  export type CafeVirtualImageCreateWithoutCafeInfoInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeVirtualImageUncheckedCreateWithoutCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeVirtualImageCreateOrConnectWithoutCafeInfoInput = {
    where: CafeVirtualImageWhereUniqueInput
    create: XOR<CafeVirtualImageCreateWithoutCafeInfoInput, CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeVirtualImageCreateManyCafeInfoInputEnvelope = {
    data: Enumerable<CafeVirtualImageCreateManyCafeInfoInput>
    skipDuplicates?: boolean
  }

  export type CafeRealImageCreateWithoutCafeInfoInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeRealImageUncheckedCreateWithoutCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeRealImageCreateOrConnectWithoutCafeInfoInput = {
    where: CafeRealImageWhereUniqueInput
    create: XOR<CafeRealImageCreateWithoutCafeInfoInput, CafeRealImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeRealImageCreateManyCafeInfoInputEnvelope = {
    data: Enumerable<CafeRealImageCreateManyCafeInfoInput>
    skipDuplicates?: boolean
  }

  export type RegionCategoryUpsertWithoutCafeInfosInput = {
    update: XOR<RegionCategoryUpdateWithoutCafeInfosInput, RegionCategoryUncheckedUpdateWithoutCafeInfosInput>
    create: XOR<RegionCategoryCreateWithoutCafeInfosInput, RegionCategoryUncheckedCreateWithoutCafeInfosInput>
  }

  export type RegionCategoryUpdateWithoutCafeInfosInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    AncestorCategories?: ClosureRegionCategoryUpdateManyWithoutAncestorCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type RegionCategoryUncheckedUpdateWithoutCafeInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    govermentType?: EnumGovermentTypeFieldUpdateOperationsInput | GovermentType
    AncestorCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoryNestedInput
    DescendantCategories?: ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoryNestedInput
  }

  export type CafeVirtualLinkUpsertWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeVirtualLinkWhereUniqueInput
    update: XOR<CafeVirtualLinkUpdateWithoutCafeInfoInput, CafeVirtualLinkUncheckedUpdateWithoutCafeInfoInput>
    create: XOR<CafeVirtualLinkCreateWithoutCafeInfoInput, CafeVirtualLinkUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeVirtualLinkUpdateWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeVirtualLinkWhereUniqueInput
    data: XOR<CafeVirtualLinkUpdateWithoutCafeInfoInput, CafeVirtualLinkUncheckedUpdateWithoutCafeInfoInput>
  }

  export type CafeVirtualLinkUpdateManyWithWhereWithoutCafeInfoInput = {
    where: CafeVirtualLinkScalarWhereInput
    data: XOR<CafeVirtualLinkUpdateManyMutationInput, CafeVirtualLinkUncheckedUpdateManyWithoutCafeVirtualLinksInput>
  }

  export type CafeVirtualLinkScalarWhereInput = {
    AND?: Enumerable<CafeVirtualLinkScalarWhereInput>
    OR?: Enumerable<CafeVirtualLinkScalarWhereInput>
    NOT?: Enumerable<CafeVirtualLinkScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    url?: StringFilter | string
    type?: StringFilter | string
    isDisable?: BoolFilter | boolean
    isAvaliable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
  }

  export type CafeThumbnailImageUpsertWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeThumbnailImageWhereUniqueInput
    update: XOR<CafeThumbnailImageUpdateWithoutCafeInfoInput, CafeThumbnailImageUncheckedUpdateWithoutCafeInfoInput>
    create: XOR<CafeThumbnailImageCreateWithoutCafeInfoInput, CafeThumbnailImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeThumbnailImageUpdateWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeThumbnailImageWhereUniqueInput
    data: XOR<CafeThumbnailImageUpdateWithoutCafeInfoInput, CafeThumbnailImageUncheckedUpdateWithoutCafeInfoInput>
  }

  export type CafeThumbnailImageUpdateManyWithWhereWithoutCafeInfoInput = {
    where: CafeThumbnailImageScalarWhereInput
    data: XOR<CafeThumbnailImageUpdateManyMutationInput, CafeThumbnailImageUncheckedUpdateManyWithoutCafeThumbnailImagesInput>
  }

  export type CafeThumbnailImageScalarWhereInput = {
    AND?: Enumerable<CafeThumbnailImageScalarWhereInput>
    OR?: Enumerable<CafeThumbnailImageScalarWhereInput>
    NOT?: Enumerable<CafeThumbnailImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
  }

  export type CafeVirtualImageUpsertWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeVirtualImageWhereUniqueInput
    update: XOR<CafeVirtualImageUpdateWithoutCafeInfoInput, CafeVirtualImageUncheckedUpdateWithoutCafeInfoInput>
    create: XOR<CafeVirtualImageCreateWithoutCafeInfoInput, CafeVirtualImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeVirtualImageUpdateWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeVirtualImageWhereUniqueInput
    data: XOR<CafeVirtualImageUpdateWithoutCafeInfoInput, CafeVirtualImageUncheckedUpdateWithoutCafeInfoInput>
  }

  export type CafeVirtualImageUpdateManyWithWhereWithoutCafeInfoInput = {
    where: CafeVirtualImageScalarWhereInput
    data: XOR<CafeVirtualImageUpdateManyMutationInput, CafeVirtualImageUncheckedUpdateManyWithoutCafeVirtualImagesInput>
  }

  export type CafeVirtualImageScalarWhereInput = {
    AND?: Enumerable<CafeVirtualImageScalarWhereInput>
    OR?: Enumerable<CafeVirtualImageScalarWhereInput>
    NOT?: Enumerable<CafeVirtualImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
  }

  export type CafeRealImageUpsertWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeRealImageWhereUniqueInput
    update: XOR<CafeRealImageUpdateWithoutCafeInfoInput, CafeRealImageUncheckedUpdateWithoutCafeInfoInput>
    create: XOR<CafeRealImageCreateWithoutCafeInfoInput, CafeRealImageUncheckedCreateWithoutCafeInfoInput>
  }

  export type CafeRealImageUpdateWithWhereUniqueWithoutCafeInfoInput = {
    where: CafeRealImageWhereUniqueInput
    data: XOR<CafeRealImageUpdateWithoutCafeInfoInput, CafeRealImageUncheckedUpdateWithoutCafeInfoInput>
  }

  export type CafeRealImageUpdateManyWithWhereWithoutCafeInfoInput = {
    where: CafeRealImageScalarWhereInput
    data: XOR<CafeRealImageUpdateManyMutationInput, CafeRealImageUncheckedUpdateManyWithoutCafeRealImagesInput>
  }

  export type CafeRealImageScalarWhereInput = {
    AND?: Enumerable<CafeRealImageScalarWhereInput>
    OR?: Enumerable<CafeRealImageScalarWhereInput>
    NOT?: Enumerable<CafeRealImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    priority?: IntFilter | number
    isDisable?: BoolFilter | boolean
    cafeInfoId?: IntFilter | number
  }

  export type CafeInfoCreateWithoutCafeThumbnailImagesInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    RegionCategory: RegionCategoryCreateNestedOneWithoutCafeInfosInput
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateWithoutCafeThumbnailImagesInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoCreateOrConnectWithoutCafeThumbnailImagesInput = {
    where: CafeInfoWhereUniqueInput
    create: XOR<CafeInfoCreateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedCreateWithoutCafeThumbnailImagesInput>
  }

  export type CafeInfoUpsertWithoutCafeThumbnailImagesInput = {
    update: XOR<CafeInfoUpdateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedUpdateWithoutCafeThumbnailImagesInput>
    create: XOR<CafeInfoCreateWithoutCafeThumbnailImagesInput, CafeInfoUncheckedCreateWithoutCafeThumbnailImagesInput>
  }

  export type CafeInfoUpdateWithoutCafeThumbnailImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    RegionCategory?: RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateWithoutCafeThumbnailImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoCreateWithoutCafeVirtualImagesInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    RegionCategory: RegionCategoryCreateNestedOneWithoutCafeInfosInput
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateWithoutCafeVirtualImagesInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoCreateOrConnectWithoutCafeVirtualImagesInput = {
    where: CafeInfoWhereUniqueInput
    create: XOR<CafeInfoCreateWithoutCafeVirtualImagesInput, CafeInfoUncheckedCreateWithoutCafeVirtualImagesInput>
  }

  export type CafeInfoUpsertWithoutCafeVirtualImagesInput = {
    update: XOR<CafeInfoUpdateWithoutCafeVirtualImagesInput, CafeInfoUncheckedUpdateWithoutCafeVirtualImagesInput>
    create: XOR<CafeInfoCreateWithoutCafeVirtualImagesInput, CafeInfoUncheckedCreateWithoutCafeVirtualImagesInput>
  }

  export type CafeInfoUpdateWithoutCafeVirtualImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    RegionCategory?: RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateWithoutCafeVirtualImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoCreateWithoutCafeRealImagesInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    RegionCategory: RegionCategoryCreateNestedOneWithoutCafeInfosInput
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateWithoutCafeRealImagesInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoCreateOrConnectWithoutCafeRealImagesInput = {
    where: CafeInfoWhereUniqueInput
    create: XOR<CafeInfoCreateWithoutCafeRealImagesInput, CafeInfoUncheckedCreateWithoutCafeRealImagesInput>
  }

  export type CafeInfoUpsertWithoutCafeRealImagesInput = {
    update: XOR<CafeInfoUpdateWithoutCafeRealImagesInput, CafeInfoUncheckedUpdateWithoutCafeRealImagesInput>
    create: XOR<CafeInfoCreateWithoutCafeRealImagesInput, CafeInfoUncheckedCreateWithoutCafeRealImagesInput>
  }

  export type CafeInfoUpdateWithoutCafeRealImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    RegionCategory?: RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateWithoutCafeRealImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoCreateWithoutCafeVirtualLinksInput = {
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    RegionCategory: RegionCategoryCreateNestedOneWithoutCafeInfosInput
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeThumbnailImages?: CafeThumbnailImageCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoUncheckedCreateWithoutCafeVirtualLinksInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    regionCategoryId: number
    address: string
    directions: string
    businessNumber: string
    ceoName: string
    CafeThumbnailImages?: CafeThumbnailImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeVirtualImages?: CafeVirtualImageUncheckedCreateNestedManyWithoutCafeInfoInput
    CafeRealImages?: CafeRealImageUncheckedCreateNestedManyWithoutCafeInfoInput
  }

  export type CafeInfoCreateOrConnectWithoutCafeVirtualLinksInput = {
    where: CafeInfoWhereUniqueInput
    create: XOR<CafeInfoCreateWithoutCafeVirtualLinksInput, CafeInfoUncheckedCreateWithoutCafeVirtualLinksInput>
  }

  export type CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
  }

  export type CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
  }

  export type CafeVirtualLinkThumbnailImageCreateOrConnectWithoutCafeVirtualLinkInput = {
    where: CafeVirtualLinkThumbnailImageWhereUniqueInput
    create: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
  }

  export type CafeInfoUpsertWithoutCafeVirtualLinksInput = {
    update: XOR<CafeInfoUpdateWithoutCafeVirtualLinksInput, CafeInfoUncheckedUpdateWithoutCafeVirtualLinksInput>
    create: XOR<CafeInfoCreateWithoutCafeVirtualLinksInput, CafeInfoUncheckedCreateWithoutCafeVirtualLinksInput>
  }

  export type CafeInfoUpdateWithoutCafeVirtualLinksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    RegionCategory?: RegionCategoryUpdateOneRequiredWithoutCafeInfosNestedInput
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeThumbnailImages?: CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateWithoutCafeVirtualLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    regionCategoryId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeThumbnailImages?: CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeVirtualLinkThumbnailImageUpsertWithoutCafeVirtualLinkInput = {
    update: XOR<CafeVirtualLinkThumbnailImageUpdateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedUpdateWithoutCafeVirtualLinkInput>
    create: XOR<CafeVirtualLinkThumbnailImageCreateWithoutCafeVirtualLinkInput, CafeVirtualLinkThumbnailImageUncheckedCreateWithoutCafeVirtualLinkInput>
  }

  export type CafeVirtualLinkThumbnailImageUpdateWithoutCafeVirtualLinkInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkThumbnailImageUncheckedUpdateWithoutCafeVirtualLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkCreateWithoutCafeVirtualLinkThumbnailImageInput = {
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    CafeInfo: CafeInfoCreateNestedOneWithoutCafeVirtualLinksInput
  }

  export type CafeVirtualLinkUncheckedCreateWithoutCafeVirtualLinkThumbnailImageInput = {
    id?: number
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
    cafeInfoId: number
  }

  export type CafeVirtualLinkCreateOrConnectWithoutCafeVirtualLinkThumbnailImageInput = {
    where: CafeVirtualLinkWhereUniqueInput
    create: XOR<CafeVirtualLinkCreateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedCreateWithoutCafeVirtualLinkThumbnailImageInput>
  }

  export type CafeVirtualLinkUpsertWithoutCafeVirtualLinkThumbnailImageInput = {
    update: XOR<CafeVirtualLinkUpdateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedUpdateWithoutCafeVirtualLinkThumbnailImageInput>
    create: XOR<CafeVirtualLinkCreateWithoutCafeVirtualLinkThumbnailImageInput, CafeVirtualLinkUncheckedCreateWithoutCafeVirtualLinkThumbnailImageInput>
  }

  export type CafeVirtualLinkUpdateWithoutCafeVirtualLinkThumbnailImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    CafeInfo?: CafeInfoUpdateOneRequiredWithoutCafeVirtualLinksNestedInput
  }

  export type CafeVirtualLinkUncheckedUpdateWithoutCafeVirtualLinkThumbnailImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    cafeInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    boardType?: BoardType
  }

  export type BoardReplyCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type NoticeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type BoardUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUpdateManyWithoutBoardNestedInput
    BoardReplies?: BoardReplyUpdateManyWithoutBoardNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImages?: BoardImageUncheckedUpdateManyWithoutBoardNestedInput
    BoardReplies?: BoardReplyUncheckedUpdateManyWithoutBoardNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardRepliesNestedInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedRepliesNestedInput
    BoardNestedReplies?: BoardReplyUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReplies?: BoardReplyUncheckedUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type NoticeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyWithoutNoticesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BoardImageCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardReplyCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardImageUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardReplyUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardRepliesNestedInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedRepliesNestedInput
    BoardNestedReplies?: BoardReplyUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReplies?: BoardReplyUncheckedUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardType?: BoardType
  }

  export type BoardReplyUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardRepliesNestedInput
    Board?: BoardUpdateOneRequiredWithoutBoardRepliesNestedInput
    BoardNestedReplies?: BoardReplyUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    BoardNestedReplies?: BoardReplyUncheckedUpdateManyWithoutBoardReplyNestedInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardNestedRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type CafeInfoCreateManyRegionCategoryInput = {
    id?: number
    createdAt?: Date | string
    isDisable?: boolean
    name: string
    address: string
    directions: string
    businessNumber: string
    ceoName: string
  }

  export type ClosureRegionCategoryCreateManyAncestorCategoryInput = {
    descendant: number
    depth?: number
  }

  export type ClosureRegionCategoryCreateManyDescendantCategoryInput = {
    ancestor: number
    depth?: number
  }

  export type CafeInfoUpdateWithoutRegionCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateWithoutRegionCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
    CafeVirtualLinks?: CafeVirtualLinkUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeThumbnailImages?: CafeThumbnailImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeVirtualImages?: CafeVirtualImageUncheckedUpdateManyWithoutCafeInfoNestedInput
    CafeRealImages?: CafeRealImageUncheckedUpdateManyWithoutCafeInfoNestedInput
  }

  export type CafeInfoUncheckedUpdateManyWithoutCafeInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    directions?: StringFieldUpdateOperationsInput | string
    businessNumber?: StringFieldUpdateOperationsInput | string
    ceoName?: StringFieldUpdateOperationsInput | string
  }

  export type ClosureRegionCategoryUpdateWithoutAncestorCategoryInput = {
    depth?: IntFieldUpdateOperationsInput | number
    DescendantCategory?: RegionCategoryUpdateOneRequiredWithoutDescendantCategoriesNestedInput
  }

  export type ClosureRegionCategoryUncheckedUpdateWithoutAncestorCategoryInput = {
    descendant?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ClosureRegionCategoryUncheckedUpdateManyWithoutAncestorCategoriesInput = {
    descendant?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ClosureRegionCategoryUpdateWithoutDescendantCategoryInput = {
    depth?: IntFieldUpdateOperationsInput | number
    AncestorCategory?: RegionCategoryUpdateOneRequiredWithoutAncestorCategoriesNestedInput
  }

  export type ClosureRegionCategoryUncheckedUpdateWithoutDescendantCategoryInput = {
    ancestor?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ClosureRegionCategoryUncheckedUpdateManyWithoutDescendantCategoriesInput = {
    ancestor?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CafeVirtualLinkCreateManyCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    name: string
    url: string
    type: string
    isDisable?: boolean
    isAvaliable?: boolean
  }

  export type CafeThumbnailImageCreateManyCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeVirtualImageCreateManyCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeRealImageCreateManyCafeInfoInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    priority?: number
    isDisable?: boolean
  }

  export type CafeVirtualLinkUpdateWithoutCafeInfoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUpdateOneWithoutCafeVirtualLinkNestedInput
  }

  export type CafeVirtualLinkUncheckedUpdateWithoutCafeInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
    CafeVirtualLinkThumbnailImage?: CafeVirtualLinkThumbnailImageUncheckedUpdateOneWithoutCafeVirtualLinkNestedInput
  }

  export type CafeVirtualLinkUncheckedUpdateManyWithoutCafeVirtualLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    isAvaliable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeThumbnailImageUpdateWithoutCafeInfoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeThumbnailImageUncheckedUpdateWithoutCafeInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeThumbnailImageUncheckedUpdateManyWithoutCafeThumbnailImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeVirtualImageUpdateWithoutCafeInfoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeVirtualImageUncheckedUpdateWithoutCafeInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeVirtualImageUncheckedUpdateManyWithoutCafeVirtualImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeRealImageUpdateWithoutCafeInfoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeRealImageUncheckedUpdateWithoutCafeInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CafeRealImageUncheckedUpdateManyWithoutCafeRealImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}