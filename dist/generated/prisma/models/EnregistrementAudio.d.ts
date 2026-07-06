import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnregistrementAudioModel = runtime.Types.Result.DefaultSelection<Prisma.$EnregistrementAudioPayload>;
export type AggregateEnregistrementAudio = {
    _count: EnregistrementAudioCountAggregateOutputType | null;
    _avg: EnregistrementAudioAvgAggregateOutputType | null;
    _sum: EnregistrementAudioSumAggregateOutputType | null;
    _min: EnregistrementAudioMinAggregateOutputType | null;
    _max: EnregistrementAudioMaxAggregateOutputType | null;
};
export type EnregistrementAudioAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
};
export type EnregistrementAudioSumAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
};
export type EnregistrementAudioMinAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    heureDebut: Date | null;
    heureFin: Date | null;
    urlAudio: string | null;
};
export type EnregistrementAudioMaxAggregateOutputType = {
    id: bigint | null;
    courseId: bigint | null;
    heureDebut: Date | null;
    heureFin: Date | null;
    urlAudio: string | null;
};
export type EnregistrementAudioCountAggregateOutputType = {
    id: number;
    courseId: number;
    heureDebut: number;
    heureFin: number;
    urlAudio: number;
    _all: number;
};
export type EnregistrementAudioAvgAggregateInputType = {
    id?: true;
    courseId?: true;
};
export type EnregistrementAudioSumAggregateInputType = {
    id?: true;
    courseId?: true;
};
export type EnregistrementAudioMinAggregateInputType = {
    id?: true;
    courseId?: true;
    heureDebut?: true;
    heureFin?: true;
    urlAudio?: true;
};
export type EnregistrementAudioMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    heureDebut?: true;
    heureFin?: true;
    urlAudio?: true;
};
export type EnregistrementAudioCountAggregateInputType = {
    id?: true;
    courseId?: true;
    heureDebut?: true;
    heureFin?: true;
    urlAudio?: true;
    _all?: true;
};
export type EnregistrementAudioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnregistrementAudioWhereInput;
    orderBy?: Prisma.EnregistrementAudioOrderByWithRelationInput | Prisma.EnregistrementAudioOrderByWithRelationInput[];
    cursor?: Prisma.EnregistrementAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnregistrementAudioCountAggregateInputType;
    _avg?: EnregistrementAudioAvgAggregateInputType;
    _sum?: EnregistrementAudioSumAggregateInputType;
    _min?: EnregistrementAudioMinAggregateInputType;
    _max?: EnregistrementAudioMaxAggregateInputType;
};
export type GetEnregistrementAudioAggregateType<T extends EnregistrementAudioAggregateArgs> = {
    [P in keyof T & keyof AggregateEnregistrementAudio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnregistrementAudio[P]> : Prisma.GetScalarType<T[P], AggregateEnregistrementAudio[P]>;
};
export type EnregistrementAudioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnregistrementAudioWhereInput;
    orderBy?: Prisma.EnregistrementAudioOrderByWithAggregationInput | Prisma.EnregistrementAudioOrderByWithAggregationInput[];
    by: Prisma.EnregistrementAudioScalarFieldEnum[] | Prisma.EnregistrementAudioScalarFieldEnum;
    having?: Prisma.EnregistrementAudioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnregistrementAudioCountAggregateInputType | true;
    _avg?: EnregistrementAudioAvgAggregateInputType;
    _sum?: EnregistrementAudioSumAggregateInputType;
    _min?: EnregistrementAudioMinAggregateInputType;
    _max?: EnregistrementAudioMaxAggregateInputType;
};
export type EnregistrementAudioGroupByOutputType = {
    id: bigint;
    courseId: bigint;
    heureDebut: Date;
    heureFin: Date | null;
    urlAudio: string;
    _count: EnregistrementAudioCountAggregateOutputType | null;
    _avg: EnregistrementAudioAvgAggregateOutputType | null;
    _sum: EnregistrementAudioSumAggregateOutputType | null;
    _min: EnregistrementAudioMinAggregateOutputType | null;
    _max: EnregistrementAudioMaxAggregateOutputType | null;
};
export type GetEnregistrementAudioGroupByPayload<T extends EnregistrementAudioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnregistrementAudioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnregistrementAudioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnregistrementAudioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnregistrementAudioGroupByOutputType[P]>;
}>>;
export type EnregistrementAudioWhereInput = {
    AND?: Prisma.EnregistrementAudioWhereInput | Prisma.EnregistrementAudioWhereInput[];
    OR?: Prisma.EnregistrementAudioWhereInput[];
    NOT?: Prisma.EnregistrementAudioWhereInput | Prisma.EnregistrementAudioWhereInput[];
    id?: Prisma.BigIntFilter<"EnregistrementAudio"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EnregistrementAudio"> | bigint | number;
    heureDebut?: Prisma.DateTimeFilter<"EnregistrementAudio"> | Date | string;
    heureFin?: Prisma.DateTimeNullableFilter<"EnregistrementAudio"> | Date | string | null;
    urlAudio?: Prisma.StringFilter<"EnregistrementAudio"> | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    transcriptions?: Prisma.TranscriptionAudioListRelationFilter;
};
export type EnregistrementAudioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlAudio?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    transcriptions?: Prisma.TranscriptionAudioOrderByRelationAggregateInput;
};
export type EnregistrementAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.EnregistrementAudioWhereInput | Prisma.EnregistrementAudioWhereInput[];
    OR?: Prisma.EnregistrementAudioWhereInput[];
    NOT?: Prisma.EnregistrementAudioWhereInput | Prisma.EnregistrementAudioWhereInput[];
    courseId?: Prisma.BigIntFilter<"EnregistrementAudio"> | bigint | number;
    heureDebut?: Prisma.DateTimeFilter<"EnregistrementAudio"> | Date | string;
    heureFin?: Prisma.DateTimeNullableFilter<"EnregistrementAudio"> | Date | string | null;
    urlAudio?: Prisma.StringFilter<"EnregistrementAudio"> | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    transcriptions?: Prisma.TranscriptionAudioListRelationFilter;
}, "id">;
export type EnregistrementAudioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlAudio?: Prisma.SortOrder;
    _count?: Prisma.EnregistrementAudioCountOrderByAggregateInput;
    _avg?: Prisma.EnregistrementAudioAvgOrderByAggregateInput;
    _max?: Prisma.EnregistrementAudioMaxOrderByAggregateInput;
    _min?: Prisma.EnregistrementAudioMinOrderByAggregateInput;
    _sum?: Prisma.EnregistrementAudioSumOrderByAggregateInput;
};
export type EnregistrementAudioScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnregistrementAudioScalarWhereWithAggregatesInput | Prisma.EnregistrementAudioScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnregistrementAudioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnregistrementAudioScalarWhereWithAggregatesInput | Prisma.EnregistrementAudioScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"EnregistrementAudio"> | bigint | number;
    courseId?: Prisma.BigIntWithAggregatesFilter<"EnregistrementAudio"> | bigint | number;
    heureDebut?: Prisma.DateTimeWithAggregatesFilter<"EnregistrementAudio"> | Date | string;
    heureFin?: Prisma.DateTimeNullableWithAggregatesFilter<"EnregistrementAudio"> | Date | string | null;
    urlAudio?: Prisma.StringWithAggregatesFilter<"EnregistrementAudio"> | string;
};
export type EnregistrementAudioCreateInput = {
    id?: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
    course: Prisma.CourseCreateNestedOneWithoutEnregistrementsAudioInput;
    transcriptions?: Prisma.TranscriptionAudioCreateNestedManyWithoutEnregistrementInput;
};
export type EnregistrementAudioUncheckedCreateInput = {
    id?: bigint | number;
    courseId: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
    transcriptions?: Prisma.TranscriptionAudioUncheckedCreateNestedManyWithoutEnregistrementInput;
};
export type EnregistrementAudioUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEnregistrementsAudioNestedInput;
    transcriptions?: Prisma.TranscriptionAudioUpdateManyWithoutEnregistrementNestedInput;
};
export type EnregistrementAudioUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
    transcriptions?: Prisma.TranscriptionAudioUncheckedUpdateManyWithoutEnregistrementNestedInput;
};
export type EnregistrementAudioCreateManyInput = {
    id?: bigint | number;
    courseId: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
};
export type EnregistrementAudioUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnregistrementAudioUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnregistrementAudioListRelationFilter = {
    every?: Prisma.EnregistrementAudioWhereInput;
    some?: Prisma.EnregistrementAudioWhereInput;
    none?: Prisma.EnregistrementAudioWhereInput;
};
export type EnregistrementAudioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnregistrementAudioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    urlAudio?: Prisma.SortOrder;
};
export type EnregistrementAudioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type EnregistrementAudioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    urlAudio?: Prisma.SortOrder;
};
export type EnregistrementAudioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    heureDebut?: Prisma.SortOrder;
    heureFin?: Prisma.SortOrder;
    urlAudio?: Prisma.SortOrder;
};
export type EnregistrementAudioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
};
export type EnregistrementAudioScalarRelationFilter = {
    is?: Prisma.EnregistrementAudioWhereInput;
    isNot?: Prisma.EnregistrementAudioWhereInput;
};
export type EnregistrementAudioCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput> | Prisma.EnregistrementAudioCreateWithoutCourseInput[] | Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput | Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EnregistrementAudioCreateManyCourseInputEnvelope;
    connect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
};
export type EnregistrementAudioUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput> | Prisma.EnregistrementAudioCreateWithoutCourseInput[] | Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput | Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.EnregistrementAudioCreateManyCourseInputEnvelope;
    connect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
};
export type EnregistrementAudioUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput> | Prisma.EnregistrementAudioCreateWithoutCourseInput[] | Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput | Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EnregistrementAudioUpsertWithWhereUniqueWithoutCourseInput | Prisma.EnregistrementAudioUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EnregistrementAudioCreateManyCourseInputEnvelope;
    set?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    disconnect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    delete?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    connect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    update?: Prisma.EnregistrementAudioUpdateWithWhereUniqueWithoutCourseInput | Prisma.EnregistrementAudioUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EnregistrementAudioUpdateManyWithWhereWithoutCourseInput | Prisma.EnregistrementAudioUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EnregistrementAudioScalarWhereInput | Prisma.EnregistrementAudioScalarWhereInput[];
};
export type EnregistrementAudioUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput> | Prisma.EnregistrementAudioCreateWithoutCourseInput[] | Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput | Prisma.EnregistrementAudioCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.EnregistrementAudioUpsertWithWhereUniqueWithoutCourseInput | Prisma.EnregistrementAudioUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.EnregistrementAudioCreateManyCourseInputEnvelope;
    set?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    disconnect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    delete?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    connect?: Prisma.EnregistrementAudioWhereUniqueInput | Prisma.EnregistrementAudioWhereUniqueInput[];
    update?: Prisma.EnregistrementAudioUpdateWithWhereUniqueWithoutCourseInput | Prisma.EnregistrementAudioUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.EnregistrementAudioUpdateManyWithWhereWithoutCourseInput | Prisma.EnregistrementAudioUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.EnregistrementAudioScalarWhereInput | Prisma.EnregistrementAudioScalarWhereInput[];
};
export type EnregistrementAudioCreateNestedOneWithoutTranscriptionsInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedCreateWithoutTranscriptionsInput>;
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutTranscriptionsInput;
    connect?: Prisma.EnregistrementAudioWhereUniqueInput;
};
export type EnregistrementAudioUpdateOneRequiredWithoutTranscriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedCreateWithoutTranscriptionsInput>;
    connectOrCreate?: Prisma.EnregistrementAudioCreateOrConnectWithoutTranscriptionsInput;
    upsert?: Prisma.EnregistrementAudioUpsertWithoutTranscriptionsInput;
    connect?: Prisma.EnregistrementAudioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnregistrementAudioUpdateToOneWithWhereWithoutTranscriptionsInput, Prisma.EnregistrementAudioUpdateWithoutTranscriptionsInput>, Prisma.EnregistrementAudioUncheckedUpdateWithoutTranscriptionsInput>;
};
export type EnregistrementAudioCreateWithoutCourseInput = {
    id?: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
    transcriptions?: Prisma.TranscriptionAudioCreateNestedManyWithoutEnregistrementInput;
};
export type EnregistrementAudioUncheckedCreateWithoutCourseInput = {
    id?: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
    transcriptions?: Prisma.TranscriptionAudioUncheckedCreateNestedManyWithoutEnregistrementInput;
};
export type EnregistrementAudioCreateOrConnectWithoutCourseInput = {
    where: Prisma.EnregistrementAudioWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput>;
};
export type EnregistrementAudioCreateManyCourseInputEnvelope = {
    data: Prisma.EnregistrementAudioCreateManyCourseInput | Prisma.EnregistrementAudioCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type EnregistrementAudioUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EnregistrementAudioWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnregistrementAudioUpdateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedCreateWithoutCourseInput>;
};
export type EnregistrementAudioUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.EnregistrementAudioWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateWithoutCourseInput, Prisma.EnregistrementAudioUncheckedUpdateWithoutCourseInput>;
};
export type EnregistrementAudioUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.EnregistrementAudioScalarWhereInput;
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateManyMutationInput, Prisma.EnregistrementAudioUncheckedUpdateManyWithoutCourseInput>;
};
export type EnregistrementAudioScalarWhereInput = {
    AND?: Prisma.EnregistrementAudioScalarWhereInput | Prisma.EnregistrementAudioScalarWhereInput[];
    OR?: Prisma.EnregistrementAudioScalarWhereInput[];
    NOT?: Prisma.EnregistrementAudioScalarWhereInput | Prisma.EnregistrementAudioScalarWhereInput[];
    id?: Prisma.BigIntFilter<"EnregistrementAudio"> | bigint | number;
    courseId?: Prisma.BigIntFilter<"EnregistrementAudio"> | bigint | number;
    heureDebut?: Prisma.DateTimeFilter<"EnregistrementAudio"> | Date | string;
    heureFin?: Prisma.DateTimeNullableFilter<"EnregistrementAudio"> | Date | string | null;
    urlAudio?: Prisma.StringFilter<"EnregistrementAudio"> | string;
};
export type EnregistrementAudioCreateWithoutTranscriptionsInput = {
    id?: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
    course: Prisma.CourseCreateNestedOneWithoutEnregistrementsAudioInput;
};
export type EnregistrementAudioUncheckedCreateWithoutTranscriptionsInput = {
    id?: bigint | number;
    courseId: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
};
export type EnregistrementAudioCreateOrConnectWithoutTranscriptionsInput = {
    where: Prisma.EnregistrementAudioWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedCreateWithoutTranscriptionsInput>;
};
export type EnregistrementAudioUpsertWithoutTranscriptionsInput = {
    update: Prisma.XOR<Prisma.EnregistrementAudioUpdateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedUpdateWithoutTranscriptionsInput>;
    create: Prisma.XOR<Prisma.EnregistrementAudioCreateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedCreateWithoutTranscriptionsInput>;
    where?: Prisma.EnregistrementAudioWhereInput;
};
export type EnregistrementAudioUpdateToOneWithWhereWithoutTranscriptionsInput = {
    where?: Prisma.EnregistrementAudioWhereInput;
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateWithoutTranscriptionsInput, Prisma.EnregistrementAudioUncheckedUpdateWithoutTranscriptionsInput>;
};
export type EnregistrementAudioUpdateWithoutTranscriptionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutEnregistrementsAudioNestedInput;
};
export type EnregistrementAudioUncheckedUpdateWithoutTranscriptionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    courseId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnregistrementAudioCreateManyCourseInput = {
    id?: bigint | number;
    heureDebut: Date | string;
    heureFin?: Date | string | null;
    urlAudio: string;
};
export type EnregistrementAudioUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
    transcriptions?: Prisma.TranscriptionAudioUpdateManyWithoutEnregistrementNestedInput;
};
export type EnregistrementAudioUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
    transcriptions?: Prisma.TranscriptionAudioUncheckedUpdateManyWithoutEnregistrementNestedInput;
};
export type EnregistrementAudioUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    heureDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    heureFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    urlAudio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EnregistrementAudioCountOutputType = {
    transcriptions: number;
};
export type EnregistrementAudioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transcriptions?: boolean | EnregistrementAudioCountOutputTypeCountTranscriptionsArgs;
};
export type EnregistrementAudioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioCountOutputTypeSelect<ExtArgs> | null;
};
export type EnregistrementAudioCountOutputTypeCountTranscriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptionAudioWhereInput;
};
export type EnregistrementAudioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    urlAudio?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    transcriptions?: boolean | Prisma.EnregistrementAudio$transcriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EnregistrementAudioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enregistrementAudio"]>;
export type EnregistrementAudioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    urlAudio?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enregistrementAudio"]>;
export type EnregistrementAudioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    urlAudio?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enregistrementAudio"]>;
export type EnregistrementAudioSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    heureDebut?: boolean;
    heureFin?: boolean;
    urlAudio?: boolean;
};
export type EnregistrementAudioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "heureDebut" | "heureFin" | "urlAudio", ExtArgs["result"]["enregistrementAudio"]>;
export type EnregistrementAudioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    transcriptions?: boolean | Prisma.EnregistrementAudio$transcriptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EnregistrementAudioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EnregistrementAudioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type EnregistrementAudioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
};
export type $EnregistrementAudioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EnregistrementAudio";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        transcriptions: Prisma.$TranscriptionAudioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        courseId: bigint;
        heureDebut: Date;
        heureFin: Date | null;
        urlAudio: string;
    }, ExtArgs["result"]["enregistrementAudio"]>;
    composites: {};
};
export type EnregistrementAudioGetPayload<S extends boolean | null | undefined | EnregistrementAudioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload, S>;
export type EnregistrementAudioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnregistrementAudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnregistrementAudioCountAggregateInputType | true;
};
export interface EnregistrementAudioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EnregistrementAudio'];
        meta: {
            name: 'EnregistrementAudio';
        };
    };
    findUnique<T extends EnregistrementAudioFindUniqueArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnregistrementAudioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnregistrementAudioFindFirstArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnregistrementAudioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnregistrementAudioFindManyArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnregistrementAudioCreateArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioCreateArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnregistrementAudioCreateManyArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnregistrementAudioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnregistrementAudioDeleteArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioDeleteArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnregistrementAudioUpdateArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioUpdateArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnregistrementAudioDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnregistrementAudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnregistrementAudioUpdateManyArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnregistrementAudioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnregistrementAudioUpsertArgs>(args: Prisma.SelectSubset<T, EnregistrementAudioUpsertArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnregistrementAudioCountArgs>(args?: Prisma.Subset<T, EnregistrementAudioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnregistrementAudioCountAggregateOutputType> : number>;
    aggregate<T extends EnregistrementAudioAggregateArgs>(args: Prisma.Subset<T, EnregistrementAudioAggregateArgs>): Prisma.PrismaPromise<GetEnregistrementAudioAggregateType<T>>;
    groupBy<T extends EnregistrementAudioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnregistrementAudioGroupByArgs['orderBy'];
    } : {
        orderBy?: EnregistrementAudioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnregistrementAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnregistrementAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnregistrementAudioFieldRefs;
}
export interface Prisma__EnregistrementAudioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transcriptions<T extends Prisma.EnregistrementAudio$transcriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnregistrementAudio$transcriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnregistrementAudioFieldRefs {
    readonly id: Prisma.FieldRef<"EnregistrementAudio", 'BigInt'>;
    readonly courseId: Prisma.FieldRef<"EnregistrementAudio", 'BigInt'>;
    readonly heureDebut: Prisma.FieldRef<"EnregistrementAudio", 'DateTime'>;
    readonly heureFin: Prisma.FieldRef<"EnregistrementAudio", 'DateTime'>;
    readonly urlAudio: Prisma.FieldRef<"EnregistrementAudio", 'String'>;
}
export type EnregistrementAudioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where: Prisma.EnregistrementAudioWhereUniqueInput;
};
export type EnregistrementAudioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where: Prisma.EnregistrementAudioWhereUniqueInput;
};
export type EnregistrementAudioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where?: Prisma.EnregistrementAudioWhereInput;
    orderBy?: Prisma.EnregistrementAudioOrderByWithRelationInput | Prisma.EnregistrementAudioOrderByWithRelationInput[];
    cursor?: Prisma.EnregistrementAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnregistrementAudioScalarFieldEnum | Prisma.EnregistrementAudioScalarFieldEnum[];
};
export type EnregistrementAudioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where?: Prisma.EnregistrementAudioWhereInput;
    orderBy?: Prisma.EnregistrementAudioOrderByWithRelationInput | Prisma.EnregistrementAudioOrderByWithRelationInput[];
    cursor?: Prisma.EnregistrementAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnregistrementAudioScalarFieldEnum | Prisma.EnregistrementAudioScalarFieldEnum[];
};
export type EnregistrementAudioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where?: Prisma.EnregistrementAudioWhereInput;
    orderBy?: Prisma.EnregistrementAudioOrderByWithRelationInput | Prisma.EnregistrementAudioOrderByWithRelationInput[];
    cursor?: Prisma.EnregistrementAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnregistrementAudioScalarFieldEnum | Prisma.EnregistrementAudioScalarFieldEnum[];
};
export type EnregistrementAudioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnregistrementAudioCreateInput, Prisma.EnregistrementAudioUncheckedCreateInput>;
};
export type EnregistrementAudioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnregistrementAudioCreateManyInput | Prisma.EnregistrementAudioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnregistrementAudioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    data: Prisma.EnregistrementAudioCreateManyInput | Prisma.EnregistrementAudioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EnregistrementAudioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnregistrementAudioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateInput, Prisma.EnregistrementAudioUncheckedUpdateInput>;
    where: Prisma.EnregistrementAudioWhereUniqueInput;
};
export type EnregistrementAudioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateManyMutationInput, Prisma.EnregistrementAudioUncheckedUpdateManyInput>;
    where?: Prisma.EnregistrementAudioWhereInput;
    limit?: number;
};
export type EnregistrementAudioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnregistrementAudioUpdateManyMutationInput, Prisma.EnregistrementAudioUncheckedUpdateManyInput>;
    where?: Prisma.EnregistrementAudioWhereInput;
    limit?: number;
    include?: Prisma.EnregistrementAudioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnregistrementAudioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where: Prisma.EnregistrementAudioWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnregistrementAudioCreateInput, Prisma.EnregistrementAudioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnregistrementAudioUpdateInput, Prisma.EnregistrementAudioUncheckedUpdateInput>;
};
export type EnregistrementAudioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
    where: Prisma.EnregistrementAudioWhereUniqueInput;
};
export type EnregistrementAudioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnregistrementAudioWhereInput;
    limit?: number;
};
export type EnregistrementAudio$transcriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    where?: Prisma.TranscriptionAudioWhereInput;
    orderBy?: Prisma.TranscriptionAudioOrderByWithRelationInput | Prisma.TranscriptionAudioOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptionAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TranscriptionAudioScalarFieldEnum | Prisma.TranscriptionAudioScalarFieldEnum[];
};
export type EnregistrementAudioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnregistrementAudioSelect<ExtArgs> | null;
    omit?: Prisma.EnregistrementAudioOmit<ExtArgs> | null;
    include?: Prisma.EnregistrementAudioInclude<ExtArgs> | null;
};
