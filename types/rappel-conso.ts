export interface RappelConsoApiResponse {
  total_count?: number;
  links?: Link[];
  records?: RecordElement[];
}

export interface Link {
  rel?: string;
  href?: string;
}

export interface RecordElement {
  links?: Link[];
  record?: RecordRecord;
}

export interface RecordRecord {
  id?: string;
  timestamp?: Date;
  size?: number;
  fields?: Fields;
}

export interface Fields {
  reference_fiche?: string;
  ndeg_de_version?: number;
  nature_juridique_du_rappel?: string;
  categorie_de_produit?: string;
  sous_categorie_de_produit?: string;
  nom_de_la_marque_du_produit?: string;
  noms_des_modeles_ou_references?: string;
  identification_des_produits?: string;
  conditionnements?: null | string;
  date_debut_fin_de_commercialisation?: string;
  temperature_de_conservation?: null | string;
  marque_de_salubrite?: null | string;
  informations_complementaires?: null | string;
  zone_geographique_de_vente?: string;
  distributeurs?: string;
  motif_du_rappel?: string;
  risques_encourus_par_le_consommateur?: string;
  preconisations_sanitaires?: null | string;
  description_complementaire_du_risque?: null | string;
  conduites_a_tenir_par_le_consommateur?: string;
  numero_de_contact?: null | string;
  modalites_de_compensation?: string;
  date_de_fin_de_la_procedure_de_rappel?: string;
  informations_complementaires_publiques?: null | string;
  liens_vers_les_images?: string;
  lien_vers_la_liste_des_produits?: null | string;
  lien_vers_la_liste_des_distributeurs?: null | string;
  lien_vers_affichette_pdf?: string;
  lien_vers_la_fiche_rappel?: string;
  rappelguid?: string;
  date_de_publication?: Date;
}
