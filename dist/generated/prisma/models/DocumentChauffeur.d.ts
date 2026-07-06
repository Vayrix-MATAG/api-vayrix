import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentChauffeurModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentChauffeurPayload>;
export type AggregateDocumentChauffeur = {
    _count: DocumentChauffeurCountAggregateOutputType | null;
    _avg: DocumentChauffeurAvgAggregateOutputType | null;
    _sum: DocumentChauffeurSumAggregateOutputType | null;
    _min: DocumentChauffeurMinAggregateOutputType | null;
    _max: DocumentChauffeurMaxAggregateOutputType | null;
};
export type DocumentChauffeurAvgAggregateOutputType = {
    id: number | null;
    chauffeurId: number | null;
};
export type DocumentChauffeurSumAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
};
export type DocumentChauffeurMinAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    typeDocument: string | null;
    urlDocument: string | null;
    statut: string | null;
    dateUpload: Date | null;
};
export type DocumentChauffeurMaxAggregateOutputType = {
    id: bigint | null;
    chauffeurId: bigint | null;
    typeDocument: string | null;
    urlDocument: string | null;
    statut: string | null;
    dateUpload: Date | null;
};
export type DocumentChauffeurCountAggregateOutputType = {
    id: number;
    chauffeurId: number;
    typeDocument: number;
    urlDocument: number;
    statut: number;
    dateUpload: number;
    _all: number;
};
export type DocumentChauffeurAvgAggregateInputType = {
    id?: true;
    chauffeurId?: true;
};
export type DocumentChauffeurSumAggregateInputType = {
    id?: true;
    chauffeurId?: true;
};
export type DocumentChauffeurMinAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
};
export type DocumentChauffeurMaxAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
};
export type DocumentChauffeurCountAggregateInputType = {
    id?: true;
    chauffeurId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
    _all?: true;
};
export type DocumentChauffeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithRelationInput | Prisma.DocumentChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentChauffeurCountAggregateInputType;
    _avg?: DocumentChauffeurAvgAggregateInputType;
    _sum?: DocumentChauffeurSumAggregateInputType;
    _min?: DocumentChauffeurMinAggregateInputType;
    _max?: DocumentChauffeurMaxAggregateInputType;
};
export type GetDocumentChauffeurAggregateType<T extends DocumentChauffeurAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentChauffeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentChauffeur[P]> : Prisma.GetScalarType<T[P], AggregateDocumentChauffeur[P]>;
};
export type DocumentChauffeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithAggregationInput | Prisma.DocumentChauffeurOrderByWithAggregationInput[];
    by: Prisma.DocumentChauffeurScalarFieldEnum[] | Prisma.DocumentChauffeurScalarFieldEnum;
    having?: Prisma.DocumentChauffeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentChauffeurCountAggregateInputType | true;
    _avg?: DocumentChauffeurAvgAggregateInputType;
    _sum?: DocumentChauffeurSumAggregateInputType;
    _min?: DocumentChauffeurMinAggregateInputType;
    _max?: DocumentChauffeurMaxAggregateInputType;
};
export type DocumentChauffeurGroupByOutputType = {
    id: bigint;
    chauffeurId: bigint;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload: Date;
    _count: DocumentChauffeurCountAggregateOutputType | null;
    _avg: DocumentChauffeurAvgAggregateOutputType | null;
    _sum: DocumentChauffeurSumAggregateOutputType | null;
    _min: DocumentChauffeurMinAggregateOutputType | null;
    _max: DocumentChauffeurMaxAggregateOutputType | null;
};
export type GetDocumentChauffeurGroupByPayload<T extends DocumentChauffeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentChauffeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentChauffeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentChauffeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentChauffeurGroupByOutputType[P]>;
}>>;
export type DocumentChauffeurWhereInput = {
    AND?: Prisma.DocumentChauffeurWhereInput | Prisma.DocumentChauffeurWhereInput[];
    OR?: Prisma.DocumentChauffeurWhereInput[];
    NOT?: Prisma.DocumentChauffeurWhereInput | Prisma.DocumentChauffeurWhereInput[];
    id?: Prisma.BigIntFilter<"DocumentChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"DocumentChauffeur"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    statut?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentChauffeur"> | Date | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
};
export type DocumentChauffeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
    chauffeur?: Prisma.ChauffeurOrderByWithRelationInput;
};
export type DocumentChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.DocumentChauffeurWhereInput | Prisma.DocumentChauffeurWhereInput[];
    OR?: Prisma.DocumentChauffeurWhereInput[];
    NOT?: Prisma.DocumentChauffeurWhereInput | Prisma.DocumentChauffeurWhereInput[];
    chauffeurId?: Prisma.BigIntFilter<"DocumentChauffeur"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    statut?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentChauffeur"> | Date | string;
    chauffeur?: Prisma.XOR<Prisma.ChauffeurScalarRelationFilter, Prisma.ChauffeurWhereInput>;
}, "id">;
export type DocumentChauffeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
    _count?: Prisma.DocumentChauffeurCountOrderByAggregateInput;
    _avg?: Prisma.DocumentChauffeurAvgOrderByAggregateInput;
    _max?: Prisma.DocumentChauffeurMaxOrderByAggregateInput;
    _min?: Prisma.DocumentChauffeurMinOrderByAggregateInput;
    _sum?: Prisma.DocumentChauffeurSumOrderByAggregateInput;
};
export type DocumentChauffeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentChauffeurScalarWhereWithAggregatesInput | Prisma.DocumentChauffeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentChauffeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentChauffeurScalarWhereWithAggregatesInput | Prisma.DocumentChauffeurScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"DocumentChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntWithAggregatesFilter<"DocumentChauffeur"> | bigint | number;
    typeDocument?: Prisma.StringWithAggregatesFilter<"DocumentChauffeur"> | string;
    urlDocument?: Prisma.StringWithAggregatesFilter<"DocumentChauffeur"> | string;
    statut?: Prisma.StringWithAggregatesFilter<"DocumentChauffeur"> | string;
    dateUpload?: Prisma.DateTimeWithAggregatesFilter<"DocumentChauffeur"> | Date | string;
};
export type DocumentChauffeurCreateInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
    chauffeur: Prisma.ChauffeurCreateNestedOneWithoutDocumentChauffeursInput;
};
export type DocumentChauffeurUncheckedCreateInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentChauffeurUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chauffeur?: Prisma.ChauffeurUpdateOneRequiredWithoutDocumentChauffeursNestedInput;
};
export type DocumentChauffeurUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurCreateManyInput = {
    id?: bigint | number;
    chauffeurId: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentChauffeurUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    chauffeurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurListRelationFilter = {
    every?: Prisma.DocumentChauffeurWhereInput;
    some?: Prisma.DocumentChauffeurWhereInput;
    none?: Prisma.DocumentChauffeurWhereInput;
};
export type DocumentChauffeurOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentChauffeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentChauffeurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
};
export type DocumentChauffeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentChauffeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentChauffeurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chauffeurId?: Prisma.SortOrder;
};
export type DocumentChauffeurCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.DocumentChauffeurCreateWithoutChauffeurInput[] | Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.DocumentChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
};
export type DocumentChauffeurUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.DocumentChauffeurCreateWithoutChauffeurInput[] | Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput[];
    createMany?: Prisma.DocumentChauffeurCreateManyChauffeurInputEnvelope;
    connect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
};
export type DocumentChauffeurUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.DocumentChauffeurCreateWithoutChauffeurInput[] | Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.DocumentChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.DocumentChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.DocumentChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    disconnect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    delete?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    connect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    update?: Prisma.DocumentChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.DocumentChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.DocumentChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.DocumentChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.DocumentChauffeurScalarWhereInput | Prisma.DocumentChauffeurScalarWhereInput[];
};
export type DocumentChauffeurUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput> | Prisma.DocumentChauffeurCreateWithoutChauffeurInput[] | Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput[];
    connectOrCreate?: Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput | Prisma.DocumentChauffeurCreateOrConnectWithoutChauffeurInput[];
    upsert?: Prisma.DocumentChauffeurUpsertWithWhereUniqueWithoutChauffeurInput | Prisma.DocumentChauffeurUpsertWithWhereUniqueWithoutChauffeurInput[];
    createMany?: Prisma.DocumentChauffeurCreateManyChauffeurInputEnvelope;
    set?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    disconnect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    delete?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    connect?: Prisma.DocumentChauffeurWhereUniqueInput | Prisma.DocumentChauffeurWhereUniqueInput[];
    update?: Prisma.DocumentChauffeurUpdateWithWhereUniqueWithoutChauffeurInput | Prisma.DocumentChauffeurUpdateWithWhereUniqueWithoutChauffeurInput[];
    updateMany?: Prisma.DocumentChauffeurUpdateManyWithWhereWithoutChauffeurInput | Prisma.DocumentChauffeurUpdateManyWithWhereWithoutChauffeurInput[];
    deleteMany?: Prisma.DocumentChauffeurScalarWhereInput | Prisma.DocumentChauffeurScalarWhereInput[];
};
export type DocumentChauffeurCreateWithoutChauffeurInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentChauffeurUncheckedCreateWithoutChauffeurInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentChauffeurCreateOrConnectWithoutChauffeurInput = {
    where: Prisma.DocumentChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type DocumentChauffeurCreateManyChauffeurInputEnvelope = {
    data: Prisma.DocumentChauffeurCreateManyChauffeurInput | Prisma.DocumentChauffeurCreateManyChauffeurInput[];
    skipDuplicates?: boolean;
};
export type DocumentChauffeurUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.DocumentChauffeurWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentChauffeurUpdateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedUpdateWithoutChauffeurInput>;
    create: Prisma.XOR<Prisma.DocumentChauffeurCreateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedCreateWithoutChauffeurInput>;
};
export type DocumentChauffeurUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: Prisma.DocumentChauffeurWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentChauffeurUpdateWithoutChauffeurInput, Prisma.DocumentChauffeurUncheckedUpdateWithoutChauffeurInput>;
};
export type DocumentChauffeurUpdateManyWithWhereWithoutChauffeurInput = {
    where: Prisma.DocumentChauffeurScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentChauffeurUpdateManyMutationInput, Prisma.DocumentChauffeurUncheckedUpdateManyWithoutChauffeurInput>;
};
export type DocumentChauffeurScalarWhereInput = {
    AND?: Prisma.DocumentChauffeurScalarWhereInput | Prisma.DocumentChauffeurScalarWhereInput[];
    OR?: Prisma.DocumentChauffeurScalarWhereInput[];
    NOT?: Prisma.DocumentChauffeurScalarWhereInput | Prisma.DocumentChauffeurScalarWhereInput[];
    id?: Prisma.BigIntFilter<"DocumentChauffeur"> | bigint | number;
    chauffeurId?: Prisma.BigIntFilter<"DocumentChauffeur"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    statut?: Prisma.StringFilter<"DocumentChauffeur"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentChauffeur"> | Date | string;
};
export type DocumentChauffeurCreateManyChauffeurInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentChauffeurUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurUncheckedUpdateWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurUncheckedUpdateManyWithoutChauffeurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChauffeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChauffeur"]>;
export type DocumentChauffeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChauffeur"]>;
export type DocumentChauffeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chauffeurId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChauffeur"]>;
export type DocumentChauffeurSelectScalar = {
    id?: boolean;
    chauffeurId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
};
export type DocumentChauffeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chauffeurId" | "typeDocument" | "urlDocument" | "statut" | "dateUpload", ExtArgs["result"]["documentChauffeur"]>;
export type DocumentChauffeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type DocumentChauffeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type DocumentChauffeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chauffeur?: boolean | Prisma.ChauffeurDefaultArgs<ExtArgs>;
};
export type $DocumentChauffeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentChauffeur";
    objects: {
        chauffeur: Prisma.$ChauffeurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        chauffeurId: bigint;
        typeDocument: string;
        urlDocument: string;
        statut: string;
        dateUpload: Date;
    }, ExtArgs["result"]["documentChauffeur"]>;
    composites: {};
};
export type DocumentChauffeurGetPayload<S extends boolean | null | undefined | DocumentChauffeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload, S>;
export type DocumentChauffeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentChauffeurCountAggregateInputType | true;
};
export interface DocumentChauffeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentChauffeur'];
        meta: {
            name: 'DocumentChauffeur';
        };
    };
    findUnique<T extends DocumentChauffeurFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentChauffeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentChauffeurFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentChauffeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentChauffeurFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentChauffeurCreateArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentChauffeurCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentChauffeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentChauffeurDeleteArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentChauffeurUpdateArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentChauffeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentChauffeurUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentChauffeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentChauffeurUpsertArgs>(args: Prisma.SelectSubset<T, DocumentChauffeurUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentChauffeurClient<runtime.Types.Result.GetResult<Prisma.$DocumentChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentChauffeurCountArgs>(args?: Prisma.Subset<T, DocumentChauffeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentChauffeurCountAggregateOutputType> : number>;
    aggregate<T extends DocumentChauffeurAggregateArgs>(args: Prisma.Subset<T, DocumentChauffeurAggregateArgs>): Prisma.PrismaPromise<GetDocumentChauffeurAggregateType<T>>;
    groupBy<T extends DocumentChauffeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentChauffeurGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentChauffeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentChauffeurFieldRefs;
}
export interface Prisma__DocumentChauffeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chauffeur<T extends Prisma.ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChauffeurDefaultArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentChauffeurFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentChauffeur", 'BigInt'>;
    readonly chauffeurId: Prisma.FieldRef<"DocumentChauffeur", 'BigInt'>;
    readonly typeDocument: Prisma.FieldRef<"DocumentChauffeur", 'String'>;
    readonly urlDocument: Prisma.FieldRef<"DocumentChauffeur", 'String'>;
    readonly statut: Prisma.FieldRef<"DocumentChauffeur", 'String'>;
    readonly dateUpload: Prisma.FieldRef<"DocumentChauffeur", 'DateTime'>;
}
export type DocumentChauffeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where: Prisma.DocumentChauffeurWhereUniqueInput;
};
export type DocumentChauffeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where: Prisma.DocumentChauffeurWhereUniqueInput;
};
export type DocumentChauffeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithRelationInput | Prisma.DocumentChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChauffeurScalarFieldEnum | Prisma.DocumentChauffeurScalarFieldEnum[];
};
export type DocumentChauffeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithRelationInput | Prisma.DocumentChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChauffeurScalarFieldEnum | Prisma.DocumentChauffeurScalarFieldEnum[];
};
export type DocumentChauffeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where?: Prisma.DocumentChauffeurWhereInput;
    orderBy?: Prisma.DocumentChauffeurOrderByWithRelationInput | Prisma.DocumentChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChauffeurScalarFieldEnum | Prisma.DocumentChauffeurScalarFieldEnum[];
};
export type DocumentChauffeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChauffeurCreateInput, Prisma.DocumentChauffeurUncheckedCreateInput>;
};
export type DocumentChauffeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentChauffeurCreateManyInput | Prisma.DocumentChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentChauffeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    data: Prisma.DocumentChauffeurCreateManyInput | Prisma.DocumentChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentChauffeurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentChauffeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChauffeurUpdateInput, Prisma.DocumentChauffeurUncheckedUpdateInput>;
    where: Prisma.DocumentChauffeurWhereUniqueInput;
};
export type DocumentChauffeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentChauffeurUpdateManyMutationInput, Prisma.DocumentChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.DocumentChauffeurWhereInput;
    limit?: number;
};
export type DocumentChauffeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChauffeurUpdateManyMutationInput, Prisma.DocumentChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.DocumentChauffeurWhereInput;
    limit?: number;
    include?: Prisma.DocumentChauffeurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentChauffeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where: Prisma.DocumentChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentChauffeurCreateInput, Prisma.DocumentChauffeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentChauffeurUpdateInput, Prisma.DocumentChauffeurUncheckedUpdateInput>;
};
export type DocumentChauffeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
    where: Prisma.DocumentChauffeurWhereUniqueInput;
};
export type DocumentChauffeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChauffeurWhereInput;
    limit?: number;
};
export type DocumentChauffeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChauffeurOmit<ExtArgs> | null;
    include?: Prisma.DocumentChauffeurInclude<ExtArgs> | null;
};
