import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientPayload>;
export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type ClientAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type ClientSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type ClientMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    estEnLigne: boolean | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type ClientMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    estEnLigne: boolean | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type ClientCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    estEnLigne: number;
    statut: number;
    dateCreation: number;
    _all: number;
};
export type ClientAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ClientSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ClientMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    estEnLigne?: true;
    statut?: true;
    dateCreation?: true;
};
export type ClientMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    estEnLigne?: true;
    statut?: true;
    dateCreation?: true;
};
export type ClientCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    estEnLigne?: true;
    statut?: true;
    dateCreation?: true;
    _all?: true;
};
export type ClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientCountAggregateInputType;
    _avg?: ClientAvgAggregateInputType;
    _sum?: ClientSumAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClient[P]> : Prisma.GetScalarType<T[P], AggregateClient[P]>;
};
export type ClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithAggregationInput | Prisma.ClientOrderByWithAggregationInput[];
    by: Prisma.ClientScalarFieldEnum[] | Prisma.ClientScalarFieldEnum;
    having?: Prisma.ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _avg?: ClientAvgAggregateInputType;
    _sum?: ClientSumAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type ClientGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    estEnLigne: boolean;
    statut: string;
    dateCreation: Date;
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]>;
}>>;
export type ClientWhereInput = {
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    id?: Prisma.BigIntFilter<"Client"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Client"> | bigint | number;
    estEnLigne?: Prisma.BoolFilter<"Client"> | boolean;
    statut?: Prisma.StringFilter<"Client"> | string;
    dateCreation?: Prisma.DateTimeFilter<"Client"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    contactUrgences?: Prisma.ContactUrgenceListRelationFilter;
    propositionPrix?: Prisma.PropositionPrixListRelationFilter;
    demandePartageCourses?: Prisma.DemandePartageCourseListRelationFilter;
    participantCourses?: Prisma.ParticipantCourseListRelationFilter;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurListRelationFilter;
    evaluationsClient?: Prisma.EvaluationClientListRelationFilter;
};
export type ClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    contactUrgences?: Prisma.ContactUrgenceOrderByRelationAggregateInput;
    propositionPrix?: Prisma.PropositionPrixOrderByRelationAggregateInput;
    demandePartageCourses?: Prisma.DemandePartageCourseOrderByRelationAggregateInput;
    participantCourses?: Prisma.ParticipantCourseOrderByRelationAggregateInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurOrderByRelationAggregateInput;
    evaluationsClient?: Prisma.EvaluationClientOrderByRelationAggregateInput;
};
export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    utilisateurId?: bigint | number;
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    estEnLigne?: Prisma.BoolFilter<"Client"> | boolean;
    statut?: Prisma.StringFilter<"Client"> | string;
    dateCreation?: Prisma.DateTimeFilter<"Client"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    contactUrgences?: Prisma.ContactUrgenceListRelationFilter;
    propositionPrix?: Prisma.PropositionPrixListRelationFilter;
    demandePartageCourses?: Prisma.DemandePartageCourseListRelationFilter;
    participantCourses?: Prisma.ParticipantCourseListRelationFilter;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurListRelationFilter;
    evaluationsClient?: Prisma.EvaluationClientListRelationFilter;
}, "id" | "utilisateurId">;
export type ClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    _count?: Prisma.ClientCountOrderByAggregateInput;
    _avg?: Prisma.ClientAvgOrderByAggregateInput;
    _max?: Prisma.ClientMaxOrderByAggregateInput;
    _min?: Prisma.ClientMinOrderByAggregateInput;
    _sum?: Prisma.ClientSumOrderByAggregateInput;
};
export type ClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Client"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Client"> | bigint | number;
    estEnLigne?: Prisma.BoolWithAggregatesFilter<"Client"> | boolean;
    statut?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
};
export type ClientCreateInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
};
export type ClientUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientNullableScalarRelationFilter = {
    is?: Prisma.ClientWhereInput | null;
    isNot?: Prisma.ClientWhereInput | null;
};
export type ClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type ClientAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type ClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type ClientSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ClientScalarRelationFilter = {
    is?: Prisma.ClientWhereInput;
    isNot?: Prisma.ClientWhereInput;
};
export type ClientCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUncheckedCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ClientUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ClientWhereInput | boolean;
    delete?: Prisma.ClientWhereInput | boolean;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ClientUpdateWithoutUtilisateurInput>, Prisma.ClientUncheckedUpdateWithoutUtilisateurInput>;
};
export type ClientUncheckedUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ClientUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ClientWhereInput | boolean;
    delete?: Prisma.ClientWhereInput | boolean;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ClientUpdateWithoutUtilisateurInput>, Prisma.ClientUncheckedUpdateWithoutUtilisateurInput>;
};
export type ClientCreateNestedOneWithoutContactUrgencesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutContactUrgencesInput, Prisma.ClientUncheckedCreateWithoutContactUrgencesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutContactUrgencesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutContactUrgencesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutContactUrgencesInput, Prisma.ClientUncheckedCreateWithoutContactUrgencesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutContactUrgencesInput;
    upsert?: Prisma.ClientUpsertWithoutContactUrgencesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutContactUrgencesInput, Prisma.ClientUpdateWithoutContactUrgencesInput>, Prisma.ClientUncheckedUpdateWithoutContactUrgencesInput>;
};
export type ClientCreateNestedOneWithoutPropositionPrixInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutPropositionPrixInput, Prisma.ClientUncheckedCreateWithoutPropositionPrixInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutPropositionPrixInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutPropositionPrixNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutPropositionPrixInput, Prisma.ClientUncheckedCreateWithoutPropositionPrixInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutPropositionPrixInput;
    upsert?: Prisma.ClientUpsertWithoutPropositionPrixInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutPropositionPrixInput, Prisma.ClientUpdateWithoutPropositionPrixInput>, Prisma.ClientUncheckedUpdateWithoutPropositionPrixInput>;
};
export type ClientCreateNestedOneWithoutDemandePartageCoursesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedCreateWithoutDemandePartageCoursesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutDemandePartageCoursesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutDemandePartageCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedCreateWithoutDemandePartageCoursesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutDemandePartageCoursesInput;
    upsert?: Prisma.ClientUpsertWithoutDemandePartageCoursesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutDemandePartageCoursesInput, Prisma.ClientUpdateWithoutDemandePartageCoursesInput>, Prisma.ClientUncheckedUpdateWithoutDemandePartageCoursesInput>;
};
export type ClientCreateNestedOneWithoutParticipantCoursesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutParticipantCoursesInput, Prisma.ClientUncheckedCreateWithoutParticipantCoursesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutParticipantCoursesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutParticipantCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutParticipantCoursesInput, Prisma.ClientUncheckedCreateWithoutParticipantCoursesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutParticipantCoursesInput;
    upsert?: Prisma.ClientUpsertWithoutParticipantCoursesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutParticipantCoursesInput, Prisma.ClientUpdateWithoutParticipantCoursesInput>, Prisma.ClientUncheckedUpdateWithoutParticipantCoursesInput>;
};
export type ClientCreateNestedOneWithoutEvaluationsChauffeurInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedCreateWithoutEvaluationsChauffeurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutEvaluationsChauffeurInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedCreateWithoutEvaluationsChauffeurInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutEvaluationsChauffeurInput;
    upsert?: Prisma.ClientUpsertWithoutEvaluationsChauffeurInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutEvaluationsChauffeurInput, Prisma.ClientUpdateWithoutEvaluationsChauffeurInput>, Prisma.ClientUncheckedUpdateWithoutEvaluationsChauffeurInput>;
};
export type ClientCreateNestedOneWithoutEvaluationsClientInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsClientInput, Prisma.ClientUncheckedCreateWithoutEvaluationsClientInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutEvaluationsClientInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutEvaluationsClientNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsClientInput, Prisma.ClientUncheckedCreateWithoutEvaluationsClientInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutEvaluationsClientInput;
    upsert?: Prisma.ClientUpsertWithoutEvaluationsClientInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutEvaluationsClientInput, Prisma.ClientUpdateWithoutEvaluationsClientInput>, Prisma.ClientUncheckedUpdateWithoutEvaluationsClientInput>;
};
export type ClientCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
};
export type ClientUpsertWithoutUtilisateurInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutUtilisateurInput, Prisma.ClientUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutUtilisateurInput, Prisma.ClientUncheckedCreateWithoutUtilisateurInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutUtilisateurInput, Prisma.ClientUncheckedUpdateWithoutUtilisateurInput>;
};
export type ClientUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutContactUrgencesInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutContactUrgencesInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutContactUrgencesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutContactUrgencesInput, Prisma.ClientUncheckedCreateWithoutContactUrgencesInput>;
};
export type ClientUpsertWithoutContactUrgencesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutContactUrgencesInput, Prisma.ClientUncheckedUpdateWithoutContactUrgencesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutContactUrgencesInput, Prisma.ClientUncheckedCreateWithoutContactUrgencesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutContactUrgencesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutContactUrgencesInput, Prisma.ClientUncheckedUpdateWithoutContactUrgencesInput>;
};
export type ClientUpdateWithoutContactUrgencesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutContactUrgencesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutPropositionPrixInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutPropositionPrixInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutPropositionPrixInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutPropositionPrixInput, Prisma.ClientUncheckedCreateWithoutPropositionPrixInput>;
};
export type ClientUpsertWithoutPropositionPrixInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutPropositionPrixInput, Prisma.ClientUncheckedUpdateWithoutPropositionPrixInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutPropositionPrixInput, Prisma.ClientUncheckedCreateWithoutPropositionPrixInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutPropositionPrixInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutPropositionPrixInput, Prisma.ClientUncheckedUpdateWithoutPropositionPrixInput>;
};
export type ClientUpdateWithoutPropositionPrixInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutPropositionPrixInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutDemandePartageCoursesInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutDemandePartageCoursesInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutDemandePartageCoursesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedCreateWithoutDemandePartageCoursesInput>;
};
export type ClientUpsertWithoutDemandePartageCoursesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedUpdateWithoutDemandePartageCoursesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedCreateWithoutDemandePartageCoursesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutDemandePartageCoursesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutDemandePartageCoursesInput, Prisma.ClientUncheckedUpdateWithoutDemandePartageCoursesInput>;
};
export type ClientUpdateWithoutDemandePartageCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutDemandePartageCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutParticipantCoursesInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutParticipantCoursesInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutParticipantCoursesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutParticipantCoursesInput, Prisma.ClientUncheckedCreateWithoutParticipantCoursesInput>;
};
export type ClientUpsertWithoutParticipantCoursesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutParticipantCoursesInput, Prisma.ClientUncheckedUpdateWithoutParticipantCoursesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutParticipantCoursesInput, Prisma.ClientUncheckedCreateWithoutParticipantCoursesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutParticipantCoursesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutParticipantCoursesInput, Prisma.ClientUncheckedUpdateWithoutParticipantCoursesInput>;
};
export type ClientUpdateWithoutParticipantCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutParticipantCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutEvaluationsChauffeurInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutEvaluationsChauffeurInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutEvaluationsChauffeurInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedCreateWithoutEvaluationsChauffeurInput>;
};
export type ClientUpsertWithoutEvaluationsChauffeurInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedUpdateWithoutEvaluationsChauffeurInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedCreateWithoutEvaluationsChauffeurInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutEvaluationsChauffeurInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutEvaluationsChauffeurInput, Prisma.ClientUncheckedUpdateWithoutEvaluationsChauffeurInput>;
};
export type ClientUpdateWithoutEvaluationsChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutEvaluationsChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutEvaluationsClientInput = {
    id?: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutClientInput;
    contactUrgences?: Prisma.ContactUrgenceCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutEvaluationsClientInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    estEnLigne?: boolean;
    statut: string;
    dateCreation?: Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedCreateNestedManyWithoutClientInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutClientInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedCreateNestedManyWithoutClientInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutEvaluationsClientInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsClientInput, Prisma.ClientUncheckedCreateWithoutEvaluationsClientInput>;
};
export type ClientUpsertWithoutEvaluationsClientInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutEvaluationsClientInput, Prisma.ClientUncheckedUpdateWithoutEvaluationsClientInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutEvaluationsClientInput, Prisma.ClientUncheckedCreateWithoutEvaluationsClientInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutEvaluationsClientInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutEvaluationsClientInput, Prisma.ClientUncheckedUpdateWithoutEvaluationsClientInput>;
};
export type ClientUpdateWithoutEvaluationsClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutClientNestedInput;
    contactUrgences?: Prisma.ContactUrgenceUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutEvaluationsClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactUrgences?: Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutClientNestedInput;
    demandePartageCourses?: Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput;
    participantCourses?: Prisma.ParticipantCourseUncheckedUpdateManyWithoutClientNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCountOutputType = {
    contactUrgences: number;
    propositionPrix: number;
    demandePartageCourses: number;
    participantCourses: number;
    evaluationsChauffeur: number;
    evaluationsClient: number;
};
export type ClientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contactUrgences?: boolean | ClientCountOutputTypeCountContactUrgencesArgs;
    propositionPrix?: boolean | ClientCountOutputTypeCountPropositionPrixArgs;
    demandePartageCourses?: boolean | ClientCountOutputTypeCountDemandePartageCoursesArgs;
    participantCourses?: boolean | ClientCountOutputTypeCountParticipantCoursesArgs;
    evaluationsChauffeur?: boolean | ClientCountOutputTypeCountEvaluationsChauffeurArgs;
    evaluationsClient?: boolean | ClientCountOutputTypeCountEvaluationsClientArgs;
};
export type ClientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientCountOutputTypeCountContactUrgencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactUrgenceWhereInput;
};
export type ClientCountOutputTypeCountPropositionPrixArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropositionPrixWhereInput;
};
export type ClientCountOutputTypeCountDemandePartageCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandePartageCourseWhereInput;
};
export type ClientCountOutputTypeCountParticipantCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantCourseWhereInput;
};
export type ClientCountOutputTypeCountEvaluationsChauffeurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationChauffeurWhereInput;
};
export type ClientCountOutputTypeCountEvaluationsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationClientWhereInput;
};
export type ClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    estEnLigne?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    contactUrgences?: boolean | Prisma.Client$contactUrgencesArgs<ExtArgs>;
    propositionPrix?: boolean | Prisma.Client$propositionPrixArgs<ExtArgs>;
    demandePartageCourses?: boolean | Prisma.Client$demandePartageCoursesArgs<ExtArgs>;
    participantCourses?: boolean | Prisma.Client$participantCoursesArgs<ExtArgs>;
    evaluationsChauffeur?: boolean | Prisma.Client$evaluationsChauffeurArgs<ExtArgs>;
    evaluationsClient?: boolean | Prisma.Client$evaluationsClientArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    estEnLigne?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    estEnLigne?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    estEnLigne?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
};
export type ClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "estEnLigne" | "statut" | "dateCreation", ExtArgs["result"]["client"]>;
export type ClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    contactUrgences?: boolean | Prisma.Client$contactUrgencesArgs<ExtArgs>;
    propositionPrix?: boolean | Prisma.Client$propositionPrixArgs<ExtArgs>;
    demandePartageCourses?: boolean | Prisma.Client$demandePartageCoursesArgs<ExtArgs>;
    participantCourses?: boolean | Prisma.Client$participantCoursesArgs<ExtArgs>;
    evaluationsChauffeur?: boolean | Prisma.Client$evaluationsChauffeurArgs<ExtArgs>;
    evaluationsClient?: boolean | Prisma.Client$evaluationsClientArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type ClientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $ClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Client";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
        contactUrgences: Prisma.$ContactUrgencePayload<ExtArgs>[];
        propositionPrix: Prisma.$PropositionPrixPayload<ExtArgs>[];
        demandePartageCourses: Prisma.$DemandePartageCoursePayload<ExtArgs>[];
        participantCourses: Prisma.$ParticipantCoursePayload<ExtArgs>[];
        evaluationsChauffeur: Prisma.$EvaluationChauffeurPayload<ExtArgs>[];
        evaluationsClient: Prisma.$EvaluationClientPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        estEnLigne: boolean;
        statut: string;
        dateCreation: Date;
    }, ExtArgs["result"]["client"]>;
    composites: {};
};
export type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientPayload, S>;
export type ClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
};
export interface ClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Client'];
        meta: {
            name: 'Client';
        };
    };
    findUnique<T extends ClientFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientFindManyArgs>(args?: Prisma.SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientCreateArgs>(args: Prisma.SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientDeleteArgs>(args: Prisma.SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientUpdateArgs>(args: Prisma.SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientUpsertArgs>(args: Prisma.SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientCountArgs>(args?: Prisma.Subset<T, ClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCountAggregateOutputType> : number>;
    aggregate<T extends ClientAggregateArgs>(args: Prisma.Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>;
    groupBy<T extends ClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientFieldRefs;
}
export interface Prisma__ClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contactUrgences<T extends Prisma.Client$contactUrgencesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$contactUrgencesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    propositionPrix<T extends Prisma.Client$propositionPrixArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$propositionPrixArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    demandePartageCourses<T extends Prisma.Client$demandePartageCoursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$demandePartageCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    participantCourses<T extends Prisma.Client$participantCoursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$participantCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsChauffeur<T extends Prisma.Client$evaluationsChauffeurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$evaluationsChauffeurArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsClient<T extends Prisma.Client$evaluationsClientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$evaluationsClientArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientFieldRefs {
    readonly id: Prisma.FieldRef<"Client", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Client", 'BigInt'>;
    readonly estEnLigne: Prisma.FieldRef<"Client", 'Boolean'>;
    readonly statut: Prisma.FieldRef<"Client", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"Client", 'DateTime'>;
}
export type ClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type ClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
};
export type ClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type ClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    where?: Prisma.ClientWhereInput;
    limit?: number;
    include?: Prisma.ClientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
};
export type ClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where: Prisma.ClientWhereUniqueInput;
};
export type ClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    limit?: number;
};
export type Client$contactUrgencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    where?: Prisma.ContactUrgenceWhereInput;
    orderBy?: Prisma.ContactUrgenceOrderByWithRelationInput | Prisma.ContactUrgenceOrderByWithRelationInput[];
    cursor?: Prisma.ContactUrgenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactUrgenceScalarFieldEnum | Prisma.ContactUrgenceScalarFieldEnum[];
};
export type Client$propositionPrixArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Client$demandePartageCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    where?: Prisma.DemandePartageCourseWhereInput;
    orderBy?: Prisma.DemandePartageCourseOrderByWithRelationInput | Prisma.DemandePartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.DemandePartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DemandePartageCourseScalarFieldEnum | Prisma.DemandePartageCourseScalarFieldEnum[];
};
export type Client$participantCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParticipantCourseSelect<ExtArgs> | null;
    omit?: Prisma.ParticipantCourseOmit<ExtArgs> | null;
    include?: Prisma.ParticipantCourseInclude<ExtArgs> | null;
    where?: Prisma.ParticipantCourseWhereInput;
    orderBy?: Prisma.ParticipantCourseOrderByWithRelationInput | Prisma.ParticipantCourseOrderByWithRelationInput[];
    cursor?: Prisma.ParticipantCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParticipantCourseScalarFieldEnum | Prisma.ParticipantCourseScalarFieldEnum[];
};
export type Client$evaluationsChauffeurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Client$evaluationsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
};
