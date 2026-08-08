import { SearchPaginationQueryDto } from '../../common/dto/search-pagination-query.dto';
export declare class UpdateDriverProfileDto {
    nom?: string;
    prenom?: string;
    telephone?: string;
}
export declare class UpdateDriverOnlineDto {
    estEnLigne: boolean;
}
export declare class UpdateDriverStatusDto {
    statut: string;
    motifStatut?: string;
}
export declare class DriversQueryDto extends SearchPaginationQueryDto {
    statut?: string;
    estEnLigne?: boolean;
}
