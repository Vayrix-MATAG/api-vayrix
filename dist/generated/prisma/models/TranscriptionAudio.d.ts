import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TranscriptionAudioModel = runtime.Types.Result.DefaultSelection<Prisma.$TranscriptionAudioPayload>;
export type AggregateTranscriptionAudio = {
    _count: TranscriptionAudioCountAggregateOutputType | null;
    _avg: TranscriptionAudioAvgAggregateOutputType | null;
    _sum: TranscriptionAudioSumAggregateOutputType | null;
    _min: TranscriptionAudioMinAggregateOutputType | null;
    _max: TranscriptionAudioMaxAggregateOutputType | null;
};
export type TranscriptionAudioAvgAggregateOutputType = {
    id: number | null;
    enregistrementId: number | null;
};
export type TranscriptionAudioSumAggregateOutputType = {
    id: bigint | null;
    enregistrementId: bigint | null;
};
export type TranscriptionAudioMinAggregateOutputType = {
    id: bigint | null;
    enregistrementId: bigint | null;
    texte: string | null;
    horodatage: Date | null;
};
export type TranscriptionAudioMaxAggregateOutputType = {
    id: bigint | null;
    enregistrementId: bigint | null;
    texte: string | null;
    horodatage: Date | null;
};
export type TranscriptionAudioCountAggregateOutputType = {
    id: number;
    enregistrementId: number;
    texte: number;
    horodatage: number;
    _all: number;
};
export type TranscriptionAudioAvgAggregateInputType = {
    id?: true;
    enregistrementId?: true;
};
export type TranscriptionAudioSumAggregateInputType = {
    id?: true;
    enregistrementId?: true;
};
export type TranscriptionAudioMinAggregateInputType = {
    id?: true;
    enregistrementId?: true;
    texte?: true;
    horodatage?: true;
};
export type TranscriptionAudioMaxAggregateInputType = {
    id?: true;
    enregistrementId?: true;
    texte?: true;
    horodatage?: true;
};
export type TranscriptionAudioCountAggregateInputType = {
    id?: true;
    enregistrementId?: true;
    texte?: true;
    horodatage?: true;
    _all?: true;
};
export type TranscriptionAudioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptionAudioWhereInput;
    orderBy?: Prisma.TranscriptionAudioOrderByWithRelationInput | Prisma.TranscriptionAudioOrderByWithRelationInput[];
    cursor?: Prisma.TranscriptionAudioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TranscriptionAudioCountAggregateInputType;
    _avg?: TranscriptionAudioAvgAggregateInputType;
    _sum?: TranscriptionAudioSumAggregateInputType;
    _min?: TranscriptionAudioMinAggregateInputType;
    _max?: TranscriptionAudioMaxAggregateInputType;
};
export type GetTranscriptionAudioAggregateType<T extends TranscriptionAudioAggregateArgs> = {
    [P in keyof T & keyof AggregateTranscriptionAudio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTranscriptionAudio[P]> : Prisma.GetScalarType<T[P], AggregateTranscriptionAudio[P]>;
};
export type TranscriptionAudioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptionAudioWhereInput;
    orderBy?: Prisma.TranscriptionAudioOrderByWithAggregationInput | Prisma.TranscriptionAudioOrderByWithAggregationInput[];
    by: Prisma.TranscriptionAudioScalarFieldEnum[] | Prisma.TranscriptionAudioScalarFieldEnum;
    having?: Prisma.TranscriptionAudioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TranscriptionAudioCountAggregateInputType | true;
    _avg?: TranscriptionAudioAvgAggregateInputType;
    _sum?: TranscriptionAudioSumAggregateInputType;
    _min?: TranscriptionAudioMinAggregateInputType;
    _max?: TranscriptionAudioMaxAggregateInputType;
};
export type TranscriptionAudioGroupByOutputType = {
    id: bigint;
    enregistrementId: bigint;
    texte: string;
    horodatage: Date;
    _count: TranscriptionAudioCountAggregateOutputType | null;
    _avg: TranscriptionAudioAvgAggregateOutputType | null;
    _sum: TranscriptionAudioSumAggregateOutputType | null;
    _min: TranscriptionAudioMinAggregateOutputType | null;
    _max: TranscriptionAudioMaxAggregateOutputType | null;
};
export type GetTranscriptionAudioGroupByPayload<T extends TranscriptionAudioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TranscriptionAudioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TranscriptionAudioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TranscriptionAudioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TranscriptionAudioGroupByOutputType[P]>;
}>>;
export type TranscriptionAudioWhereInput = {
    AND?: Prisma.TranscriptionAudioWhereInput | Prisma.TranscriptionAudioWhereInput[];
    OR?: Prisma.TranscriptionAudioWhereInput[];
    NOT?: Prisma.TranscriptionAudioWhereInput | Prisma.TranscriptionAudioWhereInput[];
    id?: Prisma.BigIntFilter<"TranscriptionAudio"> | bigint | number;
    enregistrementId?: Prisma.BigIntFilter<"TranscriptionAudio"> | bigint | number;
    texte?: Prisma.StringFilter<"TranscriptionAudio"> | string;
    horodatage?: Prisma.DateTimeFilter<"TranscriptionAudio"> | Date | string;
    enregistrement?: Prisma.XOR<Prisma.EnregistrementAudioScalarRelationFilter, Prisma.EnregistrementAudioWhereInput>;
};
export type TranscriptionAudioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
    horodatage?: Prisma.SortOrder;
    enregistrement?: Prisma.EnregistrementAudioOrderByWithRelationInput;
};
export type TranscriptionAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.TranscriptionAudioWhereInput | Prisma.TranscriptionAudioWhereInput[];
    OR?: Prisma.TranscriptionAudioWhereInput[];
    NOT?: Prisma.TranscriptionAudioWhereInput | Prisma.TranscriptionAudioWhereInput[];
    enregistrementId?: Prisma.BigIntFilter<"TranscriptionAudio"> | bigint | number;
    texte?: Prisma.StringFilter<"TranscriptionAudio"> | string;
    horodatage?: Prisma.DateTimeFilter<"TranscriptionAudio"> | Date | string;
    enregistrement?: Prisma.XOR<Prisma.EnregistrementAudioScalarRelationFilter, Prisma.EnregistrementAudioWhereInput>;
}, "id">;
export type TranscriptionAudioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
    horodatage?: Prisma.SortOrder;
    _count?: Prisma.TranscriptionAudioCountOrderByAggregateInput;
    _avg?: Prisma.TranscriptionAudioAvgOrderByAggregateInput;
    _max?: Prisma.TranscriptionAudioMaxOrderByAggregateInput;
    _min?: Prisma.TranscriptionAudioMinOrderByAggregateInput;
    _sum?: Prisma.TranscriptionAudioSumOrderByAggregateInput;
};
export type TranscriptionAudioScalarWhereWithAggregatesInput = {
    AND?: Prisma.TranscriptionAudioScalarWhereWithAggregatesInput | Prisma.TranscriptionAudioScalarWhereWithAggregatesInput[];
    OR?: Prisma.TranscriptionAudioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TranscriptionAudioScalarWhereWithAggregatesInput | Prisma.TranscriptionAudioScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"TranscriptionAudio"> | bigint | number;
    enregistrementId?: Prisma.BigIntWithAggregatesFilter<"TranscriptionAudio"> | bigint | number;
    texte?: Prisma.StringWithAggregatesFilter<"TranscriptionAudio"> | string;
    horodatage?: Prisma.DateTimeWithAggregatesFilter<"TranscriptionAudio"> | Date | string;
};
export type TranscriptionAudioCreateInput = {
    id?: bigint | number;
    texte: string;
    horodatage?: Date | string;
    enregistrement: Prisma.EnregistrementAudioCreateNestedOneWithoutTranscriptionsInput;
};
export type TranscriptionAudioUncheckedCreateInput = {
    id?: bigint | number;
    enregistrementId: bigint | number;
    texte: string;
    horodatage?: Date | string;
};
export type TranscriptionAudioUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enregistrement?: Prisma.EnregistrementAudioUpdateOneRequiredWithoutTranscriptionsNestedInput;
};
export type TranscriptionAudioUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enregistrementId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioCreateManyInput = {
    id?: bigint | number;
    enregistrementId: bigint | number;
    texte: string;
    horodatage?: Date | string;
};
export type TranscriptionAudioUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    enregistrementId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioListRelationFilter = {
    every?: Prisma.TranscriptionAudioWhereInput;
    some?: Prisma.TranscriptionAudioWhereInput;
    none?: Prisma.TranscriptionAudioWhereInput;
};
export type TranscriptionAudioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TranscriptionAudioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
    horodatage?: Prisma.SortOrder;
};
export type TranscriptionAudioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
};
export type TranscriptionAudioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
    horodatage?: Prisma.SortOrder;
};
export type TranscriptionAudioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
    horodatage?: Prisma.SortOrder;
};
export type TranscriptionAudioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    enregistrementId?: Prisma.SortOrder;
};
export type TranscriptionAudioCreateNestedManyWithoutEnregistrementInput = {
    create?: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput> | Prisma.TranscriptionAudioCreateWithoutEnregistrementInput[] | Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput[];
    connectOrCreate?: Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput | Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput[];
    createMany?: Prisma.TranscriptionAudioCreateManyEnregistrementInputEnvelope;
    connect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
};
export type TranscriptionAudioUncheckedCreateNestedManyWithoutEnregistrementInput = {
    create?: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput> | Prisma.TranscriptionAudioCreateWithoutEnregistrementInput[] | Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput[];
    connectOrCreate?: Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput | Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput[];
    createMany?: Prisma.TranscriptionAudioCreateManyEnregistrementInputEnvelope;
    connect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
};
export type TranscriptionAudioUpdateManyWithoutEnregistrementNestedInput = {
    create?: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput> | Prisma.TranscriptionAudioCreateWithoutEnregistrementInput[] | Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput[];
    connectOrCreate?: Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput | Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput[];
    upsert?: Prisma.TranscriptionAudioUpsertWithWhereUniqueWithoutEnregistrementInput | Prisma.TranscriptionAudioUpsertWithWhereUniqueWithoutEnregistrementInput[];
    createMany?: Prisma.TranscriptionAudioCreateManyEnregistrementInputEnvelope;
    set?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    disconnect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    delete?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    connect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    update?: Prisma.TranscriptionAudioUpdateWithWhereUniqueWithoutEnregistrementInput | Prisma.TranscriptionAudioUpdateWithWhereUniqueWithoutEnregistrementInput[];
    updateMany?: Prisma.TranscriptionAudioUpdateManyWithWhereWithoutEnregistrementInput | Prisma.TranscriptionAudioUpdateManyWithWhereWithoutEnregistrementInput[];
    deleteMany?: Prisma.TranscriptionAudioScalarWhereInput | Prisma.TranscriptionAudioScalarWhereInput[];
};
export type TranscriptionAudioUncheckedUpdateManyWithoutEnregistrementNestedInput = {
    create?: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput> | Prisma.TranscriptionAudioCreateWithoutEnregistrementInput[] | Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput[];
    connectOrCreate?: Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput | Prisma.TranscriptionAudioCreateOrConnectWithoutEnregistrementInput[];
    upsert?: Prisma.TranscriptionAudioUpsertWithWhereUniqueWithoutEnregistrementInput | Prisma.TranscriptionAudioUpsertWithWhereUniqueWithoutEnregistrementInput[];
    createMany?: Prisma.TranscriptionAudioCreateManyEnregistrementInputEnvelope;
    set?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    disconnect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    delete?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    connect?: Prisma.TranscriptionAudioWhereUniqueInput | Prisma.TranscriptionAudioWhereUniqueInput[];
    update?: Prisma.TranscriptionAudioUpdateWithWhereUniqueWithoutEnregistrementInput | Prisma.TranscriptionAudioUpdateWithWhereUniqueWithoutEnregistrementInput[];
    updateMany?: Prisma.TranscriptionAudioUpdateManyWithWhereWithoutEnregistrementInput | Prisma.TranscriptionAudioUpdateManyWithWhereWithoutEnregistrementInput[];
    deleteMany?: Prisma.TranscriptionAudioScalarWhereInput | Prisma.TranscriptionAudioScalarWhereInput[];
};
export type TranscriptionAudioCreateWithoutEnregistrementInput = {
    id?: bigint | number;
    texte: string;
    horodatage?: Date | string;
};
export type TranscriptionAudioUncheckedCreateWithoutEnregistrementInput = {
    id?: bigint | number;
    texte: string;
    horodatage?: Date | string;
};
export type TranscriptionAudioCreateOrConnectWithoutEnregistrementInput = {
    where: Prisma.TranscriptionAudioWhereUniqueInput;
    create: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput>;
};
export type TranscriptionAudioCreateManyEnregistrementInputEnvelope = {
    data: Prisma.TranscriptionAudioCreateManyEnregistrementInput | Prisma.TranscriptionAudioCreateManyEnregistrementInput[];
    skipDuplicates?: boolean;
};
export type TranscriptionAudioUpsertWithWhereUniqueWithoutEnregistrementInput = {
    where: Prisma.TranscriptionAudioWhereUniqueInput;
    update: Prisma.XOR<Prisma.TranscriptionAudioUpdateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedUpdateWithoutEnregistrementInput>;
    create: Prisma.XOR<Prisma.TranscriptionAudioCreateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedCreateWithoutEnregistrementInput>;
};
export type TranscriptionAudioUpdateWithWhereUniqueWithoutEnregistrementInput = {
    where: Prisma.TranscriptionAudioWhereUniqueInput;
    data: Prisma.XOR<Prisma.TranscriptionAudioUpdateWithoutEnregistrementInput, Prisma.TranscriptionAudioUncheckedUpdateWithoutEnregistrementInput>;
};
export type TranscriptionAudioUpdateManyWithWhereWithoutEnregistrementInput = {
    where: Prisma.TranscriptionAudioScalarWhereInput;
    data: Prisma.XOR<Prisma.TranscriptionAudioUpdateManyMutationInput, Prisma.TranscriptionAudioUncheckedUpdateManyWithoutEnregistrementInput>;
};
export type TranscriptionAudioScalarWhereInput = {
    AND?: Prisma.TranscriptionAudioScalarWhereInput | Prisma.TranscriptionAudioScalarWhereInput[];
    OR?: Prisma.TranscriptionAudioScalarWhereInput[];
    NOT?: Prisma.TranscriptionAudioScalarWhereInput | Prisma.TranscriptionAudioScalarWhereInput[];
    id?: Prisma.BigIntFilter<"TranscriptionAudio"> | bigint | number;
    enregistrementId?: Prisma.BigIntFilter<"TranscriptionAudio"> | bigint | number;
    texte?: Prisma.StringFilter<"TranscriptionAudio"> | string;
    horodatage?: Prisma.DateTimeFilter<"TranscriptionAudio"> | Date | string;
};
export type TranscriptionAudioCreateManyEnregistrementInput = {
    id?: bigint | number;
    texte: string;
    horodatage?: Date | string;
};
export type TranscriptionAudioUpdateWithoutEnregistrementInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioUncheckedUpdateWithoutEnregistrementInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioUncheckedUpdateManyWithoutEnregistrementInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    texte?: Prisma.StringFieldUpdateOperationsInput | string;
    horodatage?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TranscriptionAudioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    enregistrementId?: boolean;
    texte?: boolean;
    horodatage?: boolean;
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transcriptionAudio"]>;
export type TranscriptionAudioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    enregistrementId?: boolean;
    texte?: boolean;
    horodatage?: boolean;
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transcriptionAudio"]>;
export type TranscriptionAudioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    enregistrementId?: boolean;
    texte?: boolean;
    horodatage?: boolean;
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transcriptionAudio"]>;
export type TranscriptionAudioSelectScalar = {
    id?: boolean;
    enregistrementId?: boolean;
    texte?: boolean;
    horodatage?: boolean;
};
export type TranscriptionAudioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "enregistrementId" | "texte" | "horodatage", ExtArgs["result"]["transcriptionAudio"]>;
export type TranscriptionAudioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
};
export type TranscriptionAudioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
};
export type TranscriptionAudioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enregistrement?: boolean | Prisma.EnregistrementAudioDefaultArgs<ExtArgs>;
};
export type $TranscriptionAudioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TranscriptionAudio";
    objects: {
        enregistrement: Prisma.$EnregistrementAudioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        enregistrementId: bigint;
        texte: string;
        horodatage: Date;
    }, ExtArgs["result"]["transcriptionAudio"]>;
    composites: {};
};
export type TranscriptionAudioGetPayload<S extends boolean | null | undefined | TranscriptionAudioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload, S>;
export type TranscriptionAudioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TranscriptionAudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TranscriptionAudioCountAggregateInputType | true;
};
export interface TranscriptionAudioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TranscriptionAudio'];
        meta: {
            name: 'TranscriptionAudio';
        };
    };
    findUnique<T extends TranscriptionAudioFindUniqueArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TranscriptionAudioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TranscriptionAudioFindFirstArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioFindFirstArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TranscriptionAudioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TranscriptionAudioFindManyArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TranscriptionAudioCreateArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioCreateArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TranscriptionAudioCreateManyArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TranscriptionAudioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TranscriptionAudioDeleteArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioDeleteArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TranscriptionAudioUpdateArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioUpdateArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TranscriptionAudioDeleteManyArgs>(args?: Prisma.SelectSubset<T, TranscriptionAudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TranscriptionAudioUpdateManyArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TranscriptionAudioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TranscriptionAudioUpsertArgs>(args: Prisma.SelectSubset<T, TranscriptionAudioUpsertArgs<ExtArgs>>): Prisma.Prisma__TranscriptionAudioClient<runtime.Types.Result.GetResult<Prisma.$TranscriptionAudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TranscriptionAudioCountArgs>(args?: Prisma.Subset<T, TranscriptionAudioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TranscriptionAudioCountAggregateOutputType> : number>;
    aggregate<T extends TranscriptionAudioAggregateArgs>(args: Prisma.Subset<T, TranscriptionAudioAggregateArgs>): Prisma.PrismaPromise<GetTranscriptionAudioAggregateType<T>>;
    groupBy<T extends TranscriptionAudioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TranscriptionAudioGroupByArgs['orderBy'];
    } : {
        orderBy?: TranscriptionAudioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TranscriptionAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptionAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TranscriptionAudioFieldRefs;
}
export interface Prisma__TranscriptionAudioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    enregistrement<T extends Prisma.EnregistrementAudioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnregistrementAudioDefaultArgs<ExtArgs>>): Prisma.Prisma__EnregistrementAudioClient<runtime.Types.Result.GetResult<Prisma.$EnregistrementAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TranscriptionAudioFieldRefs {
    readonly id: Prisma.FieldRef<"TranscriptionAudio", 'BigInt'>;
    readonly enregistrementId: Prisma.FieldRef<"TranscriptionAudio", 'BigInt'>;
    readonly texte: Prisma.FieldRef<"TranscriptionAudio", 'String'>;
    readonly horodatage: Prisma.FieldRef<"TranscriptionAudio", 'DateTime'>;
}
export type TranscriptionAudioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    where: Prisma.TranscriptionAudioWhereUniqueInput;
};
export type TranscriptionAudioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    where: Prisma.TranscriptionAudioWhereUniqueInput;
};
export type TranscriptionAudioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TranscriptionAudioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TranscriptionAudioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TranscriptionAudioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptionAudioCreateInput, Prisma.TranscriptionAudioUncheckedCreateInput>;
};
export type TranscriptionAudioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TranscriptionAudioCreateManyInput | Prisma.TranscriptionAudioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TranscriptionAudioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    data: Prisma.TranscriptionAudioCreateManyInput | Prisma.TranscriptionAudioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TranscriptionAudioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TranscriptionAudioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptionAudioUpdateInput, Prisma.TranscriptionAudioUncheckedUpdateInput>;
    where: Prisma.TranscriptionAudioWhereUniqueInput;
};
export type TranscriptionAudioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TranscriptionAudioUpdateManyMutationInput, Prisma.TranscriptionAudioUncheckedUpdateManyInput>;
    where?: Prisma.TranscriptionAudioWhereInput;
    limit?: number;
};
export type TranscriptionAudioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TranscriptionAudioUpdateManyMutationInput, Prisma.TranscriptionAudioUncheckedUpdateManyInput>;
    where?: Prisma.TranscriptionAudioWhereInput;
    limit?: number;
    include?: Prisma.TranscriptionAudioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TranscriptionAudioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    where: Prisma.TranscriptionAudioWhereUniqueInput;
    create: Prisma.XOR<Prisma.TranscriptionAudioCreateInput, Prisma.TranscriptionAudioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TranscriptionAudioUpdateInput, Prisma.TranscriptionAudioUncheckedUpdateInput>;
};
export type TranscriptionAudioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
    where: Prisma.TranscriptionAudioWhereUniqueInput;
};
export type TranscriptionAudioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TranscriptionAudioWhereInput;
    limit?: number;
};
export type TranscriptionAudioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TranscriptionAudioSelect<ExtArgs> | null;
    omit?: Prisma.TranscriptionAudioOmit<ExtArgs> | null;
    include?: Prisma.TranscriptionAudioInclude<ExtArgs> | null;
};
