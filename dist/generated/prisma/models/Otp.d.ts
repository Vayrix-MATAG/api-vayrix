import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OtpModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpPayload>;
export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null;
    _avg: OtpAvgAggregateOutputType | null;
    _sum: OtpSumAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
};
export type OtpAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
    tentatives: number | null;
};
export type OtpSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    tentatives: number | null;
};
export type OtpMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    code: string | null;
    canal: string | null;
    type: string | null;
    expireAt: Date | null;
    utilise: boolean | null;
    tentatives: number | null;
    createdAt: Date | null;
};
export type OtpMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    code: string | null;
    canal: string | null;
    type: string | null;
    expireAt: Date | null;
    utilise: boolean | null;
    tentatives: number | null;
    createdAt: Date | null;
};
export type OtpCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    code: number;
    canal: number;
    type: number;
    expireAt: number;
    utilise: number;
    tentatives: number;
    createdAt: number;
    _all: number;
};
export type OtpAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    tentatives?: true;
};
export type OtpSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    tentatives?: true;
};
export type OtpMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    code?: true;
    canal?: true;
    type?: true;
    expireAt?: true;
    utilise?: true;
    tentatives?: true;
    createdAt?: true;
};
export type OtpMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    code?: true;
    canal?: true;
    type?: true;
    expireAt?: true;
    utilise?: true;
    tentatives?: true;
    createdAt?: true;
};
export type OtpCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    code?: true;
    canal?: true;
    type?: true;
    expireAt?: true;
    utilise?: true;
    tentatives?: true;
    createdAt?: true;
    _all?: true;
};
export type OtpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OtpCountAggregateInputType;
    _avg?: OtpAvgAggregateInputType;
    _sum?: OtpSumAggregateInputType;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
};
export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
    [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtp[P]> : Prisma.GetScalarType<T[P], AggregateOtp[P]>;
};
export type OtpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithAggregationInput | Prisma.OtpOrderByWithAggregationInput[];
    by: Prisma.OtpScalarFieldEnum[] | Prisma.OtpScalarFieldEnum;
    having?: Prisma.OtpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpCountAggregateInputType | true;
    _avg?: OtpAvgAggregateInputType;
    _sum?: OtpSumAggregateInputType;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
};
export type OtpGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    code: string;
    canal: string;
    type: string;
    expireAt: Date;
    utilise: boolean;
    tentatives: number;
    createdAt: Date;
    _count: OtpCountAggregateOutputType | null;
    _avg: OtpAvgAggregateOutputType | null;
    _sum: OtpSumAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
};
export type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpGroupByOutputType[P]>;
}>>;
export type OtpWhereInput = {
    AND?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    OR?: Prisma.OtpWhereInput[];
    NOT?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    id?: Prisma.BigIntFilter<"Otp"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Otp"> | bigint | number;
    code?: Prisma.StringFilter<"Otp"> | string;
    canal?: Prisma.StringFilter<"Otp"> | string;
    type?: Prisma.StringFilter<"Otp"> | string;
    expireAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
    utilise?: Prisma.BoolFilter<"Otp"> | boolean;
    tentatives?: Prisma.IntFilter<"Otp"> | number;
    createdAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type OtpOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    utilise?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    OR?: Prisma.OtpWhereInput[];
    NOT?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"Otp"> | bigint | number;
    code?: Prisma.StringFilter<"Otp"> | string;
    canal?: Prisma.StringFilter<"Otp"> | string;
    type?: Prisma.StringFilter<"Otp"> | string;
    expireAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
    utilise?: Prisma.BoolFilter<"Otp"> | boolean;
    tentatives?: Prisma.IntFilter<"Otp"> | number;
    createdAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type OtpOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    utilise?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OtpCountOrderByAggregateInput;
    _avg?: Prisma.OtpAvgOrderByAggregateInput;
    _max?: Prisma.OtpMaxOrderByAggregateInput;
    _min?: Prisma.OtpMinOrderByAggregateInput;
    _sum?: Prisma.OtpSumOrderByAggregateInput;
};
export type OtpScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpScalarWhereWithAggregatesInput | Prisma.OtpScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpScalarWhereWithAggregatesInput | Prisma.OtpScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Otp"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Otp"> | bigint | number;
    code?: Prisma.StringWithAggregatesFilter<"Otp"> | string;
    canal?: Prisma.StringWithAggregatesFilter<"Otp"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Otp"> | string;
    expireAt?: Prisma.DateTimeWithAggregatesFilter<"Otp"> | Date | string;
    utilise?: Prisma.BoolWithAggregatesFilter<"Otp"> | boolean;
    tentatives?: Prisma.IntWithAggregatesFilter<"Otp"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Otp"> | Date | string;
};
export type OtpCreateInput = {
    id?: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutOtpsInput;
};
export type OtpUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
};
export type OtpUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutOtpsNestedInput;
};
export type OtpUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
};
export type OtpUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpListRelationFilter = {
    every?: Prisma.OtpWhereInput;
    some?: Prisma.OtpWhereInput;
    none?: Prisma.OtpWhereInput;
};
export type OtpOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OtpCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    utilise?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
};
export type OtpMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    utilise?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    utilise?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OtpSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tentatives?: Prisma.SortOrder;
};
export type OtpCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput> | Prisma.OtpCreateWithoutUtilisateurInput[] | Prisma.OtpUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.OtpCreateOrConnectWithoutUtilisateurInput | Prisma.OtpCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.OtpCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
};
export type OtpUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput> | Prisma.OtpCreateWithoutUtilisateurInput[] | Prisma.OtpUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.OtpCreateOrConnectWithoutUtilisateurInput | Prisma.OtpCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.OtpCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
};
export type OtpUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput> | Prisma.OtpCreateWithoutUtilisateurInput[] | Prisma.OtpUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.OtpCreateOrConnectWithoutUtilisateurInput | Prisma.OtpCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.OtpUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.OtpUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.OtpCreateManyUtilisateurInputEnvelope;
    set?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    disconnect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    delete?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    connect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    update?: Prisma.OtpUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.OtpUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.OtpUpdateManyWithWhereWithoutUtilisateurInput | Prisma.OtpUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.OtpScalarWhereInput | Prisma.OtpScalarWhereInput[];
};
export type OtpUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput> | Prisma.OtpCreateWithoutUtilisateurInput[] | Prisma.OtpUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.OtpCreateOrConnectWithoutUtilisateurInput | Prisma.OtpCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.OtpUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.OtpUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.OtpCreateManyUtilisateurInputEnvelope;
    set?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    disconnect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    delete?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    connect?: Prisma.OtpWhereUniqueInput | Prisma.OtpWhereUniqueInput[];
    update?: Prisma.OtpUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.OtpUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.OtpUpdateManyWithWhereWithoutUtilisateurInput | Prisma.OtpUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.OtpScalarWhereInput | Prisma.OtpScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OtpCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
};
export type OtpUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
};
export type OtpCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.OtpWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput>;
};
export type OtpCreateManyUtilisateurInputEnvelope = {
    data: Prisma.OtpCreateManyUtilisateurInput | Prisma.OtpCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type OtpUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.OtpWhereUniqueInput;
    update: Prisma.XOR<Prisma.OtpUpdateWithoutUtilisateurInput, Prisma.OtpUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.OtpCreateWithoutUtilisateurInput, Prisma.OtpUncheckedCreateWithoutUtilisateurInput>;
};
export type OtpUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.OtpWhereUniqueInput;
    data: Prisma.XOR<Prisma.OtpUpdateWithoutUtilisateurInput, Prisma.OtpUncheckedUpdateWithoutUtilisateurInput>;
};
export type OtpUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.OtpScalarWhereInput;
    data: Prisma.XOR<Prisma.OtpUpdateManyMutationInput, Prisma.OtpUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type OtpScalarWhereInput = {
    AND?: Prisma.OtpScalarWhereInput | Prisma.OtpScalarWhereInput[];
    OR?: Prisma.OtpScalarWhereInput[];
    NOT?: Prisma.OtpScalarWhereInput | Prisma.OtpScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Otp"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Otp"> | bigint | number;
    code?: Prisma.StringFilter<"Otp"> | string;
    canal?: Prisma.StringFilter<"Otp"> | string;
    type?: Prisma.StringFilter<"Otp"> | string;
    expireAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
    utilise?: Prisma.BoolFilter<"Otp"> | boolean;
    tentatives?: Prisma.IntFilter<"Otp"> | number;
    createdAt?: Prisma.DateTimeFilter<"Otp"> | Date | string;
};
export type OtpCreateManyUtilisateurInput = {
    id?: bigint | number;
    code: string;
    canal: string;
    type: string;
    expireAt: Date | string;
    utilise?: boolean;
    tentatives?: number;
    createdAt?: Date | string;
};
export type OtpUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilise?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentatives?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OtpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    code?: boolean;
    canal?: boolean;
    type?: boolean;
    expireAt?: boolean;
    utilise?: boolean;
    tentatives?: boolean;
    createdAt?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    code?: boolean;
    canal?: boolean;
    type?: boolean;
    expireAt?: boolean;
    utilise?: boolean;
    tentatives?: boolean;
    createdAt?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    code?: boolean;
    canal?: boolean;
    type?: boolean;
    expireAt?: boolean;
    utilise?: boolean;
    tentatives?: boolean;
    createdAt?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    code?: boolean;
    canal?: boolean;
    type?: boolean;
    expireAt?: boolean;
    utilise?: boolean;
    tentatives?: boolean;
    createdAt?: boolean;
};
export type OtpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "code" | "canal" | "type" | "expireAt" | "utilise" | "tentatives" | "createdAt", ExtArgs["result"]["otp"]>;
export type OtpInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type OtpIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type OtpIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $OtpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Otp";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        code: string;
        canal: string;
        type: string;
        expireAt: Date;
        utilise: boolean;
        tentatives: number;
        createdAt: Date;
    }, ExtArgs["result"]["otp"]>;
    composites: {};
};
export type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpPayload, S>;
export type OtpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpCountAggregateInputType | true;
};
export interface OtpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Otp'];
        meta: {
            name: 'Otp';
        };
    };
    findUnique<T extends OtpFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OtpFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OtpFindManyArgs>(args?: Prisma.SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OtpCreateArgs>(args: Prisma.SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OtpCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OtpDeleteArgs>(args: Prisma.SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OtpUpdateArgs>(args: Prisma.SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OtpDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OtpUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OtpUpsertArgs>(args: Prisma.SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OtpCountArgs>(args?: Prisma.Subset<T, OtpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpCountAggregateOutputType> : number>;
    aggregate<T extends OtpAggregateArgs>(args: Prisma.Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>;
    groupBy<T extends OtpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OtpFieldRefs;
}
export interface Prisma__OtpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OtpFieldRefs {
    readonly id: Prisma.FieldRef<"Otp", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Otp", 'BigInt'>;
    readonly code: Prisma.FieldRef<"Otp", 'String'>;
    readonly canal: Prisma.FieldRef<"Otp", 'String'>;
    readonly type: Prisma.FieldRef<"Otp", 'String'>;
    readonly expireAt: Prisma.FieldRef<"Otp", 'DateTime'>;
    readonly utilise: Prisma.FieldRef<"Otp", 'Boolean'>;
    readonly tentatives: Prisma.FieldRef<"Otp", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Otp", 'DateTime'>;
}
export type OtpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpCreateInput, Prisma.OtpUncheckedCreateInput>;
};
export type OtpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OtpCreateManyInput | Prisma.OtpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.OtpCreateManyInput | Prisma.OtpCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OtpIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OtpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpUpdateInput, Prisma.OtpUncheckedUpdateInput>;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OtpUpdateManyMutationInput, Prisma.OtpUncheckedUpdateManyInput>;
    where?: Prisma.OtpWhereInput;
    limit?: number;
};
export type OtpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpUpdateManyMutationInput, Prisma.OtpUncheckedUpdateManyInput>;
    where?: Prisma.OtpWhereInput;
    limit?: number;
    include?: Prisma.OtpIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OtpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpCreateInput, Prisma.OtpUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OtpUpdateInput, Prisma.OtpUncheckedUpdateInput>;
};
export type OtpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    limit?: number;
};
export type OtpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    include?: Prisma.OtpInclude<ExtArgs> | null;
};
