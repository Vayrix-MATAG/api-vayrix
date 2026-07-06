import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DemandePartageCourseModel = runtime.Types.Result.DefaultSelection<Prisma.$DemandePartageCoursePayload>;
export type AggregateDemandePartageCourse = {
    _count: DemandePartageCourseCountAggregateOutputType | null;
    _avg: DemandePartageCourseAvgAggregateOutputType | null;
    _sum: DemandePartageCourseSumAggregateOutputType | null;
    _min: DemandePartageCourseMinAggregateOutputType | null;
    _max: DemandePartageCourseMaxAggregateOutputType | null;
};
export type DemandePartageCourseAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    clientDemandeurId: number | null;
    latitudeArrivee: number | null;
    longitudeArrivee: number | null;
    latitudeDepart: number | null;
    longitudeDepart: number | null;
    prixCalcule: runtime.Decimal | null;
};
export type DemandePartageCourseSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientDemandeurId: bigint | null;
    latitudeArrivee: number | null;
    longitudeArrivee: number | null;
    latitudeDepart: number | null;
    longitudeDepart: number | null;
    prixCalcule: runtime.Decimal | null;
};
export type DemandePartageCourseMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientDemandeurId: bigint | null;
    adresseDepart: string | null;
    adresseArrivee: string | null;
    latitudeArrivee: number | null;
    longitudeArrivee: number | null;
    latitudeDepart: number | null;
    longitudeDepart: number | null;
    prixCalcule: runtime.Decimal | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type DemandePartageCourseMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    clientDemandeurId: bigint | null;
    adresseDepart: string | null;
    adresseArrivee: string | null;
    latitudeArrivee: number | null;
    longitudeArrivee: number | null;
    latitudeDepart: number | null;
    longitudeDepart: number | null;
    prixCalcule: runtime.Decimal | null;
    statut: string | null;
    dateCreation: Date | null;
};
export type DemandePartageCourseCountAggregateOutputType = {
    id: number;
    courseId: number;
    clientDemandeurId: number;
    adresseDepart: number;
    adresseArrivee: number;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: number;
    statut: number;
    dateCreation: number;
    _all: number;
};
export type DemandePartageCourseAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    clientDemandeurId?: true;
    latitudeArrivee?: true;
    longitudeArrivee?: true;
    latitudeDepart?: true;
    longitudeDepart?: true;
    prixCalcule?: true;
};
export type DemandePartageCourseSumAggregateInputType = {
    id?: true;
    courseId?: true;
    clientDemandeurId?: true;
    latitudeArrivee?: true;
    longitudeArrivee?: true;
    latitudeDepart?: true;
    longitudeDepart?: true;
    prixCalcule?: true;
};
export type DemandePartageCourseMinAggregateInputType = {
    id?: true;
    courseId?: true;
    clientDemandeurId?: true;
    adresseDepart?: true;
    adresseArrivee?: true;
    latitudeArrivee?: true;
    longitudeArrivee?: true;
    latitudeDepart?: true;
    longitudeDepart?: true;
    prixCalcule?: true;
    statut?: true;
    dateCreation?: true;
};
export type DemandePartageCourseMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    clientDemandeurId?: true;
    adresseDepart?: true;
    adresseArrivee?: true;
    latitudeArrivee?: true;
    longitudeArrivee?: true;
    latitudeDepart?: true;
    longitudeDepart?: true;
    prixCalcule?: true;
    statut?: true;
    dateCreation?: true;
};
export type DemandePartageCourseCountAggregateInputType = {
    id?: true;
    courseId?: true;
    clientDemandeurId?: true;
    adresseDepart?: true;
    adresseArrivee?: true;
    latitudeArrivee?: true;
    longitudeArrivee?: true;
    latitudeDepart?: true;
    longitudeDepart?: true;
    prixCalcule?: true;
    statut?: true;
    dateCreation?: true;
    _all?: true;
};
export type DemandePartageCourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandePartageCourseWhereInput;
    orderBy?: Prisma.DemandePartageCourseOrderByWithRelationInput | Prisma.DemandePartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.DemandePartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DemandePartageCourseCountAggregateInputType;
    _avg?: DemandePartageCourseAvgAggregateInputType;
    _sum?: DemandePartageCourseSumAggregateInputType;
    _min?: DemandePartageCourseMinAggregateInputType;
    _max?: DemandePartageCourseMaxAggregateInputType;
};
export type GetDemandePartageCourseAggregateType<T extends DemandePartageCourseAggregateArgs> = {
    [P in keyof T & keyof AggregateDemandePartageCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDemandePartageCourse[P]> : Prisma.GetScalarType<T[P], AggregateDemandePartageCourse[P]>;
};
export type DemandePartageCourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandePartageCourseWhereInput;
    orderBy?: Prisma.DemandePartageCourseOrderByWithAggregationInput | Prisma.DemandePartageCourseOrderByWithAggregationInput[];
    by: Prisma.DemandePartageCourseScalarFieldEnum[] | Prisma.DemandePartageCourseScalarFieldEnum;
    having?: Prisma.DemandePartageCourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DemandePartageCourseCountAggregateInputType | true;
    _avg?: DemandePartageCourseAvgAggregateInputType;
    _sum?: DemandePartageCourseSumAggregateInputType;
    _min?: DemandePartageCourseMinAggregateInputType;
    _max?: DemandePartageCourseMaxAggregateInputType;
};
export type DemandePartageCourseGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    clientDemandeurId: bigint;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal;
    statut: string;
    dateCreation: Date;
    _count: DemandePartageCourseCountAggregateOutputType | null;
    _avg: DemandePartageCourseAvgAggregateOutputType | null;
    _sum: DemandePartageCourseSumAggregateOutputType | null;
    _min: DemandePartageCourseMinAggregateOutputType | null;
    _max: DemandePartageCourseMaxAggregateOutputType | null;
};
export type GetDemandePartageCourseGroupByPayload<T extends DemandePartageCourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DemandePartageCourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DemandePartageCourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DemandePartageCourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DemandePartageCourseGroupByOutputType[P]>;
}>>;
export type DemandePartageCourseWhereInput = {
    AND?: Prisma.DemandePartageCourseWhereInput | Prisma.DemandePartageCourseWhereInput[];
    OR?: Prisma.DemandePartageCourseWhereInput[];
    NOT?: Prisma.DemandePartageCourseWhereInput | Prisma.DemandePartageCourseWhereInput[];
    id?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    clientDemandeurId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    adresseDepart?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    adresseArrivee?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    latitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    latitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    prixCalcule?: Prisma.DecimalFilter<"DemandePartageCourse"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    dateCreation?: Prisma.DateTimeFilter<"DemandePartageCourse"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    clientDemandeur?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type DemandePartageCourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    adresseDepart?: Prisma.SortOrder;
    adresseArrivee?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    clientDemandeur?: Prisma.ClientOrderByWithRelationInput;
};
export type DemandePartageCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.DemandePartageCourseWhereInput | Prisma.DemandePartageCourseWhereInput[];
    OR?: Prisma.DemandePartageCourseWhereInput[];
    NOT?: Prisma.DemandePartageCourseWhereInput | Prisma.DemandePartageCourseWhereInput[];
    courseId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    clientDemandeurId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    adresseDepart?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    adresseArrivee?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    latitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    latitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    prixCalcule?: Prisma.DecimalFilter<"DemandePartageCourse"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    dateCreation?: Prisma.DateTimeFilter<"DemandePartageCourse"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    clientDemandeur?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id">;
export type DemandePartageCourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    adresseDepart?: Prisma.SortOrder;
    adresseArrivee?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    _count?: Prisma.DemandePartageCourseCountOrderByAggregateInput;
    _avg?: Prisma.DemandePartageCourseAvgOrderByAggregateInput;
    _max?: Prisma.DemandePartageCourseMaxOrderByAggregateInput;
    _min?: Prisma.DemandePartageCourseMinOrderByAggregateInput;
    _sum?: Prisma.DemandePartageCourseSumOrderByAggregateInput;
};
export type DemandePartageCourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.DemandePartageCourseScalarWhereWithAggregatesInput | Prisma.DemandePartageCourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.DemandePartageCourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DemandePartageCourseScalarWhereWithAggregatesInput | Prisma.DemandePartageCourseScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"DemandePartageCourse"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"DemandePartageCourse"> | bigint | number;
    clientDemandeurId?: Prisma.BigIntWithAggregatesFilter<"DemandePartageCourse"> | bigint | number;
    adresseDepart?: Prisma.StringWithAggregatesFilter<"DemandePartageCourse"> | string;
    adresseArrivee?: Prisma.StringWithAggregatesFilter<"DemandePartageCourse"> | string;
    latitudeArrivee?: Prisma.FloatWithAggregatesFilter<"DemandePartageCourse"> | number;
    longitudeArrivee?: Prisma.FloatWithAggregatesFilter<"DemandePartageCourse"> | number;
    latitudeDepart?: Prisma.FloatWithAggregatesFilter<"DemandePartageCourse"> | number;
    longitudeDepart?: Prisma.FloatWithAggregatesFilter<"DemandePartageCourse"> | number;
    prixCalcule?: Prisma.DecimalWithAggregatesFilter<"DemandePartageCourse"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringWithAggregatesFilter<"DemandePartageCourse"> | string;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"DemandePartageCourse"> | Date | string;
};
export type DemandePartageCourseCreateInput = {
    id?: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutDemandePartageCoursesInput;
    clientDemandeur: Prisma.ClientCreateNestedOneWithoutDemandePartageCoursesInput;
};
export type DemandePartageCourseUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientDemandeurId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutDemandePartageCoursesNestedInput;
    clientDemandeur?: Prisma.ClientUpdateOneRequiredWithoutDemandePartageCoursesNestedInput;
};
export type DemandePartageCourseUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientDemandeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    clientDemandeurId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientDemandeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseListRelationFilter = {
    every?: Prisma.DemandePartageCourseWhereInput;
    some?: Prisma.DemandePartageCourseWhereInput;
    none?: Prisma.DemandePartageCourseWhereInput;
};
export type DemandePartageCourseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DemandePartageCourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    adresseDepart?: Prisma.SortOrder;
    adresseArrivee?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type DemandePartageCourseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
};
export type DemandePartageCourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    adresseDepart?: Prisma.SortOrder;
    adresseArrivee?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type DemandePartageCourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    adresseDepart?: Prisma.SortOrder;
    adresseArrivee?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
};
export type DemandePartageCourseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    clientDemandeurId?: Prisma.SortOrder;
    latitudeArrivee?: Prisma.SortOrder;
    longitudeArrivee?: Prisma.SortOrder;
    latitudeDepart?: Prisma.SortOrder;
    longitudeDepart?: Prisma.SortOrder;
    prixCalcule?: Prisma.SortOrder;
};
export type DemandePartageCourseCreateNestedManyWithoutClientDemandeurInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput> | Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput | Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyClientDemandeurInputEnvelope;
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
};
export type DemandePartageCourseUncheckedCreateNestedManyWithoutClientDemandeurInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput> | Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput | Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyClientDemandeurInputEnvelope;
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
};
export type DemandePartageCourseUpdateManyWithoutClientDemandeurNestedInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput> | Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput | Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput[];
    upsert?: Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutClientDemandeurInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyClientDemandeurInputEnvelope;
    set?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    disconnect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    delete?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    update?: Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutClientDemandeurInput[];
    updateMany?: Prisma.DemandePartageCourseUpdateManyWithWhereWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpdateManyWithWhereWithoutClientDemandeurInput[];
    deleteMany?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
};
export type DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurNestedInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput> | Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput | Prisma.DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput[];
    upsert?: Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutClientDemandeurInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyClientDemandeurInputEnvelope;
    set?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    disconnect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    delete?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    update?: Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutClientDemandeurInput[];
    updateMany?: Prisma.DemandePartageCourseUpdateManyWithWhereWithoutClientDemandeurInput | Prisma.DemandePartageCourseUpdateManyWithWhereWithoutClientDemandeurInput[];
    deleteMany?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
};
export type DemandePartageCourseCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput> | Prisma.DemandePartageCourseCreateWithoutCourseInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput | Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyCourseInputEnvelope;
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
};
export type DemandePartageCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput> | Prisma.DemandePartageCourseCreateWithoutCourseInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput | Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyCourseInputEnvelope;
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
};
export type DemandePartageCourseUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput> | Prisma.DemandePartageCourseCreateWithoutCourseInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput | Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutCourseInput | Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyCourseInputEnvelope;
    set?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    disconnect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    delete?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    update?: Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutCourseInput | Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.DemandePartageCourseUpdateManyWithWhereWithoutCourseInput | Prisma.DemandePartageCourseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
};
export type DemandePartageCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput> | Prisma.DemandePartageCourseCreateWithoutCourseInput[] | Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput | Prisma.DemandePartageCourseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutCourseInput | Prisma.DemandePartageCourseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.DemandePartageCourseCreateManyCourseInputEnvelope;
    set?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    disconnect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    delete?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    connect?: Prisma.DemandePartageCourseWhereUniqueInput | Prisma.DemandePartageCourseWhereUniqueInput[];
    update?: Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutCourseInput | Prisma.DemandePartageCourseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.DemandePartageCourseUpdateManyWithWhereWithoutCourseInput | Prisma.DemandePartageCourseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
};
export type DemandePartageCourseCreateWithoutClientDemandeurInput = {
    id?: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutDemandePartageCoursesInput;
};
export type DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseCreateOrConnectWithoutClientDemandeurInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput>;
};
export type DemandePartageCourseCreateManyClientDemandeurInputEnvelope = {
    data: Prisma.DemandePartageCourseCreateManyClientDemandeurInput | Prisma.DemandePartageCourseCreateManyClientDemandeurInput[];
    skipDuplicates?: boolean;
};
export type DemandePartageCourseUpsertWithWhereUniqueWithoutClientDemandeurInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.DemandePartageCourseUpdateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedUpdateWithoutClientDemandeurInput>;
    create: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedCreateWithoutClientDemandeurInput>;
};
export type DemandePartageCourseUpdateWithWhereUniqueWithoutClientDemandeurInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateWithoutClientDemandeurInput, Prisma.DemandePartageCourseUncheckedUpdateWithoutClientDemandeurInput>;
};
export type DemandePartageCourseUpdateManyWithWhereWithoutClientDemandeurInput = {
    where: Prisma.DemandePartageCourseScalarWhereInput;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateManyMutationInput, Prisma.DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurInput>;
};
export type DemandePartageCourseScalarWhereInput = {
    AND?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
    OR?: Prisma.DemandePartageCourseScalarWhereInput[];
    NOT?: Prisma.DemandePartageCourseScalarWhereInput | Prisma.DemandePartageCourseScalarWhereInput[];
    id?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    clientDemandeurId?: Prisma.BigIntFilter<"DemandePartageCourse"> | bigint | number;
    adresseDepart?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    adresseArrivee?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    latitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeArrivee?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    latitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    longitudeDepart?: Prisma.FloatFilter<"DemandePartageCourse"> | number;
    prixCalcule?: Prisma.DecimalFilter<"DemandePartageCourse"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFilter<"DemandePartageCourse"> | string;
    dateCreation?: Prisma.DateTimeFilter<"DemandePartageCourse"> | Date | string;
};
export type DemandePartageCourseCreateWithoutCourseInput = {
    id?: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
    clientDemandeur: Prisma.ClientCreateNestedOneWithoutDemandePartageCoursesInput;
};
export type DemandePartageCourseUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    clientDemandeurId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseCreateOrConnectWithoutCourseInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput>;
};
export type DemandePartageCourseCreateManyCourseInputEnvelope = {
    data: Prisma.DemandePartageCourseCreateManyCourseInput | Prisma.DemandePartageCourseCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type DemandePartageCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.DemandePartageCourseUpdateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.DemandePartageCourseCreateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedCreateWithoutCourseInput>;
};
export type DemandePartageCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateWithoutCourseInput, Prisma.DemandePartageCourseUncheckedUpdateWithoutCourseInput>;
};
export type DemandePartageCourseUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.DemandePartageCourseScalarWhereInput;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateManyMutationInput, Prisma.DemandePartageCourseUncheckedUpdateManyWithoutCourseInput>;
};
export type DemandePartageCourseCreateManyClientDemandeurInput = {
    id?: bigint | number;
    courseId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseUpdateWithoutClientDemandeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutDemandePartageCoursesNestedInput;
};
export type DemandePartageCourseUncheckedUpdateWithoutClientDemandeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseUncheckedUpdateManyWithoutClientDemandeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseCreateManyCourseInput = {
    id?: bigint | number;
    clientDemandeurId: bigint | number;
    adresseDepart: string;
    adresseArrivee: string;
    latitudeArrivee: number;
    longitudeArrivee: number;
    latitudeDepart: number;
    longitudeDepart: number;
    prixCalcule: runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut: string;
    dateCreation?: Date | string;
};
export type DemandePartageCourseUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientDemandeur?: Prisma.ClientUpdateOneRequiredWithoutDemandePartageCoursesNestedInput;
};
export type DemandePartageCourseUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientDemandeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    clientDemandeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresseDepart?: Prisma.StringFieldUpdateOperationsInput | string;
    adresseArrivee?: Prisma.StringFieldUpdateOperationsInput | string;
    latitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeArrivee?: Prisma.FloatFieldUpdateOperationsInput | number;
    latitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitudeDepart?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixCalcule?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandePartageCourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientDemandeurId?: boolean;
    adresseDepart?: boolean;
    adresseArrivee?: boolean;
    latitudeArrivee?: boolean;
    longitudeArrivee?: boolean;
    latitudeDepart?: boolean;
    longitudeDepart?: boolean;
    prixCalcule?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandePartageCourse"]>;
export type DemandePartageCourseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientDemandeurId?: boolean;
    adresseDepart?: boolean;
    adresseArrivee?: boolean;
    latitudeArrivee?: boolean;
    longitudeArrivee?: boolean;
    latitudeDepart?: boolean;
    longitudeDepart?: boolean;
    prixCalcule?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandePartageCourse"]>;
export type DemandePartageCourseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    clientDemandeurId?: boolean;
    adresseDepart?: boolean;
    adresseArrivee?: boolean;
    latitudeArrivee?: boolean;
    longitudeArrivee?: boolean;
    latitudeDepart?: boolean;
    longitudeDepart?: boolean;
    prixCalcule?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandePartageCourse"]>;
export type DemandePartageCourseSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    clientDemandeurId?: boolean;
    adresseDepart?: boolean;
    adresseArrivee?: boolean;
    latitudeArrivee?: boolean;
    longitudeArrivee?: boolean;
    latitudeDepart?: boolean;
    longitudeDepart?: boolean;
    prixCalcule?: boolean;
    statut?: boolean;
    dateCreation?: boolean;
};
export type DemandePartageCourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "clientDemandeurId" | "adresseDepart" | "adresseArrivee" | "latitudeArrivee" | "longitudeArrivee" | "latitudeDepart" | "longitudeDepart" | "prixCalcule" | "statut" | "dateCreation", ExtArgs["result"]["demandePartageCourse"]>;
export type DemandePartageCourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type DemandePartageCourseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type DemandePartageCourseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    clientDemandeur?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $DemandePartageCoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DemandePartageCourse";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        clientDemandeur: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        clientDemandeurId: bigint;
        adresseDepart: string;
        adresseArrivee: string;
        latitudeArrivee: number;
        longitudeArrivee: number;
        latitudeDepart: number;
        longitudeDepart: number;
        prixCalcule: runtime.Decimal;
        statut: string;
        dateCreation: Date;
    }, ExtArgs["result"]["demandePartageCourse"]>;
    composites: {};
};
export type DemandePartageCourseGetPayload<S extends boolean | null | undefined | DemandePartageCourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload, S>;
export type DemandePartageCourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DemandePartageCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DemandePartageCourseCountAggregateInputType | true;
};
export interface DemandePartageCourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DemandePartageCourse'];
        meta: {
            name: 'DemandePartageCourse';
        };
    };
    findUnique<T extends DemandePartageCourseFindUniqueArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DemandePartageCourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DemandePartageCourseFindFirstArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DemandePartageCourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DemandePartageCourseFindManyArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DemandePartageCourseCreateArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseCreateArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DemandePartageCourseCreateManyArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DemandePartageCourseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DemandePartageCourseDeleteArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseDeleteArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DemandePartageCourseUpdateArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseUpdateArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DemandePartageCourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, DemandePartageCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DemandePartageCourseUpdateManyArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DemandePartageCourseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DemandePartageCourseUpsertArgs>(args: Prisma.SelectSubset<T, DemandePartageCourseUpsertArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DemandePartageCourseCountArgs>(args?: Prisma.Subset<T, DemandePartageCourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DemandePartageCourseCountAggregateOutputType> : number>;
    aggregate<T extends DemandePartageCourseAggregateArgs>(args: Prisma.Subset<T, DemandePartageCourseAggregateArgs>): Prisma.PrismaPromise<GetDemandePartageCourseAggregateType<T>>;
    groupBy<T extends DemandePartageCourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DemandePartageCourseGroupByArgs['orderBy'];
    } : {
        orderBy?: DemandePartageCourseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DemandePartageCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandePartageCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DemandePartageCourseFieldRefs;
}
export interface Prisma__DemandePartageCourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    clientDemandeur<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DemandePartageCourseFieldRefs {
    readonly id: Prisma.FieldRef<"DemandePartageCourse", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"DemandePartageCourse", 'BigInt'>;
    readonly clientDemandeurId: Prisma.FieldRef<"DemandePartageCourse", 'BigInt'>;
    readonly adresseDepart: Prisma.FieldRef<"DemandePartageCourse", 'String'>;
    readonly adresseArrivee: Prisma.FieldRef<"DemandePartageCourse", 'String'>;
    readonly latitudeArrivee: Prisma.FieldRef<"DemandePartageCourse", 'Float'>;
    readonly longitudeArrivee: Prisma.FieldRef<"DemandePartageCourse", 'Float'>;
    readonly latitudeDepart: Prisma.FieldRef<"DemandePartageCourse", 'Float'>;
    readonly longitudeDepart: Prisma.FieldRef<"DemandePartageCourse", 'Float'>;
    readonly prixCalcule: Prisma.FieldRef<"DemandePartageCourse", 'Decimal'>;
    readonly statut: Prisma.FieldRef<"DemandePartageCourse", 'String'>;
    readonly dateCreation: Prisma.FieldRef<"DemandePartageCourse", 'DateTime'>;
}
export type DemandePartageCourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    where: Prisma.DemandePartageCourseWhereUniqueInput;
};
export type DemandePartageCourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    where: Prisma.DemandePartageCourseWhereUniqueInput;
};
export type DemandePartageCourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DemandePartageCourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DemandePartageCourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DemandePartageCourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandePartageCourseCreateInput, Prisma.DemandePartageCourseUncheckedCreateInput>;
};
export type DemandePartageCourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DemandePartageCourseCreateManyInput | Prisma.DemandePartageCourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DemandePartageCourseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    data: Prisma.DemandePartageCourseCreateManyInput | Prisma.DemandePartageCourseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DemandePartageCourseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DemandePartageCourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateInput, Prisma.DemandePartageCourseUncheckedUpdateInput>;
    where: Prisma.DemandePartageCourseWhereUniqueInput;
};
export type DemandePartageCourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateManyMutationInput, Prisma.DemandePartageCourseUncheckedUpdateManyInput>;
    where?: Prisma.DemandePartageCourseWhereInput;
    limit?: number;
};
export type DemandePartageCourseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandePartageCourseUpdateManyMutationInput, Prisma.DemandePartageCourseUncheckedUpdateManyInput>;
    where?: Prisma.DemandePartageCourseWhereInput;
    limit?: number;
    include?: Prisma.DemandePartageCourseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DemandePartageCourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    where: Prisma.DemandePartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.DemandePartageCourseCreateInput, Prisma.DemandePartageCourseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DemandePartageCourseUpdateInput, Prisma.DemandePartageCourseUncheckedUpdateInput>;
};
export type DemandePartageCourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
    where: Prisma.DemandePartageCourseWhereUniqueInput;
};
export type DemandePartageCourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandePartageCourseWhereInput;
    limit?: number;
};
export type DemandePartageCourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandePartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.DemandePartageCourseOmit<ExtArgs> | null;
    include?: Prisma.DemandePartageCourseInclude<ExtArgs> | null;
};
