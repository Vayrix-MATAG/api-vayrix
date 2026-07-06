import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TypeVehiculeModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeVehiculePayload>;
export type AggregateTypeVehicule = {
    _count: TypeVehiculeCountAggregateOutputType | null;
    _avg: TypeVehiculeAvgAggregateOutputType | null;
    _sum: TypeVehiculeSumAggregateOutputType | null;
    _min: TypeVehiculeMinAggregateOutputType | null;
    _max: TypeVehiculeMaxAggregateOutputType | null;
};
export type TypeVehiculeAvgAggregateOutputType = {
    id: number | null;
    prixBase: runtime.Decimal | null;
    prixParKm: runtime.Decimal | null;
};
export type TypeVehiculeSumAggregateOutputType = {
    id: bigint | null;
    prixBase: runtime.Decimal | null;
    prixParKm: runtime.Decimal | null;
};
export type TypeVehiculeMinAggregateOutputType = {
    id: bigint | null;
    nom: string | null;
    prixBase: runtime.Decimal | null;
    prixParKm: runtime.Decimal | null;
};
export type TypeVehiculeMaxAggregateOutputType = {
    id: bigint | null;
    nom: string | null;
    prixBase: runtime.Decimal | null;
    prixParKm: runtime.Decimal | null;
};
export type TypeVehiculeCountAggregateOutputType = {
    id: number;
    nom: number;
    prixBase: number;
    prixParKm: number;
    _all: number;
};
export type TypeVehiculeAvgAggregateInputType = {
    id?: true;
    prixBase?: true;
    prixParKm?: true;
};
export type TypeVehiculeSumAggregateInputType = {
    id?: true;
    prixBase?: true;
    prixParKm?: true;
};
export type TypeVehiculeMinAggregateInputType = {
    id?: true;
    nom?: true;
    prixBase?: true;
    prixParKm?: true;
};
export type TypeVehiculeMaxAggregateInputType = {
    id?: true;
    nom?: true;
    prixBase?: true;
    prixParKm?: true;
};
export type TypeVehiculeCountAggregateInputType = {
    id?: true;
    nom?: true;
    prixBase?: true;
    prixParKm?: true;
    _all?: true;
};
export type TypeVehiculeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeVehiculeWhereInput;
    orderBy?: Prisma.TypeVehiculeOrderByWithRelationInput | Prisma.TypeVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.TypeVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TypeVehiculeCountAggregateInputType;
    _avg?: TypeVehiculeAvgAggregateInputType;
    _sum?: TypeVehiculeSumAggregateInputType;
    _min?: TypeVehiculeMinAggregateInputType;
    _max?: TypeVehiculeMaxAggregateInputType;
};
export type GetTypeVehiculeAggregateType<T extends TypeVehiculeAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeVehicule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeVehicule[P]> : Prisma.GetScalarType<T[P], AggregateTypeVehicule[P]>;
};
export type TypeVehiculeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeVehiculeWhereInput;
    orderBy?: Prisma.TypeVehiculeOrderByWithAggregationInput | Prisma.TypeVehiculeOrderByWithAggregationInput[];
    by: Prisma.TypeVehiculeScalarFieldEnum[] | Prisma.TypeVehiculeScalarFieldEnum;
    having?: Prisma.TypeVehiculeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeVehiculeCountAggregateInputType | true;
    _avg?: TypeVehiculeAvgAggregateInputType;
    _sum?: TypeVehiculeSumAggregateInputType;
    _min?: TypeVehiculeMinAggregateInputType;
    _max?: TypeVehiculeMaxAggregateInputType;
};
export type TypeVehiculeGroupByOutputType = {
    id: bigint;
    nom: string;
    prixBase: runtime.Decimal;
    prixParKm: runtime.Decimal;
    _count: TypeVehiculeCountAggregateOutputType | null;
    _avg: TypeVehiculeAvgAggregateOutputType | null;
    _sum: TypeVehiculeSumAggregateOutputType | null;
    _min: TypeVehiculeMinAggregateOutputType | null;
    _max: TypeVehiculeMaxAggregateOutputType | null;
};
export type GetTypeVehiculeGroupByPayload<T extends TypeVehiculeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeVehiculeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeVehiculeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeVehiculeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeVehiculeGroupByOutputType[P]>;
}>>;
export type TypeVehiculeWhereInput = {
    AND?: Prisma.TypeVehiculeWhereInput | Prisma.TypeVehiculeWhereInput[];
    OR?: Prisma.TypeVehiculeWhereInput[];
    NOT?: Prisma.TypeVehiculeWhereInput | Prisma.TypeVehiculeWhereInput[];
    id?: Prisma.BigIntFilter<"TypeVehicule"> | bigint | number;
    nom?: Prisma.StringFilter<"TypeVehicule"> | string;
    prixBase?: Prisma.DecimalFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeListRelationFilter;
    tarifications?: Prisma.TarificationListRelationFilter;
};
export type TypeVehiculeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
    vehicules?: Prisma.VehiculeOrderByRelationAggregateInput;
    tarifications?: Prisma.TarificationOrderByRelationAggregateInput;
};
export type TypeVehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    nom?: string;
    AND?: Prisma.TypeVehiculeWhereInput | Prisma.TypeVehiculeWhereInput[];
    OR?: Prisma.TypeVehiculeWhereInput[];
    NOT?: Prisma.TypeVehiculeWhereInput | Prisma.TypeVehiculeWhereInput[];
    prixBase?: Prisma.DecimalFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeListRelationFilter;
    tarifications?: Prisma.TarificationListRelationFilter;
}, "id" | "nom">;
export type TypeVehiculeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
    _count?: Prisma.TypeVehiculeCountOrderByAggregateInput;
    _avg?: Prisma.TypeVehiculeAvgOrderByAggregateInput;
    _max?: Prisma.TypeVehiculeMaxOrderByAggregateInput;
    _min?: Prisma.TypeVehiculeMinOrderByAggregateInput;
    _sum?: Prisma.TypeVehiculeSumOrderByAggregateInput;
};
export type TypeVehiculeScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeVehiculeScalarWhereWithAggregatesInput | Prisma.TypeVehiculeScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeVehiculeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeVehiculeScalarWhereWithAggregatesInput | Prisma.TypeVehiculeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"TypeVehicule"> | bigint | number;
    nom?: Prisma.StringWithAggregatesFilter<"TypeVehicule"> | string;
    prixBase?: Prisma.DecimalWithAggregatesFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalWithAggregatesFilter<"TypeVehicule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TypeVehiculeCreateInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutTypeVehiculeInput;
    tarifications?: Prisma.TarificationCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeUncheckedCreateInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutTypeVehiculeInput;
    tarifications?: Prisma.TarificationUncheckedCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUpdateManyWithoutTypeVehiculeNestedInput;
    tarifications?: Prisma.TarificationUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutTypeVehiculeNestedInput;
    tarifications?: Prisma.TarificationUncheckedUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeCreateManyInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TypeVehiculeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TypeVehiculeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TypeVehiculeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
};
export type TypeVehiculeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
};
export type TypeVehiculeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
};
export type TypeVehiculeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
};
export type TypeVehiculeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prixBase?: Prisma.SortOrder;
    prixParKm?: Prisma.SortOrder;
};
export type TypeVehiculeScalarRelationFilter = {
    is?: Prisma.TypeVehiculeWhereInput;
    isNot?: Prisma.TypeVehiculeWhereInput;
};
export type TypeVehiculeCreateNestedOneWithoutVehiculesInput = {
    create?: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedCreateWithoutVehiculesInput>;
    connectOrCreate?: Prisma.TypeVehiculeCreateOrConnectWithoutVehiculesInput;
    connect?: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeUpdateOneRequiredWithoutVehiculesNestedInput = {
    create?: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedCreateWithoutVehiculesInput>;
    connectOrCreate?: Prisma.TypeVehiculeCreateOrConnectWithoutVehiculesInput;
    upsert?: Prisma.TypeVehiculeUpsertWithoutVehiculesInput;
    connect?: Prisma.TypeVehiculeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TypeVehiculeUpdateToOneWithWhereWithoutVehiculesInput, Prisma.TypeVehiculeUpdateWithoutVehiculesInput>, Prisma.TypeVehiculeUncheckedUpdateWithoutVehiculesInput>;
};
export type TypeVehiculeCreateNestedOneWithoutTarificationsInput = {
    create?: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedCreateWithoutTarificationsInput>;
    connectOrCreate?: Prisma.TypeVehiculeCreateOrConnectWithoutTarificationsInput;
    connect?: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeUpdateOneRequiredWithoutTarificationsNestedInput = {
    create?: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedCreateWithoutTarificationsInput>;
    connectOrCreate?: Prisma.TypeVehiculeCreateOrConnectWithoutTarificationsInput;
    upsert?: Prisma.TypeVehiculeUpsertWithoutTarificationsInput;
    connect?: Prisma.TypeVehiculeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TypeVehiculeUpdateToOneWithWhereWithoutTarificationsInput, Prisma.TypeVehiculeUpdateWithoutTarificationsInput>, Prisma.TypeVehiculeUncheckedUpdateWithoutTarificationsInput>;
};
export type TypeVehiculeCreateWithoutVehiculesInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tarifications?: Prisma.TarificationCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeUncheckedCreateWithoutVehiculesInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tarifications?: Prisma.TarificationUncheckedCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeCreateOrConnectWithoutVehiculesInput = {
    where: Prisma.TypeVehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedCreateWithoutVehiculesInput>;
};
export type TypeVehiculeUpsertWithoutVehiculesInput = {
    update: Prisma.XOR<Prisma.TypeVehiculeUpdateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedUpdateWithoutVehiculesInput>;
    create: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedCreateWithoutVehiculesInput>;
    where?: Prisma.TypeVehiculeWhereInput;
};
export type TypeVehiculeUpdateToOneWithWhereWithoutVehiculesInput = {
    where?: Prisma.TypeVehiculeWhereInput;
    data: Prisma.XOR<Prisma.TypeVehiculeUpdateWithoutVehiculesInput, Prisma.TypeVehiculeUncheckedUpdateWithoutVehiculesInput>;
};
export type TypeVehiculeUpdateWithoutVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tarifications?: Prisma.TarificationUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeUncheckedUpdateWithoutVehiculesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tarifications?: Prisma.TarificationUncheckedUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeCreateWithoutTarificationsInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeUncheckedCreateWithoutTarificationsInput = {
    id?: bigint | number;
    nom: string;
    prixBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm: runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUncheckedCreateNestedManyWithoutTypeVehiculeInput;
};
export type TypeVehiculeCreateOrConnectWithoutTarificationsInput = {
    where: Prisma.TypeVehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedCreateWithoutTarificationsInput>;
};
export type TypeVehiculeUpsertWithoutTarificationsInput = {
    update: Prisma.XOR<Prisma.TypeVehiculeUpdateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedUpdateWithoutTarificationsInput>;
    create: Prisma.XOR<Prisma.TypeVehiculeCreateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedCreateWithoutTarificationsInput>;
    where?: Prisma.TypeVehiculeWhereInput;
};
export type TypeVehiculeUpdateToOneWithWhereWithoutTarificationsInput = {
    where?: Prisma.TypeVehiculeWhereInput;
    data: Prisma.XOR<Prisma.TypeVehiculeUpdateWithoutTarificationsInput, Prisma.TypeVehiculeUncheckedUpdateWithoutTarificationsInput>;
};
export type TypeVehiculeUpdateWithoutTarificationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeUncheckedUpdateWithoutTarificationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prixBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    prixParKm?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    vehicules?: Prisma.VehiculeUncheckedUpdateManyWithoutTypeVehiculeNestedInput;
};
export type TypeVehiculeCountOutputType = {
    vehicules: number;
    tarifications: number;
};
export type TypeVehiculeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicules?: boolean | TypeVehiculeCountOutputTypeCountVehiculesArgs;
    tarifications?: boolean | TypeVehiculeCountOutputTypeCountTarificationsArgs;
};
export type TypeVehiculeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeCountOutputTypeSelect<ExtArgs> | null;
};
export type TypeVehiculeCountOutputTypeCountVehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
};
export type TypeVehiculeCountOutputTypeCountTarificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarificationWhereInput;
};
export type TypeVehiculeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prixBase?: boolean;
    prixParKm?: boolean;
    vehicules?: boolean | Prisma.TypeVehicule$vehiculesArgs<ExtArgs>;
    tarifications?: boolean | Prisma.TypeVehicule$tarificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeVehiculeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeVehicule"]>;
export type TypeVehiculeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prixBase?: boolean;
    prixParKm?: boolean;
}, ExtArgs["result"]["typeVehicule"]>;
export type TypeVehiculeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prixBase?: boolean;
    prixParKm?: boolean;
}, ExtArgs["result"]["typeVehicule"]>;
export type TypeVehiculeSelectScalar = {
    id?: boolean;
    nom?: boolean;
    prixBase?: boolean;
    prixParKm?: boolean;
};
export type TypeVehiculeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "prixBase" | "prixParKm", ExtArgs["result"]["typeVehicule"]>;
export type TypeVehiculeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicules?: boolean | Prisma.TypeVehicule$vehiculesArgs<ExtArgs>;
    tarifications?: boolean | Prisma.TypeVehicule$tarificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeVehiculeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TypeVehiculeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TypeVehiculeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TypeVehiculePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeVehicule";
    objects: {
        vehicules: Prisma.$VehiculePayload<ExtArgs>[];
        tarifications: Prisma.$TarificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        nom: string;
        prixBase: runtime.Decimal;
        prixParKm: runtime.Decimal;
    }, ExtArgs["result"]["typeVehicule"]>;
    composites: {};
};
export type TypeVehiculeGetPayload<S extends boolean | null | undefined | TypeVehiculeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload, S>;
export type TypeVehiculeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeVehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeVehiculeCountAggregateInputType | true;
};
export interface TypeVehiculeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeVehicule'];
        meta: {
            name: 'TypeVehicule';
        };
    };
    findUnique<T extends TypeVehiculeFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeVehiculeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TypeVehiculeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeVehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TypeVehiculeFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TypeVehiculeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TypeVehiculeFindManyArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TypeVehiculeCreateArgs>(args: Prisma.SelectSubset<T, TypeVehiculeCreateArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TypeVehiculeCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TypeVehiculeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TypeVehiculeDeleteArgs>(args: Prisma.SelectSubset<T, TypeVehiculeDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TypeVehiculeUpdateArgs>(args: Prisma.SelectSubset<T, TypeVehiculeUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TypeVehiculeDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeVehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TypeVehiculeUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeVehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TypeVehiculeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TypeVehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TypeVehiculeUpsertArgs>(args: Prisma.SelectSubset<T, TypeVehiculeUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeVehiculeClient<runtime.Types.Result.GetResult<Prisma.$TypeVehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TypeVehiculeCountArgs>(args?: Prisma.Subset<T, TypeVehiculeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeVehiculeCountAggregateOutputType> : number>;
    aggregate<T extends TypeVehiculeAggregateArgs>(args: Prisma.Subset<T, TypeVehiculeAggregateArgs>): Prisma.PrismaPromise<GetTypeVehiculeAggregateType<T>>;
    groupBy<T extends TypeVehiculeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeVehiculeGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeVehiculeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeVehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TypeVehiculeFieldRefs;
}
export interface Prisma__TypeVehiculeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vehicules<T extends Prisma.TypeVehicule$vehiculesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeVehicule$vehiculesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tarifications<T extends Prisma.TypeVehicule$tarificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeVehicule$tarificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TypeVehiculeFieldRefs {
    readonly id: Prisma.FieldRef<"TypeVehicule", 'BigInt'>;
    readonly nom: Prisma.FieldRef<"TypeVehicule", 'String'>;
    readonly prixBase: Prisma.FieldRef<"TypeVehicule", 'Decimal'>;
    readonly prixParKm: Prisma.FieldRef<"TypeVehicule", 'Decimal'>;
}
export type TypeVehiculeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where?: Prisma.TypeVehiculeWhereInput;
    orderBy?: Prisma.TypeVehiculeOrderByWithRelationInput | Prisma.TypeVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.TypeVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeVehiculeScalarFieldEnum | Prisma.TypeVehiculeScalarFieldEnum[];
};
export type TypeVehiculeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where?: Prisma.TypeVehiculeWhereInput;
    orderBy?: Prisma.TypeVehiculeOrderByWithRelationInput | Prisma.TypeVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.TypeVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeVehiculeScalarFieldEnum | Prisma.TypeVehiculeScalarFieldEnum[];
};
export type TypeVehiculeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where?: Prisma.TypeVehiculeWhereInput;
    orderBy?: Prisma.TypeVehiculeOrderByWithRelationInput | Prisma.TypeVehiculeOrderByWithRelationInput[];
    cursor?: Prisma.TypeVehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeVehiculeScalarFieldEnum | Prisma.TypeVehiculeScalarFieldEnum[];
};
export type TypeVehiculeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeVehiculeCreateInput, Prisma.TypeVehiculeUncheckedCreateInput>;
};
export type TypeVehiculeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TypeVehiculeCreateManyInput | Prisma.TypeVehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TypeVehiculeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    data: Prisma.TypeVehiculeCreateManyInput | Prisma.TypeVehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TypeVehiculeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeVehiculeUpdateInput, Prisma.TypeVehiculeUncheckedUpdateInput>;
    where: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TypeVehiculeUpdateManyMutationInput, Prisma.TypeVehiculeUncheckedUpdateManyInput>;
    where?: Prisma.TypeVehiculeWhereInput;
    limit?: number;
};
export type TypeVehiculeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeVehiculeUpdateManyMutationInput, Prisma.TypeVehiculeUncheckedUpdateManyInput>;
    where?: Prisma.TypeVehiculeWhereInput;
    limit?: number;
};
export type TypeVehiculeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where: Prisma.TypeVehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeVehiculeCreateInput, Prisma.TypeVehiculeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TypeVehiculeUpdateInput, Prisma.TypeVehiculeUncheckedUpdateInput>;
};
export type TypeVehiculeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
    where: Prisma.TypeVehiculeWhereUniqueInput;
};
export type TypeVehiculeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeVehiculeWhereInput;
    limit?: number;
};
export type TypeVehicule$vehiculesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculeScalarFieldEnum | Prisma.VehiculeScalarFieldEnum[];
};
export type TypeVehicule$tarificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarificationSelect<ExtArgs> | null;
    omit?: Prisma.TarificationOmit<ExtArgs> | null;
    include?: Prisma.TarificationInclude<ExtArgs> | null;
    where?: Prisma.TarificationWhereInput;
    orderBy?: Prisma.TarificationOrderByWithRelationInput | Prisma.TarificationOrderByWithRelationInput[];
    cursor?: Prisma.TarificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarificationScalarFieldEnum | Prisma.TarificationScalarFieldEnum[];
};
export type TypeVehiculeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeVehiculeSelect<ExtArgs> | null;
    omit?: Prisma.TypeVehiculeOmit<ExtArgs> | null;
    include?: Prisma.TypeVehiculeInclude<ExtArgs> | null;
};
