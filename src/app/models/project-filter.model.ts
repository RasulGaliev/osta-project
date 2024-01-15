export interface ProjectFilterModel {
  developments: DevelopmentFilterModel[];
  compatibilityMin: number;
  compatibilityMax: number;
}
export interface DevelopmentFilterModel {
  id: number;
  name: string;
}
