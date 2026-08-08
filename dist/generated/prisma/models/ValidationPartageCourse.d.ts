import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ValidationPartageCourseModel = runtime.Types.Result.DefaultSelection<Prisma.$ValidationPartageCoursePayload>;
export type AggregateValidationPartageCourse = {
    _count: ValidationPartageCourseCountAggregateOutputType | null;
    _avg: ValidationPartageCourseAvgAggregateOutputType | null;
    _sum: ValidationPartageCourseSumAggregateOutputType | null;
    _min: ValidationPartageCourseMinAggregateOutputType | null;
    _max: ValidationPartageCourseMaxAggregateOutputType | null;
};
export type ValidationPartageCourseAvgAggregateOutputType = {
    id: number | null;
    demandePartageId: number | null;
    utilisateurId: number | null;
    courseId: number | null;
};
export type ValidationPartageCourseSumAggregateOutputType = {
    id: bigint | null;
    demandePartageId: bigint | null;
    utilisateurId: bigint | null;
    courseId: bigint | null;
};
export type ValidationPartageCourseMinAggregateOutputType = {
    id: bigint | null;
    demandePartageId: bigint | null;
    utilisateurId: bigint | null;
    typeValidateur: string | null;
    decision: string | null;
    commentaire: string | null;
    dateValidation: Date | null;
    courseId: bigint | null;
};
export type ValidationPartageCourseMaxAggregateOutputType = {
    id: bigint | null;
    demandePartageId: bigint | null;
    utilisateurId: bigint | null;
    typeValidateur: string | null;
    decision: string | null;
    commentaire: string | null;
    dateValidation: Date | null;
    courseId: bigint | null;
};
export type ValidationPartageCourseCountAggregateOutputType = {
    id: number;
    demandePartageId: number;
    utilisateurId: number;
    typeValidateur: number;
    decision: number;
    commentaire: number;
    dateValidation: number;
    courseId: number;
    _all: number;
};
export type ValidationPartageCourseAvgAggregateInputType = {
    id?: true;
    demandePartageId?: true;
    utilisateurId?: true;
    courseId?: true;
};
export type ValidationPartageCourseSumAggregateInputType = {
    id?: true;
    demandePartageId?: true;
    utilisateurId?: true;
    courseId?: true;
};
export type ValidationPartageCourseMinAggregateInputType = {
    id?: true;
    demandePartageId?: true;
    utilisateurId?: true;
    typeValidateur?: true;
    decision?: true;
    commentaire?: true;
    dateValidation?: true;
    courseId?: true;
};
export type ValidationPartageCourseMaxAggregateInputType = {
    id?: true;
    demandePartageId?: true;
    utilisateurId?: true;
    typeValidateur?: true;
    decision?: true;
    commentaire?: true;
    dateValidation?: true;
    courseId?: true;
};
export type ValidationPartageCourseCountAggregateInputType = {
    id?: true;
    demandePartageId?: true;
    utilisateurId?: true;
    typeValidateur?: true;
    decision?: true;
    commentaire?: true;
    dateValidation?: true;
    courseId?: true;
    _all?: true;
};
export type ValidationPartageCourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ValidationPartageCourseWhereInput;
    orderBy?: Prisma.ValidationPartageCourseOrderByWithRelationInput | Prisma.ValidationPartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.ValidationPartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ValidationPartageCourseCountAggregateInputType;
    _avg?: ValidationPartageCourseAvgAggregateInputType;
    _sum?: ValidationPartageCourseSumAggregateInputType;
    _min?: ValidationPartageCourseMinAggregateInputType;
    _max?: ValidationPartageCourseMaxAggregateInputType;
};
export type GetValidationPartageCourseAggregateType<T extends ValidationPartageCourseAggregateArgs> = {
    [P in keyof T & keyof AggregateValidationPartageCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateValidationPartageCourse[P]> : Prisma.GetScalarType<T[P], AggregateValidationPartageCourse[P]>;
};
export type ValidationPartageCourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ValidationPartageCourseWhereInput;
    orderBy?: Prisma.ValidationPartageCourseOrderByWithAggregationInput | Prisma.ValidationPartageCourseOrderByWithAggregationInput[];
    by: Prisma.ValidationPartageCourseScalarFieldEnum[] | Prisma.ValidationPartageCourseScalarFieldEnum;
    having?: Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ValidationPartageCourseCountAggregateInputType | true;
    _avg?: ValidationPartageCourseAvgAggregateInputType;
    _sum?: ValidationPartageCourseSumAggregateInputType;
    _min?: ValidationPartageCourseMinAggregateInputType;
    _max?: ValidationPartageCourseMaxAggregateInputType;
};
export type ValidationPartageCourseGroupByOutputType = {
    id: bigint;
    demandePartageId: bigint;
    utilisateurId: bigint;
    typeValidateur: string;
    decision: string;
    commentaire: string | null;
    dateValidation: Date;
    courseId: bigint | null;
    _count: ValidationPartageCourseCountAggregateOutputType | null;
    _avg: ValidationPartageCourseAvgAggregateOutputType | null;
    _sum: ValidationPartageCourseSumAggregateOutputType | null;
    _min: ValidationPartageCourseMinAggregateOutputType | null;
    _max: ValidationPartageCourseMaxAggregateOutputType | null;
};
export type GetValidationPartageCourseGroupByPayload<T extends ValidationPartageCourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ValidationPartageCourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ValidationPartageCourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ValidationPartageCourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ValidationPartageCourseGroupByOutputType[P]>;
}>>;
export type ValidationPartageCourseWhereInput = {
    AND?: Prisma.ValidationPartageCourseWhereInput | Prisma.ValidationPartageCourseWhereInput[];
    OR?: Prisma.ValidationPartageCourseWhereInput[];
    NOT?: Prisma.ValidationPartageCourseWhereInput | Prisma.ValidationPartageCourseWhereInput[];
    id?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    demandePartageId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    typeValidateur?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    decision?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    commentaire?: Prisma.StringNullableFilter<"ValidationPartageCourse"> | string | null;
    dateValidation?: Prisma.DateTimeFilter<"ValidationPartageCourse"> | Date | string;
    courseId?: Prisma.BigIntNullableFilter<"ValidationPartageCourse"> | bigint | number | null;
    demandePartage?: Prisma.XOR<Prisma.DemandePartageCourseScalarRelationFilter, Prisma.DemandePartageCourseWhereInput>;
    course?: Prisma.XOR<Prisma.CourseNullableScalarRelationFilter, Prisma.CourseWhereInput> | null;
};
export type ValidationPartageCourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeValidateur?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    courseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    demandePartage?: Prisma.DemandePartageCourseOrderByWithRelationInput;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type ValidationPartageCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.ValidationPartageCourseWhereInput | Prisma.ValidationPartageCourseWhereInput[];
    OR?: Prisma.ValidationPartageCourseWhereInput[];
    NOT?: Prisma.ValidationPartageCourseWhereInput | Prisma.ValidationPartageCourseWhereInput[];
    demandePartageId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    typeValidateur?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    decision?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    commentaire?: Prisma.StringNullableFilter<"ValidationPartageCourse"> | string | null;
    dateValidation?: Prisma.DateTimeFilter<"ValidationPartageCourse"> | Date | string;
    courseId?: Prisma.BigIntNullableFilter<"ValidationPartageCourse"> | bigint | number | null;
    demandePartage?: Prisma.XOR<Prisma.DemandePartageCourseScalarRelationFilter, Prisma.DemandePartageCourseWhereInput>;
    course?: Prisma.XOR<Prisma.CourseNullableScalarRelationFilter, Prisma.CourseWhereInput> | null;
}, "id">;
export type ValidationPartageCourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeValidateur?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    courseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ValidationPartageCourseCountOrderByAggregateInput;
    _avg?: Prisma.ValidationPartageCourseAvgOrderByAggregateInput;
    _max?: Prisma.ValidationPartageCourseMaxOrderByAggregateInput;
    _min?: Prisma.ValidationPartageCourseMinOrderByAggregateInput;
    _sum?: Prisma.ValidationPartageCourseSumOrderByAggregateInput;
};
export type ValidationPartageCourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput | Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput | Prisma.ValidationPartageCourseScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"ValidationPartageCourse"> | bigint | number;
    demandePartageId?: Prisma.BigIntWithAggregatesFilter<"ValidationPartageCourse"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"ValidationPartageCourse"> | bigint | number;
    typeValidateur?: Prisma.StringWithAggregatesFilter<"ValidationPartageCourse"> | string;
    decision?: Prisma.StringWithAggregatesFilter<"ValidationPartageCourse"> | string;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"ValidationPartageCourse"> | string | null;
    dateValidation?: Prisma.DateTimeWithAggregatesFilter<"ValidationPartageCourse"> | Date | string;
    courseId?: Prisma.BigIntNullableWithAggregatesFilter<"ValidationPartageCourse"> | bigint | number | null;
};
export type ValidationPartageCourseCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    demandePartage: Prisma.DemandePartageCourseCreateNestedOneWithoutValidationsInput;
    course?: Prisma.CourseCreateNestedOneWithoutValidationsPartageInput;
};
export type ValidationPartageCourseUncheckedCreateInput = {
    id?: bigint | number;
    demandePartageId: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    courseId?: bigint | number | null;
};
export type ValidationPartageCourseUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    demandePartage?: Prisma.DemandePartageCourseUpdateOneRequiredWithoutValidationsNestedInput;
    course?: Prisma.CourseUpdateOneWithoutValidationsPartageNestedInput;
};
export type ValidationPartageCourseUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    demandePartageId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type ValidationPartageCourseCreateManyInput = {
    id?: bigint | number;
    demandePartageId: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    courseId?: bigint | number | null;
};
export type ValidationPartageCourseUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ValidationPartageCourseUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    demandePartageId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type ValidationPartageCourseListRelationFilter = {
    every?: Prisma.ValidationPartageCourseWhereInput;
    some?: Prisma.ValidationPartageCourseWhereInput;
    none?: Prisma.ValidationPartageCourseWhereInput;
};
export type ValidationPartageCourseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ValidationPartageCourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeValidateur?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type ValidationPartageCourseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type ValidationPartageCourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeValidateur?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type ValidationPartageCourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    typeValidateur?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type ValidationPartageCourseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    demandePartageId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type ValidationPartageCourseCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput> | Prisma.ValidationPartageCourseCreateWithoutCourseInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyCourseInputEnvelope;
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
};
export type ValidationPartageCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput> | Prisma.ValidationPartageCourseCreateWithoutCourseInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyCourseInputEnvelope;
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
};
export type ValidationPartageCourseUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput> | Prisma.ValidationPartageCourseCreateWithoutCourseInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutCourseInput | Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyCourseInputEnvelope;
    set?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    disconnect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    delete?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    update?: Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutCourseInput | Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutCourseInput | Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
};
export type ValidationPartageCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput> | Prisma.ValidationPartageCourseCreateWithoutCourseInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutCourseInput | Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyCourseInputEnvelope;
    set?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    disconnect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    delete?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    update?: Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutCourseInput | Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutCourseInput | Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
};
export type ValidationPartageCourseCreateNestedManyWithoutDemandePartageInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput> | Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyDemandePartageInputEnvelope;
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
};
export type ValidationPartageCourseUncheckedCreateNestedManyWithoutDemandePartageInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput> | Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyDemandePartageInputEnvelope;
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
};
export type ValidationPartageCourseUpdateManyWithoutDemandePartageNestedInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput> | Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput[];
    upsert?: Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutDemandePartageInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyDemandePartageInputEnvelope;
    set?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    disconnect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    delete?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    update?: Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutDemandePartageInput[];
    updateMany?: Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutDemandePartageInput[];
    deleteMany?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
};
export type ValidationPartageCourseUncheckedUpdateManyWithoutDemandePartageNestedInput = {
    create?: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput> | Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput[] | Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput[];
    connectOrCreate?: Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput | Prisma.ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput[];
    upsert?: Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpsertWithWhereUniqueWithoutDemandePartageInput[];
    createMany?: Prisma.ValidationPartageCourseCreateManyDemandePartageInputEnvelope;
    set?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    disconnect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    delete?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    connect?: Prisma.ValidationPartageCourseWhereUniqueInput | Prisma.ValidationPartageCourseWhereUniqueInput[];
    update?: Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpdateWithWhereUniqueWithoutDemandePartageInput[];
    updateMany?: Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutDemandePartageInput | Prisma.ValidationPartageCourseUpdateManyWithWhereWithoutDemandePartageInput[];
    deleteMany?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
};
export type ValidationPartageCourseCreateWithoutCourseInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    demandePartage: Prisma.DemandePartageCourseCreateNestedOneWithoutValidationsInput;
};
export type ValidationPartageCourseUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    demandePartageId: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
};
export type ValidationPartageCourseCreateOrConnectWithoutCourseInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput>;
};
export type ValidationPartageCourseCreateManyCourseInputEnvelope = {
    data: Prisma.ValidationPartageCourseCreateManyCourseInput | Prisma.ValidationPartageCourseCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type ValidationPartageCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ValidationPartageCourseUpdateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutCourseInput>;
};
export type ValidationPartageCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateWithoutCourseInput, Prisma.ValidationPartageCourseUncheckedUpdateWithoutCourseInput>;
};
export type ValidationPartageCourseUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.ValidationPartageCourseScalarWhereInput;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateManyMutationInput, Prisma.ValidationPartageCourseUncheckedUpdateManyWithoutCourseInput>;
};
export type ValidationPartageCourseScalarWhereInput = {
    AND?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
    OR?: Prisma.ValidationPartageCourseScalarWhereInput[];
    NOT?: Prisma.ValidationPartageCourseScalarWhereInput | Prisma.ValidationPartageCourseScalarWhereInput[];
    id?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    demandePartageId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ValidationPartageCourse"> | bigint | number;
    typeValidateur?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    decision?: Prisma.StringFilter<"ValidationPartageCourse"> | string;
    commentaire?: Prisma.StringNullableFilter<"ValidationPartageCourse"> | string | null;
    dateValidation?: Prisma.DateTimeFilter<"ValidationPartageCourse"> | Date | string;
    courseId?: Prisma.BigIntNullableFilter<"ValidationPartageCourse"> | bigint | number | null;
};
export type ValidationPartageCourseCreateWithoutDemandePartageInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    course?: Prisma.CourseCreateNestedOneWithoutValidationsPartageInput;
};
export type ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    courseId?: bigint | number | null;
};
export type ValidationPartageCourseCreateOrConnectWithoutDemandePartageInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput>;
};
export type ValidationPartageCourseCreateManyDemandePartageInputEnvelope = {
    data: Prisma.ValidationPartageCourseCreateManyDemandePartageInput | Prisma.ValidationPartageCourseCreateManyDemandePartageInput[];
    skipDuplicates?: boolean;
};
export type ValidationPartageCourseUpsertWithWhereUniqueWithoutDemandePartageInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ValidationPartageCourseUpdateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedUpdateWithoutDemandePartageInput>;
    create: Prisma.XOR<Prisma.ValidationPartageCourseCreateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedCreateWithoutDemandePartageInput>;
};
export type ValidationPartageCourseUpdateWithWhereUniqueWithoutDemandePartageInput = {
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateWithoutDemandePartageInput, Prisma.ValidationPartageCourseUncheckedUpdateWithoutDemandePartageInput>;
};
export type ValidationPartageCourseUpdateManyWithWhereWithoutDemandePartageInput = {
    where: Prisma.ValidationPartageCourseScalarWhereInput;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateManyMutationInput, Prisma.ValidationPartageCourseUncheckedUpdateManyWithoutDemandePartageInput>;
};
export type ValidationPartageCourseCreateManyCourseInput = {
    id?: bigint | number;
    demandePartageId: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
};
export type ValidationPartageCourseUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    demandePartage?: Prisma.DemandePartageCourseUpdateOneRequiredWithoutValidationsNestedInput;
};
export type ValidationPartageCourseUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    demandePartageId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ValidationPartageCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    demandePartageId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ValidationPartageCourseCreateManyDemandePartageInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    typeValidateur: string;
    decision: string;
    commentaire?: string | null;
    dateValidation?: Date | string;
    courseId?: bigint | number | null;
};
export type ValidationPartageCourseUpdateWithoutDemandePartageInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneWithoutValidationsPartageNestedInput;
};
export type ValidationPartageCourseUncheckedUpdateWithoutDemandePartageInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type ValidationPartageCourseUncheckedUpdateManyWithoutDemandePartageInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeValidateur?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    courseId?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type ValidationPartageCourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    demandePartageId?: boolean;
    utilisateurId?: boolean;
    typeValidateur?: boolean;
    decision?: boolean;
    commentaire?: boolean;
    dateValidation?: boolean;
    courseId?: boolean;
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
}, ExtArgs["result"]["validationPartageCourse"]>;
export type ValidationPartageCourseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    demandePartageId?: boolean;
    utilisateurId?: boolean;
    typeValidateur?: boolean;
    decision?: boolean;
    commentaire?: boolean;
    dateValidation?: boolean;
    courseId?: boolean;
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
}, ExtArgs["result"]["validationPartageCourse"]>;
export type ValidationPartageCourseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    demandePartageId?: boolean;
    utilisateurId?: boolean;
    typeValidateur?: boolean;
    decision?: boolean;
    commentaire?: boolean;
    dateValidation?: boolean;
    courseId?: boolean;
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
}, ExtArgs["result"]["validationPartageCourse"]>;
export type ValidationPartageCourseSelectScalar = {
    id?: boolean;
    demandePartageId?: boolean;
    utilisateurId?: boolean;
    typeValidateur?: boolean;
    decision?: boolean;
    commentaire?: boolean;
    dateValidation?: boolean;
    courseId?: boolean;
};
export type ValidationPartageCourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "demandePartageId" | "utilisateurId" | "typeValidateur" | "decision" | "commentaire" | "dateValidation" | "courseId", ExtArgs["result"]["validationPartageCourse"]>;
export type ValidationPartageCourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
};
export type ValidationPartageCourseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
};
export type ValidationPartageCourseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    demandePartage?: boolean | Prisma.DemandePartageCourseDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.ValidationPartageCourse$courseArgs<ExtArgs>;
};
export type $ValidationPartageCoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ValidationPartageCourse";
    objects: {
        demandePartage: Prisma.$DemandePartageCoursePayload<ExtArgs>;
        course: Prisma.$CoursePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        demandePartageId: bigint;
        utilisateurId: bigint;
        typeValidateur: string;
        decision: string;
        commentaire: string | null;
        dateValidation: Date;
        courseId: bigint | null;
    }, ExtArgs["result"]["validationPartageCourse"]>;
    composites: {};
};
export type ValidationPartageCourseGetPayload<S extends boolean | null | undefined | ValidationPartageCourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload, S>;
export type ValidationPartageCourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ValidationPartageCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ValidationPartageCourseCountAggregateInputType | true;
};
export interface ValidationPartageCourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ValidationPartageCourse'];
        meta: {
            name: 'ValidationPartageCourse';
        };
    };
    findUnique<T extends ValidationPartageCourseFindUniqueArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ValidationPartageCourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ValidationPartageCourseFindFirstArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ValidationPartageCourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ValidationPartageCourseFindManyArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ValidationPartageCourseCreateArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseCreateArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ValidationPartageCourseCreateManyArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ValidationPartageCourseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ValidationPartageCourseDeleteArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseDeleteArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ValidationPartageCourseUpdateArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseUpdateArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ValidationPartageCourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ValidationPartageCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ValidationPartageCourseUpdateManyArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ValidationPartageCourseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ValidationPartageCourseUpsertArgs>(args: Prisma.SelectSubset<T, ValidationPartageCourseUpsertArgs<ExtArgs>>): Prisma.Prisma__ValidationPartageCourseClient<runtime.Types.Result.GetResult<Prisma.$ValidationPartageCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ValidationPartageCourseCountArgs>(args?: Prisma.Subset<T, ValidationPartageCourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ValidationPartageCourseCountAggregateOutputType> : number>;
    aggregate<T extends ValidationPartageCourseAggregateArgs>(args: Prisma.Subset<T, ValidationPartageCourseAggregateArgs>): Prisma.PrismaPromise<GetValidationPartageCourseAggregateType<T>>;
    groupBy<T extends ValidationPartageCourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ValidationPartageCourseGroupByArgs['orderBy'];
    } : {
        orderBy?: ValidationPartageCourseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ValidationPartageCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidationPartageCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ValidationPartageCourseFieldRefs;
}
export interface Prisma__ValidationPartageCourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    demandePartage<T extends Prisma.DemandePartageCourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DemandePartageCourseDefaultArgs<ExtArgs>>): Prisma.Prisma__DemandePartageCourseClient<runtime.Types.Result.GetResult<Prisma.$DemandePartageCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.ValidationPartageCourse$courseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ValidationPartageCourse$courseArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ValidationPartageCourseFieldRefs {
    readonly id: Prisma.FieldRef<"ValidationPartageCourse", 'BigInt'>;
    readonly demandePartageId: Prisma.FieldRef<"ValidationPartageCourse", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"ValidationPartageCourse", 'BigInt'>;
    readonly typeValidateur: Prisma.FieldRef<"ValidationPartageCourse", 'String'>;
    readonly decision: Prisma.FieldRef<"ValidationPartageCourse", 'String'>;
    readonly commentaire: Prisma.FieldRef<"ValidationPartageCourse", 'String'>;
    readonly dateValidation: Prisma.FieldRef<"ValidationPartageCourse", 'DateTime'>;
    readonly courseId: Prisma.FieldRef<"ValidationPartageCourse", 'BigInt'>;
}
export type ValidationPartageCourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
};
export type ValidationPartageCourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
};
export type ValidationPartageCourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where?: Prisma.ValidationPartageCourseWhereInput;
    orderBy?: Prisma.ValidationPartageCourseOrderByWithRelationInput | Prisma.ValidationPartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.ValidationPartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ValidationPartageCourseScalarFieldEnum | Prisma.ValidationPartageCourseScalarFieldEnum[];
};
export type ValidationPartageCourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where?: Prisma.ValidationPartageCourseWhereInput;
    orderBy?: Prisma.ValidationPartageCourseOrderByWithRelationInput | Prisma.ValidationPartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.ValidationPartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ValidationPartageCourseScalarFieldEnum | Prisma.ValidationPartageCourseScalarFieldEnum[];
};
export type ValidationPartageCourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where?: Prisma.ValidationPartageCourseWhereInput;
    orderBy?: Prisma.ValidationPartageCourseOrderByWithRelationInput | Prisma.ValidationPartageCourseOrderByWithRelationInput[];
    cursor?: Prisma.ValidationPartageCourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ValidationPartageCourseScalarFieldEnum | Prisma.ValidationPartageCourseScalarFieldEnum[];
};
export type ValidationPartageCourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ValidationPartageCourseCreateInput, Prisma.ValidationPartageCourseUncheckedCreateInput>;
};
export type ValidationPartageCourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ValidationPartageCourseCreateManyInput | Prisma.ValidationPartageCourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ValidationPartageCourseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    data: Prisma.ValidationPartageCourseCreateManyInput | Prisma.ValidationPartageCourseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ValidationPartageCourseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ValidationPartageCourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateInput, Prisma.ValidationPartageCourseUncheckedUpdateInput>;
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
};
export type ValidationPartageCourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateManyMutationInput, Prisma.ValidationPartageCourseUncheckedUpdateManyInput>;
    where?: Prisma.ValidationPartageCourseWhereInput;
    limit?: number;
};
export type ValidationPartageCourseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ValidationPartageCourseUpdateManyMutationInput, Prisma.ValidationPartageCourseUncheckedUpdateManyInput>;
    where?: Prisma.ValidationPartageCourseWhereInput;
    limit?: number;
    include?: Prisma.ValidationPartageCourseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ValidationPartageCourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ValidationPartageCourseCreateInput, Prisma.ValidationPartageCourseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ValidationPartageCourseUpdateInput, Prisma.ValidationPartageCourseUncheckedUpdateInput>;
};
export type ValidationPartageCourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
    where: Prisma.ValidationPartageCourseWhereUniqueInput;
};
export type ValidationPartageCourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ValidationPartageCourseWhereInput;
    limit?: number;
};
export type ValidationPartageCourse$courseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
};
export type ValidationPartageCourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ValidationPartageCourseSelect<ExtArgs> | null;
    omit?: Prisma.ValidationPartageCourseOmit<ExtArgs> | null;
    include?: Prisma.ValidationPartageCourseInclude<ExtArgs> | null;
};
