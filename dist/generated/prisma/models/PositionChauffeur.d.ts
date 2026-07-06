import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PositionChauffeurModel = runtime.Types.Result.DefaultSelection<Prisma.$PositionChauffeurPayload>;
export type AggregatePositionChauffeur = {
    _count: PositionChauffeurCountAggregateOutputType | null;
    _avg: PositionChauffeurAvgAggregateOutputType | null;
    _sum: PositionChauffeurSumAggregateOutputType | null;
    _min: PositionChauffeurMinAggregateOutputType | null;
    _max: PositionChauffeurMaxAggregateOutputType | null;
};
export type PositionChauffeurAvgAggregateOutputType = {
    id: number | null;
    chauffeurId: number | null;
    latitude: number | null;
    longitude: number | null;
    vitesse: runtime.Decimal | null;
};
export type PositionChauffeurSumAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    latitude: number | null;
    longitude: number | null;
    vitesse: runtime.Decimal | null;
};
export type PositionChauffeurMinAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    latitude: number | null;
    longitude: number | null;
    vitesse: runtime.Decimal | null;
    datePosition: Date | null;
};
export type PositionChauffeurMaxAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    latitude: number | null;
    longitude: number | null;
    vitesse: runtime.Decimal | null;
    datePosition: Date | null;
};
export type PositionChauffeurCountAggregateOutputType = {
    id: number;
    chauffeurId: number;
    latitude: number;
    longitude: number;
    vitesse: number;
    datePosition: number;
    _all: number;
};
export type PositionChauffeurAvgAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    latitude?: true;
    longitude?: true;
    vitesse?: true;
};
export type PositionChauffeurSumAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    latitude?: true;
    longitude?: true;
    vitesse?: true;
};
export type PositionChauffeurMinAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    latitude?: true;
    longitude?: true;
    vitesse?: true;
    datePosition?: true;
};
export type PositionChauffeurMaxAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    latitude?: true;
    longitude?: true;
    vitesse?: true;
    datePosition?: true;
};
export type PositionChauffeurCountAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    latitude?: true;
    longitude?: true;
    vitesse?: true;
    datePosition?: true;
    _all?: true;
};
export type PositionChauffeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionChauffeurWhereInput;
    orderBy?: Prisma.PositionChauffeurOrderByWithRelationInput | Prisma.PositionChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.PositionChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PositionChauffeurCountAggregateInputType;
    _avg?: PositionChauffeurAvgAggregateInputType;
    _sum?: PositionChauffeurSumAggregateInputType;
    _min?: PositionChauffeurMinAggregateInputType;
    _max?: PositionChauffeurMaxAggregateInputType;
};
export type GetPositionChauffeurAggregateType<T extends PositionChauffeurAggregateArgs> = {
    [P in keyof T & keyof AggregatePositionChauffeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePositionChauffeur[P]> : Prisma.GetScalarType<T[P], AggregatePositionChauffeur[P]>;
};
export type PositionChauffeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionChauffeurWhereInput;
    orderBy?: Prisma.PositionChauffeurOrderByWithAggregationInput | Prisma.PositionChauffeurOrderByWithAggregationInput[];
    by: Prisma.PositionChauffeurScalarFieldEnum[] | Prisma.PositionChauffeurScalarFieldEnum;
    having?: Prisma.PositionChauffeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PositionChauffeurCountAggregateInputType | true;
    _avg?: PositionChauffeurAvgAggregateInputType;
    _sum?: PositionChauffeurSumAggregateInputType;
    _min?: PositionChauffeurMinAggregateInputType;
    _max?: PositionChauffeurMaxAggregateInputType;
};
export type PositionChauffeurGroupByOutputType = {
    id: bigint;
    chauffeurId: bigint;
    latitude: number;
    longitude: number;
    vitesse: runtime.Decimal | null;
    datePosition: Date;
    _count: PositionChauffeurCountAggregateOutputType | null;
    _avg: PositionChauffeurAvgAggregateOutputType | null;
    _sum: PositionChauffeurSumAggregateOutputType | null;
    _min: PositionChauffeurMinAggregateOutputType | null;
    _max: PositionChauffeurMaxAggregateOutputType | null;
};
export type GetPositionChauffeurGroupByPayload<T extends PositionChauffeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PositionChauffeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PositionChauffeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PositionChauffeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PositionChauffeurGroupByOutputType[P]>;
}>>;
export type PositionChauffeurWhereInput = {
    AND?: Prisma.PositionChauffeurWhereInput | Prisma.PositionChauffeurWhereInput[];
    OR?: Prisma.PositionChauffeurWhereInput[];
    NOT?: Prisma.PositionChauffeurWhereInput | Prisma.PositionChauffeurWhereInput[];
    id?: Prisma.BigIntFilter<"PositionChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"PositionChauffeur"> | bigint | number;
    latitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    longitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    vitesse?: Prisma.DecimalNullableFilter<"PositionChauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFilter<"PositionChauffeur"> | Date | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
};
export type PositionChauffeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrderInput | Prisma.SortOrder;
    datePosition?: Prisma.SortOrder;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
};
export type PositionChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.PositionChauffeurWhereInput | Prisma.PositionChauffeurWhereInput[];
    OR?: Prisma.PositionChauffeurWhereInput[];
    NOT?: Prisma.PositionChauffeurWhereInput | Prisma.PositionChauffeurWhereInput[];
    chauffeurId?: Prisma.BigIntFilter<"PositionChauffeur"> | bigint | number;
    latitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    longitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    vitesse?: Prisma.DecimalNullableFilter<"PositionChauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFilter<"PositionChauffeur"> | Date | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
}, "id">;
export type PositionChauffeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrderInput | Prisma.SortOrder;
    datePosition?: Prisma.SortOrder;
    _count?: Prisma.PositionChauffeurCountOrderByAggregateInput;
    _avg?: Prisma.PositionChauffeurAvgOrderByAggregateInput;
    _max?: Prisma.PositionChauffeurMaxOrderByAggregateInput;
    _min?: Prisma.PositionChauffeurMinOrderByAggregateInput;
    _sum?: Prisma.PositionChauffeurSumOrderByAggregateInput;
};
export type PositionChauffeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.PositionChauffeurScalarWhereWithAggregatesInput | Prisma.PositionChauffeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.PositionChauffeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PositionChauffeurScalarWhereWithAggregatesInput | Prisma.PositionChauffeurScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"PositionChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"PositionChauffeur"> | bigint | number;
    latitude?: Prisma.FloatWithAggregatesFilter<"PositionChauffeur"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"PositionChauffeur"> | number;
    vitesse?: Prisma.DecimalNullableWithAggregatesFilter<"PositionChauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeWithAggregatesFilter<"PositionChauffeur"> | Date | string;
};
export type PositionChauffeurCreateInput = {
    id?: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutPositionChauffeursInput;
};
export type PositionChauffeurUncheckedCreateInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
};
export type PositionChauffeurUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutPositionChauffeursNestedInput;
};
export type PositionChauffeurUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurCreateManyInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
};
export type PositionChauffeurUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurListRelationFilter = {
    every?: Prisma.PositionChauffeurWhereInput;
    some?: Prisma.PositionChauffeurWhereInput;
    none?: Prisma.PositionChauffeurWhereInput;
};
export type PositionChauffeurOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PositionChauffeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrder;
    datePosition?: Prisma.SortOrder;
};
export type PositionChauffeurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrder;
};
export type PositionChauffeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrder;
    datePosition?: Prisma.SortOrder;
};
export type PositionChauffeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrder;
    datePosition?: Prisma.SortOrder;
};
export type PositionChauffeurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    vitesse?: Prisma.SortOrder;
};
export type PositionChauffeurCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.PositionChauffeurCreateWithoutChauffeurInput[] | Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.PositionChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
};
export type PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.PositionChauffeurCreateWithoutChauffeurInput[] | Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.PositionChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
};
export type PositionChauffeurUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.PositionChauffeurCreateWithoutChauffeurInput[] | Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.PositionChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.PositionChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.PositionChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    disconnect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    delete?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    connect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    update?: Prisma.PositionChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.PositionChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.PositionChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.PositionChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.PositionChauffeurScalarWhereInput | Prisma.PositionChauffeurScalarWhereInput[];
};
export type PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.PositionChauffeurCreateWithoutChauffeurInput[] | Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.PositionChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.PositionChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.PositionChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.PositionChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    disconnect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    delete?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    connect?: Prisma.PositionChauffeurWhereUniqueInput | Prisma.PositionChauffeurWhereUniqueInput[];
    update?: Prisma.PositionChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.PositionChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.PositionChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.PositionChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.PositionChauffeurScalarWhereInput | Prisma.PositionChauffeurScalarWhereInput[];
};
export type PositionChauffeurCreateWithoutChauffeurInput = {
    id?: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
};
export type PositionChauffeurUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
};
export type PositionChauffeurCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.PositionChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type PositionChauffeurCreateManyChauffeurInputEnvelope = {
    data: Prisma.PositionChauffeurCreateManyChauffeurInput | Prisma.PositionChauffeurCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type PositionChauffeurUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.PositionChauffeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.PositionChauffeurUpdateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.PositionChauffeurCreateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type PositionChauffeurUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.PositionChauffeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.PositionChauffeurUpdateWithoutChauffeurInput, Prisma.PositionChauffeurUncheckedUpdateWithoutChauffeurInput>;
};
export type PositionChauffeurUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.PositionChauffeurScalarWhereInput;
    data: Prisma.XOR<Prisma.PositionChauffeurUpdateManyMutationInput, Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurInput>;
};
export type PositionChauffeurScalarWhereInput = {
    AND?: Prisma.PositionChauffeurScalarWhereInput | Prisma.PositionChauffeurScalarWhereInput[];
    OR?: Prisma.PositionChauffeurScalarWhereInput[];
    NOT?: Prisma.PositionChauffeurScalarWhereInput | Prisma.PositionChauffeurScalarWhereInput[];
    id?: Prisma.BigIntFilter<"PositionChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"PositionChauffeur"> | bigint | number;
    latitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    longitude?: Prisma.FloatFilter<"PositionChauffeur"> | number;
    vitesse?: Prisma.DecimalNullableFilter<"PositionChauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFilter<"PositionChauffeur"> | Date | string;
};
export type PositionChauffeurCreateManyChauffeurInput = {
    id?: bigint | number;
    latitude: number;
    longitude: number;
    vitesse?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Date | string;
};
export type PositionChauffeurUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    vitesse?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    datePosition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionChauffeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    vitesse?: boolean;
    datePosition?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["positionChauffeur"]>;
export type PositionChauffeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    vitesse?: boolean;
    datePosition?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["positionChauffeur"]>;
export type PositionChauffeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    vitesse?: boolean;
    datePosition?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["positionChauffeur"]>;
export type PositionChauffeurSelectScalar = {
    id?: boolean;
    chauffeurId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    vitesse?: boolean;
    datePosition?: boolean;
};
export type PositionChauffeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chauffeurId" | "latitude" | "longitude" | "vitesse" | "datePosition", ExtArgs["result"]["positionChauffeur"]>;
export type PositionChauffeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type PositionChauffeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type PositionChauffeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type $PositionChauffeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PositionChauffeur";
    objects: {
        chauffeur: Prisma.$ChauffeurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        chauffeurId: bigint;
        latitude: number;
        longitude: number;
        vitesse: runtime.Decimal | null;
        datePosition: Date;
    }, ExtArgs["result"]["positionChauffeur"]>;
    composites: {};
};
export type PositionChauffeurGetPayload<S extends boolean | null | undefined | PositionChauffeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload, S>;
export type PositionChauffeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PositionChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PositionChauffeurCountAggregateInputType | true;
};
export interface PositionChauffeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PositionChauffeur'];
        meta: {
            name: 'PositionChauffeur';
        };
    };
    findUnique<T extends PositionChauffeurFindUniqueArgs>(args: Prisma.SelectSubset<T, PositionChauffeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PositionChauffeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PositionChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PositionChauffeurFindFirstArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PositionChauffeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PositionChauffeurFindManyArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PositionChauffeurCreateArgs>(args: Prisma.SelectSubset<T, PositionChauffeurCreateArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PositionChauffeurCreateManyArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PositionChauffeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PositionChauffeurDeleteArgs>(args: Prisma.SelectSubset<T, PositionChauffeurDeleteArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PositionChauffeurUpdateArgs>(args: Prisma.SelectSubset<T, PositionChauffeurUpdateArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PositionChauffeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, PositionChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PositionChauffeurUpdateManyArgs>(args: Prisma.SelectSubset<T, PositionChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PositionChauffeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PositionChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PositionChauffeurUpsertArgs>(args: Prisma.SelectSubset<T, PositionChauffeurUpsertArgs<ExtArgs>>): Prisma.Prisma__PositionChauffeurClient<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PositionChauffeurCountArgs>(args?: Prisma.Subset<T, PositionChauffeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PositionChauffeurCountAggregateOutputType> : number>;
    aggregate<T extends PositionChauffeurAggregateArgs>(args: Prisma.Subset<T, PositionChauffeurAggregateArgs>): Prisma.PrismaPromise<GetPositionChauffeurAggregateType<T>>;
    groupBy<T extends PositionChauffeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PositionChauffeurGroupByArgs['orderBy'];
    } : {
        orderBy?: PositionChauffeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PositionChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PositionChauffeurFieldRefs;
}
export interface Prisma__PositionChauffeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PositionChauffeurFieldRefs {
    readonly id: Prisma.FieldRef<"PositionChauffeur", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"PositionChauffeur", 'BigInt'>;
    readonly latitude: Prisma.FieldRef<"PositionChauffeur", 'Float'>;
    readonly longitude: Prisma.FieldRef<"PositionChauffeur", 'Float'>;
    readonly vitesse: Prisma.FieldRef<"PositionChauffeur", 'Decimal'>;
    readonly datePosition: Prisma.FieldRef<"PositionChauffeur", 'DateTime'>;
}
export type PositionChauffeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where: Prisma.PositionChauffeurWhereUniqueInput;
};
export type PositionChauffeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where: Prisma.PositionChauffeurWhereUniqueInput;
};
export type PositionChauffeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where?: Prisma.PositionChauffeurWhereInput;
    orderBy?: Prisma.PositionChauffeurOrderByWithRelationInput | Prisma.PositionChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.PositionChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionChauffeurScalarFieldEnum | Prisma.PositionChauffeurScalarFieldEnum[];
};
export type PositionChauffeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where?: Prisma.PositionChauffeurWhereInput;
    orderBy?: Prisma.PositionChauffeurOrderByWithRelationInput | Prisma.PositionChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.PositionChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionChauffeurScalarFieldEnum | Prisma.PositionChauffeurScalarFieldEnum[];
};
export type PositionChauffeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where?: Prisma.PositionChauffeurWhereInput;
    orderBy?: Prisma.PositionChauffeurOrderByWithRelationInput | Prisma.PositionChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.PositionChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionChauffeurScalarFieldEnum | Prisma.PositionChauffeurScalarFieldEnum[];
};
export type PositionChauffeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionChauffeurCreateInput, Prisma.PositionChauffeurUncheckedCreateInput>;
};
export type PositionChauffeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PositionChauffeurCreateManyInput | Prisma.PositionChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PositionChauffeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    data: Prisma.PositionChauffeurCreateManyInput | Prisma.PositionChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PositionChauffeurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PositionChauffeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionChauffeurUpdateInput, Prisma.PositionChauffeurUncheckedUpdateInput>;
    where: Prisma.PositionChauffeurWhereUniqueInput;
};
export type PositionChauffeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PositionChauffeurUpdateManyMutationInput, Prisma.PositionChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.PositionChauffeurWhereInput;
    limit?: number;
};
export type PositionChauffeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionChauffeurUpdateManyMutationInput, Prisma.PositionChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.PositionChauffeurWhereInput;
    limit?: number;
    include?: Prisma.PositionChauffeurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PositionChauffeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where: Prisma.PositionChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionChauffeurCreateInput, Prisma.PositionChauffeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PositionChauffeurUpdateInput, Prisma.PositionChauffeurUncheckedUpdateInput>;
};
export type PositionChauffeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
    where: Prisma.PositionChauffeurWhereUniqueInput;
};
export type PositionChauffeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionChauffeurWhereInput;
    limit?: number;
};
export type PositionChauffeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.PositionChauffeurOmit<ExtArgs> | null;
    include?: Prisma.PositionChauffeurInclude<ExtArgs> | null;
};
