import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPayload>;
export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type NotificationAvgAggregateOutputType = {
    id: number | null;
    utilisateurId: number | null;
};
export type NotificationSumAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
};
export type NotificationMinAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    titre: string | null;
    message: string | null;
    type: string | null;
    lu: boolean | null;
    dateCreation: Date | null;
    dateDeLecture: Date | null;
};
export type NotificationMaxAggregateOutputType = {
    id: bigint | null;
    utilisateurId: bigint | null;
    titre: string | null;
    message: string | null;
    type: string | null;
    lu: boolean | null;
    dateCreation: Date | null;
    dateDeLecture: Date | null;
};
export type NotificationCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    titre: number;
    message: number;
    type: number;
    lu: number;
    dateCreation: number;
    dateDeLecture: number;
    _all: number;
};
export type NotificationAvgAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type NotificationSumAggregateInputType = {
    id?: true;
    utilisateurId?: true;
};
export type NotificationMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    titre?: true;
    message?: true;
    type?: true;
    lu?: true;
    dateCreation?: true;
    dateDeLecture?: true;
};
export type NotificationMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    titre?: true;
    message?: true;
    type?: true;
    lu?: true;
    dateCreation?: true;
    dateDeLecture?: true;
};
export type NotificationCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    titre?: true;
    message?: true;
    type?: true;
    lu?: true;
    dateCreation?: true;
    dateDeLecture?: true;
    _all?: true;
};
export type NotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationCountAggregateInputType;
    _avg?: NotificationAvgAggregateInputType;
    _sum?: NotificationSumAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification[P]> : Prisma.GetScalarType<T[P], AggregateNotification[P]>;
};
export type NotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithAggregationInput | Prisma.NotificationOrderByWithAggregationInput[];
    by: Prisma.NotificationScalarFieldEnum[] | Prisma.NotificationScalarFieldEnum;
    having?: Prisma.NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _avg?: NotificationAvgAggregateInputType;
    _sum?: NotificationSumAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type NotificationGroupByOutputType = {
    id: bigint;
    utilisateurId: bigint;
    titre: string;
    message: string;
    type: string;
    lu: boolean;
    dateCreation: Date;
    dateDeLecture: Date | null;
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]>;
}>>;
export type NotificationWhereInput = {
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    id?: Prisma.BigIntFilter<"Notification"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Notification"> | bigint | number;
    titre?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    type?: Prisma.StringFilter<"Notification"> | string;
    lu?: Prisma.BoolFilter<"Notification"> | boolean;
    dateCreation?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    dateDeLecture?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type NotificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateDeLecture?: Prisma.SortOrderInput | Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
};
export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    utilisateurId?: Prisma.BigIntFilter<"Notification"> | bigint | number;
    titre?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    type?: Prisma.StringFilter<"Notification"> | string;
    lu?: Prisma.BoolFilter<"Notification"> | boolean;
    dateCreation?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    dateDeLecture?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type NotificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateDeLecture?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.NotificationCountOrderByAggregateInput;
    _avg?: Prisma.NotificationAvgOrderByAggregateInput;
    _max?: Prisma.NotificationMaxOrderByAggregateInput;
    _min?: Prisma.NotificationMinOrderByAggregateInput;
    _sum?: Prisma.NotificationSumOrderByAggregateInput;
};
export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Notification"> | bigint | number;
    utilisateurId?: Prisma.BigIntWithAggregatesFilter<"Notification"> | bigint | number;
    titre?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    message?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    lu?: Prisma.BoolWithAggregatesFilter<"Notification"> | boolean;
    dateCreation?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
    dateDeLecture?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
};
export type NotificationCreateInput = {
    id?: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
};
export type NotificationUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationCreateManyInput = {
    id?: bigint | number;
    utilisateurId: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
};
export type NotificationUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    utilisateurId?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationListRelationFilter = {
    every?: Prisma.NotificationWhereInput;
    some?: Prisma.NotificationWhereInput;
    none?: Prisma.NotificationWhereInput;
};
export type NotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateDeLecture?: Prisma.SortOrder;
};
export type NotificationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type NotificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateDeLecture?: Prisma.SortOrder;
};
export type NotificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    dateCreation?: Prisma.SortOrder;
    dateDeLecture?: Prisma.SortOrder;
};
export type NotificationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
};
export type NotificationCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput> | Prisma.NotificationCreateWithoutUtilisateurInput[] | Prisma.NotificationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUtilisateurInput | Prisma.NotificationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.NotificationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput> | Prisma.NotificationCreateWithoutUtilisateurInput[] | Prisma.NotificationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUtilisateurInput | Prisma.NotificationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.NotificationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput> | Prisma.NotificationCreateWithoutUtilisateurInput[] | Prisma.NotificationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUtilisateurInput | Prisma.NotificationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.NotificationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.NotificationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput> | Prisma.NotificationCreateWithoutUtilisateurInput[] | Prisma.NotificationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutUtilisateurInput | Prisma.NotificationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.NotificationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.NotificationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
};
export type NotificationUncheckedCreateWithoutUtilisateurInput = {
    id?: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
};
export type NotificationCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput>;
};
export type NotificationCreateManyUtilisateurInputEnvelope = {
    data: Prisma.NotificationCreateManyUtilisateurInput | Prisma.NotificationCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutUtilisateurInput, Prisma.NotificationUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutUtilisateurInput, Prisma.NotificationUncheckedCreateWithoutUtilisateurInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutUtilisateurInput, Prisma.NotificationUncheckedUpdateWithoutUtilisateurInput>;
};
export type NotificationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type NotificationScalarWhereInput = {
    AND?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    OR?: Prisma.NotificationScalarWhereInput[];
    NOT?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Notification"> | bigint | number;
    utilisateurId?: Prisma.BigIntFilter<"Notification"> | bigint | number;
    titre?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    type?: Prisma.StringFilter<"Notification"> | string;
    lu?: Prisma.BoolFilter<"Notification"> | boolean;
    dateCreation?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    dateDeLecture?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
};
export type NotificationCreateManyUtilisateurInput = {
    id?: bigint | number;
    titre: string;
    message: string;
    type: string;
    lu?: boolean;
    dateCreation?: Date | string;
    dateDeLecture?: Date | string | null;
};
export type NotificationUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    dateCreation?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateDeLecture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    titre?: boolean;
    message?: boolean;
    type?: boolean;
    lu?: boolean;
    dateCreation?: boolean;
    dateDeLecture?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    titre?: boolean;
    message?: boolean;
    type?: boolean;
    lu?: boolean;
    dateCreation?: boolean;
    dateDeLecture?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    titre?: boolean;
    message?: boolean;
    type?: boolean;
    lu?: boolean;
    dateCreation?: boolean;
    dateDeLecture?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    titre?: boolean;
    message?: boolean;
    type?: boolean;
    lu?: boolean;
    dateCreation?: boolean;
    dateDeLecture?: boolean;
};
export type NotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "titre" | "message" | "type" | "lu" | "dateCreation" | "dateDeLecture", ExtArgs["result"]["notification"]>;
export type NotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type NotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $NotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notification";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        utilisateurId: bigint;
        titre: string;
        message: string;
        type: string;
        lu: boolean;
        dateCreation: Date;
        dateDeLecture: Date | null;
    }, ExtArgs["result"]["notification"]>;
    composites: {};
};
export type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPayload, S>;
export type NotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationCountAggregateInputType | true;
};
export interface NotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
        meta: {
            name: 'Notification';
        };
    };
    findUnique<T extends NotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationCreateArgs>(args: Prisma.SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationDeleteArgs>(args: Prisma.SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationCountArgs>(args?: Prisma.Subset<T, NotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationCountAggregateOutputType> : number>;
    aggregate<T extends NotificationAggregateArgs>(args: Prisma.Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;
    groupBy<T extends NotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationFieldRefs;
}
export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationFieldRefs {
    readonly id: Prisma.FieldRef<"Notification", 'BigInt'>;
    readonly utilisateurId: Prisma.FieldRef<"Notification", 'BigInt'>;
    readonly titre: Prisma.FieldRef<"Notification", 'String'>;
    readonly message: Prisma.FieldRef<"Notification", 'String'>;
    readonly type: Prisma.FieldRef<"Notification", 'String'>;
    readonly lu: Prisma.FieldRef<"Notification", 'Boolean'>;
    readonly dateCreation: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly dateDeLecture: Prisma.FieldRef<"Notification", 'DateTime'>;
}
export type NotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type NotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
};
export type NotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    where?: Prisma.NotificationWhereInput;
    limit?: number;
    include?: Prisma.NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
};
export type NotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where: Prisma.NotificationWhereUniqueInput;
};
export type NotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    limit?: number;
};
export type NotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
};
