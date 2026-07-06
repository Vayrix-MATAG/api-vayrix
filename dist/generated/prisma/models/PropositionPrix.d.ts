import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PropositionPrixModel = runtime.Types.Result.DefaultSelection<Prisma.$PropositionPrixPayload>;
export type AggregatePropositionPrix = {
    _count: PropositionPrixCountAggregateOutputType | null;
    _avg: PropositionPrixAvgAggregateOutputType | null;
    _sum: PropositionPrixSumAggregateOutputType | null;
    _min: PropositionPrixMinAggregateOutputType | null;
    _max: PropositionPrixMaxAggregateOutputType | null;
};
export type PropositionPrixAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    clientId: number | null;
    chauffeurId: number | null;
    prix: runtime.Decimal | null;
};
export type PropositionPrixSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    prix: runtime.Decimal | null;
};
export type PropositionPrixMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    auteur: string | null;
    prix: runtime.Decimal | null;
    statut: string | null;
    dateProposition: Date | null;
};
export type PropositionPrixMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientId: bigint | null;
    chauffeurId: bigint | null;
    auteur: string | null;
    prix: runtime.Decimal | null;
    statut: string | null;
    dateProposition: Date | null;
};
export type PropositionPrixCountAggregateOutputType = {
    id: number;
    courseId: number;
    clientId: number;
    chauffeurId: number;
    auteur: number;
    prix: number;
    statut: number;
    dateProposition: number;
    _all: number;
};
export type PropositionPrixAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    prix?: true;
};
export type PropositionPrixSumAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    prix?: true;
};
export type PropositionPrixMinAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    auteur?: true;
    prix?: true;
    statut?: true;
    dateProposition?: true;
};
export type PropositionPrixMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    auteur?: true;
    prix?: true;
    statut?: true;
    dateProposition?: true;
};
export type PropositionPrixCountAggregateInputType = {
    id?: true;
    courseId?: true;
    clientId?: true;
    chauffeurId?: true;
    auteur?: true;
    prix?: true;
    statut?: true;
    dateProposition?: true;
    _all?: true;
};
export type PropositionPrixAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropositionPrixWhereInput;
    orderBy?: Prisma.PropositionPrixOrderByWithRelationInput | Prisma.PropositionPrixOrderByWithRelationInput[];
    cursor?: Prisma.PropositionPrixWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PropositionPrixCountAggregateInputType;
    _avg?: PropositionPrixAvgAggregateInputType;
    _sum?: PropositionPrixSumAggregateInputType;
    _min?: PropositionPrixMinAggregateInputType;
    _max?: PropositionPrixMaxAggregateInputType;
};
export type GetPropositionPrixAggregateType<T extends PropositionPrixAggregateArgs> = {
    [P in keyof T & keyof AggregatePropositionPrix]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePropositionPrix[P]> : Prisma.GetScalarType<T[P], AggregatePropositionPrix[P]>;
};
export type PropositionPrixGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropositionPrixWhereInput;
    orderBy?: Prisma.PropositionPrixOrderByWithAggregationInput | Prisma.PropositionPrixOrderByWithAggregationInput[];
    by: Prisma.PropositionPrixScalarFieldEnum[] | Prisma.PropositionPrixScalarFieldEnum;
    having?: Prisma.PropositionPrixScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropositionPrixCountAggregateInputType | true;
    _avg?: PropositionPrixAvgAggregateInputType;
    _sum?: PropositionPrixSumAggregateInputType;
    _min?: PropositionPrixMinAggregateInputType;
    _max?: PropositionPrixMaxAggregateInputType;
};
export type PropositionPrixGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    clientId: bigint;
    chauffeurId: bigint;
    auteur: string;
    prix: runtime.Decimal;
    statut: string;
    dateProposition: Date;
    _count: PropositionPrixCountAggregateOutputType | null;
    _avg: PropositionPrixAvgAggregateOutputType | null;
    _sum: PropositionPrixSumAggregateOutputType | null;
    _min: PropositionPrixMinAggregateOutputType | null;
    _max: PropositionPrixMaxAggregateOutputType | null;
};
export type GetPropositionPrixGroupByPayload<T extends PropositionPrixGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropositionPrixGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropositionPrixGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropositionPrixGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropositionPrixGroupByOutputType[P]>;
}>>;
export type PropositionPrixWhereInput = {
    AND?: Prisma.PropositionPrixWhereInput | Prisma.PropositionPrixWhereInput[];
    OR?: Prisma.PropositionPrixWhereInput[];
    NOT?: Prisma.PropositionPrixWhereInput | Prisma.PropositionPrixWhereInput[];
    id?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    auteur?: Prisma.StringFilter<"PropositionPrix"> | string;
    prix?: Prisma.DecimalFilter<"PropositionPrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"PropositionPrix"> | string;
    dateProposition?: Prisma.DateTimeFilter<"PropositionPrix"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
};
export type PropositionPrixOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    auteur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateProposition?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    client?: Prisma.ClientOrderByWithRelationInput;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
};
export type PropositionPrixWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.PropositionPrixWhereInput | Prisma.PropositionPrixWhereInput[];
    OR?: Prisma.PropositionPrixWhereInput[];
    NOT?: Prisma.PropositionPrixWhereInput | Prisma.PropositionPrixWhereInput[];
    courseId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    auteur?: Prisma.StringFilter<"PropositionPrix"> | string;
    prix?: Prisma.DecimalFilter<"PropositionPrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"PropositionPrix"> | string;
    dateProposition?: Prisma.DateTimeFilter<"PropositionPrix"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
}, "id">;
export type PropositionPrixOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    auteur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateProposition?: Prisma.SortOrder;
    _count?: Prisma.PropositionPrixCountOrderByAggregateInput;
    _avg?: Prisma.PropositionPrixAvgOrderByAggregateInput;
    _max?: Prisma.PropositionPrixMaxOrderByAggregateInput;
    _min?: Prisma.PropositionPrixMinOrderByAggregateInput;
    _sum?: Prisma.PropositionPrixSumOrderByAggregateInput;
};
export type PropositionPrixScalarWhereWithAggregatesInput = {
    AND?: Prisma.PropositionPrixScalarWhereWithAggregatesInput | Prisma.PropositionPrixScalarWhereWithAggregatesInput[];
    OR?: Prisma.PropositionPrixScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PropositionPrixScalarWhereWithAggregatesInput | Prisma.PropositionPrixScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"PropositionPrix"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"PropositionPrix"> | bigint | number;
    clientId?: Prisma.BigIntWithAggregatesFilter<"PropositionPrix"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"PropositionPrix"> | bigint | number;
    auteur?: Prisma.StringWithAggregatesFilter<"PropositionPrix"> | string;
    prix?: Prisma.DecimalWithAggregatesFilter<"PropositionPrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringWithAggregatesFilter<"PropositionPrix"> | string;
    dateProposition?: Prisma.DateTimeWithAggregatesFilter<"PropositionPrix"> | Date | string;
};
export type PropositionPrixCreateInput = {
    id?: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutPropositionPrixInput;
    client: Prisma.ClientCreateNestedOneWithoutPropositionPrixInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutPropositionPrixInput;
};
export type PropositionPrixUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutPropositionPrixNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutPropositionPrixNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutPropositionPrixNestedInput;
};
export type PropositionPrixUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixListRelationFilter = {
    every?: Prisma.PropositionPrixWhereInput;
    some?: Prisma.PropositionPrixWhereInput;
    none?: Prisma.PropositionPrixWhereInput;
};
export type PropositionPrixOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PropositionPrixCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    auteur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateProposition?: Prisma.SortOrder;
};
export type PropositionPrixAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
};
export type PropositionPrixMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    auteur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateProposition?: Prisma.SortOrder;
};
export type PropositionPrixMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    auteur?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateProposition?: Prisma.SortOrder;
};
export type PropositionPrixSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    prix?: Prisma.SortOrder;
};
export type PropositionPrixCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput> | Prisma.PropositionPrixCreateWithoutClientInput[] | Prisma.PropositionPrixUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutClientInput | Prisma.PropositionPrixCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.PropositionPrixCreateManyClientInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput> | Prisma.PropositionPrixCreateWithoutClientInput[] | Prisma.PropositionPrixUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutClientInput | Prisma.PropositionPrixCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.PropositionPrixCreateManyClientInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput> | Prisma.PropositionPrixCreateWithoutClientInput[] | Prisma.PropositionPrixUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutClientInput | Prisma.PropositionPrixCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutClientInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.PropositionPrixCreateManyClientInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutClientInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutClientInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput> | Prisma.PropositionPrixCreateWithoutClientInput[] | Prisma.PropositionPrixUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutClientInput | Prisma.PropositionPrixCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutClientInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.PropositionPrixCreateManyClientInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutClientInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutClientInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput> | Prisma.PropositionPrixCreateWithoutChauffeurInput[] | Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput | Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.PropositionPrixCreateManyChauffeurInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput> | Prisma.PropositionPrixCreateWithoutChauffeurInput[] | Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput | Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.PropositionPrixCreateManyChauffeurInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput> | Prisma.PropositionPrixCreateWithoutChauffeurInput[] | Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput | Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.PropositionPrixCreateManyChauffeurInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutChauffeurInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput> | Prisma.PropositionPrixCreateWithoutChauffeurInput[] | Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput | Prisma.PropositionPrixCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.PropositionPrixCreateManyChauffeurInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutChauffeurInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput> | Prisma.PropositionPrixCreateWithoutCourseInput[] | Prisma.PropositionPrixUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutCourseInput | Prisma.PropositionPrixCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.PropositionPrixCreateManyCourseInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput> | Prisma.PropositionPrixCreateWithoutCourseInput[] | Prisma.PropositionPrixUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutCourseInput | Prisma.PropositionPrixCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.PropositionPrixCreateManyCourseInputEnvelope;
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
};
export type PropositionPrixUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput> | Prisma.PropositionPrixCreateWithoutCourseInput[] | Prisma.PropositionPrixUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutCourseInput | Prisma.PropositionPrixCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutCourseInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.PropositionPrixCreateManyCourseInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutCourseInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutCourseInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput> | Prisma.PropositionPrixCreateWithoutCourseInput[] | Prisma.PropositionPrixUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PropositionPrixCreateOrConnectWithoutCourseInput | Prisma.PropositionPrixCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.PropositionPrixUpsertWithWhereUniqueWithoutCourseInput | Prisma.PropositionPrixUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.PropositionPrixCreateManyCourseInputEnvelope;
    set?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    disconnect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    delete?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    connect?: Prisma.PropositionPrixWhereUniqueInput | Prisma.PropositionPrixWhereUniqueInput[];
    update?: Prisma.PropositionPrixUpdateWithWhereUniqueWithoutCourseInput | Prisma.PropositionPrixUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.PropositionPrixUpdateManyWithWhereWithoutCourseInput | Prisma.PropositionPrixUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
};
export type PropositionPrixCreateWithoutClientInput = {
    id?: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutPropositionPrixInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutPropositionPrixInput;
};
export type PropositionPrixUncheckedCreateWithoutClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixCreateOrConnectWithoutClientInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput>;
};
export type PropositionPrixCreateManyClientInputEnvelope = {
    data: Prisma.PropositionPrixCreateManyClientInput | Prisma.PropositionPrixCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type PropositionPrixUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutClientInput, Prisma.PropositionPrixUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutClientInput, Prisma.PropositionPrixUncheckedCreateWithoutClientInput>;
};
export type PropositionPrixUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutClientInput, Prisma.PropositionPrixUncheckedUpdateWithoutClientInput>;
};
export type PropositionPrixUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.PropositionPrixScalarWhereInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateManyMutationInput, Prisma.PropositionPrixUncheckedUpdateManyWithoutClientInput>;
};
export type PropositionPrixScalarWhereInput = {
    AND?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
    OR?: Prisma.PropositionPrixScalarWhereInput[];
    NOT?: Prisma.PropositionPrixScalarWhereInput | Prisma.PropositionPrixScalarWhereInput[];
    id?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    clientId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"PropositionPrix"> | bigint | number;
    auteur?: Prisma.StringFilter<"PropositionPrix"> | string;
    prix?: Prisma.DecimalFilter<"PropositionPrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"PropositionPrix"> | string;
    dateProposition?: Prisma.DateTimeFilter<"PropositionPrix"> | Date | string;
};
export type PropositionPrixCreateWithoutChauffeurInput = {
    id?: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutPropositionPrixInput;
    client: Prisma.ClientCreateNestedOneWithoutPropositionPrixInput;
};
export type PropositionPrixUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput>;
};
export type PropositionPrixCreateManyChauffeurInputEnvelope = {
    data: Prisma.PropositionPrixCreateManyChauffeurInput | Prisma.PropositionPrixCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type PropositionPrixUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedCreateWithoutChauffeurInput>;
};
export type PropositionPrixUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutChauffeurInput, Prisma.PropositionPrixUncheckedUpdateWithoutChauffeurInput>;
};
export type PropositionPrixUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.PropositionPrixScalarWhereInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateManyMutationInput, Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurInput>;
};
export type PropositionPrixCreateWithoutCourseInput = {
    id?: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutPropositionPrixInput;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutPropositionPrixInput;
};
export type PropositionPrixUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixCreateOrConnectWithoutCourseInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput>;
};
export type PropositionPrixCreateManyCourseInputEnvelope = {
    data: Prisma.PropositionPrixCreateManyCourseInput | Prisma.PropositionPrixCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type PropositionPrixUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    update: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutCourseInput, Prisma.PropositionPrixUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.PropositionPrixCreateWithoutCourseInput, Prisma.PropositionPrixUncheckedCreateWithoutCourseInput>;
};
export type PropositionPrixUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.PropositionPrixWhereUniqueInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateWithoutCourseInput, Prisma.PropositionPrixUncheckedUpdateWithoutCourseInput>;
};
export type PropositionPrixUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.PropositionPrixScalarWhereInput;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateManyMutationInput, Prisma.PropositionPrixUncheckedUpdateManyWithoutCourseInput>;
};
export type PropositionPrixCreateManyClientInput = {
    id?: bigint | number;
    courseId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutPropositionPrixNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutPropositionPrixNestedInput;
};
export type PropositionPrixUncheckedUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixCreateManyChauffeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutPropositionPrixNestedInput;
    client?: Prisma.ClientUpdateOneRequiredWithoutPropositionPrixNestedInput;
};
export type PropositionPrixUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixCreateManyCourseInput = {
    id?: bigint | number;
    clientId: bigint | number;
    chauffeurId: bigint | number;
    auteur: string;
    prix: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateProposition?: Date | string;
};
export type PropositionPrixUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutPropositionPrixNestedInput;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutPropositionPrixNestedInput;
};
export type PropositionPrixUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    auteur?: Prisma.StringFieldUpdateOperationsInput | string;
    prix?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateProposition?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropositionPrixSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    auteur?: boolean;
    prix?: boolean;
    statut?: boolean;
    dateProposition?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propositionPrix"]>;
export type PropositionPrixSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    auteur?: boolean;
    prix?: boolean;
    statut?: boolean;
    dateProposition?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propositionPrix"]>;
export type PropositionPrixSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    auteur?: boolean;
    prix?: boolean;
    statut?: boolean;
    dateProposition?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propositionPrix"]>;
export type PropositionPrixSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    clientId?: boolean;
    chauffeurId?: boolean;
    auteur?: boolean;
    prix?: boolean;
    statut?: boolean;
    dateProposition?: boolean;
};
export type PropositionPrixOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "clientId" | "chauffeurId" | "auteur" | "prix" | "statut" | "dateProposition", ExtArgs["result"]["propositionPrix"]>;
export type PropositionPrixInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type PropositionPrixIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type PropositionPrixIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type $PropositionPrixPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PropositionPrix";
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
        auteur: string;
        prix: runtime.Decimal;
        statut: string;
        dateProposition: Date;
    }, ExtArgs["result"]["propositionPrix"]>;
    composites: {};
};
export type PropositionPrixGetPayload<S extends boolean | null | undefined | PropositionPrixDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload, S>;
export type PropositionPrixCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PropositionPrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropositionPrixCountAggregateInputType | true;
};
export interface PropositionPrixDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PropositionPrix'];
        meta: {
            name: 'PropositionPrix';
        };
    };
    findUnique<T extends PropositionPrixFindUniqueArgs>(args: Prisma.SelectSubset<T, PropositionPrixFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PropositionPrixFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PropositionPrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PropositionPrixFindFirstArgs>(args?: Prisma.SelectSubset<T, PropositionPrixFindFirstArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PropositionPrixFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PropositionPrixFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PropositionPrixFindManyArgs>(args?: Prisma.SelectSubset<T, PropositionPrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PropositionPrixCreateArgs>(args: Prisma.SelectSubset<T, PropositionPrixCreateArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PropositionPrixCreateManyArgs>(args?: Prisma.SelectSubset<T, PropositionPrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PropositionPrixCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PropositionPrixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PropositionPrixDeleteArgs>(args: Prisma.SelectSubset<T, PropositionPrixDeleteArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PropositionPrixUpdateArgs>(args: Prisma.SelectSubset<T, PropositionPrixUpdateArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PropositionPrixDeleteManyArgs>(args?: Prisma.SelectSubset<T, PropositionPrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PropositionPrixUpdateManyArgs>(args: Prisma.SelectSubset<T, PropositionPrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PropositionPrixUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PropositionPrixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PropositionPrixUpsertArgs>(args: Prisma.SelectSubset<T, PropositionPrixUpsertArgs<ExtArgs>>): Prisma.Prisma__PropositionPrixClient<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PropositionPrixCountArgs>(args?: Prisma.Subset<T, PropositionPrixCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropositionPrixCountAggregateOutputType> : number>;
    aggregate<T extends PropositionPrixAggregateArgs>(args: Prisma.Subset<T, PropositionPrixAggregateArgs>): Prisma.PrismaPromise<GetPropositionPrixAggregateType<T>>;
    groupBy<T extends PropositionPrixGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PropositionPrixGroupByArgs['orderBy'];
    } : {
        orderBy?: PropositionPrixGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PropositionPrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropositionPrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PropositionPrixFieldRefs;
}
export interface Prisma__PropositionPrixClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PropositionPrixFieldRefs {
    readonly id: Prisma.FieldRef<"PropositionPrix", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"PropositionPrix", 'BigInt'>;
    readonly clientId: Prisma.FieldRef<"PropositionPrix", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"PropositionPrix", 'BigInt'>;
    readonly auteur: Prisma.FieldRef<"PropositionPrix", 'String'>;
    readonly prix: Prisma.FieldRef<"PropositionPrix", 'Decimal'>;
    readonly statut: Prisma.FieldRef<"PropositionPrix", 'String'>;
    readonly dateProposition: Prisma.FieldRef<"PropositionPrix", 'DateTime'>;
}
export type PropositionPrixFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where: Prisma.PropositionPrixWhereUniqueInput;
};
export type PropositionPrixFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where: Prisma.PropositionPrixWhereUniqueInput;
};
export type PropositionPrixFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where?: Prisma.PropositionPrixWhereInput;
    orderBy?: Prisma.PropositionPrixOrderByWithRelationInput | Prisma.PropositionPrixOrderByWithRelationInput[];
    cursor?: Prisma.PropositionPrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropositionPrixScalarFieldEnum | Prisma.PropositionPrixScalarFieldEnum[];
};
export type PropositionPrixFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where?: Prisma.PropositionPrixWhereInput;
    orderBy?: Prisma.PropositionPrixOrderByWithRelationInput | Prisma.PropositionPrixOrderByWithRelationInput[];
    cursor?: Prisma.PropositionPrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropositionPrixScalarFieldEnum | Prisma.PropositionPrixScalarFieldEnum[];
};
export type PropositionPrixFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where?: Prisma.PropositionPrixWhereInput;
    orderBy?: Prisma.PropositionPrixOrderByWithRelationInput | Prisma.PropositionPrixOrderByWithRelationInput[];
    cursor?: Prisma.PropositionPrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropositionPrixScalarFieldEnum | Prisma.PropositionPrixScalarFieldEnum[];
};
export type PropositionPrixCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropositionPrixCreateInput, Prisma.PropositionPrixUncheckedCreateInput>;
};
export type PropositionPrixCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PropositionPrixCreateManyInput | Prisma.PropositionPrixCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PropositionPrixCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    data: Prisma.PropositionPrixCreateManyInput | Prisma.PropositionPrixCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PropositionPrixIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PropositionPrixUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateInput, Prisma.PropositionPrixUncheckedUpdateInput>;
    where: Prisma.PropositionPrixWhereUniqueInput;
};
export type PropositionPrixUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PropositionPrixUpdateManyMutationInput, Prisma.PropositionPrixUncheckedUpdateManyInput>;
    where?: Prisma.PropositionPrixWhereInput;
    limit?: number;
};
export type PropositionPrixUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PropositionPrixUpdateManyMutationInput, Prisma.PropositionPrixUncheckedUpdateManyInput>;
    where?: Prisma.PropositionPrixWhereInput;
    limit?: number;
    include?: Prisma.PropositionPrixIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PropositionPrixUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where: Prisma.PropositionPrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropositionPrixCreateInput, Prisma.PropositionPrixUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PropositionPrixUpdateInput, Prisma.PropositionPrixUncheckedUpdateInput>;
};
export type PropositionPrixDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
    where: Prisma.PropositionPrixWhereUniqueInput;
};
export type PropositionPrixDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropositionPrixWhereInput;
    limit?: number;
};
export type PropositionPrixDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropositionPrixSelect<ExtArgs> | null;
    omit?: Prisma.PropositionPrixOmit<ExtArgs> | null;
    include?: Prisma.PropositionPrixInclude<ExtArgs> | null;
};
