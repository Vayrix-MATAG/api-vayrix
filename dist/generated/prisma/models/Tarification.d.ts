import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TarificationModel = runtime.Types.Result.DefaultSelection<Prisma.$TarificationPayload>;
export type AggregateTarification = {
    _count: TarificationCountAggregateOutputType | null;
    _avg: TarificationAvgAggregateOutputType | null;
    _sum: TarificationSumAggregateOutputType | null;
    _min: TarificationMinAggregateOutputType | null;
    _max: TarificationMaxAggregateOutputType | null;
};
export type TarificationAvgAggregateOutputType = {
    id: number | null;
    typeVehiculeId: number | null;
    prixDepart: runtime.Decimal | null;
    prixKm: runtime.Decimal | null;
    prixMinimum: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type TarificationSumAggregateOutputType = {
    id: bigint | null;
    typeVehiculeId: bigint | null;
    prixDepart: runtime.Decimal | null;
    prixKm: runtime.Decimal | null;
    prixMinimum: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type TarificationMinAggregateOutputType = {
    id: bigint | null;
    typeVehiculeId: bigint | null;
    prixDepart: runtime.Decimal | null;
    prixKm: runtime.Decimal | null;
    prixMinimum: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type TarificationMaxAggregateOutputType = {
    id: bigint | null;
    typeVehiculeId: bigint | null;
    prixDepart: runtime.Decimal | null;
    prixKm: runtime.Decimal | null;
    prixMinimum: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type TarificationCountAggregateOutputType = {
    id: number;
    typeVehiculeId: number;
    prixDepart: number;
    prixKm: number;
    prixMinimum: number;
    commission: number;
    _all: number;
};
export type TarificationAvgAggregateInputType = {
    id?: true;
    typeVehiculeId?: true;
    prixDepart?: true;
    prixKm?: true;
    prixMinimum?: true;
    commission?: true;
};
export type TarificationSumAggregateInputType = {
    id?: true;
    typeVehiculeId?: true;
    prixDepart?: true;
    prixKm?: true;
    prixMinimum?: true;
    commission?: true;
};
export type TarificationMinAggregateInputType = {
    id?: true;
    typeVehiculeId?: true;
    prixDepart?: true;
    prixKm?: true;
    prixMinimum?: true;
    commission?: true;
};
export type TarificationMaxAggregateInputType = {
    id?: true;
    typeVehiculeId?: true;
    prixDepart?: true;
    prixKm?: true;
    prixMinimum?: true;
    commission?: true;
};
export type TarificationCountAggregateInputType = {
    id?: true;
    typeVehiculeId?: true;
    prixDepart?: true;
    prixKm?: true;
    prixMinimum?: true;
    commission?: true;
    _all?: true;
};
export type TarificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithRelationInput | Prisma.TarificationOrderByWithRelationInput[];
    cursor?: Prisma.TarificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TarificationCountAggregateInputType;
    _avg?: TarificationAvgAggregateInputType;
    _sum?: TarificationSumAggregateInputType;
    _min?: TarificationMinAggregateInputType;
    _max?: TarificationMaxAggregateInputType;
};
export type GetTarificationAggregateType<T extends TarificationAggregateArgs> = {
    [P in keyof T & keyof AggregateTarification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTarification[P]> : Prisma.GetScalarType<T[P], AggregateTarification[P]>;
};
export type TarificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithAggregationInput | Prisma.TarificationOrderByWithAggregationInput[];
    by: Prisma.TarificationScalarFieldEnum[] | Prisma.TarificationScalarFieldEnum;
    having?: Prisma.TarificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TarificationCountAggregateInputType | true;
    _avg?: TarificationAvgAggregateInputType;
    _sum?: TarificationSumAggregateInputType;
    _min?: TarificationMinAggregateInputType;
    _max?: TarificationMaxAggregateInputType;
};
export type TarificationGroupByOutputType = {
    id: bigint;
    typeVehiculeId: bigint;
    prixDepart: runtime.Decimal;
    prixKm: runtime.Decimal;
    prixMinimum: runtime.Decimal;
    commission: runtime.Decimal;
    _count: TarificationCountAggregateOutputType | null;
    _avg: TarificationAvgAggregateOutputType | null;
    _sum: TarificationSumAggregateOutputType | null;
    _min: TarificationMinAggregateOutputType | null;
    _max: TarificationMaxAggregateOutputType | null;
};
export type GetTarificationGroupByPayload<T extends TarificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TarificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TarificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TarificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TarificationGroupByOutputType[P]>;
}>>;
export type TarificationWhereInput = {
    AND?: Prisma.TarificationWhereInput | Prisma.TarificationWhereInput[];
    OR?: Prisma.TarificationWhereInput[];
    NOT?: Prisma.TarificationWhereInput | Prisma.TarificationWhereInput[];
    id?: Prisma.BigIntFilter<"Tarification"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntFilter<"Tarification"> | bigint | number;
    prixDepart?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    typeVehicule?: Prisma.XOR<Prisma.TypeVehiculeScalarRelationFilter, Prisma.TypeVehiculeWhereInput>;
};
export type TarificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    typeVehicule?: Prisma.TypeVehiculeOrderByWithRelationInput;
};
export type TarificationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.TarificationWhereInput | Prisma.TarificationWhereInput[];
    OR?: Prisma.TarificationWhereInput[];
    NOT?: Prisma.TarificationWhereInput | Prisma.TarificationWhereInput[];
    typeVehiculeId?: Prisma.BigIntFilter<"Tarification"> | bigint | number;
    prixDepart?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    typeVehicule?: Prisma.XOR<Prisma.TypeVehiculeScalarRelationFilter, Prisma.TypeVehiculeWhereInput>;
}, "id">;
export type TarificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    _count?: Prisma.TarificationCountOrderByAggregateInput;
    _avg?: Prisma.TarificationAvgOrderByAggregateInput;
    _max?: Prisma.TarificationMaxOrderByAggregateInput;
    _min?: Prisma.TarificationMinOrderByAggregateInput;
    _sum?: Prisma.TarificationSumOrderByAggregateInput;
};
export type TarificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TarificationScalarWhereWithAggregatesInput | Prisma.TarificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TarificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TarificationScalarWhereWithAggregatesInput | Prisma.TarificationScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Tarification"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntWithAggregatesFilter<"Tarification"> | bigint | number;
    prixDepart?: Prisma.DecimalWithAggregatesFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalWithAggregatesFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalWithAggregatesFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalWithAggregatesFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationCreateInput = {
    id?: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    typeVehicule: Prisma.TypeVehiculeCreateNestedOneWithoutTarificationsInput;
};
export type TarificationUncheckedCreateInput = {
    id?: bigint | number;
    typeVehiculeId: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    typeVehicule?: Prisma.TypeVehiculeUpdateOneRequiredWithoutTarificationsNestedInput;
};
export type TarificationUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationCreateManyInput = {
    id?: bigint | number;
    typeVehiculeId: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationListRelationFilter = {
    every?: Prisma.TarificationWhereInput;
    some?: Prisma.TarificationWhereInput;
    none?: Prisma.TarificationWhereInput;
};
export type TarificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TarificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type TarificationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type TarificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type TarificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type TarificationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    prixDepart?: Prisma.SortOrder;
    prixKm?: Prisma.SortOrder;
    prixMinimum?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type TarificationCreateNestedManyWithoutTypeVehiculeInput = {
    create?: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput> | Prisma.TarificationCreateWithoutTypeVehiculeInput[] | Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput | Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput[];
    createMany?: Prisma.TarificationCreateManyTypeVehiculeInputEnvelope;
    connect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
};
export type TarificationUncheckedCreateNestedManyWithoutTypeVehiculeInput = {
    create?: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput> | Prisma.TarificationCreateWithoutTypeVehiculeInput[] | Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput | Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput[];
    createMany?: Prisma.TarificationCreateManyTypeVehiculeInputEnvelope;
    connect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
};
export type TarificationUpdateManyWithoutTypeVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput> | Prisma.TarificationCreateWithoutTypeVehiculeInput[] | Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput | Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput[];
    upsert?: Prisma.TarificationUpsertWithWhereUniqueWithoutTypeVehiculeInput | Prisma.TarificationUpsertWithWhereUniqueWithoutTypeVehiculeInput[];
    createMany?: Prisma.TarificationCreateManyTypeVehiculeInputEnvelope;
    set?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    disconnect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    delete?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    connect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    update?: Prisma.TarificationUpdateWithWhereUniqueWithoutTypeVehiculeInput | Prisma.TarificationUpdateWithWhereUniqueWithoutTypeVehiculeInput[];
    updateMany?: Prisma.TarificationUpdateManyWithWhereWithoutTypeVehiculeInput | Prisma.TarificationUpdateManyWithWhereWithoutTypeVehiculeInput[];
    deleteMany?: Prisma.TarificationScalarWhereInput | Prisma.TarificationScalarWhereInput[];
};
export type TarificationUncheckedUpdateManyWithoutTypeVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput> | Prisma.TarificationCreateWithoutTypeVehiculeInput[] | Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput | Prisma.TarificationCreateOrConnectWithoutTypeVehiculeInput[];
    upsert?: Prisma.TarificationUpsertWithWhereUniqueWithoutTypeVehiculeInput | Prisma.TarificationUpsertWithWhereUniqueWithoutTypeVehiculeInput[];
    createMany?: Prisma.TarificationCreateManyTypeVehiculeInputEnvelope;
    set?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    disconnect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    delete?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    connect?: Prisma.TarificationWhereUniqueInput | Prisma.TarificationWhereUniqueInput[];
    update?: Prisma.TarificationUpdateWithWhereUniqueWithoutTypeVehiculeInput | Prisma.TarificationUpdateWithWhereUniqueWithoutTypeVehiculeInput[];
    updateMany?: Prisma.TarificationUpdateManyWithWhereWithoutTypeVehiculeInput | Prisma.TarificationUpdateManyWithWhereWithoutTypeVehiculeInput[];
    deleteMany?: Prisma.TarificationScalarWhereInput | Prisma.TarificationScalarWhereInput[];
};
export type TarificationCreateWithoutTypeVehiculeInput = {
    id?: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUncheckedCreateWithoutTypeVehiculeInput = {
    id?: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationCreateOrConnectWithoutTypeVehiculeInput = {
    where: Prisma.TarificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput>;
};
export type TarificationCreateManyTypeVehiculeInputEnvelope = {
    data: Prisma.TarificationCreateManyTypeVehiculeInput | Prisma.TarificationCreateManyTypeVehiculeInput[];
    skipDuplicates?: boolean;
};
export type TarificationUpsertWithWhereUniqueWithoutTypeVehiculeInput = {
    where: Prisma.TarificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TarificationUpdateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedUpdateWithoutTypeVehiculeInput>;
    create: Prisma.XOR<Prisma.TarificationCreateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedCreateWithoutTypeVehiculeInput>;
};
export type TarificationUpdateWithWhereUniqueWithoutTypeVehiculeInput = {
    where: Prisma.TarificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TarificationUpdateWithoutTypeVehiculeInput, Prisma.TarificationUncheckedUpdateWithoutTypeVehiculeInput>;
};
export type TarificationUpdateManyWithWhereWithoutTypeVehiculeInput = {
    where: Prisma.TarificationScalarWhereInput;
    data: Prisma.XOR<Prisma.TarificationUpdateManyMutationInput, Prisma.TarificationUncheckedUpdateManyWithoutTypeVehiculeInput>;
};
export type TarificationScalarWhereInput = {
    AND?: Prisma.TarificationScalarWhereInput | Prisma.TarificationScalarWhereInput[];
    OR?: Prisma.TarificationScalarWhereInput[];
    NOT?: Prisma.TarificationScalarWhereInput | Prisma.TarificationScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Tarification"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntFilter<"Tarification"> | bigint | number;
    prixDepart?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"Tarification"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationCreateManyTypeVehiculeInput = {
    id?: bigint | number;
    prixDepart: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUpdateWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUncheckedUpdateWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationUncheckedUpdateManyWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    prixDepart?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixMinimum?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TarificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    typeVehiculeId?: boolean;
    prixDepart?: boolean;
    prixKm?: boolean;
    prixMinimum?: boolean;
    commission?: boolean;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarification"]>;
export type TarificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    typeVehiculeId?: boolean;
    prixDepart?: boolean;
    prixKm?: boolean;
    prixMinimum?: boolean;
    commission?: boolean;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarification"]>;
export type TarificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    typeVehiculeId?: boolean;
    prixDepart?: boolean;
    prixKm?: boolean;
    prixMinimum?: boolean;
    commission?: boolean;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarification"]>;
export type TarificationSelectScalar = {
    id?: boolean;
    typeVehiculeId?: boolean;
    prixDepart?: boolean;
    prixKm?: boolean;
    prixMinimum?: boolean;
    commission?: boolean;
};
export type TarificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "typeVehiculeId" | "prixDepart" | "prixKm" | "prixMinimum" | "commission", ExtArgs["result"]["tarification"]>;
export type TarificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
};
export type TarificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
};
export type TarificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
};
export type $TarificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tarification";
    objects: {
        typeVehicule: Prisma.$TypeVehiculePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        typeVehiculeId: bigint;
        prixDepart: runtime.Decimal;
        prixKm: runtime.Decimal;
        prixMinimum: runtime.Decimal;
        commission: runtime.Decimal;
    }, ExtArgs["result"]["tarification"]>;
    composites: {};
};
export type TarificationGetPayload<S extends boolean | null | undefined | TarificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TarificationPayload, S>;
export type TarificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TarificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TarificationCountAggregateInputType | true;
};
export interface TarificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tarification'];
        meta: {
            name: 'Tarification';
        };
    };
    findUnique<T extends TarificationFindUniqueArgs>(args: Prisma.SelectSubset<T, TarificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TarificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TarificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TarificationFindFirstArgs>(args?: Prisma.SelectSubset<T, TarificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TarificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TarificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TarificationFindManyArgs>(args?: Prisma.SelectSubset<T, TarificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TarificationCreateArgs>(args: Prisma.SelectSubset<T, TarificationCreateArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TarificationCreateManyArgs>(args?: Prisma.SelectSubset<T, TarificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TarificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TarificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TarificationDeleteArgs>(args: Prisma.SelectSubset<T, TarificationDeleteArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TarificationUpdateArgs>(args: Prisma.SelectSubset<T, TarificationUpdateArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TarificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TarificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TarificationUpdateManyArgs>(args: Prisma.SelectSubset<T, TarificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TarificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TarificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TarificationUpsertArgs>(args: Prisma.SelectSubset<T, TarificationUpsertArgs<ExtArgs>>): Prisma.Prisma__TarificationClient<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TarificationCountArgs>(args?: Prisma.Subset<T, TarificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TarificationCountAggregateOutputType> : number>;
    aggregate<T extends TarificationAggregateArgs>(args: Prisma.Subset<T, TarificationAggregateArgs>): Prisma.PrismaPromise<GetTarificationAggregateType<T>>;
    groupBy<T extends TarificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TarificationGroupByArgs['orderBy'];
    } : {
        orderBy?: TarificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TarificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TarificationFieldRefs;
}
export interface Prisma__TarificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    typeVehicule<T extends Prisma.TypeVehiculeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeVehiculeDefaultArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TarificationFieldRefs {
    readonly id: Prisma.FieldRef<"Tarification", 'BigInt'>;
    readonly typeVehiculeId: Prisma.FieldRef<"Tarification", 'BigInt'>;
    readonly prixDepart: Prisma.FieldRef<"Tarification", 'Decimal'>;
    readonly prixKm: Prisma.FieldRef<"Tarification", 'Decimal'>;
    readonly prixMinimum: Prisma.FieldRef<"Tarification", 'Decimal'>;
    readonly commission: Prisma.FieldRef<"Tarification", 'Decimal'>;
}
export type TarificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where: Prisma.TarificationWhereUniqueInput;
};
export type TarificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where: Prisma.TarificationWhereUniqueInput;
};
export type TarificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithRelationInput | Prisma.TarificationOrderByWithRelationInput[];
    cursor?: Prisma.TarificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarificationScalarFieldEnum | Prisma.TarificationScalarFieldEnum[];
};
export type TarificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithRelationInput | Prisma.TarificationOrderByWithRelationInput[];
    cursor?: Prisma.TarificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarificationScalarFieldEnum | Prisma.TarificationScalarFieldEnum[];
};
export type TarificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithRelationInput | Prisma.TarificationOrderByWithRelationInput[];
    cursor?: Prisma.TarificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarificationScalarFieldEnum | Prisma.TarificationScalarFieldEnum[];
};
export type TarificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarificationCreateInput, Prisma.TarificationUncheckedCreateInput>;
};
export type TarificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TarificationCreateManyInput | Prisma.TarificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TarificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    data: Prisma.TarificationCreateManyInput | Prisma.TarificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TarificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TarificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarificationUpdateInput, Prisma.TarificationUncheckedUpdateInput>;
    where: Prisma.TarificationWhereUniqueInput;
};
export type TarificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TarificationUpdateManyMutationInput, Prisma.TarificationUncheckedUpdateManyInput>;
    where?: Prisma.TarificationWhereInput;
    limit?: number;
};
export type TarificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarificationUpdateManyMutationInput, Prisma.TarificationUncheckedUpdateManyInput>;
    where?: Prisma.TarificationWhereInput;
    limit?: number;
    include?: Prisma.TarificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TarificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where: Prisma.TarificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarificationCreateInput, Prisma.TarificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TarificationUpdateInput, Prisma.TarificationUncheckedUpdateInput>;
};
export type TarificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where: Prisma.TarificationWhereUniqueInput;
};
export type TarificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarificationWhereInput;
    limit?: number;
};
export type TarificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
};
