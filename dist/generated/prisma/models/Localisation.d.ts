import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LocalisationModel = runtime.Types.Result.DefaultSelection<Prisma.$LocalisationPayload>;
export type AggregateLocalisation = {
    _count: LocalisationCountAggregateOutputType | null;
    _avg: LocalisationAvgAggregateOutputType | null;
    _sum: LocalisationSumAggregateOutputType | null;
    _min: LocalisationMinAggregateOutputType | null;
    _max: LocalisationMaxAggregateOutputType | null;
};
export type LocalisationAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type LocalisationSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    latitude: number | null;
    longitude: number | null;
};
export type LocalisationMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    adresse: string | null;
    latitude: number | null;
    longitude: number | null;
};
export type LocalisationMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    adresse: string | null;
    latitude: number | null;
    longitude: number | null;
};
export type LocalisationCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    adresse: number;
    latitude: number;
    longitude: number;
    _all: number;
};
export type LocalisationAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    latitude?: true;
    longitude?: true;
};
export type LocalisationSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    latitude?: true;
    longitude?: true;
};
export type LocalisationMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    adresse?: true;
    latitude?: true;
    longitude?: true;
};
export type LocalisationMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    adresse?: true;
    latitude?: true;
    longitude?: true;
};
export type LocalisationCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    adresse?: true;
    latitude?: true;
    longitude?: true;
    _all?: true;
};
export type LocalisationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocalisationWhereInput;
    orderBy?: Prisma.LocalisationOrderByWithRelationInput | Prisma.LocalisationOrderByWithRelationInput[];
    cursor?: Prisma.LocalisationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LocalisationCountAggregateInputType;
    _avg?: LocalisationAvgAggregateInputType;
    _sum?: LocalisationSumAggregateInputType;
    _min?: LocalisationMinAggregateInputType;
    _max?: LocalisationMaxAggregateInputType;
};
export type GetLocalisationAggregateType<T extends LocalisationAggregateArgs> = {
    [P in keyof T & keyof AggregateLocalisation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocalisation[P]> : Prisma.GetScalarType<T[P], AggregateLocalisation[P]>;
};
export type LocalisationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocalisationWhereInput;
    orderBy?: Prisma.LocalisationOrderByWithAggregationInput | Prisma.LocalisationOrderByWithAggregationInput[];
    by: Prisma.LocalisationScalarFieldEnum[] | Prisma.LocalisationScalarFieldEnum;
    having?: Prisma.LocalisationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocalisationCountAggregateInputType | true;
    _avg?: LocalisationAvgAggregateInputType;
    _sum?: LocalisationSumAggregateInputType;
    _min?: LocalisationMinAggregateInputType;
    _max?: LocalisationMaxAggregateInputType;
};
export type LocalisationGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    adresse: string;
    latitude: number;
    longitude: number;
    _count: LocalisationCountAggregateOutputType | null;
    _avg: LocalisationAvgAggregateOutputType | null;
    _sum: LocalisationSumAggregateOutputType | null;
    _min: LocalisationMinAggregateOutputType | null;
    _max: LocalisationMaxAggregateOutputType | null;
};
export type GetLocalisationGroupByPayload<T extends LocalisationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocalisationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocalisationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocalisationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocalisationGroupByOutputType[P]>;
}>>;
export type LocalisationWhereInput = {
    AND?: Prisma.LocalisationWhereInput | Prisma.LocalisationWhereInput[];
    OR?: Prisma.LocalisationWhereInput[];
    NOT?: Prisma.LocalisationWhereInput | Prisma.LocalisationWhereInput[];
    id?: Prisma.BigIntFilter<"Localisation"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Localisation"> | bigint | number;
    adresse?: Prisma.StringFilter<"Localisation"> | string;
    latitude?: Prisma.FloatFilter<"Localisation"> | number;
    longitude?: Prisma.FloatFilter<"Localisation"> | number;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type LocalisationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type LocalisationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.LocalisationWhereInput | Prisma.LocalisationWhereInput[];
    OR?: Prisma.LocalisationWhereInput[];
    NOT?: Prisma.LocalisationWhereInput | Prisma.LocalisationWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"Localisation"> | bigint | number;
    adresse?: Prisma.StringFilter<"Localisation"> | string;
    latitude?: Prisma.FloatFilter<"Localisation"> | number;
    longitude?: Prisma.FloatFilter<"Localisation"> | number;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type LocalisationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    _count?: Prisma.LocalisationCountOrderByAggregateInput;
    _avg?: Prisma.LocalisationAvgOrderByAggregateInput;
    _max?: Prisma.LocalisationMaxOrderByAggregateInput;
    _min?: Prisma.LocalisationMinOrderByAggregateInput;
    _sum?: Prisma.LocalisationSumOrderByAggregateInput;
};
export type LocalisationScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocalisationScalarWhereWithAggregatesInput | Prisma.LocalisationScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocalisationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocalisationScalarWhereWithAggregatesInput | Prisma.LocalisationScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Localisation"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Localisation"> | bigint | number;
    adresse?: Prisma.StringWithAggregatesFilter<"Localisation"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"Localisation"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Localisation"> | number;
};
export type LocalisationCreateInput = {
    id?: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutLocalisationsInput;
};
export type LocalisationUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
};
export type LocalisationUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutLocalisationsNestedInput;
};
export type LocalisationUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
};
export type LocalisationUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationListRelationFilter = {
    every?: Prisma.LocalisationWhereInput;
    some?: Prisma.LocalisationWhereInput;
    none?: Prisma.LocalisationWhereInput;
};
export type LocalisationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocalisationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LocalisationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LocalisationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LocalisationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LocalisationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type LocalisationCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput> | Prisma.LocalisationCreateWithoutUtilisateurInput[] | Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput | Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.LocalisationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
};
export type LocalisationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput> | Prisma.LocalisationCreateWithoutUtilisateurInput[] | Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput | Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.LocalisationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
};
export type LocalisationUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput> | Prisma.LocalisationCreateWithoutUtilisateurInput[] | Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput | Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.LocalisationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.LocalisationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.LocalisationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    disconnect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    delete?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    connect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    update?: Prisma.LocalisationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.LocalisationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.LocalisationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.LocalisationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.LocalisationScalarWhereInput | Prisma.LocalisationScalarWhereInput[];
};
export type LocalisationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput> | Prisma.LocalisationCreateWithoutUtilisateurInput[] | Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput | Prisma.LocalisationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.LocalisationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.LocalisationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.LocalisationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    disconnect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    delete?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    connect?: Prisma.LocalisationWhereUniqueInput | Prisma.LocalisationWhereUniqueInput[];
    update?: Prisma.LocalisationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.LocalisationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.LocalisationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.LocalisationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.LocalisationScalarWhereInput | Prisma.LocalisationScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LocalisationCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
};
export type LocalisationUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
};
export type LocalisationCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.LocalisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput>;
};
export type LocalisationCreateManyUtilisateurInputEnvelope = {
    data: Prisma.LocalisationCreateManyUtilisateurInput | Prisma.LocalisationCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type LocalisationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.LocalisationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocalisationUpdateWithoutUtilisateurInput, Prisma.LocalisationUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.LocalisationCreateWithoutUtilisateurInput, Prisma.LocalisationUncheckedCreateWithoutUtilisateurInput>;
};
export type LocalisationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.LocalisationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocalisationUpdateWithoutUtilisateurInput, Prisma.LocalisationUncheckedUpdateWithoutUtilisateurInput>;
};
export type LocalisationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.LocalisationScalarWhereInput;
    data: Prisma.XOR<Prisma.LocalisationUpdateManyMutationInput, Prisma.LocalisationUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type LocalisationScalarWhereInput = {
    AND?: Prisma.LocalisationScalarWhereInput | Prisma.LocalisationScalarWhereInput[];
    OR?: Prisma.LocalisationScalarWhereInput[];
    NOT?: Prisma.LocalisationScalarWhereInput | Prisma.LocalisationScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Localisation"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Localisation"> | bigint | number;
    adresse?: Prisma.StringFilter<"Localisation"> | string;
    latitude?: Prisma.FloatFilter<"Localisation"> | number;
    longitude?: Prisma.FloatFilter<"Localisation"> | number;
};
export type LocalisationCreateManyUtilisateurInput = {
    id?: bigint | number;
    adresse: string;
    latitude: number;
    longitude: number;
};
export type LocalisationUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    adresse?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type LocalisationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    adresse?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["localisation"]>;
export type LocalisationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    adresse?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["localisation"]>;
export type LocalisationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    adresse?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["localisation"]>;
export type LocalisationSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    adresse?: boolean;
    latitude?: boolean;
    longitude?: boolean;
};
export type LocalisationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "adresse" | "latitude" | "longitude", ExtArgs["result"]["localisation"]>;
export type LocalisationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type LocalisationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type LocalisationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $LocalisationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Localisation";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        adresse: string;
        latitude: number;
        longitude: number;
    }, ExtArgs["result"]["localisation"]>;
    composites: {};
};
export type LocalisationGetPayload<S extends boolean | null | undefined | LocalisationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocalisationPayload, S>;
export type LocalisationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocalisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocalisationCountAggregateInputType | true;
};
export interface LocalisationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Localisation'];
        meta: {
            name: 'Localisation';
        };
    };
    findUnique<T extends LocalisationFindUniqueArgs>(args: Prisma.SelectSubset<T, LocalisationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LocalisationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocalisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LocalisationFindFirstArgs>(args?: Prisma.SelectSubset<T, LocalisationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LocalisationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocalisationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LocalisationFindManyArgs>(args?: Prisma.SelectSubset<T, LocalisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LocalisationCreateArgs>(args: Prisma.SelectSubset<T, LocalisationCreateArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LocalisationCreateManyArgs>(args?: Prisma.SelectSubset<T, LocalisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LocalisationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocalisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LocalisationDeleteArgs>(args: Prisma.SelectSubset<T, LocalisationDeleteArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LocalisationUpdateArgs>(args: Prisma.SelectSubset<T, LocalisationUpdateArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LocalisationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocalisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LocalisationUpdateManyArgs>(args: Prisma.SelectSubset<T, LocalisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LocalisationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocalisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LocalisationUpsertArgs>(args: Prisma.SelectSubset<T, LocalisationUpsertArgs<ExtArgs>>): Prisma.Prisma__LocalisationClient<runtime.Types.Result.GetResult<Prisma.$LocalisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LocalisationCountArgs>(args?: Prisma.Subset<T, LocalisationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocalisationCountAggregateOutputType> : number>;
    aggregate<T extends LocalisationAggregateArgs>(args: Prisma.Subset<T, LocalisationAggregateArgs>): Prisma.PrismaPromise<GetLocalisationAggregateType<T>>;
    groupBy<T extends LocalisationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocalisationGroupByArgs['orderBy'];
    } : {
        orderBy?: LocalisationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocalisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LocalisationFieldRefs;
}
export interface Prisma__LocalisationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LocalisationFieldRefs {
    readonly id: Prisma.FieldRef<"Localisation", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Localisation", 'BigInt'>;
    readonly adresse: Prisma.FieldRef<"Localisation", 'String'>;
    readonly latitude: Prisma.FieldRef<"Localisation", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Localisation", 'Float'>;
}
export type LocalisationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where: Prisma.LocalisationWhereUniqueInput;
};
export type LocalisationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where: Prisma.LocalisationWhereUniqueInput;
};
export type LocalisationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where?: Prisma.LocalisationWhereInput;
    orderBy?: Prisma.LocalisationOrderByWithRelationInput | Prisma.LocalisationOrderByWithRelationInput[];
    cursor?: Prisma.LocalisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocalisationScalarFieldEnum | Prisma.LocalisationScalarFieldEnum[];
};
export type LocalisationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where?: Prisma.LocalisationWhereInput;
    orderBy?: Prisma.LocalisationOrderByWithRelationInput | Prisma.LocalisationOrderByWithRelationInput[];
    cursor?: Prisma.LocalisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocalisationScalarFieldEnum | Prisma.LocalisationScalarFieldEnum[];
};
export type LocalisationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where?: Prisma.LocalisationWhereInput;
    orderBy?: Prisma.LocalisationOrderByWithRelationInput | Prisma.LocalisationOrderByWithRelationInput[];
    cursor?: Prisma.LocalisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocalisationScalarFieldEnum | Prisma.LocalisationScalarFieldEnum[];
};
export type LocalisationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocalisationCreateInput, Prisma.LocalisationUncheckedCreateInput>;
};
export type LocalisationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LocalisationCreateManyInput | Prisma.LocalisationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LocalisationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    data: Prisma.LocalisationCreateManyInput | Prisma.LocalisationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LocalisationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LocalisationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocalisationUpdateInput, Prisma.LocalisationUncheckedUpdateInput>;
    where: Prisma.LocalisationWhereUniqueInput;
};
export type LocalisationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LocalisationUpdateManyMutationInput, Prisma.LocalisationUncheckedUpdateManyInput>;
    where?: Prisma.LocalisationWhereInput;
    limit?: number;
};
export type LocalisationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocalisationUpdateManyMutationInput, Prisma.LocalisationUncheckedUpdateManyInput>;
    where?: Prisma.LocalisationWhereInput;
    limit?: number;
    include?: Prisma.LocalisationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LocalisationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where: Prisma.LocalisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocalisationCreateInput, Prisma.LocalisationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LocalisationUpdateInput, Prisma.LocalisationUncheckedUpdateInput>;
};
export type LocalisationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
    where: Prisma.LocalisationWhereUniqueInput;
};
export type LocalisationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocalisationWhereInput;
    limit?: number;
};
export type LocalisationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocalisationSelect<ExtArgs> | null;
    omit?: Prisma.LocalisationOmit<ExtArgs> | null;
    include?: Prisma.LocalisationInclude<ExtArgs> | null;
};
