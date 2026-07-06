import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Utilisateur: "Utilisateur";
    readonly Otp: "Otp";
    readonly Role: "Role";
    readonly UtilisateurRole: "UtilisateurRole";
    readonly Client: "Client";
    readonly ContactUrgence: "ContactUrgence";
    readonly Localisation: "Localisation";
    readonly Chauffeur: "Chauffeur";
    readonly TypeVehicule: "TypeVehicule";
    readonly Vehicule: "Vehicule";
    readonly DocumentChauffeur: "DocumentChauffeur";
    readonly DocumentVehicule: "DocumentVehicule";
    readonly Course: "Course";
    readonly PropositionPrix: "PropositionPrix";
    readonly DemandePartageCourse: "DemandePartageCourse";
    readonly ParticipantCourse: "ParticipantCourse";
    readonly Paiement: "Paiement";
    readonly PositionChauffeur: "PositionChauffeur";
    readonly ModeSecurite: "ModeSecurite";
    readonly EnregistrementAudio: "EnregistrementAudio";
    readonly TranscriptionAudio: "TranscriptionAudio";
    readonly AnalyseSecurite: "AnalyseSecurite";
    readonly AlerteSecurite: "AlerteSecurite";
    readonly Notification: "Notification";
    readonly EvaluationChauffeur: "EvaluationChauffeur";
    readonly EvaluationClient: "EvaluationClient";
    readonly Administrateur: "Administrateur";
    readonly JournalAudit: "JournalAudit";
    readonly Tarification: "Tarification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "utilisateur" | "otp" | "role" | "utilisateurRole" | "client" | "contactUrgence" | "localisation" | "chauffeur" | "typeVehicule" | "vehicule" | "documentChauffeur" | "documentVehicule" | "course" | "propositionPrix" | "demandePartageCourse" | "participantCourse" | "paiement" | "positionChauffeur" | "modeSecurite" | "enregistrementAudio" | "transcriptionAudio" | "analyseSecurite" | "alerteSecurite" | "notification" | "evaluationChauffeur" | "evaluationClient" | "administrateur" | "journalAudit" | "tarification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Utilisateur: {
            payload: Prisma.$UtilisateurPayload<ExtArgs>;
            fields: Prisma.UtilisateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findFirst: {
                    args: Prisma.UtilisateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findMany: {
                    args: Prisma.UtilisateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                create: {
                    args: Prisma.UtilisateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                createMany: {
                    args: Prisma.UtilisateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                delete: {
                    args: Prisma.UtilisateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                update: {
                    args: Prisma.UtilisateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                deleteMany: {
                    args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                upsert: {
                    args: Prisma.UtilisateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                aggregate: {
                    args: Prisma.UtilisateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUtilisateur>;
                };
                groupBy: {
                    args: Prisma.UtilisateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UtilisateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurCountAggregateOutputType> | number;
                };
            };
        };
        Otp: {
            payload: Prisma.$OtpPayload<ExtArgs>;
            fields: Prisma.OtpFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                findFirst: {
                    args: Prisma.OtpFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                findMany: {
                    args: Prisma.OtpFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                create: {
                    args: Prisma.OtpCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                createMany: {
                    args: Prisma.OtpCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                delete: {
                    args: Prisma.OtpDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                update: {
                    args: Prisma.OtpUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                deleteMany: {
                    args: Prisma.OtpDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                upsert: {
                    args: Prisma.OtpUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                aggregate: {
                    args: Prisma.OtpAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtp>;
                };
                groupBy: {
                    args: Prisma.OtpGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        UtilisateurRole: {
            payload: Prisma.$UtilisateurRolePayload<ExtArgs>;
            fields: Prisma.UtilisateurRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UtilisateurRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UtilisateurRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                findFirst: {
                    args: Prisma.UtilisateurRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UtilisateurRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                findMany: {
                    args: Prisma.UtilisateurRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>[];
                };
                create: {
                    args: Prisma.UtilisateurRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                createMany: {
                    args: Prisma.UtilisateurRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UtilisateurRoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>[];
                };
                delete: {
                    args: Prisma.UtilisateurRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                update: {
                    args: Prisma.UtilisateurRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                deleteMany: {
                    args: Prisma.UtilisateurRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UtilisateurRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UtilisateurRoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>[];
                };
                upsert: {
                    args: Prisma.UtilisateurRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                aggregate: {
                    args: Prisma.UtilisateurRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUtilisateurRole>;
                };
                groupBy: {
                    args: Prisma.UtilisateurRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UtilisateurRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurRoleCountAggregateOutputType> | number;
                };
            };
        };
        Client: {
            payload: Prisma.$ClientPayload<ExtArgs>;
            fields: Prisma.ClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findFirst: {
                    args: Prisma.ClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findMany: {
                    args: Prisma.ClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                create: {
                    args: Prisma.ClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                createMany: {
                    args: Prisma.ClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                delete: {
                    args: Prisma.ClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                update: {
                    args: Prisma.ClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                upsert: {
                    args: Prisma.ClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                aggregate: {
                    args: Prisma.ClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClient>;
                };
                groupBy: {
                    args: Prisma.ClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientCountAggregateOutputType> | number;
                };
            };
        };
        ContactUrgence: {
            payload: Prisma.$ContactUrgencePayload<ExtArgs>;
            fields: Prisma.ContactUrgenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactUrgenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactUrgenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                findFirst: {
                    args: Prisma.ContactUrgenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactUrgenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                findMany: {
                    args: Prisma.ContactUrgenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[];
                };
                create: {
                    args: Prisma.ContactUrgenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                createMany: {
                    args: Prisma.ContactUrgenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactUrgenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[];
                };
                delete: {
                    args: Prisma.ContactUrgenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                update: {
                    args: Prisma.ContactUrgenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                deleteMany: {
                    args: Prisma.ContactUrgenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactUrgenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactUrgenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[];
                };
                upsert: {
                    args: Prisma.ContactUrgenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactUrgencePayload>;
                };
                aggregate: {
                    args: Prisma.ContactUrgenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactUrgence>;
                };
                groupBy: {
                    args: Prisma.ContactUrgenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactUrgenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactUrgenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactUrgenceCountAggregateOutputType> | number;
                };
            };
        };
        Localisation: {
            payload: Prisma.$LocalisationPayload<ExtArgs>;
            fields: Prisma.LocalisationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocalisationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocalisationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                findFirst: {
                    args: Prisma.LocalisationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocalisationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                findMany: {
                    args: Prisma.LocalisationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>[];
                };
                create: {
                    args: Prisma.LocalisationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                createMany: {
                    args: Prisma.LocalisationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocalisationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>[];
                };
                delete: {
                    args: Prisma.LocalisationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                update: {
                    args: Prisma.LocalisationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                deleteMany: {
                    args: Prisma.LocalisationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocalisationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocalisationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>[];
                };
                upsert: {
                    args: Prisma.LocalisationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocalisationPayload>;
                };
                aggregate: {
                    args: Prisma.LocalisationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocalisation>;
                };
                groupBy: {
                    args: Prisma.LocalisationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocalisationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocalisationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocalisationCountAggregateOutputType> | number;
                };
            };
        };
        Chauffeur: {
            payload: Prisma.$ChauffeurPayload<ExtArgs>;
            fields: Prisma.ChauffeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChauffeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChauffeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                findFirst: {
                    args: Prisma.ChauffeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChauffeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                findMany: {
                    args: Prisma.ChauffeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                create: {
                    args: Prisma.ChauffeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                createMany: {
                    args: Prisma.ChauffeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChauffeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                delete: {
                    args: Prisma.ChauffeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                update: {
                    args: Prisma.ChauffeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                deleteMany: {
                    args: Prisma.ChauffeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChauffeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChauffeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                upsert: {
                    args: Prisma.ChauffeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                aggregate: {
                    args: Prisma.ChauffeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChauffeur>;
                };
                groupBy: {
                    args: Prisma.ChauffeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChauffeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChauffeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChauffeurCountAggregateOutputType> | number;
                };
            };
        };
        TypeVehicule: {
            payload: Prisma.$TypeVehiculePayload<ExtArgs>;
            fields: Prisma.TypeVehiculeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TypeVehiculeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TypeVehiculeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                findFirst: {
                    args: Prisma.TypeVehiculeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TypeVehiculeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                findMany: {
                    args: Prisma.TypeVehiculeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>[];
                };
                create: {
                    args: Prisma.TypeVehiculeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                createMany: {
                    args: Prisma.TypeVehiculeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TypeVehiculeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>[];
                };
                delete: {
                    args: Prisma.TypeVehiculeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                update: {
                    args: Prisma.TypeVehiculeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                deleteMany: {
                    args: Prisma.TypeVehiculeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TypeVehiculeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TypeVehiculeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>[];
                };
                upsert: {
                    args: Prisma.TypeVehiculeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeVehiculePayload>;
                };
                aggregate: {
                    args: Prisma.TypeVehiculeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTypeVehicule>;
                };
                groupBy: {
                    args: Prisma.TypeVehiculeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeVehiculeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TypeVehiculeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeVehiculeCountAggregateOutputType> | number;
                };
            };
        };
        Vehicule: {
            payload: Prisma.$VehiculePayload<ExtArgs>;
            fields: Prisma.VehiculeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VehiculeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VehiculeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                findFirst: {
                    args: Prisma.VehiculeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VehiculeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                findMany: {
                    args: Prisma.VehiculeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                create: {
                    args: Prisma.VehiculeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                createMany: {
                    args: Prisma.VehiculeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VehiculeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                delete: {
                    args: Prisma.VehiculeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                update: {
                    args: Prisma.VehiculeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                deleteMany: {
                    args: Prisma.VehiculeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VehiculeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VehiculeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                upsert: {
                    args: Prisma.VehiculeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                aggregate: {
                    args: Prisma.VehiculeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVehicule>;
                };
                groupBy: {
                    args: Prisma.VehiculeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VehiculeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculeCountAggregateOutputType> | number;
                };
            };
        };
        DocumentChauffeur: {
            payload: Prisma.$DocumentChauffeurPayload<ExtArgs>;
            fields: Prisma.DocumentChauffeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentChauffeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentChauffeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentChauffeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentChauffeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                findMany: {
                    args: Prisma.DocumentChauffeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>[];
                };
                create: {
                    args: Prisma.DocumentChauffeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                createMany: {
                    args: Prisma.DocumentChauffeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentChauffeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>[];
                };
                delete: {
                    args: Prisma.DocumentChauffeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                update: {
                    args: Prisma.DocumentChauffeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentChauffeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentChauffeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentChauffeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentChauffeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentChauffeurPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentChauffeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentChauffeur>;
                };
                groupBy: {
                    args: Prisma.DocumentChauffeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentChauffeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentChauffeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentChauffeurCountAggregateOutputType> | number;
                };
            };
        };
        DocumentVehicule: {
            payload: Prisma.$DocumentVehiculePayload<ExtArgs>;
            fields: Prisma.DocumentVehiculeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentVehiculeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentVehiculeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                findFirst: {
                    args: Prisma.DocumentVehiculeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentVehiculeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                findMany: {
                    args: Prisma.DocumentVehiculeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>[];
                };
                create: {
                    args: Prisma.DocumentVehiculeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                createMany: {
                    args: Prisma.DocumentVehiculeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentVehiculeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>[];
                };
                delete: {
                    args: Prisma.DocumentVehiculeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                update: {
                    args: Prisma.DocumentVehiculeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentVehiculeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentVehiculeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentVehiculeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>[];
                };
                upsert: {
                    args: Prisma.DocumentVehiculeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentVehiculePayload>;
                };
                aggregate: {
                    args: Prisma.DocumentVehiculeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentVehicule>;
                };
                groupBy: {
                    args: Prisma.DocumentVehiculeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentVehiculeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentVehiculeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentVehiculeCountAggregateOutputType> | number;
                };
            };
        };
        Course: {
            payload: Prisma.$CoursePayload<ExtArgs>;
            fields: Prisma.CourseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findFirst: {
                    args: Prisma.CourseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findMany: {
                    args: Prisma.CourseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                create: {
                    args: Prisma.CourseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                createMany: {
                    args: Prisma.CourseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                delete: {
                    args: Prisma.CourseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                update: {
                    args: Prisma.CourseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                deleteMany: {
                    args: Prisma.CourseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                upsert: {
                    args: Prisma.CourseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                aggregate: {
                    args: Prisma.CourseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse>;
                };
                groupBy: {
                    args: Prisma.CourseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseCountAggregateOutputType> | number;
                };
            };
        };
        PropositionPrix: {
            payload: Prisma.$PropositionPrixPayload<ExtArgs>;
            fields: Prisma.PropositionPrixFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropositionPrixFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropositionPrixFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                findFirst: {
                    args: Prisma.PropositionPrixFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropositionPrixFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                findMany: {
                    args: Prisma.PropositionPrixFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>[];
                };
                create: {
                    args: Prisma.PropositionPrixCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                createMany: {
                    args: Prisma.PropositionPrixCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropositionPrixCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>[];
                };
                delete: {
                    args: Prisma.PropositionPrixDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                update: {
                    args: Prisma.PropositionPrixUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                deleteMany: {
                    args: Prisma.PropositionPrixDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropositionPrixUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropositionPrixUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>[];
                };
                upsert: {
                    args: Prisma.PropositionPrixUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropositionPrixPayload>;
                };
                aggregate: {
                    args: Prisma.PropositionPrixAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropositionPrix>;
                };
                groupBy: {
                    args: Prisma.PropositionPrixGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropositionPrixGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropositionPrixCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropositionPrixCountAggregateOutputType> | number;
                };
            };
        };
        DemandePartageCourse: {
            payload: Prisma.$DemandePartageCoursePayload<ExtArgs>;
            fields: Prisma.DemandePartageCourseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DemandePartageCourseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DemandePartageCourseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                findFirst: {
                    args: Prisma.DemandePartageCourseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DemandePartageCourseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                findMany: {
                    args: Prisma.DemandePartageCourseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>[];
                };
                create: {
                    args: Prisma.DemandePartageCourseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                createMany: {
                    args: Prisma.DemandePartageCourseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DemandePartageCourseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>[];
                };
                delete: {
                    args: Prisma.DemandePartageCourseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                update: {
                    args: Prisma.DemandePartageCourseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                deleteMany: {
                    args: Prisma.DemandePartageCourseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DemandePartageCourseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DemandePartageCourseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>[];
                };
                upsert: {
                    args: Prisma.DemandePartageCourseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandePartageCoursePayload>;
                };
                aggregate: {
                    args: Prisma.DemandePartageCourseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDemandePartageCourse>;
                };
                groupBy: {
                    args: Prisma.DemandePartageCourseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DemandePartageCourseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DemandePartageCourseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DemandePartageCourseCountAggregateOutputType> | number;
                };
            };
        };
        ParticipantCourse: {
            payload: Prisma.$ParticipantCoursePayload<ExtArgs>;
            fields: Prisma.ParticipantCourseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParticipantCourseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParticipantCourseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                findFirst: {
                    args: Prisma.ParticipantCourseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParticipantCourseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                findMany: {
                    args: Prisma.ParticipantCourseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>[];
                };
                create: {
                    args: Prisma.ParticipantCourseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                createMany: {
                    args: Prisma.ParticipantCourseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParticipantCourseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>[];
                };
                delete: {
                    args: Prisma.ParticipantCourseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                update: {
                    args: Prisma.ParticipantCourseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                deleteMany: {
                    args: Prisma.ParticipantCourseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParticipantCourseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParticipantCourseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>[];
                };
                upsert: {
                    args: Prisma.ParticipantCourseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantCoursePayload>;
                };
                aggregate: {
                    args: Prisma.ParticipantCourseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParticipantCourse>;
                };
                groupBy: {
                    args: Prisma.ParticipantCourseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCourseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParticipantCourseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCourseCountAggregateOutputType> | number;
                };
            };
        };
        Paiement: {
            payload: Prisma.$PaiementPayload<ExtArgs>;
            fields: Prisma.PaiementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaiementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                findFirst: {
                    args: Prisma.PaiementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                findMany: {
                    args: Prisma.PaiementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>[];
                };
                create: {
                    args: Prisma.PaiementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                createMany: {
                    args: Prisma.PaiementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>[];
                };
                delete: {
                    args: Prisma.PaiementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                update: {
                    args: Prisma.PaiementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                deleteMany: {
                    args: Prisma.PaiementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaiementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>[];
                };
                upsert: {
                    args: Prisma.PaiementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaiementPayload>;
                };
                aggregate: {
                    args: Prisma.PaiementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaiement>;
                };
                groupBy: {
                    args: Prisma.PaiementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaiementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaiementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaiementCountAggregateOutputType> | number;
                };
            };
        };
        PositionChauffeur: {
            payload: Prisma.$PositionChauffeurPayload<ExtArgs>;
            fields: Prisma.PositionChauffeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PositionChauffeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PositionChauffeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                findFirst: {
                    args: Prisma.PositionChauffeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PositionChauffeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                findMany: {
                    args: Prisma.PositionChauffeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>[];
                };
                create: {
                    args: Prisma.PositionChauffeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                createMany: {
                    args: Prisma.PositionChauffeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PositionChauffeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>[];
                };
                delete: {
                    args: Prisma.PositionChauffeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                update: {
                    args: Prisma.PositionChauffeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                deleteMany: {
                    args: Prisma.PositionChauffeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PositionChauffeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PositionChauffeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>[];
                };
                upsert: {
                    args: Prisma.PositionChauffeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionChauffeurPayload>;
                };
                aggregate: {
                    args: Prisma.PositionChauffeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePositionChauffeur>;
                };
                groupBy: {
                    args: Prisma.PositionChauffeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionChauffeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PositionChauffeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionChauffeurCountAggregateOutputType> | number;
                };
            };
        };
        ModeSecurite: {
            payload: Prisma.$ModeSecuritePayload<ExtArgs>;
            fields: Prisma.ModeSecuriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModeSecuriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModeSecuriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                findFirst: {
                    args: Prisma.ModeSecuriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModeSecuriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                findMany: {
                    args: Prisma.ModeSecuriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>[];
                };
                create: {
                    args: Prisma.ModeSecuriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                createMany: {
                    args: Prisma.ModeSecuriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModeSecuriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>[];
                };
                delete: {
                    args: Prisma.ModeSecuriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                update: {
                    args: Prisma.ModeSecuriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                deleteMany: {
                    args: Prisma.ModeSecuriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModeSecuriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModeSecuriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>[];
                };
                upsert: {
                    args: Prisma.ModeSecuriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeSecuritePayload>;
                };
                aggregate: {
                    args: Prisma.ModeSecuriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModeSecurite>;
                };
                groupBy: {
                    args: Prisma.ModeSecuriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModeSecuriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModeSecuriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModeSecuriteCountAggregateOutputType> | number;
                };
            };
        };
        EnregistrementAudio: {
            payload: Prisma.$EnregistrementAudioPayload<ExtArgs>;
            fields: Prisma.EnregistrementAudioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EnregistrementAudioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EnregistrementAudioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                findFirst: {
                    args: Prisma.EnregistrementAudioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EnregistrementAudioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                findMany: {
                    args: Prisma.EnregistrementAudioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>[];
                };
                create: {
                    args: Prisma.EnregistrementAudioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                createMany: {
                    args: Prisma.EnregistrementAudioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EnregistrementAudioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>[];
                };
                delete: {
                    args: Prisma.EnregistrementAudioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                update: {
                    args: Prisma.EnregistrementAudioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                deleteMany: {
                    args: Prisma.EnregistrementAudioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EnregistrementAudioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EnregistrementAudioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>[];
                };
                upsert: {
                    args: Prisma.EnregistrementAudioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnregistrementAudioPayload>;
                };
                aggregate: {
                    args: Prisma.EnregistrementAudioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnregistrementAudio>;
                };
                groupBy: {
                    args: Prisma.EnregistrementAudioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnregistrementAudioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EnregistrementAudioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnregistrementAudioCountAggregateOutputType> | number;
                };
            };
        };
        TranscriptionAudio: {
            payload: Prisma.$TranscriptionAudioPayload<ExtArgs>;
            fields: Prisma.TranscriptionAudioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TranscriptionAudioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TranscriptionAudioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                findFirst: {
                    args: Prisma.TranscriptionAudioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TranscriptionAudioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                findMany: {
                    args: Prisma.TranscriptionAudioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>[];
                };
                create: {
                    args: Prisma.TranscriptionAudioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                createMany: {
                    args: Prisma.TranscriptionAudioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TranscriptionAudioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>[];
                };
                delete: {
                    args: Prisma.TranscriptionAudioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                update: {
                    args: Prisma.TranscriptionAudioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                deleteMany: {
                    args: Prisma.TranscriptionAudioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TranscriptionAudioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TranscriptionAudioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>[];
                };
                upsert: {
                    args: Prisma.TranscriptionAudioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TranscriptionAudioPayload>;
                };
                aggregate: {
                    args: Prisma.TranscriptionAudioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTranscriptionAudio>;
                };
                groupBy: {
                    args: Prisma.TranscriptionAudioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptionAudioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TranscriptionAudioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TranscriptionAudioCountAggregateOutputType> | number;
                };
            };
        };
        AnalyseSecurite: {
            payload: Prisma.$AnalyseSecuritePayload<ExtArgs>;
            fields: Prisma.AnalyseSecuriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalyseSecuriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalyseSecuriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                findFirst: {
                    args: Prisma.AnalyseSecuriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalyseSecuriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                findMany: {
                    args: Prisma.AnalyseSecuriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>[];
                };
                create: {
                    args: Prisma.AnalyseSecuriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                createMany: {
                    args: Prisma.AnalyseSecuriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalyseSecuriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>[];
                };
                delete: {
                    args: Prisma.AnalyseSecuriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                update: {
                    args: Prisma.AnalyseSecuriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                deleteMany: {
                    args: Prisma.AnalyseSecuriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalyseSecuriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalyseSecuriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>[];
                };
                upsert: {
                    args: Prisma.AnalyseSecuriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyseSecuritePayload>;
                };
                aggregate: {
                    args: Prisma.AnalyseSecuriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalyseSecurite>;
                };
                groupBy: {
                    args: Prisma.AnalyseSecuriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyseSecuriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalyseSecuriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyseSecuriteCountAggregateOutputType> | number;
                };
            };
        };
        AlerteSecurite: {
            payload: Prisma.$AlerteSecuritePayload<ExtArgs>;
            fields: Prisma.AlerteSecuriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlerteSecuriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlerteSecuriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                findFirst: {
                    args: Prisma.AlerteSecuriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlerteSecuriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                findMany: {
                    args: Prisma.AlerteSecuriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>[];
                };
                create: {
                    args: Prisma.AlerteSecuriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                createMany: {
                    args: Prisma.AlerteSecuriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlerteSecuriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>[];
                };
                delete: {
                    args: Prisma.AlerteSecuriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                update: {
                    args: Prisma.AlerteSecuriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                deleteMany: {
                    args: Prisma.AlerteSecuriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlerteSecuriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlerteSecuriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>[];
                };
                upsert: {
                    args: Prisma.AlerteSecuriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlerteSecuritePayload>;
                };
                aggregate: {
                    args: Prisma.AlerteSecuriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlerteSecurite>;
                };
                groupBy: {
                    args: Prisma.AlerteSecuriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteSecuriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlerteSecuriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteSecuriteCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationChauffeur: {
            payload: Prisma.$EvaluationChauffeurPayload<ExtArgs>;
            fields: Prisma.EvaluationChauffeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationChauffeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationChauffeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationChauffeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationChauffeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationChauffeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>[];
                };
                create: {
                    args: Prisma.EvaluationChauffeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationChauffeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationChauffeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationChauffeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                update: {
                    args: Prisma.EvaluationChauffeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationChauffeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationChauffeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationChauffeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationChauffeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationChauffeurPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationChauffeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationChauffeur>;
                };
                groupBy: {
                    args: Prisma.EvaluationChauffeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationChauffeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationChauffeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationChauffeurCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationClient: {
            payload: Prisma.$EvaluationClientPayload<ExtArgs>;
            fields: Prisma.EvaluationClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>[];
                };
                create: {
                    args: Prisma.EvaluationClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationClientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                update: {
                    args: Prisma.EvaluationClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationClientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationClientPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationClient>;
                };
                groupBy: {
                    args: Prisma.EvaluationClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationClientCountAggregateOutputType> | number;
                };
            };
        };
        Administrateur: {
            payload: Prisma.$AdministrateurPayload<ExtArgs>;
            fields: Prisma.AdministrateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdministrateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdministrateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                findFirst: {
                    args: Prisma.AdministrateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdministrateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                findMany: {
                    args: Prisma.AdministrateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>[];
                };
                create: {
                    args: Prisma.AdministrateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                createMany: {
                    args: Prisma.AdministrateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdministrateurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>[];
                };
                delete: {
                    args: Prisma.AdministrateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                update: {
                    args: Prisma.AdministrateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                deleteMany: {
                    args: Prisma.AdministrateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdministrateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdministrateurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>[];
                };
                upsert: {
                    args: Prisma.AdministrateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrateurPayload>;
                };
                aggregate: {
                    args: Prisma.AdministrateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdministrateur>;
                };
                groupBy: {
                    args: Prisma.AdministrateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdministrateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdministrateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdministrateurCountAggregateOutputType> | number;
                };
            };
        };
        JournalAudit: {
            payload: Prisma.$JournalAuditPayload<ExtArgs>;
            fields: Prisma.JournalAuditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JournalAuditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JournalAuditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                findFirst: {
                    args: Prisma.JournalAuditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JournalAuditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                findMany: {
                    args: Prisma.JournalAuditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>[];
                };
                create: {
                    args: Prisma.JournalAuditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                createMany: {
                    args: Prisma.JournalAuditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JournalAuditCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>[];
                };
                delete: {
                    args: Prisma.JournalAuditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                update: {
                    args: Prisma.JournalAuditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                deleteMany: {
                    args: Prisma.JournalAuditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JournalAuditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JournalAuditUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>[];
                };
                upsert: {
                    args: Prisma.JournalAuditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                aggregate: {
                    args: Prisma.JournalAuditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJournalAudit>;
                };
                groupBy: {
                    args: Prisma.JournalAuditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalAuditGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JournalAuditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalAuditCountAggregateOutputType> | number;
                };
            };
        };
        Tarification: {
            payload: Prisma.$TarificationPayload<ExtArgs>;
            fields: Prisma.TarificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TarificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TarificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                findFirst: {
                    args: Prisma.TarificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TarificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                findMany: {
                    args: Prisma.TarificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>[];
                };
                create: {
                    args: Prisma.TarificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                createMany: {
                    args: Prisma.TarificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TarificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>[];
                };
                delete: {
                    args: Prisma.TarificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                update: {
                    args: Prisma.TarificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                deleteMany: {
                    args: Prisma.TarificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TarificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TarificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>[];
                };
                upsert: {
                    args: Prisma.TarificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TarificationPayload>;
                };
                aggregate: {
                    args: Prisma.TarificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTarification>;
                };
                groupBy: {
                    args: Prisma.TarificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TarificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TarificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TarificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UtilisateurScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly motDePasse: "motDePasse";
    readonly photo: "photo";
    readonly langue: "langue";
    readonly derniereConnexion: "derniereConnexion";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
    readonly refreshToken: "refreshToken";
};
export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum];
export declare const OtpScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly code: "code";
    readonly canal: "canal";
    readonly type: "type";
    readonly expireAt: "expireAt";
    readonly utilise: "utilise";
    readonly tentatives: "tentatives";
    readonly createdAt: "createdAt";
};
export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly description: "description";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UtilisateurRoleScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly roleId: "roleId";
};
export type UtilisateurRoleScalarFieldEnum = (typeof UtilisateurRoleScalarFieldEnum)[keyof typeof UtilisateurRoleScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly estEnLigne: "estEnLigne";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const ContactUrgenceScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly nom: "nom";
    readonly telephone: "telephone";
    readonly mail: "mail";
};
export type ContactUrgenceScalarFieldEnum = (typeof ContactUrgenceScalarFieldEnum)[keyof typeof ContactUrgenceScalarFieldEnum];
export declare const LocalisationScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly adresse: "adresse";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
};
export type LocalisationScalarFieldEnum = (typeof LocalisationScalarFieldEnum)[keyof typeof LocalisationScalarFieldEnum];
export declare const ChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly numeroPermis: "numeroPermis";
    readonly estEnLigne: "estEnLigne";
    readonly solde: "solde";
    readonly statut: "statut";
    readonly motifStatut: "motifStatut";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
};
export type ChauffeurScalarFieldEnum = (typeof ChauffeurScalarFieldEnum)[keyof typeof ChauffeurScalarFieldEnum];
export declare const TypeVehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prixBase: "prixBase";
    readonly prixParKm: "prixParKm";
};
export type TypeVehiculeScalarFieldEnum = (typeof TypeVehiculeScalarFieldEnum)[keyof typeof TypeVehiculeScalarFieldEnum];
export declare const VehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly typeVehiculeId: "typeVehiculeId";
    readonly marque: "marque";
    readonly modele: "modele";
    readonly couleur: "couleur";
    readonly matricule: "matricule";
    readonly annee: "annee";
    readonly statut: "statut";
};
export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum];
export declare const DocumentChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly typeDocument: "typeDocument";
    readonly urlDocument: "urlDocument";
    readonly statut: "statut";
    readonly dateUpload: "dateUpload";
};
export type DocumentChauffeurScalarFieldEnum = (typeof DocumentChauffeurScalarFieldEnum)[keyof typeof DocumentChauffeurScalarFieldEnum];
export declare const DocumentVehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly vehiculeId: "vehiculeId";
    readonly typeDocument: "typeDocument";
    readonly urlDocument: "urlDocument";
    readonly statut: "statut";
    readonly dateUpload: "dateUpload";
};
export type DocumentVehiculeScalarFieldEnum = (typeof DocumentVehiculeScalarFieldEnum)[keyof typeof DocumentVehiculeScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly vehiculeId: "vehiculeId";
    readonly distance: "distance";
    readonly prixInitial: "prixInitial";
    readonly prixFinal: "prixFinal";
    readonly typeCourse: "typeCourse";
    readonly statut: "statut";
    readonly partageActif: "partageActif";
    readonly dateCreation: "dateCreation";
    readonly dateAcceptation: "dateAcceptation";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const PropositionPrixScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly chauffeurId: "chauffeurId";
    readonly auteur: "auteur";
    readonly prix: "prix";
    readonly statut: "statut";
    readonly dateProposition: "dateProposition";
};
export type PropositionPrixScalarFieldEnum = (typeof PropositionPrixScalarFieldEnum)[keyof typeof PropositionPrixScalarFieldEnum];
export declare const DemandePartageCourseScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientDemandeurId: "clientDemandeurId";
    readonly adresseDepart: "adresseDepart";
    readonly adresseArrivee: "adresseArrivee";
    readonly latitudeArrivee: "latitudeArrivee";
    readonly longitudeArrivee: "longitudeArrivee";
    readonly latitudeDepart: "latitudeDepart";
    readonly longitudeDepart: "longitudeDepart";
    readonly prixCalcule: "prixCalcule";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type DemandePartageCourseScalarFieldEnum = (typeof DemandePartageCourseScalarFieldEnum)[keyof typeof DemandePartageCourseScalarFieldEnum];
export declare const ParticipantCourseScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly adresseDepart: "adresseDepart";
    readonly latitudeDepart: "latitudeDepart";
    readonly longitudeDepart: "longitudeDepart";
    readonly adresseArrivee: "adresseArrivee";
    readonly latitudeArrivee: "latitudeArrivee";
    readonly longitudeArrivee: "longitudeArrivee";
    readonly prixInitial: "prixInitial";
    readonly prixFinal: "prixFinal";
    readonly statut: "statut";
    readonly economieClient: "economieClient";
    readonly role: "role";
    readonly heureMontee: "heureMontee";
    readonly heureDescente: "heureDescente";
    readonly dateCreation: "dateCreation";
};
export type ParticipantCourseScalarFieldEnum = (typeof ParticipantCourseScalarFieldEnum)[keyof typeof ParticipantCourseScalarFieldEnum];
export declare const PaiementScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly participantCourseId: "participantCourseId";
    readonly montant: "montant";
    readonly methode: "methode";
    readonly referenceTransaction: "referenceTransaction";
    readonly statut: "statut";
    readonly datePaiement: "datePaiement";
};
export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum];
export declare const PositionChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly chauffeurId: "chauffeurId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly vitesse: "vitesse";
    readonly datePosition: "datePosition";
};
export type PositionChauffeurScalarFieldEnum = (typeof PositionChauffeurScalarFieldEnum)[keyof typeof PositionChauffeurScalarFieldEnum];
export declare const ModeSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly actif: "actif";
    readonly dateActivation: "dateActivation";
    readonly dateDesactivation: "dateDesactivation";
};
export type ModeSecuriteScalarFieldEnum = (typeof ModeSecuriteScalarFieldEnum)[keyof typeof ModeSecuriteScalarFieldEnum];
export declare const EnregistrementAudioScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly heureDebut: "heureDebut";
    readonly heureFin: "heureFin";
    readonly urlAudio: "urlAudio";
};
export type EnregistrementAudioScalarFieldEnum = (typeof EnregistrementAudioScalarFieldEnum)[keyof typeof EnregistrementAudioScalarFieldEnum];
export declare const TranscriptionAudioScalarFieldEnum: {
    readonly id: "id";
    readonly enregistrementId: "enregistrementId";
    readonly texte: "texte";
    readonly horodatage: "horodatage";
};
export type TranscriptionAudioScalarFieldEnum = (typeof TranscriptionAudioScalarFieldEnum)[keyof typeof TranscriptionAudioScalarFieldEnum];
export declare const AnalyseSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly scoreRisque: "scoreRisque";
    readonly niveauRisque: "niveauRisque";
    readonly resume: "resume";
    readonly dateAnalyse: "dateAnalyse";
};
export type AnalyseSecuriteScalarFieldEnum = (typeof AnalyseSecuriteScalarFieldEnum)[keyof typeof AnalyseSecuriteScalarFieldEnum];
export declare const AlerteSecuriteScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly utilisateurId: "utilisateurId";
    readonly typeAlerte: "typeAlerte";
    readonly niveauRisque: "niveauRisque";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly message: "message";
    readonly statut: "statut";
    readonly dateCreation: "dateCreation";
};
export type AlerteSecuriteScalarFieldEnum = (typeof AlerteSecuriteScalarFieldEnum)[keyof typeof AlerteSecuriteScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly titre: "titre";
    readonly message: "message";
    readonly type: "type";
    readonly lu: "lu";
    readonly dateCreation: "dateCreation";
    readonly dateDeLecture: "dateDeLecture";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const EvaluationChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly clientId: "clientId";
    readonly chauffeurId: "chauffeurId";
    readonly note: "note";
    readonly commentaire: "commentaire";
    readonly dateCreation: "dateCreation";
};
export type EvaluationChauffeurScalarFieldEnum = (typeof EvaluationChauffeurScalarFieldEnum)[keyof typeof EvaluationChauffeurScalarFieldEnum];
export declare const EvaluationClientScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly chauffeurId: "chauffeurId";
    readonly clientId: "clientId";
    readonly note: "note";
    readonly commentaire: "commentaire";
    readonly dateCreation: "dateCreation";
};
export type EvaluationClientScalarFieldEnum = (typeof EvaluationClientScalarFieldEnum)[keyof typeof EvaluationClientScalarFieldEnum];
export declare const AdministrateurScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly niveau: "niveau";
};
export type AdministrateurScalarFieldEnum = (typeof AdministrateurScalarFieldEnum)[keyof typeof AdministrateurScalarFieldEnum];
export declare const JournalAuditScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly dateAction: "dateAction";
};
export type JournalAuditScalarFieldEnum = (typeof JournalAuditScalarFieldEnum)[keyof typeof JournalAuditScalarFieldEnum];
export declare const TarificationScalarFieldEnum: {
    readonly id: "id";
    readonly typeVehiculeId: "typeVehiculeId";
    readonly prixDepart: "prixDepart";
    readonly prixKm: "prixKm";
    readonly prixMinimum: "prixMinimum";
    readonly commission: "commission";
};
export type TarificationScalarFieldEnum = (typeof TarificationScalarFieldEnum)[keyof typeof TarificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    utilisateur?: Prisma.UtilisateurOmit;
    otp?: Prisma.OtpOmit;
    role?: Prisma.RoleOmit;
    utilisateurRole?: Prisma.UtilisateurRoleOmit;
    client?: Prisma.ClientOmit;
    contactUrgence?: Prisma.ContactUrgenceOmit;
    localisation?: Prisma.LocalisationOmit;
    chauffeur?: Prisma.ChauffeurOmit;
    typeVehicule?: Prisma.TypeVehiculeOmit;
    vehicule?: Prisma.VehiculeOmit;
    documentChauffeur?: Prisma.DocumentChauffeurOmit;
    documentVehicule?: Prisma.DocumentVehiculeOmit;
    course?: Prisma.CourseOmit;
    propositionPrix?: Prisma.PropositionPrixOmit;
    demandePartageCourse?: Prisma.DemandePartageCourseOmit;
    participantCourse?: Prisma.ParticipantCourseOmit;
    paiement?: Prisma.PaiementOmit;
    positionChauffeur?: Prisma.PositionChauffeurOmit;
    modeSecurite?: Prisma.ModeSecuriteOmit;
    enregistrementAudio?: Prisma.EnregistrementAudioOmit;
    transcriptionAudio?: Prisma.TranscriptionAudioOmit;
    analyseSecurite?: Prisma.AnalyseSecuriteOmit;
    alerteSecurite?: Prisma.AlerteSecuriteOmit;
    notification?: Prisma.NotificationOmit;
    evaluationChauffeur?: Prisma.EvaluationChauffeurOmit;
    evaluationClient?: Prisma.EvaluationClientOmit;
    administrateur?: Prisma.AdministrateurOmit;
    journalAudit?: Prisma.JournalAuditOmit;
    tarification?: Prisma.TarificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
