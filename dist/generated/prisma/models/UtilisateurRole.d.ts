import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UtilisateurRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$UtilisateurRolePayload>;
export type AggregateUtilisateurRole = {
    _count: UtilisateurRoleCountAggregateOutputType | null;
    _avg: UtilisateurRoleAvgAggregateOutputType | null;
    _sum: UtilisateurRoleSumAggregateOutputType | null;
    _min: UtilisateurRoleMinAggregateOutputType | null;
    _max: UtilisateurRoleMaxAggregateOutputType | null;
};
export type UtilisateurRoleAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
    roleId: number | null;
};
export type UtilisateurRoleSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    roleId: bigint | null;
};
export type UtilisateurRoleMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    roleId: bigint | null;
};
export type UtilisateurRoleMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    roleId: bigint | null;
};
export type UtilisateurRoleCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    roleId: number;
    _all: number;
};
export type UtilisateurRoleAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    roleId?: true;
};
export type UtilisateurRoleSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    roleId?: true;
};
export type UtilisateurRoleMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    roleId?: true;
};
export type UtilisateurRoleMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    roleId?: true;
};
export type UtilisateurRoleCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    roleId?: true;
    _all?: true;
};
export type UtilisateurRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurRoleWhereInput;
    orderBy?: Prisma.UtilisateurRoleOrderByWithRelationInput | Prisma.UtilisateurRoleOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UtilisateurRoleCountAggregateInputType;
    _avg?: UtilisateurRoleAvgAggregateInputType;
    _sum?: UtilisateurRoleSumAggregateInputType;
    _min?: UtilisateurRoleMinAggregateInputType;
    _max?: UtilisateurRoleMaxAggregateInputType;
};
export type GetUtilisateurRoleAggregateType<T extends UtilisateurRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateUtilisateurRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUtilisateurRole[P]> : Prisma.GetScalarType<T[P], AggregateUtilisateurRole[P]>;
};
export type UtilisateurRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurRoleWhereInput;
    orderBy?: Prisma.UtilisateurRoleOrderByWithAggregationInput | Prisma.UtilisateurRoleOrderByWithAggregationInput[];
    by: Prisma.UtilisateurRoleScalarFieldEnum[] | Prisma.UtilisateurRoleScalarFieldEnum;
    having?: Prisma.UtilisateurRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UtilisateurRoleCountAggregateInputType | true;
    _avg?: UtilisateurRoleAvgAggregateInputType;
    _sum?: UtilisateurRoleSumAggregateInputType;
    _min?: UtilisateurRoleMinAggregateInputType;
    _max?: UtilisateurRoleMaxAggregateInputType;
};
export type UtilisateurRoleGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    roleId: bigint;
    _count: UtilisateurRoleCountAggregateOutputType | null;
    _avg: UtilisateurRoleAvgAggregateOutputType | null;
    _sum: UtilisateurRoleSumAggregateOutputType | null;
    _min: UtilisateurRoleMinAggregateOutputType | null;
    _max: UtilisateurRoleMaxAggregateOutputType | null;
};
export type GetUtilisateurRoleGroupByPayload<T extends UtilisateurRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UtilisateurRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UtilisateurRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UtilisateurRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UtilisateurRoleGroupByOutputType[P]>;
}>>;
export type UtilisateurRoleWhereInput = {
    AND?: Prisma.UtilisateurRoleWhereInput | Prisma.UtilisateurRoleWhereInput[];
    OR?: Prisma.UtilisateurRoleWhereInput[];
    NOT?: Prisma.UtilisateurRoleWhereInput | Prisma.UtilisateurRoleWhereInput[];
    id?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    roleId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type UtilisateurRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    role?: Prisma.RoleOrderByWithRelationInput;
};
export type UtilisateurRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    utilisateurId_roleId?: Prisma.UtilisateurRoleUtilisateurIdRoleIdCompoundUniqueInput;
    AND?: Prisma.UtilisateurRoleWhereInput | Prisma.UtilisateurRoleWhereInput[];
    OR?: Prisma.UtilisateurRoleWhereInput[];
    NOT?: Prisma.UtilisateurRoleWhereInput | Prisma.UtilisateurRoleWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    roleId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "id" | "utilisateurId_roleId">;
export type UtilisateurRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    _count?: Prisma.UtilisateurRoleCountOrderByAggregateInput;
    _avg?: Prisma.UtilisateurRoleAvgOrderByAggregateInput;
    _max?: Prisma.UtilisateurRoleMaxOrderByAggregateInput;
    _min?: Prisma.UtilisateurRoleMinOrderByAggregateInput;
    _sum?: Prisma.UtilisateurRoleSumOrderByAggregateInput;
};
export type UtilisateurRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.UtilisateurRoleScalarWhereWithAggregatesInput | Prisma.UtilisateurRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.UtilisateurRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UtilisateurRoleScalarWhereWithAggregatesInput | Prisma.UtilisateurRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"UtilisateurRole"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"UtilisateurRole"> | bigint | number;
    roleId?: Prisma.BigIntWithAggregatesFilter<"UtilisateurRole"> | bigint | number;
};
export type UtilisateurRoleCreateInput = {
    id?: bigint | number;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutUtilisateurRolesInput;
    role: Prisma.RoleCreateNestedOneWithoutUtilisateurRolesInput;
};
export type UtilisateurRoleUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    roleId: bigint | number;
};
export type UtilisateurRoleUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutUtilisateurRolesNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutUtilisateurRolesNestedInput;
};
export type UtilisateurRoleUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    roleId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    roleId: bigint | number;
};
export type UtilisateurRoleUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    roleId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleListRelationFilter = {
    every?: Prisma.UtilisateurRoleWhereInput;
    some?: Prisma.UtilisateurRoleWhereInput;
    none?: Prisma.UtilisateurRoleWhereInput;
};
export type UtilisateurRoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UtilisateurRoleUtilisateurIdRoleIdCompoundUniqueInput = {
    utilisateurId: bigint | number;
    roleId: bigint | number;
};
export type UtilisateurRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UtilisateurRoleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UtilisateurRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UtilisateurRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UtilisateurRoleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UtilisateurRoleCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput> | Prisma.UtilisateurRoleCreateWithoutUtilisateurInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput | Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
};
export type UtilisateurRoleUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput> | Prisma.UtilisateurRoleCreateWithoutUtilisateurInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput | Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
};
export type UtilisateurRoleUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput> | Prisma.UtilisateurRoleCreateWithoutUtilisateurInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput | Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyUtilisateurInputEnvelope;
    set?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    disconnect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    delete?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    update?: Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.UtilisateurRoleUpdateManyWithWhereWithoutUtilisateurInput | Prisma.UtilisateurRoleUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
};
export type UtilisateurRoleUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput> | Prisma.UtilisateurRoleCreateWithoutUtilisateurInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput | Prisma.UtilisateurRoleCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyUtilisateurInputEnvelope;
    set?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    disconnect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    delete?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    update?: Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.UtilisateurRoleUpdateManyWithWhereWithoutUtilisateurInput | Prisma.UtilisateurRoleUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
};
export type UtilisateurRoleCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput> | Prisma.UtilisateurRoleCreateWithoutRoleInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput | Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyRoleInputEnvelope;
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
};
export type UtilisateurRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput> | Prisma.UtilisateurRoleCreateWithoutRoleInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput | Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyRoleInputEnvelope;
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
};
export type UtilisateurRoleUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput> | Prisma.UtilisateurRoleCreateWithoutRoleInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput | Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutRoleInput | Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyRoleInputEnvelope;
    set?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    disconnect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    delete?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    update?: Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutRoleInput | Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UtilisateurRoleUpdateManyWithWhereWithoutRoleInput | Prisma.UtilisateurRoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
};
export type UtilisateurRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput> | Prisma.UtilisateurRoleCreateWithoutRoleInput[] | Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput | Prisma.UtilisateurRoleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutRoleInput | Prisma.UtilisateurRoleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UtilisateurRoleCreateManyRoleInputEnvelope;
    set?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    disconnect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    delete?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    connect?: Prisma.UtilisateurRoleWhereUniqueInput | Prisma.UtilisateurRoleWhereUniqueInput[];
    update?: Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutRoleInput | Prisma.UtilisateurRoleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UtilisateurRoleUpdateManyWithWhereWithoutRoleInput | Prisma.UtilisateurRoleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
};
export type UtilisateurRoleCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    role: Prisma.RoleCreateNestedOneWithoutUtilisateurRolesInput;
};
export type UtilisateurRoleUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    roleId: bigint | number;
};
export type UtilisateurRoleCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput>;
};
export type UtilisateurRoleCreateManyUtilisateurInputEnvelope = {
    data: Prisma.UtilisateurRoleCreateManyUtilisateurInput | Prisma.UtilisateurRoleCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type UtilisateurRoleUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.UtilisateurRoleUpdateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedCreateWithoutUtilisateurInput>;
};
export type UtilisateurRoleUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateWithoutUtilisateurInput, Prisma.UtilisateurRoleUncheckedUpdateWithoutUtilisateurInput>;
};
export type UtilisateurRoleUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.UtilisateurRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateManyMutationInput, Prisma.UtilisateurRoleUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type UtilisateurRoleScalarWhereInput = {
    AND?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
    OR?: Prisma.UtilisateurRoleScalarWhereInput[];
    NOT?: Prisma.UtilisateurRoleScalarWhereInput | Prisma.UtilisateurRoleScalarWhereInput[];
    id?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
    roleId?: Prisma.BigIntFilter<"UtilisateurRole"> | bigint | number;
};
export type UtilisateurRoleCreateWithoutRoleInput = {
    id?: bigint | number;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutUtilisateurRolesInput;
};
export type UtilisateurRoleUncheckedCreateWithoutRoleInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
};
export type UtilisateurRoleCreateOrConnectWithoutRoleInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput>;
};
export type UtilisateurRoleCreateManyRoleInputEnvelope = {
    data: Prisma.UtilisateurRoleCreateManyRoleInput | Prisma.UtilisateurRoleCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type UtilisateurRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.UtilisateurRoleUpdateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.UtilisateurRoleCreateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedCreateWithoutRoleInput>;
};
export type UtilisateurRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateWithoutRoleInput, Prisma.UtilisateurRoleUncheckedUpdateWithoutRoleInput>;
};
export type UtilisateurRoleUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.UtilisateurRoleScalarWhereInput;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateManyMutationInput, Prisma.UtilisateurRoleUncheckedUpdateManyWithoutRoleInput>;
};
export type UtilisateurRoleCreateManyUtilisateurInput = {
    id?: bigint | number;
    roleId: bigint | number;
};
export type UtilisateurRoleUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    role?: Prisma.RoleUpdateOneRequiredWithoutUtilisateurRolesNestedInput;
};
export type UtilisateurRoleUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    roleId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    roleId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleCreateManyRoleInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
};
export type UtilisateurRoleUpdateWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutUtilisateurRolesNestedInput;
};
export type UtilisateurRoleUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UtilisateurRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    roleId?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["utilisateurRole"]>;
export type UtilisateurRoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    roleId?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["utilisateurRole"]>;
export type UtilisateurRoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    roleId?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["utilisateurRole"]>;
export type UtilisateurRoleSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    roleId?: boolean;
};
export type UtilisateurRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "roleId", ExtArgs["result"]["utilisateurRole"]>;
export type UtilisateurRoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type UtilisateurRoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type UtilisateurRoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $UtilisateurRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UtilisateurRole";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
        role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        roleId: bigint;
    }, ExtArgs["result"]["utilisateurRole"]>;
    composites: {};
};
export type UtilisateurRoleGetPayload<S extends boolean | null | undefined | UtilisateurRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload, S>;
export type UtilisateurRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UtilisateurRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UtilisateurRoleCountAggregateInputType | true;
};
export interface UtilisateurRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UtilisateurRole'];
        meta: {
            name: 'UtilisateurRole';
        };
    };
    findUnique<T extends UtilisateurRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UtilisateurRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UtilisateurRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UtilisateurRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UtilisateurRoleFindManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UtilisateurRoleCreateArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleCreateArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UtilisateurRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UtilisateurRoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UtilisateurRoleDeleteArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UtilisateurRoleUpdateArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UtilisateurRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UtilisateurRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UtilisateurRoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UtilisateurRoleUpsertArgs>(args: Prisma.SelectSubset<T, UtilisateurRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__UtilisateurRoleClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UtilisateurRoleCountArgs>(args?: Prisma.Subset<T, UtilisateurRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UtilisateurRoleCountAggregateOutputType> : number>;
    aggregate<T extends UtilisateurRoleAggregateArgs>(args: Prisma.Subset<T, UtilisateurRoleAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurRoleAggregateType<T>>;
    groupBy<T extends UtilisateurRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UtilisateurRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: UtilisateurRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UtilisateurRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UtilisateurRoleFieldRefs;
}
export interface Prisma__UtilisateurRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UtilisateurRoleFieldRefs {
    readonly id: Prisma.FieldRef<"UtilisateurRole", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"UtilisateurRole", 'BigInt'>;
    readonly roleId: Prisma.FieldRef<"UtilisateurRole", 'BigInt'>;
}
export type UtilisateurRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where: Prisma.UtilisateurRoleWhereUniqueInput;
};
export type UtilisateurRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where: Prisma.UtilisateurRoleWhereUniqueInput;
};
export type UtilisateurRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurRoleWhereInput;
    orderBy?: Prisma.UtilisateurRoleOrderByWithRelationInput | Prisma.UtilisateurRoleOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurRoleScalarFieldEnum | Prisma.UtilisateurRoleScalarFieldEnum[];
};
export type UtilisateurRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurRoleWhereInput;
    orderBy?: Prisma.UtilisateurRoleOrderByWithRelationInput | Prisma.UtilisateurRoleOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurRoleScalarFieldEnum | Prisma.UtilisateurRoleScalarFieldEnum[];
};
export type UtilisateurRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurRoleWhereInput;
    orderBy?: Prisma.UtilisateurRoleOrderByWithRelationInput | Prisma.UtilisateurRoleOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurRoleScalarFieldEnum | Prisma.UtilisateurRoleScalarFieldEnum[];
};
export type UtilisateurRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurRoleCreateInput, Prisma.UtilisateurRoleUncheckedCreateInput>;
};
export type UtilisateurRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UtilisateurRoleCreateManyInput | Prisma.UtilisateurRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UtilisateurRoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    data: Prisma.UtilisateurRoleCreateManyInput | Prisma.UtilisateurRoleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UtilisateurRoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UtilisateurRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateInput, Prisma.UtilisateurRoleUncheckedUpdateInput>;
    where: Prisma.UtilisateurRoleWhereUniqueInput;
};
export type UtilisateurRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateManyMutationInput, Prisma.UtilisateurRoleUncheckedUpdateManyInput>;
    where?: Prisma.UtilisateurRoleWhereInput;
    limit?: number;
};
export type UtilisateurRoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurRoleUpdateManyMutationInput, Prisma.UtilisateurRoleUncheckedUpdateManyInput>;
    where?: Prisma.UtilisateurRoleWhereInput;
    limit?: number;
    include?: Prisma.UtilisateurRoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UtilisateurRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where: Prisma.UtilisateurRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.UtilisateurRoleCreateInput, Prisma.UtilisateurRoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UtilisateurRoleUpdateInput, Prisma.UtilisateurRoleUncheckedUpdateInput>;
};
export type UtilisateurRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
    where: Prisma.UtilisateurRoleWhereUniqueInput;
};
export type UtilisateurRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurRoleWhereInput;
    limit?: number;
};
export type UtilisateurRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurRoleSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurRoleOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurRoleInclude<ExtArgs> | null;
};
