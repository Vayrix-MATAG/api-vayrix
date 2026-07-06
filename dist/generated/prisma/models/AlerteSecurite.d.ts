import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AlerteSecuriteModel = runtime.Types.Result.DefaultSelection<Prisma.$AlerteSecuritePayload>;
export type AggregateAlerteSecurite = {
    _count: AlerteSecuriteCountAggregateOutputType | null;
    _avg: AlerteSecuriteAvgAggregateOutputType | null;
    _sum: AlerteSecuriteSumAggregateOutputType | null;
    _min: AlerteSecuriteMinAggregateOutputType | null;
    _max: AlerteSecuriteMaxAggregateOutputType | null;
};
export type AlerteSecuriteAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    utilisateurId: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type AlerteSecuriteSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    utilisateurId: bigint | null;
    latitude: number | null;
    longitude: number | null;
};
export type AlerteSecuriteMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    utilisateurId: bigint | null;
    typeAlerte: string | null;
    niveauRisque: string | null;
    latitude: number | null;
    longitude: number | null;
    message: string | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type AlerteSecuriteMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    utilisateurId: bigint | null;
    typeAlerte: string | null;
    niveauRisque: string | null;
    latitude: number | null;
    longitude: number | null;
    message: string | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type AlerteSecuriteCountAggregateOutputType = {
    id: number;
    courseId: number;
    utilisateurId: number;
    typeAlerte: number;
    niveauRisque: number;
    latitude: number;
    longitude: number;
    message: number;
    statut: number;
    dateCreation: number;
    _all: number;
};
export type AlerteSecuriteAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    utilisateurId?: true;
    latitude?: true;
    longitude?: true;
};
export type AlerteSecuriteSumAggregateInputType = {
    id?: true;
    courseId?: true;
    utilisateurId?: true;
    latitude?: true;
    longitude?: true;
};
export type AlerteSecuriteMinAggregateInputType = {
    id?: true;
    courseId?: true;
    utilisateurId?: true;
    typeAlerte?: true;
    niveauRisque?: true;
    latitude?: true;
    longitude?: true;
    message?: true;
    statut?: true;
    dateCreation?: true;
};
export type AlerteSecuriteMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    utilisateurId?: true;
    typeAlerte?: true;
    niveauRisque?: true;
    latitude?: true;
    longitude?: true;
    message?: true;
    statut?: true;
    dateCreation?: true;
};
export type AlerteSecuriteCountAggregateInputType = {
    id?: true;
    courseId?: true;
    utilisateurId?: true;
    typeAlerte?: true;
    niveauRisque?: true;
    latitude?: true;
    longitude?: true;
    message?: true;
    statut?: true;
    dateCreation?: true;
    _all?: true;
};
export type AlerteSecuriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteSecuriteWhereInput;
    orderBy?: Prisma.AlerteSecuriteOrderByWithRelationInput | Prisma.AlerteSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AlerteSecuriteCountAggregateInputType;
    _avg?: AlerteSecuriteAvgAggregateInputType;
    _sum?: AlerteSecuriteSumAggregateInputType;
    _min?: AlerteSecuriteMinAggregateInputType;
    _max?: AlerteSecuriteMaxAggregateInputType;
};
export type GetAlerteSecuriteAggregateType<T extends AlerteSecuriteAggregateArgs> = {
    [P in keyof T & keyof AggregateAlerteSecurite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlerteSecurite[P]> : Prisma.GetScalarType<T[P], AggregateAlerteSecurite[P]>;
};
export type AlerteSecuriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteSecuriteWhereInput;
    orderBy?: Prisma.AlerteSecuriteOrderByWithAggregationInput | Prisma.AlerteSecuriteOrderByWithAggregationInput[];
    by: Prisma.AlerteSecuriteScalarFieldEnum[] | Prisma.AlerteSecuriteScalarFieldEnum;
    having?: Prisma.AlerteSecuriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlerteSecuriteCountAggregateInputType | true;
    _avg?: AlerteSecuriteAvgAggregateInputType;
    _sum?: AlerteSecuriteSumAggregateInputType;
    _min?: AlerteSecuriteMinAggregateInputType;
    _max?: AlerteSecuriteMaxAggregateInputType;
};
export type AlerteSecuriteGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    utilisateurId: bigint;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message: string | null;
    statut: string;
    dateCreation: Date;
    _count: AlerteSecuriteCountAggregateOutputType | null;
    _avg: AlerteSecuriteAvgAggregateOutputType | null;
    _sum: AlerteSecuriteSumAggregateOutputType | null;
    _min: AlerteSecuriteMinAggregateOutputType | null;
    _max: AlerteSecuriteMaxAggregateOutputType | null;
};
export type GetAlerteSecuriteGroupByPayload<T extends AlerteSecuriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlerteSecuriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlerteSecuriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlerteSecuriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlerteSecuriteGroupByOutputType[P]>;
}>>;
export type AlerteSecuriteWhereInput = {
    AND?: Prisma.AlerteSecuriteWhereInput | Prisma.AlerteSecuriteWhereInput[];
    OR?: Prisma.AlerteSecuriteWhereInput[];
    NOT?: Prisma.AlerteSecuriteWhereInput | Prisma.AlerteSecuriteWhereInput[];
    id?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    typeAlerte?: Prisma.StringFilter<"AlerteSecurite"> | string;
    niveauRisque?: Prisma.StringFilter<"AlerteSecurite"> | string;
    latitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    longitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    message?: Prisma.StringNullableFilter<"AlerteSecurite"> | string | null;
    statut?: Prisma.StringFilter<"AlerteSecurite"> | string;
    dateCreation?: Prisma.DateTimeFilter<"AlerteSecurite"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type AlerteSecuriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeAlerte?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type AlerteSecuriteWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.AlerteSecuriteWhereInput | Prisma.AlerteSecuriteWhereInput[];
    OR?: Prisma.AlerteSecuriteWhereInput[];
    NOT?: Prisma.AlerteSecuriteWhereInput | Prisma.AlerteSecuriteWhereInput[];
    courseId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    typeAlerte?: Prisma.StringFilter<"AlerteSecurite"> | string;
    niveauRisque?: Prisma.StringFilter<"AlerteSecurite"> | string;
    latitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    longitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    message?: Prisma.StringNullableFilter<"AlerteSecurite"> | string | null;
    statut?: Prisma.StringFilter<"AlerteSecurite"> | string;
    dateCreation?: Prisma.DateTimeFilter<"AlerteSecurite"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type AlerteSecuriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeAlerte?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    _count?: Prisma.AlerteSecuriteCountOrderByAggregateInput;
    _avg?: Prisma.AlerteSecuriteAvgOrderByAggregateInput;
    _max?: Prisma.AlerteSecuriteMaxOrderByAggregateInput;
    _min?: Prisma.AlerteSecuriteMinOrderByAggregateInput;
    _sum?: Prisma.AlerteSecuriteSumOrderByAggregateInput;
};
export type AlerteSecuriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlerteSecuriteScalarWhereWithAggregatesInput | Prisma.AlerteSecuriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlerteSecuriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlerteSecuriteScalarWhereWithAggregatesInput | Prisma.AlerteSecuriteScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"AlerteSecurite"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"AlerteSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"AlerteSecurite"> | bigint | number;
    typeAlerte?: Prisma.StringWithAggregatesFilter<"AlerteSecurite"> | string;
    niveauRisque?: Prisma.StringWithAggregatesFilter<"AlerteSecurite"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"AlerteSecurite"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"AlerteSecurite"> | number;
    message?: Prisma.StringNullableWithAggregatesFilter<"AlerteSecurite"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"AlerteSecurite"> | string;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"AlerteSecurite"> | Date | string;
};
export type AlerteSecuriteCreateInput = {
    id?: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutAlertesSecuriteInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutAlertesSecuriteInput;
};
export type AlerteSecuriteUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    utilisateurId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutAlertesSecuriteNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutAlertesSecuriteNestedInput;
};
export type AlerteSecuriteUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    utilisateurId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteListRelationFilter = {
    every?: Prisma.AlerteSecuriteWhereInput;
    some?: Prisma.AlerteSecuriteWhereInput;
    none?: Prisma.AlerteSecuriteWhereInput;
};
export type AlerteSecuriteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AlerteSecuriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeAlerte?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type AlerteSecuriteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type AlerteSecuriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeAlerte?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type AlerteSecuriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeAlerte?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type AlerteSecuriteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type AlerteSecuriteCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput> | Prisma.AlerteSecuriteCreateWithoutUtilisateurInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput | Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
};
export type AlerteSecuriteUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput> | Prisma.AlerteSecuriteCreateWithoutUtilisateurInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput | Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
};
export type AlerteSecuriteUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput> | Prisma.AlerteSecuriteCreateWithoutUtilisateurInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput | Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyUtilisateurInputEnvelope;
    set?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    delete?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    update?: Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.AlerteSecuriteUpdateManyWithWhereWithoutUtilisateurInput | Prisma.AlerteSecuriteUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
};
export type AlerteSecuriteUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput> | Prisma.AlerteSecuriteCreateWithoutUtilisateurInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput | Prisma.AlerteSecuriteCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyUtilisateurInputEnvelope;
    set?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    delete?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    update?: Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.AlerteSecuriteUpdateManyWithWhereWithoutUtilisateurInput | Prisma.AlerteSecuriteUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
};
export type AlerteSecuriteCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AlerteSecuriteCreateWithoutCourseInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput | Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyCourseInputEnvelope;
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
};
export type AlerteSecuriteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AlerteSecuriteCreateWithoutCourseInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput | Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyCourseInputEnvelope;
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
};
export type AlerteSecuriteUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AlerteSecuriteCreateWithoutCourseInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput | Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutCourseInput | Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyCourseInputEnvelope;
    set?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    delete?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    update?: Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutCourseInput | Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.AlerteSecuriteUpdateManyWithWhereWithoutCourseInput | Prisma.AlerteSecuriteUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
};
export type AlerteSecuriteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AlerteSecuriteCreateWithoutCourseInput[] | Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput | Prisma.AlerteSecuriteCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutCourseInput | Prisma.AlerteSecuriteUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.AlerteSecuriteCreateManyCourseInputEnvelope;
    set?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    delete?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    connect?: Prisma.AlerteSecuriteWhereUniqueInput | Prisma.AlerteSecuriteWhereUniqueInput[];
    update?: Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutCourseInput | Prisma.AlerteSecuriteUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.AlerteSecuriteUpdateManyWithWhereWithoutCourseInput | Prisma.AlerteSecuriteUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
};
export type AlerteSecuriteCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutAlertesSecuriteInput;
};
export type AlerteSecuriteUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput>;
};
export type AlerteSecuriteCreateManyUtilisateurInputEnvelope = {
    data: Prisma.AlerteSecuriteCreateManyUtilisateurInput | Prisma.AlerteSecuriteCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type AlerteSecuriteUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlerteSecuriteUpdateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedCreateWithoutUtilisateurInput>;
};
export type AlerteSecuriteUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateWithoutUtilisateurInput, Prisma.AlerteSecuriteUncheckedUpdateWithoutUtilisateurInput>;
};
export type AlerteSecuriteUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.AlerteSecuriteScalarWhereInput;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateManyMutationInput, Prisma.AlerteSecuriteUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type AlerteSecuriteScalarWhereInput = {
    AND?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
    OR?: Prisma.AlerteSecuriteScalarWhereInput[];
    NOT?: Prisma.AlerteSecuriteScalarWhereInput | Prisma.AlerteSecuriteScalarWhereInput[];
    id?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"AlerteSecurite"> | bigint | number;
    typeAlerte?: Prisma.StringFilter<"AlerteSecurite"> | string;
    niveauRisque?: Prisma.StringFilter<"AlerteSecurite"> | string;
    latitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    longitude?: Prisma.FloatFilter<"AlerteSecurite"> | number;
    message?: Prisma.StringNullableFilter<"AlerteSecurite"> | string | null;
    statut?: Prisma.StringFilter<"AlerteSecurite"> | string;
    dateCreation?: Prisma.DateTimeFilter<"AlerteSecurite"> | Date | string;
};
export type AlerteSecuriteCreateWithoutCourseInput = {
    id?: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutAlertesSecuriteInput;
};
export type AlerteSecuriteUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteCreateOrConnectWithoutCourseInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput>;
};
export type AlerteSecuriteCreateManyCourseInputEnvelope = {
    data: Prisma.AlerteSecuriteCreateManyCourseInput | Prisma.AlerteSecuriteCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type AlerteSecuriteUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlerteSecuriteUpdateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.AlerteSecuriteCreateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedCreateWithoutCourseInput>;
};
export type AlerteSecuriteUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateWithoutCourseInput, Prisma.AlerteSecuriteUncheckedUpdateWithoutCourseInput>;
};
export type AlerteSecuriteUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.AlerteSecuriteScalarWhereInput;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateManyMutationInput, Prisma.AlerteSecuriteUncheckedUpdateManyWithoutCourseInput>;
};
export type AlerteSecuriteCreateManyUtilisateurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutAlertesSecuriteNestedInput;
};
export type AlerteSecuriteUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteCreateManyCourseInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeAlerte: string;
    niveauRisque: string;
    latitude: number;
    longitude: number;
    message?: string | null;
    statut: string;
    dateCreation?: Date | string;
};
export type AlerteSecuriteUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutAlertesSecuriteNestedInput;
};
export type AlerteSecuriteUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeAlerte?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteSecuriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    utilisateurId?: boolean;
    typeAlerte?: boolean;
    niveauRisque?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    message?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerteSecurite"]>;
export type AlerteSecuriteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    utilisateurId?: boolean;
    typeAlerte?: boolean;
    niveauRisque?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    message?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerteSecurite"]>;
export type AlerteSecuriteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    utilisateurId?: boolean;
    typeAlerte?: boolean;
    niveauRisque?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    message?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerteSecurite"]>;
export type AlerteSecuriteSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    utilisateurId?: boolean;
    typeAlerte?: boolean;
    niveauRisque?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    message?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
};
export type AlerteSecuriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "utilisateurId" | "typeAlerte" | "niveauRisque" | "latitude" | "longitude" | "message" | "statut" | "dateCreation", ExtArgs["result"]["alerteSecurite"]>;
export type AlerteSecuriteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type AlerteSecuriteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type AlerteSecuriteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $AlerteSecuritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AlerteSecurite";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        utilisateurId: bigint;
        typeAlerte: string;
        niveauRisque: string;
        latitude: number;
        longitude: number;
        message: string | null;
        statut: string;
        dateCreation: Date;
    }, ExtArgs["result"]["alerteSecurite"]>;
    composites: {};
};
export type AlerteSecuriteGetPayload<S extends boolean | null | undefined | AlerteSecuriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload, S>;
export type AlerteSecuriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlerteSecuriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlerteSecuriteCountAggregateInputType | true;
};
export interface AlerteSecuriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AlerteSecurite'];
        meta: {
            name: 'AlerteSecurite';
        };
    };
    findUnique<T extends AlerteSecuriteFindUniqueArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AlerteSecuriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AlerteSecuriteFindFirstArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AlerteSecuriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AlerteSecuriteFindManyArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AlerteSecuriteCreateArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteCreateArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AlerteSecuriteCreateManyArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AlerteSecuriteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AlerteSecuriteDeleteArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteDeleteArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AlerteSecuriteUpdateArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteUpdateArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AlerteSecuriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlerteSecuriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AlerteSecuriteUpdateManyArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AlerteSecuriteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AlerteSecuriteUpsertArgs>(args: Prisma.SelectSubset<T, AlerteSecuriteUpsertArgs<ExtArgs>>): Prisma.Prisma__AlerteSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AlerteSecuritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AlerteSecuriteCountArgs>(args?: Prisma.Subset<T, AlerteSecuriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlerteSecuriteCountAggregateOutputType> : number>;
    aggregate<T extends AlerteSecuriteAggregateArgs>(args: Prisma.Subset<T, AlerteSecuriteAggregateArgs>): Prisma.PrismaPromise<GetAlerteSecuriteAggregateType<T>>;
    groupBy<T extends AlerteSecuriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlerteSecuriteGroupByArgs['orderBy'];
    } : {
        orderBy?: AlerteSecuriteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlerteSecuriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerteSecuriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AlerteSecuriteFieldRefs;
}
export interface Prisma__AlerteSecuriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AlerteSecuriteFieldRefs {
    readonly id: Prisma.FieldRef<"AlerteSecurite", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"AlerteSecurite", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"AlerteSecurite", 'BigInt'>;
    readonly typeAlerte: Prisma.FieldRef<"AlerteSecurite", 'String'>;
    readonly niveauRisque: Prisma.FieldRef<"AlerteSecurite", 'String'>;
    readonly latitude: Prisma.FieldRef<"AlerteSecurite", 'Float'>;
    readonly longitude: Prisma.FieldRef<"AlerteSecurite", 'Float'>;
    readonly message: Prisma.FieldRef<"AlerteSecurite", 'String'>;
    readonly statut: Prisma.FieldRef<"AlerteSecurite", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"AlerteSecurite", 'DateTime'>;
}
export type AlerteSecuriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where: Prisma.AlerteSecuriteWhereUniqueInput;
};
export type AlerteSecuriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where: Prisma.AlerteSecuriteWhereUniqueInput;
};
export type AlerteSecuriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AlerteSecuriteWhereInput;
    orderBy?: Prisma.AlerteSecuriteOrderByWithRelationInput | Prisma.AlerteSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlerteSecuriteScalarFieldEnum | Prisma.AlerteSecuriteScalarFieldEnum[];
};
export type AlerteSecuriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AlerteSecuriteWhereInput;
    orderBy?: Prisma.AlerteSecuriteOrderByWithRelationInput | Prisma.AlerteSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlerteSecuriteScalarFieldEnum | Prisma.AlerteSecuriteScalarFieldEnum[];
};
export type AlerteSecuriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AlerteSecuriteWhereInput;
    orderBy?: Prisma.AlerteSecuriteOrderByWithRelationInput | Prisma.AlerteSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlerteSecuriteScalarFieldEnum | Prisma.AlerteSecuriteScalarFieldEnum[];
};
export type AlerteSecuriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlerteSecuriteCreateInput, Prisma.AlerteSecuriteUncheckedCreateInput>;
};
export type AlerteSecuriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AlerteSecuriteCreateManyInput | Prisma.AlerteSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AlerteSecuriteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    data: Prisma.AlerteSecuriteCreateManyInput | Prisma.AlerteSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AlerteSecuriteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AlerteSecuriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateInput, Prisma.AlerteSecuriteUncheckedUpdateInput>;
    where: Prisma.AlerteSecuriteWhereUniqueInput;
};
export type AlerteSecuriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateManyMutationInput, Prisma.AlerteSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.AlerteSecuriteWhereInput;
    limit?: number;
};
export type AlerteSecuriteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlerteSecuriteUpdateManyMutationInput, Prisma.AlerteSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.AlerteSecuriteWhereInput;
    limit?: number;
    include?: Prisma.AlerteSecuriteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AlerteSecuriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where: Prisma.AlerteSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteSecuriteCreateInput, Prisma.AlerteSecuriteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AlerteSecuriteUpdateInput, Prisma.AlerteSecuriteUncheckedUpdateInput>;
};
export type AlerteSecuriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
    where: Prisma.AlerteSecuriteWhereUniqueInput;
};
export type AlerteSecuriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteSecuriteWhereInput;
    limit?: number;
};
export type AlerteSecuriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AlerteSecuriteInclude<ExtArgs> | null;
};
