import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaiementModel = runtime.Types.Result.DefaultSelection<Prisma.$PaiementPayload>;
export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null;
    _avg: PaiementAvgAggregateOutputType | null;
    _sum: PaiementSumAggregateOutputType | null;
    _min: PaiementMinAggregateOutputType | null;
    _max: PaiementMaxAggregateOutputType | null;
};
export type PaiementAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    participantCourseId: number | null;
    montant: runtime.Decimal | null;
};
export type PaiementSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    participantCourseId: bigint | null;
    montant: runtime.Decimal | null;
};
export type PaiementMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    participantCourseId: bigint | null;
    montant: runtime.Decimal | null;
    methode: string | null;
    referenceTransaction: string | null;
    statut: string | null;
    datePaiement: Date | null;
};
export type PaiementMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    participantCourseId: bigint | null;
    montant: runtime.Decimal | null;
    methode: string | null;
    referenceTransaction: string | null;
    statut: string | null;
    datePaiement: Date | null;
};
export type PaiementCountAggregateOutputType = {
    id: number;
    courseId: number;
    participantCourseId: number;
    montant: number;
    methode: number;
    referenceTransaction: number;
    statut: number;
    datePaiement: number;
    _all: number;
};
export type PaiementAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    participantCourseId?: true;
    montant?: true;
};
export type PaiementSumAggregateInputType = {
    id?: true;
    courseId?: true;
    participantCourseId?: true;
    montant?: true;
};
export type PaiementMinAggregateInputType = {
    id?: true;
    courseId?: true;
    participantCourseId?: true;
    montant?: true;
    methode?: true;
    referenceTransaction?: true;
    statut?: true;
    datePaiement?: true;
};
export type PaiementMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    participantCourseId?: true;
    montant?: true;
    methode?: true;
    referenceTransaction?: true;
    statut?: true;
    datePaiement?: true;
};
export type PaiementCountAggregateInputType = {
    id?: true;
    courseId?: true;
    participantCourseId?: true;
    montant?: true;
    methode?: true;
    referenceTransaction?: true;
    statut?: true;
    datePaiement?: true;
    _all?: true;
};
export type PaiementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaiementCountAggregateInputType;
    _avg?: PaiementAvgAggregateInputType;
    _sum?: PaiementSumAggregateInputType;
    _min?: PaiementMinAggregateInputType;
    _max?: PaiementMaxAggregateInputType;
};
export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
    [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaiement[P]> : Prisma.GetScalarType<T[P], AggregatePaiement[P]>;
};
export type PaiementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithAggregationInput | Prisma.PaiementOrderByWithAggregationInput[];
    by: Prisma.PaiementScalarFieldEnum[] | Prisma.PaiementScalarFieldEnum;
    having?: Prisma.PaiementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaiementCountAggregateInputType | true;
    _avg?: PaiementAvgAggregateInputType;
    _sum?: PaiementSumAggregateInputType;
    _min?: PaiementMinAggregateInputType;
    _max?: PaiementMaxAggregateInputType;
};
export type PaiementGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    participantCourseId: bigint;
    montant: runtime.Decimal;
    methode: string;
    referenceTransaction: string | null;
    statut: string;
    datePaiement: Date | null;
    _count: PaiementCountAggregateOutputType | null;
    _avg: PaiementAvgAggregateOutputType | null;
    _sum: PaiementSumAggregateOutputType | null;
    _min: PaiementMinAggregateOutputType | null;
    _max: PaiementMaxAggregateOutputType | null;
};
export type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaiementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaiementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaiementGroupByOutputType[P]>;
}>>;
export type PaiementWhereInput = {
    AND?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    OR?: Prisma.PaiementWhereInput[];
    NOT?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    id?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    participantCourseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    montant?: Prisma.DecimalFilter<"Paiement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFilter<"Paiement"> | string;
    referenceTransaction?: Prisma.StringNullableFilter<"Paiement"> | string | null;
    statut?: Prisma.StringFilter<"Paiement"> | string;
    datePaiement?: Prisma.DateTimeNullableFilter<"Paiement"> | Date | string | null;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    participantCourse?: Prisma.XOR<Prisma.ParticipantCourseScalarRelationFilter, Prisma.ParticipantCourseWhereInput>;
};
export type PaiementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    referenceTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    participantCourse?: Prisma.ParticipantCourseOrderByWithRelationInput;
};
export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    OR?: Prisma.PaiementWhereInput[];
    NOT?: Prisma.PaiementWhereInput | Prisma.PaiementWhereInput[];
    courseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    participantCourseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    montant?: Prisma.DecimalFilter<"Paiement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFilter<"Paiement"> | string;
    referenceTransaction?: Prisma.StringNullableFilter<"Paiement"> | string | null;
    statut?: Prisma.StringFilter<"Paiement"> | string;
    datePaiement?: Prisma.DateTimeNullableFilter<"Paiement"> | Date | string | null;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    participantCourse?: Prisma.XOR<Prisma.ParticipantCourseScalarRelationFilter, Prisma.ParticipantCourseWhereInput>;
}, "id">;
export type PaiementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    referenceTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PaiementCountOrderByAggregateInput;
    _avg?: Prisma.PaiementAvgOrderByAggregateInput;
    _max?: Prisma.PaiementMaxOrderByAggregateInput;
    _min?: Prisma.PaiementMinOrderByAggregateInput;
    _sum?: Prisma.PaiementSumOrderByAggregateInput;
};
export type PaiementScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaiementScalarWhereWithAggregatesInput | Prisma.PaiementScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaiementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaiementScalarWhereWithAggregatesInput | Prisma.PaiementScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Paiement"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"Paiement"> | bigint | number;
    participantCourseId?: Prisma.BigIntWithAggregatesFilter<"Paiement"> | bigint | number;
    montant?: Prisma.DecimalWithAggregatesFilter<"Paiement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringWithAggregatesFilter<"Paiement"> | string;
    referenceTransaction?: Prisma.StringNullableWithAggregatesFilter<"Paiement"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"Paiement"> | string;
    datePaiement?: Prisma.DateTimeNullableWithAggregatesFilter<"Paiement"> | Date | string | null;
};
export type PaiementCreateInput = {
    id?: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
    course: Prisma.CourseCreateNestedOneWithoutPaiementsInput;
    participantCourse: Prisma.ParticipantCourseCreateNestedOneWithoutPaiementsInput;
};
export type PaiementUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    participantCourseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.CourseUpdateOneRequiredWithoutPaiementsNestedInput;
    participantCourse?: Prisma.ParticipantCourseUpdateOneRequiredWithoutPaiementsNestedInput;
};
export type PaiementUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    participantCourseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    participantCourseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    participantCourseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementListRelationFilter = {
    every?: Prisma.PaiementWhereInput;
    some?: Prisma.PaiementWhereInput;
    none?: Prisma.PaiementWhereInput;
};
export type PaiementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaiementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    referenceTransaction?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
};
export type PaiementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
};
export type PaiementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    referenceTransaction?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
};
export type PaiementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    methode?: Prisma.SortOrder;
    referenceTransaction?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    datePaiement?: Prisma.SortOrder;
};
export type PaiementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    participantCourseId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
};
export type PaiementCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput> | Prisma.PaiementCreateWithoutCourseInput[] | Prisma.PaiementUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCourseInput | Prisma.PaiementCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.PaiementCreateManyCourseInputEnvelope;
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
};
export type PaiementUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput> | Prisma.PaiementCreateWithoutCourseInput[] | Prisma.PaiementUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCourseInput | Prisma.PaiementCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.PaiementCreateManyCourseInputEnvelope;
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
};
export type PaiementUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput> | Prisma.PaiementCreateWithoutCourseInput[] | Prisma.PaiementUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCourseInput | Prisma.PaiementCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.PaiementUpsertWithWhereUniqueWithoutCourseInput | Prisma.PaiementUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.PaiementCreateManyCourseInputEnvelope;
    set?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    disconnect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    delete?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    update?: Prisma.PaiementUpdateWithWhereUniqueWithoutCourseInput | Prisma.PaiementUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.PaiementUpdateManyWithWhereWithoutCourseInput | Prisma.PaiementUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
};
export type PaiementUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput> | Prisma.PaiementCreateWithoutCourseInput[] | Prisma.PaiementUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutCourseInput | Prisma.PaiementCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.PaiementUpsertWithWhereUniqueWithoutCourseInput | Prisma.PaiementUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.PaiementCreateManyCourseInputEnvelope;
    set?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    disconnect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    delete?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    update?: Prisma.PaiementUpdateWithWhereUniqueWithoutCourseInput | Prisma.PaiementUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.PaiementUpdateManyWithWhereWithoutCourseInput | Prisma.PaiementUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
};
export type PaiementCreateNestedManyWithoutParticipantCourseInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput> | Prisma.PaiementCreateWithoutParticipantCourseInput[] | Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput | Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput[];
    createMany?: Prisma.PaiementCreateManyParticipantCourseInputEnvelope;
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
};
export type PaiementUncheckedCreateNestedManyWithoutParticipantCourseInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput> | Prisma.PaiementCreateWithoutParticipantCourseInput[] | Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput | Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput[];
    createMany?: Prisma.PaiementCreateManyParticipantCourseInputEnvelope;
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
};
export type PaiementUpdateManyWithoutParticipantCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput> | Prisma.PaiementCreateWithoutParticipantCourseInput[] | Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput | Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput[];
    upsert?: Prisma.PaiementUpsertWithWhereUniqueWithoutParticipantCourseInput | Prisma.PaiementUpsertWithWhereUniqueWithoutParticipantCourseInput[];
    createMany?: Prisma.PaiementCreateManyParticipantCourseInputEnvelope;
    set?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    disconnect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    delete?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    update?: Prisma.PaiementUpdateWithWhereUniqueWithoutParticipantCourseInput | Prisma.PaiementUpdateWithWhereUniqueWithoutParticipantCourseInput[];
    updateMany?: Prisma.PaiementUpdateManyWithWhereWithoutParticipantCourseInput | Prisma.PaiementUpdateManyWithWhereWithoutParticipantCourseInput[];
    deleteMany?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
};
export type PaiementUncheckedUpdateManyWithoutParticipantCourseNestedInput = {
    create?: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput> | Prisma.PaiementCreateWithoutParticipantCourseInput[] | Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput[];
    connectOrCreate?: Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput | Prisma.PaiementCreateOrConnectWithoutParticipantCourseInput[];
    upsert?: Prisma.PaiementUpsertWithWhereUniqueWithoutParticipantCourseInput | Prisma.PaiementUpsertWithWhereUniqueWithoutParticipantCourseInput[];
    createMany?: Prisma.PaiementCreateManyParticipantCourseInputEnvelope;
    set?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    disconnect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    delete?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    connect?: Prisma.PaiementWhereUniqueInput | Prisma.PaiementWhereUniqueInput[];
    update?: Prisma.PaiementUpdateWithWhereUniqueWithoutParticipantCourseInput | Prisma.PaiementUpdateWithWhereUniqueWithoutParticipantCourseInput[];
    updateMany?: Prisma.PaiementUpdateManyWithWhereWithoutParticipantCourseInput | Prisma.PaiementUpdateManyWithWhereWithoutParticipantCourseInput[];
    deleteMany?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
};
export type PaiementCreateWithoutCourseInput = {
    id?: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
    participantCourse: Prisma.ParticipantCourseCreateNestedOneWithoutPaiementsInput;
};
export type PaiementUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    participantCourseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementCreateOrConnectWithoutCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput>;
};
export type PaiementCreateManyCourseInputEnvelope = {
    data: Prisma.PaiementCreateManyCourseInput | Prisma.PaiementCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type PaiementUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaiementUpdateWithoutCourseInput, Prisma.PaiementUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutCourseInput, Prisma.PaiementUncheckedCreateWithoutCourseInput>;
};
export type PaiementUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaiementUpdateWithoutCourseInput, Prisma.PaiementUncheckedUpdateWithoutCourseInput>;
};
export type PaiementUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.PaiementScalarWhereInput;
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyWithoutCourseInput>;
};
export type PaiementScalarWhereInput = {
    AND?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
    OR?: Prisma.PaiementScalarWhereInput[];
    NOT?: Prisma.PaiementScalarWhereInput | Prisma.PaiementScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    participantCourseId?: Prisma.BigIntFilter<"Paiement"> | bigint | number;
    montant?: Prisma.DecimalFilter<"Paiement"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFilter<"Paiement"> | string;
    referenceTransaction?: Prisma.StringNullableFilter<"Paiement"> | string | null;
    statut?: Prisma.StringFilter<"Paiement"> | string;
    datePaiement?: Prisma.DateTimeNullableFilter<"Paiement"> | Date | string | null;
};
export type PaiementCreateWithoutParticipantCourseInput = {
    id?: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
    course: Prisma.CourseCreateNestedOneWithoutPaiementsInput;
};
export type PaiementUncheckedCreateWithoutParticipantCourseInput = {
    id?: bigint | number;
    courseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementCreateOrConnectWithoutParticipantCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput>;
};
export type PaiementCreateManyParticipantCourseInputEnvelope = {
    data: Prisma.PaiementCreateManyParticipantCourseInput | Prisma.PaiementCreateManyParticipantCourseInput[];
    skipDuplicates?: boolean;
};
export type PaiementUpsertWithWhereUniqueWithoutParticipantCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaiementUpdateWithoutParticipantCourseInput, Prisma.PaiementUncheckedUpdateWithoutParticipantCourseInput>;
    create: Prisma.XOR<Prisma.PaiementCreateWithoutParticipantCourseInput, Prisma.PaiementUncheckedCreateWithoutParticipantCourseInput>;
};
export type PaiementUpdateWithWhereUniqueWithoutParticipantCourseInput = {
    where: Prisma.PaiementWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaiementUpdateWithoutParticipantCourseInput, Prisma.PaiementUncheckedUpdateWithoutParticipantCourseInput>;
};
export type PaiementUpdateManyWithWhereWithoutParticipantCourseInput = {
    where: Prisma.PaiementScalarWhereInput;
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyWithoutParticipantCourseInput>;
};
export type PaiementCreateManyCourseInput = {
    id?: bigint | number;
    participantCourseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    participantCourse?: Prisma.ParticipantCourseUpdateOneRequiredWithoutPaiementsNestedInput;
};
export type PaiementUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    participantCourseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    participantCourseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementCreateManyParticipantCourseInput = {
    id?: bigint | number;
    courseId: bigint | number;
    montant: runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode: string;
    referenceTransaction?: string | null;
    statut: string;
    datePaiement?: Date | string | null;
};
export type PaiementUpdateWithoutParticipantCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.CourseUpdateOneRequiredWithoutPaiementsNestedInput;
};
export type PaiementUncheckedUpdateWithoutParticipantCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementUncheckedUpdateManyWithoutParticipantCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    montant?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    methode?: Prisma.StringFieldUpdateOperationsInput | string;
    referenceTransaction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    datePaiement?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaiementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    participantCourseId?: boolean;
    montant?: boolean;
    methode?: boolean;
    referenceTransaction?: boolean;
    statut?: boolean;
    datePaiement?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    participantCourseId?: boolean;
    montant?: boolean;
    methode?: boolean;
    referenceTransaction?: boolean;
    statut?: boolean;
    datePaiement?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    participantCourseId?: boolean;
    montant?: boolean;
    methode?: boolean;
    referenceTransaction?: boolean;
    statut?: boolean;
    datePaiement?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paiement"]>;
export type PaiementSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    participantCourseId?: boolean;
    montant?: boolean;
    methode?: boolean;
    referenceTransaction?: boolean;
    statut?: boolean;
    datePaiement?: boolean;
};
export type PaiementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "participantCourseId" | "montant" | "methode" | "referenceTransaction" | "statut" | "datePaiement", ExtArgs["result"]["paiement"]>;
export type PaiementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
};
export type PaiementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
};
export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    participantCourse?: boolean | Prisma.ParticipantCourseDefaultArgs<ExtArgs>;
};
export type $PaiementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Paiement";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        participantCourse: Prisma.$ParticipantCoursePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        participantCourseId: bigint;
        montant: runtime.Decimal;
        methode: string;
        referenceTransaction: string | null;
        statut: string;
        datePaiement: Date | null;
    }, ExtArgs["result"]["paiement"]>;
    composites: {};
};
export type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaiementPayload, S>;
export type PaiementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaiementCountAggregateInputType | true;
};
export interface PaiementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Paiement'];
        meta: {
            name: 'Paiement';
        };
    };
    findUnique<T extends PaiementFindUniqueArgs>(args: Prisma.SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaiementFindFirstArgs>(args?: Prisma.SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaiementFindManyArgs>(args?: Prisma.SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaiementCreateArgs>(args: Prisma.SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaiementCreateManyArgs>(args?: Prisma.SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaiementDeleteArgs>(args: Prisma.SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaiementUpdateArgs>(args: Prisma.SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaiementDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaiementUpdateManyArgs>(args: Prisma.SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaiementUpsertArgs>(args: Prisma.SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma.Prisma__PaiementClient<runtime.Types.Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaiementCountArgs>(args?: Prisma.Subset<T, PaiementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaiementCountAggregateOutputType> : number>;
    aggregate<T extends PaiementAggregateArgs>(args: Prisma.Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>;
    groupBy<T extends PaiementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaiementGroupByArgs['orderBy'];
    } : {
        orderBy?: PaiementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaiementFieldRefs;
}
export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participantCourse<T extends Prisma.ParticipantCourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantCourseDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantCourseClient<runtime.Types.Result.GetResult<Prisma.$ParticipantCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaiementFieldRefs {
    readonly id: Prisma.FieldRef<"Paiement", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"Paiement", 'BigInt'>;
    readonly participantCourseId: Prisma.FieldRef<"Paiement", 'BigInt'>;
    readonly montant: Prisma.FieldRef<"Paiement", 'Decimal'>;
    readonly methode: Prisma.FieldRef<"Paiement", 'String'>;
    readonly referenceTransaction: Prisma.FieldRef<"Paiement", 'String'>;
    readonly statut: Prisma.FieldRef<"Paiement", 'String'>;
    readonly datePaiement: Prisma.FieldRef<"Paiement", 'DateTime'>;
}
export type PaiementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where?: Prisma.PaiementWhereInput;
    orderBy?: Prisma.PaiementOrderByWithRelationInput | Prisma.PaiementOrderByWithRelationInput[];
    cursor?: Prisma.PaiementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaiementScalarFieldEnum | Prisma.PaiementScalarFieldEnum[];
};
export type PaiementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementCreateInput, Prisma.PaiementUncheckedCreateInput>;
};
export type PaiementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaiementCreateManyInput | Prisma.PaiementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaiementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    data: Prisma.PaiementCreateManyInput | Prisma.PaiementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaiementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaiementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementUpdateInput, Prisma.PaiementUncheckedUpdateInput>;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyInput>;
    where?: Prisma.PaiementWhereInput;
    limit?: number;
};
export type PaiementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaiementUpdateManyMutationInput, Prisma.PaiementUncheckedUpdateManyInput>;
    where?: Prisma.PaiementWhereInput;
    limit?: number;
    include?: Prisma.PaiementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaiementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaiementCreateInput, Prisma.PaiementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaiementUpdateInput, Prisma.PaiementUncheckedUpdateInput>;
};
export type PaiementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
    where: Prisma.PaiementWhereUniqueInput;
};
export type PaiementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaiementWhereInput;
    limit?: number;
};
export type PaiementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaiementSelect<ExtArgs> | null;
    omit?: Prisma.PaiementOmit<ExtArgs> | null;
    include?: Prisma.PaiementInclude<ExtArgs> | null;
};
