import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get otp(): Prisma.OtpDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get utilisateurRole(): Prisma.UtilisateurRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get client(): Prisma.ClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get contactUrgence(): Prisma.ContactUrgenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get localisation(): Prisma.LocalisationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get chauffeur(): Prisma.ChauffeurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get typeVehicule(): Prisma.TypeVehiculeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vehicule(): Prisma.VehiculeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get documentChauffeur(): Prisma.DocumentChauffeurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get documentVehicule(): Prisma.DocumentVehiculeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get course(): Prisma.CourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get propositionPrix(): Prisma.PropositionPrixDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get demandePartageCourse(): Prisma.DemandePartageCourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get participantCourse(): Prisma.ParticipantCourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paiement(): Prisma.PaiementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get positionChauffeur(): Prisma.PositionChauffeurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get modeSecurite(): Prisma.ModeSecuriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get enregistrementAudio(): Prisma.EnregistrementAudioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transcriptionAudio(): Prisma.TranscriptionAudioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get analyseSecurite(): Prisma.AnalyseSecuriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get alerteSecurite(): Prisma.AlerteSecuriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evaluationChauffeur(): Prisma.EvaluationChauffeurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evaluationClient(): Prisma.EvaluationClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get administrateur(): Prisma.AdministrateurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journalAudit(): Prisma.JournalAuditDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tarification(): Prisma.TarificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
