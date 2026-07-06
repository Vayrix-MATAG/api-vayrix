import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationChauffeurModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationChauffeurPayload>;
export type AggregateEvaluationChauffeur = {
    _count: EvaluationChauffeurCountAggregateOutputType | null;
    _avg: EvaluationChauffeurAvgAggregateOutputType | null;
    _sum: EvaluationChauffeurSumAggregateOutputType | null;
    _min: EvaluationChauffeurMinAggregateOutputType | null;
    _max: EvaluationChauffeurMaxAggregateOutputType | null;
};
export type EvaluationChauffeurAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    clientId: number | null;
    chauffeurId: number | null;
    note: number | null;
};
export type EvaluationChauffeurSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    note: number | null;
};
export type EvaluationChauffeurMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    note: number | null;
    commentaire: string | null;
    dateCreation: Date | null;
};
export type EvaluationChauffeurMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    note: number | null;
    commentaire: string | null;
    dateCreation: Date | null;
};
export type EvaluationChauffeurCountAggregateOutputType = {
    id: number;
    courseId: number;
    clientId: number;
    chauffeurId: number;
    note: number;
    commentaire: number;
    dateCreation: number;
    _all: number;
};
export type EvaluationChauffeurAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    note?: true;
};
export type EvaluationChauffeurSumAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    note?: true;
};
export type EvaluationChauffeurMinAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
};
export type EvaluationChauffeurMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
};
export type EvaluationChauffeurCountAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
    _all?: true;
};
export type EvaluationChauffeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationChauffeurWhereInput;
    orderBy?: Prisma.EvaluationChauffeurOrderByWithRelationInput | Prisma.EvaluationChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationChauffeurCountAggregateInputType;
    _avg?: EvaluationChauffeurAvgAggregateInputType;
    _sum?: EvaluationChauffeurSumAggregateInputType;
    _min?: EvaluationChauffeurMinAggregateInputType;
    _max?: EvaluationChauffeurMaxAggregateInputType;
};
export type GetEvaluationChauffeurAggregateType<T extends EvaluationChauffeurAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationChauffeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationChauffeur[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationChauffeur[P]>;
};
export type EvaluationChauffeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationChauffeurWhereInput;
    orderBy?: Prisma.EvaluationChauffeurOrderByWithAggregationInput | Prisma.EvaluationChauffeurOrderByWithAggregationInput[];
    by: Prisma.EvaluationChauffeurScalarFieldEnum[] | Prisma.EvaluationChauffeurScalarFieldEnum;
    having?: Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationChauffeurCountAggregateInputType | true;
    _avg?: EvaluationChauffeurAvgAggregateInputType;
    _sum?: EvaluationChauffeurSumAggregateInputType;
    _min?: EvaluationChauffeurMinAggregateInputType;
    _max?: EvaluationChauffeurMaxAggregateInputType;
};
export type EvaluationChauffeurGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    clientId: bigint;
    chauffeurId: bigint;
    note: number;
    commentaire: string | null;
    dateCreation: Date;
    _count: EvaluationChauffeurCountAggregateOutputType | null;
    _avg: EvaluationChauffeurAvgAggregateOutputType | null;
    _sum: EvaluationChauffeurSumAggregateOutputType | null;
    _min: EvaluationChauffeurMinAggregateOutputType | null;
    _max: EvaluationChauffeurMaxAggregateOutputType | null;
};
export type GetEvaluationChauffeurGroupByPayload<T extends EvaluationChauffeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationChauffeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationChauffeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationChauffeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationChauffeurGroupByOutputType[P]>;
}>>;
export type EvaluationChauffeurWhereInput = {
    AND?: Prisma.EvaluationChauffeurWhereInput | Prisma.EvaluationChauffeurWhereInput[];
    OR?: Prisma.EvaluationChauffeurWhereInput[];
    NOT?: Prisma.EvaluationChauffeurWhereInput | Prisma.EvaluationChauffeurWhereInput[];
    id?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationChauffeur"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationChauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationChauffeur"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
};
export type EvaluationChauffeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    client?: Prisma.ClientOrderByWithRelationInput;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
};
export type EvaluationChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.EvaluationChauffeurWhereInput | Prisma.EvaluationChauffeurWhereInput[];
    OR?: Prisma.EvaluationChauffeurWhereInput[];
    NOT?: Prisma.EvaluationChauffeurWhereInput | Prisma.EvaluationChauffeurWhereInput[];
    courseId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationChauffeur"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationChauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationChauffeur"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
}, "id">;
export type EvaluationChauffeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    _count?: Prisma.EvaluationChauffeurCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationChauffeurAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationChauffeurMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationChauffeurMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationChauffeurSumOrderByAggregateInput;
};
export type EvaluationChauffeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput | Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput | Prisma.EvaluationChauffeurScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"EvaluationChauffeur"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"EvaluationChauffeur"> | bigint | number;
    clientId?: Prisma.BigIntWithAggregatesFilter<"EvaluationChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"EvaluationChauffeur"> | bigint | number;
    note?: Prisma.IntWithAggregatesFilter<"EvaluationChauffeur"> | number;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"EvaluationChauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"EvaluationChauffeur"> | Date | string;
};
export type EvaluationChauffeurCreateInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsChauffeurInput;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsChauffeurInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsChauffeurInput;
};
export type EvaluationChauffeurUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
};
export type EvaluationChauffeurUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurListRelationFilter = {
    every?: Prisma.EvaluationChauffeurWhereInput;
    some?: Prisma.EvaluationChauffeurWhereInput;
    none?: Prisma.EvaluationChauffeurWhereInput;
};
export type EvaluationChauffeurOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationChauffeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationChauffeurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type EvaluationChauffeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationChauffeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationChauffeurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type EvaluationChauffeurCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput> | Prisma.EvaluationChauffeurCreateWithoutClientInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyClientInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput> | Prisma.EvaluationChauffeurCreateWithoutClientInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyClientInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput> | Prisma.EvaluationChauffeurCreateWithoutClientInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutClientInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyClientInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutClientInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutClientInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput> | Prisma.EvaluationChauffeurCreateWithoutClientInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutClientInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyClientInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutClientInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutClientInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationChauffeurCreateWithoutChauffeurInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationChauffeurCreateWithoutChauffeurInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationChauffeurCreateWithoutChauffeurInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationChauffeurCreateWithoutChauffeurInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput> | Prisma.EvaluationChauffeurCreateWithoutCourseInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyCourseInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput> | Prisma.EvaluationChauffeurCreateWithoutCourseInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyCourseInputEnvelope;
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
};
export type EvaluationChauffeurUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput> | Prisma.EvaluationChauffeurCreateWithoutCourseInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutCourseInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyCourseInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutCourseInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutCourseInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput> | Prisma.EvaluationChauffeurCreateWithoutCourseInput[] | Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput | Prisma.EvaluationChauffeurCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutCourseInput | Prisma.EvaluationChauffeurUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EvaluationChauffeurCreateManyCourseInputEnvelope;
    set?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    disconnect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    delete?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    connect?: Prisma.EvaluationChauffeurWhereUniqueInput | Prisma.EvaluationChauffeurWhereUniqueInput[];
    update?: Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutCourseInput | Prisma.EvaluationChauffeurUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutCourseInput | Prisma.EvaluationChauffeurUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
};
export type EvaluationChauffeurCreateWithoutClientInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsChauffeurInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsChauffeurInput;
};
export type EvaluationChauffeurUncheckedCreateWithoutClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurCreateOrConnectWithoutClientInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput>;
};
export type EvaluationChauffeurCreateManyClientInputEnvelope = {
    data: Prisma.EvaluationChauffeurCreateManyClientInput | Prisma.EvaluationChauffeurCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type EvaluationChauffeurUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutClientInput>;
};
export type EvaluationChauffeurUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutClientInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutClientInput>;
};
export type EvaluationChauffeurUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.EvaluationChauffeurScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateManyMutationInput, Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientInput>;
};
export type EvaluationChauffeurScalarWhereInput = {
    AND?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
    OR?: Prisma.EvaluationChauffeurScalarWhereInput[];
    NOT?: Prisma.EvaluationChauffeurScalarWhereInput | Prisma.EvaluationChauffeurScalarWhereInput[];
    id?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationChauffeur"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationChauffeur"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationChauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationChauffeur"> | Date | string;
};
export type EvaluationChauffeurCreateWithoutChauffeurInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsChauffeurInput;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsChauffeurInput;
};
export type EvaluationChauffeurUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type EvaluationChauffeurCreateManyChauffeurInputEnvelope = {
    data: Prisma.EvaluationChauffeurCreateManyChauffeurInput | Prisma.EvaluationChauffeurCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type EvaluationChauffeurUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type EvaluationChauffeurUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutChauffeurInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutChauffeurInput>;
};
export type EvaluationChauffeurUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.EvaluationChauffeurScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateManyMutationInput, Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurInput>;
};
export type EvaluationChauffeurCreateWithoutCourseInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsChauffeurInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsChauffeurInput;
};
export type EvaluationChauffeurUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurCreateOrConnectWithoutCourseInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput>;
};
export type EvaluationChauffeurCreateManyCourseInputEnvelope = {
    data: Prisma.EvaluationChauffeurCreateManyCourseInput | Prisma.EvaluationChauffeurCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type EvaluationChauffeurUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedCreateWithoutCourseInput>;
};
export type EvaluationChauffeurUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateWithoutCourseInput, Prisma.EvaluationChauffeurUncheckedUpdateWithoutCourseInput>;
};
export type EvaluationChauffeurUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.EvaluationChauffeurScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateManyMutationInput, Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutCourseInput>;
};
export type EvaluationChauffeurCreateManyClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
};
export type EvaluationChauffeurUncheckedUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurCreateManyChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
};
export type EvaluationChauffeurUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurCreateManyCourseInput = {
    id?: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationChauffeurUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput;
};
export type EvaluationChauffeurUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationChauffeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationChauffeur"]>;
export type EvaluationChauffeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationChauffeur"]>;
export type EvaluationChauffeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationChauffeur"]>;
export type EvaluationChauffeurSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
};
export type EvaluationChauffeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "clientId" | "chauffeurId" | "note" | "commentaire" | "dateCreation", ExtArgs["result"]["evaluationChauffeur"]>;
export type EvaluationChauffeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type EvaluationChauffeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type EvaluationChauffeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type $EvaluationChauffeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationChauffeur";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        client: Prisma.$ClientPayload<ExtArgs>;
        chauffeur: Prisma.$ChauffeurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        clientId: bigint;
        chauffeurId: bigint;
        note: number;
        commentaire: string | null;
        dateCreation: Date;
    }, ExtArgs["result"]["evaluationChauffeur"]>;
    composites: {};
};
export type EvaluationChauffeurGetPayload<S extends boolean | null | undefined | EvaluationChauffeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload, S>;
export type EvaluationChauffeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationChauffeurCountAggregateInputType | true;
};
export interface EvaluationChauffeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationChauffeur'];
        meta: {
            name: 'EvaluationChauffeur';
        };
    };
    findUnique<T extends EvaluationChauffeurFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationChauffeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationChauffeurFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationChauffeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationChauffeurFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationChauffeurCreateArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationChauffeurCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationChauffeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationChauffeurDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationChauffeurUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationChauffeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationChauffeurUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationChauffeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationChauffeurUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationChauffeurUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationChauffeurClient<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationChauffeurCountArgs>(args?: Prisma.Subset<T, EvaluationChauffeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationChauffeurCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationChauffeurAggregateArgs>(args: Prisma.Subset<T, EvaluationChauffeurAggregateArgs>): Prisma.PrismaPromise<GetEvaluationChauffeurAggregateType<T>>;
    groupBy<T extends EvaluationChauffeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationChauffeurGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationChauffeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationChauffeurFieldRefs;
}
export interface Prisma__EvaluationChauffeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationChauffeurFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationChauffeur", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"EvaluationChauffeur", 'BigInt'>;
    readonly clientId: Prisma.FieldRef<"EvaluationChauffeur", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"EvaluationChauffeur", 'BigInt'>;
    readonly note: Prisma.FieldRef<"EvaluationChauffeur", 'Int'>;
    readonly commentaire: Prisma.FieldRef<"EvaluationChauffeur", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"EvaluationChauffeur", 'DateTime'>;
}
export type EvaluationChauffeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
};
export type EvaluationChauffeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
};
export type EvaluationChauffeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where?: Prisma.EvaluationChauffeurWhereInput;
    orderBy?: Prisma.EvaluationChauffeurOrderByWithRelationInput | Prisma.EvaluationChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationChauffeurScalarFieldEnum | Prisma.EvaluationChauffeurScalarFieldEnum[];
};
export type EvaluationChauffeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where?: Prisma.EvaluationChauffeurWhereInput;
    orderBy?: Prisma.EvaluationChauffeurOrderByWithRelationInput | Prisma.EvaluationChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationChauffeurScalarFieldEnum | Prisma.EvaluationChauffeurScalarFieldEnum[];
};
export type EvaluationChauffeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where?: Prisma.EvaluationChauffeurWhereInput;
    orderBy?: Prisma.EvaluationChauffeurOrderByWithRelationInput | Prisma.EvaluationChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationChauffeurScalarFieldEnum | Prisma.EvaluationChauffeurScalarFieldEnum[];
};
export type EvaluationChauffeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationChauffeurCreateInput, Prisma.EvaluationChauffeurUncheckedCreateInput>;
};
export type EvaluationChauffeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationChauffeurCreateManyInput | Prisma.EvaluationChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationChauffeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    data: Prisma.EvaluationChauffeurCreateManyInput | Prisma.EvaluationChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationChauffeurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationChauffeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateInput, Prisma.EvaluationChauffeurUncheckedUpdateInput>;
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
};
export type EvaluationChauffeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateManyMutationInput, Prisma.EvaluationChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationChauffeurWhereInput;
    limit?: number;
};
export type EvaluationChauffeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationChauffeurUpdateManyMutationInput, Prisma.EvaluationChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationChauffeurWhereInput;
    limit?: number;
    include?: Prisma.EvaluationChauffeurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationChauffeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationChauffeurCreateInput, Prisma.EvaluationChauffeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationChauffeurUpdateInput, Prisma.EvaluationChauffeurUncheckedUpdateInput>;
};
export type EvaluationChauffeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
    where: Prisma.EvaluationChauffeurWhereUniqueInput;
};
export type EvaluationChauffeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationChauffeurWhereInput;
    limit?: number;
};
export type EvaluationChauffeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationChauffeurOmit<ExtArgs> | null;
    include?: Prisma.EvaluationChauffeurInclude<ExtArgs> | null;
};
