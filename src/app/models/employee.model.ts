export interface Employee {
  id: number;   // not optional anymore
  name: string;
  department: string;
  salary: number;
   createdAt?: Date;      // auto-filled by backend
  updatedAt?: Date;      // auto-filled by backend
}
