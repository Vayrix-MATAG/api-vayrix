import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationClientModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationClientPayload>;
export type AggregateEvaluationClient = {
    _count: EvaluationClientCountAggregateOutputType | null;
    _avg: EvaluationClientAvgAggregateOutputType | null;
    _sum: EvaluationClientSumAggregateOutputType | null;
    _min: EvaluationClientMinAggregateOutputType | null;
    _max: EvaluationClientMaxAggregateOutputType | null;
};
export type EvaluationClientAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    chauffeurId: number | null;
    clientId: number | null;
    note: number | null;
};
export type EvaluationClientSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    chauffeurId: bigint | null;
    clientId: bigint | null;
    note: number | null;
};
export type EvaluationClientMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    chauffeurId: bigint | null;
    clientId: bigint | null;
    note: number | null;
    commentaire: string | null;
    dateCreation: Date | null;
};
export type EvaluationClientMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    chauffeurId: bigint | null;
    clientId: bigint | null;
    note: number | null;
    commentaire: string | null;
    dateCreation: Date | null;
};
export type EvaluationClientCountAggregateOutputType = {
    id: number;
    courseId: number;
    chauffeurId: number;
    clientId: number;
    note: number;
    commentaire: number;
    dateCreation: number;
    _all: number;
};
export type EvaluationClientAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    chauffeurId?: true;
    clientId?: true;
    note?: true;
};
export type EvaluationClientSumAggregateInputType = {
    id?: true;
    courseId?: true;
    chauffeurId?: true;
    clientId?: true;
    note?: true;
};
export type EvaluationClientMinAggregateInputType = {
    id?: true;
    courseId?: true;
    chauffeurId?: true;
    clientId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
};
export type EvaluationClientMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    chauffeurId?: true;
    clientId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
};
export type EvaluationClientCountAggregateInputType = {
    id?: true;
    courseId?: true;
    chauffeurId?: true;
    clientId?: true;
    note?: true;
    commentaire?: true;
    dateCreation?: true;
    _all?: true;
};
export type EvaluationClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationClientWhereInput;
    orderBy?: Prisma.EvaluationClientOrderByWithRelationInput | Prisma.EvaluationClientOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationClientCountAggregateInputType;
    _avg?: EvaluationClientAvgAggregateInputType;
    _sum?: EvaluationClientSumAggregateInputType;
    _min?: EvaluationClientMinAggregateInputType;
    _max?: EvaluationClientMaxAggregateInputType;
};
export type GetEvaluationClientAggregateType<T extends EvaluationClientAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationClient[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationClient[P]>;
};
export type EvaluationClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationClientWhereInput;
    orderBy?: Prisma.EvaluationClientOrderByWithAggregationInput | Prisma.EvaluationClientOrderByWithAggregationInput[];
    by: Prisma.EvaluationClientScalarFieldEnum[] | Prisma.EvaluationClientScalarFieldEnum;
    having?: Prisma.EvaluationClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationClientCountAggregateInputType | true;
    _avg?: EvaluationClientAvgAggregateInputType;
    _sum?: EvaluationClientSumAggregateInputType;
    _min?: EvaluationClientMinAggregateInputType;
    _max?: EvaluationClientMaxAggregateInputType;
};
export type EvaluationClientGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    chauffeurId: bigint;
    clientId: bigint;
    note: number;
    commentaire: string | null;
    dateCreation: Date;
    _count: EvaluationClientCountAggregateOutputType | null;
    _avg: EvaluationClientAvgAggregateOutputType | null;
    _sum: EvaluationClientSumAggregateOutputType | null;
    _min: EvaluationClientMinAggregateOutputType | null;
    _max: EvaluationClientMaxAggregateOutputType | null;
};
export type GetEvaluationClientGroupByPayload<T extends EvaluationClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationClientGroupByOutputType[P]>;
}>>;
export type EvaluationClientWhereInput = {
    AND?: Prisma.EvaluationClientWhereInput | Prisma.EvaluationClientWhereInput[];
    OR?: Prisma.EvaluationClientWhereInput[];
    NOT?: Prisma.EvaluationClientWhereInput | Prisma.EvaluationClientWhereInput[];
    id?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationClient"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationClient"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationClient"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type EvaluationClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type EvaluationClientWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.EvaluationClientWhereInput | Prisma.EvaluationClientWhereInput[];
    OR?: Prisma.EvaluationClientWhereInput[];
    NOT?: Prisma.EvaluationClientWhereInput | Prisma.EvaluationClientWhereInput[];
    courseId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationClient"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationClient"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationClient"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id">;
export type EvaluationClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    _count?: Prisma.EvaluationClientCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationClientAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationClientMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationClientMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationClientSumOrderByAggregateInput;
};
export type EvaluationClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationClientScalarWhereWithAggregatesInput | Prisma.EvaluationClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationClientScalarWhereWithAggregatesInput | Prisma.EvaluationClientScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"EvaluationClient"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"EvaluationClient"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"EvaluationClient"> | bigint | number;
    clientId?: Prisma.BigIntWithAggregatesFilter<"EvaluationClient"> | bigint | number;
    note?: Prisma.IntWithAggregatesFilter<"EvaluationClient"> | number;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"EvaluationClient"> | string | null;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"EvaluationClient"> | Date | string;
};
export type EvaluationClientCreateInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsClientInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsClientInput;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsClientInput;
};
export type EvaluationClientUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsClientNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsClientNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsClientNestedInput;
};
export type EvaluationClientUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientListRelationFilter = {
    every?: Prisma.EvaluationClientWhereInput;
    some?: Prisma.EvaluationClientWhereInput;
    none?: Prisma.EvaluationClientWhereInput;
};
export type EvaluationClientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationClientAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type EvaluationClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type EvaluationClientSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
};
export type EvaluationClientCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput> | Prisma.EvaluationClientCreateWithoutClientInput[] | Prisma.EvaluationClientUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutClientInput | Prisma.EvaluationClientCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.EvaluationClientCreateManyClientInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput> | Prisma.EvaluationClientCreateWithoutClientInput[] | Prisma.EvaluationClientUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutClientInput | Prisma.EvaluationClientCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.EvaluationClientCreateManyClientInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput> | Prisma.EvaluationClientCreateWithoutClientInput[] | Prisma.EvaluationClientUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutClientInput | Prisma.EvaluationClientCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutClientInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.EvaluationClientCreateManyClientInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutClientInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutClientInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput> | Prisma.EvaluationClientCreateWithoutClientInput[] | Prisma.EvaluationClientUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutClientInput | Prisma.EvaluationClientCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutClientInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.EvaluationClientCreateManyClientInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutClientInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutClientInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationClientCreateWithoutChauffeurInput[] | Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationClientCreateManyChauffeurInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationClientCreateWithoutChauffeurInput[] | Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationClientCreateManyChauffeurInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationClientCreateWithoutChauffeurInput[] | Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationClientCreateManyChauffeurInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutChauffeurInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput> | Prisma.EvaluationClientCreateWithoutChauffeurInput[] | Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput | Prisma.EvaluationClientCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.EvaluationClientCreateManyChauffeurInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutChauffeurInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput> | Prisma.EvaluationClientCreateWithoutCourseInput[] | Prisma.EvaluationClientUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutCourseInput | Prisma.EvaluationClientCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EvaluationClientCreateManyCourseInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput> | Prisma.EvaluationClientCreateWithoutCourseInput[] | Prisma.EvaluationClientUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutCourseInput | Prisma.EvaluationClientCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EvaluationClientCreateManyCourseInputEnvelope;
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
};
export type EvaluationClientUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput> | Prisma.EvaluationClientCreateWithoutCourseInput[] | Prisma.EvaluationClientUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutCourseInput | Prisma.EvaluationClientCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutCourseInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EvaluationClientCreateManyCourseInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutCourseInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutCourseInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput> | Prisma.EvaluationClientCreateWithoutCourseInput[] | Prisma.EvaluationClientUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EvaluationClientCreateOrConnectWithoutCourseInput | Prisma.EvaluationClientCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EvaluationClientUpsertWithWhereUniqueWithoutCourseInput | Prisma.EvaluationClientUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EvaluationClientCreateManyCourseInputEnvelope;
    set?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    disconnect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    delete?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    connect?: Prisma.EvaluationClientWhereUniqueInput | Prisma.EvaluationClientWhereUniqueInput[];
    update?: Prisma.EvaluationClientUpdateWithWhereUniqueWithoutCourseInput | Prisma.EvaluationClientUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EvaluationClientUpdateManyWithWhereWithoutCourseInput | Prisma.EvaluationClientUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
};
export type EvaluationClientCreateWithoutClientInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsClientInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsClientInput;
};
export type EvaluationClientUncheckedCreateWithoutClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientCreateOrConnectWithoutClientInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput>;
};
export type EvaluationClientCreateManyClientInputEnvelope = {
    data: Prisma.EvaluationClientCreateManyClientInput | Prisma.EvaluationClientCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type EvaluationClientUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutClientInput, Prisma.EvaluationClientUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutClientInput, Prisma.EvaluationClientUncheckedCreateWithoutClientInput>;
};
export type EvaluationClientUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutClientInput, Prisma.EvaluationClientUncheckedUpdateWithoutClientInput>;
};
export type EvaluationClientUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.EvaluationClientScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateManyMutationInput, Prisma.EvaluationClientUncheckedUpdateManyWithoutClientInput>;
};
export type EvaluationClientScalarWhereInput = {
    AND?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
    OR?: Prisma.EvaluationClientScalarWhereInput[];
    NOT?: Prisma.EvaluationClientScalarWhereInput | Prisma.EvaluationClientScalarWhereInput[];
    id?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"EvaluationClient"> | bigint | number;
    note?: Prisma.IntFilter<"EvaluationClient"> | number;
    commentaire?: Prisma.StringNullableFilter<"EvaluationClient"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"EvaluationClient"> | Date | string;
};
export type EvaluationClientCreateWithoutChauffeurInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutEvaluationsClientInput;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsClientInput;
};
export type EvaluationClientUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput>;
};
export type EvaluationClientCreateManyChauffeurInputEnvelope = {
    data: Prisma.EvaluationClientCreateManyChauffeurInput | Prisma.EvaluationClientCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type EvaluationClientUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedCreateWithoutChauffeurInput>;
};
export type EvaluationClientUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutChauffeurInput, Prisma.EvaluationClientUncheckedUpdateWithoutChauffeurInput>;
};
export type EvaluationClientUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.EvaluationClientScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateManyMutationInput, Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurInput>;
};
export type EvaluationClientCreateWithoutCourseInput = {
    id?: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutEvaluationsClientInput;
    client: Prisma.ClientCreateNestedOneWithoutEvaluationsClientInput;
};
export type EvaluationClientUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientCreateOrConnectWithoutCourseInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput>;
};
export type EvaluationClientCreateManyCourseInputEnvelope = {
    data: Prisma.EvaluationClientCreateManyCourseInput | Prisma.EvaluationClientCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type EvaluationClientUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutCourseInput, Prisma.EvaluationClientUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.EvaluationClientCreateWithoutCourseInput, Prisma.EvaluationClientUncheckedCreateWithoutCourseInput>;
};
export type EvaluationClientUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EvaluationClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateWithoutCourseInput, Prisma.EvaluationClientUncheckedUpdateWithoutCourseInput>;
};
export type EvaluationClientUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.EvaluationClientScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateManyMutationInput, Prisma.EvaluationClientUncheckedUpdateManyWithoutCourseInput>;
};
export type EvaluationClientCreateManyClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsClientNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsClientNestedInput;
};
export type EvaluationClientUncheckedUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientCreateManyChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEvaluationsClientNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsClientNestedInput;
};
export type EvaluationClientUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientCreateManyCourseInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    clientId: bigint | number;
    note: number;
    commentaire?: string | null;
    dateCreation?: Date | string;
};
export type EvaluationClientUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutEvaluationsClientNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutEvaluationsClientNestedInput;
};
export type EvaluationClientUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    note?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    chauffeurId?: boolean;
    clientId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationClient"]>;
export type EvaluationClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    chauffeurId?: boolean;
    clientId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationClient"]>;
export type EvaluationClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    chauffeurId?: boolean;
    clientId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationClient"]>;
export type EvaluationClientSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    chauffeurId?: boolean;
    clientId?: boolean;
    note?: boolean;
    commentaire?: boolean;
    dateCreation?: boolean;
};
export type EvaluationClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "chauffeurId" | "clientId" | "note" | "commentaire" | "dateCreation", ExtArgs["result"]["evaluationClient"]>;
export type EvaluationClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type EvaluationClientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type EvaluationClientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $EvaluationClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationClient";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        chauffeur: Prisma.$ChauffeurPayload<ExtArgs>;
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        chauffeurId: bigint;
        clientId: bigint;
        note: number;
        commentaire: string | null;
        dateCreation: Date;
    }, ExtArgs["result"]["evaluationClient"]>;
    composites: {};
};
export type EvaluationClientGetPayload<S extends boolean | null | undefined | EvaluationClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload, S>;
export type EvaluationClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationClientCountAggregateInputType | true;
};
export interface EvaluationClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationClient'];
        meta: {
            name: 'EvaluationClient';
        };
    };
    findUnique<T extends EvaluationClientFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationClientFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationClientFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationClientCreateArgs>(args: Prisma.SelectSubset<T, EvaluationClientCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationClientCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationClientDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationClientDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationClientUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationClientUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationClientUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationClientUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationClientUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationClientClient<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationClientCountArgs>(args?: Prisma.Subset<T, EvaluationClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationClientCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationClientAggregateArgs>(args: Prisma.Subset<T, EvaluationClientAggregateArgs>): Prisma.PrismaPromise<GetEvaluationClientAggregateType<T>>;
    groupBy<T extends EvaluationClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationClientGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationClientFieldRefs;
}
export interface Prisma__EvaluationClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationClientFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationClient", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"EvaluationClient", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"EvaluationClient", 'BigInt'>;
    readonly clientId: Prisma.FieldRef<"EvaluationClient", 'BigInt'>;
    readonly note: Prisma.FieldRef<"EvaluationClient", 'Int'>;
    readonly commentaire: Prisma.FieldRef<"EvaluationClient", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"EvaluationClient", 'DateTime'>;
}
export type EvaluationClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where: Prisma.EvaluationClientWhereUniqueInput;
};
export type EvaluationClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where: Prisma.EvaluationClientWhereUniqueInput;
};
export type EvaluationClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where?: Prisma.EvaluationClientWhereInput;
    orderBy?: Prisma.EvaluationClientOrderByWithRelationInput | Prisma.EvaluationClientOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationClientScalarFieldEnum | Prisma.EvaluationClientScalarFieldEnum[];
};
export type EvaluationClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where?: Prisma.EvaluationClientWhereInput;
    orderBy?: Prisma.EvaluationClientOrderByWithRelationInput | Prisma.EvaluationClientOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationClientScalarFieldEnum | Prisma.EvaluationClientScalarFieldEnum[];
};
export type EvaluationClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where?: Prisma.EvaluationClientWhereInput;
    orderBy?: Prisma.EvaluationClientOrderByWithRelationInput | Prisma.EvaluationClientOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationClientScalarFieldEnum | Prisma.EvaluationClientScalarFieldEnum[];
};
export type EvaluationClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationClientCreateInput, Prisma.EvaluationClientUncheckedCreateInput>;
};
export type EvaluationClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationClientCreateManyInput | Prisma.EvaluationClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    data: Prisma.EvaluationClientCreateManyInput | Prisma.EvaluationClientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationClientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateInput, Prisma.EvaluationClientUncheckedUpdateInput>;
    where: Prisma.EvaluationClientWhereUniqueInput;
};
export type EvaluationClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationClientUpdateManyMutationInput, Prisma.EvaluationClientUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationClientWhereInput;
    limit?: number;
};
export type EvaluationClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationClientUpdateManyMutationInput, Prisma.EvaluationClientUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationClientWhereInput;
    limit?: number;
    include?: Prisma.EvaluationClientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where: Prisma.EvaluationClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationClientCreateInput, Prisma.EvaluationClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationClientUpdateInput, Prisma.EvaluationClientUncheckedUpdateInput>;
};
export type EvaluationClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
    where: Prisma.EvaluationClientWhereUniqueInput;
};
export type EvaluationClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationClientWhereInput;
    limit?: number;
};
export type EvaluationClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationClientSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationClientOmit<ExtArgs> | null;
    include?: Prisma.EvaluationClientInclude<ExtArgs> | null;
};
