import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdministrateurModel = runtime.Types.Result.DefaultSelection<Prisma.$AdministrateurPayload>;
export type AggregateAdministrateur = {
    _count: AdministrateurCountAggregateOutputType | null;
    _avg: AdministrateurAvgAggregateOutputType | null;
    _sum: AdministrateurSumAggregateOutputType | null;
    _min: AdministrateurMinAggregateOutputType | null;
    _max: AdministrateurMaxAggregateOutputType | null;
};
export type AdministrateurAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type AdministrateurSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type AdministrateurMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    niveau: string | null;
};
export type AdministrateurMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    niveau: string | null;
};
export type AdministrateurCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    niveau: number;
    _all: number;
};
export type AdministrateurAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type AdministrateurSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type AdministrateurMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    niveau?: true;
};
export type AdministrateurMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    niveau?: true;
};
export type AdministrateurCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    niveau?: true;
    _all?: true;
};
export type AdministrateurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdministrateurCountAggregateInputType;
    _avg?: AdministrateurAvgAggregateInputType;
    _sum?: AdministrateurSumAggregateInputType;
    _min?: AdministrateurMinAggregateInputType;
    _max?: AdministrateurMaxAggregateInputType;
};
export type GetAdministrateurAggregateType<T extends AdministrateurAggregateArgs> = {
    [P in keyof T & keyof AggregateAdministrateur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdministrateur[P]> : Prisma.GetScalarType<T[P], AggregateAdministrateur[P]>;
};
export type AdministrateurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithAggregationInput | Prisma.AdministrateurOrderByWithAggregationInput[];
    by: Prisma.AdministrateurScalarFieldEnum[] | Prisma.AdministrateurScalarFieldEnum;
    having?: Prisma.AdministrateurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdministrateurCountAggregateInputType | true;
    _avg?: AdministrateurAvgAggregateInputType;
    _sum?: AdministrateurSumAggregateInputType;
    _min?: AdministrateurMinAggregateInputType;
    _max?: AdministrateurMaxAggregateInputType;
};
export type AdministrateurGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    niveau: string;
    _count: AdministrateurCountAggregateOutputType | null;
    _avg: AdministrateurAvgAggregateOutputType | null;
    _sum: AdministrateurSumAggregateOutputType | null;
    _min: AdministrateurMinAggregateOutputType | null;
    _max: AdministrateurMaxAggregateOutputType | null;
};
export type GetAdministrateurGroupByPayload<T extends AdministrateurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdministrateurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdministrateurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdministrateurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdministrateurGroupByOutputType[P]>;
}>>;
export type AdministrateurWhereInput = {
    AND?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    OR?: Prisma.AdministrateurWhereInput[];
    NOT?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    id?: Prisma.BigIntFilter<"Administrateur"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Administrateur"> | bigint | number;
    niveau?: Prisma.StringFilter<"Administrateur"> | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type AdministrateurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type AdministrateurWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    utilisateurId?: bigint | number;
    AND?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    OR?: Prisma.AdministrateurWhereInput[];
    NOT?: Prisma.AdministrateurWhereInput | Prisma.AdministrateurWhereInput[];
    niveau?: Prisma.StringFilter<"Administrateur"> | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id" | "utilisateurId">;
export type AdministrateurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    _count?: Prisma.AdministrateurCountOrderByAggregateInput;
    _avg?: Prisma.AdministrateurAvgOrderByAggregateInput;
    _max?: Prisma.AdministrateurMaxOrderByAggregateInput;
    _min?: Prisma.AdministrateurMinOrderByAggregateInput;
    _sum?: Prisma.AdministrateurSumOrderByAggregateInput;
};
export type AdministrateurScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdministrateurScalarWhereWithAggregatesInput | Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdministrateurScalarWhereWithAggregatesInput | Prisma.AdministrateurScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Administrateur"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Administrateur"> | bigint | number;
    niveau?: Prisma.StringWithAggregatesFilter<"Administrateur"> | string;
};
export type AdministrateurCreateInput = {
    id?: bigint | number;
    niveau: string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutAdministrateurInput;
};
export type AdministrateurUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    niveau: string;
};
export type AdministrateurUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutAdministrateurNestedInput;
};
export type AdministrateurUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrateurCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    niveau: string;
};
export type AdministrateurUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrateurUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrateurNullableScalarRelationFilter = {
    is?: Prisma.AdministrateurWhereInput | null;
    isNot?: Prisma.AdministrateurWhereInput | null;
};
export type AdministrateurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
};
export type AdministrateurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type AdministrateurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
};
export type AdministrateurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
};
export type AdministrateurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type AdministrateurCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUncheckedCreateNestedOneWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutUtilisateurInput;
    connect?: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.AdministrateurUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.AdministrateurWhereInput | boolean;
    delete?: Prisma.AdministrateurWhereInput | boolean;
    connect?: Prisma.AdministrateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdministrateurUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.AdministrateurUpdateWithoutUtilisateurInput>, Prisma.AdministrateurUncheckedUpdateWithoutUtilisateurInput>;
};
export type AdministrateurUncheckedUpdateOneWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
    connectOrCreate?: Prisma.AdministrateurCreateOrConnectWithoutUtilisateurInput;
    upsert?: Prisma.AdministrateurUpsertWithoutUtilisateurInput;
    disconnect?: Prisma.AdministrateurWhereInput | boolean;
    delete?: Prisma.AdministrateurWhereInput | boolean;
    connect?: Prisma.AdministrateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdministrateurUpdateToOneWithWhereWithoutUtilisateurInput, Prisma.AdministrateurUpdateWithoutUtilisateurInput>, Prisma.AdministrateurUncheckedUpdateWithoutUtilisateurInput>;
};
export type AdministrateurCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    niveau: string;
};
export type AdministrateurUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    niveau: string;
};
export type AdministrateurCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.AdministrateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
};
export type AdministrateurUpsertWithoutUtilisateurInput = {
    update: Prisma.XOR<Prisma.AdministrateurUpdateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.AdministrateurCreateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedCreateWithoutUtilisateurInput>;
    where?: Prisma.AdministrateurWhereInput;
};
export type AdministrateurUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: Prisma.AdministrateurWhereInput;
    data: Prisma.XOR<Prisma.AdministrateurUpdateWithoutUtilisateurInput, Prisma.AdministrateurUncheckedUpdateWithoutUtilisateurInput>;
};
export type AdministrateurUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrateurUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdministrateurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    niveau?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    niveau?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    niveau?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["administrateur"]>;
export type AdministrateurSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    niveau?: boolean;
};
export type AdministrateurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "niveau", ExtArgs["result"]["administrateur"]>;
export type AdministrateurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type AdministrateurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type AdministrateurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $AdministrateurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Administrateur";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        niveau: string;
    }, ExtArgs["result"]["administrateur"]>;
    composites: {};
};
export type AdministrateurGetPayload<S extends boolean | null | undefined | AdministrateurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload, S>;
export type AdministrateurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdministrateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdministrateurCountAggregateInputType | true;
};
export interface AdministrateurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Administrateur'];
        meta: {
            name: 'Administrateur';
        };
    };
    findUnique<T extends AdministrateurFindUniqueArgs>(args: Prisma.SelectSubset<T, AdministrateurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdministrateurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdministrateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdministrateurFindFirstArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdministrateurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdministrateurFindManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdministrateurCreateArgs>(args: Prisma.SelectSubset<T, AdministrateurCreateArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdministrateurCreateManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdministrateurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdministrateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdministrateurDeleteArgs>(args: Prisma.SelectSubset<T, AdministrateurDeleteArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdministrateurUpdateArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdministrateurDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdministrateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdministrateurUpdateManyArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdministrateurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdministrateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdministrateurUpsertArgs>(args: Prisma.SelectSubset<T, AdministrateurUpsertArgs<ExtArgs>>): Prisma.Prisma__AdministrateurClient<runtime.Types.Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdministrateurCountArgs>(args?: Prisma.Subset<T, AdministrateurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdministrateurCountAggregateOutputType> : number>;
    aggregate<T extends AdministrateurAggregateArgs>(args: Prisma.Subset<T, AdministrateurAggregateArgs>): Prisma.PrismaPromise<GetAdministrateurAggregateType<T>>;
    groupBy<T extends AdministrateurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdministrateurGroupByArgs['orderBy'];
    } : {
        orderBy?: AdministrateurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdministrateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdministrateurFieldRefs;
}
export interface Prisma__AdministrateurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdministrateurFieldRefs {
    readonly id: Prisma.FieldRef<"Administrateur", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Administrateur", 'BigInt'>;
    readonly niveau: Prisma.FieldRef<"Administrateur", 'String'>;
}
export type AdministrateurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where?: Prisma.AdministrateurWhereInput;
    orderBy?: Prisma.AdministrateurOrderByWithRelationInput | Prisma.AdministrateurOrderByWithRelationInput[];
    cursor?: Prisma.AdministrateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdministrateurScalarFieldEnum | Prisma.AdministrateurScalarFieldEnum[];
};
export type AdministrateurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurCreateInput, Prisma.AdministrateurUncheckedCreateInput>;
};
export type AdministrateurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdministrateurCreateManyInput | Prisma.AdministrateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdministrateurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    data: Prisma.AdministrateurCreateManyInput | Prisma.AdministrateurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdministrateurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdministrateurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurUpdateInput, Prisma.AdministrateurUncheckedUpdateInput>;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdministrateurUpdateManyMutationInput, Prisma.AdministrateurUncheckedUpdateManyInput>;
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
};
export type AdministrateurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdministrateurUpdateManyMutationInput, Prisma.AdministrateurUncheckedUpdateManyInput>;
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
    include?: Prisma.AdministrateurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdministrateurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdministrateurCreateInput, Prisma.AdministrateurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdministrateurUpdateInput, Prisma.AdministrateurUncheckedUpdateInput>;
};
export type AdministrateurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
    where: Prisma.AdministrateurWhereUniqueInput;
};
export type AdministrateurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdministrateurWhereInput;
    limit?: number;
};
export type AdministrateurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdministrateurSelect<ExtArgs> | null;
    omit?: Prisma.AdministrateurOmit<ExtArgs> | null;
    include?: Prisma.AdministrateurInclude<ExtArgs> | null;
};
