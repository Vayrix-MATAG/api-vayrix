import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ModeSecuriteModel = runtime.Types.Result.DefaultSelection<Prisma.$ModeSecuritePayload>;
export type AggregateModeSecurite = {
    _count: ModeSecuriteCountAggregateOutputType | null;
    _avg: ModeSecuriteAvgAggregateOutputType | null;
    _sum: ModeSecuriteSumAggregateOutputType | null;
    _min: ModeSecuriteMinAggregateOutputType | null;
    _max: ModeSecuriteMaxAggregateOutputType | null;
};
export type ModeSecuriteAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type ModeSecuriteSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type ModeSecuriteMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    actif: boolean | null;
    dateActivation: Date | null;
    dateDesactivation: Date | null;
};
export type ModeSecuriteMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    actif: boolean | null;
    dateActivation: Date | null;
    dateDesactivation: Date | null;
};
export type ModeSecuriteCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    actif: number;
    dateActivation: number;
    dateDesactivation: number;
    _all: number;
};
export type ModeSecuriteAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ModeSecuriteSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type ModeSecuriteMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    actif?: true;
    dateActivation?: true;
    dateDesactivation?: true;
};
export type ModeSecuriteMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    actif?: true;
    dateActivation?: true;
    dateDesactivation?: true;
};
export type ModeSecuriteCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    actif?: true;
    dateActivation?: true;
    dateDesactivation?: true;
    _all?: true;
};
export type ModeSecuriteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeSecuriteWhereInput;
    orderBy?: Prisma.ModeSecuriteOrderByWithRelationInput | Prisma.ModeSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.ModeSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModeSecuriteCountAggregateInputType;
    _avg?: ModeSecuriteAvgAggregateInputType;
    _sum?: ModeSecuriteSumAggregateInputType;
    _min?: ModeSecuriteMinAggregateInputType;
    _max?: ModeSecuriteMaxAggregateInputType;
};
export type GetModeSecuriteAggregateType<T extends ModeSecuriteAggregateArgs> = {
    [P in keyof T & keyof AggregateModeSecurite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModeSecurite[P]> : Prisma.GetScalarType<T[P], AggregateModeSecurite[P]>;
};
export type ModeSecuriteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeSecuriteWhereInput;
    orderBy?: Prisma.ModeSecuriteOrderByWithAggregationInput | Prisma.ModeSecuriteOrderByWithAggregationInput[];
    by: Prisma.ModeSecuriteScalarFieldEnum[] | Prisma.ModeSecuriteScalarFieldEnum;
    having?: Prisma.ModeSecuriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModeSecuriteCountAggregateInputType | true;
    _avg?: ModeSecuriteAvgAggregateInputType;
    _sum?: ModeSecuriteSumAggregateInputType;
    _min?: ModeSecuriteMinAggregateInputType;
    _max?: ModeSecuriteMaxAggregateInputType;
};
export type ModeSecuriteGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    actif: boolean;
    dateActivation: Date | null;
    dateDesactivation: Date | null;
    _count: ModeSecuriteCountAggregateOutputType | null;
    _avg: ModeSecuriteAvgAggregateOutputType | null;
    _sum: ModeSecuriteSumAggregateOutputType | null;
    _min: ModeSecuriteMinAggregateOutputType | null;
    _max: ModeSecuriteMaxAggregateOutputType | null;
};
export type GetModeSecuriteGroupByPayload<T extends ModeSecuriteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModeSecuriteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModeSecuriteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModeSecuriteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModeSecuriteGroupByOutputType[P]>;
}>>;
export type ModeSecuriteWhereInput = {
    AND?: Prisma.ModeSecuriteWhereInput | Prisma.ModeSecuriteWhereInput[];
    OR?: Prisma.ModeSecuriteWhereInput[];
    NOT?: Prisma.ModeSecuriteWhereInput | Prisma.ModeSecuriteWhereInput[];
    id?: Prisma.BigIntFilter<"ModeSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"ModeSecurite"> | bigint | number;
    actif?: Prisma.BoolFilter<"ModeSecurite"> | boolean;
    dateActivation?: Prisma.DateTimeNullableFilter<"ModeSecurite"> | Date | string | null;
    dateDesactivation?: Prisma.DateTimeNullableFilter<"ModeSecurite"> | Date | string | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type ModeSecuriteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    dateActivation?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDesactivation?: Prisma.SortOrderInput | Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type ModeSecuriteWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    utilisateurId?: bigint | number;
    AND?: Prisma.ModeSecuriteWhereInput | Prisma.ModeSecuriteWhereInput[];
    OR?: Prisma.ModeSecuriteWhereInput[];
    NOT?: Prisma.ModeSecuriteWhereInput | Prisma.ModeSecuriteWhereInput[];
    actif?: Prisma.BoolFilter<"ModeSecurite"> | boolean;
    dateActivation?: Prisma.DateTimeNullableFilter<"ModeSecurite"> | Date | string | null;
    dateDesactivation?: Prisma.DateTimeNullableFilter<"ModeSecurite"> | Date | string | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id" | "utilisateurId">;
export type ModeSecuriteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    dateActivation?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDesactivation?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ModeSecuriteCountOrderByAggregateInput;
    _avg?: Prisma.ModeSecuriteAvgOrderByAggregateInput;
    _max?: Prisma.ModeSecuriteMaxOrderByAggregateInput;
    _min?: Prisma.ModeSecuriteMinOrderByAggregateInput;
    _sum?: Prisma.ModeSecuriteSumOrderByAggregateInput;
};
export type ModeSecuriteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModeSecuriteScalarWhereWithAggregatesInput | Prisma.ModeSecuriteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModeSecuriteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModeSecuriteScalarWhereWithAggregatesInput | Prisma.ModeSecuriteScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"ModeSecurite"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"ModeSecurite"> | bigint | number;
    actif?: Prisma.BoolWithAggregatesFilter<"ModeSecurite"> | boolean;
    dateActivation?: Prisma.DateTimeNullableWithAggregatesFilter<"ModeSecurite"> | Date | string | null;
    dateDesactivation?: Prisma.DateTimeNullableWithAggregatesFilter<"ModeSecurite"> | Date | string | null;
};
export type ModeSecuriteCreateInput = {
    id?: bigint | number;
    actif?: boolean;
    dateActivation?: Date | string | null;
    dateDesactivation?: Date | string | null;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutModeSecuriteInput;
};
export type ModeSecuriteUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    actif?: boolean;
    dateActivation?: Date | string | null;
    dateDesactivation?: Date | string | null;
};
export type ModeSecuriteUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutModeSecuriteNestedInput;
};
export type ModeSecuriteUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModeSecuriteCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    actif?: boolean;
    dateActivation?: Date | string | null;
    dateDesactivation?: Date | string | null;
};
export type ModeSecuriteUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModeSecuriteUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModeSecuriteNullableScalarRelationFilter = {
    is?: Prisma.ModeSecuriteWhereInput | null;
    isNot?: Prisma.ModeSecuriteWhereInput | null;
};
export type ModeSecuriteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    dateActivation?: Prisma.SortOrder;
    dateDesactivation?: Prisma.SortOrder;
};
export type ModeSecuriteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ModeSecuriteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    dateActivation?: Prisma.SortOrder;
    dateDesactivation?: Prisma.SortOrder;
};
export type ModeSecuriteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    dateActivation?: Prisma.SortOrder;
    dateDesactivation?: Prisma.SortOrder;
};
export type ModeSecuriteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type ModeSecuriteCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ModeSecuriteCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteUncheckedCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ModeSecuriteCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ModeSecuriteCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ModeSecuriteUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ModeSecuriteWhereInput | boolean;
    delete?: Prisma.ModeSecuriteWhereInput | boolean;
    connect?: Prisma.ModeSecuriteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModeSecuriteUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ModeSecuriteUpdateWithoutUtilisateurInput>, Prisma.ModeSecuriteUncheckedUpdateWithoutUtilisateurInput>;
};
export type ModeSecuriteUncheckedUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.ModeSecuriteCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.ModeSecuriteUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.ModeSecuriteWhereInput | boolean;
    delete?: Prisma.ModeSecuriteWhereInput | boolean;
    connect?: Prisma.ModeSecuriteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModeSecuriteUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.ModeSecuriteUpdateWithoutUtilisateurInput>, Prisma.ModeSecuriteUncheckedUpdateWithoutUtilisateurInput>;
};
export type ModeSecuriteCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    actif?: boolean;
    dateActivation?: Date | string | null;
    dateDesactivation?: Date | string | null;
};
export type ModeSecuriteUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    actif?: boolean;
    dateActivation?: Date | string | null;
    dateDesactivation?: Date | string | null;
};
export type ModeSecuriteCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.ModeSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
};
export type ModeSecuriteUpsertWithoutUtilisateurInput = {
    update: Prisma.XOR<Prisma.ModeSecuriteUpdateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.ModeSecuriteCreateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedCreateWithoutUtilisateurInput>;
    where?: Prisma.ModeSecuriteWhereInput;
};
export type ModeSecuriteUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: Prisma.ModeSecuriteWhereInput;
    data: Prisma.XOR<Prisma.ModeSecuriteUpdateWithoutUtilisateurInput, Prisma.ModeSecuriteUncheckedUpdateWithoutUtilisateurInput>;
};
export type ModeSecuriteUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModeSecuriteUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateActivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dateDesactivation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ModeSecuriteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    actif?: boolean;
    dateActivation?: boolean;
    dateDesactivation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modeSecurite"]>;
export type ModeSecuriteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    actif?: boolean;
    dateActivation?: boolean;
    dateDesactivation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modeSecurite"]>;
export type ModeSecuriteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    actif?: boolean;
    dateActivation?: boolean;
    dateDesactivation?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modeSecurite"]>;
export type ModeSecuriteSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    actif?: boolean;
    dateActivation?: boolean;
    dateDesactivation?: boolean;
};
export type ModeSecuriteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "actif" | "dateActivation" | "dateDesactivation", ExtArgs["result"]["modeSecurite"]>;
export type ModeSecuriteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type ModeSecuriteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type ModeSecuriteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $ModeSecuritePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ModeSecurite";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        actif: boolean;
        dateActivation: Date | null;
        dateDesactivation: Date | null;
    }, ExtArgs["result"]["modeSecurite"]>;
    composites: {};
};
export type ModeSecuriteGetPayload<S extends boolean | null | undefined | ModeSecuriteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload, S>;
export type ModeSecuriteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModeSecuriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModeSecuriteCountAggregateInputType | true;
};
export interface ModeSecuriteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ModeSecurite'];
        meta: {
            name: 'ModeSecurite';
        };
    };
    findUnique<T extends ModeSecuriteFindUniqueArgs>(args: Prisma.SelectSubset<T, ModeSecuriteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModeSecuriteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModeSecuriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModeSecuriteFindFirstArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModeSecuriteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModeSecuriteFindManyArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModeSecuriteCreateArgs>(args: Prisma.SelectSubset<T, ModeSecuriteCreateArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModeSecuriteCreateManyArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ModeSecuriteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ModeSecuriteDeleteArgs>(args: Prisma.SelectSubset<T, ModeSecuriteDeleteArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModeSecuriteUpdateArgs>(args: Prisma.SelectSubset<T, ModeSecuriteUpdateArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModeSecuriteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModeSecuriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModeSecuriteUpdateManyArgs>(args: Prisma.SelectSubset<T, ModeSecuriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ModeSecuriteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModeSecuriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ModeSecuriteUpsertArgs>(args: Prisma.SelectSubset<T, ModeSecuriteUpsertArgs<ExtArgs>>): Prisma.Prisma__ModeSecuriteClient<runtime.Types.Result.GetResult<Prisma.$ModeSecuritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModeSecuriteCountArgs>(args?: Prisma.Subset<T, ModeSecuriteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModeSecuriteCountAggregateOutputType> : number>;
    aggregate<T extends ModeSecuriteAggregateArgs>(args: Prisma.Subset<T, ModeSecuriteAggregateArgs>): Prisma.PrismaPromise<GetModeSecuriteAggregateType<T>>;
    groupBy<T extends ModeSecuriteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModeSecuriteGroupByArgs['orderBy'];
    } : {
        orderBy?: ModeSecuriteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModeSecuriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeSecuriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModeSecuriteFieldRefs;
}
export interface Prisma__ModeSecuriteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModeSecuriteFieldRefs {
    readonly id: Prisma.FieldRef<"ModeSecurite", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"ModeSecurite", 'BigInt'>;
    readonly actif: Prisma.FieldRef<"ModeSecurite", 'Boolean'>;
    readonly dateActivation: Prisma.FieldRef<"ModeSecurite", 'DateTime'>;
    readonly dateDesactivation: Prisma.FieldRef<"ModeSecurite", 'DateTime'>;
}
export type ModeSecuriteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where?: Prisma.ModeSecuriteWhereInput;
    orderBy?: Prisma.ModeSecuriteOrderByWithRelationInput | Prisma.ModeSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.ModeSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModeSecuriteScalarFieldEnum | Prisma.ModeSecuriteScalarFieldEnum[];
};
export type ModeSecuriteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where?: Prisma.ModeSecuriteWhereInput;
    orderBy?: Prisma.ModeSecuriteOrderByWithRelationInput | Prisma.ModeSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.ModeSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModeSecuriteScalarFieldEnum | Prisma.ModeSecuriteScalarFieldEnum[];
};
export type ModeSecuriteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where?: Prisma.ModeSecuriteWhereInput;
    orderBy?: Prisma.ModeSecuriteOrderByWithRelationInput | Prisma.ModeSecuriteOrderByWithRelationInput[];
    cursor?: Prisma.ModeSecuriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModeSecuriteScalarFieldEnum | Prisma.ModeSecuriteScalarFieldEnum[];
};
export type ModeSecuriteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModeSecuriteCreateInput, Prisma.ModeSecuriteUncheckedCreateInput>;
};
export type ModeSecuriteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModeSecuriteCreateManyInput | Prisma.ModeSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModeSecuriteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    data: Prisma.ModeSecuriteCreateManyInput | Prisma.ModeSecuriteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ModeSecuriteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ModeSecuriteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModeSecuriteUpdateInput, Prisma.ModeSecuriteUncheckedUpdateInput>;
    where: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModeSecuriteUpdateManyMutationInput, Prisma.ModeSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.ModeSecuriteWhereInput;
    limit?: number;
};
export type ModeSecuriteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModeSecuriteUpdateManyMutationInput, Prisma.ModeSecuriteUncheckedUpdateManyInput>;
    where?: Prisma.ModeSecuriteWhereInput;
    limit?: number;
    include?: Prisma.ModeSecuriteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ModeSecuriteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where: Prisma.ModeSecuriteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModeSecuriteCreateInput, Prisma.ModeSecuriteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModeSecuriteUpdateInput, Prisma.ModeSecuriteUncheckedUpdateInput>;
};
export type ModeSecuriteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
    where: Prisma.ModeSecuriteWhereUniqueInput;
};
export type ModeSecuriteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModeSecuriteWhereInput;
    limit?: number;
};
export type ModeSecuriteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModeSecuriteSelect<ExtArgs> | null;
    omit?: Prisma.ModeSecuriteOmit<ExtArgs> | null;
    include?: Prisma.ModeSecuriteInclude<ExtArgs> | null;
};
