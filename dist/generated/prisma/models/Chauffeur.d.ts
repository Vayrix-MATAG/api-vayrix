import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChauffeurModel = runtime.Types.Result.DefaultSelection<Prisma.$ChauffeurPayload>;
export type AggregateChauffeur = {
    _count: ChauffeurCountAggregateOutputType | null;
    _avg: ChauffeurAvgAggregateOutputType | null;
    _sum: ChauffeurSumAggregateOutputType | null;
    _min: ChauffeurMinAggregateOutputType | null;
    _max: ChauffeurMaxAggregateOutputType | null;
};
export type ChauffeurAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
    solde: runtime.Decimal | null;
};
export type ChauffeurSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    solde: runtime.Decimal | null;
};
export type ChauffeurMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    numeroPermis: string | null;
    estEnLigne: boolean | null;
    solde: runtime.Decimal | null;
    statut: string | null;
    motifStatut: string | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type ChauffeurMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    numeroPermis: string | null;
    estEnLigne: boolean | null;
    solde: runtime.Decimal | null;
    statut: string | null;
    motifStatut: string | null;
    dateCreation: Date | null;
    dateModification: Date | null;
};
export type ChauffeurCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    numeroPermis: number;
    estEnLigne: number;
    solde: number;
    statut: number;
    motifStatut: number;
    dateCreation: number;
    dateModification: number;
    _all: number;
};
export type ChauffeurAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    solde?: true;
};
export type ChauffeurSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    solde?: true;
};
export type ChauffeurMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    numeroPermis?: true;
    estEnLigne?: true;
    solde?: true;
    statut?: true;
    motifStatut?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type ChauffeurMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    numeroPermis?: true;
    estEnLigne?: true;
    solde?: true;
    statut?: true;
    motifStatut?: true;
    dateCreation?: true;
    dateModification?: true;
};
export type ChauffeurCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    numeroPermis?: true;
    estEnLigne?: true;
    solde?: true;
    statut?: true;
    motifStatut?: true;
    dateCreation?: true;
    dateModification?: true;
    _all?: true;
};
export type ChauffeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChauffeurCountAggregateInputType;
    _avg?: ChauffeurAvgAggregateInputType;
    _sum?: ChauffeurSumAggregateInputType;
    _min?: ChauffeurMinAggregateInputType;
    _max?: ChauffeurMaxAggregateInputType;
};
export type GetChauffeurAggregateType<T extends ChauffeurAggregateArgs> = {
    [P in keyof T & keyof AggregateChauffeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChauffeur[P]> : Prisma.GetScalarType<T[P], AggregateChauffeur[P]>;
};
export type ChauffeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithAggregationInput | Prisma.ChauffeurOrderByWithAggregationInput[];
    by: Prisma.ChauffeurScalarFieldEnum[] | Prisma.ChauffeurScalarFieldEnum;
    having?: Prisma.ChauffeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChauffeurCountAggregateInputType | true;
    _avg?: ChauffeurAvgAggregateInputType;
    _sum?: ChauffeurSumAggregateInputType;
    _min?: ChauffeurMinAggregateInputType;
    _max?: ChauffeurMaxAggregateInputType;
};
export type ChauffeurGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    numeroPermis: string;
    estEnLigne: boolean;
    solde: runtime.Decimal;
    statut: string;
    motifStatut: string | null;
    dateCreation: Date;
    dateModification: Date;
    _count: ChauffeurCountAggregateOutputType | null;
    _avg: ChauffeurAvgAggregateOutputType | null;
    _sum: ChauffeurSumAggregateOutputType | null;
    _min: ChauffeurMinAggregateOutputType | null;
    _max: ChauffeurMaxAggregateOutputType | null;
};
export type GetChauffeurGroupByPayload<T extends ChauffeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChauffeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChauffeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChauffeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChauffeurGroupByOutputType[P]>;
}>>;
export type ChauffeurWhereInput = {
    AND?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    OR?: Prisma.ChauffeurWhereInput[];
    NOT?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    id?: Prisma.BigIntFilter<"Chauffeur"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Chauffeur"> | bigint | number;
    numeroPermis?: Prisma.StringFilter<"Chauffeur"> | string;
    estEnLigne?: Prisma.BoolFilter<"Chauffeur"> | boolean;
    solde?: Prisma.DecimalFilter<"Chauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"Chauffeur"> | string;
    motifStatut?: Prisma.StringNullableFilter<"Chauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"Chauffeur"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"Chauffeur"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    vehicules?: Prisma.VehiculeListRelationFilter;
    documentChauffeurs?: Prisma.DocumentChauffeurListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
    propositionPrix?: Prisma.PropositionPrixListRelationFilter;
    positionChauffeurs?: Prisma.PositionChauffeurListRelationFilter;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurListRelationFilter;
    evaluationsClient?: Prisma.EvaluationClientListRelationFilter;
};
export type ChauffeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    numeroPermis?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifStatut?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    vehicules?: Prisma.VehiculeOrderByRelationAggregateInput;
    documentChauffeurs?: Prisma.DocumentChauffeurOrderByRelationAggregateInput;
    courses?: Prisma.CourseOrderByRelationAggregateInput;
    propositionPrix?: Prisma.PropositionPrixOrderByRelationAggregateInput;
    positionChauffeurs?: Prisma.PositionChauffeurOrderByRelationAggregateInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurOrderByRelationAggregateInput;
    evaluationsClient?: Prisma.EvaluationClientOrderByRelationAggregateInput;
};
export type ChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    utilisateurId?: bigint | number;
    AND?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    OR?: Prisma.ChauffeurWhereInput[];
    NOT?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    numeroPermis?: Prisma.StringFilter<"Chauffeur"> | string;
    estEnLigne?: Prisma.BoolFilter<"Chauffeur"> | boolean;
    solde?: Prisma.DecimalFilter<"Chauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"Chauffeur"> | string;
    motifStatut?: Prisma.StringNullableFilter<"Chauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeFilter<"Chauffeur"> | Date | string;
    dateModification?: Prisma.DateTimeFilter<"Chauffeur"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    vehicules?: Prisma.VehiculeListRelationFilter;
    documentChauffeurs?: Prisma.DocumentChauffeurListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
    propositionPrix?: Prisma.PropositionPrixListRelationFilter;
    positionChauffeurs?: Prisma.PositionChauffeurListRelationFilter;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurListRelationFilter;
    evaluationsClient?: Prisma.EvaluationClientListRelationFilter;
}, "id" | "utilisateurId">;
export type ChauffeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    numeroPermis?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifStatut?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
    _count?: Prisma.ChauffeurCountOrderByAggregateInput;
    _avg?: Prisma.ChauffeurAvgOrderByAggregateInput;
    _max?: Prisma.ChauffeurMaxOrderByAggregateInput;
    _min?: Prisma.ChauffeurMinOrderByAggregateInput;
    _sum?: Prisma.ChauffeurSumOrderByAggregateInput;
};
export type ChauffeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChauffeurScalarWhereWithAggregatesInput | Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChauffeurScalarWhereWithAggregatesInput | Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Chauffeur"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Chauffeur"> | bigint | number;
    numeroPermis?: Prisma.StringWithAggregatesFilter<"Chauffeur"> | string;
    estEnLigne?: Prisma.BoolWithAggregatesFilter<"Chauffeur"> | boolean;
    solde?: Prisma.DecimalWithAggregatesFilter<"Chauffeur"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringWithAggregatesFilter<"Chauffeur"> | string;
    motifStatut?: Prisma.StringNullableWithAggregatesFilter<"Chauffeur"> | string | null;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"Chauffeur"> | Date | string;
    dateModification?: Prisma.DateTimeWithAggregatesFilter<"Chauffeur"> | Date | string;
};
export type ChauffeurCreateInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
};
export type ChauffeurUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChauffeurUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChauffeurNullableScalarRelationFilter = {
    is?: Prisma.ChauffeurWhereInput | null;
    isNot?: Prisma.ChauffeurWhereInput | null;
};
export type ChauffeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    numeroPermis?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifStatut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type ChauffeurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
};
export type ChauffeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    numeroPermis?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifStatut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type ChauffeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    numeroPermis?: Prisma.SortOrder;
    estEnLigne?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    motifStatut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateModification?: Prisma.SortOrder;
};
export type ChauffeurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    solde?: Prisma.SortOrder;
};
export type ChauffeurScalarRelationFilter = {
    is?: Prisma.ChauffeurWhereInput;
    isNot?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUncheckedCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ChauffeurUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ChauffeurWhereInput | boolean;
    delete?: Prisma.ChauffeurWhereInput | boolean;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ChauffeurUpdateWithoutUtilisateurInput>, Prisma.ChauffeurUncheckedUpdateWithoutUtilisateurInput>;
};
export type ChauffeurUncheckedUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ChauffeurUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ChauffeurWhereInput | boolean;
    delete?: Prisma.ChauffeurWhereInput | boolean;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ChauffeurUpdateWithoutUtilisateurInput>, Prisma.ChauffeurUncheckedUpdateWithoutUtilisateurInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ChauffeurCreateNestedOneWithoutVehiculesInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutVehiculesInput, Prisma.ChauffeurUncheckedCreateWithoutVehiculesInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutVehiculesInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutVehiculesNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutVehiculesInput, Prisma.ChauffeurUncheckedCreateWithoutVehiculesInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutVehiculesInput;
    upsert?: Prisma.ChauffeurUpsertWithoutVehiculesInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutVehiculesInput, Prisma.ChauffeurUpdateWithoutVehiculesInput>, Prisma.ChauffeurUncheckedUpdateWithoutVehiculesInput>;
};
export type ChauffeurCreateNestedOneWithoutDocumentChauffeursInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutDocumentChauffeursInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutDocumentChauffeursInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutDocumentChauffeursNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutDocumentChauffeursInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutDocumentChauffeursInput;
    upsert?: Prisma.ChauffeurUpsertWithoutDocumentChauffeursInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutDocumentChauffeursInput, Prisma.ChauffeurUpdateWithoutDocumentChauffeursInput>, Prisma.ChauffeurUncheckedUpdateWithoutDocumentChauffeursInput>;
};
export type ChauffeurCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutCoursesInput, Prisma.ChauffeurUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutCoursesInput, Prisma.ChauffeurUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.ChauffeurUpsertWithoutCoursesInput;
    disconnect?: Prisma.ChauffeurWhereInput | boolean;
    delete?: Prisma.ChauffeurWhereInput | boolean;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutCoursesInput, Prisma.ChauffeurUpdateWithoutCoursesInput>, Prisma.ChauffeurUncheckedUpdateWithoutCoursesInput>;
};
export type ChauffeurCreateNestedOneWithoutPropositionPrixInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedCreateWithoutPropositionPrixInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutPropositionPrixInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutPropositionPrixNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedCreateWithoutPropositionPrixInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutPropositionPrixInput;
    upsert?: Prisma.ChauffeurUpsertWithoutPropositionPrixInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutPropositionPrixInput, Prisma.ChauffeurUpdateWithoutPropositionPrixInput>, Prisma.ChauffeurUncheckedUpdateWithoutPropositionPrixInput>;
};
export type ChauffeurCreateNestedOneWithoutPositionChauffeursInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutPositionChauffeursInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutPositionChauffeursInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutPositionChauffeursNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutPositionChauffeursInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutPositionChauffeursInput;
    upsert?: Prisma.ChauffeurUpsertWithoutPositionChauffeursInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutPositionChauffeursInput, Prisma.ChauffeurUpdateWithoutPositionChauffeursInput>, Prisma.ChauffeurUncheckedUpdateWithoutPositionChauffeursInput>;
};
export type ChauffeurCreateNestedOneWithoutEvaluationsChauffeurInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsChauffeurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutEvaluationsChauffeurInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutEvaluationsChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsChauffeurInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutEvaluationsChauffeurInput;
    upsert?: Prisma.ChauffeurUpsertWithoutEvaluationsChauffeurInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUpdateWithoutEvaluationsChauffeurInput>, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsChauffeurInput>;
};
export type ChauffeurCreateNestedOneWithoutEvaluationsClientInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsClientInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutEvaluationsClientInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutEvaluationsClientNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsClientInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutEvaluationsClientInput;
    upsert?: Prisma.ChauffeurUpsertWithoutEvaluationsClientInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutEvaluationsClientInput, Prisma.ChauffeurUpdateWithoutEvaluationsClientInput>, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsClientInput>;
};
export type ChauffeurCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
};
export type ChauffeurUpsertWithoutUtilisateurInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedCreateWithoutUtilisateurInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutUtilisateurInput, Prisma.ChauffeurUncheckedUpdateWithoutUtilisateurInput>;
};
export type ChauffeurUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutVehiculesInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutVehiculesInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutVehiculesInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutVehiculesInput, Prisma.ChauffeurUncheckedCreateWithoutVehiculesInput>;
};
export type ChauffeurUpsertWithoutVehiculesInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutVehiculesInput, Prisma.ChauffeurUncheckedUpdateWithoutVehiculesInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutVehiculesInput, Prisma.ChauffeurUncheckedCreateWithoutVehiculesInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutVehiculesInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutVehiculesInput, Prisma.ChauffeurUncheckedUpdateWithoutVehiculesInput>;
};
export type ChauffeurUpdateWithoutVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutDocumentChauffeursInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutDocumentChauffeursInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutDocumentChauffeursInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutDocumentChauffeursInput>;
};
export type ChauffeurUpsertWithoutDocumentChauffeursInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedUpdateWithoutDocumentChauffeursInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutDocumentChauffeursInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutDocumentChauffeursInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutDocumentChauffeursInput, Prisma.ChauffeurUncheckedUpdateWithoutDocumentChauffeursInput>;
};
export type ChauffeurUpdateWithoutDocumentChauffeursInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutDocumentChauffeursInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutCoursesInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutCoursesInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutCoursesInput, Prisma.ChauffeurUncheckedCreateWithoutCoursesInput>;
};
export type ChauffeurUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutCoursesInput, Prisma.ChauffeurUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutCoursesInput, Prisma.ChauffeurUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutCoursesInput, Prisma.ChauffeurUncheckedUpdateWithoutCoursesInput>;
};
export type ChauffeurUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutPropositionPrixInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutPropositionPrixInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutPropositionPrixInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedCreateWithoutPropositionPrixInput>;
};
export type ChauffeurUpsertWithoutPropositionPrixInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedUpdateWithoutPropositionPrixInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedCreateWithoutPropositionPrixInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutPropositionPrixInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutPropositionPrixInput, Prisma.ChauffeurUncheckedUpdateWithoutPropositionPrixInput>;
};
export type ChauffeurUpdateWithoutPropositionPrixInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutPropositionPrixInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutPositionChauffeursInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutPositionChauffeursInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutPositionChauffeursInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutPositionChauffeursInput>;
};
export type ChauffeurUpsertWithoutPositionChauffeursInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedUpdateWithoutPositionChauffeursInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedCreateWithoutPositionChauffeursInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutPositionChauffeursInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutPositionChauffeursInput, Prisma.ChauffeurUncheckedUpdateWithoutPositionChauffeursInput>;
};
export type ChauffeurUpdateWithoutPositionChauffeursInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutPositionChauffeursInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutEvaluationsChauffeurInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutEvaluationsChauffeurInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutEvaluationsChauffeurInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsChauffeurInput>;
};
export type ChauffeurUpsertWithoutEvaluationsChauffeurInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsChauffeurInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsChauffeurInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutEvaluationsChauffeurInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutEvaluationsChauffeurInput, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsChauffeurInput>;
};
export type ChauffeurUpdateWithoutEvaluationsChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutEvaluationsChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsClient?: Prisma.EvaluationClientUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateWithoutEvaluationsClientInput = {
    id?: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutChauffeurInput;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateWithoutEvaluationsClientInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    numeroPermis: string;
    estEnLigne?: boolean;
    solde?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    motifStatut?: string | null;
    dateCreation?: Date | string;
    dateModification?: Date | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutChauffeurInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutChauffeurInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedCreateNestedManyWithoutChauffeurInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurCreateOrConnectWithoutEvaluationsClientInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsClientInput>;
};
export type ChauffeurUpsertWithoutEvaluationsClientInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsClientInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedCreateWithoutEvaluationsClientInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutEvaluationsClientInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutEvaluationsClientInput, Prisma.ChauffeurUncheckedUpdateWithoutEvaluationsClientInput>;
};
export type ChauffeurUpdateWithoutEvaluationsClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutChauffeurNestedInput;
    vehicules?: Prisma.VehiculeUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateWithoutEvaluationsClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numeroPermis?: Prisma.StringFieldUpdateOperationsInput | string;
    estEnLigne?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    solde?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    motifStatut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateModification?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput;
    documentChauffeurs?: Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutChauffeurNestedInput;
    propositionPrix?: Prisma.PropositionPrixUncheckedUpdateManyWithoutChauffeurNestedInput;
    positionChauffeurs?: Prisma.PositionChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
    evaluationsChauffeur?: Prisma.EvaluationChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCountOutputType = {
    vehicules: number;
    documentChauffeurs: number;
    courses: number;
    propositionPrix: number;
    positionChauffeurs: number;
    evaluationsChauffeur: number;
    evaluationsClient: number;
};
export type ChauffeurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicules?: boolean | ChauffeurCountOutputTypeCountVehiculesArgs;
    documentChauffeurs?: boolean | ChauffeurCountOutputTypeCountDocumentChauffeursArgs;
    courses?: boolean | ChauffeurCountOutputTypeCountCoursesArgs;
    propositionPrix?: boolean | ChauffeurCountOutputTypeCountPropositionPrixArgs;
    positionChauffeurs?: boolean | ChauffeurCountOutputTypeCountPositionChauffeursArgs;
    evaluationsChauffeur?: boolean | ChauffeurCountOutputTypeCountEvaluationsChauffeurArgs;
    evaluationsClient?: boolean | ChauffeurCountOutputTypeCountEvaluationsClientArgs;
};
export type ChauffeurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurCountOutputTypeSelect<ExtArgs> | null;
};
export type ChauffeurCountOutputTypeCountVehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
};
export type ChauffeurCountOutputTypeCountDocumentChauffeursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChauffeurWhereInput;
};
export type ChauffeurCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type ChauffeurCountOutputTypeCountPropositionPrixArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropositionPrixWhereInput;
};
export type ChauffeurCountOutputTypeCountPositionChauffeursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionChauffeurWhereInput;
};
export type ChauffeurCountOutputTypeCountEvaluationsChauffeurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationChauffeurWhereInput;
};
export type ChauffeurCountOutputTypeCountEvaluationsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationClientWhereInput;
};
export type ChauffeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    numeroPermis?: boolean;
    estEnLigne?: boolean;
    solde?: boolean;
    statut?: boolean;
    motifStatut?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    vehicules?: boolean | Prisma.Chauffeur$vehiculesArgs<ExtArgs>;
    documentChauffeurs?: boolean | Prisma.Chauffeur$documentChauffeursArgs<ExtArgs>;
    courses?: boolean | Prisma.Chauffeur$coursesArgs<ExtArgs>;
    propositionPrix?: boolean | Prisma.Chauffeur$propositionPrixArgs<ExtArgs>;
    positionChauffeurs?: boolean | Prisma.Chauffeur$positionChauffeursArgs<ExtArgs>;
    evaluationsChauffeur?: boolean | Prisma.Chauffeur$evaluationsChauffeurArgs<ExtArgs>;
    evaluationsClient?: boolean | Prisma.Chauffeur$evaluationsClientArgs<ExtArgs>;
    _count?: boolean | Prisma.ChauffeurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    numeroPermis?: boolean;
    estEnLigne?: boolean;
    solde?: boolean;
    statut?: boolean;
    motifStatut?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    numeroPermis?: boolean;
    estEnLigne?: boolean;
    solde?: boolean;
    statut?: boolean;
    motifStatut?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    numeroPermis?: boolean;
    estEnLigne?: boolean;
    solde?: boolean;
    statut?: boolean;
    motifStatut?: boolean;
    dateCreation?: boolean;
    dateModification?: boolean;
};
export type ChauffeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "numeroPermis" | "estEnLigne" | "solde" | "statut" | "motifStatut" | "dateCreation" | "dateModification", ExtArgs["result"]["chauffeur"]>;
export type ChauffeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    vehicules?: boolean | Prisma.Chauffeur$vehiculesArgs<ExtArgs>;
    documentChauffeurs?: boolean | Prisma.Chauffeur$documentChauffeursArgs<ExtArgs>;
    courses?: boolean | Prisma.Chauffeur$coursesArgs<ExtArgs>;
    propositionPrix?: boolean | Prisma.Chauffeur$propositionPrixArgs<ExtArgs>;
    positionChauffeurs?: boolean | Prisma.Chauffeur$positionChauffeursArgs<ExtArgs>;
    evaluationsChauffeur?: boolean | Prisma.Chauffeur$evaluationsChauffeurArgs<ExtArgs>;
    evaluationsClient?: boolean | Prisma.Chauffeur$evaluationsClientArgs<ExtArgs>;
    _count?: boolean | Prisma.ChauffeurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChauffeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type ChauffeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $ChauffeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chauffeur";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
        vehicules: Prisma.$VehiculePayload<ExtArgs>[];
        documentChauffeurs: Prisma.$DocumentChauffeurPayload<ExtArgs>[];
        courses: Prisma.$CoursePayload<ExtArgs>[];
        propositionPrix: Prisma.$PropositionPrixPayload<ExtArgs>[];
        positionChauffeurs: Prisma.$PositionChauffeurPayload<ExtArgs>[];
        evaluationsChauffeur: Prisma.$EvaluationChauffeurPayload<ExtArgs>[];
        evaluationsClient: Prisma.$EvaluationClientPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        numeroPermis: string;
        estEnLigne: boolean;
        solde: runtime.Decimal;
        statut: string;
        motifStatut: string | null;
        dateCreation: Date;
        dateModification: Date;
    }, ExtArgs["result"]["chauffeur"]>;
    composites: {};
};
export type ChauffeurGetPayload<S extends boolean | null | undefined | ChauffeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload, S>;
export type ChauffeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChauffeurCountAggregateInputType | true;
};
export interface ChauffeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chauffeur'];
        meta: {
            name: 'Chauffeur';
        };
    };
    findUnique<T extends ChauffeurFindUniqueArgs>(args: Prisma.SelectSubset<T, ChauffeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChauffeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChauffeurFindFirstArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChauffeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChauffeurFindManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChauffeurCreateArgs>(args: Prisma.SelectSubset<T, ChauffeurCreateArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChauffeurCreateManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChauffeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChauffeurDeleteArgs>(args: Prisma.SelectSubset<T, ChauffeurDeleteArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChauffeurUpdateArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChauffeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChauffeurUpdateManyArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChauffeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChauffeurUpsertArgs>(args: Prisma.SelectSubset<T, ChauffeurUpsertArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChauffeurCountArgs>(args?: Prisma.Subset<T, ChauffeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChauffeurCountAggregateOutputType> : number>;
    aggregate<T extends ChauffeurAggregateArgs>(args: Prisma.Subset<T, ChauffeurAggregateArgs>): Prisma.PrismaPromise<GetChauffeurAggregateType<T>>;
    groupBy<T extends ChauffeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChauffeurGroupByArgs['orderBy'];
    } : {
        orderBy?: ChauffeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChauffeurFieldRefs;
}
export interface Prisma__ChauffeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vehicules<T extends Prisma.Chauffeur$vehiculesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$vehiculesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documentChauffeurs<T extends Prisma.Chauffeur$documentChauffeursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$documentChauffeursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courses<T extends Prisma.Chauffeur$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    propositionPrix<T extends Prisma.Chauffeur$propositionPrixArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$propositionPrixArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropositionPrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    positionChauffeurs<T extends Prisma.Chauffeur$positionChauffeursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$positionChauffeursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsChauffeur<T extends Prisma.Chauffeur$evaluationsChauffeurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$evaluationsChauffeurArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsClient<T extends Prisma.Chauffeur$evaluationsClientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$evaluationsClientArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChauffeurFieldRefs {
    readonly id: Prisma.FieldRef<"Chauffeur", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Chauffeur", 'BigInt'>;
    readonly numeroPermis: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly estEnLigne: Prisma.FieldRef<"Chauffeur", 'Boolean'>;
    readonly solde: Prisma.FieldRef<"Chauffeur", 'Decimal'>;
    readonly statut: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly motifStatut: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"Chauffeur", 'DateTime'>;
    readonly dateModification: Prisma.FieldRef<"Chauffeur", 'DateTime'>;
}
export type ChauffeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurCreateInput, Prisma.ChauffeurUncheckedCreateInput>;
};
export type ChauffeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChauffeurCreateManyInput | Prisma.ChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChauffeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    data: Prisma.ChauffeurCreateManyInput | Prisma.ChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChauffeurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChauffeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurUpdateInput, Prisma.ChauffeurUncheckedUpdateInput>;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChauffeurUpdateManyMutationInput, Prisma.ChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
};
export type ChauffeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurUpdateManyMutationInput, Prisma.ChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
    include?: Prisma.ChauffeurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChauffeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateInput, Prisma.ChauffeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChauffeurUpdateInput, Prisma.ChauffeurUncheckedUpdateInput>;
};
export type ChauffeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
};
export type Chauffeur$vehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculeScalarFieldEnum | Prisma.VehiculeScalarFieldEnum[];
};
export type Chauffeur$documentChauffeursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithRelationInput | Prisma.DocumentChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChauffeurScalarFieldEnum | Prisma.DocumentChauffeurScalarFieldEnum[];
};
export type Chauffeur$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type Chauffeur$propositionPrixArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Chauffeur$positionChauffeursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Chauffeur$evaluationsChauffeurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Chauffeur$evaluationsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChauffeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
};
