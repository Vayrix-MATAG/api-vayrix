import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnalyseSecuriteModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalyseSecuritePayload>;
export type AggregateAnalyseSecurite = {
    _count: AnalyseSecuriteCountAggregateOutputType | null;
    _avg: AnalyseSecuriteAvgAggregateOutputType | null;
    _sum: AnalyseSecuriteSumAggregateOutputType | null;
    _min: AnalyseSecuriteMinAggregateOutputType | null;
    _max: AnalyseSecuriteMaxAggregateOutputType | null;
};
export type AnalyseSecuriteAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    scoreRisque: runtime.Decimal | null;
};
export type AnalyseSecuriteSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    scoreRisque: runtime.Decimal | null;
};
export type AnalyseSecuriteMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    scoreRisque: runtime.Decimal | null;
    niveauRisque: string | null;
    resume: string | null;
    dateAnalyse: Date | null;
};
export type AnalyseSecuriteMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    scoreRisque: runtime.Decimal | null;
    niveauRisque: string | null;
    resume: string | null;
    dateAnalyse: Date | null;
};
export type AnalyseSecuriteCountAggregateOutputType = {
    id: number;
    courseId: number;
    scoreRisque: number;
    niveauRisque: number;
    resume: number;
    dateAnalyse: number;
    _all: number;
};
export type AnalyseSecuriteAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    scoreRisque?: true;
};
export type AnalyseSecuriteSumAggregateInputType = {
    id?: true;
    courseId?: true;
    scoreRisque?: true;
};
export type AnalyseSecuriteMinAggregateInputType = {
    id?: true;
    courseId?: true;
    scoreRisque?: true;
    niveauRisque?: true;
    resume?: true;
    dateAnalyse?: true;
};
export type AnalyseSecuriteMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    scoreRisque?: true;
    niveauRisque?: true;
    resume?: true;
    dateAnalyse?: true;
};
export type AnalyseSecuriteCountAggregateInputType = {
    id?: true;
    courseId?: true;
    scoreRisque?: true;
    niveauRisque?: true;
    resume?: true;
    dateAnalyse?: true;
    _all?: true;
};
export type AnalyseSecuriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyseSecuriteWhereInput;
    orderBy?: Prisma.AnalyseSecuriteOrderByWithRelationInput | Prisma.AnalyseSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AnalyseSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalyseSecuriteCountAggregateInputType;
    _avg?: AnalyseSecuriteAvgAggregateInputType;
    _sum?: AnalyseSecuriteSumAggregateInputType;
    _min?: AnalyseSecuriteMinAggregateInputType;
    _max?: AnalyseSecuriteMaxAggregateInputType;
};
export type GetAnalyseSecuriteAggregateType<T extends AnalyseSecuriteAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalyseSecurite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalyseSecurite[P]> : Prisma.GetScalarType<T[P], AggregateAnalyseSecurite[P]>;
};
export type AnalyseSecuriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyseSecuriteWhereInput;
    orderBy?: Prisma.AnalyseSecuriteOrderByWithAggregationInput | Prisma.AnalyseSecuriteOrderByWithAggregationInput[];
    by: Prisma.AnalyseSecuriteScalarFieldEnum[] | Prisma.AnalyseSecuriteScalarFieldEnum;
    having?: Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyseSecuriteCountAggregateInputType | true;
    _avg?: AnalyseSecuriteAvgAggregateInputType;
    _sum?: AnalyseSecuriteSumAggregateInputType;
    _min?: AnalyseSecuriteMinAggregateInputType;
    _max?: AnalyseSecuriteMaxAggregateInputType;
};
export type AnalyseSecuriteGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    scoreRisque: runtime.Decimal;
    niveauRisque: string;
    resume: string;
    dateAnalyse: Date;
    _count: AnalyseSecuriteCountAggregateOutputType | null;
    _avg: AnalyseSecuriteAvgAggregateOutputType | null;
    _sum: AnalyseSecuriteSumAggregateOutputType | null;
    _min: AnalyseSecuriteMinAggregateOutputType | null;
    _max: AnalyseSecuriteMaxAggregateOutputType | null;
};
export type GetAnalyseSecuriteGroupByPayload<T extends AnalyseSecuriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalyseSecuriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalyseSecuriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalyseSecuriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalyseSecuriteGroupByOutputType[P]>;
}>>;
export type AnalyseSecuriteWhereInput = {
    AND?: Prisma.AnalyseSecuriteWhereInput | Prisma.AnalyseSecuriteWhereInput[];
    OR?: Prisma.AnalyseSecuriteWhereInput[];
    NOT?: Prisma.AnalyseSecuriteWhereInput | Prisma.AnalyseSecuriteWhereInput[];
    id?: Prisma.BigIntFilter<"AnalyseSecurite"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"AnalyseSecurite"> | bigint | number;
    scoreRisque?: Prisma.DecimalFilter<"AnalyseSecurite"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    resume?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    dateAnalyse?: Prisma.DateTimeFilter<"AnalyseSecurite"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
};
export type AnalyseSecuriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    resume?: Prisma.SortOrder;
    dateAnalyse?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type AnalyseSecuriteWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.AnalyseSecuriteWhereInput | Prisma.AnalyseSecuriteWhereInput[];
    OR?: Prisma.AnalyseSecuriteWhereInput[];
    NOT?: Prisma.AnalyseSecuriteWhereInput | Prisma.AnalyseSecuriteWhereInput[];
    courseId?: Prisma.BigIntFilter<"AnalyseSecurite"> | bigint | number;
    scoreRisque?: Prisma.DecimalFilter<"AnalyseSecurite"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    resume?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    dateAnalyse?: Prisma.DateTimeFilter<"AnalyseSecurite"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
}, "id">;
export type AnalyseSecuriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    resume?: Prisma.SortOrder;
    dateAnalyse?: Prisma.SortOrder;
    _count?: Prisma.AnalyseSecuriteCountOrderByAggregateInput;
    _avg?: Prisma.AnalyseSecuriteAvgOrderByAggregateInput;
    _max?: Prisma.AnalyseSecuriteMaxOrderByAggregateInput;
    _min?: Prisma.AnalyseSecuriteMinOrderByAggregateInput;
    _sum?: Prisma.AnalyseSecuriteSumOrderByAggregateInput;
};
export type AnalyseSecuriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput | Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput | Prisma.AnalyseSecuriteScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"AnalyseSecurite"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"AnalyseSecurite"> | bigint | number;
    scoreRisque?: Prisma.DecimalWithAggregatesFilter<"AnalyseSecurite"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringWithAggregatesFilter<"AnalyseSecurite"> | string;
    resume?: Prisma.StringWithAggregatesFilter<"AnalyseSecurite"> | string;
    dateAnalyse?: Prisma.DateTimeWithAggregatesFilter<"AnalyseSecurite"> | Date | string;
};
export type AnalyseSecuriteCreateInput = {
    id?: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutAnalysesSecuriteInput;
};
export type AnalyseSecuriteUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
};
export type AnalyseSecuriteUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutAnalysesSecuriteNestedInput;
};
export type AnalyseSecuriteUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
};
export type AnalyseSecuriteUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteListRelationFilter = {
    every?: Prisma.AnalyseSecuriteWhereInput;
    some?: Prisma.AnalyseSecuriteWhereInput;
    none?: Prisma.AnalyseSecuriteWhereInput;
};
export type AnalyseSecuriteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnalyseSecuriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    resume?: Prisma.SortOrder;
    dateAnalyse?: Prisma.SortOrder;
};
export type AnalyseSecuriteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
};
export type AnalyseSecuriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    resume?: Prisma.SortOrder;
    dateAnalyse?: Prisma.SortOrder;
};
export type AnalyseSecuriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    resume?: Prisma.SortOrder;
    dateAnalyse?: Prisma.SortOrder;
};
export type AnalyseSecuriteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    scoreRisque?: Prisma.SortOrder;
};
export type AnalyseSecuriteCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AnalyseSecuriteCreateWithoutCourseInput[] | Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput | Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.AnalyseSecuriteCreateManyCourseInputEnvelope;
    connect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
};
export type AnalyseSecuriteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AnalyseSecuriteCreateWithoutCourseInput[] | Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput | Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.AnalyseSecuriteCreateManyCourseInputEnvelope;
    connect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
};
export type AnalyseSecuriteUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AnalyseSecuriteCreateWithoutCourseInput[] | Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput | Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.AnalyseSecuriteUpsertWithWhereUniqueWithoutCourseInput | Prisma.AnalyseSecuriteUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.AnalyseSecuriteCreateManyCourseInputEnvelope;
    set?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    delete?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    connect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    update?: Prisma.AnalyseSecuriteUpdateWithWhereUniqueWithoutCourseInput | Prisma.AnalyseSecuriteUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.AnalyseSecuriteUpdateManyWithWhereWithoutCourseInput | Prisma.AnalyseSecuriteUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.AnalyseSecuriteScalarWhereInput | Prisma.AnalyseSecuriteScalarWhereInput[];
};
export type AnalyseSecuriteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput> | Prisma.AnalyseSecuriteCreateWithoutCourseInput[] | Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput | Prisma.AnalyseSecuriteCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.AnalyseSecuriteUpsertWithWhereUniqueWithoutCourseInput | Prisma.AnalyseSecuriteUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.AnalyseSecuriteCreateManyCourseInputEnvelope;
    set?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    disconnect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    delete?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    connect?: Prisma.AnalyseSecuriteWhereUniqueInput | Prisma.AnalyseSecuriteWhereUniqueInput[];
    update?: Prisma.AnalyseSecuriteUpdateWithWhereUniqueWithoutCourseInput | Prisma.AnalyseSecuriteUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.AnalyseSecuriteUpdateManyWithWhereWithoutCourseInput | Prisma.AnalyseSecuriteUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.AnalyseSecuriteScalarWhereInput | Prisma.AnalyseSecuriteScalarWhereInput[];
};
export type AnalyseSecuriteCreateWithoutCourseInput = {
    id?: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
};
export type AnalyseSecuriteUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
};
export type AnalyseSecuriteCreateOrConnectWithoutCourseInput = {
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput>;
};
export type AnalyseSecuriteCreateManyCourseInputEnvelope = {
    data: Prisma.AnalyseSecuriteCreateManyCourseInput | Prisma.AnalyseSecuriteCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type AnalyseSecuriteUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalyseSecuriteUpdateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.AnalyseSecuriteCreateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedCreateWithoutCourseInput>;
};
export type AnalyseSecuriteUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalyseSecuriteUpdateWithoutCourseInput, Prisma.AnalyseSecuriteUncheckedUpdateWithoutCourseInput>;
};
export type AnalyseSecuriteUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.AnalyseSecuriteScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalyseSecuriteUpdateManyMutationInput, Prisma.AnalyseSecuriteUncheckedUpdateManyWithoutCourseInput>;
};
export type AnalyseSecuriteScalarWhereInput = {
    AND?: Prisma.AnalyseSecuriteScalarWhereInput | Prisma.AnalyseSecuriteScalarWhereInput[];
    OR?: Prisma.AnalyseSecuriteScalarWhereInput[];
    NOT?: Prisma.AnalyseSecuriteScalarWhereInput | Prisma.AnalyseSecuriteScalarWhereInput[];
    id?: Prisma.BigIntFilter<"AnalyseSecurite"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"AnalyseSecurite"> | bigint | number;
    scoreRisque?: Prisma.DecimalFilter<"AnalyseSecurite"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    resume?: Prisma.StringFilter<"AnalyseSecurite"> | string;
    dateAnalyse?: Prisma.DateTimeFilter<"AnalyseSecurite"> | Date | string;
};
export type AnalyseSecuriteCreateManyCourseInput = {
    id?: bigint | number;
    scoreRisque: runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque: string;
    resume: string;
    dateAnalyse?: Date | string;
};
export type AnalyseSecuriteUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    scoreRisque?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    niveauRisque?: Prisma.StringFieldUpdateOperationsInput | string;
    resume?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAnalyse?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyseSecuriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    scoreRisque?: boolean;
    niveauRisque?: boolean;
    resume?: boolean;
    dateAnalyse?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analyseSecurite"]>;
export type AnalyseSecuriteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    scoreRisque?: boolean;
    niveauRisque?: boolean;
    resume?: boolean;
    dateAnalyse?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analyseSecurite"]>;
export type AnalyseSecuriteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    scoreRisque?: boolean;
    niveauRisque?: boolean;
    resume?: boolean;
    dateAnalyse?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analyseSecurite"]>;
export type AnalyseSecuriteSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    scoreRisque?: boolean;
    niveauRisque?: boolean;
    resume?: boolean;
    dateAnalyse?: boolean;
};
export type AnalyseSecuriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "scoreRisque" | "niveauRisque" | "resume" | "dateAnalyse", ExtArgs["result"]["analyseSecurite"]>;
export type AnalyseSecuriteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type AnalyseSecuriteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type AnalyseSecuriteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $AnalyseSecuritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnalyseSecurite";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        scoreRisque: runtime.Decimal;
        niveauRisque: string;
        resume: string;
        dateAnalyse: Date;
    }, ExtArgs["result"]["analyseSecurite"]>;
    composites: {};
};
export type AnalyseSecuriteGetPayload<S extends boolean | null | undefined | AnalyseSecuriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload, S>;
export type AnalyseSecuriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalyseSecuriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalyseSecuriteCountAggregateInputType | true;
};
export interface AnalyseSecuriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnalyseSecurite'];
        meta: {
            name: 'AnalyseSecurite';
        };
    };
    findUnique<T extends AnalyseSecuriteFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalyseSecuriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalyseSecuriteFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalyseSecuriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalyseSecuriteFindManyArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalyseSecuriteCreateArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteCreateArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalyseSecuriteCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalyseSecuriteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalyseSecuriteDeleteArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalyseSecuriteUpdateArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalyseSecuriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalyseSecuriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalyseSecuriteUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalyseSecuriteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalyseSecuriteUpsertArgs>(args: Prisma.SelectSubset<T, AnalyseSecuriteUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalyseSecuriteClient<runtime.Types.Result.GetResult<Prisma.$AnalyseSecuritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalyseSecuriteCountArgs>(args?: Prisma.Subset<T, AnalyseSecuriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalyseSecuriteCountAggregateOutputType> : number>;
    aggregate<T extends AnalyseSecuriteAggregateArgs>(args: Prisma.Subset<T, AnalyseSecuriteAggregateArgs>): Prisma.PrismaPromise<GetAnalyseSecuriteAggregateType<T>>;
    groupBy<T extends AnalyseSecuriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalyseSecuriteGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalyseSecuriteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalyseSecuriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyseSecuriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalyseSecuriteFieldRefs;
}
export interface Prisma__AnalyseSecuriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalyseSecuriteFieldRefs {
    readonly id: Prisma.FieldRef<"AnalyseSecurite", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"AnalyseSecurite", 'BigInt'>;
    readonly scoreRisque: Prisma.FieldRef<"AnalyseSecurite", 'Decimal'>;
    readonly niveauRisque: Prisma.FieldRef<"AnalyseSecurite", 'String'>;
    readonly resume: Prisma.FieldRef<"AnalyseSecurite", 'String'>;
    readonly dateAnalyse: Prisma.FieldRef<"AnalyseSecurite", 'DateTime'>;
}
export type AnalyseSecuriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
};
export type AnalyseSecuriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
};
export type AnalyseSecuriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AnalyseSecuriteWhereInput;
    orderBy?: Prisma.AnalyseSecuriteOrderByWithRelationInput | Prisma.AnalyseSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AnalyseSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyseSecuriteScalarFieldEnum | Prisma.AnalyseSecuriteScalarFieldEnum[];
};
export type AnalyseSecuriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AnalyseSecuriteWhereInput;
    orderBy?: Prisma.AnalyseSecuriteOrderByWithRelationInput | Prisma.AnalyseSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AnalyseSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyseSecuriteScalarFieldEnum | Prisma.AnalyseSecuriteScalarFieldEnum[];
};
export type AnalyseSecuriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where?: Prisma.AnalyseSecuriteWhereInput;
    orderBy?: Prisma.AnalyseSecuriteOrderByWithRelationInput | Prisma.AnalyseSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.AnalyseSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyseSecuriteScalarFieldEnum | Prisma.AnalyseSecuriteScalarFieldEnum[];
};
export type AnalyseSecuriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyseSecuriteCreateInput, Prisma.AnalyseSecuriteUncheckedCreateInput>;
};
export type AnalyseSecuriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalyseSecuriteCreateManyInput | Prisma.AnalyseSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalyseSecuriteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    data: Prisma.AnalyseSecuriteCreateManyInput | Prisma.AnalyseSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnalyseSecuriteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnalyseSecuriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyseSecuriteUpdateInput, Prisma.AnalyseSecuriteUncheckedUpdateInput>;
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
};
export type AnalyseSecuriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalyseSecuriteUpdateManyMutationInput, Prisma.AnalyseSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.AnalyseSecuriteWhereInput;
    limit?: number;
};
export type AnalyseSecuriteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyseSecuriteUpdateManyMutationInput, Prisma.AnalyseSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.AnalyseSecuriteWhereInput;
    limit?: number;
    include?: Prisma.AnalyseSecuriteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnalyseSecuriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyseSecuriteCreateInput, Prisma.AnalyseSecuriteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalyseSecuriteUpdateInput, Prisma.AnalyseSecuriteUncheckedUpdateInput>;
};
export type AnalyseSecuriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
    where: Prisma.AnalyseSecuriteWhereUniqueInput;
};
export type AnalyseSecuriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyseSecuriteWhereInput;
    limit?: number;
};
export type AnalyseSecuriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyseSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.AnalyseSecuriteOmit<ExtArgs> | null;
    include?: Prisma.AnalyseSecuriteInclude<ExtArgs> | null;
};
