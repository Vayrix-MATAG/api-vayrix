import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VehiculeModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiculePayload>;
export type AggregateVehicule = {
    _count: VehiculeCountAggregateOutputType | null;
    _avg: VehiculeAvgAggregateOutputType | null;
    _sum: VehiculeSumAggregateOutputType | null;
    _min: VehiculeMinAggregateOutputType | null;
    _max: VehiculeMaxAggregateOutputType | null;
};
export type VehiculeAvgAggregateOutputType = {
    id: number | null;
    chauffeurId: number | null;
    typeVehiculeId: number | null;
    annee: number | null;
};
export type VehiculeSumAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    typeVehiculeId: bigint | null;
    annee: number | null;
};
export type VehiculeMinAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    typeVehiculeId: bigint | null;
    marque: string | null;
    modele: string | null;
    couleur: string | null;
    matricule: string | null;
    annee: number | null;
    statut: string | null;
};
export type VehiculeMaxAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    typeVehiculeId: bigint | null;
    marque: string | null;
    modele: string | null;
    couleur: string | null;
    matricule: string | null;
    annee: number | null;
    statut: string | null;
};
export type VehiculeCountAggregateOutputType = {
    id: number;
    chauffeurId: number;
    typeVehiculeId: number;
    marque: number;
    modele: number;
    couleur: number;
    matricule: number;
    annee: number;
    statut: number;
    _all: number;
};
export type VehiculeAvgAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeVehiculeId?: true;
    annee?: true;
};
export type VehiculeSumAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeVehiculeId?: true;
    annee?: true;
};
export type VehiculeMinAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeVehiculeId?: true;
    marque?: true;
    modele?: true;
    couleur?: true;
    matricule?: true;
    annee?: true;
    statut?: true;
};
export type VehiculeMaxAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeVehiculeId?: true;
    marque?: true;
    modele?: true;
    couleur?: true;
    matricule?: true;
    annee?: true;
    statut?: true;
};
export type VehiculeCountAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeVehiculeId?: true;
    marque?: true;
    modele?: true;
    couleur?: true;
    matricule?: true;
    annee?: true;
    statut?: true;
    _all?: true;
};
export type VehiculeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehiculeCountAggregateInputType;
    _avg?: VehiculeAvgAggregateInputType;
    _sum?: VehiculeSumAggregateInputType;
    _min?: VehiculeMinAggregateInputType;
    _max?: VehiculeMaxAggregateInputType;
};
export type GetVehiculeAggregateType<T extends VehiculeAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehicule[P]> : Prisma.GetScalarType<T[P], AggregateVehicule[P]>;
};
export type VehiculeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithAggregationInput | Prisma.VehiculeOrderByWithAggregationInput[];
    by: Prisma.VehiculeScalarFieldEnum[] | Prisma.VehiculeScalarFieldEnum;
    having?: Prisma.VehiculeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehiculeCountAggregateInputType | true;
    _avg?: VehiculeAvgAggregateInputType;
    _sum?: VehiculeSumAggregateInputType;
    _min?: VehiculeMinAggregateInputType;
    _max?: VehiculeMaxAggregateInputType;
};
export type VehiculeGroupByOutputType = {
    id: bigint;
    chauffeurId: bigint;
    typeVehiculeId: bigint;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    _count: VehiculeCountAggregateOutputType | null;
    _avg: VehiculeAvgAggregateOutputType | null;
    _sum: VehiculeSumAggregateOutputType | null;
    _min: VehiculeMinAggregateOutputType | null;
    _max: VehiculeMaxAggregateOutputType | null;
};
export type GetVehiculeGroupByPayload<T extends VehiculeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehiculeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehiculeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehiculeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehiculeGroupByOutputType[P]>;
}>>;
export type VehiculeWhereInput = {
    AND?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    OR?: Prisma.VehiculeWhereInput[];
    NOT?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    id?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    marque?: Prisma.StringFilter<"Vehicule"> | string;
    modele?: Prisma.StringFilter<"Vehicule"> | string;
    couleur?: Prisma.StringFilter<"Vehicule"> | string;
    matricule?: Prisma.StringFilter<"Vehicule"> | string;
    annee?: Prisma.IntFilter<"Vehicule"> | number;
    statut?: Prisma.StringFilter<"Vehicule"> | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
    typeVehicule?: Prisma.XOR<Prisma.TypeVehiculeScalarRelationFilter, Prisma.TypeVehiculeWhereInput>;
    courses?: Prisma.CourseListRelationFilter;
    documentVehicules?: Prisma.DocumentVehiculeListRelationFilter;
};
export type VehiculeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
    typeVehicule?: Prisma.TypeVehiculeOrderByWithRelationInput;
    courses?: Prisma.CourseOrderByRelationAggregateInput;
    documentVehicules?: Prisma.DocumentVehiculeOrderByRelationAggregateInput;
};
export type VehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    matricule?: string;
    AND?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    OR?: Prisma.VehiculeWhereInput[];
    NOT?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    chauffeurId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    marque?: Prisma.StringFilter<"Vehicule"> | string;
    modele?: Prisma.StringFilter<"Vehicule"> | string;
    couleur?: Prisma.StringFilter<"Vehicule"> | string;
    annee?: Prisma.IntFilter<"Vehicule"> | number;
    statut?: Prisma.StringFilter<"Vehicule"> | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
    typeVehicule?: Prisma.XOR<Prisma.TypeVehiculeScalarRelationFilter, Prisma.TypeVehiculeWhereInput>;
    courses?: Prisma.CourseListRelationFilter;
    documentVehicules?: Prisma.DocumentVehiculeListRelationFilter;
}, "id" | "matricule">;
export type VehiculeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    _count?: Prisma.VehiculeCountOrderByAggregateInput;
    _avg?: Prisma.VehiculeAvgOrderByAggregateInput;
    _max?: Prisma.VehiculeMaxOrderByAggregateInput;
    _min?: Prisma.VehiculeMinOrderByAggregateInput;
    _sum?: Prisma.VehiculeSumOrderByAggregateInput;
};
export type VehiculeScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehiculeScalarWhereWithAggregatesInput | Prisma.VehiculeScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehiculeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehiculeScalarWhereWithAggregatesInput | Prisma.VehiculeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Vehicule"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"Vehicule"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntWithAggregatesFilter<"Vehicule"> | bigint | number;
    marque?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    modele?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    couleur?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    matricule?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    annee?: Prisma.IntWithAggregatesFilter<"Vehicule"> | number;
    statut?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
};
export type VehiculeCreateInput = {
    id?: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutVehiculesInput;
    typeVehicule: Prisma.TypeVehiculeCreateNestedOneWithoutVehiculesInput;
    courses?: Prisma.CourseCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutVehiculesNestedInput;
    typeVehicule?: Prisma.TypeVehiculeUpdateOneRequiredWithoutVehiculesNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeCreateManyInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
};
export type VehiculeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VehiculeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VehiculeListRelationFilter = {
    every?: Prisma.VehiculeWhereInput;
    some?: Prisma.VehiculeWhereInput;
    none?: Prisma.VehiculeWhereInput;
};
export type VehiculeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VehiculeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
};
export type VehiculeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
};
export type VehiculeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
};
export type VehiculeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
};
export type VehiculeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeVehiculeId?: Prisma.SortOrder;
    annee?: Prisma.SortOrder;
};
export type VehiculeScalarRelationFilter = {
    is?: Prisma.VehiculeWhereInput;
    isNot?: Prisma.VehiculeWhereInput;
};
export type VehiculeNullableScalarRelationFilter = {
    is?: Prisma.VehiculeWhereInput | null;
    isNot?: Prisma.VehiculeWhereInput | null;
};
export type VehiculeCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput> | Prisma.VehiculeCreateWithoutChauffeurInput[] | Prisma.VehiculeUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutChauffeurInput | Prisma.VehiculeCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.VehiculeCreateManyChauffeurInputEnvelope;
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
};
export type VehiculeUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput> | Prisma.VehiculeCreateWithoutChauffeurInput[] | Prisma.VehiculeUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutChauffeurInput | Prisma.VehiculeCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.VehiculeCreateManyChauffeurInputEnvelope;
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
};
export type VehiculeUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput> | Prisma.VehiculeCreateWithoutChauffeurInput[] | Prisma.VehiculeUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutChauffeurInput | Prisma.VehiculeCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.VehiculeUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.VehiculeUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.VehiculeCreateManyChauffeurInputEnvelope;
    set?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    disconnect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    delete?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    update?: Prisma.VehiculeUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.VehiculeUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.VehiculeUpdateManyWithWhereWithoutChauffeurInput | Prisma.VehiculeUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
};
export type VehiculeUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput> | Prisma.VehiculeCreateWithoutChauffeurInput[] | Prisma.VehiculeUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutChauffeurInput | Prisma.VehiculeCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.VehiculeUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.VehiculeUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.VehiculeCreateManyChauffeurInputEnvelope;
    set?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    disconnect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    delete?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    update?: Prisma.VehiculeUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.VehiculeUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.VehiculeUpdateManyWithWhereWithoutChauffeurInput | Prisma.VehiculeUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
};
export type VehiculeCreateNestedManyWithoutTypeVehiculeInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput> | Prisma.VehiculeCreateWithoutTypeVehiculeInput[] | Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput | Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput[];
    createMany?: Prisma.VehiculeCreateManyTypeVehiculeInputEnvelope;
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
};
export type VehiculeUncheckedCreateNestedManyWithoutTypeVehiculeInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput> | Prisma.VehiculeCreateWithoutTypeVehiculeInput[] | Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput | Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput[];
    createMany?: Prisma.VehiculeCreateManyTypeVehiculeInputEnvelope;
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
};
export type VehiculeUpdateManyWithoutTypeVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput> | Prisma.VehiculeCreateWithoutTypeVehiculeInput[] | Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput | Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput[];
    upsert?: Prisma.VehiculeUpsertWithWhereUniqueWithoutTypeVehiculeInput | Prisma.VehiculeUpsertWithWhereUniqueWithoutTypeVehiculeInput[];
    createMany?: Prisma.VehiculeCreateManyTypeVehiculeInputEnvelope;
    set?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    disconnect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    delete?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    update?: Prisma.VehiculeUpdateWithWhereUniqueWithoutTypeVehiculeInput | Prisma.VehiculeUpdateWithWhereUniqueWithoutTypeVehiculeInput[];
    updateMany?: Prisma.VehiculeUpdateManyWithWhereWithoutTypeVehiculeInput | Prisma.VehiculeUpdateManyWithWhereWithoutTypeVehiculeInput[];
    deleteMany?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
};
export type VehiculeUncheckedUpdateManyWithoutTypeVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput> | Prisma.VehiculeCreateWithoutTypeVehiculeInput[] | Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput[];
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput | Prisma.VehiculeCreateOrConnectWithoutTypeVehiculeInput[];
    upsert?: Prisma.VehiculeUpsertWithWhereUniqueWithoutTypeVehiculeInput | Prisma.VehiculeUpsertWithWhereUniqueWithoutTypeVehiculeInput[];
    createMany?: Prisma.VehiculeCreateManyTypeVehiculeInputEnvelope;
    set?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    disconnect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    delete?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    connect?: Prisma.VehiculeWhereUniqueInput | Prisma.VehiculeWhereUniqueInput[];
    update?: Prisma.VehiculeUpdateWithWhereUniqueWithoutTypeVehiculeInput | Prisma.VehiculeUpdateWithWhereUniqueWithoutTypeVehiculeInput[];
    updateMany?: Prisma.VehiculeUpdateManyWithWhereWithoutTypeVehiculeInput | Prisma.VehiculeUpdateManyWithWhereWithoutTypeVehiculeInput[];
    deleteMany?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
};
export type VehiculeCreateNestedOneWithoutDocumentVehiculesInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedCreateWithoutDocumentVehiculesInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutDocumentVehiculesInput;
    connect?: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeUpdateOneRequiredWithoutDocumentVehiculesNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedCreateWithoutDocumentVehiculesInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutDocumentVehiculesInput;
    upsert?: Prisma.VehiculeUpsertWithoutDocumentVehiculesInput;
    connect?: Prisma.VehiculeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehiculeUpdateToOneWithWhereWithoutDocumentVehiculesInput, Prisma.VehiculeUpdateWithoutDocumentVehiculesInput>, Prisma.VehiculeUncheckedUpdateWithoutDocumentVehiculesInput>;
};
export type VehiculeCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutCoursesInput, Prisma.VehiculeUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeUpdateOneWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutCoursesInput, Prisma.VehiculeUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.VehiculeUpsertWithoutCoursesInput;
    disconnect?: Prisma.VehiculeWhereInput | boolean;
    delete?: Prisma.VehiculeWhereInput | boolean;
    connect?: Prisma.VehiculeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehiculeUpdateToOneWithWhereWithoutCoursesInput, Prisma.VehiculeUpdateWithoutCoursesInput>, Prisma.VehiculeUncheckedUpdateWithoutCoursesInput>;
};
export type VehiculeCreateWithoutChauffeurInput = {
    id?: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    typeVehicule: Prisma.TypeVehiculeCreateNestedOneWithoutVehiculesInput;
    courses?: Prisma.CourseCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput>;
};
export type VehiculeCreateManyChauffeurInputEnvelope = {
    data: Prisma.VehiculeCreateManyChauffeurInput | Prisma.VehiculeCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type VehiculeUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehiculeUpdateWithoutChauffeurInput, Prisma.VehiculeUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutChauffeurInput, Prisma.VehiculeUncheckedCreateWithoutChauffeurInput>;
};
export type VehiculeUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateWithoutChauffeurInput, Prisma.VehiculeUncheckedUpdateWithoutChauffeurInput>;
};
export type VehiculeUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.VehiculeScalarWhereInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyWithoutChauffeurInput>;
};
export type VehiculeScalarWhereInput = {
    AND?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
    OR?: Prisma.VehiculeScalarWhereInput[];
    NOT?: Prisma.VehiculeScalarWhereInput | Prisma.VehiculeScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    typeVehiculeId?: Prisma.BigIntFilter<"Vehicule"> | bigint | number;
    marque?: Prisma.StringFilter<"Vehicule"> | string;
    modele?: Prisma.StringFilter<"Vehicule"> | string;
    couleur?: Prisma.StringFilter<"Vehicule"> | string;
    matricule?: Prisma.StringFilter<"Vehicule"> | string;
    annee?: Prisma.IntFilter<"Vehicule"> | number;
    statut?: Prisma.StringFilter<"Vehicule"> | string;
};
export type VehiculeCreateWithoutTypeVehiculeInput = {
    id?: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutVehiculesInput;
    courses?: Prisma.CourseCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateWithoutTypeVehiculeInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutVehiculeInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeCreateOrConnectWithoutTypeVehiculeInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput>;
};
export type VehiculeCreateManyTypeVehiculeInputEnvelope = {
    data: Prisma.VehiculeCreateManyTypeVehiculeInput | Prisma.VehiculeCreateManyTypeVehiculeInput[];
    skipDuplicates?: boolean;
};
export type VehiculeUpsertWithWhereUniqueWithoutTypeVehiculeInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehiculeUpdateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedUpdateWithoutTypeVehiculeInput>;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedCreateWithoutTypeVehiculeInput>;
};
export type VehiculeUpdateWithWhereUniqueWithoutTypeVehiculeInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateWithoutTypeVehiculeInput, Prisma.VehiculeUncheckedUpdateWithoutTypeVehiculeInput>;
};
export type VehiculeUpdateManyWithWhereWithoutTypeVehiculeInput = {
    where: Prisma.VehiculeScalarWhereInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyWithoutTypeVehiculeInput>;
};
export type VehiculeCreateWithoutDocumentVehiculesInput = {
    id?: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutVehiculesInput;
    typeVehicule: Prisma.TypeVehiculeCreateNestedOneWithoutVehiculesInput;
    courses?: Prisma.CourseCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateWithoutDocumentVehiculesInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeCreateOrConnectWithoutDocumentVehiculesInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedCreateWithoutDocumentVehiculesInput>;
};
export type VehiculeUpsertWithoutDocumentVehiculesInput = {
    update: Prisma.XOR<Prisma.VehiculeUpdateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedUpdateWithoutDocumentVehiculesInput>;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedCreateWithoutDocumentVehiculesInput>;
    where?: Prisma.VehiculeWhereInput;
};
export type VehiculeUpdateToOneWithWhereWithoutDocumentVehiculesInput = {
    where?: Prisma.VehiculeWhereInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateWithoutDocumentVehiculesInput, Prisma.VehiculeUncheckedUpdateWithoutDocumentVehiculesInput>;
};
export type VehiculeUpdateWithoutDocumentVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutVehiculesNestedInput;
    typeVehicule?: Prisma.TypeVehiculeUpdateOneRequiredWithoutVehiculesNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateWithoutDocumentVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeCreateWithoutCoursesInput = {
    id?: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutVehiculesInput;
    typeVehicule: Prisma.TypeVehiculeCreateNestedOneWithoutVehiculesInput;
    documentVehicules?: Prisma.DocumentVehiculeCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeCreateOrConnectWithoutCoursesInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutCoursesInput, Prisma.VehiculeUncheckedCreateWithoutCoursesInput>;
};
export type VehiculeUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.VehiculeUpdateWithoutCoursesInput, Prisma.VehiculeUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutCoursesInput, Prisma.VehiculeUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.VehiculeWhereInput;
};
export type VehiculeUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.VehiculeWhereInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateWithoutCoursesInput, Prisma.VehiculeUncheckedUpdateWithoutCoursesInput>;
};
export type VehiculeUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutVehiculesNestedInput;
    typeVehicule?: Prisma.TypeVehiculeUpdateOneRequiredWithoutVehiculesNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeCreateManyChauffeurInput = {
    id?: bigint | number;
    typeVehiculeId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
};
export type VehiculeUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    typeVehicule?: Prisma.TypeVehiculeUpdateOneRequiredWithoutVehiculesNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeVehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VehiculeCreateManyTypeVehiculeInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    marque: string;
    modele: string;
    couleur: string;
    matricule: string;
    annee: number;
    statut: string;
};
export type VehiculeUpdateWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutVehiculesNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutVehiculeNestedInput;
    documentVehicules?: Prisma.DocumentVehiculeUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateManyWithoutTypeVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    annee?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VehiculeCountOutputType = {
    courses: number;
    documentVehicules: number;
};
export type VehiculeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | VehiculeCountOutputTypeCountCoursesArgs;
    documentVehicules?: boolean | VehiculeCountOutputTypeCountDocumentVehiculesArgs;
};
export type VehiculeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeCountOutputTypeSelect<ExtArgs> | null;
};
export type VehiculeCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type VehiculeCountOutputTypeCountDocumentVehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVehiculeWhereInput;
};
export type VehiculeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeVehiculeId?: boolean;
    marque?: boolean;
    modele?: boolean;
    couleur?: boolean;
    matricule?: boolean;
    annee?: boolean;
    statut?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
    courses?: boolean | Prisma.Vehicule$coursesArgs<ExtArgs>;
    documentVehicules?: boolean | Prisma.Vehicule$documentVehiculesArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeVehiculeId?: boolean;
    marque?: boolean;
    modele?: boolean;
    couleur?: boolean;
    matricule?: boolean;
    annee?: boolean;
    statut?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeVehiculeId?: boolean;
    marque?: boolean;
    modele?: boolean;
    couleur?: boolean;
    matricule?: boolean;
    annee?: boolean;
    statut?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectScalar = {
    id?: boolean;
    chauffeurId?: boolean;
    typeVehiculeId?: boolean;
    marque?: boolean;
    modele?: boolean;
    couleur?: boolean;
    matricule?: boolean;
    annee?: boolean;
    statut?: boolean;
};
export type VehiculeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chauffeurId" | "typeVehiculeId" | "marque" | "modele" | "couleur" | "matricule" | "annee" | "statut", ExtArgs["result"]["vehicule"]>;
export type VehiculeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
    courses?: boolean | Prisma.Vehicule$coursesArgs<ExtArgs>;
    documentVehicules?: boolean | Prisma.Vehicule$documentVehiculesArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehiculeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
};
export type VehiculeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
    typeVehicule?: boolean | Prisma.TypeVehiculeDefaultArgs<ExtArgs>;
};
export type $VehiculePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehicule";
    objects: {
        chauffeur: Prisma.$ChauffeurPayload<ExtArgs>;
        typeVehicule: Prisma.$TypeVehiculePayload<ExtArgs>;
        courses: Prisma.$CoursePayload<ExtArgs>[];
        documentVehicules: Prisma.$DocumentVehiculePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        chauffeurId: bigint;
        typeVehiculeId: bigint;
        marque: string;
        modele: string;
        couleur: string;
        matricule: string;
        annee: number;
        statut: string;
    }, ExtArgs["result"]["vehicule"]>;
    composites: {};
};
export type VehiculeGetPayload<S extends boolean | null | undefined | VehiculeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiculePayload, S>;
export type VehiculeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehiculeCountAggregateInputType | true;
};
export interface VehiculeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehicule'];
        meta: {
            name: 'Vehicule';
        };
    };
    findUnique<T extends VehiculeFindUniqueArgs>(args: Prisma.SelectSubset<T, VehiculeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehiculeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehiculeFindFirstArgs>(args?: Prisma.SelectSubset<T, VehiculeFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehiculeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehiculeFindManyArgs>(args?: Prisma.SelectSubset<T, VehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehiculeCreateArgs>(args: Prisma.SelectSubset<T, VehiculeCreateArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehiculeCreateManyArgs>(args?: Prisma.SelectSubset<T, VehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehiculeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehiculeDeleteArgs>(args: Prisma.SelectSubset<T, VehiculeDeleteArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehiculeUpdateArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehiculeDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehiculeUpdateManyArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehiculeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehiculeUpsertArgs>(args: Prisma.SelectSubset<T, VehiculeUpsertArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehiculeCountArgs>(args?: Prisma.Subset<T, VehiculeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehiculeCountAggregateOutputType> : number>;
    aggregate<T extends VehiculeAggregateArgs>(args: Prisma.Subset<T, VehiculeAggregateArgs>): Prisma.PrismaPromise<GetVehiculeAggregateType<T>>;
    groupBy<T extends VehiculeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehiculeGroupByArgs['orderBy'];
    } : {
        orderBy?: VehiculeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehiculeFieldRefs;
}
export interface Prisma__VehiculeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    typeVehicule<T extends Prisma.TypeVehiculeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeVehiculeDefaultArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    courses<T extends Prisma.Vehicule$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicule$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documentVehicules<T extends Prisma.Vehicule$documentVehiculesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicule$documentVehiculesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehiculeFieldRefs {
    readonly id: Prisma.FieldRef<"Vehicule", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"Vehicule", 'BigInt'>;
    readonly typeVehiculeId: Prisma.FieldRef<"Vehicule", 'BigInt'>;
    readonly marque: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly modele: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly couleur: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly matricule: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly annee: Prisma.FieldRef<"Vehicule", 'Int'>;
    readonly statut: Prisma.FieldRef<"Vehicule", 'String'>;
}
export type VehiculeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehiculeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehiculeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehiculeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeCreateInput, Prisma.VehiculeUncheckedCreateInput>;
};
export type VehiculeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehiculeCreateManyInput | Prisma.VehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehiculeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    data: Prisma.VehiculeCreateManyInput | Prisma.VehiculeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VehiculeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VehiculeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeUpdateInput, Prisma.VehiculeUncheckedUpdateInput>;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyInput>;
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
};
export type VehiculeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyInput>;
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
    include?: Prisma.VehiculeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VehiculeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateInput, Prisma.VehiculeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehiculeUpdateInput, Prisma.VehiculeUncheckedUpdateInput>;
};
export type VehiculeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
};
export type Vehicule$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Vehicule$documentVehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithRelationInput | Prisma.DocumentVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVehiculeScalarFieldEnum | Prisma.DocumentVehiculeScalarFieldEnum[];
};
export type VehiculeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
};
