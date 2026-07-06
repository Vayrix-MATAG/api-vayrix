import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JournalAuditModel = runtime.Types.Result.DefaultSelection<Prisma.$JournalAuditPayload>;
export type AggregateJournalAudit = {
    _count: JournalAuditCountAggregateOutputType | null;
    _avg: JournalAuditAvgAggregateOutputType | null;
    _sum: JournalAuditSumAggregateOutputType | null;
    _min: JournalAuditMinAggregateOutputType | null;
    _max: JournalAuditMaxAggregateOutputType | null;
};
export type JournalAuditAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type JournalAuditSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type JournalAuditMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    action: string | null;
    dateAction: Date | null;
};
export type JournalAuditMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    action: string | null;
    dateAction: Date | null;
};
export type JournalAuditCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    action: number;
    dateAction: number;
    _all: number;
};
export type JournalAuditAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type JournalAuditSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type JournalAuditMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    action?: true;
    dateAction?: true;
};
export type JournalAuditMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    action?: true;
    dateAction?: true;
};
export type JournalAuditCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    action?: true;
    dateAction?: true;
    _all?: true;
};
export type JournalAuditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JournalAuditCountAggregateInputType;
    _avg?: JournalAuditAvgAggregateInputType;
    _sum?: JournalAuditSumAggregateInputType;
    _min?: JournalAuditMinAggregateInputType;
    _max?: JournalAuditMaxAggregateInputType;
};
export type GetJournalAuditAggregateType<T extends JournalAuditAggregateArgs> = {
    [P in keyof T & keyof AggregateJournalAudit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJournalAudit[P]> : Prisma.GetScalarType<T[P], AggregateJournalAudit[P]>;
};
export type JournalAuditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithAggregationInput | Prisma.JournalAuditOrderByWithAggregationInput[];
    by: Prisma.JournalAuditScalarFieldEnum[] | Prisma.JournalAuditScalarFieldEnum;
    having?: Prisma.JournalAuditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JournalAuditCountAggregateInputType | true;
    _avg?: JournalAuditAvgAggregateInputType;
    _sum?: JournalAuditSumAggregateInputType;
    _min?: JournalAuditMinAggregateInputType;
    _max?: JournalAuditMaxAggregateInputType;
};
export type JournalAuditGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    action: string;
    dateAction: Date;
    _count: JournalAuditCountAggregateOutputType | null;
    _avg: JournalAuditAvgAggregateOutputType | null;
    _sum: JournalAuditSumAggregateOutputType | null;
    _min: JournalAuditMinAggregateOutputType | null;
    _max: JournalAuditMaxAggregateOutputType | null;
};
export type GetJournalAuditGroupByPayload<T extends JournalAuditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JournalAuditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JournalAuditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JournalAuditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JournalAuditGroupByOutputType[P]>;
}>>;
export type JournalAuditWhereInput = {
    AND?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    OR?: Prisma.JournalAuditWhereInput[];
    NOT?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    id?: Prisma.BigIntFilter<"JournalAudit"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"JournalAudit"> | bigint | number;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    dateAction?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type JournalAuditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    dateAction?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type JournalAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    OR?: Prisma.JournalAuditWhereInput[];
    NOT?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"JournalAudit"> | bigint | number;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    dateAction?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type JournalAuditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    dateAction?: Prisma.SortOrder;
    _count?: Prisma.JournalAuditCountOrderByAggregateInput;
    _avg?: Prisma.JournalAuditAvgOrderByAggregateInput;
    _max?: Prisma.JournalAuditMaxOrderByAggregateInput;
    _min?: Prisma.JournalAuditMinOrderByAggregateInput;
    _sum?: Prisma.JournalAuditSumOrderByAggregateInput;
};
export type JournalAuditScalarWhereWithAggregatesInput = {
    AND?: Prisma.JournalAuditScalarWhereWithAggregatesInput | Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    OR?: Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JournalAuditScalarWhereWithAggregatesInput | Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"JournalAudit"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"JournalAudit"> | bigint | number;
    action?: Prisma.StringWithAggregatesFilter<"JournalAudit"> | string;
    dateAction?: Prisma.DateTimeWithAggregatesFilter<"JournalAudit"> | Date | string;
};
export type JournalAuditCreateInput = {
    id?: bigint | number;
    action: string;
    dateAction?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutJournalAuditsInput;
};
export type JournalAuditUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    action: string;
    dateAction?: Date | string;
};
export type JournalAuditUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutJournalAuditsNestedInput;
};
export type JournalAuditUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    action: string;
    dateAction?: Date | string;
};
export type JournalAuditUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditListRelationFilter = {
    every?: Prisma.JournalAuditWhereInput;
    some?: Prisma.JournalAuditWhereInput;
    none?: Prisma.JournalAuditWhereInput;
};
export type JournalAuditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JournalAuditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    dateAction?: Prisma.SortOrder;
};
export type JournalAuditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type JournalAuditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    dateAction?: Prisma.SortOrder;
};
export type JournalAuditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    dateAction?: Prisma.SortOrder;
};
export type JournalAuditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type JournalAuditCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput | Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput | Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    action: string;
    dateAction?: Date | string;
};
export type JournalAuditUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    action: string;
    dateAction?: Date | string;
};
export type JournalAuditCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput>;
};
export type JournalAuditCreateManyUtilisateurInputEnvelope = {
    data: Prisma.JournalAuditCreateManyUtilisateurInput | Prisma.JournalAuditCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalAuditUpdateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput>;
};
export type JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedUpdateWithoutUtilisateurInput>;
};
export type JournalAuditUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.JournalAuditScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type JournalAuditScalarWhereInput = {
    AND?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
    OR?: Prisma.JournalAuditScalarWhereInput[];
    NOT?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
    id?: Prisma.BigIntFilter<"JournalAudit"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"JournalAudit"> | bigint | number;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    dateAction?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
};
export type JournalAuditCreateManyUtilisateurInput = {
    id?: bigint | number;
    action: string;
    dateAction?: Date | string;
};
export type JournalAuditUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    dateAction?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    dateAction?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalAudit"]>;
export type JournalAuditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    dateAction?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalAudit"]>;
export type JournalAuditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    dateAction?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journalAudit"]>;
export type JournalAuditSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    dateAction?: boolean;
};
export type JournalAuditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "action" | "dateAction", ExtArgs["result"]["journalAudit"]>;
export type JournalAuditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type JournalAuditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type JournalAuditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $JournalAuditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JournalAudit";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        action: string;
        dateAction: Date;
    }, ExtArgs["result"]["journalAudit"]>;
    composites: {};
};
export type JournalAuditGetPayload<S extends boolean | null | undefined | JournalAuditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload, S>;
export type JournalAuditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JournalAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JournalAuditCountAggregateInputType | true;
};
export interface JournalAuditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JournalAudit'];
        meta: {
            name: 'JournalAudit';
        };
    };
    findUnique<T extends JournalAuditFindUniqueArgs>(args: Prisma.SelectSubset<T, JournalAuditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JournalAuditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JournalAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JournalAuditFindFirstArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindFirstArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JournalAuditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JournalAuditFindManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JournalAuditCreateArgs>(args: Prisma.SelectSubset<T, JournalAuditCreateArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JournalAuditCreateManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JournalAuditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JournalAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JournalAuditDeleteArgs>(args: Prisma.SelectSubset<T, JournalAuditDeleteArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JournalAuditUpdateArgs>(args: Prisma.SelectSubset<T, JournalAuditUpdateArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JournalAuditDeleteManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JournalAuditUpdateManyArgs>(args: Prisma.SelectSubset<T, JournalAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JournalAuditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JournalAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JournalAuditUpsertArgs>(args: Prisma.SelectSubset<T, JournalAuditUpsertArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JournalAuditCountArgs>(args?: Prisma.Subset<T, JournalAuditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JournalAuditCountAggregateOutputType> : number>;
    aggregate<T extends JournalAuditAggregateArgs>(args: Prisma.Subset<T, JournalAuditAggregateArgs>): Prisma.PrismaPromise<GetJournalAuditAggregateType<T>>;
    groupBy<T extends JournalAuditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JournalAuditGroupByArgs['orderBy'];
    } : {
        orderBy?: JournalAuditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JournalAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JournalAuditFieldRefs;
}
export interface Prisma__JournalAuditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JournalAuditFieldRefs {
    readonly id: Prisma.FieldRef<"JournalAudit", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"JournalAudit", 'BigInt'>;
    readonly action: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly dateAction: Prisma.FieldRef<"JournalAudit", 'DateTime'>;
}
export type JournalAuditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalAuditCreateInput, Prisma.JournalAuditUncheckedCreateInput>;
};
export type JournalAuditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JournalAuditCreateManyInput | Prisma.JournalAuditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JournalAuditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    data: Prisma.JournalAuditCreateManyInput | Prisma.JournalAuditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JournalAuditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JournalAuditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalAuditUpdateInput, Prisma.JournalAuditUncheckedUpdateInput>;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyInput>;
    where?: Prisma.JournalAuditWhereInput;
    limit?: number;
};
export type JournalAuditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyInput>;
    where?: Prisma.JournalAuditWhereInput;
    limit?: number;
    include?: Prisma.JournalAuditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JournalAuditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalAuditCreateInput, Prisma.JournalAuditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JournalAuditUpdateInput, Prisma.JournalAuditUncheckedUpdateInput>;
};
export type JournalAuditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    limit?: number;
};
export type JournalAuditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
};
