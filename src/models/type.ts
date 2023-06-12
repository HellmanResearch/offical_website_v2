export interface bucketCapacityTrendType {
  bucketName: string;
  capacities: Array<{ time: number; value: string }>;
}
