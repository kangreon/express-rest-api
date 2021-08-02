export interface RestApplication<T> {
  create(record: T): Promise<T>;
  read(recordId: T): Promise<T>;
  update(recordId: number, record: T): Promise<T>;
  delete(recordId: number): Promise<void>;
  list(): Promise<T[]>
}
