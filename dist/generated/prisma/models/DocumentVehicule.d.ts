import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentVehiculeModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentVehiculePayload>;
export type AggregateDocumentVehicule = {
    _count: DocumentVehiculeCountAggregateOutputType | null;
    _avg: DocumentVehiculeAvgAggregateOutputType | null;
    _sum: DocumentVehiculeSumAggregateOutputType | null;
    _min: DocumentVehiculeMinAggregateOutputType | null;
    _max: DocumentVehiculeMaxAggregateOutputType | null;
};
export type DocumentVehiculeAvgAggregateOutputType = {
    id: number | null;
    vehiculeId: number | null;
};
export type DocumentVehiculeSumAggregateOutputType = {
    id: bigint | null;
    vehiculeId: bigint | null;
};
export type DocumentVehiculeMinAggregateOutputType = {
    id: bigint | null;
    vehiculeId: bigint | null;
    typeDocument: string | null;
    urlDocument: string | null;
    statut: string | null;
    dateUpload: Date | null;
};
export type DocumentVehiculeMaxAggregateOutputType = {
    id: bigint | null;
    vehiculeId: bigint | null;
    typeDocument: string | null;
    urlDocument: string | null;
    statut: string | null;
    dateUpload: Date | null;
};
export type DocumentVehiculeCountAggregateOutputType = {
    id: number;
    vehiculeId: number;
    typeDocument: number;
    urlDocument: number;
    statut: number;
    dateUpload: number;
    _all: number;
};
export type DocumentVehiculeAvgAggregateInputType = {
    id?: true;
    vehiculeId?: true;
};
export type DocumentVehiculeSumAggregateInputType = {
    id?: true;
    vehiculeId?: true;
};
export type DocumentVehiculeMinAggregateInputType = {
    id?: true;
    vehiculeId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
};
export type DocumentVehiculeMaxAggregateInputType = {
    id?: true;
    vehiculeId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
};
export type DocumentVehiculeCountAggregateInputType = {
    id?: true;
    vehiculeId?: true;
    typeDocument?: true;
    urlDocument?: true;
    statut?: true;
    dateUpload?: true;
    _all?: true;
};
export type DocumentVehiculeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithRelationInput | Prisma.DocumentVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentVehiculeCountAggregateInputType;
    _avg?: DocumentVehiculeAvgAggregateInputType;
    _sum?: DocumentVehiculeSumAggregateInputType;
    _min?: DocumentVehiculeMinAggregateInputType;
    _max?: DocumentVehiculeMaxAggregateInputType;
};
export type GetDocumentVehiculeAggregateType<T extends DocumentVehiculeAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentVehicule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentVehicule[P]> : Prisma.GetScalarType<T[P], AggregateDocumentVehicule[P]>;
};
export type DocumentVehiculeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithAggregationInput | Prisma.DocumentVehiculeOrderByWithAggregationInput[];
    by: Prisma.DocumentVehiculeScalarFieldEnum[] | Prisma.DocumentVehiculeScalarFieldEnum;
    having?: Prisma.DocumentVehiculeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentVehiculeCountAggregateInputType | true;
    _avg?: DocumentVehiculeAvgAggregateInputType;
    _sum?: DocumentVehiculeSumAggregateInputType;
    _min?: DocumentVehiculeMinAggregateInputType;
    _max?: DocumentVehiculeMaxAggregateInputType;
};
export type DocumentVehiculeGroupByOutputType = {
    id: bigint;
    vehiculeId: bigint;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload: Date;
    _count: DocumentVehiculeCountAggregateOutputType | null;
    _avg: DocumentVehiculeAvgAggregateOutputType | null;
    _sum: DocumentVehiculeSumAggregateOutputType | null;
    _min: DocumentVehiculeMinAggregateOutputType | null;
    _max: DocumentVehiculeMaxAggregateOutputType | null;
};
export type GetDocumentVehiculeGroupByPayload<T extends DocumentVehiculeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentVehiculeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentVehiculeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentVehiculeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentVehiculeGroupByOutputType[P]>;
}>>;
export type DocumentVehiculeWhereInput = {
    AND?: Prisma.DocumentVehiculeWhereInput | Prisma.DocumentVehiculeWhereInput[];
    OR?: Prisma.DocumentVehiculeWhereInput[];
    NOT?: Prisma.DocumentVehiculeWhereInput | Prisma.DocumentVehiculeWhereInput[];
    id?: Prisma.BigIntFilter<"DocumentVehicule"> | bigint | number;
    vehiculeId?: Prisma.BigIntFilter<"DocumentVehicule"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    statut?: Prisma.StringFilter<"DocumentVehicule"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentVehicule"> | Date | string;
    vehicule?: Prisma.XOR<Prisma.VehiculeScalarRelationFilter, Prisma.VehiculeWhereInput>;
};
export type DocumentVehiculeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
    vehicule?: Prisma.VehiculeOrderByWithRelationInput;
};
export type DocumentVehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.DocumentVehiculeWhereInput | Prisma.DocumentVehiculeWhereInput[];
    OR?: Prisma.DocumentVehiculeWhereInput[];
    NOT?: Prisma.DocumentVehiculeWhereInput | Prisma.DocumentVehiculeWhereInput[];
    vehiculeId?: Prisma.BigIntFilter<"DocumentVehicule"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    statut?: Prisma.StringFilter<"DocumentVehicule"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentVehicule"> | Date | string;
    vehicule?: Prisma.XOR<Prisma.VehiculeScalarRelationFilter, Prisma.VehiculeWhereInput>;
}, "id">;
export type DocumentVehiculeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
    _count?: Prisma.DocumentVehiculeCountOrderByAggregateInput;
    _avg?: Prisma.DocumentVehiculeAvgOrderByAggregateInput;
    _max?: Prisma.DocumentVehiculeMaxOrderByAggregateInput;
    _min?: Prisma.DocumentVehiculeMinOrderByAggregateInput;
    _sum?: Prisma.DocumentVehiculeSumOrderByAggregateInput;
};
export type DocumentVehiculeScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentVehiculeScalarWhereWithAggregatesInput | Prisma.DocumentVehiculeScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentVehiculeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentVehiculeScalarWhereWithAggregatesInput | Prisma.DocumentVehiculeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"DocumentVehicule"> | bigint | number;
    vehiculeId?: Prisma.BigIntWithAggregatesFilter<"DocumentVehicule"> | bigint | number;
    typeDocument?: Prisma.StringWithAggregatesFilter<"DocumentVehicule"> | string;
    urlDocument?: Prisma.StringWithAggregatesFilter<"DocumentVehicule"> | string;
    statut?: Prisma.StringWithAggregatesFilter<"DocumentVehicule"> | string;
    dateUpload?: Prisma.DateTimeWithAggregatesFilter<"DocumentVehicule"> | Date | string;
};
export type DocumentVehiculeCreateInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
    vehicule: Prisma.VehiculeCreateNestedOneWithoutDocumentVehiculesInput;
};
export type DocumentVehiculeUncheckedCreateInput = {
    id?: bigint | number;
    vehiculeId: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentVehiculeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicule?: Prisma.VehiculeUpdateOneRequiredWithoutDocumentVehiculesNestedInput;
};
export type DocumentVehiculeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeCreateManyInput = {
    id?: bigint | number;
    vehiculeId: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentVehiculeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    vehiculeId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeListRelationFilter = {
    every?: Prisma.DocumentVehiculeWhereInput;
    some?: Prisma.DocumentVehiculeWhereInput;
    none?: Prisma.DocumentVehiculeWhereInput;
};
export type DocumentVehiculeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentVehiculeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentVehiculeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
};
export type DocumentVehiculeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentVehiculeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
    typeDocument?: Prisma.SortOrder;
    urlDocument?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateUpload?: Prisma.SortOrder;
};
export type DocumentVehiculeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehiculeId?: Prisma.SortOrder;
};
export type DocumentVehiculeCreateNestedManyWithoutVehiculeInput = {
    create?: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput> | Prisma.DocumentVehiculeCreateWithoutVehiculeInput[] | Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput[];
    connectOrCreate?: Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput | Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput[];
    createMany?: Prisma.DocumentVehiculeCreateManyVehiculeInputEnvelope;
    connect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
};
export type DocumentVehiculeUncheckedCreateNestedManyWithoutVehiculeInput = {
    create?: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput> | Prisma.DocumentVehiculeCreateWithoutVehiculeInput[] | Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput[];
    connectOrCreate?: Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput | Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput[];
    createMany?: Prisma.DocumentVehiculeCreateManyVehiculeInputEnvelope;
    connect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
};
export type DocumentVehiculeUpdateManyWithoutVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput> | Prisma.DocumentVehiculeCreateWithoutVehiculeInput[] | Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput[];
    connectOrCreate?: Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput | Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput[];
    upsert?: Prisma.DocumentVehiculeUpsertWithWhereUniqueWithoutVehiculeInput | Prisma.DocumentVehiculeUpsertWithWhereUniqueWithoutVehiculeInput[];
    createMany?: Prisma.DocumentVehiculeCreateManyVehiculeInputEnvelope;
    set?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    disconnect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    delete?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    connect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    update?: Prisma.DocumentVehiculeUpdateWithWhereUniqueWithoutVehiculeInput | Prisma.DocumentVehiculeUpdateWithWhereUniqueWithoutVehiculeInput[];
    updateMany?: Prisma.DocumentVehiculeUpdateManyWithWhereWithoutVehiculeInput | Prisma.DocumentVehiculeUpdateManyWithWhereWithoutVehiculeInput[];
    deleteMany?: Prisma.DocumentVehiculeScalarWhereInput | Prisma.DocumentVehiculeScalarWhereInput[];
};
export type DocumentVehiculeUncheckedUpdateManyWithoutVehiculeNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput> | Prisma.DocumentVehiculeCreateWithoutVehiculeInput[] | Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput[];
    connectOrCreate?: Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput | Prisma.DocumentVehiculeCreateOrConnectWithoutVehiculeInput[];
    upsert?: Prisma.DocumentVehiculeUpsertWithWhereUniqueWithoutVehiculeInput | Prisma.DocumentVehiculeUpsertWithWhereUniqueWithoutVehiculeInput[];
    createMany?: Prisma.DocumentVehiculeCreateManyVehiculeInputEnvelope;
    set?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    disconnect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    delete?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    connect?: Prisma.DocumentVehiculeWhereUniqueInput | Prisma.DocumentVehiculeWhereUniqueInput[];
    update?: Prisma.DocumentVehiculeUpdateWithWhereUniqueWithoutVehiculeInput | Prisma.DocumentVehiculeUpdateWithWhereUniqueWithoutVehiculeInput[];
    updateMany?: Prisma.DocumentVehiculeUpdateManyWithWhereWithoutVehiculeInput | Prisma.DocumentVehiculeUpdateManyWithWhereWithoutVehiculeInput[];
    deleteMany?: Prisma.DocumentVehiculeScalarWhereInput | Prisma.DocumentVehiculeScalarWhereInput[];
};
export type DocumentVehiculeCreateWithoutVehiculeInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentVehiculeUncheckedCreateWithoutVehiculeInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentVehiculeCreateOrConnectWithoutVehiculeInput = {
    where: Prisma.DocumentVehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput>;
};
export type DocumentVehiculeCreateManyVehiculeInputEnvelope = {
    data: Prisma.DocumentVehiculeCreateManyVehiculeInput | Prisma.DocumentVehiculeCreateManyVehiculeInput[];
    skipDuplicates?: boolean;
};
export type DocumentVehiculeUpsertWithWhereUniqueWithoutVehiculeInput = {
    where: Prisma.DocumentVehiculeWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentVehiculeUpdateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedUpdateWithoutVehiculeInput>;
    create: Prisma.XOR<Prisma.DocumentVehiculeCreateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedCreateWithoutVehiculeInput>;
};
export type DocumentVehiculeUpdateWithWhereUniqueWithoutVehiculeInput = {
    where: Prisma.DocumentVehiculeWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentVehiculeUpdateWithoutVehiculeInput, Prisma.DocumentVehiculeUncheckedUpdateWithoutVehiculeInput>;
};
export type DocumentVehiculeUpdateManyWithWhereWithoutVehiculeInput = {
    where: Prisma.DocumentVehiculeScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentVehiculeUpdateManyMutationInput, Prisma.DocumentVehiculeUncheckedUpdateManyWithoutVehiculeInput>;
};
export type DocumentVehiculeScalarWhereInput = {
    AND?: Prisma.DocumentVehiculeScalarWhereInput | Prisma.DocumentVehiculeScalarWhereInput[];
    OR?: Prisma.DocumentVehiculeScalarWhereInput[];
    NOT?: Prisma.DocumentVehiculeScalarWhereInput | Prisma.DocumentVehiculeScalarWhereInput[];
    id?: Prisma.BigIntFilter<"DocumentVehicule"> | bigint | number;
    vehiculeId?: Prisma.BigIntFilter<"DocumentVehicule"> | bigint | number;
    typeDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    urlDocument?: Prisma.StringFilter<"DocumentVehicule"> | string;
    statut?: Prisma.StringFilter<"DocumentVehicule"> | string;
    dateUpload?: Prisma.DateTimeFilter<"DocumentVehicule"> | Date | string;
};
export type DocumentVehiculeCreateManyVehiculeInput = {
    id?: bigint | number;
    typeDocument: string;
    urlDocument: string;
    statut: string;
    dateUpload?: Date | string;
};
export type DocumentVehiculeUpdateWithoutVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeUncheckedUpdateWithoutVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeUncheckedUpdateManyWithoutVehiculeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    typeDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    urlDocument?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateUpload?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVehiculeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehiculeId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVehicule"]>;
export type DocumentVehiculeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehiculeId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVehicule"]>;
export type DocumentVehiculeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehiculeId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVehicule"]>;
export type DocumentVehiculeSelectScalar = {
    id?: boolean;
    vehiculeId?: boolean;
    typeDocument?: boolean;
    urlDocument?: boolean;
    statut?: boolean;
    dateUpload?: boolean;
};
export type DocumentVehiculeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vehiculeId" | "typeDocument" | "urlDocument" | "statut" | "dateUpload", ExtArgs["result"]["documentVehicule"]>;
export type DocumentVehiculeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
};
export type DocumentVehiculeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
};
export type DocumentVehiculeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicule?: boolean | Prisma.VehiculeDefaultArgs<ExtArgs>;
};
export type $DocumentVehiculePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentVehicule";
    objects: {
        vehicule: Prisma.$VehiculePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        vehiculeId: bigint;
        typeDocument: string;
        urlDocument: string;
        statut: string;
        dateUpload: Date;
    }, ExtArgs["result"]["documentVehicule"]>;
    composites: {};
};
export type DocumentVehiculeGetPayload<S extends boolean | null | undefined | DocumentVehiculeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload, S>;
export type DocumentVehiculeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentVehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentVehiculeCountAggregateInputType | true;
};
export interface DocumentVehiculeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentVehicule'];
        meta: {
            name: 'DocumentVehicule';
        };
    };
    findUnique<T extends DocumentVehiculeFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentVehiculeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentVehiculeFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentVehiculeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentVehiculeFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentVehiculeCreateArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentVehiculeCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentVehiculeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentVehiculeDeleteArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentVehiculeUpdateArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentVehiculeDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentVehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentVehiculeUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentVehiculeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentVehiculeUpsertArgs>(args: Prisma.SelectSubset<T, DocumentVehiculeUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentVehiculeClient<runtime.Types.Result.GetResult<Prisma.$DocumentVehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentVehiculeCountArgs>(args?: Prisma.Subset<T, DocumentVehiculeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentVehiculeCountAggregateOutputType> : number>;
    aggregate<T extends DocumentVehiculeAggregateArgs>(args: Prisma.Subset<T, DocumentVehiculeAggregateArgs>): Prisma.PrismaPromise<GetDocumentVehiculeAggregateType<T>>;
    groupBy<T extends DocumentVehiculeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentVehiculeGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentVehiculeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentVehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentVehiculeFieldRefs;
}
export interface Prisma__DocumentVehiculeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vehicule<T extends Prisma.VehiculeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VehiculeDefaultArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentVehiculeFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentVehicule", 'BigInt'>;
    readonly vehiculeId: Prisma.FieldRef<"DocumentVehicule", 'BigInt'>;
    readonly typeDocument: Prisma.FieldRef<"DocumentVehicule", 'String'>;
    readonly urlDocument: Prisma.FieldRef<"DocumentVehicule", 'String'>;
    readonly statut: Prisma.FieldRef<"DocumentVehicule", 'String'>;
    readonly dateUpload: Prisma.FieldRef<"DocumentVehicule", 'DateTime'>;
}
export type DocumentVehiculeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where: Prisma.DocumentVehiculeWhereUniqueInput;
};
export type DocumentVehiculeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where: Prisma.DocumentVehiculeWhereUniqueInput;
};
export type DocumentVehiculeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithRelationInput | Prisma.DocumentVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVehiculeScalarFieldEnum | Prisma.DocumentVehiculeScalarFieldEnum[];
};
export type DocumentVehiculeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithRelationInput | Prisma.DocumentVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVehiculeScalarFieldEnum | Prisma.DocumentVehiculeScalarFieldEnum[];
};
export type DocumentVehiculeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where?: Prisma.DocumentVehiculeWhereInput;
    orderBy?: Prisma.DocumentVehiculeOrderByWithRelationInput | Prisma.DocumentVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVehiculeScalarFieldEnum | Prisma.DocumentVehiculeScalarFieldEnum[];
};
export type DocumentVehiculeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVehiculeCreateInput, Prisma.DocumentVehiculeUncheckedCreateInput>;
};
export type DocumentVehiculeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentVehiculeCreateManyInput | Prisma.DocumentVehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentVehiculeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    data: Prisma.DocumentVehiculeCreateManyInput | Prisma.DocumentVehiculeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentVehiculeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentVehiculeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVehiculeUpdateInput, Prisma.DocumentVehiculeUncheckedUpdateInput>;
    where: Prisma.DocumentVehiculeWhereUniqueInput;
};
export type DocumentVehiculeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentVehiculeUpdateManyMutationInput, Prisma.DocumentVehiculeUncheckedUpdateManyInput>;
    where?: Prisma.DocumentVehiculeWhereInput;
    limit?: number;
};
export type DocumentVehiculeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVehiculeUpdateManyMutationInput, Prisma.DocumentVehiculeUncheckedUpdateManyInput>;
    where?: Prisma.DocumentVehiculeWhereInput;
    limit?: number;
    include?: Prisma.DocumentVehiculeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentVehiculeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where: Prisma.DocumentVehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVehiculeCreateInput, Prisma.DocumentVehiculeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentVehiculeUpdateInput, Prisma.DocumentVehiculeUncheckedUpdateInput>;
};
export type DocumentVehiculeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
    where: Prisma.DocumentVehiculeWhereUniqueInput;
};
export type DocumentVehiculeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVehiculeWhereInput;
    limit?: number;
};
export type DocumentVehiculeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVehiculeOmit<ExtArgs> | null;
    include?: Prisma.DocumentVehiculeInclude<ExtArgs> | null;
};
