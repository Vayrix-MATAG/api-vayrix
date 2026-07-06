import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactUrgenceModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactUrgencePayload>;
export type AggregateContactUrgence = {
    _count: ContactUrgenceCountAggregateOutputType | null;
    _avg: ContactUrgenceAvgAggregateOutputType | null;
    _sum: ContactUrgenceSumAggregateOutputType | null;
    _min: ContactUrgenceMinAggregateOutputType | null;
    _max: ContactUrgenceMaxAggregateOutputType | null;
};
export type ContactUrgenceAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type ContactUrgenceSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type ContactUrgenceMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    nom: string | null;
    telephone: string | null;
    mail: string | null;
};
export type ContactUrgenceMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    nom: string | null;
    telephone: string | null;
    mail: string | null;
};
export type ContactUrgenceCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    nom: number;
    telephone: number;
    mail: number;
    _all: number;
};
export type ContactUrgenceAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ContactUrgenceSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ContactUrgenceMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    nom?: true;
    telephone?: true;
    mail?: true;
};
export type ContactUrgenceMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    nom?: true;
    telephone?: true;
    mail?: true;
};
export type ContactUrgenceCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    nom?: true;
    telephone?: true;
    mail?: true;
    _all?: true;
};
export type ContactUrgenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactUrgenceWhereInput;
    orderBy?: Prisma.ContactUrgenceOrderByWithRelationInput | Prisma.ContactUrgenceOrderByWithRelationInput[];
    cursor?: Prisma.ContactUrgenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactUrgenceCountAggregateInputType;
    _avg?: ContactUrgenceAvgAggregateInputType;
    _sum?: ContactUrgenceSumAggregateInputType;
    _min?: ContactUrgenceMinAggregateInputType;
    _max?: ContactUrgenceMaxAggregateInputType;
};
export type GetContactUrgenceAggregateType<T extends ContactUrgenceAggregateArgs> = {
    [P in keyof T & keyof AggregateContactUrgence]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContactUrgence[P]> : Prisma.GetScalarType<T[P], AggregateContactUrgence[P]>;
};
export type ContactUrgenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactUrgenceWhereInput;
    orderBy?: Prisma.ContactUrgenceOrderByWithAggregationInput | Prisma.ContactUrgenceOrderByWithAggregationInput[];
    by: Prisma.ContactUrgenceScalarFieldEnum[] | Prisma.ContactUrgenceScalarFieldEnum;
    having?: Prisma.ContactUrgenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactUrgenceCountAggregateInputType | true;
    _avg?: ContactUrgenceAvgAggregateInputType;
    _sum?: ContactUrgenceSumAggregateInputType;
    _min?: ContactUrgenceMinAggregateInputType;
    _max?: ContactUrgenceMaxAggregateInputType;
};
export type ContactUrgenceGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    nom: string;
    telephone: string;
    mail: string;
    _count: ContactUrgenceCountAggregateOutputType | null;
    _avg: ContactUrgenceAvgAggregateOutputType | null;
    _sum: ContactUrgenceSumAggregateOutputType | null;
    _min: ContactUrgenceMinAggregateOutputType | null;
    _max: ContactUrgenceMaxAggregateOutputType | null;
};
export type GetContactUrgenceGroupByPayload<T extends ContactUrgenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactUrgenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactUrgenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactUrgenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactUrgenceGroupByOutputType[P]>;
}>>;
export type ContactUrgenceWhereInput = {
    AND?: Prisma.ContactUrgenceWhereInput | Prisma.ContactUrgenceWhereInput[];
    OR?: Prisma.ContactUrgenceWhereInput[];
    NOT?: Prisma.ContactUrgenceWhereInput | Prisma.ContactUrgenceWhereInput[];
    id?: Prisma.BigIntFilter<"ContactUrgence"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ContactUrgence"> | bigint | number;
    nom?: Prisma.StringFilter<"ContactUrgence"> | string;
    telephone?: Prisma.StringFilter<"ContactUrgence"> | string;
    mail?: Prisma.StringFilter<"ContactUrgence"> | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
};
export type ContactUrgenceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    mail?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
};
export type ContactUrgenceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.ContactUrgenceWhereInput | Prisma.ContactUrgenceWhereInput[];
    OR?: Prisma.ContactUrgenceWhereInput[];
    NOT?: Prisma.ContactUrgenceWhereInput | Prisma.ContactUrgenceWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"ContactUrgence"> | bigint | number;
    nom?: Prisma.StringFilter<"ContactUrgence"> | string;
    telephone?: Prisma.StringFilter<"ContactUrgence"> | string;
    mail?: Prisma.StringFilter<"ContactUrgence"> | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
}, "id">;
export type ContactUrgenceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    mail?: Prisma.SortOrder;
    _count?: Prisma.ContactUrgenceCountOrderByAggregateInput;
    _avg?: Prisma.ContactUrgenceAvgOrderByAggregateInput;
    _max?: Prisma.ContactUrgenceMaxOrderByAggregateInput;
    _min?: Prisma.ContactUrgenceMinOrderByAggregateInput;
    _sum?: Prisma.ContactUrgenceSumOrderByAggregateInput;
};
export type ContactUrgenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactUrgenceScalarWhereWithAggregatesInput | Prisma.ContactUrgenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactUrgenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactUrgenceScalarWhereWithAggregatesInput | Prisma.ContactUrgenceScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"ContactUrgence"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"ContactUrgence"> | bigint | number;
    nom?: Prisma.StringWithAggregatesFilter<"ContactUrgence"> | string;
    telephone?: Prisma.StringWithAggregatesFilter<"ContactUrgence"> | string;
    mail?: Prisma.StringWithAggregatesFilter<"ContactUrgence"> | string;
};
export type ContactUrgenceCreateInput = {
    id?: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
    client: Prisma.ClientCreateNestedOneWithoutContactUrgencesInput;
};
export type ContactUrgenceUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
};
export type ContactUrgenceUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutContactUrgencesNestedInput;
};
export type ContactUrgenceUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
};
export type ContactUrgenceUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceListRelationFilter = {
    every?: Prisma.ContactUrgenceWhereInput;
    some?: Prisma.ContactUrgenceWhereInput;
    none?: Prisma.ContactUrgenceWhereInput;
};
export type ContactUrgenceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContactUrgenceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    mail?: Prisma.SortOrder;
};
export type ContactUrgenceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ContactUrgenceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    mail?: Prisma.SortOrder;
};
export type ContactUrgenceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    mail?: Prisma.SortOrder;
};
export type ContactUrgenceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ContactUrgenceCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput> | Prisma.ContactUrgenceCreateWithoutClientInput[] | Prisma.ContactUrgenceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ContactUrgenceCreateOrConnectWithoutClientInput | Prisma.ContactUrgenceCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ContactUrgenceCreateManyClientInputEnvelope;
    connect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
};
export type ContactUrgenceUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput> | Prisma.ContactUrgenceCreateWithoutClientInput[] | Prisma.ContactUrgenceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ContactUrgenceCreateOrConnectWithoutClientInput | Prisma.ContactUrgenceCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.ContactUrgenceCreateManyClientInputEnvelope;
    connect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
};
export type ContactUrgenceUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput> | Prisma.ContactUrgenceCreateWithoutClientInput[] | Prisma.ContactUrgenceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ContactUrgenceCreateOrConnectWithoutClientInput | Prisma.ContactUrgenceCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ContactUrgenceUpsertWithWhereUniqueWithoutClientInput | Prisma.ContactUrgenceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ContactUrgenceCreateManyClientInputEnvelope;
    set?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    disconnect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    delete?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    connect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    update?: Prisma.ContactUrgenceUpdateWithWhereUniqueWithoutClientInput | Prisma.ContactUrgenceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ContactUrgenceUpdateManyWithWhereWithoutClientInput | Prisma.ContactUrgenceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ContactUrgenceScalarWhereInput | Prisma.ContactUrgenceScalarWhereInput[];
};
export type ContactUrgenceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput> | Prisma.ContactUrgenceCreateWithoutClientInput[] | Prisma.ContactUrgenceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.ContactUrgenceCreateOrConnectWithoutClientInput | Prisma.ContactUrgenceCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.ContactUrgenceUpsertWithWhereUniqueWithoutClientInput | Prisma.ContactUrgenceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.ContactUrgenceCreateManyClientInputEnvelope;
    set?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    disconnect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    delete?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    connect?: Prisma.ContactUrgenceWhereUniqueInput | Prisma.ContactUrgenceWhereUniqueInput[];
    update?: Prisma.ContactUrgenceUpdateWithWhereUniqueWithoutClientInput | Prisma.ContactUrgenceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.ContactUrgenceUpdateManyWithWhereWithoutClientInput | Prisma.ContactUrgenceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.ContactUrgenceScalarWhereInput | Prisma.ContactUrgenceScalarWhereInput[];
};
export type ContactUrgenceCreateWithoutClientInput = {
    id?: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
};
export type ContactUrgenceUncheckedCreateWithoutClientInput = {
    id?: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
};
export type ContactUrgenceCreateOrConnectWithoutClientInput = {
    where: Prisma.ContactUrgenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput>;
};
export type ContactUrgenceCreateManyClientInputEnvelope = {
    data: Prisma.ContactUrgenceCreateManyClientInput | Prisma.ContactUrgenceCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type ContactUrgenceUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.ContactUrgenceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContactUrgenceUpdateWithoutClientInput, Prisma.ContactUrgenceUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.ContactUrgenceCreateWithoutClientInput, Prisma.ContactUrgenceUncheckedCreateWithoutClientInput>;
};
export type ContactUrgenceUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.ContactUrgenceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContactUrgenceUpdateWithoutClientInput, Prisma.ContactUrgenceUncheckedUpdateWithoutClientInput>;
};
export type ContactUrgenceUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.ContactUrgenceScalarWhereInput;
    data: Prisma.XOR<Prisma.ContactUrgenceUpdateManyMutationInput, Prisma.ContactUrgenceUncheckedUpdateManyWithoutClientInput>;
};
export type ContactUrgenceScalarWhereInput = {
    AND?: Prisma.ContactUrgenceScalarWhereInput | Prisma.ContactUrgenceScalarWhereInput[];
    OR?: Prisma.ContactUrgenceScalarWhereInput[];
    NOT?: Prisma.ContactUrgenceScalarWhereInput | Prisma.ContactUrgenceScalarWhereInput[];
    id?: Prisma.BigIntFilter<"ContactUrgence"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ContactUrgence"> | bigint | number;
    nom?: Prisma.StringFilter<"ContactUrgence"> | string;
    telephone?: Prisma.StringFilter<"ContactUrgence"> | string;
    mail?: Prisma.StringFilter<"ContactUrgence"> | string;
};
export type ContactUrgenceCreateManyClientInput = {
    id?: bigint | number;
    nom: string;
    telephone: string;
    mail: string;
};
export type ContactUrgenceUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceUncheckedUpdateWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.StringFieldUpdateOperationsInput | string;
    mail?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactUrgenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    nom?: boolean;
    telephone?: boolean;
    mail?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactUrgence"]>;
export type ContactUrgenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    nom?: boolean;
    telephone?: boolean;
    mail?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactUrgence"]>;
export type ContactUrgenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    nom?: boolean;
    telephone?: boolean;
    mail?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contactUrgence"]>;
export type ContactUrgenceSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    nom?: boolean;
    telephone?: boolean;
    mail?: boolean;
};
export type ContactUrgenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "nom" | "telephone" | "mail", ExtArgs["result"]["contactUrgence"]>;
export type ContactUrgenceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ContactUrgenceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type ContactUrgenceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
};
export type $ContactUrgencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContactUrgence";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        nom: string;
        telephone: string;
        mail: string;
    }, ExtArgs["result"]["contactUrgence"]>;
    composites: {};
};
export type ContactUrgenceGetPayload<S extends boolean | null | undefined | ContactUrgenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload, S>;
export type ContactUrgenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactUrgenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactUrgenceCountAggregateInputType | true;
};
export interface ContactUrgenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContactUrgence'];
        meta: {
            name: 'ContactUrgence';
        };
    };
    findUnique<T extends ContactUrgenceFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactUrgenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactUrgenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactUrgenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactUrgenceFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactUrgenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactUrgenceFindManyArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactUrgenceCreateArgs>(args: Prisma.SelectSubset<T, ContactUrgenceCreateArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactUrgenceCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactUrgenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactUrgenceDeleteArgs>(args: Prisma.SelectSubset<T, ContactUrgenceDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactUrgenceUpdateArgs>(args: Prisma.SelectSubset<T, ContactUrgenceUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactUrgenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactUrgenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactUrgenceUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactUrgenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactUrgenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactUrgenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactUrgenceUpsertArgs>(args: Prisma.SelectSubset<T, ContactUrgenceUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactUrgenceClient<runtime.Types.Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactUrgenceCountArgs>(args?: Prisma.Subset<T, ContactUrgenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactUrgenceCountAggregateOutputType> : number>;
    aggregate<T extends ContactUrgenceAggregateArgs>(args: Prisma.Subset<T, ContactUrgenceAggregateArgs>): Prisma.PrismaPromise<GetContactUrgenceAggregateType<T>>;
    groupBy<T extends ContactUrgenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactUrgenceGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactUrgenceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactUrgenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUrgenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactUrgenceFieldRefs;
}
export interface Prisma__ContactUrgenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactUrgenceFieldRefs {
    readonly id: Prisma.FieldRef<"ContactUrgence", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"ContactUrgence", 'BigInt'>;
    readonly nom: Prisma.FieldRef<"ContactUrgence", 'String'>;
    readonly telephone: Prisma.FieldRef<"ContactUrgence", 'String'>;
    readonly mail: Prisma.FieldRef<"ContactUrgence", 'String'>;
}
export type ContactUrgenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    where: Prisma.ContactUrgenceWhereUniqueInput;
};
export type ContactUrgenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    where: Prisma.ContactUrgenceWhereUniqueInput;
};
export type ContactUrgenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactUrgenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactUrgenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactUrgenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUrgenceCreateInput, Prisma.ContactUrgenceUncheckedCreateInput>;
};
export type ContactUrgenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactUrgenceCreateManyInput | Prisma.ContactUrgenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactUrgenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    data: Prisma.ContactUrgenceCreateManyInput | Prisma.ContactUrgenceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContactUrgenceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContactUrgenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUrgenceUpdateInput, Prisma.ContactUrgenceUncheckedUpdateInput>;
    where: Prisma.ContactUrgenceWhereUniqueInput;
};
export type ContactUrgenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactUrgenceUpdateManyMutationInput, Prisma.ContactUrgenceUncheckedUpdateManyInput>;
    where?: Prisma.ContactUrgenceWhereInput;
    limit?: number;
};
export type ContactUrgenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUrgenceUpdateManyMutationInput, Prisma.ContactUrgenceUncheckedUpdateManyInput>;
    where?: Prisma.ContactUrgenceWhereInput;
    limit?: number;
    include?: Prisma.ContactUrgenceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContactUrgenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    where: Prisma.ContactUrgenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactUrgenceCreateInput, Prisma.ContactUrgenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactUrgenceUpdateInput, Prisma.ContactUrgenceUncheckedUpdateInput>;
};
export type ContactUrgenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
    where: Prisma.ContactUrgenceWhereUniqueInput;
};
export type ContactUrgenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactUrgenceWhereInput;
    limit?: number;
};
export type ContactUrgenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactUrgenceSelect<ExtArgs> | null;
    omit?: Prisma.ContactUrgenceOmit<ExtArgs> | null;
    include?: Prisma.ContactUrgenceInclude<ExtArgs> | null;
};
